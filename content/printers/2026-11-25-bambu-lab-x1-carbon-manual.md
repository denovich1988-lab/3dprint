---
title: Bambu Lab X1 Carbon manual – where to find it and what it covers
seoTitle: Bambu Lab X1 Carbon Manual – Setup and Maintenance
description: Where to find the official Bambu Lab X1 Carbon manual on the Bambu Lab Wiki, quick start steps, maintenance schedule, common print problems and firmware updates.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/c5578357-d878-4367-9305-9caeb92e2125/output.png
imageAlt: "Illustration of an enclosed dark CoreXY printer with its glass door open while hands clean thin black carbon rods with a lint-free cloth, next to a bottle of alcohol, a carbon filter cartridge, a spare nozzle and a booklet"
category: Manuals
brand: Bambu Lab
summary:
  - Bambu Lab publishes the X1 Carbon manual on the Bambu Lab Wiki under X1 series, with a downloadable Quick Start Guide for the X1-Carbon Combo.
  - The wiki splits the documentation into quick start, manuals, troubleshooting, maintenance, part replacement and firmware pages.
  - Bambu Lab's maintenance guide includes weekly extruder and fan cleaning, monthly rod cleaning and three-monthly Z lead screw greasing.
faq:
  - q: Where can I find the Bambu Lab X1 Carbon manual?
    a: On the Bambu Lab Wiki under X1 series → Manual. It links the Quick Start Guide for the X1-Carbon Combo and pages on setting up, printing and firmware upgrading.
  - q: Is there a printed Bambu X1 Carbon manual?
    a: Bambu Lab's main documentation is online. The Quick Start Guide is a PDF you can download from the wiki, and the rest of the manual is spread across the wiki's X1 series pages.
  - q: Should I grease the X1 Carbon's carbon rods?
    a: No. Bambu Lab says to clean the X-axis carbon rods with isopropyl alcohol and a lint-free cloth and never to grease them. Only the Z lead screws get grease, about every three months.
  - q: How do I update the X1 Carbon firmware?
    a: Online, the printer shows a pop-up when an update is ready. Offline, you can install it from a FAT32 microSD card, but only from firmware 01.08.02.00 onwards.
sources:
  - name: Bambu Lab Wiki – X1 series
    url: https://wiki.bambulab.com/en/x1
  - name: Bambu Lab Wiki – X1 manual
    url: https://wiki.bambulab.com/x1/manual
  - name: Bambu Lab – Quick Start Guide for X1-Carbon Combo
    url: https://cdn1.bambulab.com/documentation/Quick%20Start%20Guide%20for%20X1-Carbon%20Combo.pdf
  - name: Bambu Lab Wiki – X1 basic maintenance
    url: https://wiki.bambulab.com/en/x1/maintenance/basic-maintenance
  - name: Bambu Lab Wiki – Possible problems in printing
    url: https://wiki.bambulab.com/en/x1/troubleshooting/possible-problems-in-printing
  - name: Bambu Lab Wiki – Nozzle clog
    url: https://wiki.bambulab.com/en/x1/troubleshooting/nozzle-clog
  - name: Bambu Lab Wiki – Firmware upgrading
    url: https://wiki.bambulab.com/en/x1/manual/firmware-upgrading
  - name: Bambu Lab Wiki – X1 firmware update from SD card
    url: https://wiki.bambulab.com/en/x1/manual/X1-firmware-update-from-SD-card
  - name: Bambu Lab – X1 series page
    url: https://bambulab.com/en-us/x1
tools: [3mf-to-stl, stl-viewer, gcode-to-stl]
---
**The official Bambu Lab X1 Carbon manual is published online on the Bambu Lab Wiki under X1 series → Manual, where you can also download the Quick Start Guide for the X1-Carbon Combo as a PDF.** Rather than one long handbook, Bambu Lab spreads the X1C documentation across wiki sections for quick start, features, manuals, troubleshooting, maintenance, part replacement and firmware. This page summarises what it covers in our own words; it does not replace it.

## What the official X1 Carbon documentation covers

