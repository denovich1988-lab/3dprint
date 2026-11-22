import { notFound } from 'next/navigation';
import ToolPage from '@/components/ToolPage';
import { TOOLS, tool } from '@/lib/data/tools';
import { listDocs, getDoc } from '@/lib/content';
import { meta, graph, crumbs } from '@/lib/seo';
import { pageMeta } from '@/lib/i18n/meta';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { abs } from '@/lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return [...TOOLS.map((t) => ({ slug: t.slug })), ...listDocs('pages').map((d) => ({ slug: d.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tool(slug);
  if (t) return pageMeta('tool', 'en', slug);
  const d = getDoc('pages', slug);
  if (d) return meta({ title: d.seoTitle || d.title, description: d.description, path: `/${slug}/` });
  return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tool(slug);
  if (t) return <ToolPage t={t} lang="en" />;
  const d = getDoc('pages', slug);
  if (!d) notFound();
  return (
    <div className="wrap">
      <JsonLd data={graph({ '@type': 'WebPage', name: d.title, description: d.description, url: abs(`/${slug}/`), dateModified: d.updated || d.date, isPartOf: { '@id': abs('/#website') } }, crumbs([{ name: 'Home', path: '/' }, { name: d.title, path: `/${slug}/` }]))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / {d.title}</nav>
      <header className="page-head"><h1>{d.title}</h1>{d.updated ? <p className="muted small">Last updated {d.updated}</p> : null}</header>
      <article className="prose" dangerouslySetInnerHTML={{ __html: d.html }} />
    </div>
  );
}
