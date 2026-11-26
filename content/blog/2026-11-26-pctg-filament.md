---
title: PCTG filament – what it is, how it differs from PETG and how to print it
seoTitle: PCTG Filament – What It Is, PCTG vs PETG, Settings
description: PCTG filament explained – what the copolyester is, how it compares with PETG, makers' nozzle, bed, cooling and drying settings, clear prints and best uses.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/26a880fe-2fba-4aef-8aad-d5d25a7ef486/output.png
imageAlt: "Illustration of a crystal-clear printed bottle cage and transparent lamp shade beside a clear spool on a textured build plate"
category: Filament and materials
summary:
  - PCTG is a glycol-modified copolyester from the same family as PETG, in which more than half of the glycol is replaced by CHDM, making it tougher and more ductile.
  - Makers' data sheets put PCTG at about 250–280 °C at the nozzle, roughly 10–20 °C hotter than typical PETG, with a 60–110 °C bed and low part cooling.
  - Makers market PCTG for much higher impact toughness than PETG, good clarity in transparent colours and better chemical resistance, but it bonds very strongly to smooth build plates.
faq:
  - q: What is PCTG filament good for?
    a: Functional parts that take knocks or flex – clips, enclosures, brackets, jigs, RC and drone parts, automotive interior parts – and clear prints such as covers, lamp shades and containers. Makers list good chemical resistance, so it also suits cases and housings that meet oils, alcohol or cleaners.
  - q: What's the difference between PETG and PCTG?
    a: Both are glycol-modified copolyesters. In PETG less than half of the glycol is replaced by CHDM; in PCTG more than half is. That makes PCTG more ductile and impact-resistant, and makers claim slightly better heat and chemical resistance. PCTG prints a little hotter and with less cooling.
  - q: Is PCTG filament hard to print?
    a: No harder than PETG on most printers. It needs a hot end that reaches about 260–270 °C, a heated bed and a textured PEI plate or a release layer, because it sticks very hard to smooth PEI and glass. No enclosure or hardened nozzle is needed for plain PCTG.
  - q: Is PCTG food safe?
    a: Some makers, such as Fiberlogy, describe their PCTG as suitable for food contact. A printed part is a different matter – layer lines trap bacteria and the nozzle and printer parts can contaminate it – so treat printed PCTG like any other printed plastic and seal or avoid it for food use.
sources:
  - name: 3D-Fuel – What is PCTG filament? Benefits, uses and comparison
    url: https://www.3dfuel.com/blogs/news/what-is-pctg-filament-benefits-uses-comparison
  - name: 3D-Fuel Support – Pro PCTG print profiles
    url: https://support.3dfuel.com/hc/en-us/articles/22046343945495-Pro-PCTG-Print-Profiles
  - name: Fiberlogy – PCTG filament page
    url: https://fiberlogy.com/en/fiberlogy-filaments/pctg/
  - name: Spectrum Filaments – PCTG Premium technical data sheet
    url: https://123-3d.nl/pdf/Spectrum_PCTG_Premium_TDS_EN.pdf
  - name: Push Plastic – PCTG technical data sheet
    url: https://cdn.shopify.com/s/files/1/0260/7421/files/Push_Plastic_PCTG_TDS.pdf
  - name: Hackaday – Comparing PETG and PCTG filaments (2026)
    url: https://hackaday.com/2026/09/07/comparing-petg-and-pctg-filaments/
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Prusa Knowledge Base – PETG
    url: https://help.prusa3d.com/article/petg_2059
tools: [stl-viewer, 3mf-viewer, stl-to-3mf]
---
**PCTG filament is a glycol-modified copolyester – a close relative of PETG – that prints at similar temperatures but gives tougher, more ductile and often clearer parts, which is why it is sold as an upgrade for functional PETG prints.** It runs on any printer that can print PETG with a little more heat, needs no enclosure and no hardened nozzle, and suits parts that have to take knocks. This guide explains what PCTG is, how it really differs from PETG, the settings makers publish, how to get clear prints and where it makes sense. Settings and figures come from the data sheets and pages of 3D-Fuel, Fiberlogy, Spectrum Filaments and Push Plastic, plus the Bambu Lab wiki and Prusa's knowledge base for PETG, checked November 2026. We have not tested PCTG ourselves; your spool label and slicer profile come first.

## PCTG filament at a glance

