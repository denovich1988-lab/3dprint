---
title: Bambu Lab A1 manual – where to find it and what it covers
seoTitle: Bambu Lab A1 Manual – Where to Find It and Quick Start
description: Where to find the official Bambu Lab A1 manual, what its sections cover, unboxing and first print, Bambu's maintenance schedule, firmware and common fixes.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/3ab1b5d5-3fbe-4532-b50b-a2404f76db10/output.png
imageAlt: "Illustration of an unboxing flat-lay with a compact printer base, a quick-start sheet, oil, grease, a PTFE tube and screws in trays"
category: Manuals
brand: Bambu Lab
summary:
  - Bambu Lab publishes the A1 manual on the Bambu Lab Wiki under A1 → Manual, with a quick start guide PDF and setup pages.
  - The setup pages cover unboxing the A1 Combo, mounting the AMS lite and the first print with an AMS lite or an external spool.
  - Bambu recommends oiling the X and Y rails monthly and greasing the lead screws every three months.
faq:
  - q: Where can I find the Bambu Lab A1 manual?
    a: On the Bambu Lab Wiki under A1 → Manual. It has an introduction section with a quick start guide PDF, setting-up guides (unboxing, AMS lite mounting, first print) and an A1 FAQ.
  - q: How often should I lubricate the Bambu A1?
    a: Bambu Lab recommends cleaning and oiling the X and Y rails monthly, and greasing the lead screws and oiling the idler pulleys every three months.
  - q: Does the Bambu A1 need a microSD card?
    a: Yes. Bambu Lab says the A1 requires a microSD card; a 32 GB card is included.
  - q: How do I update the Bambu A1 firmware?
    a: Accept the update pop-up on the printer when it is online, or update from Bambu Handy. Offline updates from a microSD card work from firmware 01.04.00.00.
sources:
  - name: Bambu Lab Wiki – A1 manual
    url: https://wiki.bambulab.com/en/a1/manual
  - name: Bambu Lab Wiki – Unboxing A1 Combo
    url: https://wiki.bambulab.com/en/a1/manual/unboxing-a1-combo
  - name: Bambu Lab Wiki – A1 FAQ
    url: https://wiki.bambulab.com/a1/manual/faq
  - name: Bambu Lab Wiki – A1 basic maintenance
    url: https://wiki.bambulab.com/en/a1/maintenance/basic-maintenance
  - name: Bambu Lab Wiki – A1 homing and levelling failure
    url: https://wiki.bambulab.com/en/a1/troubleshooting/homing-leveling-failure
  - name: Bambu Lab Wiki – A1 heatbed not heating
    url: https://wiki.bambulab.com/en/a1/troubleshooting/heatbed-not-heat-up
  - name: Bambu Lab Wiki – A1 firmware update from SD card
    url: https://wiki.bambulab.com/en/a1/manual/a1-firmware-update-from-SD-card
  - name: Bambu Lab Wiki – A1 first print with AMS lite
    url: https://wiki.bambulab.com/en/a1/manual/first-print-with-ams-lite
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**Bambu Lab publishes the official A1 manual on the Bambu Lab Wiki under A1 → Manual, where you will find the quick start guide PDF and the setup guides.** The A1 section also has maintenance, troubleshooting and firmware pages. This page summarises the Bambu Lab A1 manual in our own words.

## What the official A1 manual covers

The A1 → Manual section has three parts:

1. **Introduction** – an overview of the A1, the quick start guide PDF, and how filament tangle monitoring, nozzle clumping detection, build plate detection and air-printing detection work.
2. **Setting up** – unboxing the A1 Combo, the packing list notes, the AMS lite top mount guide, and the first print with an AMS lite or an external spool.
3. **Appendix** – the A1 FAQ.

The A1 has a 256 × 256 × 256 mm build volume, a 300 °C hotend and a 100 °C bed. More on our [Bambu Lab A1](/printers/bambu-lab-a1/) page.

## Bambu Lab A1 quick start

1. **Unpack carefully:** lift by the Z-axis bracket and the base, never by the X axis or the heatbed.
2. **Assemble:** fix the base, the AMS lite stand and the purge wiper with the supplied screws, and fit the spool holder if you use an external spool.
3. **Connect the AMS lite:** short PTFE tubes to ports 1–2, long ones to 3–4, then plug in the 4-pin cable with room for the bed to move.
4. **Power on:** fit a clean build plate, switch on and follow the on-screen initialisation and calibration.
5. **Bind:** link the printer to Bambu Handy.
6. **First print:** load filament, slice in Bambu Studio and print.

The A1 needs about 695 mm of front-to-back space for the moving bed. Read more about the filament changer on our [AMS lite](/printers/bambu-lab-ams-lite/) page.

## Maintenance schedule Bambu recommends

| Part | What to do | How often |
|---|---|---|
| X rail | Clean and oil (never grease) | Monthly |
| Y rails | Clean and oil both sides | Monthly |
| Hotend heating assembly | Wipe with alcohol | Monthly |
| Lead screws | Grease | Every 3 months |
| X and Y idler pulleys | Oil | Every 3 months |
| Fan ducts | Clean | Weekly |
| Cutter blade | Check | Every 3 rolls |
| PTFE tube | Replace | Every 6 rolls of PLA (2 of CF) |
| Belts | Re-tension | When the printer prompts |

Bambu Lab also recommends running auto bed levelling before every print and again when you change plates.

## Common A1 problems and Bambu's fixes

- **Homing or levelling fails:** clean the nozzle, make sure the hotend screws are tight and the plate is clear, then clean and grease the Z lead screws. The Wiki lists fixes by HMS error code.
- **False touches in mid-air:** update to firmware 1.03 or later and straighten bent PTFE tubes at the hub.
- **Heatbed not heating or showing 0 °C:** check the thermistor plug under the base, then follow the Wiki's measurement steps.
- **Poor first layer:** run auto bed levelling again with the plate you print on.

**Tip:** ABS, ASA, PC and PA are only suited to small, low-infill parts on the open A1, with good ventilation.

## Firmware and software

When the A1 is online, it shows an update pop-up; Bambu Handy can also update or roll back firmware. For offline updates, copy the package unchanged to the microSD card (firmware 01.04.00.00 or later) and do not switch off during the roughly 20-minute install. Slice in Bambu Studio, and check a project first with our [3MF viewer](/3mf-viewer/).

## Related pages

See the [Bambu P1S manual](/printers/bambu-lab-p1s-manual/) for the enclosed model, or compare the A1 with the [A1 mini](/printers/bambu-lab-a1-mini/) in our [printer comparison tool](/printers/compare/).
