---
shortName: Creality Ender-3
title: Creality Ender 3 – specs, setup, bed levelling and upgrades
seoTitle: Ender 3 Specs, Setup and Bed Levelling Guide
description: Creality Ender 3 explained – official specs of the original Ender-3 3D printer, first setup, bed levelling, SD card printing, common fixes and where the manual is.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/fbc5e3f4-af1f-42a7-b1a4-daf4920522f8/output.png
imageAlt: "Illustration of levelling a generic open-frame 3D printer bed with corner knobs and a sheet of paper"
category: Creality
brand: Creality
summary:
  - The original Ender 3 is an open-frame Creality kit printer released in 2018 with a 220 × 220 × 250 mm build volume.
  - It has a Bowden extruder, manual four-knob bed levelling and power-loss print resume.
  - Later models (Ender-3 Pro, V2, V3 SE) kept the size but added upgrades.
specs:
  - ["Build volume", "220 × 220 × 250 mm"]
  - ["Max bed temperature", "110 °C"]
  - ["Motion system", "Cartesian (moving bed)"]
  - ["Enclosure", "Open frame"]
  - ["Nozzle", "0.4 mm (0.2 / 0.6 / 0.8 mm optional)"]
  - ["Extruder", "Bowden, MK8-style"]
  - ["Filament diameter", "1.75 mm"]
  - ["Connectivity", "SD card; printing from a computer"]
  - ["Sensors", "Power-loss print resume; thermal runaway protection; no filament runout sensor"]
  - ["Power", "270 W rated, 24 V output; 115 V / 230 V switchable input"]
faq:
  - q: What is the Ender 3 build volume?
    a: Creality lists 220 × 220 × 250 mm for the Ender-3.
  - q: Does the Creality Ender 3 have auto bed levelling?
    a: No. You level it by hand with four knobs under the bed. A BLTouch or CR Touch probe can be added; Creality notes the CR Touch needs a 32-bit V4.2.2 or V4.2.7 mainboard.
  - q: What filament can the Ender 3 print?
    a: Creality's guide lists PLA and TPU among suitable materials and says ABS is generally not recommended on this open-frame printer. It takes 1.75 mm filament only.
  - q: Ender 3 or Ender 3 Pro?
    a: They share the build volume and extruder. The Pro adds a Mean Well power supply, a wider Y-axis extrusion and a magnetic build sheet.
sources:
  - name: Creality – Ender-3 download center (manual, firmware, Creality Print)
    url: https://www.creality.com/download/ender-3-3d-printer
  - name: Creality store blog – Ender 3 3D printer operation guide
    url: https://store.creality.com/blogs/all/ender-3-3d-printer-guide
  - name: Creality store blog – Ender series parameter comparison
    url: https://store.creality.com/blogs/all/ender-series-3d-printers-parameter-comparison
  - name: Creality blog – Ender-3 vs Ender-3 Pro, the difference
    url: https://www.creality.com/uk/blog/ender-3-vs-ender-3-pro-the-difference
  - name: Creality blog – Ender-3 vs Ender-3 Pro vs Ender-3 V2
    url: https://www.creality.com/uk/blog/the-differences-ender-3-vs-ender-3-pro-vs-ender-3-v2
  - name: Creality store blog – Ender 3 bed levelling
    url: https://store.creality.com/blogs/all/ender-3-bed-leveling
  - name: 3Dnatives – Creality printer guide (March 2018 release)
    url: https://www.3dnatives.com/en/creality-3d-printer-guide-281220204/
  - name: Wikipedia – Creality (2018 release)
    url: https://en.wikipedia.org/wiki/Creality
tools: [stl-viewer, 3mf-to-stl, gcode-to-stl]
---
**The Creality Ender 3 is an open-frame, budget 3D printer kit with a 220 × 220 × 250 mm build volume, a Bowden extruder and manual bed levelling.** Released in 2018, the original Ender-3 became one of the most widely used hobby printers and started a whole family of Ender 3 models.

## Who the Ender 3 suits

The Ender 3 suits hobbyists who enjoy tinkering: you assemble it, level it by hand and tune it over time. Creality's guide lists PLA and TPU as suitable materials. For a printer that needs almost no setup, a newer machine such as the [Bambu Lab A1](/printers/bambu-lab-a1/) is easier.

## Ender 3 3D printer models

Creality kept the 220 × 220 × 250 mm size across several versions:

- **Ender-3** (2018) – the original, with a printed bed sticker and a generic power supply.
- **[Ender-3 Pro](/printers/creality-ender-3-pro/)** – Mean Well power supply, wider Y-axis extrusion and a magnetic build sheet.
- **Ender-3 V2** – 32-bit silent mainboard, a 4.3-inch colour screen and a glass bed. See our [Ender 3 V2 manual guide](/printers/ender-3-v2-manual/).
- Newer V3-series models add auto levelling and faster motion.

## First setup

The Ender 3 arrives as a kit. Assemble the frame, gantry and screen following the manual, then:

1. Set the power supply switch to 115 V or 230 V to match your mains.
2. Power on and check that the nozzle and bed heat.
3. Level the bed (below).
4. Load filament: heat the nozzle to about 200 °C, cut the filament end at an angle, open the extruder lever and push it in until it flows from the nozzle.
5. Print a test file from the SD card.

## Ender 3 bed levelling

Creality's method: home the printer, disable the steppers, then move the nozzle over each corner and turn the knob until a sheet of paper drags slightly between nozzle and bed (about 0.06–0.2 mm). Go round all four corners twice, then print a first-layer test. If prints warp, Creality suggests re-levelling, a 50–60 °C bed and a thin layer of glue.

## Connecting and slicing

The Ender 3 has no Wi-Fi. Creality recommends printing offline from the SD card, though you can also print from a computer. Slice your models in **Creality Print**, Creality's free slicer for Windows, macOS and Linux. For PLA, Creality's guide suggests 0.15 mm layers, 200–210 °C nozzle, 45–55 °C bed and 50–60 mm/s. Our [G-code to STL converter](/gcode-to-stl/) can recover a rough model from an old print file.

## Common Ender 3 problems and fixes

- **No extrusion:** check the extruder gear and filament path, and clear a blocked nozzle throat.
- **Nozzle leaking at the threads:** heat to about 230 °C and re-tighten the hot end.
- **Bed or nozzle not heating:** check the thermistor reading first, then the 24 V supply to the heater.
- **Blank or blue screen:** reseat the screen cable on the mainboard.
- **Wobbly bed or print head:** tighten the eccentric nuts on the wheels.

## Manual and firmware

Creality publishes the Ender-3 user manual, firmware and Creality Print on its official Download Center under the Ender-3 product. Check your mainboard version before flashing firmware, as it changed during production.

## Compare the Ender 3

See how the Ender 3 compares with newer printers in our [printer comparison tool](/printers/compare/).
