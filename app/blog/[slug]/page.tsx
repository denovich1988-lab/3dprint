import { notFound } from 'next/navigation';
import DocPage from '@/components/DocPage';
import { listDocs, getDoc } from '@/lib/content';
import { meta } from '@/lib/seo';

export const dynamicParams = false;
export function generateStaticParams() {
  const d = listDocs('blog').map((x) => ({ slug: x.slug }));
  return d.length ? d : [{ slug: '_placeholder' }];
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDoc('blog', slug);
  return d ? meta({ title: d.seoTitle || d.title, description: d.description, path: `/blog/${slug}/`, type: 'article' }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDoc('blog', slug);
  if (!d) notFound();
  return <DocPage d={d} section={{ name: 'Blog', path: '/blog/' }} />;
}
