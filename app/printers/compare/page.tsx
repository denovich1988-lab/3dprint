import Link from 'next/link';
import PrinterCompare from '@/components/PrinterCompare';
import JsonLd from '@/components/JsonLd';
import Faq from '@/components/Faq';
import { printerSpecs, ORDER, RANKINGS, ranked } from '@/lib/printer-specs';
import { listDocs } from '@/lib/content';
import { meta, graph, crumbs, faqLd, appLd } from '@/lib/seo';

export const metadata = meta({
  title: '3D Printer Comparison – Compare 3D Printers Side by Side',
  description: 'Compare 3D printers side by side: build volume, speed, acceleration, nozzle and bed temperature, enclosure and multi-colour, from official specs.',
  path: '/printers/compare/',
});

const FAQ = [
  { q: 'How do I compare 3D printers?', a: 'Pick two or three printers above. The 3D printer comparison table lines up the manufacturers’ published specs – build volume, speed, temperatures, enclosure, multi-colour support – and marks the highest number in each measurable row.' },
  { q: 'Where do the specs come from?', a: 'Every value comes from the manufacturer’s official spec page, wiki or manual, listed on each printer’s guide. We do not add test scores or user ratings.' },
  { q: 'Is a higher max speed always better?', a: 'Not by itself. Max speed is a rated limit; real print speed also depends on acceleration, hot end flow, the material and the model. Compare acceleration and flow too, and read the printer guide for who it suits.' },
  { q: 'Why are prices not compared?', a: 'Prices change often and differ by country and bundle, so we leave them out. Where a guide mentions a launch price it is labelled with its region.' },
];

export default function Compare() {
  const ps = printerSpecs();
  const vs = listDocs('blog').filter((d) => / vs /i.test(d.title) && (d.category === 'Comparisons' || /printer|bambu|prusa|creality|elegoo|anycubic/i.test(d.title)));
  return (
    <div className="wrap">
      <JsonLd data={graph(appLd('3D printer comparison tool', 'Compare 3D printers side by side using official specifications.', '/printers/compare/'),
        crumbs([{ name: 'Home', path: '/' }, { name: '3D printers', path: '/printers/' }, { name: 'Compare', path: '/printers/compare/' }]), faqLd(FAQ))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/printers/">3D printers</Link> / Compare</nav>
      <header className="page-head">
        <h1>3D printer comparison</h1>
        <p className="lead">Compare 3D printers side by side using the makers’ official specs. Choose up to three models; the table updates instantly and the link keeps your selection.</p>
      </header>
      <PrinterCompare printers={ps} order={ORDER} />

      <section className="section" aria-labelledby="rank-h">
        <h2 id="rank-h">3D printer rankings by spec</h2>
        <p className="muted" style={{ marginTop: -8 }}>Ranked by the manufacturers’ published numbers, not by tests or opinions. {ps.length} printers so far; new models are added every day.</p>
        <div className="rank-grid">
          {RANKINGS.map((r) => {
            const list = ranked(ps, r.key).slice(0, 5);
            if (!list.length) return null;
            return (
              <div className="rank-card" key={r.id}>
                <h3>{r.title}</h3>
                <ol>{list.map((p) => <li key={p.slug}><Link href={`/printers/${p.slug}/`}>{p.name}</Link><b>{r.fmt(p.m[r.key])}</b></li>)}</ol>
              </div>
            );
          })}
        </div>
      </section>

      {vs.length > 0 && (
        <section className="section" aria-labelledby="vs-h">
          <h2 id="vs-h">Head-to-head comparisons</h2>
          <div className="tool-grid">{vs.map((d) => <Link key={d.slug} className="tool-link" href={`/blog/${d.slug}/`}>{d.title.split(' – ')[0]}</Link>)}</div>
        </section>
      )}
      <Faq items={FAQ} />
    </div>
  );
}
