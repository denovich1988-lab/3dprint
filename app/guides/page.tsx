import Link from 'next/link';
import { listDocs } from '@/lib/content';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: '3D Printing Guides – Setup, Slicers, Filament and Fixes', description: 'Practical 3D printing guides: printer setup, slicer settings, filament comparisons and fixes for stringing, warping and first-layer problems.', path: '/guides/' });

export default function Index() {
  const docs = listDocs('guides');
  const cats = [...new Set(docs.map((d) => d.category || 'More'))];
  return (
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Guides</nav>
      <header className="page-head"><h1>3D printing guides</h1><p className="lead">Step-by-step help with setup, slicers, materials and print problems. Facts are checked against makers’ documentation.</p></header>
      {cats.map((c) => (
        <section className="section" key={c}>
          <h2>{c}</h2>
          <div className="cols">
            {docs.filter((d) => (d.category || 'More') === c).map((d) => (
              <div className="card" key={d.slug}><h3><Link href={`/guides/${d.slug}/`}>{d.title}</Link></h3><p>{d.description}</p></div>
            ))}
          </div>
        </section>
      ))}
      {!docs.length && <p>New guides are added every day.</p>}
    </div>
  );
}
