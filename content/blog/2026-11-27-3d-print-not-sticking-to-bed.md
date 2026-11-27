---
title: 3D print not sticking to bed – causes and fixes in the right order
seoTitle: 3D Print Not Sticking to Bed? Causes and Fixes in Order
description: 3D print not sticking to bed? Find the cause from the first layer, then fix it in order – cleaning, Z offset, leveling, bed temperature, cooling and glue.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/8fa66d4a-909e-413c-aaa8-99f4905a044a/output.png
imageAlt: "Illustration of an orange first layer curling up at one corner on a gold textured build plate, with dish soap, a microfiber cloth, a glue stick and levelling paper nearby"
category: Troubleshooting
summary:
  - Most bed adhesion problems come from a dirty build plate, a nozzle set too high, or a slicer profile that does not match the plate or material.
  - Prusa recommends 90%+ isopropyl alcohol as the main degreaser and warm water with dish soap when adhesion keeps dropping, while Bambu Lab recommends dish soap rather than alcohol for its textured PEI plate.
  - PETG can bond too strongly to smooth PEI; Prusa and Bambu Lab both advise a glue stick on smooth PEI as a separating layer to protect the sheet.
faq:
  - q: Why is my 3D print not sticking to the bed even after auto bed leveling?
    a: Auto leveling maps the bed shape, but it does not clean the plate or set the right first-layer squish. Check for fingerprints or grease first, then the Z offset or Live Z, then that the plate type and bed temperature in the slicer match the plate you are actually using.
  - q: How do I get PLA to stick to the bed better?
    a: Wash or degrease the plate, lower the nozzle slightly so the first layer is pressed into the surface, and use the bed temperature for your plate – Prusa uses 60 °C for PLA, and Bambu Lab suggests about 55–65 °C on its textured PEI plate. Slow the first layer and keep the part fan off for it.
  - q: Does increasing bed temperature help adhesion?
    a: Often a little. Prusa suggests raising the bed by 5–10 °C for materials that do not adhere well. Going too high can cause elephant foot and, with PLA, softening near the bed, so change it in small steps.
  - q: Should I use glue stick for PETG?
    a: On smooth PEI, yes – Prusa and Bambu Lab both say to apply glue stick before printing PETG so the part does not bond too strongly and damage the sheet. On textured PEI it is usually not needed.
sources:
  - name: Prusa Knowledge Base – First layer issues
    url: https://help.prusa3d.com/en/article/first-layer-issues_1804
  - name: Prusa Knowledge Base – PEI print surface preparation
    url: https://help.prusa3d.com/article/6Gtws6Yqjg-pei-print-surface-preparation
  - name: Prusa Knowledge Base – PLA material guide
    url: https://help.prusa3d.com/en/article/pla_2062
  - name: Prusa Knowledge Base – PETG material guide
    url: https://help.prusa3d.com/en/article/petg_2059
  - name: Prusa Knowledge Base – ABS material guide
    url: https://help.prusa3d.com/en/article/abs_2058
  - name: Bambu Lab Wiki – First layer not sticking
    url: https://wiki.bambulab.com/en/knowledge-sharing/first-layer-not-sticking
  - name: Bambu Lab Wiki – Textured PEI plate not working as expected
    url: https://wiki.bambulab.com/en/general/textured-PEI-plate-not-working-as-expected
  - name: Bambu Lab Wiki – PEI plate cleaning guide
    url: https://wiki.bambulab.com/en/filament-acc/acc/pei-plate-clean-guide
  - name: Bambu Lab Wiki – Build plates
    url: https://wiki.bambulab.com/en/filament-acc/acc/plates
  - name: Bambu Lab Wiki – Identify and fix first layer issues with a test print
    url: https://wiki.bambulab.com/en/knowledge-sharing/identify-and-fix-first-layer-issues-with-a-test-print
  - name: Creality – 3D printer bed adhesion guide
    url: https://www.creality.com/blog/3d-printer-bed-adhesion
  - name: Simplify3D – Not sticking to the bed
    url: https://www.simplify3d.com/resources/print-quality-troubleshooting/not-sticking-to-the-bed/
  - name: QIDI Tech – 3D print not sticking to bed guide
    url: https://qidi3d.com/blogs/news/3d-print-not-sticking-to-bed-guide
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**A 3D print not sticking to the bed is almost always caused by one of five things: a greasy build plate, a nozzle that sits too far from the bed, an uneven or out-of-date bed level, the wrong bed temperature or plate setting for the material, or a first layer that is printed too fast or cooled too hard.** Work through them in that order – the cheapest, most common fixes first – and most adhesion problems are solved before you need glue, a brim or a raft. This guide shows how to read the symptom, the likely causes, the fixes in order, and how to stop it happening again. The cleaning methods, temperatures and plate advice come from the Prusa Knowledge Base, the Bambu Lab Wiki and Creality's own adhesion guide, with first-layer slicer settings from Simplify3D's troubleshooting guide, all checked November 2026. We have not run our own tests; your printer maker's guidance comes first.

