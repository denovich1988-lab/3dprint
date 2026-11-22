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


// ---------- helpers: build in Y-up, then bake to Z-up, centred, resting on Z=0 ----------
const M = (c: number, o: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
  new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0.05, ...o });
type V3 = [number, number, number];
function P(g: THREE.BufferGeometry, m: THREE.Material, pos: V3 = [0, 0, 0], rot: V3 = [0, 0, 0], sc: V3 = [1, 1, 1]) {
  const mesh = new THREE.Mesh(g, m);
  mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.scale.set(...sc);
  return mesh;
}
function rod(a: V3, b: V3, r: number, m: THREE.Material) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const dir = vb.clone().sub(va); const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 16), m);
  mesh.position.copy(va.add(vb).multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return mesh;
}
const lathe = (pts: [number, number][], seg = 64) => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg);
function bake(parts: THREE.Mesh[], name: string) {
  const grp = new THREE.Group();
  const box = new THREE.Box3();
  for (const p of parts) {
    p.updateMatrix();
    const g = p.geometry.clone().applyMatrix4(p.matrix);
    g.rotateX(Math.PI / 2);
    const mesh = new THREE.Mesh(g, p.material);
    g.computeBoundingBox(); box.union(g.boundingBox!);
    grp.add(mesh);
  }
  const c = box.getCenter(new THREE.Vector3());
  for (const ch of grp.children) (ch as THREE.Mesh).geometry.translate(-c.x, -c.y, -box.min.z);
  grp.name = name;
  return grp;
}

// ---------- Home ----------
export function mug() {
  const m = M(0xf2efe9, { roughness: 0.35 });
  const body = lathe([[0, 0], [31, 0], [32, 2], [32, 86], [29, 86], [29, 5], [0, 5]]);
  const handle = new THREE.TorusGeometry(19, 5, 16, 48, Math.PI);
  return bake([P(body, m), P(handle, m, [30, 44, 0], [0, 0, -Math.PI / 2])], 'Coffee mug');
}
export function phoneStand() {
  const s = new THREE.Shape();
  s.moveTo(0, 0); s.lineTo(80, 0); s.lineTo(80, 6); s.lineTo(22, 6); s.lineTo(22, 18); s.lineTo(16, 18); s.lineTo(16, 6);
  s.lineTo(10, 6); s.lineTo(52, 82); s.lineTo(46, 85); s.lineTo(0, 6); s.lineTo(0, 0);
  const g = new THREE.ExtrudeGeometry(s, { depth: 70, bevelEnabled: true, bevelThickness: 1, bevelSize: 1, bevelSegments: 2 });
  return bake([P(g, M(0x4b5563))], 'Phone stand');
}
export function lamp() {
  const base = lathe([[0, 0], [34, 0], [34, 4], [24, 10], [6, 12], [0, 12]]);
  const shade = lathe([[36, 0], [22, 50], [21, 50], [35, 0]], 72);
  const gold = M(0xc9a227, { metalness: 0.5, roughness: 0.35 });
  return bake([P(base, gold), rod([0, 10, 0], [0, 110, 0], 3, gold), P(shade, M(0xf6e7c8, { side: THREE.DoubleSide }), [0, 90, 0])], 'Table lamp');
}

