---
title: PEEK filament – what it is, PEEK 3D printing settings and printer requirements
seoTitle: PEEK Filament – Properties, Settings and Printer Needs
description: PEEK filament explained – datasheet properties, nozzle, bed and chamber temperatures, annealing, PEEK vs PEI (ULTEM) and which printers can print it.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/0add5e52-5843-422a-b114-23d45cae423f/output.png
imageAlt: "Illustration of a generic industrial printer with a glowing heated chamber printing a tan high-performance bracket, with amber parts on a steel tray"
category: Filament and materials
summary:
  - PEEK (polyether ether ketone) is a semi-crystalline polymer from the PAEK family; Victrex lists a 143 °C glass transition, a 343 °C melting point and a 260 °C continuous use temperature.
  - Filament makers ask for a nozzle of roughly 370–440 °C, a bed of 120–155 °C and a heated chamber of at least 70–100 °C, depending on the grade.
  - Desktop printers with a 300–350 °C hot end and a 65 °C chamber cannot print PEEK properly; it needs high-temperature machines such as the INTAMSYS FUNMAT series or the Prusa Pro HT90.
faq:
  - q: What is PEEK filament used for?
    a: "PEEK filament is used for parts that must survive heat, chemicals and load: seals, gears, bushings, bearings and pump parts (3DXTech's list), aerospace brackets and ducts, engine and automotive parts, semiconductor fixtures and, with implant-grade material such as Evonik's VESTAKEEP i4 3DF, medical implants made under medical device rules."
  - q: Can a Bambu Lab or other desktop 3D printer print PEEK?
    a: "Not reliably. PEEK filament makers ask for a nozzle around 375–420 °C, a 120–155 °C bed and an actively heated chamber of 70 °C or more. The Bambu Lab H2D tops out at 350 °C at the nozzle and 65 °C in the chamber, and most other desktop printers stop at 300 °C. 3DXTech says its PEEK is not intended for standard desktop FDM printers."
  - q: Is PEEK better than PEI (ULTEM)?
    a: "It depends on the job. PEEK is semi-crystalline, with higher temperature limits (Victrex lists 260 °C continuous use) and very good wear and chemical resistance, but it needs controlled crystallisation. PEI such as ULTEM 9085 is amorphous with a glass transition around 177 °C; it warps less from crystallisation and is widely used for flame-rated aerospace interior parts on Stratasys printers."
  - q: Do you need to anneal PEEK 3D prints?
    a: "Usually yes, if you want full heat and chemical resistance. Parts printed in a cooler chamber come out largely amorphous; annealing above the glass transition lets them crystallise. INTAMSYS annealed its PEEK test bars at 200 °C for 2 hours, and Victrex gives 170–180 °C for 2–4 hours for its AM 200 PAEK filament. Follow your filament's datasheet."
