'use client';
import * as THREE from 'three';

export const MESH_OUTPUTS = ['stl', 'obj', 'glb', 'gltf', 'ply', '3mf', 'usdz', 'dxf', 'off'] as const;
export type OutFormat = (typeof MESH_OUTPUTS)[number];

// Formats whose files are normally Y-up (glTF convention) vs Z-up (3D printing / CAD).
export const Y_UP = new Set(['glb', 'gltf', 'fbx', 'dae', 'usdz', 'obj', 'wrl']);
export const Z_UP = new Set(['stl', '3mf', 'ply', 'step', 'stp', 'iges', 'igs', 'brep', 'gcode', 'amf', 'off', 'dxf', '3ds']);

export type ExportOptions = {
  scale?: number;          // multiply all coordinates
  upAxis?: 'keep' | 'y-to-z' | 'z-to-y';
  stlAscii?: boolean;
  separate?: boolean;      // one file per object (zip)
  name?: string;
};

export function prepare(object: THREE.Object3D, o: ExportOptions) {
  const root = new THREE.Group();
  const inner = object.clone(true);
  root.add(inner);
  if (o.upAxis === 'y-to-z') root.rotation.x = Math.PI / 2;
  if (o.upAxis === 'z-to-y') root.rotation.x = -Math.PI / 2;
  const s = o.scale && o.scale > 0 ? o.scale : 1;
  root.scale.setScalar(s);
  root.updateMatrixWorld(true);
  return root;
}

type Part = { name: string; pos: Float32Array; idx: Uint32Array; color: THREE.Color };

// Flattens a scene into world-space triangle lists.
export function collectParts(root: THREE.Object3D): Part[] {
  root.updateMatrixWorld(true);
  const parts: Part[] = [];
  const v = new THREE.Vector3();
  root.traverse((o: any) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    const g: THREE.BufferGeometry = o.geometry;
    const p = g.attributes.position;
    const pos = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p as any, i).applyMatrix4(o.matrixWorld);
      pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    }
    let idx: Uint32Array;
    if (g.index) idx = Uint32Array.from(g.index.array as any);
    else { idx = new Uint32Array(p.count); for (let i = 0; i < p.count; i++) idx[i] = i; }
    // keep triangle winding correct when the transform mirrors the mesh
    if (o.matrixWorld.determinant() < 0) for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
    const mat = Array.isArray(o.material) ? o.material[0] : o.material;
    parts.push({ name: o.name || `Object ${parts.length + 1}`, pos, idx, color: mat?.color ? mat.color.clone() : new THREE.Color(0xcccccc) });
  });
  return parts;
}

export function countTriangles(object: THREE.Object3D) {
  let t = 0;
  object.traverse((o: any) => {
    if (o.isMesh && o.geometry?.attributes?.position) t += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3;
  });
  return Math.round(t);
}

function write3MF(parts: Part[]) {
  const esc = (s: string) => s.replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]!));
  const f = (n: number) => (Math.round(n * 1e5) / 1e5).toString();
  let objects = '';
  let items = '';
  let colors = '';
  parts.forEach((p, i) => {
    colors += `<base name="${esc(p.name)}" displaycolor="#${p.color.getHexString().toUpperCase()}FF"/>`;
  });
  parts.forEach((p, i) => {
    const id = i + 2;
    const vs: string[] = [];
    for (let k = 0; k < p.pos.length; k += 3) vs.push(`<vertex x="${f(p.pos[k])}" y="${f(p.pos[k + 1])}" z="${f(p.pos[k + 2])}"/>`);
    const ts: string[] = [];
    for (let k = 0; k < p.idx.length; k += 3) ts.push(`<triangle v1="${p.idx[k]}" v2="${p.idx[k + 1]}" v3="${p.idx[k + 2]}"/>`);
    objects += `<object id="${id}" name="${esc(p.name)}" type="model" pid="1" pindex="${i}"><mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh></object>`;
    items += `<item objectid="${id}"/>`;
  });
  const model = `<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Application">my3dprinter.io</metadata><resources><basematerials id="1">${colors}</basematerials>${objects}</resources><build>${items}</build></model>`;
  const ct = `<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`;
  return { model, ct, rels };
}

function writeDXF(parts: Part[]) {
  const out: string[] = ['0', 'SECTION', '2', 'ENTITIES'];
  const f = (n: number) => n.toFixed(6);
  for (const p of parts) {
    const layer = p.name.replace(/[^A-Za-z0-9_-]/g, '_').slice(0, 30) || '0';
    for (let k = 0; k < p.idx.length; k += 3) {
      const a = p.idx[k] * 3, b = p.idx[k + 1] * 3, c = p.idx[k + 2] * 3;
      out.push('0', '3DFACE', '8', layer,
        '10', f(p.pos[a]), '20', f(p.pos[a + 1]), '30', f(p.pos[a + 2]),
        '11', f(p.pos[b]), '21', f(p.pos[b + 1]), '31', f(p.pos[b + 2]),
        '12', f(p.pos[c]), '22', f(p.pos[c + 1]), '32', f(p.pos[c + 2]),
        '13', f(p.pos[c]), '23', f(p.pos[c + 1]), '33', f(p.pos[c + 2]));
    }
  }
  out.push('0', 'ENDSEC', '0', 'EOF');
  return out.join('\n');
}

function writeOFF(parts: Part[]) {
  let nv = 0, nf = 0;
  const vs: string[] = [], fs: string[] = [];
  for (const p of parts) {
    for (let k = 0; k < p.pos.length; k += 3) vs.push(`${p.pos[k]} ${p.pos[k + 1]} ${p.pos[k + 2]}`);
    for (let k = 0; k < p.idx.length; k += 3) fs.push(`3 ${p.idx[k] + nv} ${p.idx[k + 1] + nv} ${p.idx[k + 2] + nv}`);
    nv += p.pos.length / 3; nf += p.idx.length / 3;
  }
  return `OFF\n${nv} ${nf} 0\n${vs.join('\n')}\n${fs.join('\n')}\n`;
}

