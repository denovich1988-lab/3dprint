---
title: PLA filament – what it is, settings, temperatures and types of PLA
seoTitle: PLA Filament – What It Is, Settings and Types of PLA
description: PLA filament explained – what PLA is made of, its properties, typical nozzle and bed temperatures, cooling, bed surfaces, drying and the main types of PLA.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/8b9158c2-571f-4e78-899b-76c03bcff147/output.png
imageAlt: "Illustration of a nozzle laying an orange PLA layer on a textured plate, with a white PLA spool behind and a geometric planter beside the bed"
category: Filament and materials
summary:
  - PLA (polylactic acid) is a plant-based polyester and the easiest, most common filament for FDM 3D printing.
  - Typical PLA settings are about 190–230 °C at the nozzle, 45–65 °C on the bed (or none) and full part cooling after the first layers.
  - PLA starts to soften at about 50–60 °C, so it suits models, prototypes and indoor parts, not parts that get hot or live outdoors.
faq:
  - q: What is PLA filament?
    a: PLA filament is a 3D printing plastic made from polylactic acid, a polyester produced from plant sugars such as corn, sugar cane or sugar beet. It melts at low temperature, barely warps and has little smell, which makes it the standard filament for beginners and most everyday prints.
  - q: What temperature should PLA filament be printed at?
    a: Most PLA prints at about 190–230 °C at the nozzle. Prusa uses 215 °C for the first layer and 210 °C after, and Bambu Lab lists 190–240 °C for its PLA grades. A 45–65 °C bed works for most plates. Always start from the range on the spool label.
  - q: What are the downsides of PLA filament?
    a: PLA is brittle compared with PETG or ABS, it breaks along layer lines on impact, it softens at around 50–60 °C and it degrades in sunlight over time. That rules it out for hot cars, outdoor fittings and parts that must flex.
  - q: Is PLA or PETG better?
    a: Neither is better overall. PLA is easier to print and gives sharper detail; PETG is tougher, handles more heat and works outdoors. Use PLA for models and indoor parts, PETG for functional parts that bend, get warm or go outside.
sources:
  - name: Prusa Knowledge Base – PLA
    url: https://help.prusa3d.com/article/pla_2062
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Polymaker – PolyLite PLA technical data sheet
    url: https://wiki.polymaker.com/polymaker-products/more-about-our-products/documents/technical-data-sheets/pla/polylite-tm-pla
  - name: Polymaker – HT-PLA technical data sheet
    url: https://polymaker.com/wp-content/uploads/lana-downloads/TDS_Polymaker_HT-PLA_V1.3_2025-12-10_EN.pdf
  - name: Simplify3D – PLA materials guide
    url: https://www.simplify3d.com/support/materials-guide/pla/
  - name: SUNLU Wiki – General filaments
    url: https://www.sunlu.com/wiki/general-filament
  - name: SUNLU Wiki – Functional filaments
    url: https://www.sunlu.com/wiki/functional-filament
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**PLA filament is a plant-based plastic (polylactic acid) that melts at low temperature, hardly warps and has very little smell, which is why it is the default filament for almost every FDM 3D printer.** It needs no enclosure and often no heated bed, it holds fine detail well, and it comes in more colours and finishes than any other material. This guide explains what PLA is, what it is good and bad at, typical PLA filament settings and temperatures, bed surfaces, drying and the main types of PLA. Facts come from Prusa's knowledge base, the Bambu Lab wiki, Polymaker data sheets and Simplify3D's materials guide, checked November 2026. The range printed on your spool label always comes first.

## PLA filament at a glance

| Property | PLA (typical) |
|---|---|
| Full name | Polylactic acid |
| Made from | Plant sugars – corn, sugar cane or sugar beet |
| Nozzle temperature | About 190–230 °C (Bambu Lab lists 190–240 °C) |
| Bed temperature | About 45–65 °C, or unheated with tape or glue |
| Part cooling | 100 % after the first 1–2 layers |
| Glass transition | About 60 °C (Polymaker PolyLite PLA: 61 °C) |
| Enclosure | Not needed; Bambu Lab advises removing the top cover on enclosed printers |
| Hardened nozzle | Only for carbon-fibre, metal-filled or glow-in-the-dark PLA |
| Drying | Optional; about 45–55 °C when needed |
| Strengths | Easy to print, low warping, sharp detail, stiff, many finishes |
| Weak points | Brittle, low heat resistance, degrades in sunlight |

