import { notFound } from 'next/navigation';
import ToolPage from '@/components/ToolPage';
import { TOOLS, tool } from '@/lib/data/tools';
import { listDocs, getDoc } from '@/lib/content';
import { meta } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  return [...TOOLS.map((t) => ({ slug: t.slug })), ...listDocs('pages').map((d) => ({ slug: d.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tool(slug);
  if (t) return meta({ title: t.title, description: t.description, path: `/${slug}/` });
  const d = getDoc('pages', slug);
  if (d) return meta({ title: d.seoTitle || d.title, description: d.description, path: `/${slug}/` });
  return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tool(slug);
  if (t) return <ToolPage t={t} />;
  const d = getDoc('pages', slug);
  if (!d) notFound();
  return (
    <div className="wrap">
      <header className="page-head" style={{ paddingTop: 32 }}><h1>{d.title}</h1></header>
      <article className="prose" dangerouslySetInnerHTML={{ __html: d.html }} />
    </div>
  );
}
