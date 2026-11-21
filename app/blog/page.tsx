import Link from 'next/link';
import { listDocs } from '@/lib/content';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: '3D Printing Blog – Guides, Comparisons, Filament and Fixes', description: 'The my3dprinter.io blog: 3D printer comparisons, setup guides, filament explainers and fixes for stringing, warping and other print problems.', path: '/blog/' });

export default function Index() {
  const docs = listDocs('blog');
  const cats = [...new Set(docs.map((d) => d.category || 'More'))];
  return (
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Blog</nav>
      <header className="page-head"><h1>3D printing blog</h1><p className="lead">Step-by-step help with setup, slicers, materials and print problems. Facts are checked against makers’ documentation.</p></header>
      {cats.map((c) => (
        <section className="section" key={c}>
          <h2>{c}</h2>
          <div className="cols">
            {docs.filter((d) => (d.category || 'More') === c).map((d) => (
              <div className="card" key={d.slug}><h3><Link href={`/blog/${d.slug}/`}>{d.title}</Link></h3><p>{d.description}</p></div>
            ))}
          </div>
        </section>
      ))}
      {!docs.length && <p>New articles are added every day.</p>}
    </div>
  );
}
