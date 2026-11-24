---
title: Ender 3 S1 Pro manual – where to find it and what it covers
seoTitle: Ender 3 S1 Pro Manual – Where to Find It and Quick Start
description: Where to find the official Creality Ender 3 S1 Pro manual, what its sections cover, assembly, CR Touch levelling, Z offset, first print, maintenance and firmware.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/01eab676-e488-4bbc-95ff-b31083e03dd4/output.png
imageAlt: "Illustration of an open instruction booklet with line diagrams in front of an open-frame printer with a gold spring-steel plate, a probe touching the bed, an SD card and a hex key"
category: Manuals
brand: Creality
summary:
  - Creality publishes the Ender 3 S1 Pro user manual on the Creality Wiki under Ender Series → Ender-3 S1 Pro, and in its Download Center.
  - The manual covers assembly, CR Touch auto levelling, assisted levelling, loading filament, the first print and the specifications.
  - Firmware for the mainboard and screen is installed from a memory card; check your mainboard chip before downloading.
faq:
  - q: Where can I find the Creality Ender 3 S1 Pro manual?
    a: On the Creality Wiki under Ender Series → Ender-3 S1 Pro → User Manual, and in the Ender-3 S1 Pro section of the Creality Download Center, which also has firmware and Creality Print.
  - q: How do you level the Ender 3 S1 Pro?
    a: Run auto levelling from Settings → Leveling, where the CR Touch probes the bed. Then set the Z offset until the nozzle-to-bed gap is about the thickness of a sheet of paper. If auto levelling fails, use assisted levelling and the knobs under the bed.
  - q: How long does the Ender 3 S1 Pro take to assemble?
    a: Creality says the printer arrives 96% pre-assembled and goes together in six steps – nozzle kit, gantry, screen, filament rack and wiring, then a voltage check.
sources:
  - name: Creality Wiki – Ender-3 S1 Pro user manual
    url: https://wiki.creality.com/en/ender-series/ender-3-s1-pro/user-manual
  - name: Creality – Ender-3 S1 Pro download center
    url: https://www.creality.com/download/creality-ender-3-s1-pro-fdm-3d-printer
  - name: Creality – Ender-3 S1 Pro user manual V1.0 (copy)
    url: https://www.farnell.com/datasheets/3970294.pdf
  - name: Creality – Ender-3 S1 Pro user manual, later revision (copy)
    url: https://manuals.plus/m/4431bd0c06b9be0e773b90a3f238fb08f4cadeb3c4140a7ac2eeb264dee16979
  - name: Creality blog – Ender-3 S1 Pro high-temperature printing
    url: https://www.creality.com/blog/ender-3-s1-pro-excellent-in-high-temp-printing
  - name: Creality blog – Differences of Ender-3 S1, S1 Pro and S1 Plus
    url: https://www.creality.com/blog/the-differences-of-ender-3-s1-ender-3-s1-pro-ender-3-s1-plus
  - name: Creality Store blog – Ender-3 S1 Pro firmware
    url: https://store.creality.com/blogs/all/ender-3-s1-pro-firmware
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The official Creality Ender 3 S1 Pro manual is on the Creality Wiki under Ender Series → Ender-3 S1 Pro → User Manual, and in the Ender-3 S1 Pro section of the Creality Download Center.** The same Download Center page has the firmware and the Creality Print slicer. This page summarises the Ender 3 S1 Pro manual in our own words; it does not replace it.

## What the official Ender 3 S1 Pro manual covers

The user manual is organised in these parts:

1. **Instructions for use** – safety notes.
2. **Main parts and accessory kit** – what is in the box.
3. **Printer ports** – the mainboard, nozzle and Z-axis connectors.
4. **Installing the printer** – nozzle module, gantry, screen, filament rack and wiring.
5. **Auto levelling and assisted levelling.**
6. **Loading filament, first printing and start printing.**
7. **About the printer and device specifications.**

Later revisions add a light bar step, pulley tightness adjustment and replacing filament.

## Key specs from the manual

| Item | Value |
|---|---|
| Build volume | 220 × 220 × 270 mm |
| Nozzle | 0.4 mm, up to 300 °C |
| Extruder | Sprite dual-gear direct drive |
| Build plate | PEI spring steel |
| Levelling | CR Touch auto levelling |
| Speed | Up to 150 mm/s (50 mm/s recommended) |
| Filaments | PLA, TPU, PETG, ABS |
| Screen | 4.3-inch colour touchscreen |
| Power | 100–120 V / 200–240 V, 350 W |

## Quick start: unboxing and assembly

Creality says the S1 Pro arrives 96% pre-assembled. The manual's assembly order is:

1. Fix the nozzle kit to the extruder.
2. Fit the gantry to the base with four screws, turn the base round and tighten both sides evenly.
3. Mount the screen bracket and screen.
4. Fit the filament rack and the filament tube fitting.
5. Connect the cables to the nozzle, X and Z motors, X limit switch, filament sensor and light.
6. **Set the voltage switch** to match your mains (115 V or 230 V) before switching on.

## First calibration: levelling and Z offset

- **Auto levelling:** go to Settings → Leveling. The CR Touch probes the bed. Creality advertises 16 points; the manual does not give a number.
- **Z offset:** after levelling, adjust the Z-axis compensation until a sheet of paper slides between nozzle and bed with light friction (about 0.08–0.1 mm).
- **Assisted levelling:** if the CR Touch light turns red or levelling fails, move to each point and set the gap with the knobs under the bed. The manual notes CR Touch levelling can fail if the bed is tilted by more than about 2 mm.

**Tip:** set the Z offset in small steps while watching the first layer; a squashed, translucent first line means the nozzle is too low.

## First print

1. Cut the filament end at an angle, feed it through the filament sensor and push it into the extruder while holding the lever.
2. Heat the nozzle until filament flows.
3. Install Creality Print, choose the Ender-3 S1 Pro profile, slice and save the G-code to the memory card.
4. On the printer, choose Print and select the file. Use only Latin letters and digits in file names.

To check a sliced file before printing, open it in our [G-code to STL tool](/gcode-to-stl/).

## Maintenance the manual recommends

- With the power off, wipe the frame and clean dust and stuck plastic off the guide rails.
- Clean the nozzle while hot, using tools – never fingers.
- Check that the pulleys turn freely; adjust the eccentric nuts if a wheel is loose or sticks.
- To change filament, heat the nozzle to at least 185 °C and pull the old strand out quickly.

## Common problems and fixes

- **Auto levelling fails:** check that the bed is not badly tilted and that the CR Touch cable is connected, then use assisted levelling.
- **First layer not sticking:** clean the PEI plate and lower the Z offset slightly.
- **Wobble or uneven layers:** check pulley tightness on the X and Z axes.
- **File not shown on the screen:** rename it with only Latin letters and digits.

## Firmware and software

Creality's firmware guide says to check the mainboard chip (STM32F401 or F103) under the bottom panel first, then download the matching firmware from the Download Center. The screen firmware goes on a FAT32 microSD card in the slot on the back of the display; the mainboard firmware goes on an SD card of 8 GB or less, and the printer flashes it automatically on power-up. Check the version under About afterwards. Slice with **Creality Print**; the manual also lists Cura as compatible.

For an overview of the printer itself, see our [Creality Ender 3 S1 page](/printers/creality-ender-3-s1/) and the [Creality Ender lineup](/printers/creality-ender-3d-printers/), or compare models in the [printer comparison tool](/printers/compare/).