// ---------- Toys ----------
export function duck() {
  const y = M(0xffc83d), o = M(0xf28c28), k = M(0x111111);
  return bake([
    P(new THREE.SphereGeometry(30, 48, 32), y, [0, 28, 0], [0, 0, 0], [1.3, 0.85, 1]),
    P(new THREE.SphereGeometry(18, 40, 28), y, [18, 62, 0]),
    P(new THREE.ConeGeometry(12, 30, 24), y, [-40, 40, 0], [0, 0, Math.PI / 2.6]),
    P(new THREE.SphereGeometry(9, 24, 16), o, [36, 59, 0], [0, 0, 0], [1.4, 0.45, 1]),
    P(new THREE.SphereGeometry(3, 16, 12), k, [28, 68, 9]),
    P(new THREE.SphereGeometry(3, 16, 12), k, [28, 68, -9]),
  ], 'Rubber duck');
}
export function robot() {
  const b = M(0x6b8fb5, { metalness: 0.3, roughness: 0.4 }), d = M(0x2b3440), r = M(0xe8590c), w = M(0xdff3ff, { emissive: 0x3aa0ff, emissiveIntensity: 0.4 });
  const box = (x: number, y: number, z: number) => new THREE.BoxGeometry(x, y, z);
  return bake([
    P(box(13, 22, 16), d, [-10, 11, 0]), P(box(13, 22, 16), d, [10, 11, 0]),
    P(box(42, 44, 28), b, [0, 44, 0]),
    P(box(16, 10, 2), r, [0, 50, 14.5]),
    P(box(10, 34, 10), d, [-27, 46, 0]), P(box(10, 34, 10), d, [27, 46, 0]),
    P(box(32, 26, 26), b, [0, 81, 0]),
    P(new THREE.CylinderGeometry(4, 4, 3, 20), w, [-7, 83, 13.5], [Math.PI / 2, 0, 0]),
    P(new THREE.CylinderGeometry(4, 4, 3, 20), w, [7, 83, 13.5], [Math.PI / 2, 0, 0]),
    rod([0, 94, 0], [0, 104, 0], 1.6, d), P(new THREE.SphereGeometry(4, 16, 12), r, [0, 106, 0]),
  ], 'Toy robot');
}
export function rocket() {
  const wht = M(0xf4f4f4), red = M(0xd9363e), blu = M(0x7cc7ff, { metalness: 0.2, roughness: 0.2 });
  const body = lathe([[0, 0], [14, 0], [18, 10], [20, 40], [19, 70], [14, 92], [7, 104], [0, 110]]);
  const fin = () => { const s = new THREE.Shape(); s.moveTo(0, 0); s.lineTo(18, -4); s.lineTo(14, 22); s.lineTo(0, 34); s.lineTo(0, 0);
    return new THREE.ExtrudeGeometry(s, { depth: 3, bevelEnabled: false }); };
  const fins = [0, 1, 2].map((i) => { const a = (i / 3) * Math.PI * 2; const m = P(fin(), red, [Math.cos(a) * 17, 4, Math.sin(a) * 17], [0, -a, 0]); return m; });
  return bake([P(body, wht), ...fins,
    P(new THREE.TorusGeometry(7, 1.6, 12, 32), red, [0, 66, 19.3]),
    P(new THREE.SphereGeometry(6.5, 24, 16), blu, [0, 66, 17.5], [0, 0, 0], [1, 1, 0.5]),
    P(new THREE.ConeGeometry(7.5, 14, 32), red, [0, 107, 0]),
  ], 'Toy rocket');
}
export function teddy() {
  const b = M(0xa8743f, { roughness: 0.8 }), l = M(0xe3c19a, { roughness: 0.8 }), k = M(0x1a1a1a);
  const S = (r: number) => new THREE.SphereGeometry(r, 32, 24);
  return bake([
    P(S(24), b, [0, 30, 0], [0, 0, 0], [1, 1.12, 0.9]),
    P(S(15), l, [0, 28, 13], [0, 0, 0], [1, 1.1, 0.5]),
    P(S(18), b, [0, 70, 0]),
    P(S(7), b, [-14, 84, 0]), P(S(7), b, [14, 84, 0]),
    P(S(4), l, [-14, 84, 3]), P(S(4), l, [14, 84, 3]),
    P(S(7.5), l, [0, 66, 15]), P(S(2.6), k, [0, 69, 22]),
    P(S(2.4), k, [-6, 75, 15]), P(S(2.4), k, [6, 75, 15]),
    P(S(9), b, [-24, 40, 4], [0, 0, 0], [1, 1.5, 1]), P(S(9), b, [24, 40, 4], [0, 0, 0], [1, 1.5, 1]),
    P(S(10), b, [-13, 9, 10], [0, 0, 0], [1, 0.9, 1.4]), P(S(10), b, [13, 9, 10], [0, 0, 0], [1, 0.9, 1.4]),
  ], 'Teddy bear');
}

