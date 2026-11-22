---
title: TPU filament – what it is and how to print it
seoTitle: TPU Filament – What Is TPU Filament and How to Print It
description: What is TPU filament? A flexible, tough 3D printing plastic for phone cases, gaskets and tyres. Learn shore hardness, print tips and when to choose it.
date: 2026-11-22
category: Filament and materials
summary:
  - TPU is a flexible, rubber-like thermoplastic that belongs to the TPE family of 3D printing filaments.
  - Its softness is measured on the Shore A scale; harder grades such as 95A are the easiest to print.
  - Print TPU slowly, keep it dry and avoid long, loose filament paths, which let the soft strand buckle.
faq:
  - q: What is TPU filament?
    a: TPU (thermoplastic polyurethane) filament is a flexible 3D printing material. Parts printed in TPU bend, stretch and spring back, and they resist wear and many chemicals.
  - q: Is TPU hard to print?
    a: Harder TPU grades such as 95A print well on most modern printers if you slow down. Very soft grades are much harder, and Prusa recommends flexible filaments mainly for experienced users.
  - q: Can TPU go through an AMS or MMU?
    a: Usually not. Soft filament tends to buckle in long feeding systems. Bambu Lab notes that its AMS does not support filament that is too soft, and Prusa users typically load TPU directly into the extruder.
  - q: What is TPU used for?
    a: Phone and camera cases, gaskets, seals, bumpers, RC tyres, shoe insoles, watch straps and vibration-damping feet.
sources:
  - name: Prusa Knowledge Base – Flexible materials
    url: https://help.prusa3d.com/article/flexible-materials_2057
  - name: Prusa blog – How to print with flexible filament
    url: https://blog.prusa3d.com/how-to-print-with-flexible-filament_29672/
  - name: Bambu Lab Wiki – Compatibility and parameter settings of filaments
    url: https://wiki.bambulab.com/en/x1/manual/compatibility-and-parameter-settings-of-filaments
tools: [stl-viewer, stl-to-3mf]
---
**TPU filament is a flexible, rubber-like 3D printing plastic that bends and springs back without breaking.** TPU stands for thermoplastic polyurethane. It belongs to the wider TPE (thermoplastic elastomer) family, and you will see it sold as TPU, TPE, TPEE or simply "flex".

This guide covers what TPU is, how hardness ratings work, how to print it reliably and what it is good for. The print advice follows Prusa Research and Bambu Lab documentation.

## TPU at a glance

| Property | What it means for you |
|---|---|
| Flexibility | Parts bend, stretch and return to shape |
| Toughness | Very hard to snap; resists scratching and wear |
| Layer adhesion | Layers bond strongly, so parts rarely split |
| Warping | Little to no shrinking or warping, according to Prusa |
| Moisture | Absorbs water; print it dry |
| Difficulty | Moderate for harder grades, high for very soft ones |

## What is TPU filament made of

TPU is a polymer with hard and soft segments. The soft parts let it stretch; the hard parts hold it together and make it tough. That mix gives a material that behaves somewhere between rubber and plastic.

Prusa describes TPU as a subtype of TPE, with the main difference being hardness.

## Shore hardness: 95A, 85A and softer

TPU is graded on the **Shore A scale**. A higher number is harder:

- **95A–98A** – firm but flexible, like a phone case. The easiest TPU to print and the best starting point.
- **85A–90A** – noticeably softer, like a shoe sole.
- **Below 85A** – very soft and stretchy, and much harder to feed through an extruder.

**Tip:** If this is your first flexible filament, buy a 95A grade. Soft grades are where most feeding problems happen.

## How to print TPU

Flexible filament is soft, so the extruder can push it sideways instead of forward. Most of the rules exist to stop that.

1. **Print slowly.** Lower speeds give the extruder time to push the soft strand without buckling. Start with your slicer's TPU profile, which is already slower than PLA.
2. **Keep the path short and enclosed.** Direct-drive extruders handle TPU better than Bowden setups. Avoid gaps where the filament can escape between gears and tubes.
3. **Skip the multi-material feeder.** Bambu Lab notes that its AMS does not support filaments that are too soft. Load TPU directly from an external spool holder.
4. **Reduce or turn off retraction.** Long, fast retractions stretch and jam soft filament.
5. **Dry the spool.** Prusa warns that flexible filaments absorb moisture and become hard to print when wet.
6. **Watch bed adhesion.** TPU can stick too well. Prusa suggests glue stick as a release layer on smooth PEI, or a textured sheet.

## What to print with TPU

- Phone, tablet and camera cases
- Gaskets, seals and washers
- Bumpers and corner protectors
- RC car tyres and robot wheels
- Watch straps and cable ties
- Anti-vibration feet for printers and appliances

Prusa lists stamps, RC tyres, shoe soles and belts as typical flexible-filament projects.

## TPU vs PLA and PETG

TPU is not a replacement for PLA or PETG. Use it when a part must flex, absorb impact or grip. For rigid parts, PLA is easier and PETG is tougher; see our [PETG vs PLA comparison](/blog/petg-vs-pla/).

## Common TPU problems and fixes

| Problem | Likely cause | Fix |
|---|---|---|
| Filament tangles in the extruder | Too fast or a loose path | Slow down; check for gaps around the gears |
| Stringing | Wet filament or high temperature | Dry the spool; lower temperature a little |
| Under-extrusion | Buckling or a soft grade | Slower speed, harder grade, direct loading |
| Part fused to the bed | Too much adhesion | Glue stick as a release layer; textured plate |

For drying, see our [filament dryer guide](/blog/filament-dryer/).

## Verdict

TPU filament is the go-to material for flexible, tough parts. Start with a 95A grade, print slowly from a dry spool and feed it directly to the extruder, and most printers will handle it well.

## Related tools

- Check your model before slicing in the [STL viewer](/stl-viewer/)
- Convert a model for your slicer with [STL to 3MF](/stl-to-3mf/)
