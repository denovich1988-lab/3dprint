---
title: Strongest 3D printer filament – which material is strongest and how to print strong parts
seoTitle: Strongest 3D Printer Filament – Data Sheet Comparison
description: "The strongest 3D printer filament depends on the load: tensile, impact, heat or layer strength. Data sheet numbers for 11 materials and settings."
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/9723cbfe-cbb7-4146-a7b5-f6de7d2a2698/output.png
imageAlt: "Illustration of printed tensile test bars, a bent flexible strip and a fibre-filled bracket with a load arrow pulling on one bar"
category: Filament and materials
summary:
  - "There is no single strongest 3D printer filament: in Bambu Lab's data sheets PA6-CF has the highest tensile strength along the layers (102 MPa), PAHT-CF the highest across them (64 MPa) and TPU the highest impact strength."
  - Every printed part is weakest between layers, so the Z-direction value and print orientation often decide whether a part survives, not the headline number.
  - Wall count matters more than infill for strength, and makers such as Prusa recommend adding perimeters before raising infill above about 20–40%.
faq:
  - q: What is the strongest 3D printer filament?
    a: "It depends on what strong means for your part. Among common filaments, carbon-fibre nylons lead for tensile strength and heat resistance: Bambu Lab lists PA6-CF at 102 MPa along the layers. Polycarbonate is the strongest plain (unfilled) material that most enclosed printers can handle, and TPU absorbs the most impact. PEEK and PEI are stronger and more heat resistant still, but need printers with a 380 °C-plus nozzle and a heated chamber."
  - q: Is PETG stronger than PLA?
    a: "In Bambu Lab's data sheets, PETG Basic has slightly higher tensile strength than PLA Basic (48 vs 39 MPa along the layers) and about twice the unnotched impact strength (52.7 vs 26.6 kJ/m²). PLA is stiffer, though, and PETG resists heat better. PETG is the better choice for parts that get knocked or bent; PLA for parts that must not flex."
  - q: Which is the strongest 3D printer filament for heat?
    a: "Of Bambu Lab's filaments in our table, PET-CF has the highest heat deflection temperature (205 °C at 0.45 MPa), followed by PAHT-CF (194 °C) and PA6-CF (186 °C). Among unfilled materials, PC (about 112–117 °C) beats ASA (100 °C) and ABS (87 °C). PLA softens at around 57 °C."
  - q: Does 100% infill make a print strongest?
    a: "Not usually the best way. Prusa's slicer documentation says a model's strength is mostly defined by the number of perimeters, not the infill, and Prusa's infill guide says densities above about 40% add little. Add walls first, then raise infill only for parts under heavy compression."
sources:
  - name: Bambu Lab – PLA Basic technical data sheet
    url: https://cdn.shopify.com/s/files/1/0380/5149/files/Bambu_PLA_Basic_Technical_Data_Sheet.pdf
  - name: Bambu Lab – PLA Tough technical data sheet
    url: https://cdn.shopify.com/s/files/1/0380/5149/files/Bambu_PLA_Tough_Technical_Data_Sheet.pdf
  - name: Bambu Lab – PETG Basic, ABS and PC technical data sheets (via Additive-X)
    url: https://www.additive-x.com/shop/mpattachments/file/viewonline/id/580/product_id/2330
  - name: Bambu Lab – ASA technical data sheet
    url: https://polyalkemi.no/wp-content/uploads/2024/01/Bambu_ASA_Technical_Data_Sheet.pdf
  - name: Bambu Lab – TPU 95A technical data sheet
    url: https://cdn.shopify.com/s/files/1/0645/5876/0155/files/Bambu_TPU_95A_Technical_Data_Sheet.pdf
  - name: Bambu Lab – PETG-CF, PET-CF, PAHT-CF and PA6-CF technical data sheets
    url: https://cdn.shopify.com/s/files/1/0380/5149/files/Bambu_PAHT-CF_Technical_Data_Sheet.pdf
  - name: Bambu Lab – Filament guide (material comparison table)
    url: https://cdn1.bambulab.com/filament/a5e185aed14e6/filament-guide-en-4.pdf
  - name: Prusa Knowledge Base – Layers and perimeters
    url: https://help.prusa3d.com/article/layers-and-perimeters_1748
  - name: Prusa blog – Everything you need to know about infills
    url: https://blog.prusa3d.com/everything-you-need-to-know-about-infills_43579/
  - name: Prusa Knowledge Base – Layer separation and splitting, PEEK-CF, PEI/ULTEM
    url: https://help.prusa3d.com/article/layer-separation-and-splitting-fdm_1806
