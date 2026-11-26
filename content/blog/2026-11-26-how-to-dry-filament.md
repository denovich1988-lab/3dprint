---
title: How to dry filament – methods, temperatures and times for PLA, PETG and TPU
seoTitle: How to Dry Filament – Temperatures and Times by Material
description: How to dry filament in a dryer, AMS, oven or on the heated bed, with drying temperatures and times for PLA, PETG, TPU, ASA, PC and nylon from maker guides.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/30bf0bd9-92d3-478a-a7f9-2e3efda80436/output.png
imageAlt: "Illustration of a filament spool drying on a heated bed under a clear box inside an enclosed printer, with a hygrometer and desiccant sachet"
category: Filament and materials
summary:
  - To dry filament, heat the spool below the plastic's softening point for several hours with airflow – about 45–60 °C for PLA and 55–70 °C for PETG in maker guides.
  - A filament dryer or forced-air oven gives the steadiest heat; Bambu Lab advises against microwaves and kitchen ovens, while Prusa says a home oven needs an external thermometer.
  - Bambu Lab's wiki says freshly dried filament in room air at about 55 % humidity can start absorbing water again within roughly 2–12 hours, so store it sealed.
faq:
  - q: How do you dry filament without a dryer?
    a: Bambu Lab documents drying on the heated bed of an enclosed printer, with the spool under its cardboard package box or a plastic storage box, doors closed and the spool turned every few hours. A forced-air oven or a food dehydrator that fits a spool also works if you check the temperature with a separate thermometer.
  - q: Does PETG need to be dried?
    a: Bambu Lab recommends drying PETG before use. Heavy stringing, popping or rough walls on a spool that used to print well are the usual signs that it needs it.
  - q: What temperature do you dry PLA at?
    a: Prusa dries its PLA at 45 °C for 6 hours, and Bambu Lab gives 50–60 °C for 8 hours in a dryer or oven. Stay at or below the spool label's value, because PLA softens not far above that.
  - q: How long does it take to dry filament?
    a: Usually 4–8 hours in a dryer or oven, depending on material and maker; heavily soaked nylon or PVA can need up to 12. Bambu Lab's heated-bed method takes about 12 hours.
sources:
  - name: Bambu Lab Wiki – Filament drying recommendations
    url: https://wiki.bambulab.com/en/filament-acc/filament/dry-filament
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Prusa Knowledge Base – Drying filament
    url: https://help.prusa3d.com/article/drying-filament_332086
  - name: Polymaker Wiki – Airflow is more important than heat when drying
    url: https://wiki.polymaker.com/the-basics/fun-3d-printing-facts/airflow-is-more-important-than-heat-when-drying
  - name: Bambu Lab Wiki – Printing PETG HF when not fully dried
    url: https://wiki.bambulab.com/en/filament-acc/filament/petg-hf-unfinished-drying
  - name: Polymaker – PETG filament collection (PLA and PETG glass transition)
    url: https://shop.polymaker.com/collections/petg-filament
tools: [stl-viewer, 3d-viewer]
---
**To dry filament, heat the spool to a material-specific temperature below its softening point – typically 45–60 °C for PLA, 55–70 °C for PETG and 60–75 °C for TPU – for 4–8 hours with air moving through it, then store it sealed with desiccant.** A filament dryer, a printer's drying unit, a forced-air oven or even an enclosed printer's heated bed can do the job. This guide compares those methods, gives drying temperatures and times per material from the makers' own guides, and covers PLA, PETG and TPU in detail. Facts come from the Bambu Lab wiki, the Prusa knowledge base and Polymaker, checked November 2026. When your spool label gives a value, use that.

## How to dry filament: methods at a glance

| Method | Temperature control | Good for | Main caveat |
|---|---|---|---|
| Filament dryer | Good | Most users, all common filaments | Check its maximum temperature covers your material |
| Printer drying unit (AMS 2 Pro, AMS HT, CFS 2) | Good, automatic with tagged spools | Drying while the spool stays loaded | Temperature limits; extra power cable on some printers |
| Forced-air (blast) oven | Very good | Engineering filaments, several spools | Bambu Lab's recommended method; costs more |
| Kitchen oven | Poor | Occasional use with a thermometer | Hot spots; Bambu Lab advises against it |
| Heated bed under a box | Fair | No dryer, enclosed printer | About 12 hours; printer busy |
| Food dehydrator | Fair to good | PLA, PETG, TPU | Often needs modifying to fit a spool; low top temperature |
| Microwave | None | Nothing | Bambu Lab says do not use it |

