'use client';
import { usePathname } from 'next/navigation';

type Props = { lang: string; langs: { code: string; name: string }[]; localized: string[]; label: string };
// Language menu: links to the same page in each language when it is translated, otherwise to that language's home page.
export default function LangSwitch({ lang, langs, localized, label }: Props) {
  const pathname = usePathname() || '/';
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  const m = p.match(/^\/([a-z]{2})(\/.*)$/);
  const enPath = m && langs.some((l) => l.code === m[1]) ? m[2] : p;
  const href = (code: string) => {
    const ok = localized.includes(enPath);
    if (code === 'en') return ok ? enPath : enPath;
    return ok ? `/${code}${enPath}` : `/${code}/`;
  };
  const cur = langs.find((l) => l.code === lang)?.name || 'English';
  return (
    <details className="lang">
      <summary aria-label={label}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" /></svg><span>{cur}</span></summary>
      <ul>
        {langs.map((l) => (
          <li key={l.code}><a href={href(l.code)} hrefLang={l.code} lang={l.code} aria-current={l.code === lang ? 'true' : undefined}>{l.name}</a></li>
        ))}
      </ul>
    </details>
  );
}
