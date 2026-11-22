import type { Metadata } from 'next';
import { meta } from '../seo';
import { abs } from '../site';
import { tool } from '../data/tools';
import { activeLocales, dict, fill, HTML_LANG, lp, OG_LOCALE, type Lang } from './index';
import { toolText } from './tools';
import { TOOLS } from '../data/tools';

/** hreflang map for an English path that exists in every active language. */
export const languages = (enPath: string) => {
  const m: Record<string, string> = {};
  for (const l of activeLocales()) m[HTML_LANG[l]] = abs(lp(l, enPath));
  m['x-default'] = abs(enPath);
  return activeLocales().length > 1 ? m : undefined;
};

export function pageMeta(kind: 'home' | 'converters' | 'tool', lang: Lang, slug?: string): Metadata {
  const D = dict(lang);
  const base = { languages: undefined as Record<string, string> | undefined, locale: OG_LOCALE[lang] };
  if (kind === 'home') return meta({ ...base, title: D.home.title, description: D.home.description, path: lp(lang, '/'), languages: languages('/') });
  if (kind === 'converters') return meta({ ...base, title: D.converters.title, description: D.converters.description, path: lp(lang, '/converters/'), languages: languages('/converters/') });
  const t = tool(slug!)!;
  const tt = toolText(t, lang);
  return meta({ ...base, title: tt.title, description: tt.description, path: lp(lang, `/${slug}/`), languages: languages(`/${slug}/`) });
}
export const toolSlugs = () => TOOLS.map((t) => ({ slug: t.slug }));
export { fill };