The X1 series area of the Bambu Lab Wiki has these sections:

1. **Quick Start** – unboxing and first print, with the Quick Start Guide PDF.
2. **Printer Features** – what each part and function does.
3. **Manuals** – introduction, setting up, printing and firmware upgrading.
4. **Troubleshooting** – print problems and HMS error codes, each with its own page.
5. **Maintenance Guides** – routine care and parts to replace over the printer's life.
6. **Part Replacement Guides** – step-by-step repairs.
7. **Firmware Upgrading** and the X1/X1C firmware release history.

The X1C ships assembled, so there is no kit assembly manual.

## Bambu Lab X1 Carbon key facts

| Item | Detail |
|---|---|
| Build volume | 256 × 256 × 256 mm |
| Max speed / acceleration | 500 mm/s, 20,000 mm/s² |
| Max flow | 32 mm³/s |
| Hotend | All-metal, hardened steel nozzle |
| Camera | 1080p chamber camera |
| Filtration | Activated carbon filter |
| Slicer and app | Bambu Studio, Bambu Handy |

See our [Bambu Lab X1 Carbon page](/printers/bambu-lab-x1-carbon/) for more.

## Quick start: from the box to the first print

- **Unbox:** take out the accessory box and lift the AMS out through the top.
- **Remove transport locks** with the supplied Allen key – the AMS and toolhead locks, packing foam and cardboard, the screen screw and the heatbed screws. Leave the foam under the bed until calibration is done, as the guide says.
- **Install** the screen, the AMS (with its Bambu Bus cables and PTFE tubes) and, if you need it, the external spool holder.
- **Power on**, load at least one spool into the AMS and follow the on-screen initial calibration.
- **First print:** apply a thin layer of glue to the plate and print one of the pre-loaded models from internal storage. Bambu Lab suggests Bambu PLA Basic.

## Maintenance schedule Bambu Lab recommends

| When | What |
|---|---|
| Before every print | Check the nozzle wiper is clean, undamaged and flat |
| Weekly | Clean the extruder gear with compressed air; blow dust out of the hotend and auxiliary fans (power off) |
| Monthly | Clean the X-axis carbon rods and Y/Z rods with IPA – never grease the carbon rods |
| Every 3 months | Clean and grease the Z lead screws; wipe the Y/Z rods with anti-rust oil |
| About every 3 months | Replace the activated carbon filter (monthly for heavy use) |
| Every 3–5 rolls | Check the filament cutter blade (every 1–2 rolls with PA-CF or PA-GF) |

When printing ABS or ASA, Bambu Lab also asks for extra cleaning of the rods, the camera lens and the Micro Lidar window.

## Common problems and fixes

- **PLA lifting from the plate** – apply a thin coat of glue and turn off cooling for the first three layers.
- **PETG lifting** – use glue, turn off cooling for more of the first layers and keep part cooling at 70% or less.
- **Purge waste jams behind the printer** – clear the space at the back and lower the purge speed.
- **Ringing on outer walls** – re-tension the belts, rerun vibration compensation and lower acceleration.
- **Clogged nozzle** – heat and push filament through, then use the unclogging pin, then a hot hex-key pull; replace the nozzle as a last step.
- **HMS error codes** – look up the code on the wiki; each has its own fix page.

## Firmware and software

Online, the X1C checks for updates and shows a pop-up; follow the on-screen steps. Offline, install from a FAT32 microSD card – but only if the printer already runs firmware 01.08.02.00 or later. Do not unzip or rename the package, and do not switch off during the update.

Slice in **Bambu Studio** and monitor with the **Bambu Handy** app; you can also print from the SD card or over the local network. To inspect a project from another slicer, use our [3MF to STL converter](/3mf-to-stl/) or the [G-code to STL tool](/gcode-to-stl/).

## Related pages

Read the [Bambu Lab P1S manual](/printers/bambu-lab-p1s-manual/), the [Bambu Lab 3D printers guide](/printers/bambu-lab-3d-printers/), or compare models in the [printer comparison tool](/printers/compare/).
