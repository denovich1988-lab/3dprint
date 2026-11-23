---
title: Bambu Lab AMS 2 Pro – drying, compatibility and setup
seoTitle: Bambu Lab AMS 2 Pro – Drying, Compatibility and Setup
description: Bambu Lab AMS 2 Pro automatic material system explained – four slots, 65 °C drying, which printers it works with, power adapters, filaments and setup.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/631affe7-dfe7-477e-9685-6a2dd158e381/output.png
imageAlt: "Illustration of a sealed four-spool filament box with drying vents and a humidity display feeding an enclosed printer"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu Lab AMS 2 Pro is a sealed four-slot filament changer that also dries filament at up to 65 °C.
  - It connects to H2 printers directly with a 6-pin cable; X1 and P1 printers need a buffer or AMS Hub.
  - Up to four AMS 2 Pro and eight AMS HT units can be chained for 24 filaments.
faq:
  - q: What is the Bambu Lab AMS 2 Pro?
    a: It is Bambu Lab's second-generation automatic material system – a sealed box with four filament slots, a humidity sensor, RFID readers and a built-in heater that dries filament at up to 65 °C.
  - q: Does the Bambu AMS 2 Pro work with the X1 and P1 series?
    a: Yes. One unit needs an extra buffer and several units need the AMS Hub. Drying on X1 and P1 printers needs Bambu Lab's power adapter for each unit.
  - q: Does the Bambu Lab AMS 2 Pro automatic material system need a power adapter?
    a: Only for drying in some setups. On H2 printers one unit dries on printer power and each additional unit needs Bambu Lab's adapter; on X1 and P1 printers every unit needs one to dry.
  - q: Does the AMS 2 Pro support TPU?
    a: Bambu Lab lists "TPU for AMS" as supported, but generic TPU, Bambu TPU 95A and TPE are not. Use an external spool or the AMS HT bypass for soft filaments.
sources:
  - name: Bambu Lab store – AMS 2 Pro
    url: https://us.store.bambulab.com/en/products/ams-2-pro
  - name: Bambu Lab Wiki – AMS 2 Pro introduction and connection guide
    url: https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide
  - name: All3DP – Bambu Lab launches the H2D
    url: https://all3dp.com/4/bambu-lab-launches-the-h2d-mid-size-dual-extrusion-multi-function-3d-printer/
  - name: All3DP – Bambu Lab A2L launch
    url: https://all3dp.com/4/bambu-lab-refreshes-a-series-leads-with-new-a2l-large-bed-slinger/
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**The Bambu Lab AMS 2 Pro is a four-slot automatic material system that feeds multi-colour and multi-material prints and dries filament at up to 65 °C.** Bambu Lab released it with the H2D on 25 March 2025. Unlike the first AMS it has a built-in heater for drying.

## Bambu Lab AMS 2 Pro at a glance

| Item | Detail |
|---|---|
| Slots | 4 |
| Drying | Up to 65 °C |
| Units per printer | Up to 4 AMS 2 Pro (plus 8 AMS HT) |
| Spool width | 50–68 mm |
| Spool diameter | 197–202 mm |
| Filament diameter | 1.75 mm |
| Size | 372 × 280 × 226 mm |
| Weight | 2.5 kg |
| Power input | 24 V, 4 A |

## What is inside the AMS 2 Pro

- **Four feeders**, each with its own motor, gears and filament sensor.
- **An internal hub** that merges the four paths, with Hall sensors, a magnetic encoder and a brushless motor that adds feeding force.
- **Two RFID coils** that read Bambu Lab filament tags for colour, type, remaining filament and drying settings.
- **A humidity and temperature sensor**; readings show on the unit, in Bambu Studio and in Bambu Handy.
- **Two drying modules** (heater, fan and temperature sensor) and a sealed lid with a rubber gasket and desiccant.

## Bambu Lab AMS 2 Pro automatic material system: which printers it works with

- **H2 series:** one unit plugs into either 6-pin port and everything, including drying, works on printer power. More units need a PTFE adapter; with it, up to four AMS 2 Pro units connect.
- **X1 and P1 series:** a single unit needs an additional buffer; several units need the AMS Hub. Each unit needs the official power adapter for drying. Bambu's store says drying on the X1E is not yet supported.
- **A-series:** Bambu's store lists A1 and A1 mini support as planned through a firmware update. All3DP reports that the A2L accepts the AMS 2 Pro, with a separate power cable for drying.

For a side-by-side of every unit, see our [Bambu AMS guide](/printers/bambu-lab-ams/).

## Supported and unsupported filaments

Bambu Lab lists PLA, PETG, ABS, ASA, PET, PA, PC, PP, POM, HIPS, dried PVA and BVOH, Bambu PLA-CF, PAHT-CF and PETG-CF, support materials for PLA and PETG, and "TPU for AMS" as supported. Some of these cannot be fully dried in the unit.

**Do not load** TPE, generic TPU, damp PVA or BVOH, Bambu PET-CF, Bambu TPU 95A or other carbon- or glass-fibre filaments.

## Drying filament in the AMS 2 Pro

Air circulates through the spools and is then vented outside. The intake is at the bottom and the exhaust at the back, so keep both clear. For Bambu Lab filament the RFID tag sets the drying parameters automatically. The desiccant turns from yellow to purple when it is saturated; replace it or dry and reuse it. Read our [filament dryer guide](/blog/filament-dryer/) for typical drying temperatures by material.

## Setting up the AMS 2 Pro

1. Take the desiccant out of its sealed bag and place it in the unit.
2. **H2 printers:** connect the 6-pin Bambu Bus cable and push the PTFE tube about 10 cm into the coupler until it stops.
3. **X1 or P1 printers:** fit the buffer with its two screws, run the PTFE tubes (550 mm to the AMS, 370 mm to the printer) and connect the 4-pin cable to the printer and the 6-pin cable to the AMS.
4. Plug in the power adapter if you want to dry on X1 or P1, or on any extra unit.
5. Load spools, check the slot colours in Bambu Studio and map them to your model.

## AMS 2 Pro vs AMS lite

The open [AMS lite](/printers/bambu-lab-ams-lite/) is the cheaper four-slot unit for the A1 and A1 mini, with no cover and no drying. The AMS 2 Pro is sealed, dries filament and chains with other units for up to 24 filaments.

## Related pages

See the dual-nozzle [Bambu Lab H2D](/printers/bambu-lab-h2d/), which launched with the AMS 2 Pro, and check multi-colour 3MF projects in our [3MF viewer](/3mf-viewer/).
