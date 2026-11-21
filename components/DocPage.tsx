import Link from 'next/link';
import JsonLd from './JsonLd';
import Faq from './Faq';
import { Doc } from '@/lib/content';
import { abs, SITE } from '@/lib/site';
import { crumbs, faqLd, graph } from '@/lib/seo';
import { TOOLS } from '@/lib/data/tools';

export default function DocPage({ d, section }: { d: Doc; section: { name: string; path: string } }) {
  const path = `${section.path}${d.slug}/`;
  const tools = (d.tools || []).map((s) => TOOLS.find((t) => t.slug === s)).filter(Boolean) as any[];
  const article = {
    '@type': 'Article', headline: d.title, description: d.description, datePublished: d.date, dateModified: d.updated || d.date,
    mainEntityOfPage: abs(path), author: { '@type': 'Organization', name: SITE.name, url: SITE.url }, publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    ...(d.sources?.length ? { citation: d.sources.map((s) => s.url) } : {}),
  };
  return (
    <div className="wrap">
      <JsonLd data={graph(article, crumbs([{ name: 'Home', path: '/' }, section, { name: d.title, path }]), ...(d.faq?.length ? [faqLd(d.faq)] : []))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href={section.path}>{section.name}</Link> / {d.title}</nav>
      <div className="split">
        <article className="prose">
          <h1>{d.title}</h1>
          <p className="muted small">Updated {new Date((d.updated || d.date) + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          {d.summary?.length ? <div className="summary-box"><b>Key points</b><ul>{d.summary.map((s) => <li key={s}>{s}</li>)}</ul></div> : null}
          {d.specs?.length ? (
            <table className="spec"><caption className="muted small" style={{ textAlign: 'left', padding: '0 0 6px' }}>Specifications (from the maker’s published spec sheet)</caption>
              <tbody>{d.specs.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table>
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: d.html }} />
          {d.sources?.length ? <><h2>Sources</h2><ul className="small">{d.sources.map((s) => <li key={s.url}><a href={s.url} rel="nofollow noopener" target="_blank">{s.name}</a></li>)}</ul></> : null}
        </article>
        <aside className="aside">
          {tools.length > 0 && <div className="facts"><b>Tools for this</b><div className="tool-grid" style={{ marginTop: 10, gridTemplateColumns: '1fr' }}>{tools.map((t) => <Link key={t.slug} className="tool-link" href={`/${t.slug}/`}>{t.h1}</Link>)}</div></div>}
          <div className="facts"><b>Open or convert a model</b><p className="small" style={{ margin: '6px 0 10px' }}>View STL, 3MF, STEP and more in your browser.</p><Link className="btn btn-accent" href="/3d-viewer/">3D viewer</Link></div>
        </aside>
      </div>
      {d.faq?.length ? <Faq items={d.faq} /> : null}
    </div>
  );
}
