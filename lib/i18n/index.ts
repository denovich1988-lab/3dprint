// Site languages (same set as meshy.ai). English is the source; other dictionaries fall back to English per key.
import en from './en.json';
import { TOOLS } from '../data/tools';
import de from './de.json'; import es from './es.json'; import fr from './fr.json'; import it from './it.json'; import ja from './ja.json';
import ko from './ko.json'; import pt from './pt.json'; import vi from './vi.json'; import th from './th.json'; import zh from './zh.json'; import ru from './ru.json';

export const LOCALES = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'vi', 'th', 'zh', 'ru'] as const;
export type Lang = (typeof LOCALES)[number];
export const OTHER_LOCALES = LOCALES.filter((l) => l !== 'en') as Exclude<Lang, 'en'>[];
export const LANG_NAMES: Record<Lang, string> = { en: 'English', de: 'Deutsch', es: 'Español', fr: 'Français', it: 'Italiano', ja: '日本語', ko: '한국어', pt: 'Português', vi: 'Tiếng Việt', th: 'ไทย', zh: '简体中文', ru: 'Русский' };
export const HTML_LANG: Record<Lang, string> = { en: 'en', de: 'de', es: 'es', fr: 'fr', it: 'it', ja: 'ja', ko: 'ko', pt: 'pt', vi: 'vi', th: 'th', zh: 'zh-Hans', ru: 'ru' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', de: 'de_DE', es: 'es_ES', fr: 'fr_FR', it: 'it_IT', ja: 'ja_JP', ko: 'ko_KR', pt: 'pt_BR', vi: 'vi_VN', th: 'th_TH', zh: 'zh_CN', ru: 'ru_RU' };

type D = typeof en;
const RAW: Record<Lang, any> = { en, de, es, fr, it, ja, ko, pt, vi, th, zh, ru };
const merge = (base: any, over: any): any => {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base) || typeof base !== 'object') return over;
  const out: any = { ...base };
  for (const k of Object.keys(over)) out[k] = k in base ? merge(base[k], over[k]) : over[k];
  return out;
};
const cache: Partial<Record<Lang, D>> = {};
export const dict = (lang: Lang): D => (cache[lang] ||= lang === 'en' ? en : merge(en, RAW[lang]));
export const hasTranslation = (lang: Lang) => lang === 'en' || Object.keys(RAW[lang] || {}).length > 0;
export const fill = (s: string, v: Record<string, string | number> = {}) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));

/** Localised URL for an English path. Only localised sections get a prefix; everything else stays English. */
export const lp = (lang: Lang, path: string) => (lang === 'en' || !isLocalizedPath(path) ? path : `/${lang}${path}`);
export function isLocalizedPath(path: string) {
  if (path === '/' || path === '/converters/') return true;
  const m = path.match(/^\/([a-z0-9-]+)\/$/);
  return !!m && TOOL_SLUGS.has(m[1]);
}
const TOOL_SLUGS = new Set(TOOLS.map((t) => t.slug));
export const LOCALIZED_PATHS = ['/', '/converters/', ...TOOLS.map((t) => `/${t.slug}/`)];
export const activeLocales = () => LOCALES.filter((l) => hasTranslation(l));