// ---------- Football (generic, no real players or club badges) ----------
function figure(shirt: number, shorts: number, kick: boolean, extra: THREE.Mesh[] = []) {
  const skin = M(0xd9a27a), sock = M(0xf4f4f4), boot = M(0x1b1b1b), hair = M(0x2a1d14), base = M(0x2e7d32);
  const cap = (r: number, len: number) => new THREE.CapsuleGeometry(r, len, 6, 16);
  const parts: THREE.Mesh[] = [
    P(new THREE.CylinderGeometry(32, 34, 5, 48), base, [0, 2.5, 0]),
    P(cap(5, 30), sock, [-6, 24, 0]), P(new THREE.BoxGeometry(10, 6, 16), boot, [-6, 8, 3]),
    P(new THREE.CylinderGeometry(13.5, 12.5, 13, 32), M(shorts), [0, 50, 0]),
    P(new THREE.CylinderGeometry(14, 12.5, 32, 32), M(shirt), [0, 71, 0]),
    P(new THREE.SphereGeometry(14, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), M(shirt), [0, 86, 0], [0, 0, 0], [1, 0.35, 1]),
    P(cap(3.6, 22), skin, [-18, 72, 0], [0, 0, -0.35]), P(cap(3.6, 22), skin, [18, 72, 0], [0, 0, 0.35]),
    P(cap(4, 4), skin, [0, 92, 0]),
    P(new THREE.SphereGeometry(10, 32, 24), skin, [0, 103, 0]),
    P(new THREE.SphereGeometry(10.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2.2), hair, [0, 104, -0.5]),
  ];
  if (kick) parts.push(P(cap(5, 30), sock, [6, 30, 9], [-0.75, 0, 0]), P(new THREE.BoxGeometry(10, 6, 16), boot, [6, 17, 22], [-0.75, 0, 0]));
  else parts.push(P(cap(5, 30), sock, [6, 24, 0]), P(new THREE.BoxGeometry(10, 6, 16), boot, [6, 8, 3]));
  return [...parts, ...extra];
}
const ball = (r: number, pos: V3) => P(new THREE.IcosahedronGeometry(r, r > 20 ? 3 : 2), M(0xf8f8f8, { flatShading: true, roughness: 0.4 }), pos);
export function footballer() { return bake(figure(0xd62828, 0xf4f4f4, true, [ball(8, [6, 13, 36])]), 'Footballer figure'); }
export function goalkeeper() {
  const glove = M(0x9be22d);
  const g = figure(0x2b9348, 0x111111, false);
  g.push(P(new THREE.SphereGeometry(5, 16, 12), glove, [-23, 61, 0]), P(new THREE.SphereGeometry(5, 16, 12), glove, [23, 61, 0]));
  return bake(g, 'Goalkeeper figure');
}
export function football() { return bake([ball(34, [0, 34, 0])], 'Football'); }
export function trophy() {
  const gold = M(0xd4a017, { metalness: 0.75, roughness: 0.25 }), dark = M(0x2b2b2b);
  const cup = lathe([[0, 0], [8, 0], [8, 6], [4, 10], [4, 34], [10, 40], [24, 52], [30, 74], [31, 90], [28, 90], [27, 75], [0, 70]], 72);
  return bake([
    P(new THREE.BoxGeometry(48, 16, 48), dark, [0, 8, 0]),
    P(cup, gold, [0, 16, 0]),
    P(new THREE.TorusGeometry(12, 3, 12, 32, Math.PI * 1.2), gold, [-30, 86, 0], [0, 0, Math.PI * 0.4]),
    P(new THREE.TorusGeometry(12, 3, 12, 32, Math.PI * 1.2), gold, [30, 86, 0], [0, Math.PI, Math.PI * 0.4]),
  ], 'Trophy');
}

