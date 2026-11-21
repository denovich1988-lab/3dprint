import Link from 'next/link';
import Studio from './Studio';
import ImageTo3D from './ImageTo3D';
import DdsTool from './DdsTool';
import Faq from './Faq';
import JsonLd from './JsonLd';
import { Tool, TOOLS } from '@/lib/data/tools';
import { fmt, FORMATS } from '@/lib/data/formats';
import { appLd, crumbs, faqLd, graph, howToLd } from '@/lib/seo';

export function toolFaq(t: Tool): { q: string; a: string }[] {
  const F = t.from ? FORMATS.find((f) => f.id === t.from) : undefined;
  const T = t.to ? FORMATS.find((f) => f.id === t.to) : undefined;
  const privacy = { q: 'Are my files uploaded?', a: 'No. The conversion runs in your web browser with JavaScript and WebAssembly. Your file is read from your device and the result is created on your device, so nothing is sent to our server.' };
  const free = { q: 'Is it free?', a: 'Yes. There is no sign-up, no watermark and no file limit set by us. Very large files are limited only by your device’s memory.' };
  if (t.kind === 'mesh') return [
    free, privacy,
    { q: `What is lost when converting ${F!.name} to ${T!.name}?`, a: `${T!.name} keeps: ${T!.keeps.replace(/\.$/, '')}. Anything ${F!.name} stores beyond that is dropped.${F!.notes ? ' ' + F!.notes : ''}` },
    { q: 'Why is my model the wrong size?', a: 'Formats store units differently: STL has none, glTF uses metres, 3MF and STEP record units. If the result looks 1000 times too small or large, pick a different option in Scale (for example “Metres → mm”) and convert again.' },
    { q: 'Why is my model lying on its side?', a: 'Some formats treat Y as up (glTF, OBJ, FBX), others Z (STL, 3MF, STEP). “Up axis: Automatic” rotates the model for the target format. Choose “Keep as is” if you prefer the original orientation.' },
  ];
  if (t.kind === 'image') return [
    free, privacy,
    { q: 'Which image works best?', a: t.mode === 'lithophane' ? 'Use a well-lit photo with clear contrast. Crop it to the shape you want before uploading. Faces and landscapes work well; very dark photos come out thick and dim.' : 'For logos and text use a high-contrast PNG (black shapes on white or transparent). For reliefs, any photo works, but simple images with strong light and dark areas give the clearest result.' },
    { q: 'What settings should I print a lithophane with?', a: 'Lithophanes are usually printed upright in white PLA with 100% infill and fine layers (0.12–0.16 mm) so the thickness differences show clearly. Check your slicer’s recommendations for your printer.' },
    { q: 'Can I change the size later?', a: 'Yes. Set the width here, or scale the STL in your slicer. Scaling in the slicer also scales the thickness, so set the thickness here for the best control.' },
  ];
  if (t.kind === 'svg') return [
    free, privacy,
    { q: 'Why are some parts of my SVG missing?', a: 'Only filled shapes and stroked lines are turned into 3D. Text must be converted to paths first (in Inkscape: Path → Object to Path; in Illustrator: Type → Create Outlines). Embedded bitmaps are ignored.' },
    { q: 'How do I make a cookie cutter or keychain?', a: 'Use a simple outline. Extrude it with a small thickness for a keychain, or combine a thin tall wall and a wider base in your slicer or CAD app for a cutter.' },
  ];
  if (t.kind === 'dds-encode' || t.kind === 'dds-decode') return [
    free, privacy,
    { q: 'Which DDS compression should I choose?', a: 'DXT5 (BC3) keeps smooth transparency and suits most game textures. DXT1 (BC1) gives the smallest files but only on/off transparency. Uncompressed RGBA is exact but four to eight times larger.' },
    { q: 'Do I need mipmaps?', a: 'Most games expect mipmaps for textures shown at different distances; they reduce shimmering. UI images and icons usually do not need them.' },
    { q: 'Which DDS files can be opened?', a: 'DXT1, DXT3, DXT5 and uncompressed DDS files. BC7 files that use the newer DX10 header are not supported yet.' },
  ];
  return [
    free, privacy,
    { q: 'Which formats can the viewer open?', a: 'STL, 3MF, OBJ, GLB, glTF, FBX, PLY, DAE, 3DS, USDZ, OFF, AMF, VRML (WRL), STEP, STP, IGES, IGS and G-code, plus ZIP archives that contain a model.' },
    { q: 'How accurate are the measurements?', a: 'Dimensions come straight from the file’s coordinates and are shown in the file’s own units (millimetres for most 3D-printing files). Volume is exact for closed (watertight) meshes; for open meshes it is only an estimate.' },
    { q: 'Can I open huge files?', a: 'Files with a few million triangles open on most computers. Very large scans may be slow on phones because everything runs on your device.' },
  ];
}

