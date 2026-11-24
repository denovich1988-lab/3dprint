---
shortName: Elegoo Neptune 4
title: Elegoo Neptune 4 – specs, setup, Klipper and firmware
seoTitle: Elegoo Neptune 4 Specs, Setup, Klipper and Firmware
description: Elegoo Neptune 4 explained – 225 × 225 × 265 mm build volume, 500 mm/s Klipper speed, auto levelling, setup steps, LAN printing, manual and firmware.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/114fd541-261d-43da-98b8-9027993fe26f/output.png
imageAlt: "Illustration of a compact open-frame bed-slinger printer with a dark bed and a small touchscreen printing an orange phone stand on a tidy desk beside a USB stick and an ethernet cable"
category: Elegoo
brand: Elegoo
summary:
  - The Elegoo Neptune 4 is a compact open-frame bed-slinger with a 225 × 225 × 265 mm build volume and Klipper firmware pre-installed.
  - Elegoo rates it at up to 500 mm/s with a 300 °C nozzle, a 110 °C bed and a 5.2:1 dual-gear direct extruder.
  - It was announced in May 2023 with a US launch price of $259.
specs:
  - ["Build volume", "225 × 225 × 265 mm"]
  - ["Max speed", "500 mm/s"]
  - ["Max acceleration", "20,000 mm/s²"]
  - ["Max nozzle temperature", "300 °C"]
  - ["Max bed temperature", "110 °C"]
  - ["Motion system", "Cartesian bed-slinger, Klipper firmware"]
  - ["Enclosure", "Open frame"]
  - ["Nozzle", "0.4 mm"]
  - ["Extruder", "Dual-gear direct drive, 5.2:1 reduction"]
  - ["Filaments", "PLA, TPU, PETG, ABS, ASA, nylon"]
  - ["Screen", "Removable touchscreen"]
  - ["Connectivity", "LAN, USB drive"]
  - ["Sensors", "Auto bed levelling (36 or 121 points), filament run-out, power-loss resume"]
  - ["Size and weight", "475 × 445 × 515 mm; 8.3 kg"]
  - ["Power", "115 V / 230 V, 50/60 Hz"]
faq:
  - q: What is the Elegoo Neptune 4 build volume?
    a: 225 × 225 × 265 mm, on a 235 × 235 mm PEI spring steel platform.
  - q: Does the Elegoo Neptune 4 have Wi-Fi?
    a: No. The base Neptune 4 connects over wired LAN, where you control it through the Klipper web interface, and it also prints from a USB drive.
  - q: How fast is the Neptune 4 in real use?
    a: Elegoo lists a maximum of 500 mm/s, while the Elegoo Cura profiles default to 250 mm/s. Tom's Hardware found the shipped configuration limited acceleration to 5,000 mm/s², below the 20,000 mm/s² on the spec sheet.
  - q: Can the Neptune 4 print ABS?
    a: Elegoo lists ABS and ASA, but recommends an enclosure for them because the printer has an open frame.
sources:
  - name: Elegoo – Neptune 4 product page
    url: https://www.elegoo.com/collections/filaments/products/elegoo-neptune-4-fdm-3d-printer
  - name: Elegoo Wiki – Motherboard and touch screen firmware update
    url: https://wiki.elegoo.com/neptune/motherborad-and-touch-screen-firmware-update
  - name: Elegoo – Neptune 4 user manual V1.6 (copy)
    url: https://manuals.plus/m/3d82247559398a3f2f94562928189bffa9da2acfc1fa9de0d0e6773ea9a6a73c
  - name: Tom's Hardware – Elegoo Saturn 3 and Neptune 4 preorders
    url: https://www.tomshardware.com/news/elegoo-saturn-3-and-neptune-4-preorder-soon
  - name: Tom's Hardware – Elegoo Neptune 4 review
    url: https://www.tomshardware.com/reviews/elegoo-neptune-4
  - name: 3DSourced – Elegoo Neptune 4 series starting at $259
    url: https://www.3dsourced.com/news/elegoo-release-new-neptune-4-series-starting-at-259/
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Elegoo Neptune 4 is a compact open-frame bed-slinger 3D printer with a 225 × 225 × 265 mm build volume, pre-installed Klipper firmware and a rated top speed of 500 mm/s.** Elegoo announced it in May 2023 and opened pre-orders in June 2023 at a US launch price of $259. It is the base model of the Neptune 4 series, below the Neptune 4 Pro, Plus and Max.

