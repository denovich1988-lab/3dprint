---
title: Bambu Lab AMS HT – single-spool dryer and feeder explained
seoTitle: Bambu Lab AMS HT Automatic Material System Guide
description: Bambu Lab AMS HT automatic material system explained – 85 °C drying, one-spool design, compatible printers, power cable, filaments, TPU bypass and setup.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/15362fe6-b865-44a7-a078-52aac675a58e/output.png
imageAlt: "Illustration of a narrow single-spool filament dryer box with a hinged lid, small display and a translucent flexible spool"
category: Bambu Lab
brand: Bambu Lab
summary:
  - The Bambu Lab AMS HT is a single-spool automatic material system that dries filament at up to 85 °C.
  - H2 printers take up to eight AMS HT units; X1 and P1 printers take up to four with a buffer or AMS Hub.
  - Drying needs the unit's own power cable, and TPU runs through a bypass outlet with manual feeding.
faq:
  - q: What is the Bambu Lab AMS HT?
    a: A one-spool version of Bambu Lab's automatic material system with a heater that dries filament at up to 85 °C, aimed at engineering filaments such as PA, PC and PP.
  - q: What is the difference between the Bambu Lab AMS HT and the AMS 2 Pro?
    a: The AMS 2 Pro holds four spools and dries at up to 65 °C. The AMS HT holds one spool, dries at up to 85 °C and has a bypass outlet for TPU and other filaments the feeder cannot handle.
  - q: Does the Bambu Lab AMS HT automatic material system need its own power?
    a: Yes, for drying. Bambu Lab says drying draws more power than the printer can supply, so the AMS HT comes with a power cable that must be connected to dry.
  - q: Can the AMS HT feed TPU?
    a: Not automatically. TPU goes out through the rear TPU outlet and is pushed into the extruder by hand; the AMS HT then works only as a dry box for that spool.
sources:
  - name: Bambu Lab Wiki – AMS HT introduction and connection guide
    url: https://wiki.bambulab.com/en/ams-ht/manual/intro-and-connection-guide
  - name: Core Electronics – Bambu Lab AMS HT specifications
    url: https://core-electronics.com.au/bambu-lab-ams-ht.html.md
  - name: MatterHackers – Bambu Lab AMS HT
    url: https://www.matterhackers.com/store/l/bambu-lab-ams-ht
  - name: All3DP – Bambu Lab launches the H2D
    url: https://all3dp.com/4/bambu-lab-launches-the-h2d-mid-size-dual-extrusion-multi-function-3d-printer/
  - name: All3DP – Bambu Lab A2L launch
    url: https://all3dp.com/4/bambu-lab-refreshes-a-series-leads-with-new-a2l-large-bed-slinger/
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**The Bambu Lab AMS HT is a single-spool automatic material system that feeds one filament into the printer and dries it at up to 85 °C.** Bambu Lab introduced it alongside the H2D and the AMS 2 Pro in March 2025. It is meant for moisture-sensitive engineering filaments such as PA, PC and PP, and several units can be chained for more materials.

## Bambu Lab AMS HT at a glance

| Item | Detail |
|---|---|
| Slots | 1 |
| Drying | Up to 85 °C |
| Units per printer | Up to 8 on H2, up to 4 on X1/P1 |
| Spool width | 50–68 mm |
| Spool diameter | 197–202 mm |
| Filament diameter | 1.75 mm |
| Weight | 1.21 kg |
| Power | 100–240 V AC, about 150 W average |

## What is inside the AMS HT

- **A display** showing humidity, temperature and remaining drying time.
- **A drying module** with heater, fan and temperature sensor, plus a humidity sensor.
- **A lid sensor** that warns you if the lid opens during drying.
- **An internal hub** with a feeder, an assist motor and a retraction assembly, and an outlet sensor that finds the filament after a break or jam.
- **An RFID coil** that reads Bambu Lab filament tags for remaining filament and auto refill.
- **Desiccant and a rubber gasket** to keep the box sealed.

## Bambu Lab AMS HT automatic material system: compatible printers

- **H2 series:** the built-in buffer supports two AMS HT units; a tube expansion port raises this to eight. More than one unit needs a PTFE adapter.
- **X1 and P1 series:** one unit needs an additional buffer and several need the AMS Hub, up to four units.
- **A2L:** All3DP reports that the A2L accepts the AMS HT, with a separate power cable for drying.

The AMS HT uses the 6-pin cable shared with the AMS 2 Pro; the cable from the first-generation AMS does not fit. Together with up to four AMS 2 Pro units, an H2 printer can draw from 24 filaments. See how all the units compare in our [Bambu AMS guide](/printers/bambu-lab-ams/).

## Supported filaments

For automatic feeding, Bambu Lab lists PLA, PETG, ABS, ASA, PET, PA, PC, PP, POM, HIPS, dried PVA and BVOH, Bambu PLA-CF, PAHT-CF and PETG-CF.

**Bypass only:** TPE, TPU, Bambu PET-CF, Bambu TPU 95A and other soft or brittle fibre-filled filaments. Route them through the rear TPU outlet with a PTFE tube and push the filament into the extruder by hand. The AMS HT then cannot load or unload automatically, but it still dries the spool. Read our [TPU filament guide](/blog/tpu-filament/) for printing tips.

## Drying with the AMS HT

The heater circulates warm air inside the box; the intake is at the bottom and the exhaust at the back, so keep both clear. Drying needs the supplied power cable, because the printer cannot provide enough power. The desiccant changes colour as it absorbs moisture – replace it or dry it when it turns dark green. For drying temperatures by material, see our [filament dryer guide](/blog/filament-dryer/).

## Setting up the AMS HT

1. Remove the desiccant from its sealed bag and place it in the unit.
2. Connect the 6-pin cable and the PTFE tube to the printer – directly on H2, through a buffer or AMS Hub on X1 and P1.
3. Plug in the AMS HT power cable so drying works.
4. Insert the filament at the inlet; press the release button to remove it later.
5. Check the slot in Bambu Studio and map it to your model.

## Related pages

The AMS HT launched with the dual-nozzle [Bambu Lab H2D](/printers/bambu-lab-h2d/), whose built-in feeding buffer supports two AMS HT units.
