---
title: Carbon fiber filament – what it is, which nozzle you need and how to print it
seoTitle: Carbon Fiber Filament – Types, Nozzle and Print Settings
description: Carbon fiber filament explained – PLA-CF, PETG-CF, PA-CF and more, why you need a hardened nozzle, makers' print settings, strength trade-offs and safety.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/dc8ab5d3-98ee-4990-b0bd-a5f19c7386d8/output.png
imageAlt: "Illustration of a hardened steel nozzle laying matte black carbon fibre filament into a drone arm with a magnified strand showing short fibres"
category: Filament and materials
summary:
  - Carbon fiber filament is an ordinary plastic such as PLA, PETG or nylon filled with chopped carbon fibres about 0.05–0.2 mm long, which make parts stiffer and more dimensionally stable.
  - The fibres are abrasive, so makers such as Bambu Lab and Prusa require a hardened steel (or similarly wear-resistant) nozzle and advise against 0.2 mm nozzles.
  - Fibres usually raise stiffness and heat resistance but lower impact resistance and layer adhesion, so a CF part is not automatically stronger than the same part in the plain plastic.
faq:
  - q: Is carbon fiber filament stronger than PETG?
    a: Stiffer, usually; stronger, not always. Fibres raise stiffness and often tensile strength along the layers, but Prusa notes they usually lower impact resistance and layer-to-layer adhesion. Bambu Lab's own data sheet lists PETG-CF at 59 MPa tensile strength along the layers but only 38 MPa across them, so print orientation matters more than the label.
  - q: Can any 3D printer print carbon fiber filament?
    a: Most printers can melt the base plastic, but you need a hardened steel or other wear-resistant nozzle, because carbon fibres wear brass nozzles quickly. Nylon, PC and other high-temperature CF grades also need a hotter hot end, a hot bed and usually an enclosure.
  - q: Do you need a hardened nozzle for carbon fiber filament?
    a: Yes. Bambu Lab's material table marks a hardened steel nozzle as required for every carbon- and glass-fibre grade, including PLA-CF, and says brass and stainless steel nozzles wear quickly. Prusa and Polymaker give the same advice.
  - q: What is carbon fiber filament good for?
    a: Stiff, light, dimensionally accurate parts such as drone frames, RC car parts, brackets, jigs and fixtures, and camera mounts. It also gives a matte finish that hides layer lines. It is a poor choice for parts that must flex or survive sharp impacts.
sources:
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab Blog – Bambu carbon fiber filaments
    url: https://blog.bambulab.com/bambu-carbon-fiber-filaments
  - name: Bambu Lab – PLA-CF technical data sheet V3
    url: https://cdn.shopify.com/s/files/1/0584/7236/6216/files/Bambu_PLA-CF_Technical_Data_Sheet_V3.pdf
  - name: Bambu Lab – PETG-CF technical data sheet
    url: https://cdn.shopify.com/s/files/1/0380/5149/files/Bambu_PETG-CF_Technical_Data_Sheet.pdf
  - name: Prusa Knowledge Base – Composite materials filled with carbon, Kevlar or glass
    url: https://help.prusa3d.com/article/composite-materials-filled-with-carbon-kevlar-or-glass_167387
  - name: Polymaker Wiki – Carbon fiber reinforced filaments
    url: https://wiki.polymaker.com/the-basics/3d-printing-materials/carbon-fiber-reinforced-filaments
  - name: Polymaker Wiki – PLA-CF
    url: https://wiki.polymaker.com/polymaker-products/polymaker-filaments/prime-materials/functional-pla/pla-cf
  - name: Simplify3D – Carbon fiber filled materials guide
    url: https://simplify3d.com/support/materials-guide/carbon-fiber-filled
  - name: SUNLU Wiki – Functional filaments
    url: https://www.sunlu.com/wiki/functional-filament
  - name: NIOSH – Approaches to safe 3D printing
    url: https://cdc.gov/niosh/publications/numbered/2024-103.html
  - name: UL Chemical Insights – Top 10 tips for safer 3D printing
    url: https://chemicalinsights.ul.org/wp-content/uploads/2026/04/3DP_Handout_Top_10_082724.pdf
