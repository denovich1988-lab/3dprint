#!/usr/bin/env python3
"""Builds blog-keywords.md (articles, sorted by KD) and pages-plan.md (printer pages and tools) from docs/3d-printing-keywords.xlsx + docs/questions.tsv."""
import re, pandas as pd
x = pd.read_excel('docs/3d-printing-keywords.xlsx', sheet_name='All Keywords')[['Keyword', 'US volume', 'KD', 'Category']]
q = pd.read_csv('docs/questions.tsv', sep='\t', names=['Keyword', 'US volume', 'KD']); q['Category'] = 'Question'
df = pd.concat([x, q]).drop_duplicates('Keyword')
SKIP = re.compile(r'^(bambu labs?|bambu|bamboo labs?|creality|prusa|elegoo|anycubic|formlabs|snapmaker|flashforge|qidi|sovol|ultimaker|makerbot|voron|phrozen|toybox|toy box|3d printer|filament|cura|ams|pla|petg)$|download|discount|coupon|promo|\bstore\b|login|news|leadership|management|\(\)|sale\b|black friday|near me|nearby|patent|toybox killer|the toybox|millennial|jobs|classes|ender (dragon|chest|portal|pearl|eye|lilies|magnolia)|eye of ender|imagetostl|for sale|shop deals|halloween|easter|pottery|poly and bark|cura leaf|rbxm|pmx|mdl to|max to obj|sldprt|sldasm|slddrw|blend|skp|sketchup|f3d|\bipt\b|dwg|3dm|scad|navy su|insurance ams|lax to|flights|bkk|dps|top rated 3d printer|vs alternatives|reviews 3d printer|worth buying|under 200 3d printer|comparison 3d printer|recommended by pros|for home use 3d printer|for small apartments|that last 3d printer|most durable 3d printer|in 2026 3d printer|for beginners 3d printer (setup|common|how)|cheapest 3d printer (how|common|buying)|best 3d printer common|old 3d printer extruder|meat slicer|mandoline|slicer in (excel|google)|sliding filament|pla keywords|^who pla|sebaceous|riu bambu|bambu (earth|papers|rapper)|prik nam|live resin|rosin|orca vs (great|killer|shark|sperm|pilot|megalodon|dolphin|blue|humpback|leopard|false)|vitamin|milk|sony a1|keycaps|pvc|tooth|hp sauce|epoxy|uv resin|resin art|resin (molds?|coasters|jewelry|table|dice|earrings|flowers)|flowers|incense|shilajit|pipe|minecraft|stardew|dreamlight|coral island|arc synthetic|pokopia|lego set|elephant foot (plant|yam|palm|tree|succulent|stool|umbrella|glacier|anatomy|bones|skeleton|x ?ray|disease|radiation|radioactive|caudex|ipa)|chernobyl|fukushima|rubik|old navy|first lite|first layer of (skin|the)|marine layer|nike|arcteryx|derek cattani|bed (bug|bath|frame|sizes?|sheets?|risers|rails|jet|time|drawing|and breakfast)|klipper golf|kaneohe|kizer|roi klipper|bahaya|growthzone|sfo to|jfk to|bos to|msp to|ord to|pdx to|ams to|toybox printer food|resin out|get resin|resin off|remove resin|clean resin|polish|sand epoxy|smoke|^how to (make|use|work with|color|cure|dry|mix) (epoxy )?resin|how long does (epoxy )?resin|resin take|resin to (harden|cure|dry)')
INFO = {'Comparison', 'How-to & explainers', 'Troubleshooting & maintenance', 'Filament & materials', 'Buying guides & reviews', 'Price & deals', 'Printer types & general', 'Print ideas & models', 'Setup, software & manuals', 'Question', 'Other 3D printing'}
CLUSTERS = [
 ('how-much-does-a-3d-printer-cost', r'(how much|cost|price|expensive|money).*(3d )?printer$|how much (is|does) (a )?(good )?3d printer|^3d printer (price|cost)|cost of 3d printer|is 3d printing expensive|how much is 3d printer\??$|how much (money|for)'),
 ('how-much-does-3d-printing-cost', r'cost to 3d print|3d printing cost|how much does it cost to 3d print'),
 ('how-much-does-filament-cost', r'(how much|cost).*filament|filament cost'),
 ('how-does-a-3d-printer-work', r'how (does|do)? ?(a )?3d print(er|ing)? works?|3d printer how it works|how 3d print(er|ing) works'),
 ('how-does-a-resin-printer-work', r'resin (3d )?printer work|what is a resin (3d )?printer'),
 ('what-to-3d-print', r'what (can|should|to|do)( you| i)? ?(make|print|do|3d print)|things to (make|print|3d print)|3d print(er|ing)? ideas|cool things to|useful things|fun things|best things to|stuff to 3d print|what can (a|you) 3d print|ideas to make|3d printer projects|easy 3d printing ideas|coolest things'),
 ('things-to-3d-print-and-sell', r'to sell|make money|3d printing business'),
 ('is-pla-food-safe', r'food safe|food-safe|dishwasher safe'),
 ('what-is-ams-in-3d-printing', r'what (is|does) ams|ams (mean|3d printing)|ams in 3d printing'),
 ('how-to-dry-filament', r'dry(ing)? (pla|petg|tpu|filament|3d printer filament)|filament without a dryer|need to be dried|dry filament in oven|temp to dry|how long to dry|keep filament dry'),
 ('how-to-store-filament', r'store (pla |3d printer )?filament|filament storage'),
 ('how-to-clean-a-3d-printer-nozzle', r'clean.*nozzle|unclog|nozzle clog'),
 ('how-to-clean-a-3d-printer-bed', r'clean.*(bed|pei plate)'),
 ('how-to-use-a-3d-printer', r'how (to|do you) (use|work|start) (a )?3d print(?!ing in architecture)|how to 3d print( something)?$|^how to 3d print$|use a 3d printer for beginners|start 3d printing|3d printing for beginners|is 3d printing hard'),
 ('how-to-make-stl-files', r'(make|create|design).*(3d print(er)? (files?|models?)|3d models? for printing|stl files?|for 3d printing|3d print models?)|your own 3d print'),
 ('what-is-pla', r'^what (is|does) (a )?pla( filament| plastic| made of| filament made of| stand for.*)?\??$|pla stand for'),
 ('what-is-petg', r'^what (is|does) petg( filament| stand for| filament used for)?$'),
 ('pla-vs-pla-plus', r'pla ?\+|pla plus|pla pro'),
 ('petg-vs-pla', r'(pla.*petg|petg.*pla)(?!.*abs)|petg (stronger|better) than pla'),
 ('petg-vs-abs', r'(petg.*abs|abs.*petg)(?!.*pla)'),
 ('pla-vs-abs', r'(pla.*abs|abs.*pla)(?!.*petg)|abs stronger than pla'),
 ('pla-vs-petg-vs-abs', r'pla.*petg.*abs|pla.*abs.*petg|petg.*pla.*abs'),
 ('asa-vs-abs', r'asa.*abs|abs.*asa'),
 ('resin-vs-filament-3d-printer', r'resin.*(filament|3d printer)|filament.*resin|fdm vs resin|resin printer vs'),
 ('3d-printer-filament-types', r'filament types|types of filament|best filament for 3d printing|what is (a )?filament|what is a 3d filament|3d filament$|what material (is used|does)|filament made of'),
 ('strongest-3d-printer-filament', r'strongest.*filament'),
 ('how-to-calibrate-a-3d-printer', r'calibrat'),
 ('z-offset', r'z offset'),
 ('3d-print-stringing', r'stringing'),
 ('3d-print-not-sticking-to-bed', r'not sticking|adhesion'),
 ('3d-print-warping', r'warping'),
 ('elephant-foot-3d-printing', r'elephant foot'),
 ('under-extrusion-vs-over-extrusion', r'(under|over)[ -]extrusion'),
 ('layer-shift-3d-printing', r'layer shift'),
 ('heat-creep-3d-printing', r'heat creep'),
 ('first-layer-problems', r'first layer'),
 ('bed-leveling', r'bed level'),
 ('3d-print-supports', r'supports?'),
 ('infill-in-3d-printing', r'infill'),
 ('brim-and-raft-in-3d-printing', r'\bbrim\b|\braft\b'),
 ('how-much-electricity-does-a-3d-printer-use', r'electricity|power does a 3d printer'),
 ('how-long-does-3d-printing-take', r'how long (does|to)( it take to)? 3d print|let 3d print cool'),
 ('best-3d-printer-for-beginners', r'beginner|entry level'),
 ('best-3d-printer-for-kids', r'for kids|kids 3d printer|3d printer kids'),
 ('best-resin-3d-printer', r'best resin'),
 ('3d-printer-software', r'(software|apps?) (for|to use for) 3d print|3d print(er|ing) (software|apps?)$|cad software|modeling software|design software|slicer software|best 3d printer software|3d printer apps?$'),
 ('remove-3d-print-from-bed', r'(remove|get) 3d print (from|off) bed'),
 ('remove-filament-from-3d-printer', r'remove filament|get filament out|unload filament'),
 ('what-is-slicing-in-3d-printing', r'slicing in 3d|what is slicing'),
 ('can-you-3d-print-metal', r'metal'),
 ('is-pla-toxic', r'toxic'),
 ('3d-printed-house', r'3d printed (house|homes?)|3d printing houses|house cost'),
 ('3d-printed-fidget-toys', r'fidget'),
 ('3d-printed-dragon', r'dragon(?! egg)'),
 ('3d-printer-upgrades', r'upgrades'),
 ('3d-printer-tools', r'tool kit|3d printer tools|3d printing tools|maintenance tool'),
 ('lithophane', r'lithophane'),
]
STOP = {'3d','printer','printers','printing','for','online','free','to','of','file','files','converter','convert','is','do','does','you','your','with','in','on','what','my','how','and','the','a','an','lab','labs'}
def cluster(k):
    for slug, pat in CLUSTERS:
        if re.search(pat, k): return slug
    s = k.lower().replace('bamboo', 'bambu')
    w = sorted({t for t in re.split(r'[^a-z0-9+]+', s) if t and t not in STOP})
    return '~' + ' '.join(w)