sources:
  - name: Victrex – What is PEEK polymer? (blog)
    url: https://www.victrex.com/en/blog/2017/a-closer-peek-at-peek
  - name: Victrex – VICTREX PEEK product page
    url: https://www.victrex.com/en/victrex-peek
  - name: Victrex – AM 200 FIL datasheet
    url: https://victrex.com/downloads/datasheets/victrex-am-200-fil
  - name: 3DXTech – PEEK collection
    url: https://www.3dxtech.com/collections/peek
  - name: 3DXTech – ThermaX PEEK product page
    url: https://www.3dxtech.com/peek-filaments/thermax-peek-grey/
  - name: 3D4Makers – PEEK filament product page
    url: https://www.3d4makers.com/products/peek-filament
  - name: INTAMSYS – PEEK technical data sheet V3
    url: https://cdn.shopify.com/s/files/1/0022/2671/6784/files/INTAMSYS_PEEK_TDS_V3.pdf
  - name: INTAMSYS – PEEK 3D printing solutions
    url: https://page.intamsys.com/peek-3d-printing-solutions
  - name: Evonik – Implant PEEK filaments (VESTAKEEP 3DF)
    url: https://3d-printing.evonik.com/en/3d-printing-materials/plastic-filaments/implant-peek
  - name: Prusa Knowledge Base – PEEK-CF (polyetheretherketone)
    url: https://help.prusa3d.com/article/peek-cf-polyetheretherketone_765123
  - name: Prusa Knowledge Base – PEI / ULTEM
    url: https://help.prusa3d.com/article/pei-ultem_725809
  - name: Prusa – Prusament PEI 1010 product page
    url: https://www.prusa3d.com/en/product/prusament-pei-1010-natural-500g/
  - name: Stratasys – ULTEM 9085 resin material data sheet
    url: https://www.stratasys.com/contentassets/264560ca109a4876a3761fde68c3ab5e/mds_fdm_ultem9085_0426a.pdf
  - name: Bambu Lab blog – H2D launch
    url: https://blog.bambulab.com/bambu-lab-launches-h2d-to-rethink-personal-manufacturing
  - name: QIDI – Plus4 technical specifications
    url: https://qidi3d.com/pages/qidi-plus-4-techspecs
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**PEEK filament is a 3D printing filament made from polyether ether ketone, a high-performance, semi-crystalline polymer that keeps its strength up to about 260 °C and resists most chemicals – but printing it needs a hot end of roughly 400 °C, a bed of 120–155 °C and an actively heated chamber, so it belongs on industrial printers, not desktop machines.** PEEK is one of the toughest plastics you can extrude, which is why it turns up in aerospace, oil and gas, semiconductor and medical parts. This guide explains what PEEK is, the properties filament makers publish, what a printer must reach to print it, how annealing works, how PEEK compares with PEI (ULTEM), and why a typical hobby printer cannot handle it. Facts come from the material and printer makers – Victrex, 3DXTech, 3D4Makers, INTAMSYS, Evonik, Prusa, Stratasys, Bambu Lab and QIDI – checked November 2026. We have not printed PEEK ourselves and we do not compare prices.

## PEEK filament at a glance