function standardize(root: THREE.Object3D) {
  root.traverse((o: any) => {
    if (!o.isMesh) return;
    const conv = (m: any) => {
      if (m && !m.isMeshStandardMaterial) {
        const s = new THREE.MeshStandardMaterial({ color: m.color || 0xcccccc, map: m.map || null });
        s.name = m.name;
        return s;
      }
      return m;
    };
    o.material = Array.isArray(o.material) ? o.material.map(conv) : conv(o.material);
  });
}

const MIME: Record<string, string> = {
  stl: 'model/stl', obj: 'text/plain', glb: 'model/gltf-binary', gltf: 'model/gltf+json', ply: 'application/octet-stream',
  '3mf': 'model/3mf', usdz: 'model/vnd.usdz+zip', dxf: 'image/vnd.dxf', off: 'text/plain', zip: 'application/zip',
};

async function exportOne(root: THREE.Object3D, fmt: OutFormat, o: ExportOptions): Promise<Uint8Array | string> {
  switch (fmt) {
    case 'stl': {
      const { STLExporter } = await import('three/examples/jsm/exporters/STLExporter.js');
      const r: any = new STLExporter().parse(root, { binary: !o.stlAscii });
      return typeof r === 'string' ? r : new Uint8Array(r.buffer);
    }
    case 'obj': {
      const { OBJExporter } = await import('three/examples/jsm/exporters/OBJExporter.js');
      return new OBJExporter().parse(root);
    }
    case 'glb':
    case 'gltf': {
      const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter.js');
      const r: any = await new GLTFExporter().parseAsync(root, { binary: fmt === 'glb' });
      return fmt === 'glb' ? new Uint8Array(r) : JSON.stringify(r);
    }
    case 'ply': {
      const { PLYExporter } = await import('three/examples/jsm/exporters/PLYExporter.js');
      const r: any = await new Promise((res) => new PLYExporter().parse(root, res, { binary: true }));
      return new Uint8Array(r);
    }
    case 'usdz': {
      const { USDZExporter } = await import('three/examples/jsm/exporters/USDZExporter.js');
      standardize(root);
      const r: any = await new USDZExporter().parseAsync(root as any);
      return new Uint8Array(r);
    }
    case '3mf': {
      const { zipSync, strToU8 } = await import('fflate');
      const { model, ct, rels } = write3MF(collectParts(root));
      return zipSync({ '[Content_Types].xml': strToU8(ct), '_rels/.rels': strToU8(rels), '3D/3dmodel.model': strToU8(model) }, { level: 6 });
    }
    case 'dxf':
      return writeDXF(collectParts(root));
    case 'off':
      return writeOFF(collectParts(root));
  }
}

export async function exportScene(object: THREE.Object3D, fmt: OutFormat, o: ExportOptions = {}): Promise<{ blob: Blob; fileName: string }> {
  const base = (o.name || 'model').replace(/\.[^.]+$/, '');
  const root = prepare(object, o);
  if (o.separate) {
    const meshes: THREE.Mesh[] = [];
    root.traverse((m: any) => { if (m.isMesh) meshes.push(m); });
    if (meshes.length > 1) {
      const { zipSync, strToU8 } = await import('fflate');
      const files: Record<string, Uint8Array> = {};
      const used = new Set<string>();
      for (const [i, m] of meshes.entries()) {
        const g = new THREE.Group();
        const c = new THREE.Mesh(m.geometry, m.material);
        c.applyMatrix4(m.matrixWorld);
        g.add(c);
        g.updateMatrixWorld(true);
        const data = await exportOne(g, fmt, o);
        let n = (m.name || `part-${i + 1}`).replace(/[^\w.-]+/g, '_');
        while (used.has(n)) n += '_';
        used.add(n);
        files[`${n}.${fmt}`] = typeof data === 'string' ? strToU8(data) : data;
      }
      return { blob: new Blob([zipSync(files) as BlobPart], { type: MIME.zip }), fileName: `${base}-${fmt}.zip` };
    }
  }
  const data = await exportOne(root, fmt, o);
  return { blob: new Blob([data as BlobPart], { type: MIME[fmt] || 'application/octet-stream' }), fileName: `${base}.${fmt}` };
}

export function boundsMM(object: THREE.Object3D) {
  // measure in the file's own coordinates, ignoring any display rotation applied by a parent
  object.updateWorldMatrix(true, true);
  const b = new THREE.Box3().setFromObject(object, true);
  if (object.parent) b.applyMatrix4(object.parent.matrixWorld.clone().invert());
  const s = b.getSize(new THREE.Vector3());
  return { x: s.x, y: s.y, z: s.z };
}

// Signed-volume sum; meaningful only for closed meshes.
export function meshVolume(object: THREE.Object3D) {
  let vol = 0;
  for (const p of collectParts(object)) {
    for (let k = 0; k < p.idx.length; k += 3) {
      const a = p.idx[k] * 3, b = p.idx[k + 1] * 3, c = p.idx[k + 2] * 3;
      const ax = p.pos[a], ay = p.pos[a + 1], az = p.pos[a + 2];
      const bx = p.pos[b], by = p.pos[b + 1], bz = p.pos[b + 2];
      const cx = p.pos[c], cy = p.pos[c + 1], cz = p.pos[c + 2];
      vol += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
    }
  }
  return Math.abs(vol);
}
