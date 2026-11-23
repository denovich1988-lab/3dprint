---
shortName: Flashforge AD5X
title: Flashforge AD5X – specs, multi-colour IFS and setup
seoTitle: Flashforge AD5X 3D Printer – Specs, IFS and Setup
description: Flashforge AD5X explained – official specs of the four-colour CoreXY printer, the built-in IFS, launch price, filaments, first setup, connection and slicer.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/b5e2a003-fee9-4145-b70c-38a7d2a507db/output.png
imageAlt: "Illustration of a compact open-frame CoreXY 3D printer with four side-mounted spools printing a four-colour flower pot"
category: Flashforge
brand: Flashforge
summary:
  - The Flashforge AD5X is an open-frame CoreXY printer with a 220 × 220 × 220 mm build volume and built-in four-colour IFS.
  - It was announced in late 2024 at a launch price of US$399.
  - Flashforge lists 600 mm/s travel speed, 20,000 mm/s², a 300 °C nozzle and a 110 °C bed.
specs:
  - ["Build volume", "220 × 220 × 220 mm"]
  - ["Max speed", "600 mm/s"]
  - ["Max acceleration", "20,000 mm/s²"]
  - ["Max nozzle temperature", "300 °C"]
  - ["Max bed temperature", "110 °C"]
  - ["Motion system", "CoreXY, belt-driven triple Z lead screws"]
  - ["Enclosure", "Open frame"]
  - ["Multi-colour", "Built-in IFS, 4 colours"]
  - ["Nozzle", "0.4 mm quick-release (0.25, 0.6, 0.8 mm optional)"]
  - ["Extruder", "Direct drive"]
  - ["Filaments", "PLA, PETG, TPU 95A (single colour), TPU 64D–75D, PLA-CF, PETG-CF"]
  - ["Screen", "4.3-inch colour touchscreen"]
  - ["Connectivity", "Dual-band Wi-Fi, Ethernet, USB drive"]
  - ["Sensors", "Pressure-sensor auto levelling, filament run-out detection"]
  - ["Size and weight", "363 × 402 × 448 mm; 11.4 kg"]
  - ["Power", "100–240 V, 650 W"]
faq:
  - q: What is the Flashforge AD5X?
    a: A compact CoreXY 3D printer with a built-in four-colour Intelligent Filament System (IFS). The spools hang on the side of the printer, so no separate filament box is needed.
  - q: Does the Flashforge AD5X have a camera or enclosure?
    a: Not in the box. Flashforge lists remote camera monitoring as an add-on and sells a separate DIY enclosure kit.
  - q: Can the Flashforge AD5X print TPU?
    a: Flashforge lists TPU 95A for single-colour printing only, plus harder TPU 64D–75D. Soft TPU does not run through multi-colour swaps.
  - q: How much did the Flashforge AD5X cost at launch?
    a: It was announced in late 2024 at an introductory price of US$399 in the US.
sources:
  - name: Flashforge – AD5X product page
    url: https://www.flashforge.com/products/flashforge-ad5x-multicolor-3d-printer
  - name: Flashforge docs – Introduction to AD5X
    url: https://www.flashforge.com/a/docs/preview/layout_1/ad5x/introduction-to-ad5x
  - name: Flashforge docs – AD5X quick-start guide
    url: https://www.flashforge.com/a/docs/ad5x/quick-start-guide-for-your-ad5x
  - name: Flashforge docs – AD5X firmware upgrade
    url: https://flashforge.com/pt/a/docs/ad5x/ad5x-firmware-upgrade
  - name: Flashforge blog – AD5X upgrades
    url: https://flashforge.com/blogs/news/flashforge-ad5x-four-major-upgrades-redefining-desktop-3d-printing
  - name: Tom's Hardware – Flashforge AD5X review
    url: https://www.tomshardware.com/3d-printing/flashforge-ad5x-review
  - name: Pro Tool Reviews – Flashforge AD5X review
    url: https://www.protoolreviews.com/flashforge-ad5x-3d-printer-review/
  - name: Top3DShop – Flashforge AD5X
    url: https://top3dshop.com/product/flashforge-ad5x-3d-printer
  - name: Fabbaloo – Flashforge AD5X introduction
    url: https://fabbaloo.com/?p=227326
  - name: All3DP – Flashforge's US$399 multicolor printer now available
    url: https://all3dp.com/4/flashforges-399-multicolor-3d-printer-is-now-available/
tools: [3mf-to-stl, stl-viewer, 3mf-viewer]
---
**The Flashforge AD5X is a compact open-frame CoreXY 3D printer with a 220 × 220 × 220 mm build volume and a built-in four-colour IFS (Intelligent Filament System).** It was announced in late 2024 at a launch price of US$399 in the US. The spools mount on the side of the printer, so there is no separate filament box on the desk.

## Who the Flashforge AD5X suits

The AD5X suits beginners and hobbyists who want four-colour printing at a low cost in a small footprint. It is built for PLA, PETG and TPU. With no enclosure or air filter as standard, it is not aimed at ABS or ASA.

## The IFS multi-colour system

- **Four colours** fed from side-mounted spools into one direct-drive extruder.
- **Automatic loading:** push PLA into the feed rollers and the IFS loads it.
- **Auto refill:** during a single-colour print it switches to the next spool when one runs out.
- **TPU limit:** soft TPU 95A works for single-colour prints only.

## Flashforge AD5X speed and hardware

Flashforge lists 600 mm/s travel speed (300 mm/s maximum print speed) and 20,000 mm/s² acceleration. The quick-release nozzle comes off without tools and is available in 0.25, 0.4, 0.6 and 0.8 mm. The bed is a flexible PEI steel plate, and power-loss recovery is built in.

## First setup

Flashforge's quick-start guide runs like this:

1. Remove the bed nuts used for shipping.
2. Plug in, switch on, choose your language and go through the intro.
3. Connect to Wi-Fi and, if you like, bind the printer in the Flash Maker app by scanning the QR code.
4. Let the first calibration run: homing, heating, 25-point bed levelling and a vibration test.
5. Load PLA into the IFS and set the type and colour for each channel.
6. Print the built-in test model.

**Tip:** levelling is fully automatic with a pressure sensor, and there is no manual Z offset to set.

## Connecting the AD5X

The AD5X has dual-band Wi-Fi and Ethernet. Use the Flash Maker app for remote control, send jobs over the network from Orca-Flashforge, or print from a USB drive at the machine.

## Manual, firmware and slicer

The manual is on the Flashforge support site in the AD5X documentation, with pages for unboxing, quick start, connecting the IFS, firmware and multi-colour printing. Firmware updates arrive over the air – the printer asks before installing – and the IFS firmware is updated separately under Device info. The slicer is Orca-Flashforge, and OrcaSlicer works too. Preview multi-colour files in our [3MF viewer](/3mf-viewer/).

## Compare the Flashforge AD5X

Compare it with the [Flashforge Adventurer 5M](/printers/flashforge-adventurer-5m/), the [Bambu Lab A1](/printers/bambu-lab-a1/) and other printers in our [printer comparison tool](/printers/compare/).
