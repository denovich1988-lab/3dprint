---
title: Ender 3 manual – where to find it and quick start
seoTitle: Ender 3 Manual – Where to Find It and Quick Start
description: Where to find the official Creality Ender 3 manual, quick-start steps, bed levelling, recommended PLA settings, maintenance and Creality's fixes for common problems.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/fe6df356-944c-4700-8d04-ca4e1f29510f/output.png
imageAlt: "Illustration of a microSD card going into the control box of a generic open-frame 3D printer with a rotary knob"
category: Manuals
brand: Creality
summary:
  - Creality publishes the Ender 3 user manual in its official Download Center, next to firmware and Creality Print.
  - The Ender 3 has manual bed levelling with a sheet of A4 paper and prints from a microSD card.
  - Creality's guide recommends cleaning the nozzle throat every 3–6 months and cleaning the fans regularly.
faq:
  - q: Where can I find the Ender 3 manual?
    a: Creality publishes the "Ender-3 3D Printer User Manual" in its official Download Center under Support → Download Center → Ender-3 3D Printer.
  - q: How do I level the Creality Ender 3 bed?
    a: Levelling is manual. Home the printer, then at each corner turn the knob under the bed until the nozzle just drags on a sheet of A4 paper. Auto levelling needs an add-on probe such as a BLTouch.
  - q: What settings does Creality suggest for PLA on the Ender 3?
    a: Creality's Ender 3 guide suggests 0.15 mm layers, a 200–210 °C nozzle, a 45–55 °C bed, 50–60 mm/s and 6–8 mm retraction at 80 mm/s as a starting point.
sources:
  - name: Creality – Ender-3 download center (user manual, firmware, Creality Print)
    url: https://www.creality.com/download/ender-3-3d-printer
  - name: Creality – Ender-3 legacy download page
    url: https://www.creality.com/pages/download-ender-3
  - name: Creality store blog – Ender 3 3D printer guide
    url: https://store.creality.com/blogs/all/ender-3-3d-printer-guide
  - name: Creality blog – Ender-3 vs Ender-3 Pro
    url: https://www.creality.com/blog/ender-3-vs-ender-3-pro-the-difference
  - name: Creality store blog – Ender series parameter comparison
    url: https://store.creality.com/blogs/all/ender-series-3d-printers-parameter-comparison
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**Creality publishes the official Ender 3 manual in its Download Center: go to Support → Download Center → Ender-3 3D Printer and open the "User Manual" section.** The page lists the "Ender-3 3D Printer User Manual" (dated November 2022), firmware and Creality Print. This guide summarises how to get a Creality Ender 3 printing and keep it running – in our own words, not a copy of the manual.

## What the official Ender 3 download page includes

- **User Manual** – the "Ender-3 3D Printer User Manual" PDF for assembly and first use.
- **Firmware** – a firmware entry for the Ender-3 series replacement touch screen (December 2022), with release notes and older versions.
- **Software** – Creality Print, Creality's slicer.

The Ender 3 has a 220 × 220 × 250 mm build volume, a Bowden extruder, a 0.4 mm nozzle (0.2, 0.6 and 0.8 mm optional), 1.75 mm filament, a 250 °C maximum nozzle temperature and a 110 °C maximum bed temperature. It supports power-loss resume but has no filament run-out sensor. See our [Creality Ender 3 page](/printers/creality-ender-3/) for the full overview.

## Ender 3 quick start

1. **Assemble** the frame, gantry, extruder and screen following the user manual.
2. **Check the power supply:** set the switch to 115 V or 230 V to match your mains before switching on.
3. **Level the bed:** home the printer, then set the gap at each corner so the nozzle just drags on a sheet of A4 paper. Go round twice.
4. **Load filament:** heat the nozzle to about 200 °C, cut the filament end at an angle, open the extruder clamp and feed until plastic flows from the nozzle.
5. **First print:** slice a model, save the G-code to the microSD card and print it from the screen. Creality recommends microSD printing over a USB cable.

## Starting settings for PLA

Creality's Ender 3 guide gives these PLA starting values:

| Setting | Value |
|---|---|
| Layer height | 0.15 mm |
| Nozzle temperature | 200–210 °C |
| Bed temperature | 45–55 °C |
| Print speed | 50–60 mm/s |
| Retraction | 6–8 mm at 80 mm/s |

**Tip:** print a single-layer square after levelling; if the lines are round and separate, lower the nozzle slightly at that corner.

## Maintenance Creality recommends

- **Every 3–6 months:** clean the nozzle throat.
- **Regularly:** clean the fan blades and check belt tension by hand.
- **As needed:** grease the Z lead screw and tighten the eccentric nuts on the wheels if the bed or gantry wobbles.

## Common Ender 3 problems and Creality's fixes

- **Warping:** bed at 50–60 °C, re-level and apply glue.
- **Print stuck to the bed:** heat the bed to 60–70 °C and lift gently from one edge.
- **No extrusion:** check the extruder gear, untangle the filament and clear a blocked throat.
- **Nozzle leaking:** heat to about 230 °C and reseal the threads.
- **Bed or nozzle not heating:** check the thermistor first; if the mainboard port gives no 24 V, the board is at fault, otherwise replace the heater cartridge.
- **Blue screen or dead buttons:** check the screen cable and restart.
- **Print stops mid-way:** re-slice, wait for the file to finish saving, then check or reformat the microSD card.

## Firmware and software

Creality notes that changing the menu language needs the matching firmware. Download firmware only from the Ender-3 page in the Download Center. Slice in Creality Print; our [G-code to STL converter](/gcode-to-stl/) recovers a rough model from an old print file.

## Related pages

See the [Ender 3 Pro manual](/printers/ender-3-pro-manual/) and the [Ender 3 V2 manual](/printers/ender-3-v2-manual/) for the later models, or compare printers in our [printer comparison tool](/printers/compare/).
