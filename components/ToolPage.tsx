import Link from 'next/link';
import { Tool, TOOLS } from '@/lib/data/tools';
import { fmt } from '@/lib/data/formats';
import Studio from './Studio';
import ImageTo3D from './ImageTo3D';
import DdsTool from './DdsTool';
import JsonLd from './JsonLd';
import Faq from './Faq';
import { appLd, crumbs, faqLd, graph, howToLd } from '@/lib/seo';
import { dict, fill, lp, type Lang } from '@/lib/i18n';
import { toolText, findFmt } from '@/lib/i18n/tools';

export function toolFaq(t: Tool, lang: Lang = 'en'): { q: string; a: string }[] {
  const D = dict(lang).tool.faq;
  const F = findFmt(t.from, lang), T = findFmt(t.to, lang);
  const qa = ([q, a]: string[]) => ({ q, a });
  const base = [qa(D.free), qa(D.privacy)];
  if (t.kind === 'mesh') return [...base,
    { q: fill(D.lostQ, { F: F!.name, T: T!.name }), a: fill(D.lostA, { F: F!.name, T: T!.name, keeps: T!.keeps.replace(/\.$/, '') }) + (F!.notes ? ' ' + F!.notes : '') },
    ...D.mesh.map(qa)];
  if (t.kind === 'image') return [...base, { q: D.imageBestQ, a: t.mode === 'lithophane' ? D.imageBestLitho : D.imageBestOther }, ...D.image.map(qa)];
  if (t.kind === 'svg') return [...base, ...D.svg.map(qa)];
  if (t.kind === 'dds-encode' || t.kind === 'dds-decode') return [...base, ...D.dds.map(qa)];
  return [...base, ...D.viewer.map(qa)];
}

function steps(t: Tool, lang: Lang) {
  const S = dict(lang).tool.steps;
  const F = t.from ? fmt(t.from).name : '';
  const T = t.to ? fmt(t.to).name : '';
  const f = (arr: string[], v: Record<string, string>) => arr.map((s) => fill(s, v));
  if (t.kind === 'viewer') return f(S.viewer, { F: t.from ? F : S.viewerAny });
  if (t.kind === 'image') return f(S.image, { img: t.from === 'png' ? S.imgPng : S.imgJpg, T });
  if (t.kind === 'svg') return f(S.svg, { T });
  if (t.kind === 'dds-encode') return f(S.ddsEncode, { F });
  if (t.kind === 'dds-decode') return f(S.ddsDecode, { T });
  return f(S.mesh, { F, T });
}

export const shortName = (h1: string, lang: Lang) => h1.replace(new RegExp(dict(lang).common.converterSuffix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$'), '');

export default function ToolPage({ t, lang = 'en' }: { t: Tool; lang?: Lang }) {
  const D = dict(lang), X = D.tool;
  const tt = toolText(t, lang);
  const F = findFmt(t.from, lang), T = findFmt(t.to, lang);
  const faq = toolFaq(t, lang);
  const st = steps(t, lang);
  const path = `/${t.slug}/`;
  const L = (p: string) => lp(lang, p);
  const related = TOOLS.filter((x) => x.slug !== t.slug && (x.from === t.from || x.to === t.to || x.from === t.to) && x.kind === t.kind).slice(0, 12);
  const section = t.kind === 'viewer' ? { name: X.sectionViewers, path: '/3d-viewer/' } : { name: X.sectionConverters, path: '/converters/' };
  const labels = { studio: D.studio, image3d: D.image3d, dds: D.dds };

  return (
    <>
      <JsonLd data={graph(appLd(tt.h1, tt.description, L(path)), howToLd(fill(X.howTo, { name: tt.h1 }), st), faqLd(faq), crumbs([{ name: D.common.home, path: L('/') }, { name: section.name, path: L(section.path) }, { name: tt.h1, path: L(path) }]))} />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href={L('/')}>{D.common.home}</Link> / <Link href={L(section.path)}>{section.name}</Link> / {tt.h1}</nav>
        <header className="page-head">
          <h1>{tt.h1}</h1>
          <p className="lead">{tt.lead}</p>
        </header>
        {t.kind === 'mesh' && <Studio mode="convert" from={t.from} to={t.to} L={labels.studio} />}
        {t.kind === 'viewer' && <Studio mode="studio" from={t.from} L={labels.studio} />}
        {(t.kind === 'image' || t.kind === 'svg') && <ImageTo3D kind={t.kind} to={t.to} defaultMode={t.mode} L={labels.image3d} />}
        {t.kind === 'dds-encode' && <DdsTool direction="to-dds" L={labels.dds} />}
        {t.kind === 'dds-decode' && <DdsTool direction="from-dds" out={t.to as any} L={labels.dds} />}

        <section className="section" aria-labelledby="how-h">
          <h2 id="how-h">{X.howH}</h2>
          <ol className="steps">{st.map((s) => <li key={s}>{s}</li>)}</ol>
        </section>

        {(tt.notes?.length || (F && T)) && (
          <section className="section prose" aria-labelledby="about-h">
            <h2 id="about-h">{F && T ? fill(X.aboutPair, { F: F.name, T: T.name }) : fill(X.aboutFiles, { F: F?.name || X.about3d })}</h2>
            {tt.notes?.map((n) => <p key={n}>{n}</p>)}
            {F && <><h3>{fill(X.whatIs, { F: F.name })}</h3><p>{F.what}{F.kind !== 'archive' && <> <Link href={`/formats/${F.id}/`}>{fill(X.moreAbout, { F: F.name })}</Link>.</>}</p></>}
            {T && T.id !== F?.id && <><h3>{fill(X.whatIs, { F: T.name })}</h3><p>{T.what}</p></>}
          </section>
        )}

        {F && T && (
          <section className="section" aria-labelledby="keeps-h">
            <h2 id="keeps-h">{X.keepsH}</h2>
            <div className="keeps">
              <div className="card"><h3>{F.name}</h3><p>{F.keeps}</p><p className="muted small" style={{ marginTop: 8 }}>{X.usedBy} {F.usedBy}</p></div>
              <div className="card"><h3>{T.name}</h3><p>{T.keeps}</p><p className="muted small" style={{ marginTop: 8 }}>{X.usedBy} {T.usedBy}</p></div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="section" aria-labelledby="rel-h">
            <h2 id="rel-h">{D.common.relatedTools}</h2>
            <div className="tool-grid">{related.map((r) => <Link key={r.slug} className="tool-link" href={L(`/${r.slug}/`)}>{shortName(toolText(r, lang).h1, lang)}</Link>)}</div>
          </section>
        )}
        <Faq items={faq} title={D.common.faq} />
      </div>
    </>
  );
}