tools: [stl-viewer, 3d-viewer, stl-to-3mf]
---
**Carbon fiber filament is a normal 3D printing plastic – PLA, PETG, nylon, PC and others – mixed with short chopped carbon fibres that make printed parts stiffer, more dimensionally stable and matte, at the cost of an abrasive filament that needs a hardened nozzle.** It is not a solid carbon fibre composite like a bike frame: the fibres are tiny, and the plastic around them still decides most of the part's properties. This guide explains the common types, why the nozzle matters, the print settings makers publish, what you gain and lose in strength, and how to handle it safely. Settings and figures come from the Bambu Lab wiki and data sheets, Prusa's knowledge base, Polymaker's wiki and SUNLU's wiki, checked November 2026. Your spool label and your slicer's profile always come first.

## Carbon fiber filament at a glance

| | Carbon fiber filament (typical) |
|---|---|
| What it is | A base plastic filled with chopped carbon fibres about 0.05–0.2 mm long |
| Common types | PLA-CF, PETG-CF, PET-CF, PA-CF (nylon), PAHT-CF, ABS-CF, ASA-CF, PC-CF, PPA-CF, PPS-CF |
| Nozzle | Hardened steel or another wear-resistant nozzle; no brass, no 0.2 mm |
| Best nozzle size | 0.4 mm for PLA-CF and PETG-CF; 0.6 mm often preferred for engineering grades |
| Temperatures | Similar to or slightly above the base plastic |
| Gains | Stiffness, dimensional accuracy, less warping, matte finish, often higher heat resistance |
| Losses | Impact resistance, layer adhesion, brittle filament, more clogging risk |
| Drying | Recommended; 55 °C for PLA-CF up to 80 °C for nylon-CF (Bambu Lab) |
| Typical uses | Drone and RC parts, brackets, jigs, fixtures, mounts |

## What is carbon fiber filament?

A carbon fiber filament – often written CF filament or carbon fiber reinforced filament – is a base thermoplastic compounded with short carbon fibres. Bambu Lab gives the fibre length in its filaments as roughly 0.05–0.2 mm, and Polymaker lists its PLA-CF as 8 % chopped carbon fibre by weight. The fibres do not melt at printing temperatures; they travel through the nozzle as solid particles inside the molten plastic.

Prusa's knowledge base sums up the effect: fibres generally improve dimensional stability, reduce weight and warping, and raise heat resistance and tensile yield strength, but they usually reduce impact resistance and layer-to-layer adhesion.

**Watch out:** not every "carbon" spool is reinforced. Prusa says the fibres in its own PETG Carbon Fiber are there for looks only. Read the data sheet rather than the colour name.

## Types of carbon fiber filament

The name always tells you the base plastic first. That plastic sets the print temperature, the heat resistance and most of the toughness.

| Type | Base plastic | Nozzle °C (Bambu Lab table) | What it is good for |
|---|---|---|---|
| PLA-CF | PLA | 210–240 | Easy stiff parts, matte models, light brackets |
| PETG-CF | PETG | 240–270 | Tougher and more heat-tolerant than PLA-CF; outdoor-ish parts |
| PET-CF | PET | 260–300 | Very stiff parts; relatively brittle |
| PA-CF, PA6-CF, PAHT-CF | Nylon | 260–300 | Strong, heat-resistant functional parts |
| ABS-CF, ASA-CF | ABS / ASA | Close to the base plastic | Heat- and weather-resistant parts in an enclosure |
| PC-CF | Polycarbonate | 300–330 (Polymaker) | High-heat parts on enclosed printers |
| PPA-CF | Polyphthalamide | 285–320 | Industrial-grade heat and chemical resistance |
| PPS-CF | Polyphenylene sulfide | 310–350 | Very high heat and chemical resistance |

Bambu Lab's comparison of its own range puts PLA-CF and PETG-CF in the entry level and PET-CF and PAHT-CF in the high-performance group. It says PLA-CF is more than 30 % stiffer than regular PLA, PETG-CF has better toughness and layer bonding than PLA-CF, and PET-CF is the stiffest of the group but relatively brittle.

**Tip:** if you have never printed carbon fiber, start with PLA-CF or PETG-CF. They print on an open printer at familiar temperatures. Our [PLA filament guide](/blog/pla-filament/) and [PETG filament guide](/blog/petg-filament/) cover the base plastics.

## Why carbon fiber filament needs a hardened nozzle

