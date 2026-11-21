'use client';
import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';
import Viewport from './Viewport';

type Props = { kind?: 'image' | 'svg'; to?: string; defaultMode?: 'relief' | 'lithophane' | 'stamp' };

export default function ImageTo3D({ kind = 'image', to = 'stl', defaultMode = 'relief' }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  const [svgText, setSvgText] = useState<string | null>(null);
  const [mode, setMode] = useState(defaultMode);
  const [opt, setOpt] = useState<any>(null);
  const [object, setObject] = useState<THREE.Object3D | null>(null);
  const [target, setTarget] = useState(to);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ url: string; name: string; size: number } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { IMAGE_DEFAULTS } = await import('@/lib/engine/image');
      setOpt(kind === 'svg' ? { widthMM: 80, depthMM: 3 } : { ...IMAGE_DEFAULTS[mode] });
    })();
  }, [mode, kind]);

  const pick = async (f: File) => {
    setError(null); setResult(null);
    const isSvg = /\.svg$/i.test(f.name) || f.type === 'image/svg+xml';
    if (kind === 'svg' && !isSvg) return setError('Please choose an .svg file.');
    if (kind === 'image' && isSvg) return setError('This page works with PNG and JPG. Use SVG to STL for vector files.');
    setFile(f);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(f));
    try {
      if (isSvg) setSvgText(await f.text());
      else setBmp(await createImageBitmap(f));
    } catch {
      setError('This image could not be read.');
    }
  };

  useEffect(() => {
    if (!opt || (!bmp && !svgText)) return;
    const t = setTimeout(async () => {
      setBusy(true); setResult(null);
      try {
        const m = await import('@/lib/engine/image');
        const obj = kind === 'svg' ? await m.svgToMesh(svgText!, opt.depthMM, opt.widthMM) : m.heightmapToMesh(bmp!, opt);
        setObject(obj); setError(null);
      } catch (e: any) { setError(e?.message || 'Could not build the model.'); }
      finally { setBusy(false); }
    }, 250);
    return () => clearTimeout(t);
  }, [opt, bmp, svgText, kind]);

  const convert = async () => {
    if (!object) return;
    setBusy(true);
    try {
      const { exportScene } = await import('@/lib/engine/export');
      const { blob, fileName } = await exportScene(object, target as any, { name: file?.name || 'image', upAxis: ['glb', 'gltf', 'obj', 'usdz'].includes(target) ? 'z-to-y' : 'keep' });
      if (result) URL.revokeObjectURL(result.url);
      setResult({ url: URL.createObjectURL(blob), name: fileName, size: blob.size });
    } catch (e: any) { setError(e?.message || 'Export failed.'); }
    finally { setBusy(false); }
  };

  const num = (k: string, label: string, min: number, max: number, step: number, unit = 'mm') => (
    <label className="field range">
      <span>{label} <output>{opt?.[k]}{unit ? ' ' + unit : ''}</output></span>
      <input type="range" min={min} max={max} step={step} value={opt?.[k] ?? min} onChange={(e) => setOpt({ ...opt, [k]: Number(e.target.value) })} />
    </label>
  );

  return (
    <div className="studio studio-convert">
      <div className="stage" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) pick(f); }}>
        <Viewport object={object} zUp wireframe={false} autoRotate={false} />
        {!object && !busy && (
          <button type="button" className="stage-empty" onClick={() => input.current?.click()}>
            <b>Drop {kind === 'svg' ? 'an SVG' : 'a PNG or JPG'} here</b>
            <span>{kind === 'svg' ? 'Filled shapes are extruded into a solid' : 'Brightness becomes height'}</span>
          </button>
        )}
        {busy && <div className="stage-busy" role="status"><span className="spinner" aria-hidden />Building…</div>}
        {preview && (
          <figure className={`stage-thumb${mode === 'lithophane' && kind === 'image' ? ' is-litho' : ''}`}>
            <img src={preview} alt="Your image" />
            {mode === 'lithophane' && kind === 'image' && <figcaption>Backlit look</figcaption>}
          </figure>
        )}
      </div>
      <div className="panel">
        <button type="button" className="btn btn-primary btn-upload" onClick={() => input.current?.click()}>{file ? 'Choose another file' : kind === 'svg' ? 'Upload SVG' : 'Upload image'}</button>
        <input ref={input} type="file" hidden accept={kind === 'svg' ? '.svg,image/svg+xml' : 'image/png,image/jpeg,image/webp'} onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />
        <p className="muted small">Processed on your device. Nothing is uploaded.</p>
        <div className="convert-box">
          {kind === 'image' && (
            <fieldset>
              <legend>Style</legend>
              <div className="chips">
                {([['relief', 'Relief'], ['lithophane', 'Lithophane'], ['stamp', 'Logo / stamp']] as const).map(([id, l]) => (
                  <button key={id} type="button" className={`chip${mode === id ? ' on' : ''}`} onClick={() => setMode(id)}>{l}</button>
                ))}
              </div>
            </fieldset>
          )}
          {opt && kind === 'image' && <>
            {num('widthMM', 'Width', 20, 250, 1)}
            {num('baseMM', 'Base thickness', 0.4, 6, 0.1)}
            {num('heightMM', mode === 'lithophane' ? 'Max extra thickness' : 'Relief height', 0.4, 15, 0.1)}
            {mode === 'stamp' && num('threshold', 'Threshold', 10, 245, 1, '')}
            {num('resolution', 'Detail (samples)', 60, 500, 10, '')}
            <label className="check"><input type="checkbox" checked={!!opt.invert} onChange={(e) => setOpt({ ...opt, invert: e.target.checked })} /> {mode === 'lithophane' ? 'Dark areas thicker (normal for lithophanes)' : 'Invert (light areas raised)'}</label>
          </>}
          {opt && kind === 'svg' && <>
            {num('widthMM', 'Width', 10, 300, 1)}
            {num('depthMM', 'Thickness', 0.4, 30, 0.2)}
          </>}
          <label className="field">Download as
            <select value={target} onChange={(e) => { setTarget(e.target.value); setResult(null); }}>
              {['stl', '3mf', 'obj', 'glb', 'ply'].map((f) => <option key={f} value={f}>{f.toUpperCase()}</option>)}
            </select>
          </label>
          <button type="button" className="btn btn-accent" disabled={!object || busy} onClick={convert}>Create {target.toUpperCase()}</button>
          {result && <a className="btn btn-download" href={result.url} download={result.name}>Download {result.name} · {(result.size / 1048576).toFixed(1)} MB</a>}
        </div>
        {error && <p className="alert alert-error" role="alert">{error}</p>}
      </div>
    </div>
  );
}
