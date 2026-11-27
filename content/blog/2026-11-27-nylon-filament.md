---
title: Nylon filament – PA6, PA12, PA11 and PA-CF explained, with print settings
seoTitle: Nylon Filament – Types, Print Settings and Drying Guide
description: Nylon filament guide – PA6 vs PA12, PA11 and carbon fibre grades, makers' nozzle and bed temperatures, drying, bed surfaces, enclosures and uses.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/7ea63b5e-5fb5-44fe-ab2d-b77aad596b62/output.png
imageAlt: "Illustration of a translucent natural nylon spool sealed in a bag with desiccant next to printed gears, a living hinge and a cable chain"
category: Filament and materials
summary:
  - Nylon filament (polyamide, PA) is a tough, wear-resistant engineering plastic sold as PA6, PA12, PA11, copolymers and carbon- or glass-fibre filled grades.
  - Makers list nozzle temperatures of about 230–300 °C for nylon, plus a hot bed, glue or a dedicated sheet, and usually an enclosure to stop warping.
  - Nylon absorbs water fast – Prusa says up to 10 % of its weight – so it must be dried before printing (Bambu Lab lists 80 °C for 8–12 hours) and kept dry while it prints.
faq:
  - q: Is nylon filament strong?
    a: Yes, it is one of the toughest materials a home printer can print. Polymaker gives up to 80 MPa tensile strength for unfilled nylon with 15–30 % elongation, so it bends before it breaks. Carbon fibre grades go further on stiffness and heat; Bambu Lab lists its PA6-CF at 102 MPa along the layers. Wet nylon loses strength and stiffness, so dry it first.
  - q: What is the difference between PA6 and PA12?
    a: PA6 is stiffer, stronger and more heat resistant but absorbs much more water and warps more. PA12 absorbs less moisture, warps less and is more flexible and impact resistant. In Bambu Lab's data sheets the PA6-based PA6-CF absorbs 2.35 % water at saturation against 0.88 % for the PA12-based PAHT-CF.
  - q: Can any 3D printer print nylon filament?
    a: No. Most nylon needs a nozzle of 250–300 °C, which means an all-metal hot end, a bed of roughly 80–110 °C and ideally an enclosure. Carbon and glass fibre grades also need a hardened nozzle. Some low-warp blends print at lower temperatures, but always check the spool's data sheet against your printer's limits.
  - q: Do you need to dry nylon filament?
    a: Yes. Bambu Lab marks drying as required for nylon and Prusa says badly stored polyamide can absorb water up to 10 % of its weight. Dry it at the maker's temperature (80 °C for 8–12 hours for Bambu Lab PA, 90 °C for 6 hours for Prusament PA11 CF) and print from a dry box.
sources:
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab – PA6-CF technical data sheet V2
    url: https://polyalkemi.no/wp-content/uploads/2024/01/Bambu_PA6-CF_Technical_Data_Sheet-v2.pdf
  - name: Bambu Lab – PAHT-CF technical data sheet
    url: https://cdn.shopify.com/s/files/1/0380/5149/files/Bambu_PAHT-CF_Technical_Data_Sheet.pdf
  - name: Polymaker Wiki – PA (nylon)
    url: https://wiki.polymaker.com/the-basics/3d-printing-materials/pa
  - name: Polymaker Wiki – Types of nylon used in FDM 3D printing
    url: https://wiki.polymaker.com/the-basics/fun-3d-printing-facts/types-of-nylon-used-in-fdm-3d-printing
  - name: Polymaker – PolyMide PA6-CF technical data sheet V5.4
    url: https://polymaker.com/wp-content/uploads/lana-downloads/PolyMide_PA6_CF_TDS_V5.4.pdf
  - name: Prusa Knowledge Base – Polyamide (nylon)
    url: https://help.prusa3d.com/article/nylon-pa_167188
  - name: Prusa Blog – Introducing Prusament PA11 Carbon Fiber
    url: https://blog.prusa3d.com/introducing-prusament-pa11-nylon-carbon-fiber-black-filament-with-excellent-chemical-and-heat-resistance_69135
  - name: Prusa Research – Prusament PA11 Carbon Fiber product page
    url: https://www.prusa3d.com/product/prusament-pa11-carbon-fiber-black-800g-4
  - name: eSUN – 3D printing filament data sheet
    url: https://cdn.shopify.com/s/files/1/1745/6181/files/eSUN_3D_Printing_Filament_Datasheet.pdf
  - name: eSUN – ePA-CF product page
    url: https://esun3d.com/epa-cf-product/
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**Nylon filament is 3D printer filament made from polyamide (PA) – most often PA6, PA12 or PA11, plain or filled with carbon or glass fibre – and it prints some of the toughest, most wear-resistant parts a desktop printer can make.** The price is a demanding material: a hot nozzle, a hot glued bed, no draughts and, above all, dry filament. All settings come from the makers' own pages and data sheets – the Bambu Lab Wiki and Bambu Lab PA6-CF and PAHT-CF data sheets, the Polymaker Wiki and PolyMide PA6-CF data sheet, the Prusa Knowledge Base and Prusament PA11 Carbon Fiber pages, and eSUN's filament data sheet – checked November 2026. We have not tested these filaments; always follow the label on your spool first.

