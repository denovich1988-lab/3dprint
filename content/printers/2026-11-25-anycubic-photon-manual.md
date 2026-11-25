---
title: Anycubic Photon manual – levelling, first print and care
seoTitle: Anycubic Photon Manual – Levelling, First Print, Care
description: Where to find the official Anycubic Photon manual, what it covers, paper levelling, the first resin print, slicer settings, maintenance and common fixes.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/431501f1-922c-4f1d-8e0c-6ff18e03a1e9/output.png
imageAlt: "Illustration of a small resin printer with an amber cover, its build platform lowered onto a sheet of paper on the LCD for levelling, a hand with a hex key, a funnel, spare film and a jar of rinsing alcohol"
category: Manuals
brand: Anycubic
summary:
  - Anycubic lists the original Photon manual, firmware, slicer and test models on the Photon page of its online store.
  - The manual covers assembly and levelling with a sheet of A4 paper, an LCD test, the first print, slicing and maintenance.
  - Newer Photon models have their own manuals; this page is about the original Anycubic Photon.
faq:
  - q: Where can I find the Anycubic Photon manual?
    a: On the Anycubic Photon page of the Anycubic online store, in the downloads list with the firmware, the slicer and the test models. Newer Photon models have their own pages and manuals.
  - q: How do you level the Anycubic Photon?
    a: Home Z, loosen the platform screw, put a sheet of A4 paper on the LCD and lower the platform until the paper drags slightly. Press the platform flat, tighten the screw and set Z = 0.
  - q: What slicer settings does the Anycubic Photon manual suggest?
    a: A 0.05 mm layer, 6–15 s normal exposure, 30–80 s bottom exposure for 3–6 bottom layers and 3–6 s off time, adjusted for your resin.
sources:
  - name: Anycubic store – Photon product page and downloads
    url: https://store.anycubic.com/products/anycubic-photon-3d-printer
  - name: Anycubic Photon user manual 2018-02-08 (copy hosted by e-square)
    url: https://e-square.marche.be/wp-content/uploads/2020/03/Anycubic_Photon_User_Manual_French_20180208.pdf
  - name: Anycubic – Photon Workshop slicer page
    url: https://store.anycubic.com/pages/anycubic-photon-workshop-3d-slicer-software
tools: [stl-viewer, obj-to-stl, 3d-viewer]
---
**Anycubic publishes the official Anycubic Photon manual in the downloads list of the Photon page on the Anycubic online store, together with the firmware, the slicer and two test models.** This page is about the original Anycubic Photon resin printer; later models such as the Photon Mono have their own manuals. Below is a summary of what the manual covers, in our own words. It does not replace it.

## What the official Photon manual covers

1. **Packing list** and **precautions** for working with resin.
2. **Specifications** and **product overview**.
3. **Menu directory** of the touchscreen.
4. **Assembly and calibration** – levelling the platform, the LCD test and fitting the vat.
5. **Software installation** – the slicer on the supplied card.
6. **First print** – resin, test file and cleaning the part.
7. **FAQ and maintenance**.

The box includes a USB drive, spare FEP film, funnels, gloves, a mask, a small bottle of resin and a spatula.

## Anycubic Photon key facts

| Item | Detail |
|---|---|
| Technology | LCD resin, 405 nm UV light |
| XY resolution | 47 µm (2560 × 1440) |
| Build volume | 115 × 65 × 155 mm |
| Speed | 20 mm/h |
| Screen | 2.8-inch colour touchscreen |
| Connectivity | USB drive |

More on the printer and the later models: [Anycubic Photon](/printers/anycubic-photon/).

## Quick start: levelling and the LCD test

1. Go to Tools → Move Z → Home.
2. Loosen the platform screw and lay a sheet of A4 paper on the LCD.
3. Lower Z in small steps until the paper drags slightly when pulled.
4. Press the platform flat, tighten the screw and confirm Z = 0 in the Tools menu.
5. Raise the platform and run the detection test: a full rectangle should light up on the LCD.
6. Fit the vat against its stops and tighten the nuts on both sides.

## The first print

Wear gloves and a mask. Fill the vat to about a third and start the test file from the USB drive. If you need more resin during a print, pause, add it and resume. After printing, rinse the part in alcohol and post-cure it under UV light. Filter leftover resin back into the bottle and make sure no cured bits stay in the vat.

## Slicer settings from the manual

The manual uses the Anycubic Photon Slicer on the supplied card, with these starting values:

| Setting | Suggested value |
|---|---|
| Layer thickness | 0.05 mm |
| Normal exposure | 6–15 s |
| Off time | 3–6 s |
| Bottom exposure | 30–80 s |
| Bottom layers | 3–6 |

**Tip:** every resin cures differently. Start in the middle of each range and adjust with a small test print.

## Maintenance

- Lubricate the Z lead screw if it gets noisy.
- Never use sharp tools on the FEP film at the bottom of the vat.
- Do not leave resin in the vat for more than two days.
- Clean the vat fully when you change resin colour.

## Common problems and fixes

| Symptom | Fix from the manual |
|---|---|
| Print does not stick to the platform | Increase bottom exposure, add a raft or re-level |
| Layers separate | Put the printer on a stable surface, replace a worn FEP film, tighten the platform and vat |

## Firmware and software

Anycubic lists Photon firmware V4.2.19 and V5.0.2 on the store page; V5.0.2 is marked for upgraded units only, so check which applies before updating. Before slicing, check your model in our [STL viewer](/stl-viewer/) or convert it with the [OBJ to STL converter](/obj-to-stl/). See the [Anycubic 3D printers guide](/printers/anycubic-3d-printers/) for current models.
