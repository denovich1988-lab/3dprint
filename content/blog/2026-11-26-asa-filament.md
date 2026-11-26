---
title: ASA filament – what it is, print settings and when to use it
seoTitle: ASA Filament – What It Is, Settings and Outdoor Use
description: What is ASA filament? Typical nozzle and bed temperatures, why it needs an enclosure, fumes, UV resistance, drying, adhesion, and ASA vs ABS, PLA and PETG.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/120f905c-9781-44bc-8ce9-d8c83abf341e/output.png
imageAlt: "Illustration of a weathered matte grey ASA balcony bracket and sensor housing on a sunlit wall beside an enclosed 3D printer with its door open"
category: Filament and materials
summary:
  - ASA (acrylonitrile styrene acrylate) is an ABS-like plastic whose acrylate rubber makes it far more resistant to sunlight and weather.
  - Makers typically list a nozzle of about 240–270 °C and a bed of about 80–110 °C, and recommend an enclosed printer with little or no part cooling.
  - ASA gives off a noticeable smell and styrene-type fumes while printing, so print it in a well-ventilated room or with a filtered enclosure.
faq:
  - q: What is ASA filament used for?
    a: ASA filament is mainly used for parts that live outdoors or in the sun – car trim and mounts, garden and balcony fittings, signage, camera and sensor housings – and for technical parts that need more heat resistance than PLA.
  - q: Is ASA better than PLA?
    a: For outdoor, warm or UV-exposed parts, yes – ASA keeps its shape far above the point where PLA softens and resists sunlight. For indoor decorative prints PLA is easier, needs no enclosure and does not smell, so it is usually the better choice there.
  - q: Do you need an enclosure to print ASA?
    a: For reliable results, yes. Bambu Lab lists an enclosed printer as required for its ASA, and Prusa says an enclosure is needed for large parts. Small parts can work on an open printer with a draft shield, but warping and layer splitting become much more likely.
  - q: Is ASA filament toxic to print?
    a: ASA releases a pungent smell and VOCs, including styrene-type fumes, while it melts. Makers advise printing it in a well-ventilated area or with filtration and not breathing the fumes directly. It is also not food-safe.
sources:
  - name: Bambu Lab US store – ASA filament
    url: https://us.store.bambulab.com/products/asa-filament
  - name: Prusa Knowledge Base – ASA material guide
    url: https://help.prusa3d.com/en/article/asa_1809
  - name: Polymaker Wiki – ASA
    url: https://wiki.polymaker.com/the-basics/3d-printing-materials/asa
  - name: Polymaker shop – ASA filament collection
    url: https://shop.polymaker.com/collections/asa-filament
  - name: JLC3DP – ASA filament properties and print settings
    url: https://jlc3dp.com/blog/asa-filament
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**ASA filament is acrylonitrile styrene acrylate, an ABS-like 3D printing plastic made for outdoor parts: it resists sunlight, rain and heat far better than PLA, but it prints hot, warps without an enclosure and gives off fumes.** Think of it as ABS with the weak spot fixed – ABS yellows and turns brittle in the sun, while ASA keeps its colour and strength much longer. This guide covers what ASA is, typical print settings, the enclosure and ventilation question, drying and bed adhesion, and how it compares with ABS, PLA and PETG. Facts come from Bambu Lab, Prusa and Polymaker documentation, checked November 2026. Settings differ between brands, so always check the spool label.

## ASA filament at a glance

| Property | ASA (typical) |
|---|---|
| Full name | Acrylonitrile styrene acrylate |
| Nozzle temperature | About 240–270 °C (some grades up to 280 °C) |
| Bed temperature | About 80–110 °C, often with glue |
| Enclosure | Strongly recommended; required by some makers |
| Part cooling fan | Low or off |
| Heat resistance | Around 85–100 °C, depending on grade and test method |
| UV / weather resistance | High |
| Smell and fumes | Noticeable; ventilate |
| Moisture | Partly hygroscopic; dry before printing if damp |
| Post-processing | Sands well; can be smoothed and glued with acetone |
| Food-safe | No |

