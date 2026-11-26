---
title: PETG vs ABS – which filament to choose for functional parts
seoTitle: PETG vs ABS Filament – Strength, Heat and Which to Pick
description: PETG vs ABS compared with maker data – heat resistance, toughness, warping, fumes, UV, finishing, settings and which to pick for each job.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/c592fd3c-2a5f-41dd-b4d2-5edb289847ff/output.png
imageAlt: "Illustration of a glossy blue printed bike mount and a matte grey printed car vent clip on a split workbench with two filament spools"
category: Comparisons
summary:
  - PETG is the easier filament – it warps little, needs no enclosure and smells far less, so it suits open-frame printers.
  - ABS handles more heat (glass transition around 100 °C versus about 80 °C for PETG), sands and glues easily and can be smoothed with acetone, but it needs an enclosure and ventilation.
  - Neither is a good long-term outdoor plastic in strong sun; for UV exposure, makers point to ASA instead.
faq:
  - q: PETG vs ABS – which is better?
    a: Neither is better for every job. PETG is the better default for functional parts on an open printer because it is tough, warps little and has little smell. ABS is the better choice when a part must survive higher heat, such as inside a car in summer, or when you want to sand, glue or acetone-smooth it – as long as you have an enclosure and good ventilation.
  - q: Is PETG stronger than ABS?
    a: It depends on what you mean by strong. Both are tough plastics that bend before they snap. PETG usually has very good layer adhesion, while ABS keeps its strength at higher temperatures. Compare the technical data sheets of the exact filaments you would buy, because brand differences are large.
  - q: ABS vs PETG for car parts – which should I use?
    a: For parts inside a car that sits in the sun, ABS or ASA is the safer choice, because PETG starts to soften around 80 °C and a closed car interior can get hot. For parts in the cabin that stay shaded, PETG often works. For anything on the outside of the car, ASA is the better option because it resists UV.
  - q: PLA vs PETG vs ABS – which should a beginner start with?
    a: Start with PLA, move to PETG when you need tougher or more heat-tolerant parts, and try ABS only once you have an enclosed printer and a ventilated room. That order follows how hard each material is to print.
sources:
  - name: Prusa Knowledge Base – PETG
    url: https://help.prusa3d.com/article/petg_2059
  - name: Prusa Knowledge Base – ABS material guide
    url: https://help.prusa3d.com/en/article/abs_2058
  - name: Prusa Knowledge Base – Filament material guide
    url: https://help.prusa3d.com/materials
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Polymaker Wiki – ABS
    url: https://wiki.polymaker.com/the-basics/3d-printing-materials/abs
  - name: Polymaker – PETG filament collection
    url: https://shop.polymaker.com/collections/petg-filament
  - name: UltiMaker – PETG vs PLA vs ABS strength comparison
    url: https://ultimaker.com/learn/petg-vs-pla-vs-abs-3d-printing-strength-comparison/
  - name: Hubs – PETG filament for 3D printing
    url: https://www.hubs.com/knowledge-base/petg-filament-for-3d-printing/
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**PETG vs ABS comes down to your printer and the heat the part will see: PETG is easier to print, warps less and needs no enclosure, while ABS handles higher temperatures and can be sanded, glued and smoothed with acetone but needs an enclosed printer and good ventilation.** Both are tough plastics for functional parts, which is why people compare them so often. This guide puts the two side by side with figures from Prusa, Bambu Lab and Polymaker documentation, explains what each difference means in practice, adds PLA for the common "PLA vs PETG vs ABS" question and ends with a job-by-job choice. Facts checked November 2026; your spool label and slicer profile always come first.

## PETG vs ABS at a glance

| | PETG | ABS |
|---|---|---|
| Full name | Polyethylene terephthalate glycol-modified | Acrylonitrile butadiene styrene |
| Nozzle temperature | About 230–250 °C (Bambu Lab lists 240–270 °C) | About 240–280 °C |
| Bed temperature | About 70–90 °C (Bambu Lab lists 60–80 °C) | About 90–100 °C (Prusa allows 80–110 °C) |
| Enclosure | Not needed | Recommended; required for larger parts |
| Part cooling | Moderate, about 20–60 % | Low or off |
| Warping | Low | High (shrinks about 1–2 %) |
| Heat resistance | Glass transition about 80 °C | Glass transition about 100 °C |
| Toughness | Tough, bends before breaking | Tough, bends before breaking |
| Smell and fumes | Low | Strong; styrene, ventilate |
| UV / outdoor use | Moderate | Poor – yellows and turns brittle |
| Water and chemicals | Water resistant; resists many chemicals | Water resistant; dissolves in acetone |
| Finishing | Sanding; resists most chemical smoothing | Sands easily; acetone smoothing and gluing |
| Typical problems | Stringing, sticks too hard to smooth PEI | Warping, layer splitting, fumes |
| Best for | Functional parts on any printer | Heat-exposed parts in an enclosed printer |

