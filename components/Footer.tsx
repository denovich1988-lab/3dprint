import Link from 'next/link';
import { SITE } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  const cols: [string, [string, string][]][] = [
    ['Converters', [['/3mf-to-stl/', '3MF to STL'], ['/step-to-stl/', 'STEP to STL'], ['/glb-to-stl/', 'GLB to STL'], ['/obj-to-stl/', 'OBJ to STL'], ['/stl-to-3mf/', 'STL to 3MF'], ['/converters/', 'All converters']]],
    ['Images & textures', [['/image-to-stl/', 'Image to STL'], ['/lithophane-maker/', 'Lithophane maker'], ['/svg-to-stl/', 'SVG to STL'], ['/png-to-dds/', 'PNG to DDS'], ['/dds-to-png/', 'DDS to PNG']]],
    ['Viewers', [['/3d-viewer/', '3D model viewer'], ['/stl-viewer/', 'STL viewer'], ['/3mf-viewer/', '3MF viewer'], ['/step-viewer/', 'STEP viewer'], ['/obj-viewer/', 'OBJ viewer']]],
    ['my3dprinter.io', [['/printers/', '3D printers'], ['/guides/', 'Guides'], ['/formats/', 'File formats'], ['/about/', 'About'], ['/contact/', 'Contact'], ['/privacy/', 'Privacy'], ['/terms/', 'Terms']]],
  ];
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand"><Logo /> <span>my3dprinter<span className="brand-tld">.io</span></span></Link>
          <p>Free tools that run in your browser. Your files are never uploaded.</p>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <h2>{h}</h2>
            <ul>{links.map(([href, l]) => <li key={href}><Link href={href}>{l}</Link></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} {SITE.company}. Brand and product names belong to their owners; my3dprinter.io is an independent site and is not affiliated with any printer maker.</p>
      </div>
    </footer>
  );
}