## Drying temperature and time by filament

The two makers below publish different figures for different products. Prusa's numbers are for its Prusament filaments; Bambu Lab's dryer/oven numbers are for a forced-air oven, and its heated-bed numbers are the **bed** setting on X1, X1 Carbon and P1S printers with the spool covered, not the filament temperature.

| Filament | Prusa (Prusament) | Bambu Lab – dryer/oven | Bambu Lab – heated bed |
|---|---|---|---|
| PLA | 45 °C, 6 h | 50–60 °C, 8 h | 65–75 °C, 12 h |
| PETG | 55 °C, 6 h | 60–70 °C, 8 h | 75–85 °C, 12 h |
| TPU | 60 °C, 4–6 h | 65–75 °C, 8 h | 80–90 °C, 12 h |
| ABS | – | 75–85 °C, 8 h | 90–100 °C, 12 h |
| ASA | 80 °C, 4 h | 75–85 °C, 8 h | 90–100 °C, 12 h |
| PC | 85 °C, 5 h (PC Blend) | 75–85 °C, 8 h | 90–100 °C, 12 h |
| Nylon (PA, PA-CF) | 90 °C, 6 h (PA11 CF) | 75–85 °C, 8–12 h | 90–100 °C, 12 h |
| PVA / BVOH | – | 75–85 °C, 8–12 h | 90–100 °C, 12 h |

Bambu Lab marks drying as "recommended" for PLA, PETG, ABS and ASA and "required" for TPU, PC, PVA and nylon. Prusa notes that nylon, PVA and TPU need drying more often than PLA. Both warn against going hotter than recommended: the filament softens and sticks together on the spool.

**Tip:** the spool limits you too. Bambu Lab notes that its reusable spool's heat resistance caps the drying temperature, and Prusa lists different limits for its older and newer spool types. Check the spool, not only the filament.

## Method 1: a filament dryer

A filament dryer is the simplest way: set the temperature and timer, and most models let you print straight from the box. Polymaker points out that airflow matters more than heat – moisture has to be carried away once it leaves the plastic – so a dryer with a fan and vents can work at a gentler temperature. Our [filament dryer guide](/blog/filament-dryer/) covers what to look for in one and how to use it step by step.

## Method 2: drying in an AMS 2 Pro, AMS HT or CFS 2

Some multi-material units now dry filament in place:

- **Bambu Lab AMS 2 Pro** – four slots, drying at up to 65 °C, with settings read from the RFID tag on Bambu spools. On X1 and P1 printers drying needs Bambu Lab's power adapter. See our [AMS 2 Pro page](/printers/bambu-lab-ams-2-pro/).
- **Bambu Lab AMS HT** – a single-spool unit that dries at up to 85 °C, enough for many engineering filaments; it needs its own power cable to dry. See the [AMS HT page](/printers/bambu-lab-ams-ht/).
- **Creality CFS 2** – adds active drying at up to 85 °C; the original CFS only keeps spools sealed with desiccant.

The original AMS and the open AMS lite do not heat. Bambu Lab says to keep desiccant in the AMS and replace it when it clumps or turns to paste.

## Method 3: how to dry filament in an oven

Bambu Lab recommends a **forced-air (blast) drying oven** as the best option. Keep the spool away from the heating elements, and make sure the oven is big enough: Bambu Lab says one reusable spool needs at least 25 × 25 × 9 cm of inner space.

A **kitchen oven** is a different story. Bambu Lab advises against it, because kitchen ovens have large temperature differences and hot spots near the elements that can deform spools and filament. Prusa lists a conventional oven as an option but warns that home ovens are imprecise, often cannot go low enough for PLA, and need an external thermometer. If you try it:

