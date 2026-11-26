---
title: PETG filament – what it is, what it is used for and how to print it
seoTitle: PETG Filament – What It Is, Uses and Print Settings
description: PETG filament explained – what PETG stands for, its properties and uses, typical nozzle and bed temperatures, bed adhesion, stringing, drying and PETG HF.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/5e9ed922-ab94-4e7b-aa84-4e6190217feb/output.png
imageAlt: "Illustration of a translucent teal PETG spool beside a snap-fit clip, wall bracket and small planter on a textured build plate with a glue stick"
category: Filament and materials
summary:
  - PETG stands for polyethylene terephthalate glycol-modified, a tougher, more heat-tolerant relative of the PET used in drink bottles.
  - Typical settings are about 230–250 °C at the nozzle and 70–90 °C on the bed, with less part cooling than PLA.
  - PETG strings more than PLA and can bond too strongly to smooth PEI, so a glue stick release layer and dry filament help.
faq:
  - q: What is PETG filament?
    a: PETG filament is a 3D printing plastic made from polyethylene terephthalate modified with glycol. It is tougher and more heat-resistant than PLA, warps far less than ABS and prints on most printers with a heated bed.
  - q: What is PETG filament used for?
    a: Functional parts – brackets, clips, holders, enclosures, printer parts, planters and other outdoor or water-exposed parts. Prusa Research uses PETG for many of its own printer parts.
  - q: What does PETG stand for?
    a: Polyethylene terephthalate glycol-modified. The glycol modification makes the plastic less brittle and clearer than plain PET, and easier to print.
  - q: Does PETG need an enclosure?
    a: No. PETG prints well on open-frame printers. Bambu Lab even recommends removing the top glass cover on enclosed models when the bed is above 70 °C, so the part cools properly.
sources:
  - name: Prusa Knowledge Base – PETG
    url: https://help.prusa3d.com/article/petg_2059
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab Wiki – Printing PETG HF when not fully dried
    url: https://wiki.bambulab.com/en/filament-acc/filament/petg-hf-unfinished-drying
  - name: Bambu Lab Wiki – PLA Basic and PETG HF
    url: https://wiki.bambulab.com/en/filament-acc/filament/pla-basic-and-petg-hf
  - name: Polymaker – PETG filament collection
    url: https://shop.polymaker.com/collections/petg-filament
  - name: Hubs – PETG filament for 3D printing
    url: https://www.hubs.com/knowledge-base/petg-filament-for-3d-printing/
  - name: Creality – What is PETG filament
    url: https://www.creality.com/blog/what-is-petg-filament
tools: [stl-viewer, 3mf-viewer, 3mf-to-stl]
---
**PETG filament is a tough, slightly flexible 3D printing plastic that handles more heat than PLA and warps far less than ABS, which makes it the usual choice for functional parts.** It prints on almost any printer with a heated bed and a hot end that reaches about 250 °C. This guide explains what PETG is, what it is good and bad at, typical settings, the common problems (stringing and bed adhesion) and how variants such as PETG HF differ. Facts come from Prusa's knowledge base, the Bambu Lab wiki and Polymaker, checked November 2026. Your spool label and your slicer's profile always come first.

## PETG filament at a glance

| Property | PETG (typical) |
|---|---|
| Full name | Polyethylene terephthalate glycol-modified |
| Nozzle temperature | About 230–250 °C (Bambu Lab lists 240–270 °C for its PETG) |
| Bed temperature | About 70–90 °C (Bambu Lab lists 60–80 °C on its plates) |
| Part cooling | Lower than PLA, roughly 20–60 % fan |
| Glass transition | About 80 °C |
| Enclosure | Not needed |
| Hardened nozzle | Only for carbon- or glass-fibre PETG |
| Drying | Recommended; about 55–70 °C depending on the maker |
| Strengths | Tough, low warping, good layer adhesion, water resistant |
| Weak points | Stringing, weaker bridges and overhangs, sticks hard to smooth PEI |

## What is PETG?

PETG is a polyester, from the same family as the PET used for drink bottles and food containers. The "G" means the polymer is modified with glycol: part of the standard building block is swapped for a bulkier one, which stops the plastic crystallising as readily. Prusa's guide says this glycol modification makes PETG less brittle and more transparent, and Hubs notes it also makes the material easier to print than plain PET.

**What does PETG stand for?** Polyethylene terephthalate glycol-modified. You will also see "PET-G" or simply "PET" on some spools; check the label, because a few PET grades print differently.

## PETG properties – what it is good at

- **Toughness.** PETG bends before it breaks. Prusa describes it as tough and flexible, so parts often survive drops and snap-fits that would crack PLA.
- **Heat resistance.** Polymaker gives a glass transition of about 80–85 °C for PETG versus about 60 °C for PLA. Prusa says PETG parts suit most exterior use as long as they stay below 80 °C.
- **Low warping.** PETG has very little thermal expansion, so large flat parts stay down without an enclosure.
- **Layer adhesion.** Layers fuse well, which helps with watertight parts such as planters and containers.
- **Water and weather.** PETG resists water and humidity once printed. Hubs and Creality both describe its UV resistance as moderate, so it suits outdoor parts better than PLA, though ASA is the stronger choice for long-term sun.

**Tip:** if a PLA part sags in a hot car or breaks at a clip, reprint it in PETG before reaching for an engineering material.

