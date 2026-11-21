import Link from 'next/link';
import Studio from '@/components/Studio';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { TOOLS } from '@/lib/data/tools';
import { listDocs } from '@/lib/content';
import { meta, graph, faqLd, appLd } from '@/lib/seo';
import { SITE, abs } from '@/lib/site';

export const metadata = meta({
  title: 'Free 3D Model Viewer and Converter – STL, 3MF, STEP, OBJ, GLB',
  description: 'Open, measure and convert 3D models in your browser: STL, 3MF, STEP, OBJ, GLB, FBX and more. Image to STL, lithophanes, plus 3D printer guides. No upload.',
  path: '/',
});

const FAQ = [
  { q: 'Is my3dprinter.io free?', a: 'Yes. Every viewer and converter is free to use, with no account and no watermark.' },
  { q: 'Are my files uploaded to a server?', a: 'No. Models are opened and converted inside your browser using JavaScript and WebAssembly. The file never leaves your computer or phone, which also makes large files fast.' },
  { q: 'Which 3D formats can I open?', a: 'STL, 3MF, OBJ, GLB, glTF, FBX, PLY, DAE, 3DS, USDZ, OFF, AMF, VRML, STEP, STP, IGES, IGS and G-code, plus ZIP files that contain a model.' },
  { q: 'Which formats can I save?', a: 'STL (binary or ASCII), 3MF, OBJ, GLB, glTF, PLY, USDZ, DXF and OFF. Images can become STL, 3MF, OBJ or GLB, and textures can be converted between DDS, PNG and JPG.' },
  { q: 'Can I convert models from AI 3D generators?', a: 'Yes. Tools such as Meshy, Tripo and Rodin usually export GLB. Open the GLB here, check the size, and convert it to STL or 3MF for your slicer.' },
];

export default function Home() {
  const top = TOOLS.filter((t) => t.kind === 'mesh').sort((a, b) => b.volume - a.volume).slice(0, 16);
  const img = TOOLS.filter((t) => ['image', 'svg', 'dds-encode', 'dds-decode'].includes(t.kind));
  const viewers = TOOLS.filter((t) => t.kind === 'viewer');
  const guides = listDocs('guides').slice(0, 6);
  const printers = listDocs('printers').slice(0, 6);
  return (
    <>
      <JsonLd data={graph({ '@type': 'WebSite', name: SITE.name, url: abs('/') }, { '@type': 'Organization', name: SITE.name, url: abs('/'), logo: abs('/icon.svg') }, appLd('my3dprinter.io 3D viewer and converter', 'Free in-browser 3D model viewer and converter for STL, 3MF, STEP, OBJ, GLB and more.', '/'), faqLd(FAQ))} />
      <section className="hero">
        <div className="wrap">
          <div className="hero-head">
            <div>
              <h1>Free 3D model viewer and converter</h1>
              <p className="hero-lead">Drop any 3D file to see it on a print bed, measure it, and convert it for your slicer, Blender or AR. Everything runs in your browser.</p>
            </div>
            <div className="hero-formats" aria-label="Supported formats">
              {['STL', '3MF', 'STEP', 'OBJ', 'GLB', 'FBX', 'PLY', 'USDZ', 'G-code', 'IGES'].map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>
          <Studio mode="studio" samples />
        </div>
      </section>

      <div className="wrap">
        <section className="section" aria-labelledby="pop-h">
          <h2 id="pop-h">Popular converters</h2>
          <div className="tool-grid">
            {top.map((t) => <Link key={t.slug} className="tool-link" href={`/${t.slug}/`}>{t.h1.replace(/ converter$/, '')}</Link>)}
            <Link className="tool-link" href="/converters/">All converters <small>{TOOLS.length}</small></Link>
          </div>
        </section>

        <section className="section" aria-labelledby="img-h">
          <h2 id="img-h">Images, logos and textures</h2>
          <div className="cols">
            <div className="card"><h3><Link href="/image-to-stl/">Image to STL</Link></h3><p>Turn a picture into a relief or a raised logo, sized in millimetres.</p></div>
            <div className="card"><h3><Link href="/lithophane-maker/">Lithophane maker</Link></h3><p>Make a photo panel that lights up when held to a lamp.</p></div>
            <div className="card"><h3><Link href="/svg-to-stl/">SVG to STL</Link></h3><p>Extrude vector logos into signs, keychains and stencils.</p></div>
            <div className="card"><h3><Link href="/png-to-dds/">PNG to DDS</Link></h3><p>Create DXT1/DXT5 game textures with mipmaps, or open DDS as PNG.</p></div>
          </div>
          <div className="tool-grid" style={{ marginTop: 14 }}>
            {img.map((t) => <Link key={t.slug} className="tool-link" href={`/${t.slug}/`}>{t.h1.replace(/ converter$/, '')}</Link>)}
          </div>
        </section>

        <section className="section" aria-labelledby="view-h">
          <h2 id="view-h">Online 3D viewers</h2>
          <div className="tool-grid">{viewers.map((t) => <Link key={t.slug} className="tool-link" href={`/${t.slug}/`}>{t.h1}</Link>)}</div>
        </section>

        {(printers.length > 0 || guides.length > 0) && (
          <section className="section" aria-labelledby="guide-h">
            <h2 id="guide-h">3D printers and guides</h2>
            <div className="cols">
              {[...printers.map((d) => ({ d, base: '/printers/' })), ...guides.map((d) => ({ d, base: '/guides/' }))].slice(0, 9).map(({ d, base }) => (
                <div className="card" key={base + d.slug}><h3><Link href={`${base}${d.slug}/`}>{d.title}</Link></h3><p>{d.description}</p></div>
              ))}
            </div>
          </section>
        )}

        <section className="section" aria-labelledby="why-h">
          <h2 id="why-h">Why convert here</h2>
          <div className="cols">
            <div className="card"><h3>Private by design</h3><p>Files are processed on your device. Nothing is uploaded, stored or shared.</p></div>
            <div className="card"><h3>Made for 3D printing</h3><p>Models sit on a print bed with real millimetre sizes, volume and a solid-PLA weight estimate.</p></div>
            <div className="card"><h3>CAD and AI models too</h3><p>Open STEP and IGES from CAD, GLB from AI generators, and G-code from your slicer.</p></div>
          </div>
        </section>
        <Faq items={FAQ} />
      </div>
    </>
  );
}