tools: [stl-viewer, 3mf-viewer, 3mf-to-stl]
---
**The strongest 3D printer filament for most home printers is a carbon-fibre-filled nylon such as PA6-CF or PAHT-CF, with polycarbonate (PC) the strongest unfilled option – but "strongest" changes with the kind of load, and TPU beats them all on impact.** A bracket that carries a steady pull needs tensile strength, a lever arm needs stiffness, a phone case needs toughness, and a part near an engine needs heat resistance. On top of that, every FDM part is weaker between its layers than along them, so the same material can be strong or fragile depending on how you print it. This guide explains the types of strength, compares 11 filaments from one maker's data sheets, covers PEEK and PEI, and lists settings for stronger parts. All numbers come from Bambu Lab technical data sheets and Prusa documentation, checked November 2026. We did not run our own tests.

## Strongest 3D printer filament at a glance

Values from Bambu Lab's technical data sheets for its own filaments (ISO 527 tensile test, ISO 179 impact test, ISO 75 heat deflection at 0.45 MPa). Specimens were printed at 100% infill, then annealed and dried before testing, so real parts with walls and sparse infill will test lower.

| Material (Bambu Lab grade) | Tensile strength X-Y | Tensile strength Z | Impact strength X-Y (unnotched) | Heat deflection temp. | Main strength |
|---|---|---|---|---|---|
| PLA Basic | 39 MPa | 35 MPa | 26.6 kJ/m² | 57 °C | Stiff, easy, low heat resistance |
| PLA Tough | 44 MPa | 39 MPa | 31.2 kJ/m² | 55 °C | Tougher PLA |
| PETG Basic | 48 MPa | 39 MPa | 52.7 kJ/m² | 69 °C | Tough all-rounder |
| ABS | 41 MPa | 32 MPa | 39.3 kJ/m² | 87 °C | Heat, post-processing |
| ASA | 37 MPa | 31 MPa | 41.0 kJ/m² | 100 °C | Heat and outdoor use |
| PC | 62 MPa | 56 MPa | 34.8 kJ/m² | 112–117 °C* | Strongest unfilled, good layer bond |
| TPU 95A | 29.6 MPa | 23.2 MPa | 125.2 kJ/m² | n/a (flexible) | Impact and flex |
| PETG-CF | 59 MPa | 38 MPa | 41.2 kJ/m² | 74 °C | Stiffer PETG |
| PET-CF | 74 MPa | 35 MPa | 36.0 kJ/m² | 205 °C | Stiffness and heat |
| PAHT-CF | 88 MPa | 64 MPa | 57.5 kJ/m² | 194 °C | Best balance, strongest Z |
| PA6-CF | 102 MPa | 48 MPa | 40.3 kJ/m² | 186 °C | Highest tensile strength |

*Bambu Lab's PC data sheet lists 112 °C and its filament guide table lists 117 °C. X-Y means along the layers; Z means across the layers (pulling layers apart). Fibre-filled and nylon values are for dry specimens.

Other brands publish different numbers for the "same" material, and they often use different test standards (ISO vs ASTM), print settings and specimen shapes. Compare materials within one maker's data sheets, as above, rather than mixing brands.

## What does "strongest" mean for a 3D printer filament?

Data sheets list several properties, and each one answers a different question:

- **Tensile strength (MPa)** – how hard you can pull before the part breaks. This is the number most "strongest filament" lists quote.
- **Stiffness (tensile or bending modulus, MPa)** – how much the part bends under load. A stiff part can still be brittle. Bambu Lab lists PET-CF at 5,320 MPa bending modulus against 2,750 MPa for PLA Basic.
- **Impact strength (kJ/m²)** – how much energy the part absorbs before it cracks when hit or dropped. This is what people usually mean by "tough".
- **Layer adhesion (the Z values)** – how well the layers stick together. Most real failures happen here.
- **Heat deflection temperature (°C)** – the temperature at which the part starts to sag under a small load. A strong PLA bracket in a hot car is no longer strong.
- **Elongation at break (%)** – how far the material stretches before it snaps. TPU 95A exceeds 700% in Bambu Lab's data sheet; PET-CF breaks at 4.5%.

**Tip:** write down the load first – pull, bend, impact, heat, or a mix – and then pick the material that wins on that property. "Strongest overall" rarely exists.

## Which is the strongest 3D printer filament by property?

Reading the table above by column gives a clearer answer than any single ranking:

- **Highest tensile strength along the layers:** PA6-CF (102 MPa), then PAHT-CF (88 MPa) and PET-CF (74 MPa).
- **Highest strength between layers:** PAHT-CF (64 MPa), then PC (56 MPa) and PA6-CF (48 MPa). PET-CF drops from 74 MPa to 35 MPa across the layers – less than half.
- **Toughest:** TPU 95A by far (125.2 kJ/m² X-Y, 88.7 kJ/m² Z), then PAHT-CF (57.5) and PETG Basic (52.7).
- **Stiffest:** carbon-fibre grades. Bambu Lab's filament guide lists PA6-CF at 5,460 MPa and PET-CF at 5,320 MPa bending modulus, roughly double PLA.
- **Most heat resistant:** PET-CF (205 °C), PAHT-CF (194 °C), PA6-CF (186 °C). Of the unfilled materials, PC leads.

