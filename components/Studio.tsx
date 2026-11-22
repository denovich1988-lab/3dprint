'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type * as THREE from 'three';
import Viewport, { ViewportHandle } from './Viewport';
import { FORMATS } from '@/lib/data/formats';

type Mode = 'studio' | 'convert' | 'viewer';
type Props = {
  mode?: Mode;
  from?: string;          // expected input extension (convert pages)
  to?: string;            // fixed output (convert pages)
  samples?: boolean;      // show demo models (home)
  title?: string;
};

const OUT_CHOICES = ['stl', '3mf', 'obj', 'glb', 'gltf', 'ply', 'usdz', 'dxf', 'off'];
const ACCEPT = '.stl,.obj,.glb,.gltf,.bin,.png,.jpg,.jpeg,.fbx,.3mf,.ply,.dae,.3ds,.step,.stp,.iges,.igs,.brep,.usdz,.wrl,.amf,.off,.gcode,.gco,.zip';
const SCALES = [
  { v: 1, label: 'Keep size' },
  { v: 1000, label: 'Metres → mm (×1000)' },
  { v: 25.4, label: 'Inches → mm (×25.4)' },
  { v: 10, label: 'Centimetres → mm (×10)' },
  { v: 0.001, label: 'mm → metres (÷1000)' },
];

const nf = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
const isZUp = (ext: string) => FORMATS.find((f) => f.id === ext)?.zUp ?? true;

