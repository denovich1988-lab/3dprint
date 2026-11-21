// Rebuilds a printable-looking mesh from G-code extrusion moves.
// Each extruding move becomes a thin rectangular bead (line width x layer height).
import * as THREE from 'three';

export function gcodeToMesh(text: string, lineWidth = 0.45) {
  let x = 0, y = 0, z = 0, e = 0;
  let absPos = true, absE = true;
  const segs: number[] = []; // x1,y1,x2,y2,z
  const zs = new Set<number>();
  const lines = text.split('\n');
  for (let raw of lines) {
    const sc = raw.indexOf(';');
    if (sc >= 0) raw = raw.slice(0, sc);
    raw = raw.trim().toUpperCase();
    if (!raw) continue;
    const cmd = raw.split(/\s+/)[0];
    if (cmd === 'G90') { absPos = true; absE = true; continue; }
    if (cmd === 'G91') { absPos = false; absE = false; continue; }
    if (cmd === 'M82') { absE = true; continue; }
    if (cmd === 'M83') { absE = false; continue; }
    const val = (k: string) => { const m = raw.match(new RegExp(k + '(-?[\\d.]+)')); return m ? parseFloat(m[1]) : undefined; };
    if (cmd === 'G92') { const ne = val('E'); if (ne !== undefined) e = ne; continue; }
    if (cmd !== 'G0' && cmd !== 'G1' && cmd !== 'G00' && cmd !== 'G01') continue;
    const nx = val('X'), ny = val('Y'), nz = val('Z'), ne = val('E');
    const tx = nx === undefined ? x : absPos ? nx : x + nx;
    const ty = ny === undefined ? y : absPos ? ny : y + ny;
    const tz = nz === undefined ? z : absPos ? nz : z + nz;
    let extruding = false;
    if (ne !== undefined) {
      const te = absE ? ne : e + ne;
      extruding = te > e + 1e-6;
      e = te;
    }
    if (extruding && (tx !== x || ty !== y) && tz === z) {
      segs.push(x, y, tx, ty, tz);
      zs.add(Math.round(tz * 1000) / 1000);
    }
    x = tx; y = ty; z = tz;
  }
  const n = segs.length / 5;
  if (!n) throw new Error('No printed (extruding) moves were found in this G-code.');
  if (n > 2_500_000) throw new Error('This G-code is too large to rebuild in the browser (over 2.5 million moves).');
  const zl = [...zs].sort((a, b) => a - b);
  let layer = 0.2;
  if (zl.length > 2) {
    const d: number[] = [];
    for (let i = 1; i < Math.min(zl.length, 50); i++) d.push(zl[i] - zl[i - 1]);
    d.sort((a, b) => a - b);
    layer = Math.max(0.04, Math.min(0.6, d[Math.floor(d.length / 2)]));
  }
  const pos = new Float32Array(n * 8 * 3);
  const idx = new Uint32Array(n * 36);
  const hw = lineWidth / 2;
  const faces = [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
  for (let i = 0; i < n; i++) {
    const x1 = segs[i * 5], y1 = segs[i * 5 + 1], x2 = segs[i * 5 + 2], y2 = segs[i * 5 + 3], zt = segs[i * 5 + 4];
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
    const px = (-dy / len) * hw, py = (dx / len) * hw;
    const zb = zt - layer;
    const v = [
      x1 + px, y1 + py, zb, x1 - px, y1 - py, zb, x2 - px, y2 - py, zb, x2 + px, y2 + py, zb,
      x1 + px, y1 + py, zt, x1 - px, y1 - py, zt, x2 - px, y2 - py, zt, x2 + px, y2 + py, zt,
    ];
    pos.set(v, i * 24);
    for (let k = 0; k < 36; k++) idx[i * 36 + k] = i * 8 + faces[k];
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0xe8590c, roughness: 0.7 }));
  mesh.name = 'G-code toolpath';
  return mesh;
}