**Why it matters:** if you ask "what is the strongest 3D printer filament" for a load-bearing hook, PAHT-CF or PC is a better answer than PA6-CF, because a hook printed upright is loaded across its layers, where PAHT-CF and PC keep most of their strength.

## Print orientation: the weak direction decides

FDM parts are anisotropic: they are stronger along the printed lines than between layers. Every material in Bambu Lab's data sheets loses strength in Z, but by very different amounts:

| Material | X-Y tensile | Z tensile | Z as share of X-Y |
|---|---|---|---|
| PC | 62 MPa | 56 MPa | about 90% |
| PLA Basic | 39 MPa | 35 MPa | about 90% |
| PAHT-CF | 88 MPa | 64 MPa | about 73% |
| PETG-CF | 59 MPa | 38 MPa | about 64% |
| PA6-CF | 102 MPa | 48 MPa | about 47% |
| PET-CF | 74 MPa | 35 MPa | about 47% |

Impact strength drops even more. ASA falls from 41.0 kJ/m² in X-Y to 4.9 kJ/m² in Z, ABS from 39.3 to 7.4, and PET-CF from 36.0 to 4.5 – while PLA Basic keeps 13.8 kJ/m² in Z.

**Tip:** orient the part so the main load runs along the layers, not across them. A wall bracket printed lying on its side is much stronger than the same bracket printed standing up, because the bending stress then runs along the extruded lines. Open the file in our [STL viewer](/stl-viewer/) to check which way the part will be loaded before you slice it.

## PLA, PLA+ and Tough PLA: strong enough for many parts

