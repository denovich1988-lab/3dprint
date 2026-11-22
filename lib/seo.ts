import type { Metadata } from 'next';
import { SITE, abs } from './site';

export function meta({ title, description, path, type = 'website', image, published, modified }: {
  title: string; description: string; path: string; type?: 'website' | 'article'; image?: string; published?: string; modified?: string;
}): Metadata {
  const full = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const img = abs(image || '/og.png');
  return {
    title: full,
    description,
    alternates: { canonical: abs(path) },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    openGraph: {
      title: full, description, url: abs(path), siteName: SITE.name, locale: 'en_US', type,
      images: [{ url: img, width: 1200, height: image ? 675 : 630, alt: title }],
      ...(type === 'article' && published ? { publishedTime: published, modifiedTime: modified || published } : {}),
    },
    twitter: { card: 'summary_large_image', title: full, description, images: [img] },
  };
}

export const ORG_ID = abs('/#organization');
export const orgLd = () => ({
  '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: abs('/'),
  logo: { '@type': 'ImageObject', url: abs('/icon-512.png'), width: 512, height: 512 },
  email: SITE.email, description: SITE.tagline,
});
export const siteLd = () => ({ '@type': 'WebSite', '@id': abs('/#website'), name: SITE.name, url: abs('/'), inLanguage: 'en', publisher: { '@id': ORG_ID } });
export const itemList = (items: { name: string; path: string }[]) => ({
  '@type': 'ItemList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
});

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
