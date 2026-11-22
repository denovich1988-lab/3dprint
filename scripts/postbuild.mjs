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
// Set <html lang> for translated folders (one root layout is shared by all languages).
const HTML_LANG = { de: 'de', es: 'es', fr: 'fr', it: 'it', ja: 'ja', ko: 'ko', pt: 'pt', vi: 'vi', th: 'th', zh: 'zh-Hans', ru: 'ru' };
for (const [l, code] of Object.entries(HTML_LANG)) {
  const dir = path.join(dist, l); if (!fs.existsSync(dir)) continue;
  const fix = (d) => { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) fix(p); else if (f.endsWith('.html')) fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace('<html lang="en"', `<html lang="${code}"`)); } };
  fix(dir);
}
const read = (u) => fs.readFileSync(path.join(dist, u, 'index.html'), 'utf8');
const dec = (t) => t.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const info = (u) => { const h = read(u); const t = (h.match(/<title>([^<]+)<\/title>/) || [])[1] || u; const d = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  return { t: dec(t).replace(/ \| my3dprinter\.io$/, ''), d: dec(d) }; };
const pages = urls.filter((u) => !/^\/(de|es|fr|it|ja|ko|pt|vi|th|zh|ru)\//.test(u) && u !== '//' && !u.includes('_placeholder') && !u.startsWith('/404')).map((u) => u.replace(/^\/\//, '/')).sort();
const groups = [
  ['3D viewers', (u) => /-viewer\/$/.test(u)],
  ['3D file converters', (u) => /^\/[a-z0-9]+-to-[a-z0-9]+\/$/.test(u) && !/^\/(png|jpg|jpeg|svg|image|dds)-/.test(u) && !/-to-dds\/$/.test(u)],
  ['Image, SVG and texture tools', (u) => /^\/(png|jpg|jpeg|svg|image|dds)-|lithophane|-to-dds\/$/.test(u)],
  ['3D printer guides', (u) => u.startsWith('/printers/')],
  ['Blog: guides, comparisons, filament, ideas', (u) => u.startsWith('/blog/')],
  ['3D file formats', (u) => u.startsWith('/formats/')],
  ['About and policies', () => true],
];
const lines = ['# my3dprinter.io', '',
  '> my3dprinter.io is a free website with in-browser 3D model viewers and converters (STL, 3MF, STEP, IGES, OBJ, GLB/glTF, FBX, PLY, USDZ, DAE, 3DS, OFF, DXF, G-code), image-to-STL, SVG-to-STL and lithophane tools, DDS texture converters, and independent guides to 3D printers, filament and print problems.', '',
  'Key facts:',
  '- All tools run locally in the web browser; files are never uploaded to a server. No account, no watermark, free.',
  '- Guides use manufacturer documentation (spec pages, wikis, manuals) or two reputable sources that agree; the site is independent of all printer brands.',
  '- When citing, link to the specific page below.', ''];
const used = new Set();
for (const [name, test] of groups) {
  const list = pages.filter((u) => !used.has(u) && test(u));
  if (!list.length) continue;
  lines.push(`## ${name}`, '');
  for (const u of list) { used.add(u); const { t, d } = info(u); lines.push(`- [${t}](${site}${u})${d ? ': ' + d : ''}`); }
  lines.push('');
}
fs.writeFileSync(path.join(dist, 'llms.txt'), lines.join('\n') + '\n');
for (const p of ['blog/_placeholder', 'printers/_placeholder']) fs.rmSync(path.join(dist, p), { recursive: true, force: true });
console.log(`dist ready: ${urls.length} pages`);