Standard PLA has decent tensile strength and is stiff, but it is brittle and softens at about 57 °C (Bambu Lab's PLA Basic heat deflection at 0.45 MPa). Bambu Lab's PLA Tough raises tensile strength to 44 MPa and impact strength to 31.2 kJ/m², with the same low heat resistance. Other brands sell similar modified grades as PLA+, PLA Pro or Tough PLA, with no common standard behind the names – see [PLA vs PLA+](/blog/pla-vs-pla-plus/) for how they differ.

**Tip:** PLA is a sensible choice for stiff indoor parts, jigs and prototypes. Do not use it for anything that sits in a car, in the sun or near a motor.

## PETG, ABS and ASA: the tough middle ground

PETG Basic beats PLA on tensile strength (48 vs 39 MPa) and doubles its impact strength, which is why it is a common upgrade for functional parts; our [PETG vs PLA](/blog/petg-vs-pla/) comparison covers the trade-offs in detail. ABS and ASA are not stronger than PETG in tension (41 and 37 MPa), but they resist heat better – 87 °C and 100 °C – and ASA adds UV resistance for outdoor parts. Both need an enclosure to stop warping and splitting. See [ASA vs ABS](/blog/asa-vs-abs/) to choose between them.

**Why it matters:** ABS and ASA have the weakest layer impact strength in the table. Prusa's troubleshooting guide notes that ABS is highly prone to layer separation when cold air reaches the print and recommends turning the part-cooling fan off and printing in an enclosure.

## Polycarbonate: the strongest unfilled filament

PC is the strongest plain material in Bambu Lab's line-up: 62 MPa along the layers, 56 MPa across them, and a bending strength of 108 MPa. Its small loss in the Z direction makes it predictable for load-bearing parts, and its heat resistance (112–117 °C) is the highest of the unfilled grades. The catch is printing: Bambu Lab printed its test specimens at a 270 °C nozzle and 100 °C bed, and PC warps without a warm, enclosed chamber.

**Tip:** choose PC when you need strength in every direction and heat resistance, and your printer is enclosed and reaches at least 270 °C at the nozzle.

## Nylon and carbon-fibre composites: the strongest on most home printers

Nylon (PA6, PA12 and high-temperature blends) is tough and wear-resistant, and adding chopped carbon fibre makes it much stiffer and more heat resistant. That is why PA6-CF and PAHT-CF top the table for tensile strength and heat. Bambu Lab printed both at 280–290 °C with a 100 °C bed, and like all fibre-filled filaments they need a hardened nozzle. Our [carbon fiber filament guide](/blog/carbon-fiber-filament/) covers nozzles, settings and safety.

Two cautions apply:

- **Moisture.** Nylon absorbs water quickly. Bambu Lab lists saturated water absorption of 2.35% for PA6-CF and 0.88% for PAHT-CF, against 0.43% for PLA. Its data sheets give dry-state values only, so dry the spool before printing and store it sealed.
- **Fibres trade toughness for stiffness.** PETG-CF has lower unnotched impact strength than plain PETG Basic (41.2 vs 52.7 kJ/m²), and PET-CF is the most brittle material in the table between layers.

Unfilled nylon is more flexible and impact-resistant than CF grades, but makers' numbers vary widely by blend and moisture content, so check the specific spool's data sheet.

## TPU: the toughest, not the strongest

TPU 95A has the lowest tensile strength in the table (29.6 MPa) but by far the highest impact strength, and it stretches more than 700% before breaking. Parts made from it bend instead of cracking, so for bumpers, drone guards, phone cases, gaskets and vibration mounts it outlasts every rigid filament. It is too soft for anything that must hold its shape under load. Our TPU filament guide covers print settings.

## PEEK, PEI (ULTEM) and other high-performance filaments

PEEK, PEKK and PEI (sold under the ULTEM brand) are stronger and far more heat resistant than anything above, and they are also self-extinguishing and chemical resistant. They are not filaments for a normal desktop printer:

- **PEEK-CF:** Prusa's knowledge base lists a 380–440 °C nozzle, a 140–155 °C bed and an actively heated chamber at 85 °C or more, plus drying at 130 °C for at least four hours.
- **PEI / ULTEM:** Prusa lists a 150–155 °C bed, an 85–90 °C chamber and drying at 130–150 °C, and warns about warping and difficult support removal. It claims heat resistance above 200 °C.

Prusa recommends both for its Pro HT90 industrial printer. Other makers also sell high-temperature composites such as PPS-CF and PPA-CF for their high-end machines; check each printer's material list before buying a spool.

**Why it matters:** if your printer tops out at 300 °C and has no heated chamber, the strongest filament you can print reliably is a CF nylon or PC, not PEEK.

## How to make 3D prints stronger: settings checklist

The material sets the ceiling; the settings decide how close you get to it. Work through this list in order:

1. **Orient for the load.** Put the main stress along the layers, as shown above. This often matters more than switching material.
2. **Add walls before infill.** Prusa's documentation says a model's strength is mostly defined by the number of perimeters, not the infill, and its profiles use at least two. For functional parts, try 4–6 walls and thicker top and bottom shells.
3. **Keep infill sensible.** Prusa's infill guide calls 10–20% the best balance for most parts and says going above about 40% makes little sense; gyroid supports the part well in every direction. Use high infill only for parts under heavy compression.
4. **Print hot enough.** Too low a nozzle temperature is a common cause of weak layers. Prusa suggests raising it in 5 °C steps within the maker's range until layers bond well, and raising the flow multiplier in 5% steps after calibration.
5. **Control cooling and draughts.** Reduce or turn off the part fan for ABS and ASA, and use an enclosure for ABS, ASA, PC and nylon.
6. **Dry the filament.** Wet nylon, PC and PETG print with bubbles and weaker layers. Dry them before printing and store them sealed.
7. **Anneal where the maker allows it.** Bambu Lab annealed all its test specimens before testing, and its PET-CF and PAHT-CF data sheets suggest annealing printed parts at about 80–140 °C for several hours, warning that parts may warp. Test on a spare part first.
8. **Check the file.** Thin walls in the model limit how many perimeters fit. Open it in a 3MF or STL viewer to look for thin sections and check the size before slicing.

## Choosing the strongest filament for your use case

| Use case | Good choice | Why |
|---|---|---|
| Indoor brackets, jigs, prototypes | PLA Tough or PETG | Easy to print, strong enough at room temperature |
| Parts that get dropped or knocked | PETG or TPU | High impact strength |
| Outdoor parts, car interiors | ASA or PC | Heat resistance; ASA also resists UV |
| Load-bearing parts loaded across layers | PC or PAHT-CF | Strongest Z-direction values |
| Stiff, light frames (drones, RC) | PA6-CF, PETG-CF | High stiffness and tensile strength |
| Hot environments, engine bays | PAHT-CF, PA6-CF, PET-CF | Heat deflection above 180 °C |
| Flexible bumpers, gaskets, cases | TPU 95A | Absorbs impact, bends without cracking |
| Industrial, flame-resistant parts | PEEK, PEI | Need a high-temperature printer with a heated chamber |

**Tip:** start with the easiest material that meets the requirement. A well-oriented PETG part with six walls often outperforms a badly printed nylon one.

## Verdict

The strongest 3D printer filament on paper, among materials a home printer can handle, is PA6-CF for pulling strength and PAHT-CF for a balance of strength, layer bonding, toughness and heat – both need a hardened nozzle, a hot enclosure and dry filament. PC is the strongest choice without fibres, TPU wins on impact, and PEEK and PEI belong to industrial printers. Whatever you choose, orientation and wall count can matter as much as the material, so set those first.