## What is ASA filament?

ASA is a thermoplastic built from three parts: acrylonitrile for chemical resistance, styrene for rigidity, and an acrylate rubber for toughness. Polymaker's material wiki explains that the acrylate rubber is what makes ASA UV-stable. ABS uses a butadiene rubber instead, and the double bonds in butadiene break down in sunlight – that is why ABS parts fade and crack outdoors.

In use, ASA feels and prints much like ABS. It is stiff, fairly tough, sands easily and dissolves in acetone. Prusa describes it as the successor to ABS, with better UV resistance, less warping and less smell. Most brands sell it in 1.75 mm, and many also offer carbon-fibre versions (ASA-CF) and decorative finishes.

**Typical uses:** car exterior trim, mirror and sensor housings, garden and balcony fittings, outdoor signs, bike and drone mounts, and enclosures for electronics that sit in the sun.

## ASA print settings: temperatures and speed

Manufacturer ranges overlap but are not identical:

| Source | Nozzle | Bed | Speed / notes |
|---|---|---|---|
| Bambu Lab ASA | 240–270 °C | 80–100 °C with glue | Under 250 mm/s; Engineering, High Temp or Textured PEI plate, not the Cool Plate |
| Polymaker ASA (shop) | 230–260 °C | 75–95 °C | 50–200 mm/s depending on printer |
| Polymaker wiki (general ASA) | 240–280 °C, start near 250 °C | 90–110 °C | 35–70 mm/s; 1–2 mm retraction |
| Prusa material guide | 260 °C | 105 °C first layer, 110 °C after | Smooth or powder-coated PEI with glue stick |

**Tip:** start in the middle of the range on your spool label and print a small test part. If layers split, raise the nozzle temperature by 5–10 °C or turn the fan down further. If you see stringing, try slightly more retraction or a few degrees cooler.

Polymaker notes that an all-metal hotend is recommended above 240 °C. Most current enclosed printers already have one; on an older open-frame machine with a PTFE-lined hotend, check before you print ASA.

## Enclosure and cooling: why ASA warps

ASA shrinks as it cools. If one part of the print cools faster than another, the corners lift off the bed (warping) or the layers split apart higher up. Bambu Lab lists an enclosed printer as required for its ASA and says large or high-infill models are the most prone to warping. Polymaker recommends a warm, draft-free chamber and little or no part cooling.

The chamber does not have to be actively heated – an enclosed printer that holds its own heat from a 100 °C bed is usually enough. Printers such as the [Bambu Lab P1S](/printers/bambu-lab-p1s/) and [Prusa Core One](/printers/prusa-core-one/) are built with an enclosure for this reason. You can compare enclosure and temperature specs in our [printer comparison tool](/printers/compare/).