## 3D printer bed adhesion at a glance

| Symptom | Most likely cause | Fix first |
|---|---|---|
| Filament comes out as round strands and drags around | Nozzle too high or dirty plate | Clean plate, lower Z offset / Live Z |
| Thin, see-through first layer, nozzle scrapes | Nozzle too low | Raise Z offset slightly |
| Sticks in one area, fails in another | Uneven bed or old leveling data | Re-run bed leveling, check plate is seated |
| Print sticks, then corners lift after a few layers | Warping: cooling, drafts, bed too cool | Fan off for first layers, brim, enclosure |
| Was fine for months, now nothing sticks | Oils and residue on the plate | Wash with warm water and dish soap |
| Sticks only on one plate type | Slicer plate setting does not match | Select the plate you are actually using |
| PETG will not come off, sheet damaged | Adhesion too strong on smooth PEI | Glue stick as separator, textured plate |

## Why is my 3D print not sticking to the bed? Read the first layer

Before changing settings, look at the first layer – it tells you which fix to try.

- **Round, separate lines that you can lift with a fingernail.** The nozzle is too far from the bed or the plate is greasy. The plastic is laid on top of the surface instead of being pressed into it.
- **Lines that are flat but have gaps between them.** Slightly too high, or under-extrusion.
- **Very thin, transparent or ridged lines, or little or no plastic coming out.** The nozzle is too close. Prusa notes that if almost nothing comes out for the first layer or two, the nozzle is likely too low.
- **Good in the middle, poor in one corner.** Leveling or a plate that is not seated flat.
- **First layer is fine, but the corners curl up later.** That is warping, not a first-layer problem. Cooling, drafts and bed temperature are the suspects.

**Tip:** use a single-layer test print – the Bambu Lab Wiki and Prusa's first-layer calibration both offer one – instead of risking a long print.

## Fix 1: clean the build plate (dish soap or IPA)

Grease from fingers is the most common cause of 3D printer filament not sticking to the bed, especially when a plate that used to work suddenly stops. Both Bambu Lab and Prusa put cleaning near the top of their troubleshooting lists, but they recommend slightly different methods depending on the surface:

| Plate | Recommended cleaning | Avoid |
|---|---|---|
| Prusa smooth PEI | 90%+ IPA; warm (not hot) water and a few drops of dish soap when adhesion drops; acetone about once a month | Acetone too often (makes PEI brittle); acetone before PETG |
| Prusa textured or satin powder-coated | 90%+ IPA | Acetone of any kind |
| Bambu Lab textured PEI | Warm water and dish detergent, scrubbed into the texture with a sponge or brush, dried with a paper towel | Alcohol, which Bambu Lab says can spread oils around the textured surface |

Prusa says dish soap removes oils and sugars that IPA may leave, plus old glue stick. Dry the plate fully.

**Why it matters:** after cleaning, handle the plate only by its edges. Bambu Lab specifically warns that skin oils show up as poor adhesion in the first layer.

## Fix 2: set the Z offset or Live Z (nozzle height)

Once the plate is clean, the first-layer height is the next thing to check. The nozzle should press the first layer slightly into the surface so the lines are flat and touch each other. Creality's adhesion guide sums it up: too high and the filament will not stick, too low and it gets squashed.

- **Prusa i3 printers** (MK2/MK3 series and MK3.5): use First layer calibration under LCD Menu → Calibration, and Live Adjust Z while printing.
- **Printers with a load cell or automatic Z** (newer Prusa, Bambu Lab, many Creality K-series): the printer probes the nozzle height itself, but Prusa notes you should check that the nozzle sits correctly and that nothing pulls on the filament during probing.
- **Manual Z offset** (many Ender-style printers): change it in small steps; Simplify3D's guide uses -0.05 mm as an example step.

