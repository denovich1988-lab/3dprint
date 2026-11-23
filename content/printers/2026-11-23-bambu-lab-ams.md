---
title: Bambu Lab AMS – AMS, AMS 2 Pro, AMS HT and AMS lite explained
seoTitle: Bambu AMS Guide – AMS 2 Pro, AMS HT, AMS lite
description: Bambu AMS explained – how the AMS, AMS 2 Pro, AMS HT and AMS lite differ, which printers each works with, slots, drying temperatures and filament limits.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/46ca7057-9d1f-4391-ad59-755585023390/output.png
imageAlt: "Illustration of a generic automatic filament feeder unit holding four colourful spools"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu AMS (Automatic Material System) feeds up to four spools per unit into one printer for multi-colour printing.
  - The AMS 2 Pro dries filament at up to 65 °C and the single-spool AMS HT at up to 85 °C.
  - The AMS lite works only with the A1 and A1 mini, one unit per printer.
faq:
  - q: What is the Bambu AMS?
    a: The AMS (Automatic Material System) is Bambu Lab's filament changer. It holds spools, feeds the selected one into the printer and can switch to a matching spool when one runs out.
  - q: Which Bambu AMS works with the A1?
    a: The AMS lite. Bambu Lab says the AMS lite is not compatible with the X1 or P1 series, and the original AMS is not compatible with the A1 mini.
  - q: Can the Bambu Lab AMS print TPU?
    a: Generally no. Bambu Lab lists TPU and TPE as unsupported in the AMS 2 Pro and AMS lite; the AMS HT has a bypass outlet for them, where the unit acts only as a dry box.
  - q: How many AMS units can I connect?
    a: X1 and P1 printers take up to four AMS units (16 colours). H2 printers take up to 4 AMS 2 Pro plus 8 AMS HT. The A1 and A1 mini take one AMS lite.
sources:
  - name: Bambu Lab Wiki – connecting AMS on P1 (slot labels A1–D4)
    url: https://wiki.bambulab.com/en/p1/manual/connect-AMS-multi-color-printing
  - name: Bambu Lab store – AMS 2 Pro
    url: https://us.store.bambulab.com/products/ams-2-pro
  - name: Bambu Lab store – AMS HT
    url: https://us.store.bambulab.com/products/ams-ht
  - name: Bambu Lab Wiki – AMS HT intro and connection guide
    url: https://wiki.bambulab.com/en/ams-ht/manual/intro-and-connection-guide
  - name: Bambu Lab Wiki – AMS 2 Pro and AMS HT FAQ
    url: https://wiki.bambulab.com/en/ams/manual/ams-2-pro-ams-ht-faq
  - name: Bambu Lab Wiki – AMS 2 Pro setup and printing
    url: https://wiki.bambulab.com/en/ams-2-pro/manual/setup-and-printting
  - name: Bambu Lab Wiki – AMS lite FAQ
    url: https://wiki.bambulab.com/en/ams-lite/manual/faq
  - name: Bambu Lab Wiki – A1 mini FAQ
    url: https://wiki.bambulab.com/en/a1-mini/manual/faq
  - name: Bambu Lab blog – H2D launch with AMS 2 Pro and AMS HT
    url: https://blog.bambulab.com/bambu-lab-launches-h2d-to-rethink-personal-manufacturing/
tools: [3mf-to-stl, 3mf-viewer, png-to-3mf]
---
**The Bambu AMS (Bambu Lab Automatic Material System) is a filament changer that holds several spools and feeds the right one into the printer, so a single print can use up to four colours per unit – and up to 24 slots on the largest setups.** There are four current models: the original AMS, the AMS 2 Pro, the single-spool AMS HT and the AMS lite.

## Bambu AMS models at a glance

| | AMS | AMS 2 Pro | AMS HT | AMS lite |
|---|---|---|---|---|
| Slots per unit | 4 | 4 | 1 | 4 |
| Drying | No | Up to 65 °C | Up to 85 °C | No |
| Printers | X1, P1, H2 (no drying) | X1, P1, P2S, H2 | X1, P1, H2 | A1, A1 mini only |
| Max units | 4 on X1/P1 | 4 (+8 AMS HT) | 4 on X1/P1, 8 on H2 | 1 |

The AMS 2 Pro and AMS HT were announced with the H2D on 25 March 2025.

## Bambu Lab AMS (original)

The first AMS holds four spools. On X1 and P1 printers you can chain up to four units for 16 colours; more than one unit needs the AMS Hub. It also works on the H2 series, without drying. It is not compatible with the A1 mini.

## AMS 2 Pro

The AMS 2 Pro keeps four slots and adds a heater for drying filament at up to 65 °C, in a rotating mode (the spool turns every few minutes) or a static mode. Bambu Lab lists:

- Spool width 50–68 mm, spool diameter 197–202 mm, 1.75 mm filament.
- RFID reading of Bambu filament, which also picks the drying settings.
- Not supported: TPE, generic TPU, damp PVA or BVOH, Bambu PET-CF, Bambu TPU 95A and carbon- or glass-fibre filaments.

**Tip:** only one unit can dry on printer power, and a unit cannot dry while it is feeding the current print. On X1 and P1 printers drying needs a separate power adapter.

## AMS HT

The AMS HT holds one spool and dries at up to 85 °C, aimed at engineering filaments such as PA, PC and PP. It has a bypass outlet for materials the feeder cannot handle, such as TPU and fibre-filled filaments; then it works only as a dry box and you feed the filament by hand. Each unit needs its own power supply for drying and uses the 6-pin cable.

## AMS lite

The AMS lite is the open, four-spool feeder for the [Bambu Lab A1](/printers/bambu-lab-a1/) and [A1 mini](/printers/bambu-lab-a1-mini/). It has no drying and no electronics in the hub, and only one unit fits per printer. Bambu Lab lists spool widths of 40–68 mm and says to avoid TPU, TPE, damp PVA and very brittle filaments.

## Which Bambu AMS fits your printer

- **A1 or A1 mini:** AMS lite.
- **P1S or X1 series:** AMS (up to four), AMS 2 Pro or AMS HT; drying needs an adapter.
- **P2S:** sold as a Combo with the AMS 2 Pro – see our [P2S page](/printers/bambu-lab-p2s/).
- **H2S or H2D:** AMS 2 Pro and AMS HT, up to 4 + 8 units. See the [H2D](/printers/bambu-lab-h2d/) and [H2S](/printers/bambu-lab-h2s/) pages.

## Setting up an AMS

The wiki steps for an AMS HT on X1 or P1 are typical:

1. Connect the included power cable.
2. Run the PTFE tube from the AMS outlet to the printer.
3. Connect the 6-pin cable.
4. Use a buffer for one unit or the AMS Hub for several.

On the H2D, mount the AMS 2 Pro on top and set it up from the Filament → AMS Setup menu. Bambu Lab recommends a PTFE tube of at least 600 mm.

## Where the AMS manuals are

Bambu Lab publishes a separate manual section for each model on the Bambu Lab Wiki (AMS, AMS 2 Pro, AMS HT and AMS lite), plus printer-specific installation guides. Multi-colour prints are prepared in Bambu Studio and saved as 3MF; our [3MF viewer](/3mf-viewer/) lets you check a project file in the browser.
