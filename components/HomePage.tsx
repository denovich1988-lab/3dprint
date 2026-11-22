import Link from 'next/link';
import { dict, lp, type Lang } from '@/lib/i18n';
import { toolText } from '@/lib/i18n/tools';
import { shortName } from './ToolPage';
import Studio from './Studio';
import Faq from './Faq';
import JsonLd from './JsonLd';
import { TOOLS } from '@/lib/data/tools';
import { listDocs } from '@/lib/content';
import { appLd, faqLd, graph, orgLd, siteLd } from '@/lib/seo';
import { SITE, abs } from '@/lib/site';



export default function HomePage({ lang = 'en' }: { lang?: Lang }) {
  const D = dict(lang), H = D.home;
  const L = (p: string) => lp(lang, p);
  const FAQ = H.faq.map(([q, a]) => ({ q, a }));
  const name = (t: (typeof TOOLS)[number]) => shortName(toolText(t, lang).h1, lang);
  const top = TOOLS.filter((t) => t.kind === 'mesh').sort((a, b) => b.volume - a.volume).slice(0, 16);
  const img = TOOLS.filter((t) => ['image', 'svg', 'dds-encode', 'dds-decode'].includes(t.kind));
  const viewers = TOOLS.filter((t) => t.kind === 'viewer');
  const guides = listDocs('blog').slice(0, 6);
  const printers = listDocs('printers').slice(0, 6);
  return (
    <>
      <JsonLd data={graph(siteLd(), orgLd(), appLd(H.appName, H.appDesc, L('/')), faqLd(FAQ))} />
      <section className="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <h1>{H.h1}</h1>
              <p className="hero-lead">{H.lead}</p>
            </div>
            <div className="hero-formats" aria-label={H.formats}>
              {['STL', '3MF', 'STEP', 'OBJ', 'GLB', 'FBX', 'PLY', 'USDZ', 'G-code', 'IGES'].map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>
          <Studio mode="studio" samples L={D.studio} />
        </div>
      </section>

      <div className="wrap">
        <section className="section" aria-labelledby="pop-h">
          <h2 id="pop-h">{H.popular}</h2>
          <div className="tool-grid">
            {top.map((t) => <Link key={t.slug} className="tool-link" href={L(`/${t.slug}/`)}>{name(t)}</Link>)}
            <Link className="tool-link" href={L('/converters/')}>{H.allConverters} <small>{TOOLS.length}</small></Link>
          </div>
        </section>

        <section className="section" aria-labelledby="img-h">
          <h2 id="img-h">{H.imagesH}</h2>
          <div className="cols">
            {H.imgCards.map(([h, p], i) => <div className="card" key={h}><h3><Link href={L(['/image-to-stl/', '/lithophane-maker/', '/svg-to-stl/', '/png-to-dds/'][i])}>{h}</Link></h3><p>{p}</p></div>)}
          </div>
          <div className="tool-grid" style={{ marginTop: 14 }}>
            {img.map((t) => <Link key={t.slug} className="tool-link" href={L(`/${t.slug}/`)}>{name(t)}</Link>)}
          </div>
        </section>

        <section className="section" aria-labelledby="view-h">
          <h2 id="view-h">{H.viewersH}</h2>
          <div className="tool-grid">{viewers.map((t) => <Link key={t.slug} className="tool-link" href={L(`/${t.slug}/`)}>{toolText(t, lang).h1}</Link>)}</div>
        </section>

        {(printers.length > 0 || guides.length > 0) && (
          <section className="section" aria-labelledby="guide-h">
            <h2 id="guide-h">{H.guidesH}</h2>
            <div className="cols">
              {[...printers.map((d) => ({ d, base: '/printers/' })), ...guides.map((d) => ({ d, base: '/blog/' }))].slice(0, 9).map(({ d, base }) => (
                <div className="card" key={base + d.slug}><h3><Link href={`${base}${d.slug}/`}>{d.title}</Link></h3><p>{d.description}</p></div>
              ))}
            </div>
          </section>
        )}

        <section className="section" aria-labelledby="why-h">
          <h2 id="why-h">{H.whyH}</h2>
          <div className="cols">
            {H.why.map(([h, p]) => <div className="card" key={h}><h3>{h}</h3><p>{p}</p></div>)}
          </div>
        </section>
        <Faq items={FAQ} title={D.common.faq} />
      </div>
    </>
  );
}
