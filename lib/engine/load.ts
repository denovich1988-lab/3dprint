'use client';
// Loads a user file into a three.js scene graph. Everything runs in the browser.
import * as THREE from 'three';

export type Loaded = { object: THREE.Object3D; warnings: string[] };

export const MESH_INPUTS = ['stl', 'obj', 'glb', 'gltf', 'fbx', '3mf', 'ply', 'dae', '3ds', 'step', 'stp', 'iges', 'igs', 'brep', 'usdz', 'wrl', 'amf', 'off', 'gcode', 'zip'];

export function extOf(name: string) {
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : '';
}

const defaultMat = () => new THREE.MeshStandardMaterial({ color: 0xc9ced6, metalness: 0.05, roughness: 0.65 });

function fromGeometry(geo: THREE.BufferGeometry) {
  if (!geo.attributes.normal) geo.computeVertexNormals();
  return new THREE.Mesh(geo, defaultMat());
}

let occtPromise: Promise<any> | null = null;
function loadOcct() {
  if (!occtPromise) {
    occtPromise = new Promise((resolve, reject) => {
      const w = window as any;
      if (w.occtimportjs) return resolve(w.occtimportjs({ locateFile: (f: string) => '/occt/' + f }));
      const s = document.createElement('script');
      s.src = '/occt/occt-import-js.js';
      s.onload = () => resolve(w.occtimportjs({ locateFile: (f: string) => '/occt/' + f }));
      s.onerror = () => reject(new Error('Could not load the STEP reader.'));
      document.head.appendChild(s);
    });
  }
  return occtPromise;
}

async function loadCad(buf: ArrayBuffer, ext: string): Promise<THREE.Object3D> {
  const occt = await loadOcct();
  const data = new Uint8Array(buf);
  const params = { linearUnit: 'millimeter', linearDeflectionType: 'bounding_box_ratio', linearDeflection: 0.001, angularDeflection: 0.5 };
  const res = ext === 'step' || ext === 'stp' ? occt.ReadStepFile(data, params)
    : ext === 'iges' || ext === 'igs' ? occt.ReadIgesFile(data, params)
    : occt.ReadBrepFile(data, params);
  if (!res || !res.success) throw new Error('This CAD file could not be read. It may be damaged or use an unsupported variant.');
  const group = new THREE.Group();
  for (const m of res.meshes) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(m.attributes.position.array, 3));
    if (m.attributes.normal) geo.setAttribute('normal', new THREE.Float32BufferAttribute(m.attributes.normal.array, 3));
    if (m.index) geo.setIndex(new THREE.Uint32BufferAttribute(Uint32Array.from(m.index.array), 1));
    const mat = defaultMat();
    if (m.color) mat.color.setRGB(m.color[0], m.color[1], m.color[2]);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = m.name || 'Part';
    group.add(mesh);
  }
  return group;
}

