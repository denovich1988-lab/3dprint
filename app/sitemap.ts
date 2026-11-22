import type { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/data/tools';
import { FORMATS } from '@/lib/data/formats';
import { listDocs } from '@/lib/content';
import { abs } from '@/lib/site';
import { activeLocales, HTML_LANG, LOCALIZED_PATHS, lp, OTHER_LOCALES } from '@/lib/i18n';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().slice(0, 10);
  const locs = activeLocales();
  const alt = (p: string) => (locs.length > 1 ? { alternates: { languages: Object.fromEntries([...locs.map((l) => [HTML_LANG[l], abs(lp(l, p))]), ['x-default', abs(p)]]) } } : {});
  const localized = OTHER_LOCALES.filter((l) => locs.includes(l)).flatMap((l) => LOCALIZED_PATHS.map((p) => ({ url: abs(lp(l, p)), lastModified: now, ...alt(p) })));
  const withAlt = (e: { url: string; [k: string]: any }) => { const p = e.url.replace(abs('/'), '/'); return LOCALIZED_PATHS.includes(p) ? { ...e, ...alt(p) } : e; };
  return [
    { url: abs('/'), lastModified: now, priority: 1 },
    { url: abs('/converters/'), lastModified: now },
    { url: abs('/formats/'), lastModified: now },
    { url: abs('/blog/'), lastModified: now },
    { url: abs('/printers/'), lastModified: now },
    { url: abs('/printers/compare/'), lastModified: now, priority: 0.8 },
    ...TOOLS.map((t) => ({ url: abs(`/${t.slug}/`), lastModified: now, priority: 0.9 })),
    ...FORMATS.filter((f) => f.kind !== 'archive').map((f) => ({ url: abs(`/formats/${f.id}/`), lastModified: now })),
    ...listDocs('blog').map((d) => ({ url: abs(`/blog/${d.slug}/`), lastModified: d.updated || d.date })),
    ...listDocs('printers').map((d) => ({ url: abs(`/printers/${d.slug}/`), lastModified: d.updated || d.date })),
    ...listDocs('pages').map((d) => ({ url: abs(`/${d.slug}/`), lastModified: d.updated || d.date, priority: 0.3 })),
  ].map(withAlt).concat(localized as any);
}
