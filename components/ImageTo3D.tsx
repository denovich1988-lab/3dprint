'use client';
import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';
import Viewport from './Viewport';
import EN from '@/lib/i18n/en.json';
const fillT = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));


type Props = { kind?: 'image' | 'svg'; to?: string; defaultMode?: 'relief' | 'lithophane' | 'stamp'; L?: typeof EN.image3d };

export default function ImageTo3D({ kind = 'image', to = 'stl', defaultMode = 'relief', L = EN.image3d }: Props) {
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
    if (kind === 'svg' && !isSvg) return setError(L.needSvg);
    if (kind === 'image' && isSvg) return setError(L.needImg);
    setFile(f);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(f));
    try {
      if (isSvg) setSvgText(await f.text());
      else setBmp(await createImageBitmap(f));
    } catch {
      setError(L.cantRead);
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
      } catch (e: any) { setError(e?.message || L.cantBuild); }
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
    } catch (e: any) { setError(e?.message || L.exportFail); }
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
            <b>{kind === 'svg' ? L.dropSvg : L.dropImg}</b>
            <span>{kind === 'svg' ? L.hintSvg : L.hintImg}</span>
          </button>
        )}
        {busy && <div className="stage-busy" role="status"><span className="spinner" aria-hidden />{L.building}</div>}
        {preview && (
          <figure className={`stage-thumb${mode === 'lithophane' && kind === 'image' ? ' is-litho' : ''}`}>
            <img src={preview} alt={L.yourImage} />
            {mode === 'lithophane' && kind === 'image' && <figcaption>{L.backlit}</figcaption>}
          </figure>
        )}
      </div>
      <div className="panel">
        <button type="button" className="btn btn-primary btn-upload" onClick={() => input.current?.click()}>{file ? L.another : kind === 'svg' ? L.uploadSvg : L.uploadImg}</button>
        <input ref={input} type="file" hidden accept={kind === 'svg' ? '.svg,image/svg+xml' : 'image/png,image/jpeg,image/webp'} onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />
        <p className="muted small">{L.private}</p>
        <div className="convert-box">
          {kind === 'image' && (
            <fieldset>
              <legend>{L.style}</legend>
              <div className="chips">
                {([['relief', L.relief], ['lithophane', L.litho], ['stamp', L.stamp]] as const).map(([id, l]) => (
                  <button key={id} type="button" className={`chip${mode === id ? ' on' : ''}`} onClick={() => setMode(id)}>{l}</button>
                ))}
              </div>
            </fieldset>
          )}
          {opt && kind === 'image' && <>
            {num('widthMM', L.width, 20, 250, 1)}
            {num('baseMM', L.base, 0.4, 6, 0.1)}
            {num('heightMM', mode === 'lithophane' ? L.maxExtra : L.reliefH, 0.4, 15, 0.1)}
            {mode === 'stamp' && num('threshold', L.threshold, 10, 245, 1, '')}
            {num('resolution', L.detail, 60, 500, 10, '')}
            <label className="check"><input type="checkbox" checked={!!opt.invert} onChange={(e) => setOpt({ ...opt, invert: e.target.checked })} /> {mode === 'lithophane' ? L.darkThick : L.invert}</label>
          </>}
          {opt && kind === 'svg' && <>
            {num('widthMM', L.width, 10, 300, 1)}
            {num('depthMM', L.thickness, 0.4, 30, 0.2)}
          </>}
          <label className="field">{L.downloadAs}
            <select value={target} onChange={(e) => { setTarget(e.target.value); setResult(null); }}>
              {['stl', '3mf', 'obj', 'glb', 'ply'].map((f) => <option key={f} value={f}>{f.toUpperCase()}</option>)}
            </select>
          </label>
          <button type="button" className="btn btn-accent" disabled={!object || busy} onClick={convert}>{fillT(L.create, { fmt: target.toUpperCase() })}</button>
          {result && <a className="btn btn-download" href={result.url} download={result.name}>{fillT(L.download, { name: result.name })} · {(result.size / 1048576).toFixed(1)} MB</a>}
        </div>
        {error && <p className="alert alert-error" role="alert">{error}</p>}
      </div>
    </div>
  );
}