slugify = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower().replace('+', ' plus')).strip('-')[:60]
df = df[~df['Keyword'].str.contains(SKIP)]
blog = df[df['Category'].isin(INFO)].copy()
# printer model / brand queries stay in pages-plan; setup queries about one product stay in the blog
blog['c'] = blog['Keyword'].map(cluster)
groups = []
for c, d in blog.groupby('c'):
    d = d.sort_values('US volume', ascending=False)
    main = d.iloc[0]
    kd = d['KD'].dropna()
    groups.append(dict(slug=c if not c.startswith('~') else slugify(main['Keyword']), main=main['Keyword'], vol=int(d['US volume'].sum()),
                       kd=int(main['KD']) if pd.notna(main['KD']) else (int(kd.min()) if len(kd) else None),
                       variants=list(d['Keyword'][1:]), cat=main['Category']))
g = pd.DataFrame(groups)
DONE = {'petg-vs-pla': 'blog/petg-vs-pla', 'is-pla-food-safe': 'blog/is-pla-food-safe', 'p1s-vs-p2s': 'blog/bambu-lab-p1s-vs-p2s', 'a1-vs-a1-mini': 'blog/bambu-lab-a1-vs-a1-mini'}
def done(r):
    if r['slug'] in DONE: return DONE[r['slug']]
    if re.search(r'p1s.*p2s|p2s.*p1s', r['main']): return 'blog/bambu-lab-p1s-vs-p2s'
    if re.search(r'a1.*a1 mini|a1 mini.*a1', r['main']): return 'blog/bambu-lab-a1-vs-a1-mini'
    return None
