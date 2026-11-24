---
title: QIDI 3D printer lineup – Max4, Plus5, Q2 and Q2C compared
seoTitle: QIDI 3D Printer Lineup – Max4, Plus5, Q2 and Q2C
description: QIDI 3D printer lineup explained – Max4, Plus5, Q2 and Q2C build volumes, heated chambers, QIDI Box multicolour, firmware updates and QIDI Studio.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/42ba8b60-15da-47a7-885b-a99d84309793/output.png
imageAlt: "Illustration of four enclosed boxy printers of increasing size on a long white showroom table, each with a dark glass door and a warm glowing chamber, a filament box on top of the largest"
category: QIDI
brand: QIDI
summary:
  - QIDI Tech is a 3D printer maker based in Wenzhou, Zhejiang, China, whose story began in 2014.
  - Its current lineup – Max4, Plus5, Q2 and Q2C – is all enclosed CoreXY with 370 °C nozzles and multicolour printing through the QIDI Box.
  - QIDI printers run a customised Klipper firmware and slice in QIDI Studio; manuals and firmware histories are on the QIDI Wiki.
faq:
  - q: Which QIDI 3D printer has the largest build volume?
    a: The QIDI Max4, at 390 × 390 × 340 mm, with a chamber heated to 65 °C.
  - q: What is the difference between the QIDI Q2 and Q2C?
    a: Both have a 270 × 270 × 256 mm build volume and 600 mm/s top speed. The Q2 has a chamber heater up to 65 °C and a 3-in-1 filter as standard; the Q2C has no chamber heating and the filter is optional.
  - q: Do QIDI 3D printers run Klipper?
    a: Yes, a customised version of Klipper. QIDI advises against updating or modifying Klipper yourself and provides its own firmware updates.
  - q: Which slicer do QIDI printers use?
    a: QIDI Studio is QIDI's own slicer. QIDI's spec pages also list OrcaSlicer and PrusaSlicer as options.
sources:
  - name: QIDI – About us
    url: https://qidi3d.com/pages/about
  - name: QIDI – Contact us
    url: https://qidi3d.com/pages/contact-us
  - name: QIDI – Max4 tech specs
    url: https://qidi3d.com/pages/qidi-max4-techspecs
  - name: QIDI – Plus5 product page
    url: https://qidi3d.com/products/plus5
  - name: QIDI – Q2 tech specs
    url: https://uk.qidi3d.com/pages/qidi-q2-techspecs
  - name: QIDI – Q2C tech specs
    url: https://qidi3d.com/pages/qidi-q2c-techspecs
  - name: QIDI blog – QIDI 3D printer comparison
    url: https://qidi3d.com/blogs/news/qidi-3d-printer-comparison
  - name: QIDI – Product comparison
    url: https://qidi3d.com/pages/product-comparison-1
  - name: QIDI – Firmware download
    url: https://qidi3d.com/pages/firmware-download
  - name: QIDITECH – QIDI_PLUS4 on GitHub
    url: https://github.com/QIDITECH/QIDI_PLUS4
  - name: QIDI Wiki – Q2 firmware release history
    url: https://wiki.qidi3d.com/en/Q2/firmware-release-history
tools: [3mf-to-stl, stl-viewer, 3mf-viewer]
---
**QIDI 3D printers are enclosed CoreXY machines from QIDI Tech, and the current lineup – the Max4, Plus5, Q2 and Q2C – all print up to 370 °C and support multicolour printing with the QIDI Box.** QIDI Tech is based in Wenzhou, Zhejiang, China, and says its story began in 2014; it runs its own factory and R&D centre. This page compares the current models, the older ones you may find used, and QIDI's software.

## QIDI 3D printer lineup at a glance