Carbon fibres are hard and abrasive. Pushed through a soft brass nozzle, they wear the bore wider, which ruins extrusion and dimensional accuracy. That is why:

- **Bambu Lab's material table** lists a hardened steel nozzle as required for every carbon- and glass-fibre material, including PLA-CF, and warns that brass and stainless steel nozzles wear quickly with abrasive fillers.
- **Prusa** lists "requires a hardened steel nozzle" as the first con of composite filaments.
- **Polymaker** recommends hardened steel, ruby or diamond-coated nozzles and notes that abrasive fibres also speed up wear on extruder gears and Bowden tubes.

Some printers now ship with a hardened steel nozzle – Bambu Lab cites the [X1 Carbon](/printers/bambu-lab-x1-carbon/) as an example – while many budget printers ship with brass. Check your printer's spec page before loading a CF spool.

**Tip:** steel conducts heat less well than brass. If extrusion feels weak after a nozzle swap, raise the temperature a little and slow down, and recalibrate flow.

## Nozzle size and clogging

Fibres do not melt, so a narrow nozzle can jam. Bambu Lab says the chance of clogging a 0.2 mm nozzle with these materials is very high and advises against it. Its first choice for most fibre grades is a 0.6 mm nozzle, with 0.4 mm second; for its own PLA-CF and PETG-CF, 0.4 mm is the first choice. Prusa gives 0.4 mm and 0.2 mm layers as the lowest optimal values, and Simplify3D notes that nozzles of 0.5 mm or more clog less often.

Other ways to prevent jams, from the same sources:

- Clean the nozzle before switching to CF. Prusa recommends a cold pull; Bambu Lab heats the nozzle to 280 °C and clears it with the supplied tools.
- Do not squash the first layer too hard. Prusa and Simplify3D both warn that a nozzle set too close builds back-pressure and clogs.
- Keep the filament path smooth, without sharp bends or rubbing edges.
- Use thicker layers rather than very fine ones.

If a jam happens anyway, our guide on [how to clean a 3D printer nozzle](/blog/how-to-clean-a-3d-printer-nozzle/) walks through cold pulls and needle cleaning.

## Carbon fiber filament print settings

Start from the base plastic's profile, then apply the maker's CF values. These are the published ranges:

| Material (maker) | Nozzle | Bed | Speed / flow | Drying |
|---|---|---|---|---|
| Bambu Lab PLA-CF | 210–240 °C | 35–45 °C (data sheet) | Under 200 mm/s | 55 °C, 8 h |
| Polymaker PLA-CF | 190–230 °C | 25–60 °C | Max 15 mm³/s | 55 °C, 6 h |
| SUNLU PLA-CF | 215–245 °C | 50–60 °C | – | Keep dry |
| Bambu Lab PETG-CF | 240–270 °C | 65–75 °C (data sheet) | Under 200 mm/s; fan 0–60 % | 65 °C, 8 h (data sheet) |
| Bambu Lab PA-CF / PAHT-CF | 260–300 °C | 100–120 °C (plates) | Enclosure recommended | 80 °C, 8–12 h |
| Polymaker PC-CF (general) | 300–330 °C | – | Enclosed printer | 70–80 °C, 4–6 h |

Prusa's general range for composite filaments is 240–285 °C at the nozzle and 70–110 °C on the bed, depending on the base plastic.

**Tip:** Simplify3D suggests printing CF grades 25–50 % slower than the plain plastic and reducing retraction. Polymaker caps its PLA-CF at 15 mm³/s and suggests 220–230 °C when you print near that limit.

## Strength and stiffness: what you gain and lose

Carbon fibre is mainly about **stiffness** and **stability**, not toughness. Bambu Lab's data sheets show the pattern clearly:

| Property (Bambu Lab data sheets) | PLA-CF | PETG-CF |
|---|---|---|
| Tensile strength, along layers (X-Y) | 38 ± 4 MPa | 59 ± 4 MPa |
| Tensile strength, across layers (Z) | 26 ± 2 MPa | 38 ± 3 MPa |
| Bending modulus, X-Y | 3950 ± 190 MPa | 2890 ± 130 MPa |
| Bending modulus, Z | 2260 ± 180 MPa | 1680 ± 90 MPa |
| Heat deflection (1.8 MPa) | 54 °C | 68 °C |
| Density | 1.22 g/cm³ | 1.25 g/cm³ |

