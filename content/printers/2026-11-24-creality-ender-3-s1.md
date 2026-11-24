---
shortName: Creality Ender-3 S1
title: Ender 3 S1 – specs, setup, firmware and S1 vs S1 Pro
seoTitle: Ender 3 S1 Specs, Setup, Firmware and S1 vs S1 Pro
description: Creality Ender 3 S1 explained – official specs, Sprite direct-drive extruder, CR Touch levelling, assembly, firmware update by SD card and S1 vs S1 Pro vs S1 Plus.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/d78c6362-d4eb-4863-aa36-31e63179d762/output.png
imageAlt: "Illustration of an open-frame bed-slinger with twin lead screws and a compact direct-drive extruder printing an orange TPU wristband beside a microSD card"
category: Creality
brand: Creality
summary:
  - The Creality Ender-3 S1 is an open-frame printer with a 220 × 220 × 270 mm build volume and a Sprite direct-drive extruder.
  - Creality unveiled it on 1 December 2021 at its 2021 new product launch event.
  - It levels with a CR Touch probe, uses dual Z lead screws and prints from an SD card or USB-C cable.
specs:
  - ["Build volume", "220 × 220 × 270 mm"]
  - ["Max speed", "150 mm/s"]
  - ["Max nozzle temperature", "260 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "Cartesian (moving bed), dual Z lead screws"]
  - ["Enclosure", "Open frame"]
  - ["Nozzle", "0.4 mm"]
  - ["Extruder", "Sprite dual-gear direct drive, 1:3.5 ratio"]
  - ["Filaments", "PLA, PETG, TPU, ABS"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "4.3-inch colour LCD with knob"]
  - ["Connectivity", "SD card, USB-C"]
  - ["Sensors", "CR Touch 16-point auto levelling, filament run-out sensor, power-loss recovery"]
  - ["Size and weight", "487 × 453 × 622 mm; 9.1 kg"]
  - ["Power", "115 / 230 V, 50/60 Hz, 350 W"]
faq:
  - q: What is the Ender 3 S1 build volume?
    a: 220 × 220 × 270 mm – 20 mm taller than the classic Ender-3.
  - q: What is the difference between the Ender 3 S1 and S1 Pro?
    a: The S1 Pro raises the nozzle limit from 260 °C to 300 °C and the bed from 100 °C to 110 °C, and adds a touchscreen, a PEI spring steel plate and an LED light bar. Both use the same Sprite extruder and build volume.
  - q: How do I update the Ender 3 S1 firmware?
    a: Check that the mainboard chip matches the firmware (Creality's S1 firmware is for STM32F401 boards), copy the update folder to an SD card formatted with a 4096 allocation size, insert it with the printer off, power on and wait.
  - q: Does the Ender 3 S1 have Wi-Fi?
    a: No. It prints from an SD card or over a USB-C cable.
sources:
  - name: Creality blog – 2021 new product launch (Ender-3 S1 unveiled)
    url: https://www.creality.com/blog/grant-opening-creality-2021-new-product-launch-and-ecosystem-conference
  - name: Creality – Ender-3 S1 product page
    url: https://www.creality.com/es/products/ender-3s1
  - name: Creality – Ender-3 S1 datasheet (via ELV)
    url: https://media.elv.com/file/252630_data.pdf
  - name: Creality blog – Differences of Ender-3 S1, S1 Pro and S1 Plus
    url: https://www.creality.com/blog/the-differences-of-ender-3-s1-ender-3-s1-pro-ender-3-s1-plus
  - name: Creality – Ender-3 S1 quick start guide (via Farnell)
    url: https://www.farnell.com/datasheets/3723317.pdf
  - name: Creality – Ender-3 S1 download page
    url: https://www.creality.com/download/creality-ender-3-s1-3d-printer
  - name: Creality Cloud – firmware downloads and update steps
    url: https://www.crealitycloud.com/software-firmware/firmware?type=2
  - name: Tom's Hardware – Creality Ender-3 S1 review
    url: https://www.tomshardware.com/uk/reviews/creality-ender-3-s1-review
  - name: B&H – Creality Ender-3 S1 specifications
    url: https://www.bhphotovideo.com/c/product/1705447-REG/creality_ender_3si_ender_3_s1_fdm_3d.html
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Ender 3 S1 is Creality's open-frame 3D printer with a 220 × 220 × 270 mm build volume, a Sprite direct-drive extruder, CR Touch auto levelling and dual Z lead screws.** Creality unveiled it on 1 December 2021. It sits between the classic Ender-3 and the newer V3 models in the [Creality Ender range](/printers/creality-ender-3d-printers/).

## Ender 3 S1 at a glance

| Item | Detail |
|---|---|
| Build volume | 220 × 220 × 270 mm |
| Max speed | 150 mm/s |
| Nozzle / bed | 260 °C / 100 °C |
| Extruder | Sprite direct drive |
| Levelling | CR Touch, 16 points |
| Connectivity | SD card, USB-C |
| Weight | 9.1 kg |

## Who the Ender 3 S1 suits

The S1 suits beginners and tinkerers who want an affordable, upgradable bed-slinger that handles flexible TPU well thanks to its direct-drive extruder. It is slower than modern CoreXY printers and has no Wi-Fi or camera; if speed matters, look at the [Ender-3 V3 SE](/printers/creality-ender-3-v3-se/) or [Ender-3 V3](/printers/creality-ender-3-v3/).

## Key features

- **Sprite extruder:** dual-gear direct drive with a 1:3.5 gear ratio and up to 80 N of push force, according to Creality.
- **Dual Z axis:** two lead screws and two motors keep the gantry level.
- **Build plate:** removable PC-coated spring steel sheet on a magnetic base.
- **Mainboard:** 32-bit silent board.
- **Extras:** ports for an LED light and a laser engraving module.

## Ender 3 S1 vs S1 Pro vs S1 Plus

| | Ender-3 S1 | Ender-3 S1 Pro | Ender-3 S1 Plus |
|---|---|---|---|
| Build volume | 220 × 220 × 270 mm | 220 × 220 × 270 mm | 300 × 300 × 300 mm |
| Nozzle / bed | 260 / 100 °C | 300 / 110 °C | 260 / 100 °C |
| Screen | LCD with knob | Touchscreen | Touchscreen |
| Plate | PC spring steel | PEI spring steel | PC spring steel |
| Extruder | Sprite | Sprite | Sprite |

## Setting up the Ender 3 S1

Creality says the S1 comes 96% pre-assembled. The quick start guide covers:

1. Mounting the Sprite extruder assembly on the X carriage with four screws.
2. Fitting the gantry into the base with M5×45 screws.
3. Attaching the display bracket and screen, then the spool holder.
4. Connecting the cables and setting the voltage switch (115 V or 230 V) to match your mains.
5. Powering on, running auto levelling and setting the Z offset.
6. Printing a test G-code file from the SD card.

## Connecting the Ender 3 S1

Copy sliced G-code to the **SD card**, or print over a **USB-C** cable from a computer. There is no built-in network connection.

## Ender 3 S1 manual

Creality publishes the Ender-3 S1 user manual on the Ender-3 S1 download page in the Download Center on its website, alongside firmware and Creality Print. A printed quick start guide comes in the box.

## Firmware and software

Creality's S1 firmware is built for STM32F401 mainboards, so check the chip first. Format an SD card with a 4096 allocation unit size, copy the update folder to it, insert it with the printer off, then switch on and wait for the update to finish. The screen firmware is updated separately. Slice in **Creality Print**; check a sliced file in our [G-code to STL tool](/gcode-to-stl/) before printing.

## Compare the Ender 3 S1

Compare the S1 with other open-frame printers in our [printer comparison tool](/printers/compare/).