| | PCTG (makers' data) |
|---|---|
| Full name | Polycyclohexylenedimethylene terephthalate, glycol-modified |
| Family | Copolyester, like PETG |
| Nozzle temperature | About 250–280 °C (250–270 °C on most data sheets) |
| Bed temperature | 60–110 °C depending on maker; often 80 °C on textured PEI |
| Part cooling | Low – 0–25 % on Fiberlogy's sheet; some makers allow more |
| Print speed | Up to about 100–110 mm/s on makers' sheets |
| Heat deflection | 76 °C at 0.455 MPa (Spectrum and 3D-Fuel, ISO 75) |
| Enclosure | Not required |
| Hardened nozzle | Not required for plain PCTG (needed for CF/GF versions) |
| Drying | 60 °C for 4 h (Fiberlogy) to 70 °C for 6–8 h (3D-Fuel) |
| Strengths | Impact toughness, ductility, clarity, chemical resistance |
| Weak points | Sticks too hard to smooth PEI and glass; a few degrees hotter than PETG; fewer slicer profiles |

## What is PCTG?

PCTG and PETG are both modified versions of PET, the polyester used for drink bottles. The difference is in the glycol part of the chain. In standard PET it is ethylene glycol. In PETG some of it is replaced with a bulkier molecule, cyclohexanedimethanol (CHDM), which stops the plastic crystallising and makes it easier to print. As Hackaday explains it, PETG replaces less than half of the glycol with CHDM, while PCTG replaces more than half.

That extra CHDM is what changes the behaviour: PCTG is more ductile, takes impacts better and, according to makers, resists chemicals and heat slightly better. It is still an amorphous copolyester, so it prints with the same habits as PETG – no enclosure, low warping, good layer bonding.

**What does PCTG stand for?** Polycyclohexylenedimethylene terephthalate, glycol-modified. Some brands write "PCTG Pro" or "Pro PCTG"; these are brand names, not separate materials.

## PCTG vs PETG

| | PETG | PCTG |
|---|---|---|
| CHDM share of the glycol | Less than half | More than half |
| Nozzle temperature | About 230–250 °C (Bambu Lab lists 240–270 °C for its PETG) | About 250–270 °C (3D-Fuel up to 280 °C) |
| Bed | About 70–90 °C | 60–110 °C depending on maker |
| Impact toughness | Good | Makers claim far higher: "8–12×" (3D-Fuel), "up to 20×" (Fiberlogy) |
| Ductility | Bends, then can crack | Bends further before breaking; Spectrum lists 220 % elongation at break |
| Heat resistance | Glass transition about 80 °C | 3D-Fuel says about 5–15 °C higher than typical PETG |
| Clarity (clear colours) | Good | Spectrum says higher than standard PETG |
| Chemical / UV resistance | Good | Makers claim better |
| Ease of printing | Easy | Easy; slightly hotter, less cooling |

The impact claims are the makers' own marketing figures, so treat the multipliers with care. An independent comparison summarised by Hackaday in 2026 – tests by the My Tech Fun channel on transparent PETG and PCTG from the same maker – found PCTG more flexible and ductile, much more impact-resistant and better at holding up to heat, while needing higher print temperatures, closer to ASA presets.

**Tip:** if your PETG parts crack at snap-fits, screw bosses or on impact, PCTG is the obvious thing to try first. If they fail by softening in heat, compare with [ASA filament](/blog/asa-filament/) too. Our [PETG filament guide](/blog/petg-filament/) covers the material PCTG is replacing.

## PCTG filament print settings from makers' data sheets

| Setting | 3D-Fuel Pro PCTG | Fiberlogy PCTG | Spectrum PCTG Premium |
|---|---|---|---|
| Nozzle | 250–280 °C | 250–270 °C | 250–270 °C |
| Bed | 80 °C, textured PEI, no glue | 90–110 °C, tape, PVA glue or hairspray | 60–100 °C |
| Part cooling | As low as possible | 0–25 % | Up to 100 % |
| Speed | Outer walls ≤ 100 mm/s (50 mm/s for best finish) | Under 100 mm/s | 40–110 mm/s |
| Retraction | Calibrate; retract in infill too (Bambu profiles) | 1–2 mm direct, 4–6 mm Bowden | – |
| Enclosure | Not required | Not required | Not required |
| Drying | 70 °C, 6–8 h when needed | 60 °C, 4 h | No drying procedure given |

The ranges overlap: a 260 °C nozzle and an 80 °C bed sit inside all three. Spectrum's sheet also confirms that plain PCTG needs no hardened or ruby nozzle.

A few extra points from 3D-Fuel's profile notes:

- **Calibrate pressure advance** (linear advance) for PCTG; do not reuse a PETG value.
- **Avoid grid infill** – 3D-Fuel says it can make PCTG build up on the nozzle; use gyroid or cubic.
- **Do not share a nozzle with PLA.** PLA residue can coat the PCTG and weaken layer bonding. Purge well or clean the nozzle when switching.
- **Lower cooling helps layer bonding.** 3D-Fuel reduced fan speeds in its later profiles for this reason.

**Tip:** start in the middle of the overlap – 260 °C, 80 °C bed on textured PEI, low fan, outer walls at 50 mm/s – then print a temperature tower and adjust in 5 °C steps.

## Bed adhesion: PCTG sticks very hard

The most common PCTG problem is not poor adhesion but too much. Fiberlogy warns not to print directly on the bare bed or glass because the bond can damage the surface, and recommends masking tape. 3D-Fuel recommends textured PEI and warns against smooth PEI, where parts stick too well.

- **Textured PEI:** the usual choice; let the plate cool fully before removing parts.
- **Smooth PEI or glass:** use a release layer – glue stick, PVA glue or tape.
- **Do not over-squash** the first layer; it makes the bond even stronger.

## Clear PCTG prints

Clarity is one of PCTG's selling points: Spectrum says its transparent colours are clearer than standard PETG, and Fiberlogy lists high optical transparency. Printed parts will never be glass-clear, because every layer line and infill wall scatters light. Practical ways to get the clearest result:

- Use a transparent colour and print hollow or with 100 % infill rather than a sparse pattern.
- Keep walls few and thick, or print in vase mode for shades and covers.
- Print slower and slightly hotter so lines fuse fully, with low cooling.
- Dry the spool – moisture bubbles turn clear prints cloudy.

These are general techniques for clear copolyesters; makers do not publish clarity figures for printed parts.

## Strength and heat resistance in numbers

Few makers publish full data, and test methods differ, so compare carefully:

| Property | Spectrum PCTG Premium | Push Plastic PCTG |
|---|---|---|
| Tensile strength (yield) | 44 MPa | 35.9 MPa |
| Elongation at break | 220 % | 4.8 % |
| Flexural modulus | 1600 MPa | 1722 MPa |
| Heat deflection | 64 °C at 1.82 MPa / 76 °C at 0.455 MPa (ISO 75) | 108 °C (ASTM D648) |
| Density | 1.23 g/cm³ | 1.21 g/cm³ |

The large gaps – especially elongation and heat deflection – come from different test standards, specimens and loads, not necessarily different plastics. Spectrum notes its values are for comparison only. Use one maker's sheet for one decision, and test your own part.

**Why it matters:** no maker sells PCTG as a stiffer plastic – the flexural modulus on these sheets is 1600–1722 MPa, well below fibre-filled grades. What it adds is toughness: parts bend and absorb hits instead of cracking.

## Drying and storing PCTG

Copolyesters absorb moisture from the air, and wet PCTG strings, bubbles and loses clarity. Fiberlogy gives 60 °C for 4 hours; 3D-Fuel gives 70 °C for 6–8 hours when needed, followed by sealed storage with desiccant. Both temperatures are within the range of most filament dryers. Our guide on [how to dry filament](/blog/how-to-dry-filament/) covers dryers, ovens and storage.

## What PCTG is used for

Makers and independent tests point to the same jobs:

- **Impact parts:** clips, snap-fits, protective covers, tool holders, RC and drone parts.
- **Enclosures and cases:** electronics housings, chemical-resistant boxes (3D-Fuel lists resistance to alcohols, fuels, oils, bleach and degreasers).
- **Jigs and fixtures:** shop tooling that gets dropped and clamped.
- **Automotive parts:** brackets and interior trim, within its heat limit.
- **Clear parts:** lamp shades, light covers, bottle cages, display boxes.
- **Springs and compliant mechanisms:** Hackaday's summary suggests PCTG's ductility suits them.

**Food contact:** Fiberlogy says its PCTG material is suitable for food contact. A printed part is still porous at the layer lines; see our guide on [whether PLA is food safe](/blog/is-pla-food-safe/) – the same limits apply to PCTG prints.

## How to print PCTG – checklist

1. **Read the label** and the maker's data sheet; ranges vary by brand.
2. **Dry the spool** at 60–70 °C if it has been open.
3. **Prepare the bed:** textured PEI, or a release layer on smooth PEI or glass.
4. **Load a PCTG profile** from the maker, or start from PETG and raise the nozzle to about 260 °C.
5. **Lower part cooling** below your PETG value.
6. **Slow outer walls** to about 50 mm/s for a clean surface.
7. **Calibrate pressure advance and flow** for PCTG specifically.
8. **Switch grid infill** to gyroid or cubic.
9. **Print a temperature tower** and a small functional test part.
10. **Let the bed cool** before removing the print.

## Verdict

PCTG filament is PETG with more toughness: the same easy, enclosure-free printing at about 10–20 °C more nozzle heat, with parts that bend instead of crack and clear colours that look a little cleaner. It is not stiffer and not dramatically more heat-resistant than PETG, and its very strong bond to smooth build plates needs a textured plate or a release layer. For snap-fits, impact parts, cases and clear covers it is a sensible upgrade; for stiffness choose a fibre-filled grade, and for outdoor heat compare ASA.
