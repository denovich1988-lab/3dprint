---
title: Prusa MK3S manual – assembly guide, handbook and calibration
seoTitle: Prusa MK3S Manual – Assembly Guide and Handbook
description: Where to find the official Prusa MK3S and MK3S+ manual, what the assembly guide and handbook cover, first calibration, maintenance and fixes for common problems.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/2a40c295-a03d-4ad1-8789-d1150100df0c/output.png
imageAlt: "Illustration of a workbench with a laptop assembly guide, parts trays and a half-built 3D printer frame"
category: Manuals
brand: Prusa Research
summary:
  - Prusa publishes the MK3S+ assembly manual online in the Prusa Knowledge Base and the handbook as a PDF.
  - First setup runs the Wizard – Selftest, XYZ calibration and First Layer Calibration.
  - Prusa stopped selling the MK3S+ kit in February 2024 but still supports it with firmware and spare parts.
faq:
  - q: Where is the Prusa MK3S manual?
    a: Prusa publishes the "Original Prusa i3 MK3S+ kit assembly" guide in the Prusa Knowledge Base (help.prusa3d.com) under Original Prusa i3 MK3S+ → Assembly manuals. The printer handbook PDF is on the same product's support page.
  - q: Is there a Prusa MK3S assembly manual PDF?
    a: The assembly manual is mainly an online step-by-step guide with photos. The Original Prusa MK3S+ handbook (setup, calibration, slicing and printing) is offered as a PDF download.
  - q: Do the MK3S and MK3S+ use the same manual and firmware?
    a: The MK3S and MK3S+ share the same firmware. Prusa has separate assembly guides for the MK3S and MK3S+, and an upgrade guide from MK3/MK3S to MK3S+.
sources:
  - name: Prusa Knowledge Base – Original Prusa i3 MK3S+ kit assembly
    url: https://help.prusa3d.com/manual/original-prusa-i3-mk3s-kit-assembly_1128
  - name: Prusa Knowledge Base – MK3S+ assembly manuals
    url: https://help.prusa3d.com/product/mk3s-2/assembly-manuals_272
  - name: Prusa Knowledge Base – MK3S+ product support (handbook, categories)
    url: https://help.prusa3d.com/product/mk3s-2
  - name: Prusa Knowledge Base – Printer handbooks
    url: https://help.prusa3d.com/article/printer-handbooks_125045
  - name: Prusa Knowledge Base – XYZ calibration (MK3/MK3S/MK3S+)
    url: https://help.prusa3d.com/article/xyz-calibration-mk3-mk3s-mk3s_112351
  - name: Prusa Knowledge Base – First Layer Calibration (i3)
    url: https://help.prusa3d.com/article/first-layer-calibration-i3_112364
  - name: Prusa Knowledge Base – i3 printer regular maintenance
    url: https://help.prusa3d.com/article/i3-printer-regular-maintenance_2072
  - name: Prusa Knowledge Base – Clogged nozzle/hotend
    url: https://help.prusa3d.com/article/clogged-nozzle-hotend-mk3-5-s-mk3s-mk2-5s_2008
  - name: Prusa Knowledge Base – Thermal runaway (i3 series)
    url: https://help.prusa3d.com/article/thermal-runaway-i3-series_2131
  - name: Prusa Knowledge Base – How to update firmware (MK3S/MK3S+/MK3)
    url: https://help.prusa3d.com/article/how-to-update-firmware-mk3s-mk3s-mk3_2227
  - name: Prusa blog – Goodbye, MK3!
    url: https://blog.prusa3d.com/goodbye-mk3-the-end-of-an-era-is-close-or-is-it_93213/
tools: [3mf-to-stl, stl-to-3mf, step-to-stl]
---
**Prusa publishes the official Prusa MK3S manual in the Prusa Knowledge Base: the online "Original Prusa i3 MK3S+ kit assembly" guide sits under Original Prusa i3 MK3S+ → Assembly manuals, and the printer handbook is a PDF on the same product's support page.** The assembly guide is available in eight languages, including English, German, French, Spanish and Polish. Below is a summary of what both documents cover and how to get your printer calibrated – in our own words.

## What the official MK3S manual covers

The **assembly manual** walks you through the kit in nine chapters:

1. Introduction (tools and preparation)
2. Y-axis assembly
3. X-axis assembly
4. Z-axis assembly
5. E-axis (extruder) assembly
6. LCD assembly
7. Heatbed and power supply assembly
8. Electronics assembly
9. Preflight check

The **handbook** covers setup, calibration, slicing and printing. Prusa's Knowledge Base adds articles on calibration, using the printer, maintenance, troubleshooting and PrusaSlicer. There is also a separate guide for upgrading an MK3 or MK3S to the MK3S+.

## Quick start: from kit to first print

1. **Build the kit** with the online guide. Prusa rates it "difficult", so plan a long session.
2. **Run the Wizard.** It starts on first power-up; you can rerun it from LCD → Calibration → Wizard. It begins with the **Selftest**, which checks wiring, motors and sensors.
3. **XYZ calibration.** The Z axis aligns first, then the printer measures four points with the steel sheet removed (keep a sheet of paper under the nozzle as a warning) and nine points with it back on.
4. **First Layer Calibration.** Turn the knob while the printer lays a test pattern until the line is smooth and slightly flattened. Judge it by eye, not by the number, and repeat it for each steel sheet.
5. **First print.** In PrusaSlicer, import a model, pick the printer and material, use 0.15–0.2 mm layers, export to the SD card and print. Prusa also offers sample G-codes.

## Maintenance Prusa recommends

- **Every couple of hundred print hours:** a general check of the printer.
- **Every 600–800 print hours:** check the electronics for pinched cables and dust, and make sure the power and heatbed connectors are tight.
- **Smooth rods and bearings:** clean and lubricate them. Never lubricate the Z lead screws or trapezoid nuts.
- **Belts:** clear debris; the belt status on the LCD should read 260–290.
- **Extruder gears:** clean with a brass brush.
- **Steel sheet:** clean it regularly; use acetone only on the smooth sheet, never on textured or satin ones.
- **Nozzle:** consider replacing it after 3–6 months of use if print quality stays poor.

## Common MK3S problems and fixes

- **Clogged nozzle:** try a cold pull first. If filament will not load, heat to 260 °C (PLA) or 280 °C (PETG, ABS) and clear the nozzle from below with the supplied needle. Check the PTFE tube, then redo the calibrations.
- **Thermal runaway error:** keep the room above about 16 °C and out of drafts, check that the bed thermistor is still under its tape, and reseat the heatbed cable. Replace a damaged thermistor rather than splicing it.
- **Filament sensor not working:** check its wiring, don't overtighten the extruder screws, and test it in LCD → Support → Sensor info (0 without filament, 1 with it).
- Prusa also documents fixes for layer shifting, warping, failed bed levelling and MINTEMP/MAXTEMP errors.

## Firmware and software

Download the firmware ZIP from Prusa's downloads page and unzip the .hex file (the MK3S and MK3S+ share one file). Connect the printer by USB, then in PrusaSlicer choose Configuration → Flash printer firmware. The installed version shows under LCD → Support. PrusaSlicer reads STL, 3MF and STEP models; our [STEP to STL converter](/step-to-stl/) helps with CAD files.

## Is the MK3S+ still sold?

Prusa removed the MK3S+ kit from its shop on 29 February 2024 and sold assembled units until stock ran out. It promised continued support and spare parts. The upgrade path is the MK3.5, MK3.9 or MK4 kit – see our [Prusa MK4 page](/printers/prusa-mk4/) and the full [Prusa lineup](/printers/prusa-3d-printers/).
