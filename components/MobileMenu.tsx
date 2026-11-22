'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Compact menu for phones: a button that opens the full navigation; closes after navigating.
export default function MobileMenu({ links, label }: { links: [string, string][]; label: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  useEffect(() => { if (ref.current) ref.current.open = false; }, [pathname]);
  return (
    <details className="mnav" ref={ref}>
      <summary aria-label={label}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </summary>
      <nav aria-label={label}>
        {links.map(([href, l]) => <Link key={href} href={href}>{l}</Link>)}
      </nav>
    </details>
  );
}
