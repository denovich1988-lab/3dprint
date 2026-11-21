'use client';
// DDS (DirectDraw Surface) read/write for game textures. Supports DXT1 (BC1), DXT5 (BC3) and uncompressed RGBA.

export type DdsFormat = 'dxt1' | 'dxt5' | 'rgba';

const DDSD = { CAPS: 0x1, HEIGHT: 0x2, WIDTH: 0x4, PITCH: 0x8, PIXELFORMAT: 0x1000, MIPMAPCOUNT: 0x20000, LINEARSIZE: 0x80000 };
const fourCC = (s: string) => s.charCodeAt(0) | (s.charCodeAt(1) << 8) | (s.charCodeAt(2) << 16) | (s.charCodeAt(3) << 24);

function rgb565(r: number, g: number, b: number) { return ((r >> 3) << 11) | ((g >> 2) << 5) | (b >> 3); }
function unpack565(c: number) {
  const r = (c >> 11) & 31, g = (c >> 5) & 63, b = c & 31;
  return [(r << 3) | (r >> 2), (g << 2) | (g >> 4), (b << 3) | (b >> 2)];
}

function encodeColorBlock(px: Uint8ClampedArray, out: DataView, o: number, dxt1Alpha: boolean) {
  let minR = 255, minG = 255, minB = 255, maxR = 0, maxG = 0, maxB = 0, transparent = false;
  for (let i = 0; i < 16; i++) {
    const r = px[i * 4], g = px[i * 4 + 1], b = px[i * 4 + 2];
    if (dxt1Alpha && px[i * 4 + 3] < 128) { transparent = true; continue; }
    if (r < minR) minR = r; if (g < minG) minG = g; if (b < minB) minB = b;
    if (r > maxR) maxR = r; if (g > maxG) maxG = g; if (b > maxB) maxB = b;
  }
  // inset the bounding box slightly for better quality
  const ir = (maxR - minR) >> 4, ig = (maxG - minG) >> 4, ib = (maxB - minB) >> 4;
  minR = Math.min(255, minR + ir); minG = Math.min(255, minG + ig); minB = Math.min(255, minB + ib);
  maxR = Math.max(0, maxR - ir); maxG = Math.max(0, maxG - ig); maxB = Math.max(0, maxB - ib);
  let c0 = rgb565(maxR, maxG, maxB), c1 = rgb565(minR, minG, minB);
  if (transparent) { if (c0 > c1) [c0, c1] = [c1, c0]; } else if (c0 < c1) [c0, c1] = [c1, c0]; else if (c0 === c1 && c0 > 0) c1 = c0 - 1;
  const p0 = unpack565(c0), p1 = unpack565(c1);
  const pal = transparent
    ? [p0, p1, p0.map((v, k) => (v + p1[k]) >> 1)]
    : [p0, p1, p0.map((v, k) => (2 * v + p1[k]) / 3), p0.map((v, k) => (v + 2 * p1[k]) / 3)];
  let bits = 0;
  for (let i = 0; i < 16; i++) {
    let sel = 0;
    if (transparent && px[i * 4 + 3] < 128) sel = 3;
    else {
      let best = 1e9;
      pal.forEach((c, k) => {
        const d = (px[i * 4] - c[0]) ** 2 + (px[i * 4 + 1] - c[1]) ** 2 + (px[i * 4 + 2] - c[2]) ** 2;
        if (d < best) { best = d; sel = k; }
      });
    }
    bits |= sel << (i * 2);
  }
  out.setUint16(o, c0, true); out.setUint16(o + 2, c1, true); out.setUint32(o + 4, bits >>> 0, true);
}

function encodeAlphaBlock(px: Uint8ClampedArray, out: DataView, o: number) {
  let a0 = 0, a1 = 255;
  for (let i = 0; i < 16; i++) { const a = px[i * 4 + 3]; if (a > a0) a0 = a; if (a < a1) a1 = a; }
  if (a0 === a1) { a1 = Math.max(0, a0 - 1); if (a0 === 0) { a0 = 1; a1 = 0; } }
  const pal = [a0, a1];
  for (let k = 1; k < 7; k++) pal.push(((7 - k) * a0 + k * a1) / 7);
  out.setUint8(o, a0); out.setUint8(o + 1, a1);
  let lo = 0, hi = 0;
  for (let i = 0; i < 16; i++) {
    let sel = 0, best = 1e9;
    pal.forEach((v, k) => { const d = Math.abs(px[i * 4 + 3] - v); if (d < best) { best = d; sel = k; } });
    const bit = i * 3;
    if (bit < 24) lo |= sel << bit; else hi |= sel << (bit - 24);
    if (bit < 24 && bit + 3 > 24) hi |= sel >> (24 - bit);
  }
  out.setUint8(o + 2, lo & 255); out.setUint8(o + 3, (lo >> 8) & 255); out.setUint8(o + 4, (lo >> 16) & 255);
  out.setUint8(o + 5, hi & 255); out.setUint8(o + 6, (hi >> 8) & 255); out.setUint8(o + 7, (hi >> 16) & 255);
}

