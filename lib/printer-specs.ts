// Normalises the `specs` rows of printer pages so printers can be compared and ranked.
// Only manufacturer spec values are used; nothing is scored or invented.
import { listDocs, type Doc } from './content';

export const CANON: Record<string, string> = {
  'build volume': 'Build volume',
  'max hot end temperature': 'Max nozzle temperature', 'max nozzle temperature': 'Max nozzle temperature', 'max hotend temperature': 'Max nozzle temperature',
  'max build plate temperature': 'Max bed temperature', 'max heatbed temperature': 'Max bed temperature', 'max bed temperature': 'Max bed temperature',
  'max toolhead speed': 'Max speed', 'max print speed': 'Max speed', 'max speed': 'Max speed',
  'max acceleration': 'Max acceleration', 'max hot end flow': 'Max flow', 'max flow': 'Max flow',
  'motion': 'Motion system', 'design': 'Motion system', 'motion system': 'Motion system', 'kinematics': 'Motion system',
  'nozzle': 'Nozzle', 'extruder': 'Extruder', 'extruder gears': 'Extruder',
  'display': 'Screen', 'screen': 'Screen', 'camera': 'Camera', 'connectivity': 'Connectivity',
  'filtration': 'Filtration', 'sensors': 'Sensors', 'size and weight': 'Size and weight', 'power': 'Power',
  'enclosure': 'Enclosure', 'multi-colour': 'Multi-colour', 'multi-color': 'Multi-colour', 'combo version': 'Multi-colour',
  'ideal filaments': 'Filaments', 'supported filaments': 'Filaments', 'filaments': 'Filaments', 'filament diameter': 'Filament diameter',
};
export const ORDER = ['Build volume', 'Max speed', 'Max acceleration', 'Max flow', 'Max nozzle temperature', 'Max bed temperature', 'Motion system',
  'Enclosure', 'Multi-colour', 'Nozzle', 'Extruder', 'Filaments', 'Filament diameter', 'Screen', 'Camera', 'Connectivity', 'Filtration', 'Sensors', 'Size and weight', 'Power'];

const num = (s: string) => { const m = s.replace(/,/g, '').match(/(\d+(?:\.\d+)?)/); return m ? parseFloat(m[1]) : NaN; };
export function metrics(rows: Record<string, string>) {
  const bv = rows['Build volume']?.replace(/,/g, '').match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)/);
  const acc = rows['Max acceleration'] || '';
  return {
    volumeL: bv ? (+bv[1] * +bv[2] * +bv[3]) / 1e6 : NaN,
    speed: num(rows['Max speed'] || ''),
    accel: /m\/s²/.test(acc) && !/mm\/s²/.test(acc.split('(')[0]) ? num(acc) * 1000 : num(acc),
    flow: num(rows['Max flow'] || ''),
    nozzle: num(rows['Max nozzle temperature'] || ''),
    bed: num(rows['Max bed temperature'] || ''),
  };
}
export type PrinterSpec = { slug: string; name: string; brand: string; image?: string; rows: Record<string, string>; m: ReturnType<typeof metrics> };

export function printerSpecs(): PrinterSpec[] {
  return listDocs('printers').filter((d) => d.specs?.length).map((d: Doc) => {
    const rows: Record<string, string> = {};
    for (const [k, v] of d.specs!) {
      if (/price/i.test(k)) continue; // prices are not compared
      const c = CANON[k.toLowerCase().trim()] || k;
      rows[c] = rows[c] ? `${rows[c]}; ${v}` : String(v);
    }
    return { slug: d.slug, name: d.shortName || d.title.split(/[:–—(]/)[0].trim(), brand: d.brand || d.category || '', image: d.image, rows, m: metrics(rows) };
  });
}

export const RANKINGS: { id: string; title: string; key: keyof ReturnType<typeof metrics>; unit: string; fmt: (v: number) => string }[] = [
  { id: 'volume', title: 'Largest build volume', key: 'volumeL', unit: 'litres', fmt: (v) => `${v.toFixed(1)} L` },
  { id: 'speed', title: 'Highest rated max speed', key: 'speed', unit: 'mm/s', fmt: (v) => `${v} mm/s` },
  { id: 'accel', title: 'Highest rated acceleration', key: 'accel', unit: 'mm/s²', fmt: (v) => `${v.toLocaleString('en-US')} mm/s²` },
  { id: 'nozzle', title: 'Hottest nozzle (engineering filaments)', key: 'nozzle', unit: '°C', fmt: (v) => `${v} °C` },
  { id: 'bed', title: 'Hottest bed', key: 'bed', unit: '°C', fmt: (v) => `${v} °C` },
];
export const ranked = (ps: PrinterSpec[], key: keyof ReturnType<typeof metrics>) =>
  ps.filter((p) => isFinite(p.m[key])).sort((a, b) => b.m[key] - a.m[key] || a.name.localeCompare(b.name));
