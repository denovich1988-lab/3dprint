'use client';
import { useRef, useState } from 'react';

type Props = { direction: 'to-dds' | 'from-dds'; out?: 'png' | 'jpg' };

export default function DdsTool({ direction, out = 'png' }: Props) {
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
      if (!b) return setError('This image could not be read.');
      setInfo(`${b.width} × ${b.height} px${(b.width % 4 || b.height % 4) ? ' · not a multiple of 4: edge blocks are padded' : ''}`);
    } else {
      try {
        const { ddsToImage } = await import('@/lib/engine/dds');
        const r = await ddsToImage(await f.arrayBuffer(), 'image/png');
        if (preview) URL.revokeObjectURL(preview);
        setPreview(URL.createObjectURL(r.blob));
        setInfo(`${r.width} × ${r.height} px · ${r.format}`);
      } catch (e: any) { setError(e?.message || 'This DDS could not be read.'); }
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
    } catch (e: any) { setError(e?.message || 'Conversion failed.'); }
    finally { setBusy(false); }
  };

  return (
    <div className="studio studio-convert">
      <div className="stage stage-flat checker" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) pick(f); }}>
        {preview ? <img className="stage-image" src={preview} alt="Preview of your texture" /> : (
          <button type="button" className="stage-empty" onClick={() => input.current?.click()}>
            <b>Drop {direction === 'to-dds' ? 'a PNG or JPG' : 'a DDS file'} here</b>
            <span>or click to choose</span>
          </button>
        )}
      </div>
      <div className="panel">
        <button type="button" className="btn btn-primary btn-upload" onClick={() => input.current?.click()}>{file ? 'Choose another file' : 'Upload file'}</button>
        <input ref={input} type="file" hidden accept={direction === 'to-dds' ? 'image/png,image/jpeg,image/webp' : '.dds'} onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />
        <p className="muted small">Converted on your device. Nothing is uploaded.</p>
        {info && <p className="small"><b>{file?.name}</b><br />{info}</p>}
        <div className="convert-box">
          {direction === 'to-dds' ? <>
            <label className="field">Compression
              <select value={fmt} onChange={(e) => setFmt(e.target.value as any)}>
                <option value="dxt5">DXT5 / BC3 (with alpha)</option>
                <option value="dxt1">DXT1 / BC1 (smallest, 1-bit alpha)</option>
                <option value="rgba">Uncompressed RGBA (largest, exact)</option>
              </select>
            </label>
            <label className="check"><input type="checkbox" checked={mips} onChange={(e) => setMips(e.target.checked)} /> Generate mipmaps</label>
          </> : (
            <label className="field">Save as
              <select value={outType} onChange={(e) => setOutType(e.target.value as any)}>
                <option value="png">PNG (keeps transparency)</option>
                <option value="jpg">JPG (smaller, no transparency)</option>
              </select>
            </label>
          )}
          <button type="button" className="btn btn-accent" disabled={!file || busy} onClick={run}>{direction === 'to-dds' ? 'Convert to DDS' : `Convert to ${outType.toUpperCase()}`}</button>
          {result && <a className="btn btn-download" href={result.url} download={result.name}>Download {result.name} · {(result.size / 1024).toFixed(0)} KB</a>}
        </div>
        {error && <p className="alert alert-error" role="alert">{error}</p>}
      </div>
    </div>
  );
}
