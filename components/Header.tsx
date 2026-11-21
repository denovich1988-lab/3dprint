import Link from 'next/link';
import Logo from './Logo';

const NAV = [
  ['/converters/', 'Converters'],
  ['/3d-viewer/', '3D viewer'],
  ['/image-to-stl/', 'Image to STL'],
  ['/printers/', 'Printers'],
  ['/blog/', 'Blog'],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Link href="/" className="brand" aria-label="my3dprinter.io home">
          <Logo /> <span>my3dprinter<span className="brand-tld">.io</span></span>
        </Link>
        <nav aria-label="Main" className="nav">
          {NAV.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
