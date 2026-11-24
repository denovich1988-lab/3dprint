---
title: Ender 5 Pro manual – where to find it and what it covers
seoTitle: Ender 5 Pro Manual – Where to Find It and Quick Start
description: Where to find the official Creality Ender 5 Pro manual, what its sections cover, frame assembly, manual bed levelling, first print, maintenance and firmware.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/649c7b62-284e-4a6b-8e19-8209c8ea0ed3/output.png
imageAlt: "Illustration of a box-frame printer laid out for assembly on a navy mat – four upright profiles, a top gantry frame, a bed with large knobs and a sheet of paper under the nozzle"
category: Manuals
brand: Creality
summary:
  - Creality publishes the Ender 5 Pro user manual in the Ender-5 Pro section of its Download Center, and the printed guide points to the detailed manual and videos on the included TF card.
  - The manual covers frame assembly, cable connection, the knob-controlled screen, loading filament, manual bed levelling, software and troubleshooting.
  - The Ender 5 Pro levels by hand with paper and four knobs under the bed; there is no auto levelling sensor as standard.
faq:
  - q: Where can I find the Creality Ender 5 Pro manual?
    a: In the Ender-5 Pro section of the Creality Download Center, which also has the firmware and Creality Print. The printed guide in the box says the detailed manual and videos are on the included TF card.
  - q: How do you level the Ender 5 Pro bed?
    a: Choose Prepare → Auto Home, then Disable Steppers. Move the nozzle over each corner and turn the knob under the bed until the nozzle lightly drags on a sheet of A4 paper. Do all four corners and repeat once or twice.
  - q: What is the Ender 5 Pro build volume?
    a: 220 × 220 × 300 mm according to retailer and review spec sheets. It uses a box frame with a bed that moves up and down.
sources:
  - name: Creality – Ender-5 Pro download center
    url: https://www.creality.com/pages/download-ender-5-pro
  - name: Creality – Ender-5 Pro printer guide book V2.1
    url: https://cdn.shopify.com/s/files/1/0603/6609/files/User_Manual_Ender-5_Pro_EN_V.2.1.pdf?4207
  - name: Creality – Ender-5 Pro user manual (copy)
    url: https://www.manualslib.tech/guide/427803/creality-ender-5-pro-3d-printer-user-manual.html
  - name: Creality blog – The difference among Ender-5, Ender-5 Plus and Ender-5 Pro
    url: https://www.creality.com/blog/the-difference-among-ender-5-ender-5-plus-and-ender-5-pro
  - name: All3DP – Creality Ender 5 Pro specs
    url: https://all3dp.com/1/creality-ender-5-pro-review-3d-printer-specs/
  - name: MatterHackers – Creality Ender 5 Pro
    url: https://www.matterhackers.com/store/l/creality3d-ender-5-pro-3d-printer/sk/M03V7JPN
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The official Creality Ender 5 Pro manual is in the Ender-5 Pro section of the Creality Download Center, and the printed guide in the box points to the full manual and videos on the included TF card.** The same Download Center page has the current firmware and the Creality Print slicer. This page summarises the Ender 5 Pro manual in our own words; it does not replace it.

## What the official Ender 5 Pro manual covers

The Ender 5 Pro printer guide book is organised in these parts:

1. **Preface and notes** – safety instructions.
2. **Introduction** – the printer's parts.
3. **General list** – what is in the box.
4. **Assembly steps** – building the frame.
5. **Cable connection.**
6. **Screen information** – the knob-controlled menu.
7. **Loading filament.**
8. **Bed levelling.**
9. **Software installation and preparing to print.**
10. **Troubleshooting.**

## Key specs

| Item | Value |
|---|---|
| Build volume | 220 × 220 × 300 mm |
| Frame | Box frame, bed moves on Z |
| Extruder | Metal Bowden extruder with Capricorn PTFE tube |
| Nozzle | 0.4 mm, up to 260 °C |
| Bed | Up to 135 °C |
| Levelling | Manual, four knobs |
| Power | 24 V |
| Released | 2019 |

The nozzle, bed and volume figures come from retailer and review spec sheets that agree; Creality's own pages are not consistent on the build height. Creality says the mainboard is a silent board, and the version varies by production batch.

## Quick start: unboxing and assembly

The Ender 5 Pro ships as a kit of frame parts: the top frame, the Z-axis frame, four 2040 profiles, the bottom frame, the bed, the extruder kit, the filament holder and the display. The manual's order is:

1. Fix the four profiles to the bottom frame, checking the hole orientation.
2. Fit the top frame – tighten the top screws before the side screws.
3. Align the frame and tighten the bottom screws.
4. Mount the Z-axis frame, then the bed.
5. Fit the display and filament holder, and connect the nozzle, bed and power cables. Use only the supplied power cable and a grounded socket.

## First calibration: manual bed levelling

1. Choose **Prepare → Auto Home**; the nozzle moves to the front-left corner.
2. Choose **Prepare → Disable Steppers** so you can move the head by hand.
3. Move the nozzle over each corner and turn the knob under the bed until the nozzle lightly scratches a sheet of A4 paper.
4. Repeat all four corners once or twice, because adjusting one corner changes the others.

**Tip:** level with the bed and nozzle at printing temperature – the gap changes slightly as the bed heats up.

## First print

1. Preheat the nozzle, press the extruder lever and push 1.75 mm filament through the Bowden tube until it comes out of the nozzle.
2. Install the slicer (Creality Print is in the Download Center), choose the Ender-5 Pro profile and slice your model.
3. Save the G-code to the TF card, then choose **Print from TF** on the printer and select the file.

To check a sliced file before printing, open it in our [G-code to STL tool](/gcode-to-stl/).

## Maintenance the manual recommends

- Switch off the power before cleaning.
- Wipe the frame, guide rails and wheels with a dry cloth.
- Clean the print surface with glass cleaner or isopropyl alcohol before each print.
- Clear the nozzle only with the supplied tools and never touch a hot nozzle.

## Common problems and fixes

- **First layer not sticking:** re-level the four corners with paper and clean the bed.
- **Under-extrusion:** check the Bowden tube is fully seated in both couplings and adjust the extruder spring pressure.
- **Layer shifts:** check that the frame screws and belts are tight after assembly.

## Firmware and software

Creality's Download Center lists Marlin 2.0.6 firmware for the Ender 5 Pro with the 4.2.2 mainboard, with versions for an optional BLTouch probe and filament sensor. On 32-bit 4.2.2 boards, firmware is installed from the TF card; early units with an older board are updated over USB instead. Creality's warranty does not cover third-party or modified firmware. Slice with **Creality Print**.

For the related printers, see our [Creality Ender 5](/printers/creality-ender-5/) and [Ender 5 Plus](/printers/creality-ender-5-plus/) pages, or compare models in the [printer comparison tool](/printers/compare/).