## Elegoo Neptune 4 at a glance

| Item | Detail |
|---|---|
| Build volume | 225 × 225 × 265 mm |
| Speed / acceleration | 500 mm/s / 20,000 mm/s² (rated) |
| Nozzle / bed | 300 °C / 110 °C |
| Firmware | Klipper (Elegoo build) |
| Extruder | Dual-gear direct drive, 5.2:1 |
| Levelling | 36-point auto levelling, 121-point option |
| Connectivity | LAN, USB drive |
| Weight | 8.3 kg |

## Who the Neptune 4 suits

It suits beginners and hobbyists who want Klipper-level speed on a budget and print mostly PLA, PETG and TPU. It is an open-frame machine with a moving bed, so it needs some depth on the desk and an enclosure if you want to print ABS or ASA. If you need a bigger bed, the [Elegoo Neptune 4 Max](/printers/elegoo-neptune-4-max/) offers 420 × 420 × 480 mm.

## Neptune 4 features

- **Klipper firmware** with input shaping and pressure advance, running on a 1.5 GHz quad-core board.
- **Dual-gear direct extruder** with a 5.2:1 reduction and a copper-titanium heatbreak for nozzle temperatures up to 300 °C.
- **Automatic bed levelling** – 36 points by default, with a 121-point (11 × 11) option on the screen.
- **Dual Z lead screws** driven by two motors, a PEI spring steel plate and filament run-out detection.
- **Removable touchscreen** and a quiet mode that Elegoo rates under 50 dB.

## Setting up the Neptune 4

The printer arrives largely pre-assembled. The user guide's steps, in short:

1. Fit the gantry to the base as shown in the assembly video on the USB drive, then mount the screen, filament sensor and cable clamp.
2. Set the voltage switch to match your mains supply.
3. Power on and do a quick paper check of the bed at the centre and corners.
4. Run **auto levelling** from the screen and set the Z-offset.
5. Load filament (**Prepare → Extruder → Load**) and print the test file from the USB drive.

**Tip:** if your first layers look uneven at the edges, switch the levelling grid from 36 to 121 points and re-run it with the bed at printing temperature.

## Connecting the Neptune 4

The base Neptune 4 has no Wi-Fi. Connect it to your router with an Ethernet cable and open its IP address in a browser to reach the Fluidd web interface, where you can upload files and watch prints. Otherwise copy G-code to the USB drive. To check a sliced file before printing, open it in our [G-code to STL tool](/gcode-to-stl/).

## Neptune 4 manual

Elegoo publishes the Neptune 4 user guide in the ELEGOO Download Center under the Neptune series, and a copy comes on the USB drive with the assembly video. It covers the parts list, assembly, voltage setting, levelling, loading filament, the first print and troubleshooting.

## Firmware and software

Firmware for the mainboard and touchscreen is listed on the ELEGOO Wiki, with update guides for the Neptune 4 and 4 Pro; versions with a Type-C port also support over-the-air updates. Re-level after a firmware update. The printer ships with **ELEGOO Cura** profiles on the USB drive. Elegoo runs its own Klipper build, so updates come from Elegoo, not the main Klipper project.

## Compare the Neptune 4

See the whole range in our [Elegoo 3D printer lineup](/printers/elegoo-3d-printers/), or put the Neptune 4 next to the [Elegoo Neptune 3 Pro](/printers/elegoo-neptune-3-pro/) and other printers in the [printer comparison tool](/printers/compare/).