## Nylon filament at a glance

| | Nylon (PA) filament |
|---|---|
| Chemical name | Polyamide (PA) |
| Common types | PA6, PA66, PA12, PA11, PA612, copolymers, PA-CF / PA-GF, PAHT-CF |
| Nozzle temperature | About 230–300 °C depending on grade (makers' ranges below) |
| Bed temperature | Usually 80–110 °C; some low-warp CF grades 25–50 °C |
| Enclosure | Recommended for most grades (Bambu Lab, Prusa, Polymaker) |
| Hot end | All-metal; hardened nozzle for CF and GF grades |
| Drying | Required; 80–100 °C for 4–12 hours depending on maker and grade |
| Strengths | Toughness, wear and abrasion resistance, low friction, heat and chemical resistance |
| Typical uses | Gears, hinges, bushings, jigs and fixtures, brackets, drone and RC parts |

## Types of nylon 3D printing filament (PA filament)

The number after "PA" describes the polymer's chemistry, and it changes how the filament prints and behaves. The table summarises what the Polymaker Wiki and the makers' own pages say about each type.

| Type | What makers say | Print difficulty | Moisture uptake |
|---|---|---|---|
| PA6 | High tensile strength and impact resistance; Polymaker gives 250–270 °C extrusion | Hard – warps without hot bed and enclosure | High |
| PA66 | Stiffer than PA6, good wear and heat resistance, low creep; melts around 260 °C | Hard | High ("highly hygroscopic") |
| PA12 | More flexible, high impact and very good chemical resistance; 240–260 °C | Easier, less warping | Low |
| PA612 | Stiffer than PA12 and less brittle | Easier than PA6 | Lower than PA6 |
| PA11 | Made from castor oil (Prusa); hygroscopic but less than PA6 | Moderate | Lower than PA6 |
| Copolymers (e.g. PA6/66) | Blends tuned for printability; eSUN's ePA-CF uses a nylon 6/66 copolymer | Varies | Varies |
| PA-CF / PA-GF | Nylon filled with chopped carbon or glass fibre for stiffness, heat resistance and less warping | Easier than plain nylon, but abrasive | Follows the base nylon |

Many spools are labelled only "nylon" or "PA". If the type matters, check the technical data sheet; if it is not stated, assume PA6-like moisture sensitivity.

## PA6 vs PA12: which should you choose?

- **PA6** is the stronger, stiffer and more heat-resistant option, but it is the most moisture-sensitive and warps more. It suits stiff structural parts printed in an enclosure.
- **PA12** absorbs far less water, warps less and keeps its dimensions better in humid air. It is more flexible and impact resistant, and it handles chemicals well. It suits parts that must hold tolerances or live outside a dry room.

Bambu Lab's own carbon fibre nylons show the difference clearly. Its PA6-based **PA6-CF** absorbs 2.35 % water at saturation (25 °C, 55 % RH), while **PAHT-CF**, which its data sheet lists as PA12 and other long-chain PA plus carbon fibre, absorbs 0.88 %. PA6-CF is higher in tensile strength along the layers (102 MPa against 88 MPa), but PAHT-CF holds more strength across the layers (64 MPa against 48 MPa) and has better impact strength (57.5 against 40.3 kJ/m²) and a higher heat deflection temperature (194 °C against 186 °C at 0.45 MPa). Both data sheets give dry, annealed values.

**Tip:** for a first nylon print, a PA12 or a carbon fibre nylon is more forgiving than plain PA6. Move to PA6 when you need its stiffness and can keep the filament bone dry.

## Is nylon filament strong?

Yes – nylon is one of the strongest and toughest materials most home printers can handle, but its strength depends on the grade, the print orientation and how wet it is.

- **Unfilled nylon.** Polymaker gives tensile strength up to 80 MPa with 15–30 % elongation at break. That high elongation is the key point: nylon bends and yields rather than snapping, which is why it works for clips, hinges and living-hinge-style parts.
- **Carbon fibre nylon.** Fibres trade some toughness for stiffness and heat resistance. Bambu Lab lists PA6-CF at a heat deflection temperature of 164 °C at 1.8 MPa; Polymaker's PolyMide PA6-CF lists 173 °C.
- **Layer direction.** Parts are weaker across their layers (PA6-CF: 102 MPa along, 48 MPa across), so orient the main load along the layers.
- **Moisture.** Makers publish dry-state figures; wet nylon is softer and less stiff.

For a wider comparison with PC, PETG-CF, PET-CF and TPU, see our guide to the [strongest 3D printer filament](/blog/strongest-3d-printer-filament/).

## Nylon filament print settings from the makers

These are the published starting points. Use the middle of the range, then adjust in 5 °C steps with a temperature tower.

| Filament | Nozzle | Bed | Surface | Chamber / enclosure | Speed |
|---|---|---|---|---|---|
| Bambu Lab PA (generic, wiki) | 260–290 °C | 100–120 °C (plates) or 90–110 °C with glue | Engineering, smooth or textured PEI plate with glue | Enclosed printer recommended | – |
| Bambu Lab PA6-CF | 260–290 °C | 80–100 °C | Engineering, High Temp or Textured PEI plate, glue | 45–60 °C chamber | under 100 mm/s |
| Bambu Lab PAHT-CF | 260–290 °C | 80–100 °C | Engineering, High Temp or Textured PEI plate, PVP glue | 45–60 °C chamber | up to 100 mm/s |
| Polymaker nylon (general) | 220–260 °C (PA12 230–250 °C) | 70–100 °C | PEI, Magigoo or glue stick | Enclosure on open printers | 30–60 mm/s |
| Polymaker PolyMide PA6-CF | 280–300 °C | 25–50 °C | PC or Textured PEI, glue if needed | Enclosed chamber, fan off | 50–300 mm/s |
| Prusa polyamide (general) | 285 °C | 110 °C | Prusa PA Nylon sheet | Enclosure helps a lot | – |
| Prusament PA11 Carbon Fiber | 285 ±10 °C | 110 ±10 °C | Prusa PA Nylon sheet | Not required; ventilate | – |
| eSUN ePA | 230–260 °C | 80–90 °C | – | – | – |
| eSUN ePA-CF / ePA-GF | 230–260 °C | 80–90 °C | – | – | – |

A few points stand out:

- **The range is wide** – from 230 °C (eSUN ePA) to 300 °C (PolyMide PA6-CF) – so a generic nylon profile is only a rough start.
- **Low-warp grades break the rules.** Polymaker's PA6-CF runs on a 25–50 °C bed; do not copy that to another brand.
- **Cooling is low or off.** Bambu Lab lists 0–60 % fan for PA6-CF and Polymaker says fan off for PolyMide PA6-CF.
- **Nozzle size.** For CF and GF nylon, Bambu Lab calls a 0.6 mm hardened nozzle the first choice, 0.4 mm the second, and says not to use 0.2 mm because of clogging. Prusa's PA11 CF profile uses a 0.4 mm hardened, non-high-flow nozzle.

## Printer requirements: hot end, nozzle and enclosure

Before buying a spool, check four things on your printer:

1. **Nozzle temperature.** Most nylon needs 250–300 °C. Polymaker says nylons that print above 240 °C need an all-metal hot end. Prusa specifically advises against its MINI+ for PA11 CF because of the temperature.
2. **Hardened nozzle for fibre grades.** Bambu Lab marks a hardened steel nozzle as required for every PA-CF, PA6-CF, PAHT-CF and glass-fibre grade and says brass and stainless steel nozzles wear quickly. Plain PA does not need one, according to the same table. See our [carbon fiber filament guide](/blog/carbon-fiber-filament/) for more on abrasive filaments.
3. **Bed temperature.** Plan for 80–110 °C for most grades.
4. **Enclosure.** Bambu Lab recommends enclosed printers and says open-frame printers are not recommended for nylon and nylon composites. Prusa says a warm enclosure "helps a lot" against warping, though its PA11 CF prints without one thanks to the fibres. Our [3D printer enclosure](/blog/3d-printer-enclosure/) guide covers options for open printers.

**Fumes:** Prusa notes that polyamides give off a strong smell and ultrafine particles, and asks for a well-ventilated room or an enclosure, ideally with active filtration. Do not print nylon in a bedroom.

**AMS and feeders:** Bambu Lab lists plain PA as AMS-compatible, but among fibre-filled nylons only its own PA-CF and PAHT-CF. Other brands' CF and GF nylons can be too brittle or rough for it.

## Drying nylon filament and keeping it dry

Moisture is the biggest cause of failed nylon prints. Prusa says badly stored polyamide can absorb water up to 10 % of its weight, and that quality can drop within days of exposure. Polymaker's PA6-CF data sheet lists an equilibrium water absorption of 3.33 %. Wet nylon pops at the nozzle and prints bubbly, stringy, weak parts.

| Filament | Maker's drying setting |
|---|---|
| Bambu Lab PA, PA-CF, PA6-CF, PAHT-CF | 80 °C for 8–12 h (blast oven); PA6-CF also 90–100 °C for 12 h on an X1-series heated bed |
| Polymaker nylon (general) | 50–70 °C for 6–8 h |
| Polymaker PolyMide PA6-CF | 100 °C for 8 h |
| Prusa polyamide (general) | At least 4 h, below 90 °C |
| Prusament PA11 Carbon Fiber | 90 °C for 6 h if the spool's history is uncertain |

- **Dry before printing** unless the spool came straight from a sealed bag.
- **Print from a dry box.** Bambu Lab marks desiccant during use as required for nylon and says to keep PA6-CF below 20 % relative humidity. Polymaker suggests keeping nylon in a dryer while printing.
- **Store sealed.** Use an airtight box or vacuum bag with fresh desiccant and a hygrometer.

**Tip:** never set a dryer hotter than the spool and dryer are rated for – the spool can deform and filament can fuse. Our guides on [how to dry filament](/blog/how-to-dry-filament/) and choosing a [filament dryer](/blog/filament-dryer/) cover the methods in detail.

## Bed surfaces and adhesion for nylon

Nylon shrinks as it crystallises, so it pulls up at the corners unless it is stuck down well and kept warm.

- **Bambu Lab:** Engineering Plate, smooth PEI (High Temperature) or Textured PEI plate, with glue. It does not recommend the Cool Plate or liquid glue for PA.
- **Polymaker:** PEI sheets, Magigoo or a glue stick; PC or Textured PEI for PolyMide PA6-CF.
- **Prusa:** its dedicated PA Nylon sheet, which has a matte, satin-like texture. Prusa says to clean it with water, not isopropyl alcohol or acetone.

**Tip:** glue on PEI also acts as a release layer, so the part comes off once the plate cools. Add a brim to long or thin parts.

## Troubleshooting nylon prints

**Warping or corners lifting**
- Causes: draughts, cold room, bed too cool, no glue, sharp corners on large flat parts.
- Fixes, in order: close the enclosure and let the chamber warm up; raise the bed to the top of the maker's range; apply fresh glue; add a brim; round the corners in your CAD model; switch to a CF/GF or PA12 grade.

**Popping, bubbles, stringing or a fuzzy surface**
- Cause: wet filament (by far the most common reason).
- Fixes: dry the spool; print from a dry box; only then tune temperature or retraction.
- Prevention: store sealed with desiccant.

**Weak layers that split**
- Causes: nozzle too cold, too much part cooling, cold air on the print, wet filament.
- Fixes: raise nozzle temperature by 5–10 °C; cut the part fan; enclose the printer; dry the spool.

**Clogging or under-extrusion with CF nylon**
- Causes: 0.2 mm or worn nozzle, brass nozzle eroded by fibres, heat creep.
- Fixes: fit a 0.4–0.6 mm hardened nozzle; check the nozzle for wear; follow the maker's speed limit.

**Tip:** pure, unfilled nylon is also useful for cleaning. Prusa notes it is good for "cold pull" nozzle cleaning, because it grips debris well as it cools.

## Uses: what to print with nylon filament

The Prusa Knowledge Base credits nylon with high mechanical and abrasion resistance, a low friction coefficient and a high melting point, and Polymaker gives continuous use up to about 120 °C for unfilled grades. If your PLA or PETG parts crack, wear at a sliding surface or creep under load, nylon is the usual next step; for sun and weather alone, ASA is far easier.

| Part | Good nylon choice | Why |
|---|---|---|
| Gears, pulleys, bushings | Plain PA6 or PA12 | Low friction, wear resistance, toughness |
| Hinges, clips, snap-fits | PA12 or plain nylon | Bends without snapping |
| Jigs, fixtures, brackets | PA6-CF, PAHT-CF | Stiffness and dimensional stability |
| Drone frames, RC parts | PA6-CF, PA11 CF | Stiff, light, tough |
| Parts near engines or motors | PAHT-CF, PA6-CF, PA11 CF | High heat deflection; PA11 CF resists oils and fuels (Prusa) |
| Parts in humid places | PA12, PA11 or PAHT-CF | Lower moisture uptake than PA6 |

Check size and orientation in our [STL viewer](/stl-viewer/) before slicing.

## Checklist: your first nylon print

1. **Check your printer:** nozzle up to at least 260–290 °C on an all-metal hot end, bed to about 100 °C, and an enclosure or a warm, draught-free room.
2. **Choose the grade:** a CF nylon or PA12 for the first attempt; plain PA6 once you have drying under control.
3. **Fit the right nozzle:** hardened steel, 0.4 or 0.6 mm, for any CF or GF grade.
4. **Dry the spool** at the maker's setting (for example 80 °C for 8–12 hours for Bambu Lab nylons).
5. **Prepare the bed:** the maker's recommended plate with a thin layer of glue, or a dedicated nylon sheet.
6. **Load the maker's profile** or use the middle of the published ranges, part fan low or off.
7. **Let the enclosure warm up** with the bed on, then print from a dry box in a ventilated room.
8. **Run a temperature tower** before any long print, and store the spool sealed afterwards.

## Verdict

Nylon filament is the right choice when a part must be tough, slippery and hard-wearing – or, in carbon fibre form, stiff and heat resistant. PA6 is the strongest but the thirstiest and the most prone to warping; PA12, PA11 and PAHT-CF absorb less water and print more predictably; CF and GF grades warp least but need a hardened nozzle. Success comes down to an all-metal hot end, a warm enclosure with a glued bed, and filament that is dried and kept dry. If your printer cannot meet those needs, PETG or ASA will serve most parts with far less effort.
