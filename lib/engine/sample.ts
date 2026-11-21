'use client';
// Procedural demo models (our own, no third-party assets). Units: millimetres, Z up.
import * as THREE from 'three';

const mat = (c: number) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0.05 });

export function twistedVase() {
  const seg = 160, rings = 120, H = 120;
  const pos: number[] = [];
  const idx: number[] = [];
  const radius = (t: number, a: number) => {
    const profile = 26 + 14 * Math.sin(Math.PI * (t * 0.85 + 0.1)) - 6 * t;
    return profile * (1 + 0.075 * Math.cos(9 * a + t * 5.5));
  };
  for (let j = 0; j <= rings; j++) {
    const t = j / rings;
    for (let i = 0; i < seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      const r = radius(t, a);
      pos.push(Math.cos(a) * r, Math.sin(a) * r, t * H);
    }
  }
  for (let j = 0; j < rings; j++) for (let i = 0; i < seg; i++) {
    const a = j * seg + i, b = j * seg + ((i + 1) % seg), c = a + seg, d = b + seg;
    idx.push(a, b, d, a, d, c);
  }
  // closed bottom
  const center = pos.length / 3;
  pos.push(0, 0, 0);
  for (let i = 0; i < seg; i++) idx.push(center, (i + 1) % seg, i);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat(0xe8590c));
  m.name = 'Twisted vase';
  return m;
}

export function gear(teeth = 18) {
  const shape = new THREE.Shape();
  const rOut = 30, rIn = 25.5, steps = teeth * 4;
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const phase = i % 4;
    const r = phase === 1 || phase === 2 ? rOut : rIn;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
  }
  const hole = new THREE.Path();
  hole.absarc(0, 0, 6, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2;
    const h = new THREE.Path();
    h.absarc(Math.cos(a) * 16, Math.sin(a) * 16, 4.2, 0, Math.PI * 2, true);
    shape.holes.push(h);
  }
  const g = new THREE.ExtrudeGeometry(shape, { depth: 8, bevelEnabled: true, bevelThickness: 0.8, bevelSize: 0.6, bevelSegments: 2, curveSegments: 24 });
  const m = new THREE.Mesh(g, mat(0x3a8dde));
  m.name = 'Gear';
  return m;
}

export function lowPolyPlanter() {
  const g = new THREE.CylinderGeometry(34, 24, 56, 9, 1, true);
  g.rotateX(Math.PI / 2);
  g.translate(0, 0, 28);
  const base = new THREE.CylinderGeometry(24, 24, 3, 9);
  base.rotateX(Math.PI / 2);
  base.translate(0, 0, 1.5);
  const grp = new THREE.Group();
  grp.add(new THREE.Mesh(g, mat(0x2fa37a)), new THREE.Mesh(base, mat(0x2fa37a)));
  (grp.children[0] as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: 0x2fa37a, roughness: 0.6, flatShading: true, side: THREE.DoubleSide });
  grp.name = 'Low-poly planter';
  return grp;
}

export const SAMPLES = [
  { id: 'vase', label: 'Vase', make: twistedVase },
  { id: 'gear', label: 'Gear', make: () => gear() },
  { id: 'planter', label: 'Planter', make: lowPolyPlanter },
];