g['done'] = g.apply(done, axis=1)
g['kdsort'] = g['kd'].fillna(5)
g = g.sort_values(['kdsort', 'vol'], ascending=[True, False])
bands = [('KD 0–5 (easiest)', 0, 5), ('KD 6–10', 6, 10), ('KD 11–20', 11, 20), ('KD 21–35', 21, 35), ('KD over 35 (later)', 36, 100)]
out = ['# my3dprinter.io – blog keywords by KD', '',
       'Articles for /blog/, from docs/3d-printing-keywords.xlsx and Ahrefs question keywords (US, Nov 2026).',
       'Sorted by Keyword Difficulty (easiest first), then by total US volume of the group. One line = one article; the variants go into headings and the FAQ.',
       'Line format: `- [ ] slug | main keyword | US volume (all variants) | KD | variants`. Rows with an empty KD have no Ahrefs score yet; treat them as KD 5.',
       'Tick when published: `- [x] slug | ... | blog/slug`. Mark `- [-]` with a reason if it cannot be written accurately or duplicates another post.', '']
for name, lo, hi in bands:
    d = g[(g['kdsort'] >= lo) & (g['kdsort'] <= hi)]
    d = d.sort_values('vol', ascending=False)
    out += [f'## {name} — {len(d)} articles', '']
    for _, r in d.iterrows():
        kd = '' if pd.isna(r['kd']) else int(r['kd'])
        has = isinstance(r['done'], str)
        m = 'x' if has else ' '
        out.append(f"- [{m}] {r['slug']} | {r['main']} | {r['vol']} | {kd} | {'; '.join(r['variants'][:15])}" + (f" | {r['done']}" if has else ''))
    out.append('')
