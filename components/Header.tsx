import Link from 'next/link';
import Logo from './Logo';
import LangSwitch from './LangSwitch';
import { activeLocales, dict, lp, LANG_NAMES, LOCALIZED_PATHS, type Lang } from '@/lib/i18n';

export default function Header({ lang = 'en' }: { lang?: Lang }) {
  const N = dict(lang).nav;
  const NAV: [string, string][] = [
    [lp(lang, '/converters/'), N.converters],
    [lp(lang, '/3d-viewer/'), N.viewer],
    [lp(lang, '/image-to-stl/'), N.imageToStl],
    ['/printers/', N.printers],
    ['/blog/', N.blog],
  ];
  const langs = activeLocales().map((code) => ({ code, name: LANG_NAMES[code] }));
  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Link href={lp(lang, '/')} className="brand" aria-label={N.home}>
          <Logo /> <span>my3dprinter<span className="brand-tld">.io</span></span>
        </Link>
        <nav aria-label="Main" className="nav">
          {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        {langs.length > 1 && <LangSwitch lang={lang} langs={langs} localized={LOCALIZED_PATHS} label={N.language} />}
      </div>
    </header>
  );
}
