import type { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/data/tools';
import { FORMATS } from '@/lib/data/formats';
import { listDocs } from '@/lib/content';
import { abs } from '@/lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().slice(0, 10);
  return [
    { url: abs('/'), lastModified: now, priority: 1 },
    { url: abs('/converters/'), lastModified: now },
    { url: abs('/formats/'), lastModified: now },
    { url: abs('/guides/'), lastModified: now },
    { url: abs('/printers/'), lastModified: now },
    ...TOOLS.map((t) => ({ url: abs(`/${t.slug}/`), lastModified: now, priority: 0.9 })),
    ...FORMATS.filter((f) => f.kind !== 'archive').map((f) => ({ url: abs(`/formats/${f.id}/`), lastModified: now })),
    ...listDocs('guides').map((d) => ({ url: abs(`/guides/${d.slug}/`), lastModified: d.updated || d.date })),
    ...listDocs('printers').map((d) => ({ url: abs(`/printers/${d.slug}/`), lastModified: d.updated || d.date })),
    ...listDocs('pages').map((d) => ({ url: abs(`/${d.slug}/`), lastModified: d.updated || d.date, priority: 0.3 })),
  ];
}