## What is PLA filament?

PLA stands for polylactic acid. It is a polyester, like PETG, but made from renewable plant sugars rather than oil: Prusa names corn, sugar cane and sugar beet as typical sources. The resin is melted and drawn into a 1.75 mm (or 2.85 mm) filament and wound on a spool.

PLA is often called biodegradable, but that needs a caveat. Prusa points out that it breaks down only in industrial composting facilities at temperatures above about 80 °C. It will not rot in a garden compost heap or a drawer, and printed parts last for years indoors.

## PLA properties – what it is good at

- **Easy to print.** Low print temperature, very little shrinkage and no fumes worth worrying about. Prusa calls it one of the easiest materials to print.
- **Low warping.** Large, flat parts stay on the bed without an enclosure, so PLA suits big models.
- **Fine detail.** PLA solidifies quickly with a fan, so small features, text and overhangs come out crisp.
- **Stiff.** Simplify3D describes PLA as stiff with good strength and good dimensional accuracy – useful for fixtures and parts that must hold their shape.
- **Huge choice.** Silk, matte, marble, wood, glow, translucent and multi-colour finishes are almost all sold as PLA.

**Tip:** if you are not sure what to print a part in, print it in PLA first. You will learn whether it fits and works before spending time on a harder material.

## The downsides of PLA

Prusa lists PLA's weaknesses clearly: it is brittle, it breaks along layer lines or shatters on impact, and it has low resistance to heat and UV light. Simplify3D adds that it can ooze and string without tuned retraction.

The most important limit is **heat**. Polymaker gives a glass transition of 61 °C for its PolyLite PLA, and Bambu Lab warns that PLA may slowly soften at around 50 °C or more. A PLA part on a car dashboard in summer, next to a heater or in a dishwasher will deform.

If a part must bend, get warm or live outdoors, PETG is usually the next step – see [PETG vs PLA](/blog/petg-vs-pla/). For high heat in an enclosed printer, ABS or ASA is the usual choice.

## PLA filament settings

Start with your slicer's PLA profile for your brand, then fine-tune. These are typical values from maker guides:

| Setting | Typical starting point | Notes |
|---|---|---|
| Nozzle | 200–220 °C | Prusa: 215 °C first layer, 210 °C after |
| Bed | 50–60 °C | Bambu Lab: 35–45 °C on the Cool Plate, 45–65 °C on PEI |
| Part cooling | 100 % | Off or low for the first 1–2 layers |
| Speed | Per printer profile | High-speed PLA grades are made for much faster printing |
| Retraction | Printer default | Tune if stringing persists after drying |
| First layer | Slightly hotter than the rest | Helps the first layer bond |

**Cooling matters most.** Simplify3D recommends running the part cooling fan at full power for everything after the first layer or two. PLA needs to solidify fast to keep overhangs, bridges and small details sharp.

**Enclosed printers.** Bambu Lab recommends removing the top glass cover when printing PLA with the bed above 45 °C, so heat does not build up and soften the part or clog the hot end.

## PLA filament temperature: how to find the right one

PLA filament temperature ranges vary more than most people expect. Prusa notes that other brands' ideal values range from about 185 to 235 °C, and Polymaker lists 190–230 °C for PolyLite PLA. Additives, pigments and speed all change the best value.

1. Start in the middle of the range on the spool.
2. Print a temperature tower – a test part that changes temperature every few millimetres.
3. Pick the lowest temperature that gives strong layers and clean bridges.
4. Go hotter (by 5–10 °C) for fast printing, thick layers or a large nozzle.
5. Go cooler (by 5–10 °C) if you see stringing, blobs or drooping overhangs.

**Signs the temperature is wrong:**

| Symptom | Likely cause |
|---|---|
| Parts snap cleanly along a layer | Too cold, or too fast for the temperature |
| Under-extrusion, clicking extruder | Too cold for the speed |
| Stringing and blobs | Too hot, or wet filament |
| Drooping overhangs, rounded corners | Too hot, or too little cooling |

**PLA bed temperature.** A heated bed is optional for PLA – Simplify3D lists 45–60 °C as typical and Prusa recommends 60 °C. A warm bed mainly helps the first layer stick and reduces corner lift on large parts.

