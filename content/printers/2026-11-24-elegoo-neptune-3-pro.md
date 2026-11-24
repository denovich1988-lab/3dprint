---
shortName: Elegoo Neptune 3 Pro
title: Elegoo Neptune 3 Pro – specs, setup, levelling and firmware
seoTitle: Elegoo Neptune 3 Pro Specs, Setup and Firmware Update
description: Elegoo Neptune 3 Pro explained – official specs, 36-point auto levelling, first setup, Z-offset, ELEGOO Cura, where the user guide is and how to update firmware.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/6781f577-29b4-4738-b5f6-8b2380d3b052/output.png
imageAlt: "Illustration of an open-frame bed-slinger with twin lead screws, an LED bar and a detachable touchscreen probing a grid of 36 glowing dots on a gold sheet"
category: Elegoo
brand: Elegoo
summary:
  - The Elegoo Neptune 3 Pro is an open-frame bed-slinger with a 225 × 225 × 280 mm build volume and a direct-drive extruder.
  - It levels itself with a 36-point inductive sensor and has dual Z lead screws driven by two motors.
  - Elegoo launched it in November 2022 at a launch price of US$230 (US).
specs:
  - ["Build volume", "225 × 225 × 280 mm"]
  - ["Max nozzle temperature", "260 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "Cartesian bed-slinger, dual Z lead screws with dual motors"]
  - ["Enclosure", "Open frame"]
  - ["Multi-colour", "No"]
  - ["Nozzle", "0.4 mm"]
  - ["Extruder", "Dual-gear direct drive, 3:1 reduction, titanium-alloy throat"]
  - ["Filaments", "PLA, TPU, PETG, ABS, ASA"]
  - ["Screen", "Removable 4.3-inch touchscreen"]
  - ["Connectivity", "microSD (TF) card, USB cable"]
  - ["Sensors", "36-point inductive auto levelling, filament run-out sensor, power-loss recovery"]
  - ["Size and weight", "475 × 445 × 515 mm; 8.1 kg"]
  - ["Power", "100–120 V / 220–240 V"]
faq:
  - q: What is the Elegoo Neptune 3 Pro build volume?
    a: 225 × 225 × 280 mm, on a 235 × 235 mm PEI spring-steel plate.
  - q: How do you level the Neptune 3 Pro?
    a: Run auto levelling from the screen; the inductive sensor probes 36 points on the metal plate. Then set the Z-offset. Elegoo notes that a Z-offset changed during a print is not saved, so re-run levelling and save it from the levelling screen.
  - q: How do I update the Neptune 3 Pro firmware?
    a: Copy the mainboard file to the root of a FAT32 microSD card of 32 GB or less, insert it and restart. The screen has its own firmware, loaded from a card slot behind its back cover. Keep both versions matched and re-level afterwards.
  - q: What slicer does the Neptune 3 Pro use?
    a: Elegoo supplies ELEGOO Cura with ready-made Neptune 3 Pro profiles.
sources:
  - name: Elegoo – Neptune 3 Pro product page
    url: https://www.elegoo.com/en-gb/collections/3d-printing/products/elegoo-neptune-3-pro-fdm-3d-printer-225x225x280mm
  - name: Elegoo blog – Introducing the Neptune 3 Pro (23 November 2022)
    url: https://www.elegoo.com/blogs/news/introduce-elegoo-neptune-3-pro-fdm-3d-printer
  - name: Elegoo – Neptune 3 Pro/Plus/Max support files
    url: https://us.elegoo.com/blogs/3d-printing/elegoo-neptune-3-pro-plus-max-fdm-3d-printer-support-files
  - name: Elegoo – Neptune 3 Pro/Plus/Max FAQ
    url: https://us.elegoo.com/blogs/3d-printer-user-guide/faqs-for-neptune3-pro-plus-max
  - name: Elegoo – Neptune 3 Pro/Plus/Max firmware readme
    url: https://github.com/NARUTOfzr/Neptune_3_Pro_Plus_Max/blob/main/README-en.md
  - name: Tom's Hardware – Elegoo Neptune 3 Pro review
    url: https://www.tomshardware.com/reviews/elegoo-neptune-3-pro
  - name: All3DP – Elegoo Neptune 3 series announcement
    url: https://all3dp.com/4/elegoo-new-neptune-3-series-3d-printer-announcement/
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Elegoo Neptune 3 Pro is an open-frame bed-slinger 3D printer with a 225 × 225 × 280 mm build volume, a direct-drive extruder and 36-point automatic bed levelling.** Elegoo launched it in November 2022 at a launch price of US$230 in the US. It is a budget printer for PLA, PETG and TPU that arrives mostly assembled.

## Elegoo Neptune 3 Pro at a glance

| Item | Detail |
|---|---|
| Build volume | 225 × 225 × 280 mm |
| Nozzle / bed | 260 °C / 100 °C |
| Frame | Open, aluminium extrusion, dual Z screws |
| Extruder | Dual-gear direct drive |
| Levelling | 36-point inductive sensor |
| Screen | Removable 4.3-inch touchscreen |
| Connectivity | microSD card, USB |
| Weight | 8.1 kg |

## Who the Neptune 3 Pro suits

It suits beginners and hobbyists who want a low-cost printer with a direct-drive extruder (good for flexible TPU) and automatic levelling. It has no Wi-Fi, camera or enclosure, so files go in by microSD card. Elegoo lists PLA, TPU, PETG, ABS and ASA, but ABS and ASA are harder to print without an enclosure.

## Neptune 3 Pro features

- **Dual Z axis:** two lead screws and two motors keep the gantry level.
- **Direct-drive extruder:** stainless steel dual gears with a 3:1 reduction.
- **PEI spring-steel plate:** magnetic and flexible, so prints pop off.
- **Silent drivers and smart fans:** Elegoo says the fans stop when the hot end cools below 50 °C.
- **LED light bar** on the gantry and a filament run-out sensor.

## Setting up the Neptune 3 Pro

1. Unpack the printer; the main parts come pre-assembled and Elegoo includes the tools.
2. Mount the touchscreen on its bracket and connect its cable.
3. Check the voltage setting for your region, then power on.
4. Run **auto levelling** from the screen with the steel plate in place – the inductive sensor only detects the metal plate.
5. Set the **Z-offset** and save it. Elegoo suggests re-levelling about once a week, or after changing bed temperature or filament.
6. Load filament through the run-out sensor and print a test file from the microSD card.

**Tip:** if your first layer is too squashed or too thin, adjust the Z-offset in small steps rather than re-tightening anything.

## Connecting the Neptune 3 Pro

There is no Wi-Fi. Slice on your computer, copy the G-code to the **microSD card** and print from the screen, or connect a computer by **USB cable**. To check a sliced file before printing, open it in our [G-code to STL tool](/gcode-to-stl/).

## Neptune 3 Pro manual

Elegoo publishes the Neptune 3 Pro user guide on its website, on the Neptune 3 Pro/Plus/Max support files page and in the ELEGOO Download Center. The same page links the firmware and ELEGOO Cura.

## Firmware and software

To update, format a microSD card of 32 GB or less as FAT32. Copy the mainboard firmware to the root, insert it and restart; the printer loads it in about 15 seconds. The screen firmware goes on a card inserted behind the screen's back cover. Keep mainboard and screen versions matched, and level again afterwards because flashing resets levelling. Slice in **ELEGOO Cura**, which includes Neptune 3 Pro profiles and screen thumbnails.

## Compare the Neptune 3 Pro

See how it stacks up against newer enclosed printers such as the [Elegoo Centauri Carbon](/printers/elegoo-centauri-carbon/) in our [printer comparison tool](/printers/compare/).
