import Link from 'next/link';
import { listDocs } from '@/lib/content';
import { meta, graph, crumbs, itemList } from '@/lib/seo';
import DocCard from '@/components/DocCard';
import { printerSpecs, RANKINGS, ranked } from '@/lib/printer-specs';
import JsonLd from '@/components/JsonLd';

export const metadata = meta({ title: '3D Printer Guides – Models, Specs, Manuals and Comparisons', description: 'Independent guides to Bambu Lab, Prusa, Creality, Elegoo, Anycubic and other 3D printers: specs, setup, manuals, firmware and comparisons.', path: '/printers/' });

export default function Index() {
  const docs = listDocs('printers');
  const cats = [...new Set(docs.map((d) => d.category || 'More'))];
  return (
    <div className="wrap">
      <JsonLd data={graph(crumbs([{ name: 'Home', path: '/' }, { name: '3D printers', path: '/printers/' }]), itemList(docs.map((d) => ({ name: d.title, path: `/printers/${d.slug}/` }))))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / 3D printers</nav>
      <header className="page-head"><h1>3D printers: models, setup and comparisons</h1><p className="lead">Independent guides to popular 3D printers: what each model offers, how to set it up and connect it, where to find the official manual, and how it compares.</p></header>
      <section className="section cmp-cta">
        <div><h2>Compare 3D printers</h2><p>Put up to three printers side by side and see build volume, speed, temperatures, enclosure and multi-colour support from official specs.</p></div>
        <Link className="btn btn-accent" href="/printers/compare/">Open the comparison</Link>
      </section>
      {(() => { const ps = printerSpecs(); return ps.length > 1 ? (
        <section className="section" aria-labelledby="rank-h">
          <h2 id="rank-h">Rankings by spec</h2>
          <div className="rank-grid">{RANKINGS.slice(0, 3).map((r) => { const list = ranked(ps, r.key).slice(0, 3); return list.length ? (
            <div className="rank-card" key={r.id}><h3>{r.title}</h3><ol>{list.map((p) => <li key={p.slug}><Link href={`/printers/${p.slug}/`}>{p.name}</Link><b>{r.fmt(p.m[r.key])}</b></li>)}</ol></div>) : null; })}</div>
          <p className="muted small">From manufacturers’ published specs. <Link href="/printers/compare/">All rankings</Link></p>
        </section>) : null; })()}
      {cats.map((c) => (
        <section className="section" key={c}>
          <h2>{c}</h2>
          <div className="doc-grid">
            {docs.filter((d) => (d.category || 'More') === c).map((d) => (
              <DocCard key={d.slug} d={d} base="/printers/" />
            ))}
          </div>
        </section>
      ))}
      {!docs.length && <p>New guides are added every day.</p>}
    </div>
  );
}