open('blog-keywords.md', 'w').write('\n'.join(out))
g.drop(columns=['kdsort']).assign(variants=g['variants'].map('; '.join)).to_csv('docs/blog-plan.csv', index=False)
print('blog articles:', len(g), 'done:', g['done'].map(lambda v: isinstance(v, str)).sum())
print(g.groupby(pd.cut(g['kdsort'], [-1, 5, 10, 20, 35, 100])).size().to_dict())

# ---------- pages-plan.md: printer pages and tools ----------
import json, glob
tools_src = open('lib/data/tools.ts').read()
tool_slugs = set(re.findall(r"slug: '([^']+)'", tools_src)) | {f"{a}-to-{b}" for a, b in re.findall(r"meshPair\('([^']+)', '([^']+)'", tools_src)} | {f"{v}-viewer" for v in ['stl','3mf','obj','glb','step','ply','fbx','gltf']} | {'3d-viewer'}
printer_files = {f.split('/')[-1][11:-3] for f in glob.glob('content/printers/*.md')}
ALIAS = [(r'\bbamboo\b','bambu'),(r'\bbambu labs?\b','bambu'),(r'\blabs?\b',''),(r'\bps1\b','p1s'),(r'\bps2\b','p2s'),(r'\bx1 carbon\b','x1c'),(r'\bx1\b','x1c'),(r'\bcreality ender\b','ender'),(r'\boriginal prusa\b','prusa')]
def pkey(k):
    s = k.lower()
    for a, b in ALIAS: s = re.sub(a, b, s)
    return ' '.join(sorted({t for t in re.split(r'[^a-z0-9+]+', s) if t and t not in STOP | {'combo'}}))
pr = df[df['Category'] == 'Printer models & brands'].copy(); pr['g'] = pr['Keyword'].map(pkey)
tl = df[df['Category'].isin(['Converter tool', 'Viewer tool', 'File format guide'])].copy()
def tkey(k):
    k = k.lower().replace('.', '').replace('stp', 'step').replace('jpeg', 'jpg')
    m = re.search(r'(\w+) (?:file )?to (\w+)', k)
    if m: return f"{m.group(1)}-to-{m.group(2)}"
    if 'view' in k: return (re.search(r'(\w+) (?:file )?viewer', k).group(1) if re.search(r'(\w+) (?:file )?viewer', k) and re.search(r'(\w+) (?:file )?viewer', k).group(1) not in ('3d','model','object','online','file') else '3d') + '-viewer'
    return slugify(k)
tl['g'] = tl['Keyword'].map(tkey)
DONE_P = {'a1 bambu': 'bambu-lab-a1', 'a1 bambu mini': 'bambu-lab-a1-mini', 'bambu p1s': 'bambu-lab-p1s', 'p1s': 'bambu-lab-p1s', 'bambu p2s': 'bambu-lab-p2s', 'p2s': 'bambu-lab-p2s', 'a1': 'bambu-lab-a1', 'a1 mini': 'bambu-lab-a1-mini'}
out = ['# my3dprinter.io – printer pages and tool pages', '', 'From docs/3d-printing-keywords.xlsx. Blog articles are planned in blog-keywords.md.',
       'Line: `- [ ] slug | main keyword | US volume (all variants) | KD | variants`. Tick with the path when published; `- [-]` with a reason if not possible.', '',
       'Printer pages go to content/printers/YYYY-MM-DD-<slug>.md (use a clean slug like bambu-lab-h2d). Brand queries such as "bambu 3d printer" become a brand hub page (e.g. bambu-lab-3d-printers) listing all models.', '']
for title, data, kind in [('Printer models and brand hubs', pr, 'p'), ('Converters, viewers and format pages', tl, 't')]:
    rows = []
    for gk, d in data.groupby('g'):
        d = d.sort_values('US volume', ascending=False); m = d.iloc[0]
        if kind == 'p':
            path = DONE_P.get(gk); path = f'printers/{path}' if path else None; slug = slugify(m['Keyword'].replace('bamboo', 'bambu'))
        else:
            slug = gk; path = f'/{gk}/' if gk in tool_slugs else None
        rows.append((int(d['US volume'].sum()), slug, m['Keyword'], '' if pd.isna(m['KD']) else int(m['KD']), '; '.join(d['Keyword'][1:12]), path))
    rows.sort(reverse=True)
    out += [f'## {title} ({len(rows)})', '']
    for vol, slug, mk, kd, var, path in rows:
        out.append(f"- [{'x' if path else ' '}] {slug} | {mk} | {vol} | {kd} | {var}" + (f' | {path}' if path else ''))
    out.append('')
open('pages-plan.md', 'w').write('\n'.join(out))
print('pages-plan:', sum(1 for l in out if l.startswith('- [')), 'done', sum(1 for l in out if l.startswith('- [x]')))