## What PETG and ABS have in common

Both materials sit one step above PLA. They are tougher, take more heat and bend before they break, so they suit brackets, clips, mounts, enclosures and printer parts rather than display models. Both absorb some moisture from the air and print better when dry. And both need a heated bed and a hot end that reaches at least 250 °C – a limit most current printers meet.

**Why it matters:** if PLA parts crack, creep or sag in the heat, either material can be the fix. The choice is about what your printer can handle and what the part must survive.

## Heat resistance: ABS wins

Polymaker gives PETG a glass transition of about 80–85 °C and puts ABS at about 100 °C. Prusa says PETG parts suit most exterior use as long as they stay below 80 °C, while ABS is the classic pick for parts near motors, lamps or in a hot car. Above the glass transition a plastic softens and slowly deforms under load, so a 20 °C gap matters for parts that carry weight while warm.

**Tip:** for a part that sits behind a car windscreen or next to a heater, choose ABS (or ASA). For a shelf bracket, a tool holder or a desk organiser, PETG has more than enough heat resistance. Our [ABS filament guide](/blog/abs-filament/) covers the heat-related settings in more detail.

## Strength and toughness: closer than you think

"Is PETG stronger than ABS?" has no single answer. Both are tough and flex instead of snapping. UltiMaker's comparison describes PETG as a strong all-rounder and ABS as tough and impact-resistant, and the exact figures vary from brand to brand. PETG's layer adhesion is usually very good, so printed parts are less likely to split along a layer. ABS can split between layers if the print cools unevenly, which is one more reason to use an enclosure.

**Tip:** if strength really matters, compare the technical data sheets of the two exact filaments you would buy and print a test part in each orientation. Differences between brands and between print settings are often bigger than the difference between PETG and ABS as materials.

## Ease of printing: PETG wins

This is the biggest practical difference. PETG has very low thermal expansion, so flat parts stay down on the bed without an enclosure. ABS shrinks about 1–2 % as it cools; without a warm, enclosed chamber the corners lift and tall parts crack between layers. Prusa recommends an enclosure for ABS and says it is required for larger parts.

PETG has its own quirks. It strings more than PLA or ABS, bridges and overhangs are weaker, and it can bond so strongly to a smooth PEI sheet that it tears pieces out. Prusa advises a textured (powder-coated) sheet for PETG, or glue stick as a release layer on smooth PEI.

**Why it matters:** on an open-frame printer, PETG is the practical choice. On an enclosed printer, both are easy, and the choice comes down to the part. See our [PETG filament guide](/blog/petg-filament/) for stringing and adhesion fixes.

## Fumes and smell: PETG wins

ABS releases styrene and other emissions when it is heated, and makers recommend printing it in a well-ventilated room or with filtration. PETG has little smell in comparison. If your printer sits in a bedroom, office or classroom, that alone often decides the question.

**Tip:** if you do print ABS indoors, use an enclosed printer, keep the door closed until the part cools, and air the room afterwards. Many enclosed printers have a carbon filter or an exhaust fan; check that yours is fitted and switched on.

## Outdoor use and UV: neither is ideal

Hubs and Creality describe PETG's UV resistance as moderate, so it lasts longer outdoors than PLA. ABS has poor UV resistance – the butadiene rubber in it breaks down in sunlight, so it yellows and turns brittle. For long-term sun exposure, makers point to ASA, which prints like ABS but resists UV.

**Tip:** for garden fittings and planters in partial shade, PETG is usually fine. For parts in full sun for years, use ASA. Our [ASA vs ABS comparison](/blog/asa-vs-abs/) explains that choice.

## Finishing, gluing and smoothing: ABS wins

