---
shortName: Bambu Lab H2D
title: Bambu Lab H2D – dual-nozzle specs, laser options and setup
seoTitle: Bambu Lab H2D Specs, Dual Nozzle and Laser Guide
description: Bambu H2D explained – official specs of the dual-nozzle 3D printer, build volume per nozzle, 10 W and 40 W laser combos, AMS support and first setup.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/71558e64-64cc-4cd4-b5c2-ebffeb719dad/output.png
imageAlt: "Illustration of a generic dual-nozzle 3D printer toolhead printing a two-colour part next to a laser module"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu H2D is an enclosed dual-nozzle printer announced on 25 March 2025.
  - Its total build volume is 350 × 320 × 325 mm; printing with both nozzles leaves 300 mm of width.
  - Optional 10 W or 40 W laser modules turn it into an engraver and cutter.
specs:
  - ["Build volume", "350 × 320 × 325 mm (total); 300 × 320 × 325 mm with both nozzles"]
  - ["Max speed", "1000 mm/s"]
  - ["Max nozzle temperature", "350 °C"]
  - ["Enclosure", "Enclosed"]
  - ["Multi-colour", "Dual nozzle plus AMS 2 Pro and AMS HT (up to 4 AMS 2 Pro + 8 AMS HT); first-generation AMS without drying; not AMS lite"]
  - ["Nozzle", "Two identical, interchangeable hot ends (both must use the same nozzle size)"]
  - ["Extruder", "Closed-loop PMSM servo extruders, direct drive"]
  - ["Filaments", "Engineering filaments including carbon- and glass-fibre reinforced types"]
  - ["Screen", "5-inch touchscreen"]
  - ["Camera", "Live-view camera, AI nozzle camera; BirdsEye camera on laser versions"]
  - ["Connectivity", "Wi-Fi, USB drive (FAT32 or exFAT), LAN mode"]
  - ["Sensors", "15 filament-path sensors; flame sensors on laser versions"]
faq:
  - q: What is the Bambu H2D build volume?
    a: Bambu Lab lists 350 × 320 × 325 mm in total. With one nozzle you get 325 mm of width; with both nozzles in the same print, 300 mm.
  - q: Is the Bambu Lab H2D a dual-nozzle printer?
    a: Yes. It has two identical, interchangeable hot ends, which lets you print two materials, such as a model and soluble support, without purging between every change.
  - q: Which lasers work with the H2D?
    a: Bambu Lab offers a 10 W and a 40 W laser module. It says the 10 W cuts 5 mm basswood plywood and the 40 W cuts 15 mm.
  - q: Can I use my old AMS with the H2D?
    a: Yes, the first-generation AMS works, but without drying. The AMS 2 Pro and AMS HT are fully supported; the AMS lite is not.
sources:
  - name: Bambu Lab blog – H2D launch (25 March 2025)
    url: https://blog.bambulab.com/bambu-lab-launches-h2d-to-rethink-personal-manufacturing
  - name: Bambu Lab Wiki – H2D FAQ
    url: https://wiki.bambulab.com/en/h2/manual/h2d-faq
  - name: Bambu Lab store – H2D
    url: https://eu.store.bambulab.com/products/h2d
  - name: Bambu Lab Wiki – H2D AMS Combo and Laser Full Combo unboxing
    url: https://wiki.bambulab.com/en/h2/manual/unboxing-ams-combo-and-laser-full-combo
  - name: 3D Printing Industry – H2D specifications (build volume per nozzle)
    url: https://3dprintingindustry.com/news/bambu-labs-new-h2d-3d-printer-technical-specifications-and-pricing-237763/
  - name: Tom's Hardware – H2D review (build volume per nozzle)
    url: https://www.tomshardware.com/3d-printing/bambu-lab-h2d-review
tools: [3mf-to-stl, 3mf-viewer, svg-to-stl]
---
**The Bambu H2D (Bambu Lab H2D) is an enclosed, dual-nozzle 3D printer with a 350 × 320 × 325 mm total build volume, a 350 °C hot end and an actively heated chamber up to 65 °C.** Bambu Lab announced it on 25 March 2025, together with the AMS 2 Pro and AMS HT, as a "personal manufacturing" machine that can also laser-engrave, cut and draw.

## Who the Bambu Lab H2D suits

The H2D suits people who need two materials in one print: a model with dissolvable or break-away support, a rigid part with a flexible section, or two engineering filaments. Because each material has its own nozzle, there is far less purging than with a single-nozzle AMS setup.

It is also for workshops that want one machine for printing and laser work. US launch prices from Bambu Lab's announcement:

- **H2D** – US$1,899
- **H2D AMS Combo** – US$2,199
- **H2D Laser Full Combo 10 W** – US$2,799
- **H2D Laser Full Combo 40 W** – US$3,499

## Build volume with one or two nozzles

The 350 mm width is the total travel. Printing with one nozzle gives 325 × 320 × 325 mm, and using both nozzles in the same print gives 300 × 320 × 325 mm. Bambu Lab's FAQ says both hot ends must use the same nozzle size, and an eddy-current sensor calibrates the offset between them.

## Laser and cutting modules

| | 10 W laser | 40 W laser |
|---|---|---|
| Cutting (basswood plywood) | up to 5 mm | up to 15 mm |
| Engraving speed | up to 400 mm/s | up to 1000 mm/s |
| Working area | 310 × 270 mm | 310 × 250 mm |

Both use 455 nm blue lasers with air assist. A separate cutting module handles vinyl and stickers, and a pen module draws.

## First setup

Bambu Lab's wiki guide for the AMS Combo and Laser Full Combo follows this order:

1. Unbox, remove the restraints, refit the top cover and remove the air-pump transport screw.
2. Mount the AMS 2 Pro on top, connect its PTFE tube (at least 600 mm) and the 6-pin cable.
3. Fit the spool holder and its PTFE tube.
4. Insert the safety key, connect power and switch on.
5. Run the first calibration from the on-screen prompts.
6. Remove the foam under the heat bed.
7. Load filament into the AMS 2 Pro.

## Connecting the H2D

The H2D connects over Wi-Fi to the Bambu Handy app and to **Bambu Studio**. It has a USB port instead of an SD card slot: use one USB 2.0 or newer drive, formatted FAT32 or exFAT. Bambu Lab notes that without a USB drive there is no LAN printing, no sending files from Bambu Studio and no time-lapse.

## Manual and firmware

The official H2D manual pages, FAQ and maintenance guides are on the Bambu Lab Wiki under the H2 series manual pages. Update firmware from the touchscreen, the app or Bambu Studio.

## H2D or H2S?

The [Bambu Lab H2S](/printers/bambu-lab-h2s/) has one nozzle, a slightly taller 340 mm build height and supports only the 10 W laser. Compare both in our [printer comparison tool](/printers/compare/). If you need more filament slots, see our guide to the [Bambu Lab AMS](/printers/bambu-lab-ams/).
