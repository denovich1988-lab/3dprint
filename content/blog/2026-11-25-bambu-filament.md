---
title: Bambu filament – the Bambu Lab filament range explained
seoTitle: Bambu Filament – Bambu Lab Filament Types and Settings
description: Bambu filament explained – the Bambu Lab filament range, RFID and the AMS, refills, which grades need a hardened nozzle, print temperatures and drying.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/006bf61c-c7a2-41aa-99f6-9ca52cc0985d/output.png
imageAlt: "Illustration of a row of unlabelled filament spools in matte, silk, translucent and carbon-black finishes, a refill coil being fitted onto a reusable spool and a sealed dry box with desiccant"
category: Filament and materials
summary:
  - Bambu filament is Bambu Lab's own 1.75 mm range, from PLA Basic and PLA Matte to PETG HF, ABS, ASA, TPU and carbon- or glass-fibre engineering grades.
  - An RFID tag on official spools lets the AMS read the filament type and colour automatically; other brands work but must be set by hand.
  - Carbon- and glass-fibre grades need a hardened steel nozzle, and very soft TPU cannot go through the AMS.
faq:
  - q: What is Bambu filament?
    a: Bambu filament is Bambu Lab's own range of 1.75 mm 3D printing filament. Official spools carry an RFID tag that the AMS reads, so the printer knows the material and colour without manual setup.
  - q: Can Bambu Lab printers use other brands of filament?
    a: Yes. Third-party filament works, but you set the type and colour yourself on the printer screen or in Bambu Studio, because only official spools have the RFID tag.
  - q: Do Bambu filament refills need a spool?
    a: Yes. Bambu Lab sells refills without a spool and notes that a refill must be mounted on a spool, such as the Bambu reusable spool.
  - q: Which Bambu filaments cannot be used in the AMS?
    a: Bambu Lab says the AMS and AMS lite do not take filaments that are too soft, too brittle or too hard and rough. TPU 95A HF is marked not compatible; use the external spool holder for it.
sources:
  - name: Bambu Lab US store – 3D printer filament collection
    url: https://us.store.bambulab.com/collections/bambu-lab-3d-printer-filament
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab Wiki – AMS setup and filament loading
    url: https://wiki.bambulab.com/en/x1/manual/ams-setup-and-filament-loading
  - name: Bambu Lab Wiki – Swapping new filament with the Bambu reusable spool
    url: https://wiki.bambulab.com/en/general/swaping-new-filament-with-bambu-reusable-spool
  - name: Bambu Lab store – PLA Basic
    url: https://us.store.bambulab.com/products/pla-basic-filament
  - name: Bambu Lab store – PLA Matte
    url: https://us.store.bambulab.com/products/pla-matte
  - name: Bambu Lab store – TPU 95A HF
    url: https://us.store.bambulab.com/products/tpu-95a-hf
  - name: Bambu Lab store – Filament refill collection
    url: https://us.store.bambulab.com/collections/filament-refill
  - name: Bambu Lab – Filament comparison guide
    url: https://bambulab.com/en-us/filament/guide
tools: [3mf-to-stl, stl-viewer, 3d-viewer]
---
**Bambu filament is Bambu Lab's own range of 1.75 mm 3D printing filament, with RFID-tagged spools that the AMS reads automatically, from everyday PLA Basic to carbon-fibre engineering grades.** You do not have to use it – Bambu printers print other brands too – but the tags save setup and the profiles are built into Bambu Studio. This guide explains the range, what the RFID tag does, refills, which grades need special hardware, and the temperatures and drying Bambu Lab recommends. Facts are from Bambu Lab's store and wiki, checked November 2026; the range changes often, so check the store for current products.

## Bambu filament at a glance

| Family | Examples in the range | Good for | AMS |
|---|---|---|---|
| PLA | PLA Basic, PLA Matte, PLA Silk+, PLA Wood, PLA Glow, PLA Marble, PLA Sparkle, PLA Metal | Everyday prints, decor, gifts | Yes |
| Tough PLA | PLA Tough | Stronger functional PLA parts | Yes |
| PETG | PETG Basic, PETG HF, PETG Translucent | Outdoor and heat-tolerant parts | Yes |
| ABS / ASA | ABS, ASA | Heat-resistant and UV-resistant parts (enclosed printer) | Yes |
| TPU | TPU for AMS, TPU 95A HF | Flexible parts | TPU for AMS only |
| Fibre-filled | PLA-CF, PETG-CF, PAHT-CF, PA-CF | Stiff engineering parts | Yes; hardened nozzle needed |
| Support | Support for PLA, Support for PLA/PETG, Support for PA/PET, PVA | Easy-release support interfaces | PVA only when dry |

## What the RFID tag does

