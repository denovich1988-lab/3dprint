---
shortName: Formlabs Form 4
title: Formlabs Form 4 – specs, Low Force Display, setup and PreForm
seoTitle: Formlabs Form 4 Specs, Setup, PreForm and Manual
description: Formlabs Form 4 explained – 200 × 125 × 210 mm build volume, Low Force Display, 50 µm pixels, resin heating, PreForm and Dashboard, Form 4B and Form 4L.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/99a53b47-e440-4623-a22b-2b72f36616b2/output.png
imageAlt: "Illustration of a professional resin printer with an orange tinted cover on a dental lab bench beside a wash station, a curing box and translucent dental models"
category: Formlabs
brand: Formlabs
summary:
  - The Formlabs Form 4 is a professional MSLA resin printer built on Formlabs' Low Force Display print engine, with a 20.0 × 12.5 × 21.0 cm build volume.
  - It has 50 µm XY pixels, 25–200 µm layers, automatic resin heating and Wi-Fi, Ethernet and USB connectivity.
  - Formlabs launched it on 17 April 2024 at a US launch price from $4,499; the Form 4B is the biocompatible version.
specs:
  - ["Build volume", "200 × 125 × 210 mm"]
  - ["Max speed", "100 mm/h (maker's figure)"]
  - ["Motion system", "MSLA resin, Low Force Display"]
  - ["Enclosure", "Enclosed (UV-blocking cover)"]
  - ["Screen", "7-inch touchscreen, 1280 × 800"]
  - ["Connectivity", "Wi-Fi (2.4 and 5 GHz), Ethernet, USB-C"]
  - ["Sensors", "Infrared resin temperature sensing, automatic resin heating to 25–45 °C"]
  - ["Size and weight", "398 × 367 × 554 mm; 18.3 kg"]
  - ["Power", "100–240 V AC, 50/60 Hz, 480 W"]
faq:
  - q: What is the Formlabs Form 4 build volume?
    a: 20.0 × 12.5 × 21.0 cm (7.9 × 4.9 × 8.3 in), or 5.3 litres. The larger Form 4L offers 35.3 × 19.6 × 35.0 cm.
  - q: How fast is the Formlabs Form 4?
    a: Formlabs gives a maximum of 100 mm per hour, about 45 mm/h on average with general-purpose resins and 30–40 mm/h with functional materials. It says speed does not change with how much of the platform is filled.
  - q: What is the difference between the Form 4 and Form 4B?
    a: The Form 4B is the version for healthcare and dental work, with access to biocompatible resins. It has the same build volume, size and weight; at launch it supported 37 materials against 23 for the Form 4.
  - q: Where is the Formlabs Form 4 manual?
    a: On Formlabs Support under Manuals and documentation → Form 4 generation, which has the Form 4 manual, the Form 4B manual and the quick start guide in several languages.
sources:
  - name: Formlabs – Form 4 tech specs
    url: https://formlabs.com/3d-printers/resin/tech-specs/
  - name: Formlabs press release – Form 4 launch (17 April 2024)
    url: https://formlabs.com/company/press/formlabs-launches-form-4-its-fastest-most-versatile-3d-printer/
  - name: Formlabs blog – Introducing Form 4
    url: https://formlabs.com/global/blog/introducing-form-4/
  - name: Formlabs blog – Introducing Form 4L
    url: https://formlabs.com/global/blog/introducing-form-4l/
  - name: Formlabs blog – Form Cure 2nd generation
    url: https://formlabs.com/kr/blog/introducing-form-cure-2nd-gen/
  - name: Formlabs Support – Manuals and documentation
    url: https://formlabs.com/support/Manuals-and-documentation/
  - name: Formlabs Support – Starting a remote print
    url: https://formlabs.com/support/Starting-a-remote-print/
