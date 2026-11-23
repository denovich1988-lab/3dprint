---
title: Bambu Lab AMS lite – compatibility, filaments and setup
seoTitle: Bambu Lab AMS lite – Compatibility, Filaments and Setup
description: Bambu Lab AMS lite explained – which printers it works with, spool sizes, supported and unsupported filaments, RFID, mounting, setup and common feeding problems.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/1f375a8f-96b4-425f-81af-1d1565172ac8/output.png
imageAlt: "Illustration of an open four-spool filament changer on a stand with PTFE tubes curving into a hub beside a bed-slinger printer"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu Lab AMS lite is an open four-slot filament changer for multi-colour printing on the A1 and A1 mini.
  - Only one AMS lite connects to a printer, so the maximum is four colours.
  - It does not support TPU 95A or softer, TPE, wet PVA or most fibre-filled filaments.
faq:
  - q: Which printers work with the Bambu Lab AMS lite?
    a: The A1 and A1 mini. Bambu Lab says the AMS lite is not compatible with the X1 or P1 series, which use the AMS or AMS 2 Pro instead.
  - q: Can I connect two AMS lite units?
    a: No. Bambu Lab supports one AMS lite per printer, so the A1 and A1 mini print up to four colours with it.
  - q: Does the Bambu AMS lite support cardboard spools?
    a: The spring-loaded rotary holders grip the spool's centre hole, which Bambu Lab says improves compatibility with cardboard spools. Spools must be 40–68 mm wide with a 53–58 mm hole.
  - q: Does the AMS lite dry filament?
    a: No. The AMS lite is an open design with no cover or heater. The AMS 2 Pro and AMS HT are the Bambu units that dry filament.
sources:
  - name: Bambu Lab store – AMS lite
    url: https://us.store.bambulab.com/products/ams-lite
  - name: Bambu Lab Wiki – AMS lite FAQ
    url: https://wiki.bambulab.com/en/ams-lite/manual/faq
  - name: Bambu Lab Wiki – AMS lite introduction
    url: https://wiki.bambulab.com/i/1078
  - name: Bambu Lab Wiki – AMS lite support article
    url: https://wiki.bambulab.com/i/1092
  - name: Bambu Lab Wiki – AMS lite basic maintenance
    url: https://wiki.bambulab.com/en/ams-lite/maintenance/basic-maintenance
  - name: Bambu Lab Wiki – A1 first print with AMS lite
    url: https://wiki.bambulab.com/en/a1/manual/first-print-with-ams-lite
  - name: Bambu Lab Wiki – AMS lite top mount tutorial
    url: https://wiki.bambulab.com/en/a1/manual/ams-lite-top-mount-tutorial
  - name: Bambu Lab Wiki – A1 AMS connection guide
    url: https://wiki.bambulab.com/en/a1/manual/ams-connection-guide
  - name: All3DP – A1 mini and AMS lite launch
    url: https://all3dp.com/4/bambu-lab-release-brings-not-one-but-two-new-budget-pieces-of-hardware
  - name: "Make: – Bambu launches the A1 mini"
    url: https://makezine.com/article/digital-fabrication/3d-printing-workshop/bambu-launches-new-budget-multi-color-3d-printer-the-a1-mini/
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**The Bambu Lab AMS lite is a four-slot automatic material system that adds multi-colour and multi-material printing to the Bambu Lab A1 and A1 mini.** It has an open design with rotating spool holders and no cover. When a spool runs out, it can switch to another spool with the same filament. Bambu Lab announced it with the A1 mini on 20 September 2023.

## AMS lite at a glance

| Item | Detail |
|---|---|
| Slots | 4 |
| Works with | A1, A1 mini |
| Units per printer | 1 (max 4 colours) |
| Spool width | 40–68 mm |
| Spool hole | 53–58 mm |
| Filament diameter | 1.75 mm |
| Size | 397 × 208 × 342 mm |
| Weight | 1.6 kg |
| Drying | None |

## Which printers work with the AMS lite

The AMS lite connects only to the A1 and A1 mini, with a 4-pin cable. It does not work with the X1 or P1 series. Bambu Lab's Wiki also describes an AMS Hub for the A1 series that lets the A1 use the AMS, AMS 2 Pro and AMS HT instead; the AMS lite cannot be mixed with those units. See our [Bambu AMS guide](/printers/bambu-lab-ams/) for the other units.

## Supported filaments

Bambu Lab lists PLA, PETG, ASA, PET, PA, PC, PP, POM, HIPS, Bambu PLA-CF, Bambu PAHT-CF, and dry PVA and BVOH as supported.

**Do not load** TPU 95A or softer, TPE, wet PVA or BVOH, Bambu PET-CF, PA6-CF or other carbon- or glass-filled filaments. Bambu Lab also advises against glow-in-the-dark PLA, which wears parts faster. Feed these from an external spool instead.

## RFID and filament settings

Each slot has an RFID coil that reads Bambu Lab filament tags and sends the type and colour to Bambu Studio. Third-party filament has no tag, so you set its type and colour by hand for that slot.

## Setting up the AMS lite

1. Fix the AMS lite stand with the supplied screws and place the unit about 50 mm from the printer.
2. Connect the PTFE tubes: the short ones to ports 1–2, the long ones to ports 3–4.
3. Plug the 4-pin cable into the printer, leaving room for the bed to move.
4. Mount a spool so the filament leaves from below the feeder and push it into the inlet – it feeds about 40 cm automatically.
5. Slice in Bambu Studio, enable "Use AMS" and map each colour to a slot.

**Tip:** put heavier spools in slots 2 and 3 and lighter ones in slots 1 and 4. Do not mount the AMS lite on a wall.

## Mounting the AMS lite on top of the A1

On the A1 (not the A1 mini), the AMS lite can sit on the frame beam with a printed bracket set and screws, described in Bambu Lab's top mount tutorial. The total height is then about 80 cm.

## Common AMS lite problems

- **False tangle alarms:** usually PTFE tubes that are too long or bent sharply – use the supplied lengths.
- **Jams:** brittle or fibre-filled filament; dry it or feed it from an external spool.
- **Feeding failures:** check the PTFE tubes for wear during routine maintenance and replace worn ones.

## Launch price

The A1 mini Combo with AMS lite launched at US$459 in the US. All3DP reported the AMS lite on its own at US$249.

## Related pages

Read about the printers on the [Bambu Lab A1](/printers/bambu-lab-a1/) and [Bambu Lab A1 mini](/printers/bambu-lab-a1-mini/) pages. Check multi-colour models in our [3MF viewer](/3mf-viewer/).
