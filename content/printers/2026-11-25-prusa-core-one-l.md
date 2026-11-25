---
shortName: Prusa CORE One L+
title: Prusa CORE One L – specs, heated chamber and CORE One L+ update
seoTitle: Prusa CORE One L – Specs, Heated Chamber and L+ Update
description: Prusa CORE One L explained – 300 × 300 × 330 mm enclosed CoreXY, 60 °C heated chamber, Nextruder, setup, Prusa Connect, the L+ update and INDX option.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/52387d43-9a61-4280-a048-928f57b94015/output.png
imageAlt: "Illustration of a large enclosed CoreXY printer with aluminium panels and a tinted door, its chamber glowing warm while printing a big orange storage crate on a small-business workshop counter"
category: Prusa
brand: Prusa Research
summary:
  - The Prusa CORE One L is an enclosed CoreXY printer with a 300 × 300 × 330 mm build volume and an actively heated chamber that reaches 60 °C.
  - Prusa announced it on 31 October 2025, sold assembled only, at a US$1,799 launch price.
  - In August 2026 it became the CORE One L+, adding GT1.5 belts and an integrated nozzle wiper.
specs:
  - ["Build volume", "300 × 300 × 330 mm"]
  - ["Max speed", "500 mm/s travel"]
  - ["Max nozzle temperature", "290 °C"]
  - ["Max bed temperature", "120 °C"]
  - ["Motion system", "CoreXY"]
  - ["Enclosure", "Enclosed"]
  - ["Nozzle", "0.4 mm brass High-Flow CHT, quick-swap"]
  - ["Extruder", "Nextruder direct drive, 10:1 planetary gearbox"]
  - ["Filaments", "PLA, PETG, Flex, PVA, PC, PP, CPE, PVB; ABS, ASA, HIPS and PA with filtration"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "3.5-inch colour touchscreen"]
  - ["Camera", "1080p night-vision camera"]
  - ["Connectivity", "Wi-Fi, Ethernet, USB drive, NFC, Prusa Connect"]
  - ["Filtration", "Optional HEPA and activated carbon module"]
  - ["Sensors", "Load cell levelling, 2 filament sensors, door sensor, accelerometer"]
  - ["Size and weight", "469 × 521 × 635 mm; 21.9 kg"]
faq:
  - q: What is the Prusa CORE One L build volume?
    a: 300 × 300 × 330 mm (about 29.7 litres), according to Prusa – much larger than the 250 × 220 × 270 mm CORE One.
  - q: Does the Prusa CORE One L have a heated chamber?
    a: Yes. Fans under the bed push warm air through the enclosure to heat the chamber actively up to 60 °C, and an automatic top vent opens for low-temperature materials such as PLA.
  - q: Is the CORE One L available as a kit?
    a: No. Prusa sells the CORE One L and L+ as an assembled printer only.
  - q: What is the difference between the CORE One L and CORE One L+?
    a: The L+ (August 2026) adds GT1.5 belts for smoother surfaces and an integrated nozzle wiper. Prusa offers an upgrade kit for existing owners.
sources:
  - name: Prusa – CORE One L+ product page
    url: https://www.prusa3d.com/en/product/prusa-core-one-l/
  - name: Prusa blog – Think big, print big, introducing the CORE One L
    url: https://blog.prusa3d.com/think-big-print-big-introducing-the-prusa-core-one-l_124294/
  - name: Prusa blog – XL+, CORE One L+ and CORE One Gen 2 update
    url: https://blog.prusa3d.com/better-prints-easier-use-prusa-xl-core-one-l-and-core-one-gen-2-our-big-product-update_137539/
  - name: Prusa Knowledge Base – CORE One L+ firmware changelog
    url: https://help.prusa3d.com/changelog/core-one-l-plus
  - name: Prusa – CORE One L+ INDX 4-tool
    url: https://www.prusa3d.com/en/product/prusa-core-one-l-indx-4-tool/
  - name: Tom's Hardware – Prusa CORE One L review
    url: https://www.tomshardware.com/uk/3d-printing/prusa-core-one-l-3d-printer-review
  - name: Notebookcheck – Prusa unveils two new CORE One printers
    url: https://www.notebookcheck.net/Prusa-unveils-two-new-3D-printers-in-the-Core-One-line-and-one-of-them-has-an-Oak-chassis.1152302.0.html