| | PEEK (from makers' datasheets) |
|---|---|
| Polymer family | PAEK (polyaryletherketone), semi-crystalline |
| Glass transition (Tg) | 143 °C |
| Melting point (Tm) | 343 °C |
| Continuous use temperature | Up to 260 °C (Victrex); 240–260 °C (3DXTech) |
| Density | About 1.30 g/cm³ (crystalline) |
| Nozzle temperature | About 370–420 °C for unfilled PEEK; 380–440 °C for PEEK-CF |
| Bed temperature | About 120–155 °C |
| Chamber | Actively heated, 70 °C minimum; makers suggest 85–140 °C |
| Drying | 120–130 °C for 2–4 hours or more |
| Nozzle | Hot end of about 400 °C or more; hardened steel for CF and GF grades |
| Flammability | UL94 V-0 (Victrex, 3DXTech) |
| Printers | INTAMSYS FUNMAT, Prusa Pro HT90 and similar high-temperature machines |

## What is PEEK? The PAEK family explained

PEEK stands for polyether ether ketone. Victrex, the company that commercialised it, describes it as part of the aromatic polyketone family, more precisely called polyaryletherketones (PAEK). ICI filed the PEEK patent in 1978, and Victrex brought it to market in 1981.

The chain is built from three units: rigid aryl rings and ketone groups, which give stiffness and a high melting point, and ether links, which add flexibility and toughness. Because the repeat unit is regular, PEEK can partly crystallise. Victrex credits that crystalline structure for much of PEEK's wear, creep, fatigue and chemical resistance.

Other members of the PAEK family you will see on filament shelves:

- **PEKK** – another polyketone with a different ether/ketone ratio, sold for example in 3DXTech's ThermaX range and as PEKK-CF for the Prusa Pro HT90.
- **PAEK and LMPAEK** – lower-melting grades. Victrex's AM 200 filament is a PAEK with a melting point of 303 °C (vs 343 °C for PEEK), and Victrex claims better printed-part strength and printability than PEEK on most machines.

**Why it matters:** "PEEK", "PEKK" and "PAEK" are not interchangeable on a spool label. They need different temperatures and annealing cycles, so always print from the datasheet for the exact grade.

## PEEK properties from material datasheets

Victrex lists these values for its PEEK polymer (moulded material): a glass transition of 143 °C, a melting point of 343 °C, a heat deflection temperature of 152 °C and a continuous use temperature of 260 °C. Its range of tensile strengths runs from 78 MPa for unfilled grades to 330 MPa for fibre-reinforced ones. Victrex also says PEEK resists hydrocarbons, organic solvents and strong bases, is not attacked by water or steam, resists autoignition up to almost 600 °C and gives off little smoke.

Two filament makers publish printed or moulded values for their unfilled PEEK filament:

| Property | INTAMSYS PEEK (printed, annealed) | 3D4Makers PEEK |
|---|---|---|
| Tensile strength | 99.9 MPa (ISO 527) | 105 MPa at yield (ISO 527) |
| Flexural strength | 147 MPa (ISO 178) | – |
| Tensile modulus | – | 4.1 GPa |
| Elongation at break | – | 30% |
| Notched impact | 7.1 kJ/m² (ISO 179) | – |
| Heat deflection (1.8 MPa) | 152 °C | 156 °C (as moulded) |
| Glass transition | 143 °C | 143 °C |
| Density | 1.30 g/cm³ | 1.30 g/cm³ |
| Water absorption | – | 0.45% at saturation |

INTAMSYS printed its test bars at 400 °C and 45 mm/s on a FUNMAT HT with 100% infill and annealed them at 200 °C for 2 hours, and it warns the numbers are for reference only, not for design. Real parts with walls, infill and weak layer lines will usually test lower.

**Tip:** for comparison, the strongest filaments most enclosed desktop printers can handle – carbon fibre nylons and PC – are covered in our guide to the [strongest 3D printer filament](/blog/strongest-3d-printer-filament/).

## PEEK filament types: unfilled, carbon fibre, glass fibre and implant grade

- **Unfilled (natural) PEEK** – the base material, for example 3DXTech ThermaX PEEK, INTAMSYS PEEK and 3D4Makers PEEK.
- **PEEK-CF** – carbon-fibre-filled PEEK such as 3DXTech CarbonX PEEK+CF10. Prusa lists low weight, high dimensional stability and stiffness as the gains.
- **PEEK-GF** – glass-fibre-filled PEEK such as 3DXTech Fibrex PEEK+GF20, also sold by INTAMSYS.
- **Implant-grade PEEK** – Evonik sells VESTAKEEP i4 3DF, made to meet ASTM F2026 (the standard for PEEK used in surgical implants), plus carbon-fibre grades with 12% and 20% fibre (iC4612 and iC4620), an osteoconductive grade (iC4800) and a purple test grade (i4 3DF-T) with the same processing behaviour but without the documentation needed for medical approval.

3DXTech says its carbon and glass fibre PEEK grades need a hardened steel nozzle. Fibres wear a standard nozzle quickly, as they do with carbon fiber filaments for desktop printers.

## PEEK 3D printing settings from filament makers

Settings differ between brands and grades, so treat the table as a range and start from your own spool's datasheet.

| Maker and grade | Nozzle | Bed | Chamber | Drying | Bed adhesion |
|---|---|---|---|---|---|
| 3DXTech ThermaX PEEK | 375–410 °C | 130–145 °C | 70–140 °C (recommended) | 120 °C, 4 h | Nano Polymer Adhesive |
| 3D4Makers PEEK | 370–420 °C | 120 °C | About 100 °C | 120 °C, 2–4 h | Magigoo HT on glass or a PEI sheet |
| Prusa (PEEK-CF on the Pro HT90) | 380–440 °C | 140–155 °C | 85 °C or more, required | 130 °C, at least 4 h | Magigoo HT, several layers |
| INTAMSYS PEEK (test print) | 400 °C | Not stated | Not stated | – | – |

3D4Makers suggests 15–30 mm/s; INTAMSYS printed its test bars at 45 mm/s. 3DXTech's general guidance for the whole PEEK range is a hot end that reaches roughly 400 °C or higher, a bed of 120–180 °C and a fully enclosed, actively heated chamber of 70 °C or more.

**Why it matters:** PEEK melts at 343 °C, so a hot end must hold well above that – around 400 °C – just to extrude it at a usable viscosity. A hot end that peaks at 350 °C is barely past the melting point.

## Annealing PEEK and crystallinity

PEEK's properties depend on how much of it crystallises. When hot PEEK is laid down on a cooler part, it freezes before the chains can line up, so the print comes out largely **amorphous**. 3D4Makers says prints are made in the amorphous phase, which reduces shrinkage, and recommends annealing afterwards to reach the semi-crystalline phase. INTAMSYS notes that heating, deposition, cooling and post-processing all affect crystallinity and that the right strategy depends on grade, geometry and the properties you need.

Published annealing cycles:

| Material | Annealing cycle |
|---|---|
| INTAMSYS PEEK (test specimens) | 200 °C for 2 hours |
| Victrex AM 200 PAEK filament | Ramp about 3 °C/min to 170–180 °C, hold 2–4 hours |

Victrex adds that higher temperatures may deform parts, and that its AM 200 prints semi-crystalline straight off the printer only if the chamber is above 150 °C. With a cooler chamber the part comes out amorphous and needs annealing.

**Tip:** anneal on a flat, supported surface and let the part cool slowly in the oven. Crystallisation causes extra shrinkage, so check critical dimensions after annealing, not before.

## Which 3D printer can print PEEK?

A PEEK 3D printer needs four things at once: a hot end of about 400 °C or more, a bed of 120 °C or more, an actively heated chamber, and a way to keep the filament dry while printing. Examples from makers' own pages:

| Printer | Nozzle | Chamber | Bed |
|---|---|---|---|
| INTAMSYS FUNMAT HT | Dual nozzles up to 450 °C | 90 °C constant temperature | Up to 160 °C |
| INTAMSYS FUNMAT PRO 610HT | Dual nozzles up to 500 °C | Actively heated to 300 °C | Not stated |
| Prusa Pro HT90 | The printer Prusa lists for its PEEK-CF and PEI 1010 profiles (up to 440 °C in the PEEK-CF guide) | 85–90 °C+ | 140–155 °C |
| Stratasys Fortus 450mc, F900 | Industrial machines for PEI (ULTEM 9085) and PEKK-based Antero | – | – |

INTAMSYS also sells the FUNMAT PRO 410 and the PEEK-focused FUNMAT PRO 310 APOLLO. For an overview of machines in this class, see our [industrial 3D printer guide](/blog/industrial-3d-printer/) and the [Stratasys 3D printers](/printers/stratasys-3d-printers/) hub.

## Why hobby printers can't print PEEK

Compare the requirements with high-end desktop printers:

- The [Bambu Lab H2D](/printers/bambu-lab-h2d/) has a 350 °C hot end and a chamber heated up to 65 °C, according to Bambu Lab's launch post.
- The QIDI Plus 4 lists a 370 °C nozzle, a 120 °C bed and a 65 °C chamber.
- Most open and enclosed desktop printers stop at 300 °C or below.

Even the best of these miss at least two targets: PEEK makers ask for about 400 °C at the nozzle, 120–155 °C at the bed and 70 °C or more in the chamber. Without a hot chamber, the first layers cool and shrink while new layers go down hot, which leads to warping, cracks and weak layer bonds. Never set a hot end above the temperature its maker rates it for. 3DXTech states plainly that its PEEK is not intended for standard desktop FDM printers, and Prusa says its PEI 1010 is not suitable for the MK, XL and MINI series.

**Why it matters:** if your printer tops out at 300–350 °C, choose PC, PAHT-CF, PA6-CF or PET-CF for heat-resistant parts instead of a PEEK spool that will not print properly.

## PEEK vs PEI (ULTEM)

PEI (polyetherimide) is the other common high-temperature filament; ULTEM is the best-known brand name for it.

| | PEEK | PEI (ULTEM) |
|---|---|---|
| Structure | Semi-crystalline | Amorphous |
| Glass transition | 143 °C (Victrex) | About 177 °C for ULTEM 9085 (Stratasys) |
| Heat limit quoted | 260 °C continuous use (Victrex) | Over 200 °C heat resistance (Prusa); HDT about 170–178 °C for printed ULTEM 9085 |
| Nozzle | About 370–440 °C | 410 ± 10 °C (Prusament PEI 1010) |
| Bed / chamber | 120–155 °C / 70 °C+ | 150 ± 10 °C / 90 °C+ (Prusament PEI 1010) |
| Annealing | Usually needed for full crystallinity | Not a crystallisation step |
| Typical strengths | Wear, chemical and fatigue resistance; implants (special grades) | Flame-rated parts; Stratasys lists ULTEM 9085 at UL94 V-0 |
| Common issues | Warping, crystallinity control | Warping, difficult supports (Prusa) |

**Tip:** choose PEI when you need flame-rated, dimensionally stable parts below about 170 °C and want to skip crystallisation. Choose PEEK when the part sees higher temperatures, sliding wear or aggressive chemicals.

## Troubleshooting PEEK prints

**Warping and cracking between layers**
- Causes: chamber too cold, bed too cold, large flat parts, draughts.
- Fixes in order: raise the chamber towards the top of the maker's range; raise the bed within the range; add a brim; slow down.
- Prevention: Prusa notes that heating the chamber reduces warping and cracking and improves layer adhesion.

**First layer won't stick**
- Causes: no adhesive, bed under temperature, dirty surface.
- Fixes in order: clean the plate; apply a high-temperature adhesive (3DXTech uses Nano Polymer Adhesive, Prusa and 3D4Makers suggest Magigoo HT, applied in several layers); confirm bed temperature.

**Bubbles, popping, rough or weak parts**
- Cause: moisture. Prusa says PEEK-CF starts absorbing moisture within 10 minutes in open air.
- Fixes in order: dry at 120–130 °C for the time on the datasheet; print from a heated dry box; reprint.
- Prevention: check that your dryer and spool are rated for 120 °C or more – many hobby dryers are not. Our [filament dryer guide](/blog/filament-dryer/) covers typical limits.

**Part changes size after annealing**
- Cause: crystallisation shrinkage.
- Fixes: anneal a test part first, measure, and scale the model or adjust tolerances.

## Checklist: before you buy PEEK filament

1. **Check the printer's real limits:** hot end of about 400 °C or more, bed of 120 °C or more, actively heated chamber of 70 °C or more.
2. **Pick the exact grade** – unfilled, CF, GF or PAEK – and download its datasheet.
3. **Fit a hardened nozzle** for CF and GF grades.
4. **Plan drying:** a dryer that reaches 120–130 °C and a heated dry box for printing.
5. **Prepare bed adhesion:** the adhesive or sheet the maker names.
6. **Plan annealing:** an oven that holds the datasheet temperature steadily, and a test part to measure shrinkage.
7. **Plan the room:** high-temperature printers and annealing ovens give off a lot of heat, so keep the space ventilated and follow the printer maker's installation guidance.
8. **Check the model first.** Open it in our [STL viewer](/stl-viewer/) to confirm scale and wall thickness before you spend expensive filament.

## Verdict

PEEK filament gives FDM printing its highest-performance plastic: a 343 °C melting point, up to 260 °C continuous use, strong chemical and wear resistance and V-0 flame behaviour. The price of that is a demanding process – about 400 °C at the nozzle, a 120–155 °C bed, a hot chamber, dry filament and usually an annealing step. That puts it on industrial machines such as the INTAMSYS FUNMAT series or the Prusa Pro HT90, not on desktop printers that stop at 300–350 °C. If you need heat resistance on a home printer, PC or a carbon fibre nylon is the realistic choice; if you need flame-rated parts without crystallisation, look at PEI.
