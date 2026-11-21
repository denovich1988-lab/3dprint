'use client';
// Image → 3D: relief, lithophane and logo/stamp modes. SVG → extruded solid.
import * as THREE from 'three';

export type ImageMode = 'relief' | 'lithophane' | 'stamp';
export type ImageOptions = {
  mode: ImageMode;
  widthMM: number;      // size of the longer side
  baseMM: number;       // solid base under the relief
  heightMM: number;     // max raised height
  invert: boolean;
  resolution: number;   // samples along the longer side
  threshold: number;    // 0-255, stamp mode
};

export const IMAGE_DEFAULTS: Record<ImageMode, ImageOptions> = {
  relief: { mode: 'relief', widthMM: 100, baseMM: 1.5, heightMM: 4, invert: false, resolution: 220, threshold: 128 },
  lithophane: { mode: 'lithophane', widthMM: 100, baseMM: 0.8, heightMM: 2.4, invert: true, resolution: 300, threshold: 128 },
  stamp: { mode: 'stamp', widthMM: 60, baseMM: 2, heightMM: 3, invert: false, resolution: 300, threshold: 128 },
};

export async function imageToBitmap(file: File | Blob) {
  const bmp = await createImageBitmap(file);
  return bmp;
}

export function sampleLuma(bmp: ImageBitmap, resolution: number) {
  const scale = resolution / Math.max(bmp.width, bmp.height);
  const w = Math.max(2, Math.round(bmp.width * Math.min(1, scale) || 2));
  const h = Math.max(2, Math.round(bmp.height * Math.min(1, scale) || 2));
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(bmp, 0, 0, w, h);
  const d = ctx.getImageData(0, 0, w, h).data;
  const l = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const a = d[i * 4 + 3] / 255;
    const y = 0.2126 * d[i * 4] + 0.7152 * d[i * 4 + 1] + 0.0722 * d[i * 4 + 2];
    l[i] = (y * a + 255 * (1 - a)) / 255; // transparent = white
  }
  return { w, h, l };
}

export function heightmapToMesh(bmp: ImageBitmap, o: ImageOptions) {
  const { w, h, l } = sampleLuma(bmp, o.resolution);
  const step = o.widthMM / (Math.max(w, h) - 1);
  const H = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    let t = 1 - l[i]; // dark = high by default
    if (o.mode === 'stamp') t = l[i] * 255 < o.threshold ? 1 : 0;
    if (o.mode === 'lithophane') t = o.invert ? 1 - l[i] : l[i];
    else if (o.invert) t = 1 - t;
    H[i] = o.baseMM + t * o.heightMM;
  }
  const n = w * h;
  const pos = new Float32Array(n * 2 * 3);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const k = j * w + i;
    const x = i * step, y = (h - 1 - j) * step;
    pos.set([x, y, H[k]], k * 3);
    pos.set([x, y, 0], (n + k) * 3);
  }
  const idx: number[] = [];
  for (let j = 0; j < h - 1; j++) for (let i = 0; i < w - 1; i++) {
    const a = j * w + i, b = a + 1, c = a + w, d = c + 1;
    idx.push(a, c, b, b, c, d);                 // top (facing +z; y grows upward as j decreases)
    idx.push(n + a, n + b, n + c, n + b, n + d, n + c); // bottom
  }
  const wall = (p: number, q: number) => idx.push(p, n + p, q, q, n + p, n + q);
  for (let i = 0; i < w - 1; i++) { wall(i + 1, i); wall((h - 1) * w + i, (h - 1) * w + i + 1); }
  for (let j = 0; j < h - 1; j++) { wall(j * w, (j + 1) * w); wall((j + 1) * w + w - 1, j * w + w - 1); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(idx);
  if (o.mode === 'lithophane') {
    // lithophanes print standing up: image in the XZ plane, thickness along -Y
    g.rotateX(Math.PI / 2);
  }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: o.mode === 'lithophane' ? 0xf4efe6 : 0xc9ced6, roughness: 0.7 }));
  m.name = o.mode === 'lithophane' ? 'Lithophane' : 'Relief';
  return m;
}

export async function svgToMesh(text: string, depthMM = 3, widthMM = 80) {
  const { SVGLoader } = await import('three/examples/jsm/loaders/SVGLoader.js');
  const data = new SVGLoader().parse(text);
  const group = new THREE.Group();
  const geos: THREE.BufferGeometry[] = [];
  for (const path of data.paths) {
    const style: any = (path as any).userData?.style || {};
    if (style.fill === 'none' && style.stroke && style.stroke !== 'none') {
      for (const sub of path.subPaths) {
        const sg = SVGLoader.pointsToStroke(sub.getPoints(), style);
        if (sg) geos.push(sg);
      }
      continue;
    }
    for (const shape of path.toShapes()) {
      geos.push(new THREE.ExtrudeGeometry(shape, { depth: depthMM, bevelEnabled: false, curveSegments: 12 }));
    }
  }
  if (!geos.length) throw new Error('No filled shapes were found in this SVG.');
  // Measure 2D extent to scale to the requested width.
  const box = new THREE.Box3();
  geos.forEach((g) => { g.computeBoundingBox(); box.union(g.boundingBox!); });
  const size = box.getSize(new THREE.Vector3());
  const s = widthMM / Math.max(size.x, size.y || 1);
  for (const g0 of geos) {
    let g = g0.index ? g0.toNonIndexed() : g0;
    if (g.attributes.position.array.length && (g as any).type === 'BufferGeometry' && !(g0 as any).parameters) {
      // stroke geometry is flat; give it thickness by extruding along z
      g = thickenFlat(g, depthMM / s);
    }
    g.translate(-box.min.x, -box.max.y, 0);
    g.scale(s, -s, s);
    // mirroring Y flips winding; swap two vertices per triangle to restore it
    const p = g.attributes.position.array as Float32Array;
    for (let i = 0; i < p.length; i += 9) for (let k = 0; k < 3; k++) { const t = p[i + 3 + k]; p[i + 3 + k] = p[i + 6 + k]; p[i + 6 + k] = t; }
    g.deleteAttribute('normal');
    g.computeVertexNormals();
    group.add(new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xc9ced6, roughness: 0.6 })));
  }
  group.name = 'SVG extrusion';
  return group;
}

function thickenFlat(g: THREE.BufferGeometry, depth: number) {
  const p = g.attributes.position.array as Float32Array;
  const out: number[] = [];
  for (let i = 0; i < p.length; i += 9) {
    const t = [[p[i], p[i + 1]], [p[i + 3], p[i + 4]], [p[i + 6], p[i + 7]]];
    out.push(t[0][0], t[0][1], depth, t[1][0], t[1][1], depth, t[2][0], t[2][1], depth);
    out.push(t[0][0], t[0][1], 0, t[2][0], t[2][1], 0, t[1][0], t[1][1], 0);
  }
  const ng = new THREE.BufferGeometry();
  ng.setAttribute('position', new THREE.Float32BufferAttribute(out, 3));
  return ng;
}