tools: [3mf-to-stl, stl-viewer, gcode-to-stl]
---
**The Prusa CORE One L is an enclosed CoreXY 3D printer with a 300 × 300 × 330 mm build volume and an actively heated chamber that reaches 60 °C.** Prusa Research announced it on 31 October 2025 as an assembled-only printer, at a launch price of US$1,799 (US). In August 2026 it was updated to the CORE One L+. This page covers the specs, who it suits, setup, connections and the INDX toolchanger option.

## Prusa CORE One L at a glance

| Item | Detail |
|---|---|
| Build volume | 300 × 300 × 330 mm |
| Chamber | Active heating up to 60 °C, automatic top vent |
| Hotend / bed | 290 °C (400 °C with the HT hotend upgrade) / 120 °C |
| Extruder | Nextruder, 10:1 planetary gearbox |
| Levelling | Load cell, automatic first-layer calibration |
| Camera | 1080p night-vision camera |
| Connectivity | Wi-Fi, Ethernet, NFC, USB, Prusa Connect |
| Launch | Announced 31 October 2025, US$1,799 |

## Heated chamber and enclosure

The steel-and-aluminium enclosure is heated actively: fans under the bed blow air across the AC heatbed and warm the chamber to as much as 60 °C. For PLA and PETG, an automatic vent in the lid opens so the chamber does not get too hot. Prusa says the cast-aluminium bed varies by less than 2 °C across 99% of its surface.

**Why it matters:** a warm, stable chamber cuts warping on large ABS, ASA, PC and nylon parts – exactly the parts a 300 mm bed tempts you to print. Add the optional HEPA and carbon filtration module for ABS and ASA.

## Who the CORE One L suits

It suits workshops, small businesses and makers who print large functional parts in engineering materials and want Prusa's open firmware and support. People who mostly print small PLA parts get the same Nextruder and enclosure in the smaller [Prusa CORE One](/printers/prusa-core-one/).

## Setting up the CORE One L

The printer ships assembled. Following Prusa's "Unpacking & first run" guide in the Prusa Knowledge Base, at a high level:

1. Unpack the printer and remove the packing material.
2. Power on and follow the first-run wizard, including the self-test.
3. Connect to Wi-Fi with the NFC tag and the Prusa App, or use Ethernet.
4. Let the load cell calibrate the first layer.
5. Load filament and print the sample file.

## Connecting the CORE One L

The CORE One L supports **Wi-Fi** (the module can be physically removed), **Ethernet** and **USB drives**. **Prusa Connect** and the Prusa App handle remote printing, monitoring with the camera and print queues. Prusa also sells an air-gapped Critical Infrastructure Edition without Wi-Fi.

## Firmware, slicer and knowledge base

Prusa publishes the setup guides, LCD menu reference and firmware changelog in the Prusa Knowledge Base under CORE One L. **PrusaSlicer** has ready profiles. Open a project from another slicer with our [3MF to STL converter](/3mf-to-stl/).

## CORE One L+: what changed

On 13 August 2026 Prusa renamed the model CORE One L+. It adds **GT1.5 belts**, which reduce fine repeating patterns on smooth surfaces, and an **integrated nozzle wiper**. Prusa kept the price, upgraded unshipped orders automatically and offers an upgrade kit for existing owners.

## INDX toolchanger option

Prusa sells a factory-built CORE One L+ INDX with four tools, upgradable to eight, and an INDX 8-tool conversion kit for existing CORE One L owners. See our [Prusa INDX guide](/printers/prusa-indx/) for how the system works.

## Compare the CORE One L

See the whole lineup in our [Prusa 3D printers guide](/printers/prusa-3d-printers/), compare it with the [Prusa XL](/printers/prusa-xl/), or use the [printer comparison tool](/printers/compare/).