ABS sands easily, takes paint well and dissolves in acetone. That means you can glue ABS parts with acetone or ABS slurry and smooth the surface with acetone vapour for a glossy finish. PETG resists most chemical smoothing, so finishing is mainly sanding, and gluing needs a suitable adhesive such as cyanoacrylate.

**Why it matters:** for cosplay pieces, enclosures that must look moulded, or large parts printed in sections and glued together, ABS is easier to finish. For parts that just need to work, PETG's resistance to chemicals is an advantage, not a drawback.

## Print settings compared

Start from your slicer's profile for the exact brand. These ranges come from Prusa and Bambu Lab guides:

| Setting | PETG | ABS |
|---|---|---|
| Nozzle | 230–250 °C (Prusa: 230 °C first layer, 240 °C after) | 240–260 °C typical; up to 280 °C |
| Bed | 70–90 °C (Prusa: 85 °C, then 90 °C) | 90–100 °C (Prusa allows 80–110 °C) |
| Part cooling fan | 20–60 % | 0–20 %, more only for bridges |
| Enclosure | Not needed; open the door or lid on enclosed printers | Closed, ideally pre-heated |
| Bed surface | Textured PEI, or glue stick on smooth PEI | Textured PEI or glue stick; brim for large parts |
| Drying when damp | About 55–70 °C | About 70–80 °C |

**Tip:** on an enclosed printer, Bambu Lab recommends opening the top cover for PETG when the bed is above 70 °C, so heat does not build up. For ABS, keep everything closed.

## PLA vs PETG vs ABS – where PLA fits

Many searches compare all three. PLA is the easiest to print, the stiffest and gives the sharpest detail, but it softens around 55–60 °C and is brittle. PETG adds toughness and about 20 °C more heat resistance with only a little more effort. ABS adds about another 20 °C and better finishing options, at the cost of an enclosure and fumes.

| | PLA | PETG | ABS |
|---|---|---|---|
| Ease of printing | Easiest | Easy | Hard without an enclosure |
| Heat resistance | Softens about 55–60 °C | About 80 °C | About 100 °C |
| Toughness | Brittle | Tough | Tough |
| Stiffness | Highest | Medium | Lower |
| Fumes | Mild | Low | Strong |
| Outdoor use | Poor | Moderate | Poor (UV) |
| Best for | Models, prototypes, décor | Functional parts | Heat-exposed, finished parts |

For the two-way comparisons, read [PETG vs PLA](/blog/petg-vs-pla/) and [PLA vs ABS](/blog/pla-vs-abs/).

## Which to pick: PETG or ABS for each job

| Job | Pick | Why |
|---|---|---|
| Brackets, hooks, wall mounts | PETG | Tough, easy, no warping |
| Printer parts and tool holders | PETG | Good balance of strength and ease |
| Car interior parts in the sun | ABS or ASA | Higher heat resistance |
| Parts near motors, lamps or heaters | ABS | Keeps shape at higher temperatures |
| Outdoor parts in full sun | ASA | UV resistant; neither PETG nor ABS is ideal |
| Planters and watertight containers | PETG | Water resistant, strong layer bonding |
| Cosplay, display parts to paint and smooth | ABS | Sands, glues and acetone-smooths |
| Prints in a bedroom or classroom | PETG | Far less smell |
| Large flat parts on an open printer | PETG | Low shrinkage |

## Checklist before you switch materials

1. **Check your printer.** ABS needs an enclosure; PETG does not. Both need a hot end that reaches about 250 °C.
2. **Dry the spool** if it has been open for weeks – damp PETG strings, damp ABS bubbles.
3. **Load the right profile** for the exact brand in your slicer.
4. **Prepare the bed.** Textured PEI for both; glue stick on smooth PEI for PETG.
5. **Set cooling.** Moderate fan for PETG, low or off for ABS.
6. **Print a test part** – a clip or bracket you actually need – and load it the way it will be used.
7. **Check the model first.** Open the file in our [STL viewer](/stl-viewer/) to check size and wall thickness before printing.

## Verdict

If you print on an open-frame machine or in a living space, choose PETG: it is tough, easy and handles everyday heat. If you have an enclosed printer and the part will get hot, or you want a smooth, painted finish, choose ABS. For sun-exposed outdoor parts, skip both and use ASA.
