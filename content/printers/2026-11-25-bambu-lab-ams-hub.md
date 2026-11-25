---
title: Bambu Lab AMS Hub – X1, P1 and A1 versions explained
seoTitle: Bambu Lab AMS Hub – X1, P1 and A1 Versions Explained
description: Bambu Lab AMS Hub explained – how the X1/P1 and A1 series hubs connect up to four AMS units, compatibility, box contents, cables and installation steps.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/a435eb09-46dc-4513-a8b0-c55a587adcde/output.png
imageAlt: "Illustration of a small grey filament hub box on the back of an enclosed printer, with white tubes and flat cables fanning out to a stack of four four-spool filament boxes holding colourful spools"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu Lab AMS Hub lets one printer use up to four AMS units, for up to 16 filament slots.
  - There are two versions – one for the X1 and P1 series, which replaces the printer's single-AMS buffer, and one for the A1 series.
  - H2 series printers have a built-in buffer and do not use the AMS Hub.
faq:
  - q: What does the Bambu Lab AMS Hub do?
    a: It connects several AMS units to one printer. The X1 and P1 version replaces the built-in buffer, which handles only one AMS, so you can run up to four units and 16 slots.
  - q: Do I need an AMS Hub for one AMS 2 Pro on a P1S?
    a: No. A single AMS 2 Pro on a P1S runs through the printer's buffer. You need the hub for two or more units.
  - q: Does the A1 need the AMS Hub?
    a: Only to use the AMS, AMS 2 Pro or AMS HT. The AMS lite connects to the A1 directly, and the two types cannot be mixed.
  - q: Does the AMS Hub work with the H2D?
    a: H2 printers do not use it. They have a built-in feeding buffer and connect AMS units with a 6-pin cable.
sources:
  - name: Bambu Lab store – AMS Hub
    url: https://us.store.bambulab.com/products/ams-hub
  - name: Bambu Lab Wiki – Connect AMS Hub and multi AMS
    url: https://wiki.bambulab.com/en/x1/manual/Connect-AMS-Hub-and-multi-AMS
  - name: Bambu Lab Wiki – Multi-model AMS compatibility guide
    url: https://wiki.bambulab.com/ams/manual/multi-model-AMS-compatibility-guide
  - name: Bambu Lab Wiki – A1 AMS connection guide
    url: https://wiki.bambulab.com/en/a1/manual/ams-connection-guide
  - name: Bambu Lab store – AMS Hub, A1 Series
    url: https://jp.store.bambulab.com/en/products/ams-hub-a1-series
  - name: Bambu Lab Wiki – AMS 2 Pro intro and connection guide
    url: https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide
  - name: Bambu Lab forum – A1 firmware V01.06.10.33 public beta
    url: https://forum.bambulab.com/t/a1-series-firmware-v01-06-10-33-now-in-public-beta/201055
tools: [3mf-to-stl, stl-viewer, 3d-viewer]
---
**The Bambu Lab AMS Hub is an accessory that lets one printer run up to four AMS units – up to 16 filament slots – and it comes in two versions: one for the X1 and P1 series and one for the A1 series.** On X1 and P1 printers it replaces the built-in buffer, which only handles a single AMS. On the A1 it lets the printer use the full-size AMS units instead of the AMS lite. This page explains compatibility, box contents and installation.

## AMS Hub at a glance

| | AMS Hub (X1 and P1 series) | AMS Hub – A1 Series |
|---|---|---|
| Printers | X1 series, P1 series | A1 series |
| AMS units | AMS, AMS 2 Pro, AMS HT in any mix | AMS, AMS 2 Pro, AMS HT in any mix |
| Maximum | 4 units | 4 units |
| Mounting | Back of the printer, in place of the buffer | Printed bracket on the X-axis motor |
| Cable to printer | 4-pin (not included) | 4-pin (included) |
| AMS lite | Not compatible | Not needed, cannot be mixed |

## AMS Hub for the X1 and P1 series

The X1 and P1 printers ship with a filament buffer that takes one AMS. Swap it for the hub and you can chain up to four units – any mix of [AMS](/printers/bambu-lab-ams/), [AMS 2 Pro](/printers/bambu-lab-ams-2-pro/) and [AMS HT](/printers/bambu-lab-ams-ht/). Bambu Lab's compatibility guide notes that a single AMS 2 Pro on a P1S works through the buffer, and the P1S AMS 2 Pro Combo ships with the hub instead of the buffer.

Bambu Lab's store lists the box contents as the hub, two 1.5 m 6-pin bus cables, PTFE tube and two M3×28 screws. The 4-pin cable from the hub to the printer is not included. The hub measures 140 × 60 × 22 mm and weighs 84 g. For four units, Bambu Lab says to order two more 6-pin cables and two more 2 m PTFE tubes.

**Tip:** use the newer 6-pin cables that ship with the AMS 2 Pro and AMS HT. The wiki says the old first-generation cable can cause unstable communication.

## AMS Hub – A1 Series

The full-size AMS units push filament with their own feed motors, so the A1 needs a hub that controls the filament tension for accurate extrusion. Bambu Lab added this support in A1 firmware V01.06.10.33, a public beta announced in October 2025, which needs Bambu Studio 2.3.0 or newer.

The kit contains the hub, a 4-pin cable and two PTFE tubes. The mounting bracket is a printable file that Bambu Lab Support publishes on MakerWorld. Bambu Lab lists the hub for the A1 series; the A1 mini is not mentioned. The [AMS lite](/printers/bambu-lab-ams-lite/) still connects without a hub, but it cannot be mixed with the other units.

## Installing the AMS Hub on X1 and P1

From the Bambu Lab Wiki guide "Connect AMS Hub and multi AMS", at a high level:

1. Remove the buffer and mount the hub on the back of the printer.
2. Run the PTFE tube from the hub to the printer's coupler, under the spool holder.
3. Check that the hub's spring moves freely, then connect the 4-pin cable the right way round – a reversed cable can damage the mainboards.
4. Connect your most-used AMS first and power on, then add the other units one at a time so their IDs come out in order.
5. Keep the longest PTFE run within 3.5 m.

## Installing the AMS Hub on the A1

1. Print and fit the hub bracket.
2. With the old AMS lite unplugged, set the AMS type in Bambu Studio (Device → AMS Settings) or on the printer (Settings → AMS Options).
3. Connect the hub, cables and tubes; the tube goes straight to the toolhead filament hub.
4. Add AMS units in the order you want them labelled A, B, C and D.

## Power and drying

The hub draws power from the printer bus. Drying is separate: on X1, P1 and A1 printers each AMS 2 Pro needs its own power adapter and the AMS HT needs its own mains cable.

## H2 series: no hub needed

H2 printers such as the [H2D](/printers/bambu-lab-h2d/) have a built-in feeding buffer and connect AMS units directly with a 6-pin cable. See all the units in our [Bambu Lab AMS guide](/printers/bambu-lab-ams/) or browse the [Bambu Lab 3D printers](/printers/bambu-lab-3d-printers/).