tools: [stl-viewer, 3d-viewer, obj-to-stl]
---
**The Formlabs Form 4 is a professional MSLA resin 3D printer with a 20.0 × 12.5 × 21.0 cm build volume, built on Formlabs' Low Force Display (LFD) print engine.** Formlabs launched it on 17 April 2024 at a US launch price from $4,499, with the biocompatible Form 4B from $6,299. It is aimed at engineering, product design, dental and medical teams that need fast, accurate resin parts.

## Formlabs Form 4 at a glance

| Item | Detail |
|---|---|
| Technology | MSLA, Low Force Display |
| Build volume | 20.0 × 12.5 × 21.0 cm (5.3 L) |
| XY resolution | 50 µm |
| Layer thickness | 25–200 µm |
| Light | 405 nm, 16 mW/cm², 60 LEDs |
| Max speed (maker's figure) | 100 mm/h |
| Resin heating | 25–45 °C |
| Connectivity | Wi-Fi, Ethernet, USB-C |
| Weight | 18.3 kg |

## Who the Form 4 suits

The Form 4 suits businesses, labs and schools that print prototypes, jigs, dental models and end-use resin parts and want a managed workflow with cartridges, cloud monitoring and a wide materials library. At launch, Formlabs offered 23 resins for the Form 4 and 37 for the Form 4B. Hobbyists who print miniatures will find consumer resin printers such as the [Elegoo Mars 5 Ultra](/printers/elegoo-mars-5-ultra/) much cheaper.

## Low Force Display explained

Formlabs' **Light Processing Unit 4** uses high-power LEDs and masking lenses to cure each layer almost at once through an LCD. A dual-layer flexible-film tank reduces the peel forces on each layer. Formlabs says this lets the Form 4 print at a similar speed regardless of how many parts fill the platform, and claims it is 2–5 times faster than the Form 3+ depending on material.

## Setting up the Form 4

1. Unpack the printer and place it on a stable, level surface in a room at 18–28 °C.
2. Remove the packing material and follow the on-screen setup on the 7-inch touchscreen.
3. Insert the resin tank, build platform and a 1-litre **Resin Cartridge V2**.
4. Connect the printer to Wi-Fi or Ethernet and register it to your Formlabs Dashboard account.
5. Prepare a file in **PreForm** and send it to the printer. The printer heats the resin automatically before printing.

**Tip:** the resin tank is rated for an estimated 75,000+ layers, but scratches or debris shorten its life – inspect it after any failed print.

## Connecting the Form 4

The Form 4 supports **Wi-Fi (2.4 and 5 GHz)**, **Gigabit Ethernet** and **USB-C**. For remote printing, turn it on in Settings → Connectivity and register the printer to **Dashboard**, Formlabs' cloud service, which passes jobs from PreForm to the printer and tracks progress.

## Post-processing: Form Wash and Form Cure

Resin parts need washing and curing. Formlabs updated **Form Wash** alongside the Form 4 so it fits several build platform sizes, and the second-generation **Form Cure**, announced in March 2025, fits all Form 4 parts and heats to 100 °C.

## Form 4 manual

Formlabs publishes the Form 4 manual on Formlabs Support under Manuals and documentation → Form 4 generation. The same section has the Form 4B manual and the Form 4 quick start guide as an article and a PDF in several languages. The Form 4L and Form 4BL manuals are under the Form 4L generation.

## Software

**PreForm** is Formlabs' free print-preparation software; it orients models, generates supports and sends jobs. Before importing a model, you can inspect it in our [STL viewer](/stl-viewer/) or convert an OBJ with our [OBJ to STL converter](/obj-to-stl/).

## Form 4, Form 4B and Form 4L

| Model | Build volume | For |
|---|---|---|
| Form 4 | 20.0 × 12.5 × 21.0 cm | General engineering and design |
| Form 4B | Same as Form 4 | Healthcare and dental, biocompatible resins |
| Form 4L | 35.3 × 19.6 × 35.0 cm | Large parts (announced October 2024) |

Compare the Form 4 with other printers in our [printer comparison tool](/printers/compare/).
