---
shortName: Elegoo Neptune 4 Max
title: Elegoo Neptune 4 Max – specs, setup, Klipper and firmware
seoTitle: Elegoo Neptune 4 Max Specs, Setup and Firmware Update
description: Elegoo Neptune 4 Max explained – 420 × 420 × 480 mm build volume, 500 mm/s Klipper speed, 121-point levelling, setup, LAN and Wi-Fi, manual and firmware updates.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/18c6a9c9-88e0-434d-862c-3376636a05be/output.png
imageAlt: "Illustration of a very large open-frame bed-slinger with a wide black bed printing a big orange crate, an LED strip on the gantry and a side touchscreen"
category: Elegoo
brand: Elegoo
summary:
  - The Elegoo Neptune 4 Max is a large open-frame bed-slinger with a 420 × 420 × 480 mm build volume.
  - It runs Elegoo's Klipper firmware, prints at up to 500 mm/s with 8,000 mm/s² acceleration and levels itself at 121 points.
  - Elegoo launched it in September 2023 at a US launch price of $470.
specs:
  - ["Build volume", "420 × 420 × 480 mm"]
  - ["Max speed", "500 mm/s (default 250 mm/s)"]
  - ["Max acceleration", "8,000 mm/s²"]
  - ["Max nozzle temperature", "300 °C"]
  - ["Max bed temperature", "85 °C"]
  - ["Motion system", "Cartesian bed-slinger, Klipper firmware"]
  - ["Enclosure", "Open frame"]
  - ["Multi-colour", "No"]
  - ["Nozzle", "0.4 mm high-flow"]
  - ["Extruder", "Dual-gear direct drive, 5.2:1 reduction"]
  - ["Filaments", "PLA, TPU, PETG, ABS, ASA, nylon"]
  - ["Screen", "Removable colour touchscreen"]
  - ["Connectivity", "Wi-Fi, LAN, USB drive"]
  - ["Sensors", "121-point inductive auto levelling, filament run-out, power-loss resume"]
  - ["Size and weight", "658 × 632 × 740 mm; 18.1 kg"]
  - ["Power", "100–120 V / 220–240 V"]
faq:
  - q: What is the Elegoo Neptune 4 Max build volume?
    a: 420 × 420 × 480 mm, on a 430 × 430 mm PEI plate. It is the largest printer in the Neptune 4 series.
  - q: How fast is the Elegoo Neptune 4 Max?
    a: Elegoo rates it at up to 500 mm/s with 8,000 mm/s² acceleration; the default print speed is 250 mm/s.
  - q: Does the Neptune 4 Max run Klipper?
    a: Yes. It ships with Elegoo's build of Klipper pre-installed. Because it is a customised version, firmware updates come from Elegoo rather than from the main Klipper project.
  - q: How do I update the Neptune 4 Max firmware?
    a: Download the firmware package from the ELEGOO Download Center and follow the ELEGOO Wiki guide – mainboard firmware from a USB drive, screen firmware separately. Type-C versions can also update over the air.
sources:
  - name: Elegoo – Neptune 4 Max product page
    url: https://www.elegoo.com/collections/fdm-printers/products/neptune-4-max-fdm-3d-printer
  - name: Elegoo – Download Center
    url: https://www.elegoo.com/pages/download
  - name: Elegoo Wiki – Neptune 4 Plus/Max motherboard and touch screen firmware
    url: https://wiki.elegoo.com/neptune/neptune-4-plus-max-how-to-use-motherboard-and-touch-screen-firmware
  - name: Elegoo Wiki – Neptune 4 Max Type-C firmware update
    url: https://wiki.elegoo.com/neptune/neptune-4-max/type-c-version-how-to-update-frimware
  - name: All3DP – Elegoo announces Neptune 4 Plus and Neptune 4 Max
    url: https://all3dp.com/4/elegoo-announces-neptune-4-plus-and-neptune-4-max-3d-printers/
  - name: Tom's Hardware – New Neptune 4 printers
    url: https://www.tomshardware.com/news/new-neptune-4-printers
  - name: Tom's Hardware – Elegoo Neptune 4 Max review
    url: https://www.tomshardware.com/3d-printing/elegoo-neptune-4-max-review
  - name: TechRadar – Elegoo Neptune 4 Max review
    url: https://www.techradar.com/pro/elegoo-neptune-4-max-review
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Elegoo Neptune 4 Max is a large open-frame bed-slinger 3D printer with a 420 × 420 × 480 mm build volume, Klipper firmware and speeds of up to 500 mm/s.** Elegoo announced it in September 2023 and launched it at a US launch price of $470. It is the biggest model in the Neptune 4 series, aimed at large single-piece prints such as helmets, props and storage boxes.