| Model | Build volume | Speed / acceleration | Chamber | Multicolour |
|---|---|---|---|---|
| Max4 | 390 × 390 × 340 mm | 800 mm/s / 30,000 mm/s² | Heated to 65 °C | QIDI Box |
| Plus5 | 320 × 320 × 300 mm | 600 mm/s / 20,000 mm/s² | Heated to 65 °C | QIDI Box, up to 16 colours with 4 boxes |
| Q2 | 270 × 270 × 256 mm | 600 mm/s / 20,000 mm/s² | Heated to 65 °C | QIDI Box |
| Q2C | 270 × 270 × 256 mm | 600 mm/s / 20,000 mm/s² | Enclosed, not heated | QIDI Box |

All four are CoreXY with a 370 °C maximum nozzle temperature and a 120 °C bed (Max4, Q2 and Q2C).

## QIDI Max4

The **Max4** is QIDI's large-format model, with a 390 × 390 × 340 mm build volume, a PTC chamber heater up to 65 °C, a 3-in-1 filter (G3, H12 HEPA and activated carbon), load-cell auto levelling, a 1080p AI camera and a 5-inch touchscreen. It connects over dual-band Wi-Fi, Ethernet and USB.

**Why it matters:** a heated chamber of this size is what large ABS, ASA and nylon parts need to avoid warping and layer splits.

## QIDI Plus5

The **Plus5** sits in the middle with 320 × 320 × 300 mm, a 65 °C heated chamber and up to 16 colours when four QIDI Box units are chained. The older Plus4 (305 × 305 × 280 mm) is now listed as discontinued.

## QIDI Q2 and Q2C

The **Q2** is the compact model with a 270 × 270 × 256 mm build volume, a PTC chamber heater up to 65 °C and a 3-in-1 filter. The **Q2C** shares the size and speed but has no chamber heater, and the filter is optional – a cheaper choice if you print mainly PLA and PETG. Read our [QIDI Q2 page](/printers/qidi-q2/) for the full specs.

## Older QIDI printers

QIDI lists these as discontinued, but you will still see them on the used market:

| Model | Build volume | Note |
|---|---|---|
| Plus4 | 305 × 305 × 280 mm | Chamber to 65 °C |
| Q1 Pro | 245 × 245 × 240 mm | Chamber to 60 °C, 350 °C nozzle, no QIDI Box support |
| X-Max 3 | 325 × 325 × 315 mm | Chamber to 65 °C, 350 °C nozzle, no QIDI Box support |
| X-Plus 3 | 280 × 280 × 270 mm | Chamber heating to 65 °C |
| X-Smart 3 | 175 × 180 × 170 mm | No chamber heating |

## How to choose a QIDI printer

1. **Mostly PLA and PETG, small parts:** the Q2C.
2. **Engineering filaments in a compact size:** the Q2, for its heated chamber and filter.
3. **Bigger parts and more colours:** the Plus5.
4. **Largest parts:** the Max4.

**Tip:** if you want multicolour later, check that your model supports the QIDI Box – the Q1 Pro and X-Max 3 do not.

## Firmware and software

QIDI printers run a customised version of **Klipper** with QIDI's Moonraker and Fluidd builds. QIDI advises against updating or modifying Klipper yourself, because changes can stop the printer working. Updates depend on the model:

- **Max4 and Q2:** update online from the printer screen.
- **Plus4:** online from version 1.4.0; earlier versions need an offline update from a USB drive.
- **X-Max 3, X-Plus 3, Q1 Pro and X-Smart 3:** download releases from QIDI's GitHub.

Do not downgrade firmware on any model. QIDI's own slicer is **QIDI Studio**; OrcaSlicer and PrusaSlicer are listed as alternatives. Multicolour projects usually come as 3MF files – preview them with our [3MF viewer](/3mf-viewer/).

## QIDI manuals and support

QIDI publishes manuals, firmware release histories and QIDI Studio release notes on the official QIDI Wiki, linked from the Support menu of its website. Firmware downloads are on the Firmware Download page of the QIDI site.

## Compare QIDI printers

Compare QIDI printers with the [Bambu Lab P2S](/printers/bambu-lab-p2s/) and other enclosed machines in the [printer comparison tool](/printers/compare/).