function levelData(img: ImageData, fmt: DdsFormat) {
  const { width: w, height: h, data } = img;
  if (fmt === 'rgba') {
    const out = new Uint8Array(w * h * 4);
    for (let i = 0; i < w * h; i++) { out[i * 4] = data[i * 4 + 2]; out[i * 4 + 1] = data[i * 4 + 1]; out[i * 4 + 2] = data[i * 4]; out[i * 4 + 3] = data[i * 4 + 3]; }
    return out;
  }
  const bw = Math.max(1, Math.ceil(w / 4)), bh = Math.max(1, Math.ceil(h / 4));
  const bs = fmt === 'dxt1' ? 8 : 16;
  const out = new Uint8Array(bw * bh * bs);
  const dv = new DataView(out.buffer);
  const block = new Uint8ClampedArray(64);
  for (let by = 0; by < bh; by++) for (let bx = 0; bx < bw; bx++) {
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      const sx = Math.min(w - 1, bx * 4 + x), sy = Math.min(h - 1, by * 4 + y);
      const s = (sy * w + sx) * 4, d = (y * 4 + x) * 4;
      block[d] = data[s]; block[d + 1] = data[s + 1]; block[d + 2] = data[s + 2]; block[d + 3] = data[s + 3];
    }
    const o = (by * bw + bx) * bs;
    if (fmt === 'dxt5') { encodeAlphaBlock(block, dv, o); encodeColorBlock(block, dv, o + 8, false); }
    else encodeColorBlock(block, dv, o, true);
  }
  return out;
}

export async function imageToDds(file: Blob, fmt: DdsFormat, mipmaps: boolean): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const levels: Uint8Array[] = [];
  let w = bmp.width, h = bmp.height;
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  for (;;) {
    c.width = w; c.height = h;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(bmp, 0, 0, w, h);
    levels.push(levelData(ctx.getImageData(0, 0, w, h), fmt));
    if (!mipmaps || (w === 1 && h === 1)) break;
    w = Math.max(1, w >> 1); h = Math.max(1, h >> 1);
  }
  const header = new DataView(new ArrayBuffer(128));
  header.setUint32(0, fourCC('DDS '), true);
  header.setUint32(4, 124, true);
  let flags = DDSD.CAPS | DDSD.HEIGHT | DDSD.WIDTH | DDSD.PIXELFORMAT;
  flags |= fmt === 'rgba' ? DDSD.PITCH : DDSD.LINEARSIZE;
  if (levels.length > 1) flags |= DDSD.MIPMAPCOUNT;
  header.setUint32(8, flags, true);
  header.setUint32(12, bmp.height, true);
  header.setUint32(16, bmp.width, true);
  header.setUint32(20, fmt === 'rgba' ? bmp.width * 4 : levels[0].length, true);
  header.setUint32(28, levels.length, true);
  header.setUint32(76, 32, true);
  if (fmt === 'rgba') {
    header.setUint32(80, 0x41, true); // RGB | ALPHAPIXELS
    header.setUint32(88, 32, true);
    header.setUint32(92, 0x00ff0000, true); header.setUint32(96, 0x0000ff00, true);
    header.setUint32(100, 0x000000ff, true); header.setUint32(104, 0xff000000, true);
  } else {
    header.setUint32(80, 0x4, true); // FOURCC
    header.setUint32(84, fourCC(fmt === 'dxt1' ? 'DXT1' : 'DXT5'), true);
  }
  header.setUint32(108, 0x1000 | (levels.length > 1 ? 0x400008 : 0), true);
  return new Blob([header.buffer, ...levels.map((l) => l as BlobPart)], { type: 'image/vnd-ms.dds' });
}

