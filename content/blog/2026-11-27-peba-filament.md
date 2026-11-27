---
title: PEBA filament – what it is, PEBA vs TPU, brands and print settings
seoTitle: PEBA Filament – What It Is, PEBA vs TPU and Settings
description: PEBA filament explained – what polyether block amide is, how it compares with TPU, which brands sell it and the makers' own print and drying settings.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/3efd635a-f844-457e-992d-f6fe894f2dd2/output.png
imageAlt: "Illustration of a springy orange lattice shoe midsole being squeezed beside a soft flexible filament spool, a printed knee pad and a lattice ball"
category: Filament and materials
summary:
  - PEBA (polyether block amide) is a flexible elastomer made of hard polyamide blocks and soft polyether blocks; Pebax is Arkema's trademark for its PEBA range.
  - Filament makers publish densities of about 1.0 g/cm³ for solid PEBA and 70–85% rebound, against about 1.2 g/cm³ and 45–55% for the TPU in SainSmart's comparison table.
  - PEBA prints at 225–260 °C on a direct drive extruder, absorbs moisture and must be dried before printing, and is not recommended for AMS or Bowden setups by Siraya Tech.
faq:
  - q: What is PEBA filament?
    a: PEBA filament is a flexible 3D printing material made from polyether block amide, a thermoplastic elastomer with rigid polyamide (nylon) blocks and soft polyether blocks. Makers sell it in roughly 85A–95A hardness as a lighter, bouncier alternative to TPU.
  - q: Is PEBA better than TPU?
    a: For parts that need to bounce back and stay light, such as midsoles, pads and cushioning, makers' data favours PEBA. TPU is cheaper, easier to print, has higher tensile strength in Fillamentum's comparison and better abrasion resistance in SainSmart's, so it remains the default flexible filament.
  - q: Is Pebax filament the same as PEBA filament?
    a: Pebax is Arkema's brand name for its PEBA polymers. Most filaments are sold as PEBA and do not name the resin supplier, so "Pebax filament" usually just means PEBA filament.
  - q: Can PEBA filament go through a Bambu Lab AMS?
    a: Siraya Tech says its PEBA is not recommended for AMS or Bowden setups, and Bambu Lab notes that the AMS does not support filament that is too soft. Feed PEBA from an external spool straight into a direct drive extruder.
sources:
  - name: Arkema – Pebax elastomer family
    url: https://hpp.arkema.com/en/product-families/pebax-elastomer-family/
  - name: Siraya Tech – PEBA filament collection
    url: https://siraya.tech/collections/peba-filament
  - name: Siraya Tech – Rebound PEBA 95A technical data sheet
    url: https://siraya.tech/pages/siraya-tech-rebound-peba-95a-tds
  - name: Siraya Tech – Rebound PEBA Air technical data sheet
    url: https://siraya.tech/pages/siraya-tech-rebound-peba-air-70a-95a-tds
  - name: SainSmart – PEBA filament product page
    url: https://www.sainsmart.com/products/peba-filament
  - name: Fillamentum – Flexfill PEBA 90A
    url: https://fillamentum.com/collections/flexfill-peba-filament/
  - name: Fillamentum – Release of Flexfill PEBA 90A
    url: https://fillamentum.com/blogs/news/release-of-flexfill-peba-90a/
  - name: eSUN – PEBA product page
    url: https://esun3d.com/peba-product/
  - name: 3DJake – eSUN PEBA-90A product listing
    url: https://www.3djake.com/esun/peba-90a-grey
  - name: QIDI – PEBA 95A product page
    url: https://us.qidi3d.com/products/peba-95a
  - name: Spectrum Filaments – PEBA
    url: https://spectrumfilaments.com/en/filament/peba/
  - name: colorFabb – PEBA filaments
    url: https://colorfabb.us/filaments/materials/peba-filaments
  - name: Bambu Lab Wiki – Compatibility and parameter settings of filaments
    url: https://wiki.bambulab.com/en/x1/manual/compatibility-and-parameter-settings-of-filaments
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**PEBA filament is a flexible 3D printing material made from polyether block amide, a nylon-based elastomer that is lighter and springier than TPU.** It prints like a demanding TPU – direct drive, moderate speed, dry spool – but makers say the parts weigh less and return more energy when compressed, which is why PEBA is popular for shoe midsoles, insoles, pads and other cushioning parts. This guide explains what PEBA is, how it compares with TPU, which PEBA filaments are on the market and the print and drying settings their makers publish. All figures come from the manufacturers' own pages and data sheets (Arkema, Siraya Tech, SainSmart, Fillamentum, eSUN, QIDI, Spectrum and colorFabb), checked November 2026. We have not tested these filaments and do not rank them or compare prices.

