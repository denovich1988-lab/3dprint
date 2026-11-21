// Copies the static export to dist/ and writes llms.txt.
import fs from 'node:fs';
import path from 'node:path';
const out = 'out', dist = 'dist';
fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(out, dist, { recursive: true });
const site = (process.env.SITE_URL || 'https://my3dprinter.io').replace(/\/$/, '');
const urls = [];
const walk = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f === 'index.html') urls.push('/' + path.relative(dist, d).replace(/\\/g, '/') + (d === dist ? '' : '/')); } };
walk(dist);
const title = (u) => { const h = fs.readFileSync(path.join(dist, u, 'index.html'), 'utf8'); const m = h.match(/<title>([^<]+)<\/title>/); return m ? m[1].replace(/ \| my3dprinter\.io$/, '').replace(/&amp;/g, '&') : u; };
const lines = ['# my3dprinter.io', '', '> Free in-browser 3D model viewers and converters (STL, 3MF, STEP, OBJ, GLB, FBX, PLY, USDZ, G-code), image-to-STL and lithophane tools, DDS texture converters, and independent 3D printer guides. Files are processed on the user’s device and never uploaded.', ''];
for (const u of urls.sort()) if (u !== '//' && !u.includes('_placeholder') && !u.startsWith('/404')) lines.push(`- [${title(u)}](${site}${u.replace(/^\/\//, '/')})`);
fs.writeFileSync(path.join(dist, 'llms.txt'), lines.join('\n') + '\n');
for (const p of ['blog/_placeholder', 'printers/_placeholder']) fs.rmSync(path.join(dist, p), { recursive: true, force: true });
console.log(`dist ready: ${urls.length} pages`);