function steps(t: Tool) {
  const F = t.from ? fmt(t.from).name : 'your';
  const T = t.to ? fmt(t.to).name : '';
  if (t.kind === 'viewer') return [`Drop your ${t.from ? F + ' ' : '3D '}file on the viewer or click “Upload your model”.`, 'Rotate with the mouse or one finger, zoom with the wheel or a pinch, and switch to wireframe to inspect the mesh.', 'Read the size, triangle count and volume, save a PNG, or convert the model to another format.'];
  if (t.kind === 'image') return [`Upload a ${t.from === 'png' ? 'PNG' : 'JPG or PNG'} image.`, 'Choose relief, lithophane or logo/stamp and set width, base and height in millimetres. The 3D preview updates as you change settings.', `Click “Create ${T}” and download the file for your slicer.`];
  if (t.kind === 'svg') return ['Upload an SVG with filled shapes (convert text to paths first).', 'Set the width and the thickness in millimetres.', `Click “Create ${T}” and download it.`];
  if (t.kind === 'dds-encode') return [`Upload a ${F} image.`, 'Choose DXT5, DXT1 or uncompressed, and whether to build mipmaps.', 'Click “Convert to DDS” and download the texture.'];
  if (t.kind === 'dds-decode') return ['Upload a .dds texture. The preview shows it immediately.', `Choose ${T} as the output.`, 'Click convert and download the image.'];
  return [`Drop your ${F} file on the 3D preview or click “Upload your model”.`, 'Check the preview and size. Adjust Scale or Up axis if the model looks wrong.', `Click “Convert to ${T}”, then download the ${T} file.`];
}

export default function ToolPage({ t }: { t: Tool }) {
  const F = t.from ? FORMATS.find((f) => f.id === t.from) : undefined;
  const T = t.to ? FORMATS.find((f) => f.id === t.to) : undefined;
  const faq = toolFaq(t);
  const st = steps(t);
  const path = `/${t.slug}/`;
  const related = TOOLS.filter((x) => x.slug !== t.slug && (x.from === t.from || x.to === t.to || x.from === t.to) && x.kind === t.kind).slice(0, 12);
  const section = t.kind === 'viewer' ? { name: '3D viewers', path: '/3d-viewer/' } : { name: 'Converters', path: '/converters/' };

  return (
    <>
      <JsonLd data={graph(appLd(t.h1, t.description, path), howToLd(`How to use the ${t.h1}`, st), faqLd(faq), crumbs([{ name: 'Home', path: '/' }, section, { name: t.h1, path }]))} />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href={section.path}>{section.name}</Link> / {t.h1}</nav>
        <header className="page-head">
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
        </header>
        {t.kind === 'mesh' && <Studio mode="convert" from={t.from} to={t.to} />}
        {t.kind === 'viewer' && <Studio mode="studio" from={t.from} />}
        {(t.kind === 'image' || t.kind === 'svg') && <ImageTo3D kind={t.kind} to={t.to} defaultMode={t.mode} />}
        {t.kind === 'dds-encode' && <DdsTool direction="to-dds" />}
        {t.kind === 'dds-decode' && <DdsTool direction="from-dds" out={t.to as any} />}

        <section className="section" aria-labelledby="how-h">
          <h2 id="how-h">How to use it</h2>
          <ol className="steps">{st.map((s) => <li key={s}>{s}</li>)}</ol>
        </section>

        {(t.notes?.length || (F && T)) && (
          <section className="section prose" aria-labelledby="about-h">
            <h2 id="about-h">{F && T ? `About ${F.name} to ${T.name} conversion` : `About ${F?.name || '3D'} files`}</h2>
            {t.notes?.map((n) => <p key={n}>{n}</p>)}
            {F && <><h3>What is a {F.name} file?</h3><p>{F.what}{F.kind !== 'archive' && <> <Link href={`/formats/${F.id}/`}>More about {F.name}</Link>.</>}</p></>}
            {T && T.id !== F?.id && <><h3>What is a {T.name} file?</h3><p>{T.what}</p></>}
          </section>
        )}

        {F && T && (
          <section className="section" aria-labelledby="keeps-h">
            <h2 id="keeps-h">What each format keeps</h2>
            <div className="keeps">
              <div className="card"><h3>{F.name}</h3><p>{F.keeps}</p><p className="muted small" style={{ marginTop: 8 }}>Used by: {F.usedBy}</p></div>
              <div className="card"><h3>{T.name}</h3><p>{T.keeps}</p><p className="muted small" style={{ marginTop: 8 }}>Used by: {T.usedBy}</p></div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="section" aria-labelledby="rel-h">
            <h2 id="rel-h">Related tools</h2>
            <div className="tool-grid">{related.map((r) => <Link key={r.slug} className="tool-link" href={`/${r.slug}/`}>{r.h1.replace(/ converter$/, '')}</Link>)}</div>
          </section>
        )}
        <Faq items={faq} />
      </div>
    </>
  );
}
