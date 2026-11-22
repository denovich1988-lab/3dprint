import Link from 'next/link';
import type { Doc } from '@/lib/content';

// Card for blog and printer listings. Shows the page illustration, or a styled placeholder (never another page's image).
export default function DocCard({ d, base }: { d: Doc; base: string }) {
  const href = `${base}${d.slug}/`;
  return (
    <article className="doc-card">
      <Link href={href} className="doc-card-media" tabIndex={-1} aria-hidden="true">
        {d.image ? <img src={d.image} alt="" width={1200} height={675} loading="lazy" decoding="async" /> : <span className="doc-card-ph" />}
      </Link>
      <div className="doc-card-body">
        <h3><Link href={href}>{d.title}</Link></h3>
        <p>{d.description}</p>
      </div>
    </article>
  );
}