What this means in practice:

- **Stiffness goes up.** PLA-CF bends less than PETG-CF and, per Bambu Lab, more than 30 % less than plain PLA.
- **The Z axis is the weak spot.** Across the layers, both materials are far weaker than along them. Orient parts so the main load runs along the layers.
- **Toughness goes down.** Prusa notes lower impact resistance; Bambu Lab calls PET-CF brittle. A stiff CF bracket can snap where a plain PETG one would bend.
- **Heat resistance follows the base plastic.** PLA-CF still softens in the mid-50s °C. For a car interior or near a motor, choose PETG-CF, nylon-CF or higher.
- **Nylon changes with moisture.** Bambu Lab says PA6 absorbs about 3 % water and PA12 about 0.3 %; wet nylon loses strength and stiffness but gains toughness.

**Tip:** compare data sheets only when they use the same test method and orientation. A headline "up to" number from one maker is not comparable with another's average.

## Drying and storing carbon fiber filament

The fibres do not absorb water, but the base plastic does. Bambu Lab recommends drying PLA-CF at 55 °C for 8 hours and nylon-CF at 80 °C for 8–12 hours, and keeping its CF spools below 20 % relative humidity with desiccant. Polymaker lists nylon-CF and PC-CF at 70–80 °C for 4–6 hours. Nylon-based grades are the most sensitive: wet nylon strings, oozes and can clog the nozzle. See [how to dry filament](/blog/how-to-dry-filament/) for methods.

Use filament feeders with care. Bambu Lab lists its own PLA-CF, PA-CF and PAHT-CF as AMS-compatible, but PET-CF as not, and Polymaker advises against running its PLA-CF through an AMS. CF filament is also more brittle, so avoid tight bends in the path.

## Safety: dust, fumes and sharp ends

- **Ventilation.** NIOSH notes concerns about ultrafine particles and chemicals from 3D printing, and UL Chemical Insights advises printing in a room with good airflow, away from where you sleep. Fibre grades on ABS, ASA, nylon or PC bases need the same care as their base plastic, or more.
- **Sanding and cutting.** SUNLU advises avoiding the dust from sanding its PLA-CF. If you sand, file or drill CF parts, wet-sand or use a dust mask and clean up with a vacuum rather than a brush.
- **Food contact.** Treat CF filaments as not food-safe unless the maker's data says otherwise; Polymaker states no food-safety data is available for its PLA-CF.
- **Sharp fragments.** Broken filament ends and snapped CF parts can be stiff and sharp. Wear gloves when clearing jams in the extruder.

## How to print carbon fiber filament – checklist

1. **Check the nozzle.** Fit a hardened steel (or ruby, tungsten carbide) nozzle; 0.4 mm for PLA-CF and PETG-CF, 0.6 mm for engineering grades. Never 0.2 mm.
2. **Clean the hot end** with a cold pull or the maker's cleaning routine.
3. **Dry the spool** at the maker's temperature – 55 °C for PLA-CF, 65–70 °C for PETG-CF, 80 °C for nylon-CF.
4. **Pick the profile.** Use the maker's CF profile, or the base plastic's profile with the CF temperature range from the label.
5. **Slow down** 25–50 % compared with the plain plastic, or follow the maker's volumetric limit.
6. **Set a normal first layer** – not squashed – and a layer height of 0.2 mm or more.
7. **Orient for strength.** Keep the main load along the layers, not across them.
8. **Enclose** nylon, PC, ABS and ASA grades; PLA-CF and PETG-CF print on open printers.
9. **Inspect the nozzle** now and then. If prints start under-extruding or getting wider, the nozzle may be worn.

Before you print a functional part, check its wall thickness and size in an STL viewer, and remember that thin walls in a CF part are stiff but can snap.

## Verdict

Carbon fiber filament is the right choice when you need a stiff, accurate, light part with a clean matte finish – drone arms, RC parts, jigs and brackets. It is not a magic strength upgrade: it trades impact resistance and layer adhesion for stiffness, and its heat resistance stays close to the base plastic. Fit a hardened nozzle, keep it to 0.4 mm or larger, dry the spool and choose the base plastic for the job – PLA-CF for easy stiff parts, PETG-CF for tougher ones, nylon-CF and up for heat and real loads.
