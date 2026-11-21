import type { Metadata } from 'next';
import { SITE, abs } from './site';

export function meta({ title, description, path, type = 'website' }: { title: string; description: string; path: string; type?: 'website' | 'article' }): Metadata {
  const full = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return {
    title: full,
    description,
    alternates: { canonical: abs(path) },
    openGraph: { title: full, description, url: abs(path), siteName: SITE.name, type, images: [{ url: abs('/og.png'), width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: full, description },
  };
}

export const crumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});
export const faqLd = (faq: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
export const appLd = (name: string, description: string, path: string) => ({
  '@type': 'WebApplication', name, description, url: abs(path), applicationCategory: 'DesignApplication', operatingSystem: 'Any (web browser)',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, isAccessibleForFree: true,
});
export const howToLd = (name: string, steps: string[]) => ({
  '@type': 'HowTo', name, step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s })),
});
export const graph = (...nodes: any[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
