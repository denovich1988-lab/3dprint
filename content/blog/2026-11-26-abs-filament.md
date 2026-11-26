---
title: ABS filament – what it is, print settings and how to print it well
seoTitle: ABS Filament – What It Is, Print Settings and Tips
description: What is ABS filament? Typical nozzle and bed temperatures, enclosure and fume advice, drying, adhesion, acetone smoothing, uses and ABS vs PLA, PETG, ASA.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/df70200b-c08a-45d1-9e10-b515b868163a/output.png
imageAlt: "Illustration of an enclosed printer printing a black ABS electronics box, with an ABS knob being vapour-smoothed in a glass jar beside it"
category: Filament and materials
summary:
  - ABS (acrylonitrile butadiene styrene) is a tough, heat-resistant plastic with a glass transition around 100 °C – the same family of material used for LEGO bricks and car trim.
  - Makers typically list a nozzle of about 240–280 °C and a bed of about 90–100 °C, with the part cooling fan low or off.
  - ABS warps and gives off styrene fumes, so makers recommend an enclosed printer and a well-ventilated room.
faq:
  - q: What is ABS filament?
    a: ABS filament is a 3D printing material made from acrylonitrile butadiene styrene, a petroleum-based thermoplastic. It is tougher and much more heat-resistant than PLA, sands and paints easily and can be smoothed with acetone, but it needs high temperatures, an enclosure and ventilation to print well.
  - q: Is ABS filament better than PLA?
    a: For functional parts that get warm or take impacts, yes – ABS keeps its shape near 100 °C and bends before it breaks. For decorative and indoor prints PLA is easier, warps less and needs no enclosure, so it is usually the better choice there.
  - q: Why is ABS so hard to print?
    a: ABS shrinks about 1–2 % as it cools. If the part cools unevenly, corners lift off the bed and layers split. A warm, draft-free enclosure, a hot bed, low part cooling and good bed adhesion solve most of these problems.
  - q: Why use ABS instead of PETG?
    a: ABS handles more heat than PETG, sands and glues more easily and can be smoothed with acetone for a glossy finish. PETG is easier to print without an enclosure and has less smell, so it is the better pick on an open-frame printer.
sources:
  - name: Prusa Knowledge Base – ABS material guide
    url: https://help.prusa3d.com/en/article/abs_2058
  - name: Bambu Lab – ABS filament page
    url: https://bambulab.com/fr/filament/abs
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab Wiki – Compatibility and parameter settings of filaments
    url: https://wiki.bambulab.com/en/x1/manual/compatibility-and-parameter-settings-of-filaments
  - name: Polymaker Wiki – ABS
    url: https://wiki.polymaker.com/the-basics/3d-printing-materials/abs
  - name: Polymaker Wiki – PolyLite ABS
    url: https://wiki.polymaker.com/polymaker-products/polymaker-filaments/prime-materials/abs-and-asa/polylite-tm-abs
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**ABS filament is acrylonitrile butadiene styrene, a tough, heat-resistant 3D printing plastic that handles temperatures around 100 °C and sands, glues and smooths with acetone – but it prints hot, warps without an enclosure and gives off fumes.** It is the same family of plastic used for LEGO bricks, car trim and appliance housings. This guide explains what ABS is, typical print settings, why it needs an enclosure, how to handle fumes, drying and bed adhesion, acetone smoothing, and how it compares with PLA, PETG and ASA. Facts come from Prusa, Bambu Lab and Polymaker documentation, checked November 2026. Settings differ between brands, so always check the spool label.

## ABS filament at a glance

| Property | ABS (typical) |
|---|---|
| Full name | Acrylonitrile butadiene styrene |
| Nozzle temperature | About 240–280 °C (some grades from 220 °C) |
| Bed temperature | About 90–100 °C (Prusa allows 80–110 °C) |
| Enclosure | Recommended; required for larger parts |
| Part cooling fan | Low or off |
| Heat resistance | Glass transition around 100 °C |
| Shrinkage | About 1–2 % |
| UV / weather resistance | Poor – yellows and turns brittle outdoors |
| Smell and fumes | Strong; styrene, ventilate |
| Drying | 70–80 °C for 6–8 h when damp |
| Post-processing | Sands easily; acetone smoothing and gluing |
| Food-safe | No |

## What is ABS filament?

