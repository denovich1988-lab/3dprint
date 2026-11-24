---
title: Ender 3 S1 manual – where to find it and what it covers
seoTitle: Ender 3 S1 Manual – Where to Find It and Quick Start
description: Where to find the official Creality Ender 3 S1 manual, what it covers, assembly, CR Touch levelling, first print, maintenance, common fixes and firmware updates.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/bf81e55f-f53b-4db2-a6e9-f64015033dbe/output.png
imageAlt: "Illustration of a close-up of a direct-drive extruder and a small touch probe above a black textured bed while a hand turns a large levelling knob, with paper under the nozzle and an SD card on the bench"
category: Manuals
brand: Creality
summary:
  - Creality publishes the Ender 3 S1 user manual in the Ender-3 S1 section of its Download Center, next to the firmware and Creality Print.
  - The quick installation guide covers the parts list, assembly of the gantry and screen, wiring, CR Touch auto levelling, auxiliary levelling, loading filament and the first print.
  - The Ender 3 S1 has a 220 × 220 × 270 mm build volume, a Sprite direct-drive extruder and 16-point CR Touch levelling.
faq:
  - q: Where can I find the Creality Ender 3 S1 manual?
    a: In the Ender-3 S1 section of the Creality Download Center (Support → Download Center), which lists the Ender-3 S1 user manual together with the firmware and the Creality Print slicer.
  - q: What do I do if CR Touch levelling fails on the Ender 3 S1?
    a: The guide says CR Touch levelling fails if the bed is tilted by more than about 2 mm. Use auxiliary levelling first – adjust the four knobs under the bed – then run auto levelling again.
  - q: How do I update the Ender 3 S1 firmware?
    a: Check which chip your mainboard uses, download the matching firmware from Creality, copy it to a formatted SD card, insert the card with the printer off and switch it on. The screen firmware is updated separately.
sources:
  - name: Creality – Ender-3 S1 download center
    url: https://www.creality.com/pages/download-ender-3-s1
  - name: Creality – Ender-3 S1 quick installation guide V1.1 (copy)
    url: https://www.farnell.com/datasheets/3723317.pdf
  - name: Creality store – Ender-3 S1 common troubleshooting
    url: https://store.creality.com/de/blogs/tutorial/ender-3-s1-common-troubleshooting
  - name: Creality – Ender-3S1 firmware source on GitHub
    url: https://github.com/CrealityOfficial/Ender-3S1
  - name: Creality Cloud – Firmware
    url: https://www.crealitycloud.com/software-firmware/firmware?type=2
  - name: B&H – Creality Ender-3 S1
    url: https://www.bhphotovideo.com/c/product/1705447-REG/creality_ender_3si_ender_3_s1_fdm_3d.html
  - name: Tom's Hardware – Creality Ender 3 S1 review
    url: https://www.tomshardware.com/reviews/creality-ender-3-s1-review
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The official Creality Ender 3 S1 manual is in the Ender-3 S1 section of the Creality Download Center, listed with the printer's firmware and the Creality Print slicer.** A printed quick installation guide also comes in the box. This page summarises the Ender 3 S1 manual in our own words; it does not replace it.

## What the official Ender 3 S1 manual covers

The Ender 3 S1 quick installation guide is organised in these parts:

1. **Notes** – safety instructions.
2. **Parts list and tools.**
3. **Interface descriptions** – ports and the screen.
4. **Installation** – nozzle kit and wire clamp, gantry frame, display, material rack and wiring.
5. **Auto levelling** with the CR Touch.
6. **Auxiliary levelling** with the bed knobs.
7. **Loading filament.**
8. **First print.**
9. **Equipment introduction** – the printer's parts and menus.

## Ender 3 S1 key specs

| Item | Value |
|---|---|
| Build volume | 220 × 220 × 270 mm |
| Nozzle / bed | 260 °C / 100 °C |
| Max speed | 150 mm/s |
| Extruder | Sprite direct drive, dual metal gears |
| Levelling | CR Touch, 16 points |
| Screen | 4.3-inch colour screen with control knob |
| Plate | PC-coated spring steel, magnetic |
| Extras | Dual Z axis, filament run-out sensor, power-loss resume |

For the full printer overview, see our [Creality Ender 3 S1 page](/printers/creality-ender-3-s1/).

## Ender 3 S1 quick-start summary

1. **Unbox and assemble** – fit the gantry frame to the base, then the display and material rack, and connect the cables as shown in the guide.
2. **Set the voltage switch** to 115 V or 230 V to match your mains supply.
3. **Level** – choose **Level** on the screen, then set the Z-offset with a sheet of A4 paper until it drags lightly (the guide gives 0.08–0.1 mm).
4. **Auxiliary levelling if needed** – if the bed is tilted by more than about 2 mm, CR Touch levelling fails; turn the four knobs under the bed first.
5. **Load filament** – cut the tip at 45° and feed it through the run-out sensor into the extruder.
6. **First print** – slice a model in Creality Print, save it to the card and start it from the screen. Use only Latin letters and numbers in file names.

**Tip:** if the screen does not show your file, rename it without spaces or special characters – the guide limits file names to letters and numbers.

## Maintenance schedule

| When | What Creality recommends |
|---|---|
| Before each print | Clean the bed with glass cleaner or isopropyl alcohol |
| Regularly | Power off and wipe the frame, rails and wheels with a dry cloth; clean the fan blades; lubricate the lead screws; check screws and eccentric nuts |
| Every 3–6 months | Clean the nozzle throat |

## Common Ender 3 S1 problems and fixes

| Problem | Fix |
|---|---|
| An axis binds, or the bed or nozzle kit wobbles | Adjust the V-wheels with the eccentric nuts |
| Uneven Z movement | Adjust the lead screw nut |
| Filament does not feed | Check the extruder gear and look for a clog |
| Temperature fluctuates | Reseat the thermistor cable |
| SD card not read | Format the card or clean the slot |
| Warping | Bed at 50–60 °C, use an adhesive and re-level |

## Firmware and software

The Ender 3 S1 firmware is based on Marlin 2.0, and Creality publishes its source on GitHub. Before updating, check which chip your mainboard uses and download the matching file from the Download Center. In outline, the mainboard update is: format an SD card (Creality specifies a 4096-byte allocation unit), copy the firmware folder to it, insert it with the printer off, switch on and wait for the update to finish. The touchscreen has separate firmware, installed from a card in the screen. Always follow the instructions included with the version you download. Slice in **Creality Print**, and check sliced files with our [G-code to STL tool](/gcode-to-stl/).

## Related pages

See our [Ender 3 S1 Pro manual guide](/printers/ender-3-s1-pro-manual/) if you have the Pro, or compare the S1 with other printers in the [printer comparison tool](/printers/compare/).
