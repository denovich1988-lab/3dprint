import Link from 'next/link';
import { listDocs } from '@/lib/content';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: '3D Printer Guides – Models, Specs, Manuals and Comparisons', description: 'Independent guides to Bambu Lab, Prusa, Creality, Elegoo, Anycubic and other 3D printers: specs, setup, manuals, firmware and comparisons.', path: '/printers/' });

export default function Index() {
  const docs = listDocs('printers');
  const cats = [...new Set(docs.map((d) => d.category || 'More'))];
  return (
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / 3D printers</nav>
      <header className="page-head"><h1>3D printers: models, setup and comparisons</h1><p className="lead">Independent guides to popular 3D printers: what each model offers, how to set it up and connect it, where to find the official manual, and how it compares.</p></header>
      {cats.map((c) => (
        <section className="section" key={c}>
          <h2>{c}</h2>
          <div className="cols">
            {docs.filter((d) => (d.category || 'More') === c).map((d) => (
              <div className="card" key={d.slug}><h3><Link href={`/printers/${d.slug}/`}>{d.title}</Link></h3><p>{d.description}</p></div>
            ))}
          </div>
        </section>
      ))}
      {!docs.length && <p>New guides are added every day.</p>}
    </div>
  );
}