**Textured plates need a different offset.** Bambu Lab notes its textured PEI plate uses a different Z offset, and Prusa says a powder-coated sheet needs the nozzle a little lower for PLA so the plastic fills the texture – but not so low that it damages the sheet.

## Fix 3: level the bed and check the plate

If one area sticks and another does not, the bed level or the plate is the problem.

1. **Clean the nozzle tip first.** Bambu Lab recommends removing debris from the nozzle before running bed leveling, because blobs on the tip affect probing. Our guide on [how to clean a 3D printer nozzle](/blog/how-to-clean-a-3d-printer-nozzle/) covers this.
2. **Re-run bed leveling.** Bambu Lab says older leveling data can become inaccurate and recommends keeping the bed leveling option turned on when you start a print.
3. **Check the sheet is seated.** Prusa lists a bent or damaged sheet, or a bit of leftover filament under it, as causes of an uneven first layer.
4. **Fix a dip permanently.** Prusa offers Bed Level Correction for a permanent fix on its printers.

## Fix 4: use the right bed temperature and plate setting

Adhesion depends on the material, the bed temperature and the plate. Starting values from the makers:

| Material | Bed temperature (maker guidance) | Plate notes |
|---|---|---|
| PLA | 60 °C (Prusa); about 55–65 °C on Bambu Lab textured PEI; about 35 °C on Bambu Lab Cool Plate; 50–70 °C (Creality) | Smooth or satin PEI works well; Bambu Lab Cool Plate needs glue |
| PETG | 85 °C first layer, 90 °C after (Prusa); 70–90 °C (Creality) | Textured or satin sheet; glue stick on smooth PEI |
| ABS | 100 °C recommended, 80–110 °C range (Prusa) | PEI with glue stick; enclosure |

**Match the plate in the slicer.** Bambu Lab's wiki says slicing for one plate and printing on another – for example Cool Plate versus Textured PEI – often causes the model not to stick, because the slicer changes the bed temperature for each plate.

**If it still does not grip,** Prusa suggests raising the bed by 5–10 °C for materials that do not adhere well. Bambu Lab warns that a bed that is too hot can cause elephant foot and clogging with PLA and PETG, so do not keep going up.

For full material settings, see our [PLA filament guide](/blog/pla-filament/) and [PETG filament guide](/blog/petg-filament/).

## Fix 5: slow down the first layer and cut cooling

A slow first layer gives the hot plastic more time to bond to the plate. Prusa recommends lowering the speed to about 75% for the first three layers if prints come loose, and Simplify3D's example sets the first layer to 50% of the normal print speed.

Bambu Lab adds a slicer trick for stubborn cases on its textured plate: a first layer with a 0.5 mm line width and a 0.25 mm layer height, which lays down a wider, thicker base. Creality similarly mentions a slightly thicker first layer or a little more first-layer flow.

**Tip:** maker profiles already slow the first layer, so check a custom profile has not overridden it.

Part cooling helps detail on upper layers, but on the first layers it shrinks the plastic before it has bonded.

- **First layers:** Simplify3D's example uses 0% fan on layer 1, ramping to 100% by layer 5. Prusa's PETG guide suggests the fan off for the first few layers, then around half power.
- **ABS:** Simplify3D suggests leaving the fan off; Prusa recommends an enclosure, or PrusaSlicer's draft shield if you have none, and warns against drafts around the print.
- **Room drafts:** Creality points to open windows and fans as a common reason corners lift.

**Tip:** if corners lift only on large, flat parts, an enclosure often solves what slicer settings cannot. Our [3D printer enclosure guide](/blog/3d-printer-enclosure/) explains which materials need one.

## Fix 6: add a brim, raft or glue stick

If the first layer is good but a part has a small footprint or sharp corners, give it more contact area. Prusa suggests enabling a brim in PrusaSlicer before reaching for other adhesion aids, and Bambu Lab recommends a brim for small objects that tend to detach.

A **brim** adds loops around the base that trim off easily; a **raft** prints a full base under the part, which holds better but uses more filament and leaves a rougher bottom. Simplify3D treats both as a last step after leveling, height, speed and temperature are right.

If the material and plate need it, a thin layer of glue stick is the standard adhesion aid – never superglue, which Prusa warns against.

