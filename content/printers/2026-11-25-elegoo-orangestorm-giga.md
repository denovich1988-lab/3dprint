---
shortName: Elegoo OrangeStorm Giga
title: Elegoo OrangeStorm Giga – specs, size, setup and who it suits
seoTitle: Elegoo OrangeStorm Giga – Specs, Size and Setup
description: Elegoo OrangeStorm Giga explained – 800 × 800 × 1000 mm build volume, four-zone heated bed, up to four print heads, Klipper, setup, connections and slicer.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/b27d03bb-3459-4368-8da0-76b03f0b86f3/output.png
imageAlt: "Illustration of a huge open-frame printer taller than a door in a spacious workshop, four print heads on one gantry printing four large orange vases at once on a four-section bed"
category: Elegoo
brand: Elegoo
summary:
  - The Elegoo OrangeStorm Giga is a large-format FDM printer with an 800 × 800 × 1000 mm build volume and four independently heated bed plates.
  - It runs Klipper firmware, prints at up to 300 mm/s and can carry up to four print heads that print copies at the same time.
  - Elegoo launched it on Kickstarter in November 2023 and the retail version followed in 2024 at about US$2,499.
specs:
  - ["Build volume", "800 × 800 × 1000 mm"]
  - ["Max speed", "300 mm/s (150 mm/s recommended)"]
  - ["Max acceleration", "5,000 mm/s²"]
  - ["Max nozzle temperature", "300 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "Cartesian, linear guides on X and Y"]
  - ["Enclosure", "Open frame"]
  - ["Nozzle", "0.6 mm brass (0.4, 0.8 and 1.0 mm optional)"]
  - ["Extruder", "Dual-gear direct drive, titanium heat break"]
  - ["Filaments", "PLA, PETG, TPU"]
  - ["Filament diameter", "1.75 mm"]
  - ["Connectivity", "Wi-Fi, LAN, USB drive"]
  - ["Sensors", "100-point auto levelling, filament runout, accelerometer, power-loss recovery"]
  - ["Size and weight", "1224 × 1164 × 1425 mm; 104 kg"]
  - ["Power", "1530 W (one print head)"]
faq:
  - q: How big is the Elegoo OrangeStorm Giga build volume?
    a: 800 × 800 × 1000 mm, according to Elegoo. The bed is made of four 410 × 410 mm heated PEI plates.
  - q: Can the OrangeStorm Giga print with several nozzles at once?
    a: Yes. It supports up to four print heads that print at the same time, for example four copies of one part. Each extra head adds about 100 W.
  - q: What firmware does the OrangeStorm Giga use?
    a: Klipper, running on a quad-core controller with a touchscreen.
  - q: How much space does the OrangeStorm Giga need?
    a: The machine measures 1224 × 1164 × 1425 mm and weighs 104 kg, and Elegoo lists a larger working footprint of 1224 × 1520 × 1570 mm.
sources:
  - name: Elegoo – OrangeStorm Giga product page
    url: https://us.elegoo.com/products/orangestorm-giga
  - name: Elegoo – OrangeStorm Giga FAQ
    url: https://us.elegoo.com/blogs/3d-printer-user-guide/elegoo-orangestorm-giga-frequently-asked-questions
  - name: Elegoo OrangeStorm Giga user manual V1.0 (copy)
    url: https://manuals.plus/m/48eec34e6a03d42379b5e230ec1e1f89bfab6e39198bcde3b0bb118c77a5b883
  - name: Tom's Hardware – Elegoo OrangeStorm Giga review
    url: https://www.tomshardware.com/3d-printing/elegoo-orange-storm-giga-review
  - name: CNX Software – Elegoo OrangeStorm Giga
    url: https://www.cnx-software.com/2023/11/24/elegoo-orangestorm-giga-enormous-3d-printer-four-nozzles/
  - name: Hackster – OrangeStorm Giga on Kickstarter
    url: https://hackster.io/news/elegoo-unveils-the-orangestorm-giga-a-game-changing-3d-printing-innovation-on-kickstarter-62f0e1b43c4e
tools: [stl-viewer, 3d-viewer, gcode-to-stl]
---
**The Elegoo OrangeStorm Giga is a large-format open-frame FDM 3D printer with an 800 × 800 × 1000 mm build volume, a four-zone heated bed and support for up to four print heads printing at once.** Elegoo launched it on Kickstarter on 4 November 2023 with early-bird pledges from US$1,250. After a pause to fix firmware and hardware issues, the retail version arrived in 2024 at about US$2,499 (US). This page covers its specs, space needs, setup, connections and software.

## OrangeStorm Giga at a glance

| Item | Detail |
|---|---|
| Build volume | 800 × 800 × 1000 mm |
| Heated bed | Four 410 × 410 mm PEI plates, heated separately, up to 100 °C |
| Speed / acceleration | 300 mm/s (150 recommended), 5,000 mm/s² |
| Hotend | 300 °C, 0.6 mm nozzle as standard |
| Print heads | 1 as standard, up to 4 printing together |
| Firmware | Klipper |
| Footprint | 1224 × 1164 × 1425 mm, 104 kg |
| Launch | Kickstarter, November 2023 |

## The four-zone heated bed

The 820 × 820 mm bed is split into four 410 × 410 mm plates that heat independently. For a small part you heat only the plate you use, which saves energy and time. For a full-size print, all four heat together.

**Tip:** a 1-metre print can take days. Check the model for errors in our [3D model viewer](/3d-viewer/) before you commit that much filament.

## Printing with several heads

The Giga can carry up to four print heads on the gantry. They print at the same time, which suits batch work such as four copies of one part. Each extra head adds about 100 W to the power draw.

## Who the OrangeStorm Giga suits

It suits makers, prop and cosplay builders, small workshops and schools that print furniture-sized parts in one piece. It is not a desk printer: it weighs 104 kg, needs a large floor area and ships as a kit that most owners assemble with two people. It prints PLA, PETG and TPU; there is no enclosure for ABS.

## Setting up the OrangeStorm Giga

Elegoo ships most working parts pre-assembled. Following the official manual, at a high level:

1. Unpack the frame parts and assemble them on a level floor.
2. Fit the print head, the detachable touchscreen and the 5 kg spool holder.
3. Connect the cables and set the voltage for your mains supply.
4. Power on and run the 100-point automatic levelling.
5. Load filament and start a test print.

## Connecting the OrangeStorm Giga

The printer joins **Wi-Fi** or **LAN** and prints from a **USB drive**. Because it runs Klipper, you can also manage it from a web browser on your network.

## Manual, firmware and slicer

Elegoo lists the OrangeStorm Giga user manual and firmware in the Download Center on elegoo.com. The manual covers safety notes, troubleshooting, machine parameters, the component diagram, the packing list and installation. The printer runs Elegoo's Klipper build; check the release notes before updating.

The manual names **Elegoo Cura** as the slicer, and the touchscreen shows Cura model previews. To check a sliced file, use our [G-code to STL tool](/gcode-to-stl/).

## Compare the OrangeStorm Giga

See Elegoo's other printers in our [Elegoo 3D printers guide](/printers/elegoo-3d-printers/), or compare build volumes in the [printer comparison tool](/printers/compare/).
