---
title: Prusa MK4 manual – where to find it and what it covers
seoTitle: Prusa MK4 Manual – Handbook, Setup and Maintenance
description: Where to find the official Prusa MK4 and MK4S manual, what the handbook covers, the first-run selftest, maintenance intervals, common errors and firmware updates.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/deac1b2b-aa85-4d51-9c64-9e682085d357/output.png
imageAlt: "Illustration of an open-frame bed-slinger with a load-sensing print head, a handbook open on the bench with line diagrams, a brass brush, a small tube of lubricant and a spring steel sheet being wiped with a cloth"
category: Manuals
brand: Prusa Research
summary:
  - Prusa publishes the MK4 and MK4S handbooks as PDFs on the Prusa Knowledge Base, under Printer Handbooks and on the MK4 family downloads page.
  - The handbook covers unpacking, the first print, printing your own models, materials, regular maintenance and troubleshooting.
  - Prusa's maintenance guide asks for a nozzle and bed check before each print and rod, belt and gear care every 200 print hours.
faq:
  - q: Where can I find the Prusa MK4 manual?
    a: On the Prusa Knowledge Base at help.prusa3d.com – the Printer Handbooks article lists the MK4 and MK4S, and the MK4 family downloads page has the handbook PDFs next to the firmware.
  - q: Is there a separate assembly manual for the MK4 kit?
    a: Yes. The kit is built from Prusa's online step-by-step assembly guide, which is also available as a PDF and ends with a preflight check.
  - q: How often should I lubricate the Prusa MK4?
    a: Prusa recommends inspecting, wiping and lubricating the smooth rods every 200 print hours, together with checking the belts, pulleys and extruder gear.
sources:
  - name: Prusa Knowledge Base – Printer handbooks
    url: https://help.prusa3d.com/en/article/printer-handbooks_125045
  - name: Prusa – MK4 family firmware and downloads
    url: https://help.prusa3d.com/downloads/mk4-family
  - name: Prusa Knowledge Base – MK4S product page
    url: https://help.prusa3d.com/product/mk4s
  - name: Prusa Knowledge Base – Regular printer maintenance (MK4/S, MK3.9/S)
    url: https://help.prusa3d.com/article/regular-printer-maintenance-mk4-s-mk3-9-s_419000
  - name: Prusa Knowledge Base – Selftest failed (MK4/S, MK3.9/S)
    url: https://help.prusa3d.com/article/selftest-failed-mk4-s-mk3-9-s_417808
  - name: Prusa Knowledge Base – How to update firmware
    url: https://help.prusa3d.com/article/how-to-update-firmware-core-one-l-core-one-mk4-s-mk3-9-s-mk3-5-s-xl_453086
  - name: Prusa – Original Prusa MK4S kit
    url: https://www.prusa3d.com/product/original-prusa-mk4s-kit/
tools: [stl-viewer, 3mf-to-stl, gcode-to-stl]
---
**The official Prusa MK4 manual is the Original Prusa MK4 handbook, a PDF that Prusa Research publishes on its Knowledge Base (help.prusa3d.com) in the Printer Handbooks article and on the MK4 family downloads page.** The MK4S has its own handbook in the same places, and kit buyers also get an online step-by-step assembly guide. This page summarises what the documentation covers in our own words; it does not replace it.

## What the official Prusa MK4 handbook covers

The MK4S handbook (which also applies to the MK3.9S) is split into these chapters:

1. Introduction
2. Unpacking and package contents
3. Printer overview and glossary
4. Your first print
5. Advanced user guide
6. Printing your own models
7. Material guide
8. Regular maintenance
9. FAQ and basic troubleshooting
10. Advanced hardware troubleshooting
11. Troubleshooting print quality issues

The MK4 product section of the Knowledge Base adds assembly, upgrades (MK4 to MK4S, MK3/MK3S+ to MK4S), calibration, troubleshooting, printable parts and sample G-codes.

## Prusa MK4 key facts

| Item | Detail (MK4S) |
|---|---|
| Build volume | 250 × 210 × 220 mm |
| Max nozzle temperature | 290 °C |
| Max bed temperature | 120 °C |
| Extruder | Nextruder direct drive, 10:1 planetary gearbox |
| Levelling | Loadcell in the nozzle, automatic mesh levelling |
| Connectivity | Ethernet, Wi-Fi, NFC, USB |
| Slicer | PrusaSlicer |

See our [Prusa MK4 page](/printers/prusa-mk4/) for the full spec list.

## Quick start: from the box to the first print

- **Unbox** and check the package contents against the handbook.
- **Assemble** – the kit follows the online assembly guide, ending with a preflight check. The assembled printer needs only a few minutes of preparation.
- **Run the selftest wizard.** It checks the fans, the loadcell, the X, Y and Z axes, the nozzle and bed heaters, gearbox alignment and the filament sensor. Stay at the printer – some tests ask you to tap the nozzle.
- **Print** – load filament and print one of the sample G-codes from the USB drive.

There is no manual first-layer probe adjustment: the loadcell in the nozzle measures the bed itself.

## Maintenance schedule Prusa recommends

| When | What |
|---|---|
| Before every print | Clear debris from the printer and under the bed; clean the nozzle with a brass brush while hot; hand-tighten the hotend thumb screws with the printer cold and off |
| Regularly | Clean the steel sheet (acetone only on the Smooth sheet; never on Textured or Satin) |
| Every 200 print hours | Wipe and lubricate the smooth rods; check pulleys and set screws; check belt tension; clean the extruder gear (no lubricant) |
| Every few hundred hours | Blow dust out of the fans with the printer off |
| Every 600–800 print hours | With the printer unplugged, check the electrical connectors |

## Common problems and fixes

- **Mesh bed levelling fails** – check that the nozzle is seated and hand-tight, then rerun the loadcell calibration.
- **Heating error** – check heater and thermistor connections and cables; with the printer cold, check the bed connector screws.
- **Fan error** – clean the print-head fans with compressed air and check their connectors.
- **Homing failed or a stiff axis** – remove obstructions, clean and lubricate the rods, and check pulley screws and belt tension.
- **Filament not extruding** – check idler tension, temperature and the filament sensor, clean the feed gear, and clear the nozzle or do a cold pull.
- **USB drive not recognised** – format it as FAT32.

## Firmware and software

Prusa publishes MK4 firmware as .bbf files on the MK4 family downloads page. Copy the file to a USB drive and update from the printer, or let Prusa Connect offer the update over the air. Slice in **PrusaSlicer**, and print offline from USB, locally through PrusaLink or remotely through Prusa Connect.

**Tip:** to inspect a sliced job before printing, open it with our [G-code to STL tool](/gcode-to-stl/); for projects from other slicers, use the [3MF to STL converter](/3mf-to-stl/).

## Related pages

See the [Prusa 3D printers guide](/printers/prusa-3d-printers/), the older [Prusa MK3S manual](/printers/prusa-mk3s-manual/), or compare printers in the [printer comparison tool](/printers/compare/).
