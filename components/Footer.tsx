import Link from 'next/link';
import { dict, lp, type Lang } from '@/lib/i18n';
import Logo from './Logo';

export default function Footer({ lang = 'en' }: { lang?: Lang }) {
  const F = dict(lang).footer;
  const L = (p: string) => lp(lang, p);
  const cols: [string, [string, string][]][] = [
    [F.converters, [[L('/3mf-to-stl/'), '3MF → STL'], [L('/step-to-stl/'), 'STEP → STL'], [L('/glb-to-stl/'), 'GLB → STL'], [L('/obj-to-stl/'), 'OBJ → STL'], [L('/stl-to-3mf/'), 'STL → 3MF'], [L('/converters/'), F.allConverters]]],
    [F.images, [[L('/image-to-stl/'), dict(lang).nav.imageToStl], [L('/lithophane-maker/'), (dict(lang).tool.special as any)['lithophane-maker'].h1], [L('/svg-to-stl/'), 'SVG → STL'], [L('/png-to-dds/'), 'PNG → DDS'], [L('/dds-to-png/'), 'DDS → PNG']]],
    [F.viewers, [[L('/3d-viewer/'), (dict(lang).tool.special as any)['3d-viewer'].h1], ...['stl', '3mf', 'step', 'obj'].map((x): [string, string] => [L(`/${x}-viewer/`), dict(lang).tool.viewer.h1.replace('{F}', x.toUpperCase())])]],
    [F.site, [['/printers/', F.printers], ['/printers/compare/', F.compare], ['/blog/', F.blog], ['/formats/', F.formats], ['/about/', F.about], ['/contact/', F.contact]]],
    [F.legal, [['/privacy/', F.privacy], ['/cookies/', F.cookies], ['/terms/', F.terms], ['/disclaimer/', F.disclaimer]]],
  ];
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href={L('/')} className="brand"><Logo /> <span>my3dprinter<span className="brand-tld">.io</span></span></Link>
          <p>{F.tagline}</p>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <h2>{h}</h2>
            <ul>{links.map(([href, l]) => <li key={href}><Link href={href}>{l}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} my3dprinter.io. {F.base}</p>
      </div>
    </footer>
  );
}