// ---------- Creators (generic streamer gear, no real people or brand logos) ----------
export function streamer() {
  const hood = M(0x7b2cbf), skin = M(0xd9a27a), dark = M(0x1f1f1f), led = M(0x00e5ff, { emissive: 0x00e5ff, emissiveIntensity: 0.6 });
  return bake([
    P(new THREE.BoxGeometry(60, 6, 40), dark, [0, 3, 0]),
    P(new THREE.CylinderGeometry(17, 24, 42, 40), hood, [0, 27, 0]),
    P(new THREE.TorusGeometry(15, 4, 12, 32), hood, [0, 47, -4], [Math.PI / 2, 0, 0]),
    P(new THREE.SphereGeometry(13, 32, 24), skin, [0, 62, 0]),
    P(new THREE.TorusGeometry(15, 2.2, 10, 40, Math.PI), dark, [0, 62, 0]),
    P(new THREE.CylinderGeometry(6.5, 6.5, 6, 24), dark, [-15, 61, 0], [0, 0, Math.PI / 2]),
    P(new THREE.CylinderGeometry(6.5, 6.5, 6, 24), dark, [15, 61, 0], [0, 0, Math.PI / 2]),
    P(new THREE.TorusGeometry(6.6, 0.9, 8, 24), led, [-18.2, 61, 0], [0, Math.PI / 2, 0]),
    P(new THREE.TorusGeometry(6.6, 0.9, 8, 24), led, [18.2, 61, 0], [0, Math.PI / 2, 0]),
    rod([-16, 57, 2], [-6, 53, 13], 1.2, dark), P(new THREE.SphereGeometry(2.6, 12, 10), dark, [-6, 53, 13]),
  ], 'Streamer figure');
}
export function gamepad() {
  const s = new THREE.Shape();
  s.moveTo(-28, 22); s.lineTo(28, 22);
  s.absarc(28, 0, 22, Math.PI / 2, -Math.PI / 2, true);
  s.lineTo(-28, -22);
  s.absarc(-28, 0, 22, -Math.PI / 2, -Math.PI * 1.5, true);
  const g = new THREE.ExtrudeGeometry(s, { depth: 14, bevelEnabled: true, bevelThickness: 3, bevelSize: 3, bevelSegments: 4, curveSegments: 32 });
  g.rotateX(-Math.PI / 2);
  const body = M(0x23262b, { roughness: 0.45 }), stick = M(0x555b63);
  const btn = (c: number, x: number, z: number) => P(new THREE.CylinderGeometry(3.4, 3.4, 4, 20), M(c), [x, 19, z]);
  return bake([
    P(g, body, [0, 3, 0]),
    P(new THREE.CylinderGeometry(6, 5, 8, 24), stick, [-24, 21, -6]), P(new THREE.CylinderGeometry(6, 5, 8, 24), stick, [12, 21, 8]),
    P(new THREE.BoxGeometry(14, 4, 4.5), stick, [-12, 19, 8]), P(new THREE.BoxGeometry(4.5, 4, 14), stick, [-12, 19, 8]),
    btn(0x2fbf71, 30, 1), btn(0xe5484d, 37, -6), btn(0x3a8dde, 23, -6), btn(0xf5c518, 30, -13),
  ], 'Game controller');
}
export function podcastMic() {
  const dark = M(0x2a2a2e, { metalness: 0.3 }), grill = M(0xb8bcc2, { metalness: 0.7, roughness: 0.3 });
  const rings = [0, 1, 2, 3, 4].map((i) => P(new THREE.TorusGeometry(14.2, 0.9, 8, 40), grill, [0, 92 + i * 6, 0], [Math.PI / 2, 0, 0]));
  return bake([
    P(new THREE.CylinderGeometry(26, 28, 6, 48), dark, [0, 3, 0]),
    rod([0, 6, 0], [0, 70, 0], 3, dark),
    P(new THREE.TorusGeometry(17, 2.2, 10, 40, Math.PI), dark, [0, 90, 0], [0, 0, Math.PI]),
    P(new THREE.CapsuleGeometry(14, 30, 8, 32), dark, [0, 100, 0]),
    ...rings,
  ], 'Podcast microphone');
}
export function ringLight() {
  const dark = M(0x222222), white = M(0xffffff, { emissive: 0xfff6e0, emissiveIntensity: 0.7 });
  return bake([
    P(new THREE.CylinderGeometry(24, 26, 5, 48), dark, [0, 2.5, 0]),
    rod([0, 5, 0], [0, 92, 0], 2.6, dark),
    P(new THREE.TorusGeometry(34, 5, 20, 72), white, [0, 128, 0]),
    rod([0, 92, 0], [0, 128, 0], 1.8, dark),
    P(new THREE.BoxGeometry(24, 44, 3), dark, [0, 128, 3]),
  ], 'Ring light');
}

export type Sample = { id: string; label: string; make: () => THREE.Object3D };
export const SAMPLE_GROUPS: { id: string; label: string; items: Sample[] }[] = [
  { id: 'home', label: 'For the home', items: [
    { id: 'vase', label: 'Vase', make: twistedVase },
    { id: 'planter', label: 'Planter', make: lowPolyPlanter },
    { id: 'mug', label: 'Mug', make: mug },
    { id: 'lamp', label: 'Lamp', make: lamp },
    { id: 'phone-stand', label: 'Phone stand', make: phoneStand },
    { id: 'gear', label: 'Gear', make: () => gear() },
  ] },
  { id: 'toys', label: 'Toys', items: [
    { id: 'duck', label: 'Duck', make: duck },
    { id: 'robot', label: 'Robot', make: robot },
    { id: 'rocket', label: 'Rocket', make: rocket },
    { id: 'teddy', label: 'Teddy bear', make: teddy },
  ] },
  { id: 'football', label: 'Football', items: [
    { id: 'footballer', label: 'Striker', make: footballer },
    { id: 'goalkeeper', label: 'Goalkeeper', make: goalkeeper },
    { id: 'football', label: 'Ball', make: football },
    { id: 'trophy', label: 'Trophy', make: trophy },
  ] },
  { id: 'creators', label: 'Creators', items: [
    { id: 'streamer', label: 'Streamer', make: streamer },
    { id: 'gamepad', label: 'Controller', make: gamepad },
    { id: 'podcast-mic', label: 'Podcast mic', make: podcastMic },
    { id: 'ring-light', label: 'Ring light', make: ringLight },
  ] },
];
export const SAMPLES: Sample[] = SAMPLE_GROUPS.flatMap((g) => g.items);
