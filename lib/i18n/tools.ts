import type { Tool } from '../data/tools';
import { fmt, FORMATS, type Fmt } from '../data/formats';
import { dict, fill, type Lang } from './index';

export function toolText(t: Tool, lang: Lang) {
  if (lang === 'en') return { title: t.title, h1: t.h1, lead: t.lead, description: t.description, notes: t.notes };
  const D: any = dict(lang);
  const F = t.from ? fmt(t.from).name : '', T = t.to ? fmt(t.to).name : '';
  const sp = D.tool.special[t.slug] || {};
  let base: any;
  if (t.kind === 'mesh') base = Object.fromEntries(Object.entries(D.tool.mesh).map(([k, v]) => [k, fill(v as string, { F, T })]));
  else if (t.kind === 'viewer' && t.slug !== '3d-viewer') base = Object.fromEntries(Object.entries(D.tool.viewer).map(([k, v]) => [k, fill(v as string, { F, ext: t.from! })]));
  else base = {};
  const r = { ...base, ...sp };
  return { title: r.title || t.title, h1: r.h1 || t.h1, lead: r.lead || t.lead, description: r.description || t.description,
    notes: t.kind === 'mesh' ? (D.notes[`${t.from}-${t.to}`] as string[] | undefined) : undefined };
}

export function fmtText(id: string, lang: Lang): Fmt {
  const f = fmt(id);
  if (lang === 'en') return f;
  const tr = (dict(lang) as any).formats[id] || {};
  return { ...f, ...tr };
}
export const findFmt = (id: string | undefined, lang: Lang) => (id && FORMATS.some((f) => f.id === id) ? fmtText(id, lang) : undefined);
