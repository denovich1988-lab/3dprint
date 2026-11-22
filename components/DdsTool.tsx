'use client';
import { useRef, useState } from 'react';
import EN from '@/lib/i18n/en.json';
const fillT = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));


type Props = { direction: 'to-dds' | 'from-dds'; out?: 'png' | 'jpg'; L?: typeof EN.dds };

export default function DdsTool({ direction, out = 'png', L = EN.dds }: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fmt, setFmt] = useState<'dxt5' | 'dxt1' | 'rgba'>('dxt5');
  const [mips, setMips] = useState(true);
  const [outType, setOutType] = useState(out);
  const [preview, setPreview] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ url: string; name: string; size: number } | null>(null);

  const pick = async (f: File) => {
    setFile(f); setError(null); setResult(null); setInfo(null);
    if (direction === 'to-dds') {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(f));
      const b = await createImageBitmap(f).catch(() => null);
      if (!b) return setError(L.cantRead);
      setInfo(`${b.width} × ${b.height} px${(b.width % 4 || b.height % 4) ? ' · ' + L.pad : ''}`);
    } else {
      try {
        const { ddsToImage } = await import('@/lib/engine/dds');
        const r = await ddsToImage(await f.arrayBuffer(), 'image/png');
        if (preview) URL.revokeObjectURL(preview);
        setPreview(URL.createObjectURL(r.blob));
        setInfo(`${r.width} × ${r.height} px · ${r.format}`);
      } catch (e: any) { setError(e?.message || L.cantDds); }
    }
  };

  const run = async () => {
    if (!file) return;
    setBusy(true); setError(null);
    try {
      const base = file.name.replace(/\.[^.]+$/, '');
      let blob: Blob, name: string;
      if (direction === 'to-dds') {
        const { imageToDds } = await import('@/lib/engine/dds');
        blob = await imageToDds(file, fmt, mips); name = `${base}.dds`;
      } else {
        const { ddsToImage } = await import('@/lib/engine/dds');
        const r = await ddsToImage(await file.arrayBuffer(), outType === 'jpg' ? 'image/jpeg' : 'image/png');
        blob = r.blob; name = `${base}.${outType}`;
      }
      if (result) URL.revokeObjectURL(result.url);
      setResult({ url: URL.createObjectURL(blob), name, size: blob.size });
    } catch (e: any) { setError(e?.message || L.convFail); }
    finally { setBusy(false); }
  };

  return (
    <div className="studio studio-convert">
      <div className="stage stage-flat checker" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) pick(f); }}>
        {preview ? <img className="stage-image" src={preview} alt={L.preview} /> : (
          <button type="button" className="stage-empty" onClick={() => input.current?.click()}>
            <b>{direction === 'to-dds' ? L.dropImg : L.dropDds}</b>
            <span>{L.orClick}</span>
          </button>
        )}
      </div>
      <div className="panel">
        <button type="button" className="btn btn-primary btn-upload" onClick={() => input.current?.click()}>{file ? L.another : L.upload}</button>
        <input ref={input} type="file" hidden accept={direction === 'to-dds' ? 'image/png,image/jpeg,image/webp' : '.dds'} onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />
        <p className="muted small">{L.private}</p>
        {info && <p className="small"><b>{file?.name}</b><br />{info}</p>}
        <div className="convert-box">
          {direction === 'to-dds' ? <>
            <label className="field">{L.compression}
              <select value={fmt} onChange={(e) => setFmt(e.target.value as any)}>
                <option value="dxt5">{L.dxt5}</option>
                <option value="dxt1">{L.dxt1}</option>
                <option value="rgba">{L.rgba}</option>
              </select>
            </label>
            <label className="check"><input type="checkbox" checked={mips} onChange={(e) => setMips(e.target.checked)} /> {L.mips}</label>
          </> : (
            <label className="field">{L.saveAs}
              <select value={outType} onChange={(e) => setOutType(e.target.value as any)}>
                <option value="png">{L.png}</option>
                <option value="jpg">{L.jpg}</option>
              </select>
            </label>
          )}
          <button type="button" className="btn btn-accent" disabled={!file || busy} onClick={run}>{direction === 'to-dds' ? L.toDds : fillT(L.toFmt, { fmt: outType.toUpperCase() })}</button>
          {result && <a className="btn btn-download" href={result.url} download={result.name}>{fillT(L.download, { name: result.name })} · {(result.size / 1024).toFixed(0)} KB</a>}
        </div>
        {error && <p className="alert alert-error" role="alert">{error}</p>}
      </div>
    </div>
  );
}
