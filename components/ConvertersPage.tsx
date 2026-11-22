import Link from 'next/link';
import { TOOLS } from '@/lib/data/tools';
import { graph, crumbs } from '@/lib/seo';
import { dict, fill, lp, type Lang } from '@/lib/i18n';
import { toolText } from '@/lib/i18n/tools';
import { shortName } from '@/components/ToolPage';
import JsonLd from '@/components/JsonLd';



const KINDS: ((k: string) => boolean)[] = [(k) => k === 'mesh', (k) => k === 'image' || k === 'svg', (k) => k.startsWith('dds'), (k) => k === 'viewer'];

export default function ConvertersPage({ lang = 'en' }: { lang?: Lang }) {
  const D = dict(lang), C = D.converters;
  const L = (p: string) => lp(lang, p);
  return (
    <div className="wrap">
      <JsonLd data={graph(crumbs([{ name: D.common.home, path: L('/') }, { name: C.crumb, path: L('/converters/') }]))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href={L('/')}>{D.common.home}</Link> / {C.crumb}</nav>
      <header className="page-head">
        <h1>{C.h1}</h1>
        <p className="lead">{fill(C.lead, { n: TOOLS.length })}</p>
      </header>
      {C.groups.map(([h, p], gi) => (
        <section className="section" key={h}>
          <h2>{h}</h2>
          <p className="muted" style={{ marginTop: -8 }}>{p}</p>
          <div className="tool-grid">
            {TOOLS.filter((t) => KINDS[gi](t.kind)).map((t) => <Link key={t.slug} className="tool-link" href={L(`/${t.slug}/`)}>{shortName(toolText(t, lang).h1, lang)}</Link>)}
          </div>
        </section>
      ))}
    </div>
  );
}