## Elegoo Neptune 4 Max at a glance

| Item | Detail |
|---|---|
| Build volume | 420 × 420 × 480 mm |
| Speed / acceleration | 500 mm/s / 8,000 mm/s² |
| Nozzle / bed | 300 °C / 85 °C |
| Firmware | Klipper (Elegoo build) |
| Extruder | Dual-gear direct drive, 5.2:1 |
| Levelling | 121-point auto levelling |
| Connectivity | Wi-Fi, LAN, USB drive |
| Weight | 18.1 kg |

## Who the Neptune 4 Max suits

It suits makers who want the largest possible build area for the money and are comfortable with an open-frame machine. The bed moves front to back, so you need about 658 × 950 × 960 mm of space including the filament rack. Elegoo lists ABS, ASA and nylon, but without an enclosure those are harder to print than PLA, PETG and TPU.

## Neptune 4 Max features

- **Klipper firmware** with input shaping and pressure advance for faster printing.
- **Dual-gear direct extruder** with a 5.2:1 reduction and a 300 °C high-temperature nozzle kit.
- **121-point (11 × 11) automatic levelling** with an inductive probe.
- **Filament run-out detection and resume printing.**
- **CNC-machined aluminium extrusion frame** and a removable touchscreen.

## Setting up the Neptune 4 Max

1. Unpack the parts and assemble the gantry, screen and filament rack as shown in the user guide.
2. Check the voltage setting for your region, connect the cables and power on.
3. Run **auto levelling** from the screen; the probe maps the bed at 121 points.
4. Set the **Z-offset** while watching a test line.
5. Load filament through the run-out sensor and print the test file from the USB drive.

**Tip:** on a bed this large, let it heat for a few minutes before levelling – the mesh is more accurate when the plate has reached its print temperature.

## Connecting the Neptune 4 Max

Print from a **USB drive**, or connect the printer to your network over **Wi-Fi** or **LAN** and send jobs from your computer through the Klipper web interface. To preview a sliced file before you send it, open it in our [G-code to STL tool](/gcode-to-stl/).

## Neptune 4 Max manual

Elegoo publishes the Neptune 4 Max user guide in the ELEGOO Download Center under the Neptune series. It covers machine parameters, component diagrams, the packing list, setup and installation, screen operation, auto levelling, the test print, resume printing, software installation, LAN printing, the mainboard wiring diagram and troubleshooting.

## Firmware and software

Firmware packages are in the ELEGOO Download Center, with step-by-step guides on the ELEGOO Wiki. Mainboard firmware is installed from a USB drive and the screen has its own firmware; update the mainboard first and re-level afterwards, because flashing clears the levelling data. Type-C versions also support over-the-air updates. The printer shipped with **ELEGOO Cura** on the USB drive; Elegoo's current FDM slicer is ELEGOO Slicer, based on OrcaSlicer.

## Compare the Neptune 4 Max

See all Elegoo models in our [Elegoo 3D printer lineup](/printers/elegoo-3d-printers/), or compare the Neptune 4 Max with other large printers such as the [Creality Ender 5 Plus](/printers/creality-ender-5-plus/) in the [printer comparison tool](/printers/compare/).