ABS is a petroleum-based thermoplastic made of three parts: acrylonitrile, which adds chemical resistance and hardness; butadiene, a rubber that makes it tough; and styrene, which makes it rigid and easy to process. Polymaker's wiki puts its glass transition temperature at about 100 °C, compared with about 60 °C for PLA.

In practice that means ABS parts keep their shape in a hot car or next to a warm motor, take knocks without shattering, and can be sanded, drilled, painted and solvent-welded. Prusa describes its best use as cheap technical parts that need good heat and mechanical resistance, and parts that will be smoothed with acetone.

The weak points are just as clear. Prusa lists significant warping, the need for an enclosure, potentially dangerous styrene fumes and a lack of UV resistance as the main drawbacks. Most brands sell ABS in 1.75 mm, and many also offer variants such as glass-fibre ABS (ABS-GF) or PC-ABS blends for extra stiffness or heat resistance.

## ABS print settings: temperatures and speed

Maker ranges overlap but differ in the details:

| Source | Nozzle | Bed | Notes |
|---|---|---|---|
| Bambu Lab ABS | 240–280 °C | 90–100 °C | Smooth, textured PEI or engineering plate; under 300 mm/s; not the Cool Plate |
| Prusa material guide | 255 °C | 100 °C (80–110 °C; hotter for large parts) | Smooth or powder-coated PEI with glue stick |
| Polymaker PolyLite ABS | 245–265 °C | 90–100 °C | Fan off; 50–200 mm/s; 1–3 mm retraction |
| Polymaker wiki (general ABS) | 220–260 °C, some blends 240–280 °C | 90–110 °C | 1–2 mm retraction at 20–30 mm/s |

**Tip:** start with the profile your slicer offers for your filament brand. If layers split, raise the nozzle temperature by 5–10 °C and reduce cooling. If you get stringing, try slightly more retraction or a few degrees cooler.

Polymaker recommends an all-metal hotend for printing above 240 °C. Most current enclosed printers have one; on an older open-frame printer with a PTFE-lined hotend, check before printing ABS at the top of its range.

## Do you need an enclosure for ABS?

For anything bigger than a small part, yes. ABS shrinks as it cools – Prusa puts the shrinkage at about 1–2 % – and uneven cooling pulls corners off the bed or splits layers higher up. Prusa says the printer should be inside an enclosure with a higher ambient temperature, and Bambu Lab recommends an enclosed printer and does not recommend open-frame printers for ABS.

Polymaker gives the most specific guidance for its PolyLite ABS:

- **Small parts** (roughly fist-sized) can work on an open printer.
- **Larger parts** need an enclosure at roughly 40–50 °C.
- **Parts over about 15–20 cm** in any direction need an actively heated chamber at roughly 70 °C or more.

Most enclosed printers reach a useful chamber temperature from the heated bed alone. The [Bambu Lab P1S](/printers/bambu-lab-p1s/) and Prusa Core One are examples built with an enclosure; you can compare enclosure and temperature specs in our [printer comparison tool](/printers/compare/).

**Without an enclosure:** Prusa suggests turning on a draft shield in the slicer's skirt and brim settings. Add a brim, keep parts small, and keep the printer away from windows, fans and air conditioning.

Prusa also warns that a hot enclosure can deform plastic printer parts such as the fan shroud over time. If you print ABS often, check printed parts on your machine.

## ABS fumes and ventilation

ABS has a strong smell while it prints. Bambu Lab describes an unpleasant odour and pungent fumes, Prusa says the material releases fumes and substances – including styrene – that could pose a health risk, and Polymaker says ABS emits VOCs and needs ventilation or filtration.

Practical steps:

- Print in a well-ventilated room, not a bedroom or small closed office.
- Use an enclosed printer with a carbon filter, or vent the enclosure outside if you print ABS regularly.
- Keep airflow around the room, not blowing across the print – drafts cause warping.
- Wait a few minutes after the print finishes before opening the door.

## Bed adhesion and first layer

ABS needs a hot bed and a surface it grips well:

- **Surfaces:** Bambu Lab lists its engineering, smooth PEI and textured PEI plates (not the Cool Plate). Prusa recommends smooth or powder-coated PEI with glue stick. Polymaker also mentions PEI, adhesive products and painter's tape.
- **Glue:** a thin layer of glue stick helps on smooth PEI and also protects the sheet when parts stick too well.
- **Brim:** add one for large flat parts or sharp corners.
- **Cool-down:** Bambu Lab advises letting the plate and model cool for a few minutes before removing the part.

