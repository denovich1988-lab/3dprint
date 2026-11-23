---
shortName: Creality Ender 3 V2
title: Ender 3 V2 – specs, setup and upgrades explained
seoTitle: Ender 3 V2 3D Printer – Specs, Setup and Upgrades
description: Creality Ender 3 V2 explained – specs, launch, who it suits today, manual bed levelling, microSD printing, firmware for the 4.2.2 and 4.2.7 boards and upgrades.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/81e7fcb6-a7d5-4b72-811c-1f8ad557b511/output.png
imageAlt: "Illustration of hands swapping the control board of an open-frame 3D printer with a glass bed, with a probe and belts on a garage workbench"
category: Creality
brand: Creality
summary:
  - The Creality Ender 3 V2 is a Cartesian bed-slinger with a 220 × 220 × 250 mm build volume and a glass bed.
  - Creality announced it in April 2020 at under US$300.
  - It uses a Bowden extruder and manual bed levelling, and prints from a microSD card or over USB.
specs:
  - ["Build volume", "220 × 220 × 250 mm"]
  - ["Max speed", "180 mm/s"]
  - ["Max nozzle temperature", "255 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "Cartesian bed-slinger, single Z lead screw"]
  - ["Enclosure", "Open frame"]
  - ["Extruder", "Bowden, with rotary feed knob"]
  - ["Filaments", "PLA, ABS, TPU"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "4.3-inch colour screen with knob"]
  - ["Connectivity", "microSD card, USB"]
  - ["Size and weight", "475 × 470 × 620 mm; 7.8 kg"]
  - ["Power", "Mean Well PSU, 115 V / 230 V switch"]
faq:
  - q: Is the Ender 3 V2 still worth buying?
    a: Creality no longer lists it in its main product menu, but manuals and firmware stay in the Download Center. It suits tinkerers who buy used and do not mind manual levelling; beginners may prefer a newer model with auto levelling such as the Ender-3 V3 SE.
  - q: Does the Creality Ender 3 V2 have auto bed levelling?
    a: No. Levelling is manual with corner knobs. Creality publishes firmware builds for an add-on BLTouch probe.
  - q: Which mainboard does the Ender 3 V2 have?
    a: A Creality 32-bit silent board – version 4.2.2 on many units, with 4.2.7 as a later version. Check yours under the bottom cover before you flash firmware.
  - q: What is the difference between the Ender 3 V2 and the V2 Neo?
    a: The V2 Neo (2022) keeps the 220 × 220 × 250 mm build volume but adds CR Touch auto levelling and a PC spring steel bed.
sources:
  - name: Creality blog – Ender-3 V2
    url: https://www.creality.com/blog/ender-3-v2-a-phenomenal-3d-printer-toward-the-future-of-printing
  - name: Creality blog – Ender-3 vs Ender-3 Pro vs Ender-3 V2
    url: https://www.creality.com/uk/blog/the-differences-ender-3-vs-ender-3-pro-vs-ender-3-v2
  - name: Creality – Ender-3 V2 download page
    url: https://www.creality.com/es/pages/download-ender-3-v2
  - name: 3DPrint.com – Ender-3 V2 launch
    url: https://3dprint.com/267998/creality-ender-3-v2-to-generate-next-new-ender-craze-in-3d-printing-community/
  - name: All3DP – Ender 3 V2 review and specs
    url: https://all3dp.com/1/creality-ender-3-v2-review-3d-printer-specs/
  - name: All3DP – Ender 3 V2 firmware update
    url: https://all3dp.com/2/ender-3-v2-firmware-update/
  - name: Core Electronics – Creality Ender 3 V2
    url: https://core-electronics.com.au/creality-ender-3-v2-3d-printer.html
  - name: Top3DShop – Ender-3 V2 review
    url: https://top3dshop.com/blog/creality-ender-3-v2-3d-printer-review
  - name: MatterHackers – Ender-3 V2
    url: https://www.matterhackers.com/store/l/creality3d-ender-3-v2-3d-printer-kit/sk/MA948Z36
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Ender 3 V2 is a Creality open-frame 3D printer with a 220 × 220 × 250 mm build volume, a glass bed, a Bowden extruder and a quiet 32-bit mainboard.** Creality announced it in April 2020 at under US$300. It is no longer in Creality's main product menu, but it is still common on the used market and as a base for upgrades.

## Who the Ender 3 V2 suits

The V2 suits tinkerers and learners on a budget who are happy to level the bed by hand and tune the printer. Its Bowden extruder makes soft flexible filament harder to print than on direct-drive models. If you want a printer that sets itself up, look at the [Ender 3 V3 SE](/printers/creality-ender-3-v3-se/).

## Ender 3 V2 features

- **Mainboard:** Creality's own 32-bit silent board.
- **Bed:** carborundum tempered glass.
- **Screen:** 4.3-inch colour screen, detachable, controlled with a knob.
- **Power supply:** a Mean Well unit hidden in the base.
- **Extras:** a toolbox drawer in the base and a rotary knob on the extruder for easier feeding.

It keeps the 220 × 220 × 250 mm build volume of the original and resumes printing after a power cut. More on the original on our [Creality Ender 3](/printers/creality-ender-3/) page.

## Setup at a glance

The V2 ships as a kit: assemble the gantry, screen and spool holder, set the power supply to your mains voltage, level the bed by hand at the four corners, load filament and print from the microSD card. Our [Ender 3 V2 manual](/printers/ender-3-v2-manual/) guide covers each step in more detail.

**Tip:** on a glass bed, clean the surface before every print – fingerprints are a common cause of first-layer problems.

## Connecting the Ender 3 V2

There is no Wi-Fi. Save the G-code to the microSD card, or print from a computer over USB.

## Firmware and upgrades

Creality's Download Center lists the user manual, firmware for both the 4.2.2 and 4.2.7 boards, builds for an add-on BLTouch and filament detection, and separate screen firmware. To flash the mainboard, copy only the .bin file to a FAT32 microSD card, insert it with the printer off and switch on. The screen firmware is flashed separately through the screen's own card slot.

**Tip:** check which board you have under the bottom cover first – the firmware files are different.

## Slicer

The V2 works with common slicers such as Cura. Our [G-code to STL converter](/gcode-to-stl/) turns an old print file back into a model, and the [STL viewer](/stl-viewer/) checks a file before slicing.

## Compare the Ender 3 V2

See every model on our [Ender 3D printer](/printers/creality-ender-3d-printers/) page, or compare printers in the [printer comparison tool](/printers/compare/).
