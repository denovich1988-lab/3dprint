import Link from 'next/link';
import { listDocs } from '@/lib/content';
import { meta, graph, crumbs, itemList } from '@/lib/seo';
import DocCard from '@/components/DocCard';
import JsonLd from '@/components/JsonLd';

export const metadata = meta({ title: '3D Printing Blog – Guides, Comparisons, Filament and Fixes', description: 'The my3dprinter.io blog: 3D printer comparisons, setup guides, filament explainers and fixes for stringing, warping and other print problems.', path: '/blog/' });

export default function Index() {
  const docs = listDocs('blog');
  const cats = [...new Set(docs.map((d) => d.category || 'More'))];
  return (
    <div className="wrap">
      <JsonLd data={graph(crumbs([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }]), itemList(docs.map((d) => ({ name: d.title, path: `/blog/${d.slug}/` }))))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Blog</nav>
      <header className="page-head"><h1>3D printing blog</h1><p className="lead">Step-by-step help with setup, slicers, materials and print problems. Facts are checked against makers’ documentation.</p></header>
      {cats.map((c) => (
        <section className="section" key={c}>
          <h2>{c}</h2>
          <div className="doc-grid">
            {docs.filter((d) => (d.category || 'More') === c).map((d) => (
              <DocCard key={d.slug} d={d} base="/blog/" />
            ))}
          </div>
        </section>
      ))}
      {!docs.length && <p>New articles are added every day.</p>}
    </div>
  );
}
