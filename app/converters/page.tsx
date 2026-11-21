import Link from 'next/link';
import { TOOLS } from '@/lib/data/tools';
import { meta, graph, crumbs } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = meta({ title: 'Free 3D File Converters – STL, 3MF, STEP, OBJ, GLB and More', description: 'Every converter on my3dprinter.io: 3D models, CAD, images to STL, SVG and DDS textures. Free, in your browser, and your files are never uploaded.', path: '/converters/' });

const groups: [string, (k: string) => boolean, string][] = [
  ['3D model converters', (k) => k === 'mesh', 'Convert between STL, 3MF, OBJ, GLB, glTF, FBX, PLY, STEP and more.'],
  ['Images and vectors to 3D', (k) => k === 'image' || k === 'svg', 'Turn pictures, logos and SVG files into printable models.'],
  ['Texture converters', (k) => k.startsWith('dds'), 'Convert game textures between DDS, PNG and JPG.'],
  ['3D viewers', (k) => k === 'viewer', 'Open and measure 3D files without installing anything.'],
];

export default function Converters() {
  return (
    <div className="wrap">
      <JsonLd data={graph(crumbs([{ name: 'Home', path: '/' }, { name: 'Converters', path: '/converters/' }]))} />
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Converters</nav>
      <header className="page-head">
        <h1>3D file converters</h1>
        <p className="lead">{TOOLS.length} free tools. Each one runs in your browser, so files stay on your device and large models convert without waiting for uploads.</p>
      </header>
      {groups.map(([h, f, p]) => (
        <section className="section" key={h}>
          <h2>{h}</h2>
          <p className="muted" style={{ marginTop: -8 }}>{p}</p>
          <div className="tool-grid">
            {TOOLS.filter((t) => f(t.kind)).map((t) => <Link key={t.slug} className="tool-link" href={`/${t.slug}/`}>{t.h1.replace(/ converter$/, '')}</Link>)}
          </div>
        </section>
      ))}
    </div>
  );
}
