---
title: Bambu P1S manual – where to find it and what it covers
seoTitle: Bambu P1S Manual – Where to Find It and Quick Start
description: Where to find the official Bambu Lab P1S manual, what it covers, the quick-start steps, Bambu's maintenance schedule, firmware updates and common fixes.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/ee2523f7-8a64-4fa1-ba07-818392e59c45/output.png
imageAlt: "Illustration of a generic enclosed 3D printer with its door open and a cloth, alcohol, grease and a spare carbon filter on a tray"
category: Manuals
brand: Bambu Lab
summary:
  - Bambu Lab publishes the P1S manual on the Bambu Lab Wiki under P1 series → Manual, starting with the "Unboxing P1S" guide.
  - First setup means removing three Z-axis shipping screws, running the self-test and binding the printer in Bambu Handy.
  - Bambu recommends monthly checks of the carbon rods and linear rods and greasing the Z lead screws every three months.
faq:
  - q: Where can I find the Bambu P1S manual?
    a: On the Bambu Lab Wiki under P1 series → Manual. The "Unboxing P1S" and "Unboxing P1S Combo" guides cover setup, and the P1 series section also has maintenance, troubleshooting and firmware pages.
  - q: Do I need to grease the P1S carbon rods?
    a: No. Bambu Lab says to clean the X-axis carbon rods with isopropyl alcohol on a lint-free cloth and never grease them.
  - q: How do I update the P1S firmware?
    a: Accept the pop-up on the printer screen when it is online, or update from Bambu Handy. Offline updates from a microSD card work on firmware 01.07.00.00 or later.
  - q: How often should I replace the P1S carbon filter?
    a: Bambu Lab rates the activated carbon filter for 1,440 hours of cumulative printing (about 60 days).
sources:
  - name: Bambu Lab Wiki – P1 series home
    url: https://wiki.bambulab.com/en/p1
  - name: Bambu Lab Wiki – P1 series manual
    url: https://wiki.bambulab.com/en/p1/manual
  - name: Bambu Lab Wiki – Unboxing P1S
    url: https://wiki.bambulab.com/en/p1/manual/unboxing-p1s
  - name: Bambu Lab Wiki – Unboxing P1S Combo
    url: https://wiki.bambulab.com/en/p1/manual/unboxing-p1s_combo
  - name: Bambu Lab Wiki – P1 maintenance
    url: https://wiki.bambulab.com/en/p1/maintenance/p1p-maintenance
  - name: Bambu Lab Wiki – P1 FAQ
    url: https://wiki.bambulab.com/en/p1/manual/faq
  - name: Bambu Lab Wiki – P1 troubleshooting
    url: https://wiki.bambulab.com/en/p1/troubleshooting
  - name: Bambu Lab Wiki – P1 firmware upgrading
    url: https://wiki.bambulab.com/en/p1/manual/firmware-upgrading
  - name: Bambu Lab Wiki – P1 firmware update from SD card
    url: https://wiki.bambulab.com/en/p1/manual/P1-firmware-update-from-SD-card
  - name: Bambu Lab store – activated carbon air filter
    url: https://us.store.bambulab.com/products/activated-carbon-air-filter
  - name: Bambu Lab Wiki – how to avoid nozzle clogs
    url: https://wiki.bambulab.com/en/knowledge-sharing/how_to_avoid_nozzle_clogs
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**Bambu Lab publishes the official P1S manual on the Bambu Lab Wiki under P1 series → Manual, where the "Unboxing P1S" guide walks through setup.** The same section holds the Combo guide, a FAQ and firmware pages, and the P1 series home links to maintenance, troubleshooting and part replacement guides. This page summarises the Bambu P1S manual in our own words.

## What the official P1S manual covers

The P1 series section of the Wiki is organised in these parts:

1. **Quick start** – unboxing guides for the P1S and P1S Combo.
2. **Glossary and printer features** – the names of parts and what each feature does.
3. **Print settings** – materials and settings advice.
4. **Maintenance guides** – cleaning and lubrication with intervals.
5. **Consumables and part replacement** – nozzles, filters, PTFE tubes and more.
6. **Troubleshooting** – error messages and step-by-step fixes.
7. **Firmware upgrading** – online and offline updates.

More on the printer itself on our [Bambu Lab P1S](/printers/bambu-lab-p1s/) page.

## Bambu P1S quick start

1. **Check the box:** screen, spool holder, filament, spare hotend, power cord, PTFE tube, scraper and Allen keys. The textured PEI plate comes fitted.
2. **Fit the screen:** connect its cable and seat it.
3. **Remove the shipping screws:** three Z-axis screws, marked with red arrows.
4. **Self-test:** power on and follow the on-screen check, then remove the foam under the heatbed.
5. **Connect:** join your network and bind the printer in Bambu Handy.
6. **First print:** load the included Bambu PLA through the rear PTFE tube and print.

The Combo adds the AMS, its bus cables and a filament cutter, with the AMS buffer pre-installed. See our [Bambu AMS guide](/printers/bambu-lab-ams/).

## Maintenance schedule Bambu recommends

| Part | What to do | How often |
|---|---|---|
| X-axis carbon rods | Check for dust, clean with IPA, never grease | Monthly |
| Y and Z linear rods | Check; clean after ABS/ASA; anti-rust | Monthly / every 3 months |
| Z lead screws | Clean and apply thin grease | Every 3 months |
| Nozzle wiper | Check | Before every print |
| Fans | Blow out with compressed air, power off | Weekly |
| PTFE tube (AMS to extruder) | Check for wear | About every 10 rolls (5 abrasive) |
| Cutter blade | Check | Every 3–5 rolls (1–2 of CF/GF) |
| Carbon filter | Replace | Rated 1,440 h of printing |

Bambu Lab also suggests a cold pull at least once a month to prevent clogs. Do not grease the belts.

## Common P1S problems and Bambu's fixes

- **Nozzle clogs:** dry the filament, check the temperature, clean the nozzle, then slow down or raise the temperature slightly; keep the silicone sock fitted.
- **Heatbed not heating:** follow the Wiki's troubleshooting guide for that error.
- **Wi-Fi, binding or live view problems:** the troubleshooting section has a network binding guide.
- **Fibre-filled filaments:** Bambu Lab does not recommend CF or GF filaments without upgrading the extruder and hotend.

**Tip:** the P1S chamber is not actively heated – it warms from the bed – so leave the door closed for ABS and ASA.

## Firmware and software

When the P1S is online and bound, the screen shows an update pop-up; an update takes 5–15 minutes. Bambu Handy can also update or roll back firmware. For offline updates, copy the package unchanged to a microSD card (firmware 01.07.00.00 or later); do not power off during the roughly 20-minute install. Slice in Bambu Studio, and check a project first with our [3MF viewer](/3mf-viewer/).

## Related pages

Compare the P1S with newer models such as the [Bambu Lab P2S](/printers/bambu-lab-p2s/) in our [printer comparison tool](/printers/compare/).