## Bed surfaces and adhesion

PLA sticks well to most surfaces. Prusa says satin or smooth PEI gives the best adhesion, and a properly degreased sheet is usually enough. Glass, painter's tape, Kapton tape and glue stick also work.

1. Clean the plate with dish soap and water, or isopropyl alcohol.
2. Check the first layer height – most adhesion problems come from a nozzle that is too high.
3. Use glue stick on glass or a worn sheet.
4. Add a brim to tall, thin or sharp-cornered parts.

## Does PLA need to be dried?

Not always. A freshly opened PLA spool usually prints fine, and Bambu Lab lists drying PLA as recommended rather than required. Dry it when it pops, strings more than usual, looks rough or snaps when bent. Prusa dries PLA at 45 °C, Polymaker gives 55 °C for 6 hours and Bambu Lab 55 °C for 8 hours in a blast oven. Stay at or below the label value: PLA softens not far above that, and the coils can fuse. Our [how to dry filament](/blog/how-to-dry-filament/) guide covers methods and times for every common material.

## Types of PLA

"PLA" covers a large family of grades. The base polymer is the same; additives change the finish, toughness or speed.

| Type of PLA | What changes | Notes |
|---|---|---|
| Standard PLA | Baseline | Stiff, easy, crisp detail |
| PLA+ / PLA Pro / Tough PLA | Tougher, less brittle | No standard definition; see [PLA vs PLA+](/blog/pla-vs-pla-plus/) |
| High-speed PLA | Flows faster | For CoreXY printers running fast profiles |
| Matte PLA | Flat surface that hides layer lines | Prints like standard PLA on most profiles |
| Silk PLA | Glossy, metallic sheen | Print slower for the best shine |
| Multi-colour / rainbow PLA | Colour changes along the spool | Purely decorative |
| Wood, marble and metal-filled PLA | Particles for texture and weight | Metal-filled grades need a hardened nozzle per Bambu Lab |
| Glow-in-the-dark PLA | Glowing pigment | Abrasive; Bambu Lab recommends a hardened nozzle for long-term use |
| Carbon-fibre PLA (PLA-CF) | Stiffer, matte | Hardened nozzle required (Bambu Lab) |
| Lightweight PLA (LW-PLA) | Low density | For model aircraft and boats; SUNLU lists 180–200 °C and slow printing |
| High-temperature PLA (HT-PLA) | Better heat resistance after annealing | Polymaker anneals its HT-PLA at 80–90 °C for 30 minutes |

**Tip:** specialty PLAs often have narrower windows than standard PLA. Silk and multi-colour grades look best at lower speeds, and filled grades need a nozzle that resists wear. Check the spool label for each one.

For one brand's settings across a full PLA range, see our [SUNLU filament guide](/blog/sunlu-filament/).

## What is PLA filament used for?

| Good for | Not good for |
|---|---|
| Display models, figures, cosplay props | Parts in hot cars or near heaters |
| Prototypes and fit tests | Outdoor fittings in direct sun |
| Toys and decorative items | Snap-fits and parts that flex a lot |
| Calibration prints and jigs | Food-contact items without precautions |
| Large flat parts such as signs and panels | Mechanical parts under constant load |

PLA as a raw material is used in food packaging, but Prusa does not recommend printed PLA for food contact because layer grooves trap bacteria. Read [is PLA food safe?](/blog/is-pla-food-safe/) before printing cups, cutters or containers.

## Checklist for printing PLA

1. Load the PLA profile for your brand, or a generic PLA profile.
2. Clean the bed and check the first layer height.
3. Set the bed to 50–60 °C (or the value for your plate).
4. Keep the fan off for the first layer, then at 100 %.
5. On an enclosed printer, remove the top cover or open the lid.
6. Print a temperature tower for a new brand or finish.
7. Dry the spool if it starts popping or stringing.
8. Store opened spools in a sealed bag with desiccant.

## Verdict

PLA filament is the easiest and most versatile material to start with: low temperatures, almost no warping, sharp detail and endless finishes. Its limits are heat, impact and sunlight, so keep it for models, prototypes and indoor parts, and move to PLA+, PETG or ASA when a part needs toughness, warmth or weather resistance.