## PEBA filament at a glance

| | PEBA filament (from makers' pages) |
|---|---|
| Full name | Polyether block amide (also written polyether-block-amide) |
| Chemistry | Rigid polyamide blocks + soft polyether blocks |
| Best-known resin brand | Pebax (Arkema) |
| Hardness of filaments sold | About 85A–95A; foamed grades down to about 70A |
| Density (solid grades) | 1.00–1.05 g/cm³ |
| Rebound / energy return | Makers quote 70–85% |
| Nozzle temperature | 225–260 °C for most brands (200–240 °C for Spectrum) |
| Extruder | Direct drive recommended |
| Moisture | Hygroscopic – dry before printing |
| Typical uses | Midsoles, insoles, sports pads, bumpers, cushioning, seals |

## What is PEBA?

PEBA is a thermoplastic elastomer – a plastic that behaves like rubber but melts and can be printed like other filaments. Arkema, which sells PEBA under the **Pebax** trademark, describes it as a block copolymer: stiff polyamide (nylon) blocks are joined to soft polyether blocks. Changing the ratio of the two sets how flexible the material is, from fairly rigid to very soft, without adding plasticisers. Arkema's standard grades use a PA12 polyamide block; its bio-based Pebax Rnew range uses PA11 made from castor beans.

Arkema's own claims for the polymer are the reasons it ended up in filament:

- **Low weight** – typically about 20% lighter than competing polymers, according to Arkema.
- **Efficient energy return** – very low hysteresis, meaning little of the energy put into squashing the material is lost as heat.
- **Stable across temperatures** – it does not stiffen much in the cold or soften much in heat.

Arkema lists sports shoes, football boots and ski boots among the main uses, along with medical catheters and breathable films.

**Why it matters:** filament makers rarely say whose resin they use. A spool labelled "PEBA" is the same class of material as Pebax, but not necessarily Arkema's polymer.

## Pebax filament vs PEBA filament

People search for "Pebax filament" because Pebax is the name they know from running shoes. In 3D printing, nearly every product is sold simply as **PEBA**. Siraya Tech describes its foamed Rebound PEBA Air as a "TPE + PA12 copolymer elastomer", and SainSmart calls its PEBA "nylon-based", but none of the product pages we checked name Arkema as the supplier. Treat "Pebax filament" as a search term for PEBA filament in general, and judge each spool by the data its maker publishes.

## PEBA vs TPU

TPU is the flexible filament most people already know (see our [TPU filament guide](/blog/tpu-filament/)). PEBA sits in the same hardness range, so the question is what you gain by switching.

| Property | PEBA (makers' data) | TPU (makers' data) |
|---|---|---|
| Density | 1.00–1.05 g/cm³ | 1.20–1.25 g/cm³ (SainSmart's TPU reference) |
| Rebound | 70–85% (SainSmart), 78% (Siraya Tech) | 45–55% (SainSmart's TPU reference) |
| Tensile strength | 36 MPa (Fillamentum) | 49 MPa (Fillamentum Flexfill TPU) |
| Elongation at break | Over 1000% (Fillamentum) | 600% (Fillamentum Flexfill TPU) |
| Abrasion resistance | "Very good" (SainSmart) | "Excellent" (SainSmart's GT-3 TPU) |
| Cold flexibility | Rebound kept down to −60 °C (Fillamentum) | Not compared |
| Ease of printing | Harder: hotter, more moisture-sensitive | Easier, especially 95A grades |
| AMS / Bowden | Not recommended (Siraya Tech) | Hard grades sometimes work; soft grades not |

In plain terms:

- **PEBA is lighter.** Makers give 12–20% lower weight than TPU for solid grades (QIDI says over 12% lighter than TPU 95A, eSUN and SainSmart say 15–20%). The same midsole printed in PEBA weighs less.
- **PEBA bounces back more.** Every maker leads with rebound. eSUN shows a steel ball bouncing noticeably higher off a PEBA sample than off TPU.
- **TPU is stronger in pull and wear.** Fillamentum's own comparison gives TPU the higher tensile strength, and SainSmart rates TPU's abrasion resistance above PEBA's.
- **PEBA handles cold and chemicals better, per makers.** Fillamentum, QIDI and Spectrum all claim flexibility down to about −40 °C, and Fillamentum and QIDI list resistance to oils, greases and car fluids.

**Tip:** if your part just needs to be flexible – a phone case, a gasket, a cable strain relief – stay with TPU. Choose PEBA when weight and springiness are the point of the part.

## PEBA filaments on the market

These are PEBA filaments we found on the makers' own pages. Hardness is from the product name or data sheet; blank values were not published.

| Filament | Hardness | Density | Rebound claim | Spool |
|---|---|---|---|---|
| Siraya Tech Rebound PEBA 95A | 95A | 1.0 g/cm³ | 78% energy return | 0.8 kg (data sheet) |
| Siraya Tech Rebound PEBA 85A | 85A | – | – | – |
| Siraya Tech Rebound PEBA Air (foamed) | About 95A unfoamed, 70–81A foamed | 0.55–0.73 g/cm³ printed | 60% (Bayshore) | 0.8 kg |
| SainSmart PEBA | 90A | 1.0 g/cm³ | 70–85% | 1 kg |
| eSUN PEBA-90A | 90A | Below 1.05 g/cm³ | Up to 70% | 800 g |
| Fillamentum Flexfill PEBA 90A | 90A | 1.00 g/cm³ | High rebound (no figure) | 500 g, 1.75 or 2.85 mm |
| QIDI PEBA 95A | 95A | 1.01 g/cm³ | 70%+ | 800 g |
| Spectrum PEBA | 92A | 1.02 g/cm³ | High rebound (no figure) | – |
| colorFabb VarioShore PEBA | 40D/85A and 45D/90A | – | High energy return (no figure) | – |

A few notes from the makers' pages:

- **Foamed PEBA is a different animal.** Siraya Tech's Rebound PEBA Air contains a foaming agent: the hotter you print it, the more it foams, the lighter and softer the part becomes. Its data sheet goes from 0.73 g/cm³ and 81A at 240 °C to 0.55 g/cm³ and 70A at 270 °C, and you must cut the flow rate sharply as you raise the temperature. colorFabb's VarioShore line uses the same idea; its PEBA page lists the grades as "ultra lightweight" but gives no settings.
- **Bambu Lab:** at the time of checking we found no PEBA in Bambu Lab's own filament range; a Bambu Lab forum thread from October 2025 is a user request for one. Several third-party PEBA brands publish Bambu Studio profiles instead.
- **Spool sizes vary a lot** – from 500 g (Fillamentum) to 1 kg (SainSmart) – so check the net weight when you compare.

## PEBA print settings by brand

These are the starting values each maker publishes. Where a maker gives no figure, the cell is left empty.

| Filament | Nozzle | Bed | Speed | Fan | Retraction |
|---|---|---|---|---|---|
| Siraya Tech Rebound PEBA 95A | 230–260 °C | 60–100 °C | 30–120 mm/s (start 40–60) | 70–100% | Minimal, from 0.4 mm |
| Siraya Tech Rebound PEBA Air | 230–270 °C | 60–100 °C | 30–120 mm/s (start 30–60) | 50–100% | Off |
| SainSmart PEBA 90A | – | 40 °C | 120 mm/s (max flow 7.2 mm³/s) | – | – |
| eSUN PEBA-90A | 230–260 °C | 60–90 °C | – | – | – |
| Fillamentum Flexfill PEBA 90A | 225–245 °C | 70–90 °C | – | – | – |
| QIDI PEBA 95A | 230–260 °C | 35–75 °C | 20–120 mm/s | – | – |
| Spectrum PEBA | 200–240 °C | 0–50 °C | 15–70 mm/s | Up to 100% | – |

Extra details from the data sheets:

- **First layer:** Siraya Tech suggests 15–20 mm/s and about 5 °C hotter than the rest of the print.
- **Flow:** Siraya Tech starts solid PEBA at about 93–96% flow and calibrates from there; the foamed Air grade starts as low as 53–57% at 270 °C.
- **Nozzle:** a 0.4 mm brass nozzle works for solid PEBA; Siraya Tech says 0.6 mm is easier and faster and recommends 0.6 mm for best foaming with PEBA Air. Spectrum says no hardened nozzle is needed.
- **Build surface:** smooth or textured PEI, or glass with glue stick or Magigoo (Siraya Tech). QIDI recommends a PVA glue stick or adhesive spray on PEI. Use a brim on small footprints.
- **Enclosure:** Siraya Tech calls one "highly recommended" for its 95A grade, mainly to keep large prints from warping; Spectrum says one is not necessary for its PEBA.

**Tip:** settings vary between brands by up to 40 °C at the nozzle. Load the maker's profile, not a generic TPU profile, and print a temperature tower first.

## Drying and storing PEBA

PEBA absorbs moisture readily. Fillamentum calls its PEBA very hygroscopic, Siraya Tech lists 1.69% water absorption for Rebound PEBA 95A and tells you to dry before every print, even a new spool. Wet PEBA typically shows the same symptoms as wet TPU or nylon: popping at the nozzle, stringing, bubbles and rough, weak walls.

| Filament | Maker's drying setting |
|---|---|
| Siraya Tech Rebound PEBA 95A | 50–60 °C, at least 4–6 h |
| Siraya Tech Rebound PEBA Air | 70–75 °C, 4–6 h |
| SainSmart PEBA 90A | 80 °C for 8 h, or 65 °C for 15 h |
| QIDI PEBA 95A | 70–75 °C, 4–6 h (another section of the page says 6–8 h) |
| Fillamentum, Spectrum | Dry before use; drybox recommended (no figures) |

The spread is wide, so follow the label on your spool and never exceed the temperature your dryer and spool are rated for. Siraya Tech recommends keeping opened spools in a dryer or a sealed container with desiccant, below 15% humidity for PEBA Air.

**Tip:** our guides on [how to dry filament](/blog/how-to-dry-filament/) and [filament dryers](/blog/filament-dryer/) cover the equipment and methods.

## Which printers can print PEBA?

PEBA needs the same hardware as soft TPU:

- **Direct drive extruder.** Siraya Tech says direct drive is generally best for flexible filament, and its FAQ says PEBA is not recommended for AMS or Bowden setups. A soft strand compresses and buckles in a long tube.
- **Hotend that reaches 260 °C** for most brands, or 270 °C if you want the softest setting of a foamed grade.
- **No multi-material feeder.** Bambu Lab's filament compatibility page notes the AMS does not support filament that is too soft. Feed PEBA from an external spool holder straight into the toolhead.
- **A tight filament path.** Gaps between the drive gears and the hotend are where flexible filament escapes and tangles.

Most current bed-slingers and CoreXY printers with a direct drive toolhead meet these points. Printers with a Bowden extruder can struggle with any flexible filament.

## What is PEBA filament used for?

Makers list these applications:

- **Footwear:** midsoles, insoles and heel cushions – the use that made the polymer famous, and the most common PEBA print you will see.
- **Sports gear:** protective pads, grips and bouncy parts. Siraya Tech's FAQ even mentions airless basketballs.
- **Cushioning and damping:** vibration mounts, bumpers, springs and shock absorbers (SainSmart, Spectrum).
- **Robotics and drones:** soft grippers, landing gear and flexible joints.
- **Cold or oily environments:** seals and parts exposed to car fluids or temperatures down to about −40 °C (Fillamentum, QIDI, Spectrum).

Fillamentum notes that its PEBA is not certified for food or skin contact, so check the maker's declarations before printing anything for those uses.

**Tip:** midsoles and lattice cushions are usually downloaded as STL or 3MF files. Check the model in our [STL viewer](/stl-viewer/) before slicing, or convert a 3MF with the [3MF to STL converter](/3mf-to-stl/) if your slicer needs it.

## Troubleshooting PEBA prints

**Filament jams or birdnests at the extruder**
- Causes: soft strand buckling, too much speed, a gap in the filament path, Bowden or AMS feeding.
- Fixes, in order: slow down to 30–40 mm/s, feed from an external spool with low drag, reduce extruder tension slightly, switch to a direct drive path.
- Prevention: keep the spool free-spinning and never route PEBA through an AMS.

**Stringing and oozing**
- Causes: wet filament, nozzle too hot, too much retraction.
- Fixes: dry the spool, lower the nozzle temperature by 5 °C at a time, keep retraction minimal (Siraya Tech starts at 0.4 mm).
- Prevention: print from a dryer.

**Bubbly, rough or weak walls**
- Causes: moisture; with foamed grades, the temperature or flow is off.
- Fixes: dry the spool; for PEBA Air, reduce flow to the maker's starting value for your temperature.
- Prevention: store sealed with desiccant.

**Warping or lifting on large prints**
- Causes: cold bed, draughts, small contact area.
- Fixes: raise the bed towards the top of the maker's range, add a brim, use glue stick on PEI, close the enclosure.
- Prevention: Siraya Tech suggests a 100 °C bed for full-plate prints.

## Checklist: your first PEBA print

1. **Check your printer** has a direct drive extruder and reaches at least 260 °C.
2. **Dry the spool** at the maker's temperature, even if it is new.
3. **Load the maker's profile** in your slicer (Siraya Tech and SainSmart publish them) or enter the values from the settings table.
4. **Feed from an external spool** or from the dryer, not through an AMS or Bowden tube.
5. **Prepare the bed:** clean PEI with isopropyl alcohol, add glue stick if the maker suggests it.
6. **Print slowly at first** – 15–20 mm/s first layer, 30–60 mm/s for the rest.
7. **Keep retraction minimal** (or off for foamed grades) and calibrate flow.
8. **Print a temperature tower** and a small test part before a full midsole.
9. **Store leftovers sealed** with desiccant straight after printing.

## Verdict

PEBA filament is a lighter, springier alternative to TPU for parts where bounce and weight matter: shoe midsoles, insoles, pads and cushioning. Makers' data shows solid PEBA at about 1.0 g/cm³ with 70–85% rebound, while TPU keeps the edge in tensile strength, abrasion resistance, ease of printing and cost. You need a direct drive extruder, a hotend that reaches about 260 °C and a dry spool, and you should start from your brand's own settings, because they differ more than with most filaments. For everyday flexible parts, TPU is still the simpler choice; for anything that has to return energy, PEBA is worth the extra care. If you are still choosing a material for a load-bearing part, see our guide to the [strongest 3D printer filament](/blog/strongest-3d-printer-filament/).