1. Put a separate oven thermometer next to the spool and preheat until the reading is stable.
2. Use the lowest setting that matches the table, with the fan (convection) on if you have one.
3. Place the spool in the middle, away from top and bottom elements.
4. Check the temperature during the first hour; take the spool out if it climbs above the target.
5. Never leave it unattended.

Never use a **microwave**. Bambu Lab says it heats unevenly and has no temperature control.

## How to dry filament without a dryer

**Heated bed.** Bambu Lab documents this for the X1, X1 Carbon and P1S:

1. Put the spool flat on the bed and cover it with the filament's cardboard box or a plastic storage box.
2. Close the front door and top glass to keep the heat in.
3. Set the bed to the value in the table above for about 12 hours.
4. Turn the spool over every few hours (Bambu Lab says every 6 hours for PLA) so both sides dry.

On an open-frame printer the same idea works less well, because heat escapes; a box over the spool is essential.

**Food dehydrator.** Prusa mentions modified food dehydrators. Many only reach temperatures suitable for PLA, PETG or TPU, so check the maximum before buying one for nylon or PC.

## How to dry PLA filament

**Does PLA need to be dried?** Not always. A freshly opened, sealed spool usually prints fine, and Bambu Lab lists drying PLA as recommended rather than required. Dry it if it pops, strings more than usual or snaps when bent.

**What temperature and how long?** Prusa uses 45 °C for 6 hours; Bambu Lab gives 50–60 °C for 8 hours in a dryer or oven. Stay at the low end: Polymaker gives PLA's glass transition as about 60 °C, and too much heat fuses the coils. This is why a kitchen oven is risky for PLA.

## How to dry PETG filament

**Does PETG need to be dried?** Bambu Lab recommends it before use, and PETG that has been open for some time is a common cause of heavy stringing. Bambu Lab's PETG HF guide explains that absorbed water turns to steam in the nozzle and causes stringing, oozing, holes and weaker parts.

**How long to dry PETG?** Prusa dries its PETG at 55 °C for 6 hours; Bambu Lab gives 60–70 °C for 8 hours (65 °C for 8 hours for PETG HF). More about the material in our [PETG filament guide](/blog/petg-filament/).

## How to dry TPU filament

TPU is one of the materials both makers flag. Bambu Lab lists drying as required before use and desiccant as required during printing; its table gives 65–75 °C for 8 hours, while Prusa uses 60 °C for 4–6 hours. Because TPU picks up water quickly, printing straight from a dryer or a sealed box helps on long prints. Our [TPU filament guide](/blog/tpu-filament/) covers printing settings.

## How to keep filament dry

Drying is wasted if the spool goes back on an open shelf. Bambu Lab's wiki gives useful numbers:

- Indoor air is typically 45–65 % relative humidity; most filaments need **below 20 %** to stay dry long term.
- At about 55 % humidity, freshly dried filament can start absorbing moisture and losing print quality within roughly **2–12 hours**.
- At 20 % humidity, filament may stay dry for about **2–7 days**.

So store spools in sealed boxes or vacuum bags with fresh desiccant, put a hygrometer in the box, and replace or regenerate desiccant when it changes colour. Two more maker notes: Bambu Lab warns that repeated drying and cooling makes **PC brittle**, so seal it after every dry; and nylon left in open air for months can absorb so much water that a normal oven cycle may not fully dry it.

## Step-by-step: drying a wet spool

1. Confirm the signs: popping, steam, heavy stringing, rough walls or brittle filament.
2. Find the drying temperature and time on the spool label or the maker's guide.
3. Check the spool's temperature limit; put refills on a heat-safe spool.
4. Choose a method: dryer, drying unit, forced-air oven, or heated bed under a box.
5. Dry for the full time, turning the spool if it sits on a heated bed.
6. Print from the dryer, or seal the spool with desiccant straight away.
7. Note the drying date on the spool.

## Verdict

The best way to dry filament is a dedicated dryer or a printer drying unit, at the temperature on the spool label. Without one, the heated-bed method is the safest workaround on an enclosed printer, and an oven only works if you check its real temperature. Keep PLA cool, give PETG and TPU a little more heat, and store everything sealed afterwards.
