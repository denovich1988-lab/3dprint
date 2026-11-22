import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FORMATS } from '@/lib/data/formats';
import { TOOLS } from '@/lib/data/tools';
import { meta, graph, crumbs, faqLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Faq from '@/components/Faq';

export const dynamicParams = false;
export const generateStaticParams = () => FORMATS.filter((f) => f.kind !== 'archive').map((f) => ({ id: f.id }));

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const f = FORMATS.find((x) => x.id === id)!;
  return meta({ title: `${f.name} File: What It Is, How to Open and Convert It`, description: `What a .${f.id} (${f.full}) file is, what it stores, which programs open it, and free tools to view and convert ${f.name} files online.`, path: `/formats/${id}/` });
}

export default async function FormatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const f = FORMATS.find((x) => x.id === id);
  if (!f) notFound();
  const from = TOOLS.filter((t) => t.from === id && t.kind !== 'viewer');
  const to = TOOLS.filter((t) => t.to === id);
  const viewer = TOOLS.find((t) => t.slug === `${id}-viewer`);
  const faq = [
    { q: `How do I open a .${f.id} file?`, a: `${f.usedBy.replace(/\.$/, '')} can open ${f.name} files.${f.in ? ` You can also open it in your browser with our ${viewer ? f.name : '3D'} viewer, without installing anything.` : ''}` },
    { q: `What does a ${f.name} file store?`, a: f.keeps },
    ...(f.notes ? [{ q: `Anything to watch out for with ${f.name}?`, a: f.notes }] : []),
  ];
  return (
    <div className="wrap">
      <JsonLd data={graph(crumbs([{ name: 'Home', path: '/' }, { name: 'File formats', path: '/formats/' }, { name: f.name, path: `/formats/${id}/` }]), faqLd(faq))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/formats/">File formats</Link> / {f.name}</nav>
      <header className="page-head"><h1>{f.name} file (.{f.id})</h1><p className="lead">{f.full}</p></header>
      <div className="split">
        <article className="prose">
          <p>{f.what}</p>
          <h2>What it stores</h2><p>{f.keeps}</p>
          <h2>Software that uses {f.name}</h2><p>{f.usedBy}</p>
          {f.notes && <><h2>Good to know</h2><p>{f.notes}</p></>}
        </article>
        <aside className="aside">
          {viewer && <Link className="btn btn-accent" href={`/${viewer.slug}/`}>Open a {f.name} file online</Link>}
          {from.length > 0 && <div className="facts"><b>Convert {f.name} to</b><div className="chips" style={{ marginTop: 10 }}>{from.map((t) => <Link key={t.slug} className="chip" href={`/${t.slug}/`}>{(t.to || '').toUpperCase()}</Link>)}</div></div>}
          {to.length > 0 && <div className="facts"><b>Convert to {f.name} from</b><div className="chips" style={{ marginTop: 10 }}>{to.map((t) => <Link key={t.slug} className="chip" href={`/${t.slug}/`}>{t.slug.split('-to-')[0].toUpperCase()}</Link>)}</div></div>}
        </aside>
      </div>
      <Faq items={faq} />
    </div>
  );
}