**Without an enclosure:** Prusa suggests a draft shield (a thin wall printed around the part, set in the slicer's skirt and brim options) and keeping the bed at 100 °C or more. Keep the parts small, add a brim, and keep the printer away from windows, fans and air conditioning.

Prusa also warns that printing a lot of ASA in a closed, unventilated enclosure over time can soften plastic printer parts such as fan shrouds, so check printed parts on your machine if you print ASA often.

## Fumes and ventilation

ASA smells while it prints. Bambu Lab describes the odour as pungent but lighter than ABS, and Prusa lists potentially harmful styrene fumes as one of the material's drawbacks. Polymaker says ASA emits VOCs and needs ventilation or air filtration.

Practical steps:

- Print in a room with good airflow, not a bedroom or a small closed office.
- Use an enclosed printer with a carbon filter, or vent the enclosure outside if you print ASA often.
- Keep the airflow around the room, not blowing across the print, or you will cause warping.
- Leave the printer closed for a few minutes after the print ends before opening the door.

## UV resistance and outdoor use

UV stability is the main reason to choose ASA. Bambu Lab and Polymaker both market their ASA for long-term outdoor use, with resistance to sunlight, rain, humidity and temperature changes. Neither publishes a guaranteed lifespan, and results depend on colour, wall thickness and climate.

**Tip:** for outdoor parts, use more walls (perimeters) rather than more infill. The outer skin takes the weathering, and thicker walls also help against heat. Darker colours get hotter in direct sun, so for parts on a dashboard or a south-facing wall, leave a margin on heat resistance.

Heat resistance is quoted in different ways: Bambu Lab gives a heat deflection temperature of 100 °C at 0.45 MPa, Polymaker's wiki gives 86–96 °C at 1.8 MPa, and Prusa says up to 93 °C. All of these are well above standard PLA, which typically softens around 55–60 °C.

## ASA vs ABS

| | ASA | ABS |
|---|---|---|
| UV resistance | High | Poor – yellows and turns brittle |
| Heat resistance | Similar range | Similar or slightly higher, by grade |
| Warping | Still warps, slightly less than ABS | Warps strongly |
| Smell | Noticeable, usually milder | Strong |
| Acetone smoothing | Yes | Yes |
| Best for | Outdoor and sun-exposed parts | Indoor heat-resistant parts |

Settings are close enough that an ABS profile is a reasonable starting point for ASA. Polymaker's wiki table gives ABS a small edge in heat deflection and impact strength, while ASA wins clearly outdoors. **Rule of thumb:** if the part will see daylight for long periods, use ASA; for indoor parts where cost matters, ABS is fine.

## ASA vs PLA and PETG

- **ASA vs PLA:** PLA is much easier to print – lower temperatures, no enclosure, little smell – but it softens in a hot car or summer sun and is not designed for long UV exposure. Use PLA for indoor and decorative prints; use ASA when heat or sunlight is involved.
- **ASA vs PETG:** PETG is the easier outdoor option on an open printer. It does not need an enclosure, smells little and handles moderate heat. ASA has higher heat resistance, better long-term UV stability, a matte finish that hides layer lines, and can be smoothed with acetone. If you have an enclosed printer, ASA is usually the better outdoor material; if not, PETG is the safer choice. Read our [PETG filament guide](/blog/petg-filament/) and [PETG vs PLA](/blog/petg-vs-pla/) for more.

## Drying ASA and bed adhesion

ASA absorbs some moisture from the air. Damp filament causes popping, bubbles, stringing and a rough surface. Typical drying advice from makers:

| Source | Drying |
|---|---|
| Bambu Lab | 80 °C for 8 h in a drying oven, or 100 °C for 12 h on the printer's heatbed |
| Polymaker | 70 °C for about 7 h when the filament has absorbed moisture |

Store ASA sealed with desiccant; Bambu Lab suggests keeping it under 20 % relative humidity. Our [how to dry filament](/blog/how-to-dry-filament/) guide covers ovens, dryers and dry boxes.

For adhesion, makers recommend textured or smooth PEI, an engineering plate, or similar surfaces, usually with glue stick or a liquid adhesive. Prusa warns never to use acetone or ABS/ASA "juice" on a powder-coated sheet. Clean the plate with dish soap and water if prints stop sticking.

## Checklist: your first ASA print

1. **Check the printer:** enclosed if possible, all-metal hotend, bed that reaches at least 90–100 °C.
2. **Dry the spool** if it has been open for a while.
3. **Prepare the plate:** PEI or engineering plate, clean, thin layer of glue.
4. **Load an ASA profile** from your slicer or the filament maker, not a PLA profile.
5. **Turn part cooling down** to low or off for most layers.
6. **Add a brim** for large flat parts or sharp corners.
7. **Preheat** with the door closed for a few minutes so the chamber warms up.
8. **Ventilate the room** and keep drafts away from the printer.
9. **Let the part cool** inside the closed printer before removing it.

Before printing, check the model in our [STL viewer](/stl-viewer/) for thin walls and flat bases, which make warping easier to control.

## Verdict

ASA is the right filament when a part has to live outdoors or in the sun: it handles UV and heat that would ruin PLA, and it is a direct upgrade on ABS for outdoor use. The cost is a harder print – high temperatures, an enclosure, ventilation and dry filament. If you have an enclosed printer, ASA is worth adding to your shelf for functional outdoor parts; on an open printer, PETG is the easier compromise.