Every official Bambu spool has an RFID tag. When you load it into the AMS, the printer reads the material type and colour automatically, and Bambu Lab says the printing parameters are stored on the tag too. You can view these details but not edit them.

**Why it matters:** with several spools in an AMS, the tags stop you printing PETG with PLA settings by mistake. Third-party spools have no tag, so you enter the type and colour on the screen or in Bambu Studio. See our [Bambu Lab AMS](/printers/bambu-lab-ams/) page for how the unit works.

## Refills and the reusable spool

Bambu Lab sells many grades both "with spool" and as a **refill** – the filament wound without a spool. A refill must be fitted onto a spool, such as the Bambu reusable spool; the wiki shows how to swap a refill onto it. The refill collection currently includes PLA Basic, PLA Matte, PLA-CF, PETG HF, PETG Translucent, PETG-CF and ABS.

**Tip:** buy one or two reusable spools first, then switch to refills for the colours you use most.

## PLA: Basic, Matte, Silk+ and specialty PLA

PLA Basic is the default for most prints. Bambu Lab's PLA Basic page gives a nozzle range of 190–230 °C and a bed of 35–45 °C with glue, and recommends staying under 300 mm/s. PLA Matte hides layer lines, Silk+ gives a shiny finish, and the specialty PLAs (Wood, Glow, Marble, Sparkle, Metal) are for decorative prints. For PLA in general, the wiki's material table gives 190–240 °C at the nozzle.

For food contact, read our guide [Is PLA food safe?](/blog/is-pla-food-safe/).

## PETG: Basic, HF and Translucent

PETG handles more heat and outdoor use than PLA. The wiki gives 240–270 °C at the nozzle and 60–80 °C on the bed. PETG HF is Bambu Lab's high-flow PETG for faster printing, and PETG Translucent lets light through. Choosing between the two families? Read [PETG vs PLA](/blog/petg-vs-pla/).

## ABS and ASA

ABS and ASA need 240–280 °C at the nozzle and a 90–100 °C bed, according to the wiki. Both warp in a cold room, so print them in an enclosed printer such as the [Bambu Lab P1S](/printers/bambu-lab-p1s/) or X1 Carbon. ASA adds UV resistance for outdoor parts.

## TPU: which one goes through the AMS

The AMS and AMS lite do not take filament that is too soft, too brittle or too hard and rough. Bambu Lab lists soft TPUs (95A, 85A and softer) as not AMS-compatible. **TPU 95A HF** is marked "AMS & AMS lite not compatible": feed it from the external spool holder at 220–240 °C, with a 30–35 °C bed and glue. Bambu Lab also sells a **TPU for AMS** grade made to run through the AMS. More in our [TPU filament guide](/blog/tpu-filament/).

## Carbon- and glass-fibre grades need a hardened nozzle

The wiki marks PLA-CF, PETG-CF, PAHT-CF and the PA-CF/GF grades as needing a **hardened steel nozzle**, and does not recommend stainless steel or brass nozzles for them, because the fibres wear soft nozzles quickly. PETG-CF runs in the AMS but is not recommended for the AMS lite. Engineering grades such as PAHT-CF and PC also need a hot bed (100–120 °C) and an enclosure.

## Drying Bambu filament

| Material | Drying (oven, from the wiki) |
|---|---|
| PLA | 55 °C, 8 h |
| PETG | 70 °C, 8 h |
| ABS / ASA | 80 °C, 8 h |
| TPU | 70 °C, 8 h (required) |
| PC | 80 °C, 8 h (required) |
| PAHT-CF | 80 °C, 8–12 h (required) |

Individual product pages can differ: PLA Matte, for example, lists 50 °C for 8 hours in an oven. When in doubt, Bambu Lab recommends drying and storing filament with desiccant. Our [filament dryer guide](/blog/filament-dryer/) explains the options.

## How to choose a Bambu filament

1. **Decorative or everyday print:** PLA Basic or PLA Matte.
2. **Outdoor, warm or load-bearing:** PETG HF, or ASA in an enclosed printer.
3. **Flexible:** TPU for AMS in the AMS, or TPU 95A HF from the external holder.
4. **Stiff engineering part:** a CF grade, only with a hardened steel nozzle.
5. **Multi-material with clean overhangs:** add a Support for PLA or PVA interface.

## Verdict

Bambu filament is the easiest choice on a Bambu printer because the RFID tags and built-in profiles remove setup, and refills cut the cost of spools. It is not required: any good 1.75 mm filament prints well once you set the type and colour by hand. Check AMS compatibility and nozzle needs before buying specialty grades.

Before you print, check your model in our [STL viewer](/stl-viewer/), or extract it from a MakerWorld project with the [3MF to STL converter](/3mf-to-stl/).
