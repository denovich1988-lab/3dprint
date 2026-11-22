'use client';
import { useEffect, useMemo, useState } from 'react';
import type { PrinterSpec } from '@/lib/printer-specs';

type Props = { printers: PrinterSpec[]; order: string[] };
const BEST: Record<string, 'volumeL' | 'speed' | 'accel' | 'flow' | 'nozzle' | 'bed'> = {
  'Build volume': 'volumeL', 'Max speed': 'speed', 'Max acceleration': 'accel', 'Max flow': 'flow', 'Max nozzle temperature': 'nozzle', 'Max bed temperature': 'bed',
};

export default function PrinterCompare({ printers, order }: Props) {
  const [sel, setSel] = useState<string[]>(() => printers.slice(0, 2).map((p) => p.slug));
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('p');
    if (q) { const s = q.split(',').filter((x) => printers.some((p) => p.slug === x)).slice(0, 3); if (s.length) setSel(s); }
  }, [printers]);
  useEffect(() => {
    const url = new URL(window.location.href); url.searchParams.set('p', sel.filter(Boolean).join(','));
    window.history.replaceState(null, '', url.toString());
  }, [sel]);
  const chosen = sel.map((s) => printers.find((p) => p.slug === s)).filter(Boolean) as PrinterSpec[];
  const rows = useMemo(() => {
    const keys = new Set<string>(); chosen.forEach((p) => Object.keys(p.rows).forEach((k) => keys.add(k)));
    return [...keys].sort((a, b) => (order.indexOf(a) < 0 ? 99 : order.indexOf(a)) - (order.indexOf(b) < 0 ? 99 : order.indexOf(b)));
  }, [chosen, order]);
  const set = (i: number, v: string) => setSel((s) => { const n = [...s]; n[i] = v; return n.filter((x, j) => x || j < 2); });

  return (
    <div className="cmp">
      <div className="cmp-pick">
        {[0, 1, 2].map((i) => (
          <label key={i}>
            <span>{i === 2 ? 'Printer 3 (optional)' : `Printer ${i + 1}`}</span>
            <select value={sel[i] || ''} onChange={(e) => set(i, e.target.value)}>
              {i === 2 && <option value="">— none —</option>}
              {printers.map((p) => <option key={p.slug} value={p.slug} disabled={sel.includes(p.slug) && sel[i] !== p.slug}>{p.name}</option>)}
            </select>
          </label>
        ))}
      </div>
      <div className="cmp-scroll">
        <table className="cmp-table">
          <thead>
            <tr><th scope="col">Spec</th>{chosen.map((p) => (
              <th scope="col" key={p.slug}>
                {p.image ? <img src={p.image} alt="" width={320} height={180} loading="lazy" /> : null}
                <a href={`/printers/${p.slug}/`}>{p.name}</a>
              </th>))}</tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const k = BEST[r];
              const vals = k ? chosen.map((p) => p.m[k]).filter((v) => isFinite(v)) : [];
              const top = vals.length > 1 && new Set(vals).size > 1 ? Math.max(...vals) : NaN;
              return (
                <tr key={r}>
                  <th scope="row">{r}</th>
                  {chosen.map((p) => {
                    const v = p.rows[r];
                    const best = k && isFinite(top) && p.m[k] === top;
                    return <td key={p.slug} className={best ? 'best' : ''}>{v || <span className="muted">not listed</span>}{best && <span className="best-tag">highest</span>}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="muted small">Values are the manufacturers’ published specifications. “Highest” marks the larger number in that row; it is not a test result. Prices are not compared because they change.</p>
    </div>
  );
}
