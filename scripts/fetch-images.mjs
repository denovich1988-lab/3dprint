// Downloads page illustrations (front matter `image: https://…`) into public/images/<dir>/<slug>.webp.
// Runs before `next build` (locally and in CI). Existing files are kept; failures only warn.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import sharp from 'sharp';

let ok = 0, skip = 0, fail = 0;
for (const dir of ['blog', 'printers']) {
  const src = path.join('content', dir);
  if (!fs.existsSync(src)) continue;
  for (const f of fs.readdirSync(src).filter((x) => x.endsWith('.md'))) {
    const { data } = matter(fs.readFileSync(path.join(src, f), 'utf8'));
    if (!data.image || !/^https:\/\//.test(data.image)) continue;
    const slug = data.slug || f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
    const out = path.join('public', 'images', dir, `${slug}.webp`);
    if (fs.existsSync(out)) { skip++; continue; }
    try {
      const res = await fetch(data.image);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.mkdirSync(path.dirname(out), { recursive: true });
      await sharp(buf).resize(1200, 675, { fit: 'cover' }).webp({ quality: 78 }).toFile(out);
      ok++;
    } catch (e) { fail++; console.warn(`image not fetched for ${dir}/${slug}: ${e.message}`); }
  }
}
console.log(`images: ${ok} downloaded, ${skip} already present, ${fail} failed`);
