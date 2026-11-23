---
shortName: Bambu Lab H2C
title: Bambu Lab H2C – Vortek nozzle changer, specs and setup
seoTitle: Bambu Lab H2C Specs, Vortek System and Setup
description: Bambu H2C explained – the Vortek system with six swappable hot ends, official build volume and temperatures, launch prices, setup, connection and the manual.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/28301ee3-69cc-4179-8141-9c6daca086f8/output.png
imageAlt: "Illustration of a rack of six swappable hotends inside a large generic enclosed 3D printer"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu H2C was announced on 14 November 2025 as the multi-material model of the H2 series.
  - Its Vortek system stores six induction-heated hot ends that swap onto the toolhead during a print.
  - Bambu Lab lists a 350 °C nozzle, a 120 °C bed and an actively heated chamber up to 65 °C.
specs:
  - ["Build volume", "330 × 320 × 325 mm (total); 305 × 320 × 325 mm single nozzle"]
  - ["Max nozzle temperature", "350 °C"]
  - ["Max bed temperature", "120 °C"]
  - ["Enclosure", "Enclosed"]
  - ["Multi-colour", "Vortek system with 6 swappable hot ends; AMS 2 Pro and AMS HT for up to 24 filaments"]
  - ["Nozzle", "0.2, 0.4, 0.6 and 0.8 mm"]
  - ["Extruder", "PMSM servo extruder, up to 10 kg extrusion force"]
  - ["Camera", "Live view 1920 × 1080, nozzle 1920 × 1080, BirdsEye 3264 × 2448, toolhead 1920 × 1080"]
  - ["Filtration", "Integrated air filter"]
  - ["Sensors", "Door, filament run-out, tangle and filament odometry sensors; power-loss recovery"]
faq:
  - q: What is the Bambu Lab H2C Vortek system?
    a: Vortek is a set of six swappable hot ends parked in a rack. They heat by induction and connect without contacts, and Bambu Lab says each reaches temperature in about 8 seconds.
  - q: How many colours can the Bambu H2C print?
    a: Bambu Lab says up to 7 materials per job without purge cleaning between them, or up to 24 filaments with AMS units.
  - q: How much did the Bambu H2C cost at launch?
    a: The H2C AMS Combo launched at US$2,399 in the US and €2,249 in the EU. Laser and Ultimate bundles cost more.
  - q: What is the difference between the H2C and H2D?
    a: The H2D has two fixed nozzles. The H2C adds the Vortek rack so the right-hand side can swap between six hot ends, which cuts filament waste in multi-colour prints.
sources:
  - name: Bambu Lab blog – H2C announcement (14 November 2025)
    url: https://blog.bambulab.com/bambu-lab-h2c-where-multi-material-vortek-system-meets-engineering-precision
  - name: 3D Printing Industry – H2C specifications and pricing
    url: https://3dprintingindustry.com/news/bambu-lab-launches-the-new-h2c-multi-material-3d-printer-technical-specifications-and-pricing-246509
  - name: All3DP – H2C US preorders
    url: https://all3dp.com/4/bambu-lab-p2s-now-available-in-the-u-s-h2c-preorders-open/
  - name: Tom's Hardware – H2C launch at Formnext
    url: https://www.tomshardware.com/3d-printing/bambu-lab-launches-beastly-seven-nozzle-3d-printer-at-formnext-h2c-model-launches-everywhere-but-the-us-due-to-tarrifs
  - name: Gizmochina – H2C launch prices
    url: https://www.gizmochina.com/2025/11/19/bambu-lab-h2c-3d-printer-launched-specs-price/
tools: [3mf-to-stl, stl-to-3mf, 3mf-viewer]
---
**The Bambu H2C (Bambu Lab H2C) is an enclosed multi-material 3D printer whose Vortek system swaps between six induction-heated hot ends during a print.** Bambu Lab announced it on 14 November 2025 at Formnext. It shares the H2 frame, the 350 °C hot end and the 65 °C heated chamber with the [H2D](/printers/bambu-lab-h2d/) and [H2S](/printers/bambu-lab-h2s/).

## Who the Bambu Lab H2C suits

The H2C is aimed at makers, designers and engineers who print many colours or materials in one job – cosplay parts, multi-colour models, assemblies that mix rigid and flexible filament. Because each hot end keeps its own filament loaded, the printer does not have to purge the nozzle at every colour change. Bambu Lab says up to 7 materials per job can run without purge cleaning; with AMS units the total reaches 24 filaments. Some prints still use a small purge tower.

Each Vortek hot end remembers the filament it last printed, and the rack holds nozzles from 0.2 to 0.8 mm.

## Bambu H2C launch prices

Launch prices from the announcement period:

| Version | US | EU |
|---|---|---|
| H2C AMS Combo (with AMS 2 Pro) | US$2,399 | €2,249 |
| H2C AMS Combo Ultimate Set | – | €2,749 |
| H2C Laser 10 W Combo | – | €2,799 |
| H2C Laser 40 W Combo | – | €3,349 |

Ultimate Sets add an AMS HT and extra hot ends. US preorders opened in late November 2025.

## Bambu H2C vs H2D

| | H2C | H2D |
|---|---|---|
| Nozzles | Left fixed + right Vortek with 6 hot ends | 2 fixed |
| Build volume (total) | 330 × 320 × 325 mm | 350 × 320 × 325 mm |
| Max nozzle temperature | 350 °C | 350 °C |
| Chamber heating | 65 °C | 65 °C |

Choose the H2D if two materials per print are enough and you want the larger build volume. More in our [Bambu Lab 3D printers overview](/printers/bambu-lab-3d-printers/).

## First setup

The H2C is heavy and needs two people to lift. The setup follows the H2-series pattern: remove the transport brackets and cable ties on the bed, the hot-end rack and the toolhead; mount the AMS and connect its tube and cable; power on; run the automatic calibration and the hot-end rack calibration; then load the hot ends into the rack. Connect Wi-Fi and update the firmware before the first print.

## Connecting the H2C

You slice in **Bambu Studio**, send prints over Wi-Fi and watch them in the **Bambu Handy** app, which can show the four cameras. LAN mode and printing from a USB drive work without the cloud.

## Manual and firmware

Bambu Lab publishes the H2C guides on the Bambu Lab Wiki in the H2 series section, next to the H2D and H2S pages. Firmware updates install from the touchscreen, Bambu Handy or Bambu Studio.

## Compare the H2C

See the H2C next to other printers in our [printer comparison tool](/printers/compare/), or check the [Bambu Lab AMS](/printers/bambu-lab-ams/) page for multi-colour options.
