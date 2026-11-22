// Validates lib/i18n/<lang>.json against en.json: same keys and array lengths, same {placeholders}, no empty strings.
// Usage: node scripts/check-i18n.mjs [lang ...]   (exit 1 on problems)
import fs from 'node:fs';
const en = JSON.parse(fs.readFileSync('lib/i18n/en.json', 'utf8'));
const langs = process.argv.slice(2).length ? process.argv.slice(2) : ['de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'vi', 'th', 'zh', 'ru'];
const ph = (s) => (s.match(/\{\w+\}/g) || []).sort().join(',');
let bad = 0;
for (const l of langs) {
  let d; try { d = JSON.parse(fs.readFileSync(`lib/i18n/${l}.json`, 'utf8')); } catch (e) { console.log(`${l}: invalid JSON ${e.message}`); bad++; continue; }
  if (!Object.keys(d).length) { console.log(`${l}: empty (skipped, English only)`); continue; }
  const issues = [];
  let same = 0, total = 0;
  const walk = (a, b, p) => {
    if (typeof a === 'string') {
      total++;
      if (typeof b !== 'string' || !b.trim()) return issues.push(`${p}: missing`);
      if (ph(a) !== ph(b)) issues.push(`${p}: placeholders ${ph(a)} vs ${ph(b)}`);
      if (a === b && a.split(' ').length > 3 && !/^[A-Z0-9 .,/()×→–-]+$/.test(a)) same++;
      return;
    }
    if (Array.isArray(a)) { if (!Array.isArray(b) || b.length !== a.length) return issues.push(`${p}: array length`); return a.forEach((x, i) => walk(x, b[i], `${p}[${i}]`)); }
    if (a && typeof a === 'object') { if (!b || typeof b !== 'object') return issues.push(`${p}: missing object`); for (const k of Object.keys(a)) walk(a[k], b[k], `${p}.${k}`); }
  };
  walk(en, d, l);
  if (same > total * 0.05) issues.push(`${same}/${total} strings still identical to English`);
  console.log(`${l}: ${issues.length ? issues.length + ' issues' : 'ok'} (${total} strings)`);
  issues.slice(0, 15).forEach((i) => console.log('   ' + i));
  if (issues.length) bad++;
}
process.exit(bad ? 1 : 0);
