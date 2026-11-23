---
shortName: Creality Ender-3 Pro
title: Creality Ender 3 Pro – specs, assembly, setup and upgrades
seoTitle: Ender 3 Pro Specs, Assembly and Setup Guide
description: Creality Ender 3 Pro explained – official specs, how it differs from the Ender-3, kit assembly order, bed levelling, printing from SD card and where the manual is.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/0643d521-f26d-4129-9381-6ef5995518a1/output.png
imageAlt: "Illustration of a half-assembled generic open-frame 3D printer kit on a workbench with tools"
category: Creality
brand: Creality
summary:
  - The Ender 3 Pro is an open-frame Creality kit printer with a 220 × 220 × 250 mm build volume.
  - Compared with the original Ender-3 it adds a Mean Well power supply, a wider Y-axis extrusion and a magnetic build sheet.
  - Bed levelling is manual with four corner knobs; prints start from an SD card or over USB.
specs:
  - ["Build volume", "220 × 220 × 250 mm"]
  - ["Max bed temperature", "110 °C"]
  - ["Motion system", "Cartesian (moving bed)"]
  - ["Enclosure", "Open frame"]
  - ["Nozzle", "0.4 mm"]
  - ["Extruder", "Bowden"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "Monochrome LCD with rotary knob"]
  - ["Connectivity", "SD card, USB"]
  - ["Sensors", "Power-loss print resume; manual bed levelling"]
  - ["Size and weight", "440 × 440 × 465 mm"]
  - ["Power", "270 W rated, 24 V output; input 100–120 V / 200–240 V"]
faq:
  - q: What is the build volume of the Ender 3 Pro?
    a: Creality lists 220 × 220 × 250 mm, the same as the original Ender-3 and the Ender-3 V2.
  - q: What is the difference between the Ender-3 and the Creality Ender 3 Pro?
    a: Creality says the Pro adds a Mean Well power supply, a wider 40 × 40 mm aluminium Y-axis extrusion, a removable flexible magnetic build sheet and larger levelling knobs.
  - q: Does the Ender 3 Pro have auto bed levelling?
    a: No. It levels manually with four knobs under the bed. A CR Touch or BLTouch probe can be added; Creality notes the CR Touch needs a compatible 32-bit mainboard.
  - q: Where is the Ender 3 Pro manual?
    a: Creality publishes the Ender-3 Pro user manual and firmware on its official Download Center, on the Ender-3 Pro product page.
sources:
  - name: Creality – Ender-3 Pro product page
    url: https://www.creality.com/products/ender-3-pro-3d-printer
  - name: Creality – Ender-3 Pro download page (manual, firmware, Creality Print)
    url: https://www.creality.com/pages/download-ender-3-pro
  - name: Creality store blog – Ender 3 Pro, V2, S1, S1 Pro, V3 KE comparison (specs)
    url: https://store.creality.com/blogs/all/creality-ender-3-pro-v2-s1-s1-pro-v3-ke-detailed-comparative-analysis
  - name: Creality store blog – Ender series parameter comparison
    url: https://store.creality.com/blogs/all/ender-series-3d-printers-parameter-comparison
  - name: Creality blog – Ender-3 vs Ender-3 Pro, the difference
    url: https://www.creality.com/uk/blog/ender-3-vs-ender-3-pro-the-difference
  - name: Creality store blog – Ender 3 bed levelling
    url: https://store.creality.com/blogs/all/ender-3-bed-leveling
  - name: Tom's Hardware – Ender-3 Pro review (build volume, size)
    url: https://www.tomshardware.com/reviews/creality-ender-3-pro-3d-printer
tools: [stl-viewer, obj-to-stl, gcode-to-stl]
---
**The Creality Ender 3 Pro is a low-cost, open-frame 3D printer kit with a 220 × 220 × 250 mm build volume, a Bowden extruder and manual bed levelling.** It is an improved version of the original Ender-3 and one of the most common first printers for hobbyists who don't mind assembling and tuning a machine.

## Who the Ender 3 Pro suits

The Ender 3 Pro suits beginners on a budget who want to learn how a printer works, and tinkerers who plan to upgrade it. Creality markets it as "DIY assembly", so expect an hour or two of building and some manual levelling. It prints PLA, PETG and similar materials well; as an open-frame printer it is not ideal for ABS. If you want a printer that works out of the box, see our [Bambu Lab A1](/printers/bambu-lab-a1/) page instead.

## Ender 3 Pro vs Ender-3

Creality lists these changes on the Pro:

- **Mean Well power supply** instead of a generic one.
- **40 × 40 mm aluminium Y-axis extrusion** under the bed, for a more stable base.
- **C-MAG magnetic build sheet** – removable and flexible, so prints pop off easily.
- **Larger levelling knobs.**

Build volume, extruder type and screen are the same. Our [Creality Ender 3 page](/printers/creality-ender-3/) covers the original model.

## Assembly order

The Ender 3 Pro ships partly assembled. Creality's user manual takes you through these stages:

1. Check the parts against the bill of materials.
2. Fit the two vertical aluminium uprights to the base.
3. Mount the power supply and the screen.
4. Fit the Z-axis limit switch and Z motor.
5. Assemble the X axis with the hot end and fit it onto the uprights.
6. Fix the top gantry frame and the filament spool holder.
7. Connect the cables and tubes.

**Before switching on**, set the power supply's voltage switch (115 V or 230 V) to match your mains – Creality's manual calls this out.

## Bed levelling and first print

Creality's levelling method: home the printer, disable the steppers, then move the nozzle to each corner and turn the knob until a sheet of paper drags slightly between nozzle and bed. Repeat all four corners and print a first-layer test. For PLA, Creality's guide suggests about 200–210 °C nozzle and 45–55 °C bed as a starting point.

## Connecting and slicing

The Ender 3 Pro has no Wi-Fi. Creality recommends printing offline from the SD card; you can also print from a computer over USB. Slice models in **Creality Print**, Creality's free slicer for Windows, macOS and Linux, which exports G-code from STL, OBJ or AMF files. Need an STL first? Try our [OBJ to STL converter](/obj-to-stl/).

## Manual and firmware

Creality publishes the Ender-3 Pro user manual, firmware and Creality Print on its official Download Center. Because the mainboard changed during production, check your board version before flashing firmware.

## Compare the Ender 3 Pro

See how it stacks up against newer printers in our [printer comparison tool](/printers/compare/).