- **Prusa:** a basic PVA glue stick is enough. It is generally not needed for PLA on PEI, but advisable for PETG, nylon, PC, ABS, ASA and flexible filaments. Remove it with dish soap and water.
- **Bambu Lab:** recommends its own glue stick or liquid glue and discourages other glues on its plates. Its Cool Plate needs glue even for PLA, and its Engineering Plate needs adhesive applied carefully.
- **Creality:** lists glue stick, hairspray or painter's tape as options, and notes PEI or textured plates often reduce the need for them.

Glue fixes a material and plate combination, not a dirty plate or a wrong Z offset.

## Plate types: textured PEI vs smooth PEI, and PETG

The plate itself makes a big difference to 3D print bed adhesion:

| Plate | How it behaves | Best for |
|---|---|---|
| Textured PEI (powder-coated) | Bambu Lab says it often gives good adhesion without adhesives; textured bottom surface | PETG, general use, parts that release when cool |
| Smooth PEI | Flat, glossy bottom; Prusa says it gives PLA the best adhesion, especially for small contact areas | PLA; other materials only with glue |
| Satin (Prusa) | Between smooth and textured | PLA, PETG |
| PC "Cool Plate" (Bambu Lab) | Designed for PLA at a low bed temperature; needs glue | PLA only |
| Engineering plate (Bambu Lab) | Coated spring steel; strict glue use | Engineering materials |

Prusa also notes that PEI can lose adhesion after a couple of hundred hours of use. It suggests rubbing the surface with the hard side of a dry kitchen sponge or light 400–600 grit sandpaper, then wiping with IPA; Bambu Lab mentions fine sandpaper for its textured plate, followed by removing all dust.

### PETG bed adhesion: when it sticks too well

PETG is the opposite case. On smooth PEI it can bond so strongly that it tears the surface when you remove the part.

- **Prusa** recommends a textured or satin sheet for PETG and says printing it on smooth PEI might damage the sheet. If you must, apply glue stick first as a separator. It also warns that IPA cleaning before PETG on smooth PEI makes adhesion very strong, and not to use acetone before PETG.
- **Bambu Lab** says every filament except PLA needs glue on its smooth PEI plate to prevent the sheet tearing, and warns that a print stuck too tightly can make a sheet bubble or crack.

**Tip:** let PETG parts cool fully before removal, flex spring-steel sheets gently, and use a spatula on large parts. Wet PETG also strings and prints poorly – see [how to dry filament](/blog/how-to-dry-filament/) if your spool has been open for a while. QIDI Tech lists damp filament among the causes of poor first-layer adhesion too.

## Checklist: fix a 3D print not sticking to the build plate

1. **Look at the failed first layer** and match it to the symptom table above.
2. **Wash the plate** with warm water and dish soap (or wipe with 90%+ IPA on Prusa sheets), dry it, and touch only the edges.
3. **Check the slicer:** correct printer, plate type and material profile selected.
4. **Clean the nozzle tip** and re-run bed leveling.
5. **Adjust Z offset / Live Z** in small steps until first-layer lines are flat and touching.
6. **Set the bed temperature** to the maker's value for that material and plate; add 5–10 °C only if needed.
7. **Slow the first layer** (about 50–75% of normal speed) and turn the part fan off for it.
8. **Block drafts** or use an enclosure for ABS, ASA and large parts.
9. **Add a brim** for small or sharp-cornered parts; a raft for difficult ones.
10. **Use glue stick** for PETG on smooth PEI and for ABS, nylon and PC as your plate maker advises.
11. **Check the model's base.** A part that touches the bed only on a point or edge will not hold. Open it in our [STL viewer](/stl-viewer/) to see how much of it sits flat before slicing.

## How to prevent bed adhesion issues

- **Keep the plate clean** and wash it as soon as adhesion starts to drop, not after a failure.
- **Use maker profiles** and change one setting at a time.
- **Re-level after moves, nozzle swaps or crashes.**
- **Store filament dry** and refresh worn plates.
- **Put the largest flat face on the bed** whenever the model allows.

## Verdict

When a 3D print is not sticking to the bed, start with the plate, not the slicer: wash off the grease, then set the nozzle height so the first layer is pressed in, then re-level. Only after that adjust bed temperature, first-layer speed and cooling, and finally add a brim, raft or glue. For PETG on smooth PEI, think the other way round – use glue stick as a release layer or switch to a textured plate so the part comes off without damaging the sheet.
