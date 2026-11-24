---
shortName: Creality Ender 5
title: Creality Ender 5 – specs, assembly and Ender 5 Pro and S1 differences
seoTitle: Creality Ender 5 Specs, Setup and Ender 5 Pro vs S1
description: Creality Ender 5 explained – specs of the 220 × 220 × 300 mm cube printer, assembly, levelling, firmware and how the Ender 5 Pro and S1 differ.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/cd06a09f-2840-48de-bfa4-d870a79ced31/output.png
imageAlt: "Illustration of a mid-size open cube-frame printer with the head moving on top and a magnetic bed below printing an orange lamp shade on a workbench"
category: Creality
brand: Creality
summary:
  - The Creality Ender 5 is an open cube-frame printer with a 220 × 220 × 300 mm build volume and a Bowden extruder.
  - The bed moves only in Z, and levelling is manual with large knobs; a BL Touch can be added.
  - The Ender 5 Pro adds a silent board and metal extruder, and the Ender 5 S1 adds a direct drive, CR Touch and 250 mm/s.
specs:
  - ["Build volume", "220 × 220 × 300 mm"]
  - ["Max nozzle temperature", "260 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "Cartesian cube frame, single Z lead screw"]
  - ["Enclosure", "Open frame"]
  - ["Multi-colour", "No"]
  - ["Nozzle", "0.4 mm, single"]
  - ["Extruder", "Bowden"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "LCD with control knob"]
  - ["Connectivity", "SD card, USB"]
  - ["Sensors", "Manual levelling (BL Touch optional)"]
  - ["Power", "100–240 V; 350 W, 24 V power supply"]
faq:
  - q: What is the Creality Ender 5 build volume?
    a: 220 × 220 × 300 mm. The Ender 5 Pro has the same size, while the Ender 5 S1 is 220 × 220 × 280 mm.
  - q: What is the difference between the Ender 5 and Ender 5 Pro?
    a: The Pro adds a silent V1.15 mainboard with TMC2208 drivers, a metal extruder frame with an adjustable tension bolt and a Capricorn PTFE Bowden tube. Build volume and frame are the same.
  - q: Is the Ender 5 S1 better than the Ender 5?
    a: The S1 is a newer design with a Sprite direct-drive extruder, a 300 °C nozzle, a 110 °C bed, CR Touch auto levelling, a 4.3-inch touchscreen and up to 250 mm/s. Its launch price was US$559.
sources:
  - name: Creality blog – Ender 5 vs Ender 6
    url: https://www.creality.com/blog/ender-5-vs-ender-6-what-are-the-differences-between-the-two-creality-cubic-3d-printers
  - name: Creality blog – Ender 5 vs Ender 5 Plus vs Ender 5 Pro
    url: https://www.creality.com/fr/blog/the-difference-among-ender-5-ender-5-plus-and-ender-5-pro
  - name: Creality blog – Ender 5 S1 launch (3 November 2022)
    url: https://www.creality.com/blog/creality-launches-ender-5-s1-flagship-of-the-year-reinventing-desktop-3d-printer-experience
  - name: Creality Wiki – Ender 5 S1 user manual
    url: https://wiki.creality.com/en/ender-series/ender-5-s1/user-manual
  - name: All3DP – Creality Ender 5 review and specs
    url: https://all3dp.com/1/creality-ender-5-review-3d-printer-specs/
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Creality Ender 5 is an open cube-frame 3D printer with a 220 × 220 × 300 mm build volume, a Bowden extruder and manual bed levelling.** The print head moves at the top of the cube while the bed travels only up and down, which keeps tall prints steady. Creality later released the Ender 5 Pro, the larger [Ender 5 Plus](/printers/creality-ender-5-plus/) and the redesigned Ender 5 S1.

## Creality Ender 5 at a glance

| Item | Detail |
|---|---|
| Build volume | 220 × 220 × 300 mm |
| Nozzle / bed | 260 °C / 100 °C |
| Frame | Open cube, single Z lead screw |
| Extruder | Bowden |
| Bed surface | Removable magnetic sheet |
| Levelling | Manual (BL Touch optional) |
| Power | 350 W, 24 V |

## Who the Ender 5 suits

The Ender 5 suits hobbyists who like to tinker and want a stable cube frame on a budget. It has no automatic levelling, Wi-Fi or enclosure, and the Bowden extruder makes soft TPU harder to print than on a direct-drive machine.

## Ender 5 vs Ender 5 Pro vs Ender 5 S1

| | Ender 5 | Ender 5 Pro | Ender 5 S1 |
|---|---|---|---|
| Build volume | 220 × 220 × 300 mm | 220 × 220 × 300 mm | 220 × 220 × 280 mm |
| Extruder | Bowden | Bowden, metal frame | Sprite direct drive |
| Mainboard | Standard | V1.15 silent, TMC2208 | Silent |
| Levelling | Manual | Manual | CR Touch auto |
| Nozzle / bed | 260 / 100 °C | 260 / 100 °C | 300 / 110 °C |
| Speed | – | – | Up to 250 mm/s |
| Screen | LCD + knob | LCD + knob | 4.3-inch touchscreen |

The Ender 5 S1 launched in November 2022 at US$559 (US), with an early-bird price of US$469.

## Assembling the Ender 5

The axes come pre-assembled, and reviewers report about 30 minutes to finish the build. Two tips from reviews: the hot-end and bed thermistor plugs look alike, so check which goes where, and cut the filament end at an angle before feeding it into the Bowden tube.

## Levelling the Ender 5

Heat the bed and nozzle, home the printer, then turn the large knobs under each corner until a sheet of paper drags slightly under the nozzle. Repeat for all four corners and check the centre. Creality notes a BL Touch can be added for automatic levelling.

**Tip:** re-check levelling after moving the printer or swapping the magnetic sheet.

## Connecting and printing

Slice on a computer, copy the G-code to the **SD card** and print from the LCD, or connect by **USB**. To inspect a sliced file before printing, open it in our [G-code to STL tool](/gcode-to-stl/).

## Ender 5 manual

Creality publishes manuals and firmware for the Ender series in the Download Center on its website and on the Creality Wiki under Ender Series. The Ender 5 S1 user manual is on the Creality Wiki under Ender Series → Ender-5 S1.

## Firmware and software

The Ender 5 runs a modified **Marlin** firmware. Early printers came with Cura on the SD card; today Creality's slicer is **Creality Print**.

## Compare the Ender 5

Compare it with other Creality printers in our [printer comparison tool](/printers/compare/), or see the full [Creality Ender range](/printers/creality-ender-3d-printers/).
