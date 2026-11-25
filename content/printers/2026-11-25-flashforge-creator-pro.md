---
shortName: Flashforge Creator Pro 2
title: Flashforge Creator Pro – Creator Pro 2 IDEX specs and setup
seoTitle: Flashforge Creator Pro – Creator Pro 2 IDEX Specs
description: Flashforge Creator Pro explained – Creator Pro 2 IDEX specs, mirror and duplicate modes, the original dual-extruder Creator Pro, setup, FlashPrint and manuals.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/b192356d-92e8-4f4d-ad2a-4a1b250bd971/output.png
imageAlt: "Illustration of the inside of a compact enclosed printer with two independent print heads side by side on one rail, mirror-printing two identical orange chess pieces, with a navy and an orange spool at the back"
category: Flashforge
brand: Flashforge
summary:
  - The Flashforge Creator Pro 2 is an enclosed IDEX printer with two independent 0.4 mm extruders and a 200 × 148 × 150 mm build volume.
  - Its mirror and duplicate modes print two parts at once, and the second head can print soluble PVA supports.
  - The original Creator Pro had two extruders on one carriage and a 227 × 148 × 150 mm build volume; both use the FlashPrint slicer.
specs:
  - ["Build volume", "200 × 148 × 150 mm (single), 80 × 148 × 150 mm (mirror), 95 × 148 × 150 mm (duplicate)"]
  - ["Max speed", "100 mm/s"]
  - ["Max nozzle temperature", "240 °C"]
  - ["Max bed temperature", "120 °C"]
  - ["Enclosure", "Enclosed (removable door and top cover)"]
  - ["Multi-colour", "2 colours or materials (IDEX)"]
  - ["Nozzle", "2 × 0.4 mm"]
  - ["Extruder", "Independent dual extruders (IDEX)"]
  - ["Filaments", "PLA, ABS, PVA, HIPS"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "3.5-inch touchscreen"]
  - ["Connectivity", "USB cable, SD card"]
  - ["Size and weight", "526 × 360 × 403 mm"]
  - ["Power", "320 W"]
faq:
  - q: What is the Flashforge Creator Pro 2 build volume?
    a: 200 × 148 × 150 mm with one extruder, 80 × 148 × 150 mm in mirror mode and 95 × 148 × 150 mm in duplicate mode, according to Flashforge.
  - q: What is the difference between the Flashforge Creator Pro and Creator Pro 2?
    a: The original Creator Pro carries two extruders on one carriage. The Creator Pro 2 moves them independently (IDEX), which adds mirror and duplicate printing and stops the idle nozzle from dragging across the part.
  - q: Does the Flashforge Creator Pro 2 have Wi-Fi?
    a: No. It prints from an SD card or over a USB cable.
  - q: Which slicer does the Creator Pro 2 use?
    a: FlashPrint, Flashforge's free slicer. Flashforge also publishes a Cura setup guide for it.
sources:
  - name: Flashforge – Creator Pro 2 product page
    url: https://www.flashforge.com/product-detail/51
  - name: Flashforge – Creator Pro 2 datasheet (copy)
    url: https://www.farnell.com/datasheets/3110573.pdf
  - name: Flashforge – model comparison datasheet (copy)
    url: https://www.farnell.com/datasheets/2829239.pdf
  - name: Flashforge – Download Center, Creator Series
    url: https://www.flashforge.com/blogs/download-center-1/creator-series
  - name: 3D Printing Industry – Flashforge Creator Pro 2 review
    url: https://3dprintingindustry.com/news/review-the-flashforge-creator-pro-2-cost-efficient-idex-fff-in-a-sub-1000-package-181489/
  - name: All3DP – Flashforge Creator Pro 2 specs
    url: https://all3dp.com/1/flashforge-creator-pro-2-3d-printer-specs/
  - name: Flashforge – Creator 3 Pro datasheet (copy)
    url: https://www.farnell.com/datasheets/3962580.pdf
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**The Flashforge Creator Pro is an enclosed dual-extruder 3D printer series, and the current Creator Pro 2 uses IDEX – two independent extruders – with a 200 × 148 × 150 mm build volume.** The Creator Pro 2 arrived in 2020 as the IDEX successor to the original Creator Pro, which carried both nozzles on one carriage. This page covers the specs, print modes, setup and software for both.

## Flashforge Creator Pro 2 at a glance

| Item | Detail |
|---|---|
| Build volume | 200 × 148 × 150 mm |
| Mirror / duplicate | 80 × 148 × 150 mm / 95 × 148 × 150 mm |
| Extruders | 2 × independent, 0.4 mm nozzles |
| Nozzle / bed | 240 °C / 120 °C |
| Enclosure | Closed chamber, door and lid removable |
| Screen | 3.5-inch touchscreen |
| Connectivity | USB cable, SD card |
| Slicer | FlashPrint |

## IDEX print modes

Because each head moves on its own, the Creator Pro 2 can:

- **Duplicate** – print two copies of one part at the same time.
- **Mirror** – print a part and its mirror image, handy for left and right pieces.
- **Dual material** – print a second colour, or soluble PVA supports, while the idle head parks out of the way.

**Tip:** PVA supports dissolve in water, which makes complex parts with internal overhangs much easier. Keep PVA dry – see our [filament dryer guide](/blog/filament-dryer/).

## Who the Creator Pro 2 suits

It suits schools, labs and makers who want a small, enclosed printer for ABS and two-material prints. The bed is small and there is no Wi-Fi or automatic levelling, so users who want big, fast, networked printing should look at newer models in our [Flashforge 3D printers guide](/printers/flashforge-3d-printers/).

## Setting up the Creator Pro 2

At a high level, following Flashforge's quick start guide:

1. Unpack the printer and remove the packing material from the chamber.
2. Fit the spool holders and load filament into each extruder.
3. Level the bed with the knobs underneath (reviewers describe a manual three-point system).
4. Run Flashforge's nozzle and X/Y calibration so both heads line up.
5. Print a test file from the SD card.

## Connecting and slicing

The Creator Pro 2 prints from an **SD card** or over a **USB cable**; there is no Wi-Fi. **FlashPrint** is the official slicer and handles IDEX modes, and Flashforge publishes a Cura setup guide too. Check a model before slicing in our [STL viewer](/stl-viewer/).

## The original Flashforge Creator Pro

The first Creator Pro is an enclosed printer with two extruders on one carriage and a 227 × 148 × 150 mm build volume. It has a 240 °C nozzle limit, a heated bed, a button-controlled LCD and USB and SD card printing, and it weighs 14.8 kg. Flashforge says its Creator series began in 2013.

## Manuals and firmware

Flashforge publishes the Creator Pro 2 user manual, quick start guide, spare parts list, Cura setup guide and firmware on its website, under Download Center → Creator Series. The original Creator Pro is not listed there.

## Compare the Creator Pro

Flashforge also makes a larger IDEX model, the Creator 3 Pro (300 × 250 × 200 mm). See its other printers in our [Flashforge 3D printers guide](/printers/flashforge-3d-printers/), or use the [printer comparison tool](/printers/compare/).