function decodeBlockColor(dv: DataView, o: number, out: Uint8ClampedArray, w: number, h: number, bx: number, by: number, dxt1: boolean) {
  const c0 = dv.getUint16(o, true), c1 = dv.getUint16(o + 2, true), bits = dv.getUint32(o + 4, true);
  const p0 = unpack565(c0), p1 = unpack565(c1);
  const pal: number[][] = c0 > c1 || !dxt1
    ? [[...p0, 255], [...p1, 255], [...p0.map((v, k) => (2 * v + p1[k]) / 3), 255], [...p0.map((v, k) => (v + 2 * p1[k]) / 3), 255]]
    : [[...p0, 255], [...p1, 255], [...p0.map((v, k) => (v + p1[k]) / 2), 255], [0, 0, 0, 0]];
  for (let i = 0; i < 16; i++) {
    const x = bx * 4 + (i & 3), y = by * 4 + (i >> 2);
    if (x >= w || y >= h) continue;
    const c = pal[(bits >>> (i * 2)) & 3];
    const d = (y * w + x) * 4;
    out[d] = c[0]; out[d + 1] = c[1]; out[d + 2] = c[2]; if (dxt1) out[d + 3] = c[3];
  }
}

export async function ddsToImage(buf: ArrayBuffer, type = 'image/png'): Promise<{ blob: Blob; width: number; height: number; format: string }> {
  const dv = new DataView(buf);
  if (dv.getUint32(0, true) !== fourCC('DDS ')) throw new Error('This is not a DDS file.');
  const h = dv.getUint32(12, true), w = dv.getUint32(16, true);
  const pfFlags = dv.getUint32(80, true), cc = dv.getUint32(84, true);
  const bitCount = dv.getUint32(88, true);
  const out = new Uint8ClampedArray(w * h * 4);
  let o = 128, label = '';
  if (pfFlags & 0x4) {
    if (cc === fourCC('DX10')) throw new Error('This DDS uses the DX10 header (often BC7). That variant is not supported yet; DXT1, DXT3, DXT5 and uncompressed files work.');
    const t = cc === fourCC('DXT1') ? 1 : cc === fourCC('DXT3') ? 3 : cc === fourCC('DXT5') ? 5 : 0;
    if (!t) throw new Error('This DDS compression type is not supported yet.');
    label = 'DXT' + t;
    const bw = Math.ceil(w / 4), bh = Math.ceil(h / 4);
    for (let by = 0; by < bh; by++) for (let bx = 0; bx < bw; bx++) {
      if (t === 1) { decodeBlockColor(dv, o, out, w, h, bx, by, true); o += 8; continue; }
      const alpha = new Uint8Array(16);
      if (t === 3) {
        for (let i = 0; i < 8; i++) { const b = dv.getUint8(o + i); alpha[i * 2] = (b & 15) * 17; alpha[i * 2 + 1] = (b >> 4) * 17; }
      } else {
        const a0 = dv.getUint8(o), a1 = dv.getUint8(o + 1);
        const pal = [a0, a1];
        if (a0 > a1) for (let k = 1; k < 7; k++) pal.push(((7 - k) * a0 + k * a1) / 7);
        else { for (let k = 1; k < 5; k++) pal.push(((5 - k) * a0 + k * a1) / 5); pal.push(0, 255); }
        let bits = 0n;
        for (let i = 0; i < 6; i++) bits |= BigInt(dv.getUint8(o + 2 + i)) << BigInt(8 * i);
        for (let i = 0; i < 16; i++) alpha[i] = pal[Number((bits >> BigInt(3 * i)) & 7n)];
      }
      decodeBlockColor(dv, o + 8, out, w, h, bx, by, false);
      for (let i = 0; i < 16; i++) {
        const x = bx * 4 + (i & 3), y = by * 4 + (i >> 2);
        if (x < w && y < h) out[(y * w + x) * 4 + 3] = alpha[i];
      }
      o += 16;
    }
  } else if (bitCount === 32 || bitCount === 24) {
    label = 'Uncompressed';
    const rm = dv.getUint32(92, true), gm = dv.getUint32(96, true), bm = dv.getUint32(100, true), am = dv.getUint32(104, true);
    const shift = (m: number) => { let s = 0; if (!m) return 0; while (!((m >>> s) & 1)) s++; return s; };
    const bpp = bitCount / 8;
    for (let i = 0; i < w * h; i++) {
      const v = bpp === 4 ? dv.getUint32(o + i * 4, true) : dv.getUint8(o + i * 3) | (dv.getUint8(o + i * 3 + 1) << 8) | (dv.getUint8(o + i * 3 + 2) << 16);
      out[i * 4] = (v & rm) >>> shift(rm); out[i * 4 + 1] = (v & gm) >>> shift(gm); out[i * 4 + 2] = (v & bm) >>> shift(bm);
      out[i * 4 + 3] = am && pfFlags & 0x1 ? (v & am) >>> shift(am) : 255;
    }
  } else throw new Error('This DDS pixel format is not supported yet.');
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  c.getContext('2d')!.putImageData(new ImageData(out, w, h), 0, 0);
  const blob: Blob = await new Promise((r) => c.toBlob((b) => r(b!), type, 0.92));
  return { blob, width: w, height: h, format: label };
}