## Where PETG falls short

Prusa lists the downsides plainly: PETG strings easily, bridges and overhangs are worse than with PLA, fine detail is softer, it bonds very strongly to some beds and supports are harder to remove. Hubs adds that it resists most chemical smoothing, so finishing is usually sanding. It is also stiffer and less heat-resistant than ABS, ASA or PC, so it is not the answer for parts near engines or heaters.

If you are deciding between the two most common filaments, our [PETG vs PLA comparison](/blog/petg-vs-pla/) goes through strength, temperature and use cases side by side.

## What is PETG filament used for?

PETG is the default for parts that do a job rather than sit on a shelf:

| Use | Why PETG fits |
|---|---|
| Brackets, hooks, wall mounts | Tough; flexes instead of snapping |
| Clips, clamps, snap-fit lids | Survives repeated bending better than PLA |
| Printer parts and tool holders | Prusa prints many of its own printer parts in PETG |
| Planters, garden and outdoor fittings | Water resistant; handles sun and warmth better than PLA |
| Electronics enclosures | Low warping on large flat panels |
| Watertight containers | Strong layer bonding |
| Mechanical prototypes and jigs | Good balance of strength and ease of printing |

PETG as a raw material is used for food packaging, but a printed part is a different matter: Prusa does not recommend printed food-contact items without a food-safe coating and a clean stainless steel nozzle, because layer lines trap bacteria. Read [is PLA food safe?](/blog/is-pla-food-safe/) for the details, which apply to PETG too.

## PETG print settings

Start from your slicer's PETG profile for your brand, then adjust. The ranges below are typical values from manufacturer guides:

| Setting | Typical starting point | Notes |
|---|---|---|
| Nozzle | 230–250 °C | Prusa uses 230 °C first layer, 240 °C after; Bambu Lab lists 240–270 °C |
| Bed | 70–90 °C | Prusa uses 85 °C first layer, 90 °C after; Bambu Lab lists 60–80 °C |
| Part cooling fan | 20–60 % | Less fan gives stronger layers; more fan gives sharper detail |
| Speed | 40–100 mm/s on standard grades | High-flow grades are made for much faster printing |
| Retraction | Slightly more than PLA, if stringing | Tune only after drying the filament |

**Cooling trade-off.** Prusa says part cooling keeps details crisp and cuts stringing, but for maximum toughness you can turn the fan off, or run it off for the first layers and at half power after.

**Enclosed printers.** Bambu Lab recommends taking off the upper glass cover when the bed is above 70 °C, so heat does not build up and soften the part.

## Bed adhesion: stop PETG sticking too well

PETG's problem is often the opposite of PLA's: it can bond so strongly that it tears pieces out of a smooth PEI sheet. Prusa advises a powder-coated (textured) or satin sheet for PETG and, if you must use smooth PEI, a layer of glue stick before printing as a release agent. Bambu Lab lists glue stick or liquid glue for PETG on its plates and does not recommend the Cool Plate.

1. Clean the plate with dish soap and water or isopropyl alcohol.
2. Use a textured PEI sheet if you have one.
3. On smooth PEI or glass, apply a thin glue stick layer.
4. Let the bed cool fully before removing the part.

## Stringing and moisture

Some stringing is normal for PETG. Prusa suggests more retraction and a slightly lower nozzle temperature. But the most common cause of sudden heavy stringing, popping or rough walls is moisture: Bambu Lab's wiki says absorbed water turns to steam in the nozzle and causes stringing, oozing, holes and weaker parts.

Bambu Lab recommends drying PETG before use; its material table gives 70 °C for 8 hours in a dryer, while Prusa dries its own PETG at 55 °C for 6 hours. See our guide on [how to dry filament](/blog/how-to-dry-filament/) for methods and a full temperature table, and store spools sealed with desiccant afterwards.

## PETG HF and other PETG variants

- **PETG HF** – "HF" stands for high flow. Bambu Lab's PETG HF is made to be printed fast at high volumetric flow; its wiki gives separate "Bambu PETG HF" and "Generic PETG HF" profiles and warns against using the fast Bambu profile on damp filament. Other brands sell similar "high-speed" or "rapid" PETG.
- **Carbon- or glass-fibre PETG (PETG-CF, PETG-GF)** – stiffer and more matte. Bambu Lab marks PETG-CF as needing a hardened nozzle.
- **Translucent and matte PETG** – same base material with a different finish.
- **Recycled PETG** – made from reclaimed material; use the settings on that spool's label.

The [Bambu filament guide](/blog/bambu-filament/) covers how the Basic, HF and Translucent lines fit together if you print on a Bambu Lab machine.

## Checklist for your first PETG print

1. Dry the spool if it has been open for a while.
2. Load your slicer's PETG profile for your brand.
3. Use a textured sheet, or glue stick on smooth PEI.
4. Lower part cooling compared with PLA.
5. Print a small test part and look for strings and layer gaps.
6. Adjust temperature in 5 °C steps, then retraction, if needed.
7. Store the spool sealed with desiccant after printing.

## Verdict

PETG filament is the practical step up from PLA: tougher, more heat-tolerant and still easy to print without an enclosure. Use it for anything that bends, gets warm or lives outdoors, accept a little stringing, keep the spool dry and protect smooth beds with glue stick.