function parseOFF(text: string) {
  const lines = text.split(/\r?\n/).map((l) => l.replace(/#.*/, '').trim()).filter(Boolean);
  let i = 0;
  if (/^C?N?OFF/i.test(lines[0])) i++;
  const [nv, nf] = lines[i++].split(/\s+/).map(Number);
  const pos: number[] = [];
  for (let v = 0; v < nv; v++) pos.push(...lines[i++].split(/\s+/).slice(0, 3).map(Number));
  const idx: number[] = [];
  for (let f = 0; f < nf; f++) {
    const p = lines[i++].split(/\s+/).map(Number);
    const n = p[0];
    for (let k = 2; k < n; k++) idx.push(p[1], p[k], p[k + 1]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g.toNonIndexed();
}

async function loadGcode(text: string): Promise<THREE.Object3D> {
  const { gcodeToMesh } = await import('./gcode');
  return gcodeToMesh(text);
}

export async function loadFile(file: File, extra: File[] = []): Promise<Loaded> {
  const ext = extOf(file.name);
  const warnings: string[] = [];
  const buf = await file.arrayBuffer();
  let object: THREE.Object3D;

  switch (ext) {
    case 'stl': {
      const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader.js');
      object = fromGeometry(new STLLoader().parse(buf));
      break;
    }
    case 'obj': {
      const { OBJLoader } = await import('three/examples/jsm/loaders/OBJLoader.js');
      object = new OBJLoader().parse(new TextDecoder().decode(buf));
      break;
    }
    case 'glb':
    case 'gltf': {
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const manager = new THREE.LoadingManager();
      const urls = new Map(extra.map((f) => [f.name, URL.createObjectURL(f)]));
      manager.setURLModifier((u) => {
        const name = decodeURIComponent(u.split('/').pop() || '');
        return urls.get(name) || u;
      });
      const gltf: any = await new Promise((res, rej) => new GLTFLoader(manager).parse(buf, '', res, rej));
      object = gltf.scene;
      if (ext === 'gltf' && /"uri"\s*:\s*"(?!data:)/.test(new TextDecoder().decode(buf.slice(0, 200000))) && !extra.length)
        warnings.push('This .gltf points to external .bin or texture files. Add them together with the .gltf to keep geometry and textures.');
      break;
    }
    case 'fbx': {
      const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader.js');
      object = new FBXLoader().parse(buf, '');
      break;
    }
    case '3mf': {
      const { ThreeMFLoader } = await import('three/examples/jsm/loaders/3MFLoader.js');
      object = new ThreeMFLoader().parse(buf);
      break;
    }
    case 'ply': {
      const { PLYLoader } = await import('three/examples/jsm/loaders/PLYLoader.js');
      const g = new PLYLoader().parse(buf);
      if (!g.index && g.attributes.position.count && !(g as any).groups?.length && g.attributes.position.count % 3 !== 0) warnings.push('This PLY looks like a point cloud. Point clouds have no surfaces to convert.');
      object = fromGeometry(g);
      if (g.attributes.color) ((object as THREE.Mesh).material as THREE.MeshStandardMaterial).vertexColors = true;
      break;
    }
    case 'dae': {
      const { ColladaLoader } = await import('three/examples/jsm/loaders/ColladaLoader.js');
      const c: any = new ColladaLoader().parse(new TextDecoder().decode(buf), '');
      object = c.scene;
      break;
    }
    case '3ds': {
      const { TDSLoader } = await import('three/examples/jsm/loaders/TDSLoader.js');
      object = new TDSLoader().parse(buf, '');
      break;
    }
    case 'usdz': {
      const { USDZLoader } = await import('three/examples/jsm/loaders/USDZLoader.js');
      object = new USDZLoader().parse(buf);
      break;
    }
    case 'wrl': {
      const { VRMLLoader } = await import('three/examples/jsm/loaders/VRMLLoader.js');
      object = new VRMLLoader().parse(new TextDecoder().decode(buf), '');
      break;
    }
    case 'amf': {
      const { AMFLoader } = await import('three/examples/jsm/loaders/AMFLoader.js');
      object = new AMFLoader().parse(buf);
      break;
    }
    case 'off':
      object = fromGeometry(parseOFF(new TextDecoder().decode(buf)));
      break;
    case 'step':
    case 'stp':
    case 'iges':
    case 'igs':
    case 'brep':
      object = await loadCad(buf, ext);
      break;
    case 'gcode':
    case 'gco':
      object = await loadGcode(new TextDecoder().decode(buf));
      warnings.push('G-code stores toolpaths, not the original model. The mesh is rebuilt from the printed lines, so it is an approximation.');
      break;
    case 'zip': {
      const { unzipSync } = await import('fflate');
      const files = unzipSync(new Uint8Array(buf));
      const names = Object.keys(files).filter((n) => !n.startsWith('__MACOSX'));
      const pick = names.find((n) => /\.(stl|obj|3mf|glb|ply|fbx|step|stp)$/i.test(n));
      if (!pick) throw new Error('No 3D model was found inside this ZIP.');
      const inner = new File([files[pick]], pick.split('/').pop()!);
      const r = await loadFile(inner);
      if (names.filter((n) => /\.(stl|obj|3mf|glb|ply|fbx|step|stp)$/i.test(n)).length > 1) r.warnings.push(`The ZIP holds several models. Converted: ${inner.name}.`);
      return r;
    }
    default:
      throw new Error(`.${ext || '?'} files are not supported here yet.`);
  }

  let meshes = 0;
  object.traverse((o: any) => { if (o.isMesh) meshes++; });
  if (!meshes) throw new Error('No surfaces were found in this file, so there is nothing to convert.');
  return { object, warnings };
}