export default function Studio({ mode = 'studio', from, to, samples = false }: Props) {
  const vp = useRef<ViewportHandle>(null);
  const input = useRef<HTMLInputElement>(null);
  const [object, setObject] = useState<THREE.Object3D | null>(null);
  const [src, setSrc] = useState<{ name: string; ext: string; size: number } | null>(null);
  const [sampleId, setSampleId] = useState<string | null>(null);
  const [group, setGroup] = useState('home');
  const [groups, setGroups] = useState<{ id: string; label: string; items: { id: string; label: string }[] }[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [stats, setStats] = useState<{ tris: number; x: number; y: number; z: number; vol: number; parts: number } | null>(null);
  const [wire, setWire] = useState(false);
  const [spin, setSpin] = useState(mode === 'studio');
  const [drag, setDrag] = useState(false);
  const [target, setTarget] = useState(to || 'stl');
  const [scale, setScale] = useState(1);
  const [up, setUp] = useState<'auto' | 'keep'>('auto');
  const [ascii, setAscii] = useState(false);
  const [separate, setSeparate] = useState(false);
  const [result, setResult] = useState<{ url: string; name: string; size: number } | null>(null);

  const measure = useCallback(async (obj: THREE.Object3D) => {
    const { countTriangles, boundsMM, meshVolume } = await import('@/lib/engine/export');
    let parts = 0;
    obj.traverse((o: any) => { if (o.isMesh) parts++; });
    const b = boundsMM(obj);
    const tris = countTriangles(obj);
    setStats({ tris, ...b, vol: tris < 3_000_000 ? meshVolume(obj) : NaN, parts });
  }, []);

  const loadSample = useCallback(async (id: string) => {
    const { SAMPLES } = await import('@/lib/engine/sample');
    const s = SAMPLES.find((x) => x.id === id)!;
    const obj = s.make();
    setObject(obj); setSampleId(id); setSrc(null); setError(null); setWarnings([]); setResult(null);
    measure(obj);
  }, [measure]);

  useEffect(() => {
    if (!samples) return;
    loadSample('vase');
    import('@/lib/engine/sample').then(({ SAMPLE_GROUPS }) =>
      setGroups(SAMPLE_GROUPS.map((g) => ({ id: g.id, label: g.label, items: g.items.map(({ id, label }) => ({ id, label })) }))));
  }, [samples, loadSample]);

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const list = Array.from(files);
    if (!list.length) return;
    const { extOf } = await import('@/lib/engine/load');
    const main = list.find((f) => !['bin', 'png', 'jpg', 'jpeg'].includes(extOf(f.name))) || list[0];
    const ext = extOf(main.name);
    if (['png', 'jpg', 'jpeg', 'webp', 'svg'].includes(ext) && list.length === 1) {
      setError(ext === 'svg' ? 'SVG files are turned into 3D on the SVG to STL page.' : 'Images are turned into 3D on the Image to STL page.');
      setObject(null); setStats(null);
      return;
    }
    setBusy(`Reading ${main.name}…`); setError(null); setWarnings([]); setResult(null);
    try {
      const { loadFile } = await import('@/lib/engine/load');
      const r = await loadFile(main, list.filter((f) => f !== main));
      setObject(r.object); setWarnings(r.warnings); setSampleId(null);
      setSrc({ name: main.name, ext: ext === 'zip' ? 'stl' : ext, size: main.size });
      setSpin(false);
      measure(r.object);
    } catch (e: any) {
      setError(e?.message || 'This file could not be opened.');
    } finally { setBusy(null); }
  }, [measure]);

  const srcExt = src?.ext || 'stl';
  const autoUp = useMemo(() => {
    const srcZ = sampleId ? true : isZUp(srcExt);
    const dstZ = isZUp(target);
    if (!srcZ && dstZ) return 'y-to-z';
    if (srcZ && !dstZ) return 'z-to-y';
    return 'keep';
  }, [srcExt, target, sampleId]);

  const convert = async () => {
    if (!object) return;
    setBusy(`Converting to ${target.toUpperCase()}…`); setError(null);
    try {
      const { exportScene } = await import('@/lib/engine/export');
      const name = src?.name || (sampleId ? `my3dprinter-${sampleId}` : 'model');
      const { blob, fileName } = await exportScene(object, target as any, {
        scale, upAxis: up === 'auto' ? (autoUp as any) : 'keep', stlAscii: ascii, separate, name,
      });
      if (result) URL.revokeObjectURL(result.url);
      setResult({ url: URL.createObjectURL(blob), name: fileName, size: blob.size });
    } catch (e: any) {
      setError(e?.message || 'Conversion failed.');
    } finally { setBusy(null); }
  };

  const shot = () => {
    const d = vp.current?.screenshot();
    if (!d) return;
    const a = document.createElement('a');
    a.href = d; a.download = (src?.name || 'model').replace(/\.[^.]+$/, '') + '-preview.png'; a.click();
  };

  const showConvert = mode !== 'viewer';
  const fmtName = (id: string) => FORMATS.find((f) => f.id === id)?.name || id.toUpperCase();
  const solidWeight = stats && isFinite(stats.vol) ? (stats.vol / 1000) * 1.24 : NaN;

  return (
    <div className={`studio studio-${mode}`}>
      <div
        className={`stage${drag ? ' is-drag' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files); }}
      >
        <Viewport ref={vp} object={object} zUp={sampleId ? true : isZUp(srcExt)} wireframe={wire} autoRotate={spin} />
        {!object && !busy && (
          <button type="button" className="stage-empty" onClick={() => input.current?.click()}>
            <span className="stage-empty-icon" aria-hidden>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 16V4m0 0-4 4m4-4 4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/></svg>
            </span>
            <b>Drop a {from ? fmtName(from) : '3D'} file here</b>
            <span>or click to choose · STL, 3MF, OBJ, GLB, FBX, STEP, PLY and more</span>
          </button>
        )}
        {busy && <div className="stage-busy" role="status"><span className="spinner" aria-hidden />{busy}</div>}
        {drag && <div className="stage-drop">Drop to open</div>}
        <div className="stage-top">
          {samples && groups.length > 0 && (
            <div className="samples">
              <div className="sample-tabs" role="tablist" aria-label="Demo model categories">
                {groups.map((g) => (
                  <button key={g.id} type="button" role="tab" aria-selected={group === g.id} className={group === g.id ? 'on' : ''}
                    onClick={() => { setGroup(g.id); loadSample(g.items[0].id); setSpin(true); }}>{g.label}</button>
                ))}
              </div>
              <div className="chips" role="group" aria-label="Demo models">
                {groups.find((g) => g.id === group)?.items.map(({ id, label }) => (
                  <button key={id} type="button" className={`chip${sampleId === id ? ' on' : ''}`} onClick={() => { loadSample(id); setSpin(true); }}>{label}</button>
                ))}
              </div>
            </div>
          )}
          {src && <span className="file-pill" title={src.name}>{src.name}</span>}
        </div>
        <div className="stage-tools" role="toolbar" aria-label="View">
          <button type="button" className={spin ? 'on' : ''} onClick={() => setSpin(!spin)} aria-pressed={spin}>Rotate</button>
          <button type="button" className={wire ? 'on' : ''} onClick={() => setWire(!wire)} aria-pressed={wire}>Wireframe</button>
          <button type="button" onClick={() => vp.current?.resetView()}>Reset view</button>
          <button type="button" onClick={shot} disabled={!object}>Save PNG</button>
        </div>
        {stats && (
          <dl className="stage-stats">
            <div><dt>Size</dt><dd>{nf.format(stats.x)} × {nf.format(stats.y)} × {nf.format(stats.z)}</dd></div>
            <div><dt>Triangles</dt><dd>{stats.tris.toLocaleString('en-US')}</dd></div>
            {isFinite(stats.vol) && <div><dt>Volume</dt><dd>{nf.format(stats.vol / 1000)} cm³</dd></div>}
            {isFinite(solidWeight) && <div><dt>Solid PLA</dt><dd>≈ {nf.format(solidWeight)} g</dd></div>}
          </dl>
        )}
      </div>

      <div className="panel">
        <button type="button" className="btn btn-primary btn-upload" onClick={() => input.current?.click()}>
          {object && !sampleId ? 'Open another file' : 'Upload your model'}
        </button>
        <input ref={input} type="file" accept={ACCEPT} multiple hidden onChange={(e) => e.target.files && handleFiles(e.target.files)} />
        <p className="muted small">Files are processed on your device and never uploaded.</p>

        {showConvert && (
          <div className="convert-box">
            {!to && (
              <fieldset>
                <legend>Convert to</legend>
                <div className="chips">
                  {OUT_CHOICES.map((id) => (
                    <button key={id} type="button" className={`chip${target === id ? ' on' : ''}`} onClick={() => { setTarget(id); setResult(null); }}>{fmtName(id)}</button>
                  ))}
                </div>
              </fieldset>
            )}
            <label className="field">Scale
              <select value={scale} onChange={(e) => { setScale(Number(e.target.value)); setResult(null); }}>
                {SCALES.map((s) => <option key={s.v} value={s.v}>{s.label}</option>)}
              </select>
            </label>
            <label className="field">Up axis
              <select value={up} onChange={(e) => { setUp(e.target.value as any); setResult(null); }}>
                <option value="auto">Automatic ({autoUp === 'keep' ? 'no change' : autoUp === 'y-to-z' ? 'Y-up → Z-up' : 'Z-up → Y-up'})</option>
                <option value="keep">Keep as is</option>
              </select>
            </label>
            {target === 'stl' && (
              <label className="check"><input type="checkbox" checked={ascii} onChange={(e) => setAscii(e.target.checked)} /> ASCII STL (larger, human-readable)</label>
            )}
            {stats && stats.parts > 1 && target !== '3mf' && (
              <label className="check"><input type="checkbox" checked={separate} onChange={(e) => setSeparate(e.target.checked)} /> One file per object ({stats.parts}) as ZIP</label>
            )}
            <button type="button" className="btn btn-accent" onClick={convert} disabled={!object || !!busy}>
              Convert to {fmtName(target)}
            </button>
            {result && (
              <a className="btn btn-download" href={result.url} download={result.name}>
                Download {result.name} · {(result.size / 1048576).toFixed(result.size > 1048576 ? 1 : 2)} MB
              </a>
            )}
          </div>
        )}
        {error && <p className="alert alert-error" role="alert">{error}</p>}
        {warnings.map((w) => <p key={w} className="alert">{w}</p>)}
      </div>
    </div>
  );
}
