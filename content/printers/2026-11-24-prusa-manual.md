---
title: Prusa manual – where to find assembly guides and handbooks
seoTitle: Prusa Manual – Assembly Guides, Handbooks and First Run
description: Where to find the official Prusa manual, kit assembly guides and printer handbooks, the build order, first-run wizard, maintenance schedule and firmware updates.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/c4422130-b549-4e52-b045-9bf0b36969e6/output.png
imageAlt: "Illustration of a kit build flat-lay with labelled parts bags, a tablet photo guide, a tin of sweets, hex keys, a heatbed and a thick handbook"
category: Manuals
brand: Prusa Research
summary:
  - Prusa Research publishes every manual in the Prusa Knowledge Base, with a product page per printer.
  - Kit assembly manuals are step-by-step online guides with photos and comments, also available as PDFs.
  - Each printer also has a handbook covering setup, calibration, slicing and printing.
faq:
  - q: Where can I find the Prusa manual for my printer?
    a: In the Prusa Knowledge Base. Each printer's product page there lists the kit assembly guide, the handbook PDF, upgrade guides, printable parts and spare parts.
  - q: Where is the Prusa assembly manual for a kit?
    a: Prusa's assembly manuals are online step-by-step guides in the Knowledge Base, with high-resolution photos and user comments for each step. A PDF version can be downloaded from each guide.
  - q: Which Prusa printers have a handbook?
    a: Prusa lists handbooks for the CORE One, CORE One L, MK4S, XL, MK4, MK3.9, MK3.5, MINI and MINI+, MMU3, MK3S and MK3S+, older i3 models and its SLA printers.
  - q: How do I update Prusa firmware?
    a: On the CORE One, MK4 and MK4S, MK3.9, MK3.5 and XL, copy the firmware file to a USB drive and flash it from the printer. Prusa Connect can also send the file over the air, but a USB drive must be in the printer.
sources:
  - name: Prusa Knowledge Base – Assembly manuals
    url: https://help.prusa3d.com/article/assembly-manuals_2273
  - name: Prusa Knowledge Base – Printer handbooks
    url: https://help.prusa3d.com/article/printer-handbooks_125045
  - name: Prusa Knowledge Base – MK4S product page
    url: https://help.prusa3d.com/product/mk4s
  - name: Prusa Knowledge Base – Original Prusa MK4S kit assembly
    url: https://help.prusa3d.com/manual/original-prusa-mk4s-kit-assembly_2167
  - name: Prusa Knowledge Base – MK4 kit introduction
    url: https://help.prusa3d.com/guide/1-introduction_426859
  - name: Prusa Knowledge Base – MK4S upgrade preflight check
    url: https://help.prusa3d.com/guide/6-preflight-check_754328
  - name: Prusa Knowledge Base – Regular printer maintenance (MK4S/MK3.9S)
    url: https://help.prusa3d.com/article/regular-printer-maintenance-mk4-s-mk3-9-s_419000
  - name: Prusa Knowledge Base – How to update firmware
    url: https://help.prusa3d.com/article/how-to-update-firmware-core-one-l-core-one-core-one-indx-mk4-s-mk3-9-s-mk3-5-s-xl_453086
  - name: Prusa Research – Original Prusa MK4S kit
    url: https://www.prusa3d.com/product/original-prusa-mk4s-3d-printer-kit/
tools: [stl-viewer, 3mf-to-stl, gcode-to-stl]
---
**Prusa Research publishes every official Prusa manual in the Prusa Knowledge Base, where each printer has a product page with its kit assembly guide, handbook PDF, upgrade guides and spare parts.** The assembly manuals are online step-by-step guides with photos and a comment thread on every step. This page explains where to find the Prusa manual you need and summarises the process in our own words; it does not replace Prusa's guides.

## Where the official Prusa manuals are

| What you need | Where Prusa publishes it |
|---|---|
| Kit assembly manual | Prusa Knowledge Base → your printer → assembly guide (online, PDF download) |
| Handbook | Prusa Knowledge Base → your printer → handbook PDF |
| Upgrade guides (e.g. MK4 to MK4S) | Same product page |
| Printable and spare parts | Same product page |

The Knowledge Base has an "Assembly manuals" article that lists guides for the CORE One, MK4, MMU, MINI and MK3 families and points out common assembly errors. Prusa notes that community guides are not supported by Prusa.

## What a Prusa handbook covers

Prusa describes the handbook as the instruction manual for the machine, covering setup, calibration, slicing and printing. Handbooks exist for the CORE One and CORE One L, MK4S, XL, MK4, MK3.9, MK3.5, MINI and MINI+, MMU3, MK3S and MK3S+, older i3 models, the SL1 and SL1S SPEED resin printers and their curing machines. The MK4S kit ships with an English handbook and a link to the online manual.

## How a Prusa kit assembly manual is organised

The MK4S kit guide is rated "Moderate" by Prusa. Its main chapters include:

1. **Introduction** – tools (all included), part labels, spare-parts bag, printed-part versions and how to prepare your desk.
2. **Frame assembly.**
3. **X-axis and X-carriage.**
4. **Z-axis.**
5. **Nextruder** – the extruder and hot end.
6. **xLCD** – the display.
7. **Y-carriage and heatbed.**
8. **Preflight check** – final checks before the first power-on.

Older i3 kits follow a similar idea with Y-axis, X-axis, extruder, display and electronics chapters. Prusa says assembly needs no soldering because cables come cut to length.

**Tip:** read the comments under each step – other builders often flag the exact mistake that step is prone to.

## First run after assembly

The preflight chapter for the MK4S walks through:

1. Degrease the print sheet with isopropyl alcohol and place it on the bed. Prusa says a greasy sheet is the most common reason prints come loose.
2. Update the firmware.
3. Run the setup **Wizard**: selftest, load-cell test, gearbox alignment and filament sensor calibration.
4. Load filament.
5. Optionally connect the printer to **Prusa Connect**.
6. Install **PrusaSlicer** and print a sample model.

Older i3 printers such as the MK3S add a manual **first layer calibration** in the Wizard.

## Maintenance Prusa recommends (MK4S and MK3.9S)

| When | What to do |
|---|---|
| Before every print | Clear debris, clean the nozzle with a brass brush, hand-tighten the heatbreak screws when cold, clean the sheet |
| Every 200 print hours | Clean and lightly lubricate the smooth rods, check belt tension and pulley screws, clear the extruder gears |
| Every few hundred hours | Clean the fans |
| Yearly or 600–800 hours | Check the electronics connectors |

Prusa says not to lubricate the extruder gears, and to use acetone only on the smooth sheet. The CORE One and XL have their own maintenance articles. Our [Prusa MK3S manual guide](/printers/prusa-mk3s-manual/) covers the older i3 model.

## Firmware and software

On the CORE One, MK4 and MK4S, MK3.9, MK3.5 and XL, firmware is flashed from a **USB drive**. **Prusa Connect** can send a new file over the air, but a USB drive must be in the printer. Slice in **PrusaSlicer**. To check a model before slicing, use our [STL viewer](/stl-viewer/).

## Related pages

Browse the [Prusa printer lineup](/printers/prusa-3d-printers/), see the [Prusa MK4](/printers/prusa-mk4/) and [Prusa CORE One](/printers/prusa-core-one/) pages, or use the [printer comparison tool](/printers/compare/).