**Do not** clean build plates with acetone – Bambu Lab warns it may damage the surface. Use dish soap and warm water or isopropyl alcohol as your plate maker recommends.

## Drying and storing ABS

ABS absorbs some moisture from the air, which shows up as popping, bubbles, stringing and rough surfaces. Typical drying advice:

| Source | Drying |
|---|---|
| Bambu Lab | 80 °C for 8 h in a drying oven, or 90–100 °C for 12 h on an X1-series heatbed |
| Polymaker PolyLite ABS | 70 °C for 6 h |

Store spools sealed with desiccant between prints. See our how to dry filament guide for ovens, dryers and dry boxes.

## Acetone smoothing, sanding and gluing

Post-processing is one of the best reasons to choose ABS:

- **Acetone vapour smoothing:** ABS dissolves in acetone, so exposing a part to acetone vapour melts the outer surface into a smooth, glossy finish and hides layer lines. Prusa lists acetone smoothing as one of the main advantages of ABS.
- **Sanding:** ABS sands well, wet or dry, and takes primer and paint.
- **Gluing:** ABS parts can be solvent-welded with acetone or an ABS–acetone slurry, which is useful for prints too large to make in one piece.

**Safety:** acetone is highly flammable – Polymaker stresses extreme caution. Work in a ventilated space away from heaters, flames and sparks, and never heat acetone to speed up smoothing. Smoothing also softens fine details and changes dimensions slightly, so leave it off parts that must fit precisely.

## What is ABS used for?

Makers and material guides list typical uses such as:

- Car interior parts, clips, mounts and trim
- Housings for electronics and appliances
- Jigs, fixtures and tool holders
- Functional prototypes and snap-fit parts
- Toys and brick-style parts
- Parts that will be painted or acetone-smoothed

ABS is not a good long-term outdoor material: Prusa notes that ABS parts yellow and turn brittle in sunlight over time. For outdoor parts, use [ASA filament](/blog/asa-filament/) instead.

## ABS vs PLA, PETG and ASA

| | ABS | PLA | PETG | ASA |
|---|---|---|---|---|
| Ease of printing | Hard | Very easy | Easy | Hard |
| Enclosure | Recommended | No | No | Recommended |
| Heat resistance | High | Low | Medium | High |
| Toughness | High | Low – brittle | High | High |
| UV resistance | Poor | Poor | Moderate | High |
| Smell | Strong | Mild | Low | Noticeable |
| Acetone smoothing | Yes | No | No | Yes |

- **ABS vs PLA:** PLA is much easier but softens around 60 °C and is brittle. Read the full [PLA vs ABS comparison](/blog/pla-vs-abs/).
- **ABS vs PETG:** PETG is the easier option for tough parts on an open printer; ABS handles more heat and post-processes better. See our [PETG filament guide](/blog/petg-filament/).
- **ABS vs ASA:** ASA prints much like ABS but resists sunlight; ABS is the usual choice for indoor heat-resistant parts. Details in [ASA vs ABS](/blog/asa-vs-abs/).

## Checklist: your first ABS print

1. **Check the printer:** enclosed if possible, hotend that reaches 250–260 °C, bed that reaches at least 90–100 °C.
2. **Dry the spool** if it has been open for a while.
3. **Prepare the plate:** PEI or engineering plate, clean, thin layer of glue.
4. **Load an ABS profile** from your slicer or the filament maker – not a PLA profile.
5. **Turn part cooling** low or off for most layers.
6. **Add a brim** for large or flat parts, and a draft shield on an open printer.
7. **Preheat with the door closed** for a few minutes so the chamber warms up.
8. **Ventilate the room** but keep drafts away from the printer.
9. **Let the part cool** inside the closed printer before removing it.

Before printing, open the model in our [STL viewer](/stl-viewer/) to spot thin walls and large flat bases, which make warping harder to control.

## Verdict

ABS filament is a solid choice for functional indoor parts that must handle heat and knocks, and for anything you want to sand, paint or acetone-smooth. It asks more of you than PLA or PETG – high temperatures, an enclosure, dry filament and good ventilation. If you have an enclosed printer and a ventilated room, it is a useful material to keep on the shelf; on an open printer, PETG is the easier alternative, and for outdoor parts ASA is the better pick.
