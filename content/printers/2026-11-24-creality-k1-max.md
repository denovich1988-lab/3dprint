---
shortName: Creality K1 Max
title: Creality K1 Max – specs, setup, AI features and firmware
seoTitle: Creality K1 Max Specs, Setup, AI Camera and Firmware
description: Creality K1 Max explained – official specs of the 300 mm enclosed CoreXY printer, AI camera and LiDAR, first setup, Creality Print, CFS upgrade and firmware.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/aaf3bf87-38aa-4e69-9ccb-459637b17db8/output.png
imageAlt: "Illustration of a large enclosed CoreXY printer with a tinted door and a blue laser line scanning the first layer of an orange crate in a garage workshop"
category: Creality
brand: Creality
summary:
  - The Creality K1 Max is an enclosed CoreXY printer with a 300 × 300 × 300 mm build volume and up to 600 mm/s.
  - It adds an AI camera and a LiDAR first-layer scanner to the smaller K1 design.
  - Creality announced it in April 2023 at US$999 and opened sales on 14 July 2023 at a launch price of US$899.
specs:
  - ["Build volume", "300 × 300 × 300 mm"]
  - ["Max speed", "600 mm/s"]
  - ["Max acceleration", "20,000 mm/s²"]
  - ["Max flow", "32 mm³/s"]
  - ["Max nozzle temperature", "300 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "CoreXY, die-cast aluminium frame"]
  - ["Enclosure", "Enclosed"]
  - ["Multi-colour", "Via the K1 Series CFS upgrade kit (sold separately)"]
  - ["Nozzle", "0.4 mm hardened steel (0.6 / 0.8 mm compatible)"]
  - ["Extruder", "Dual-gear direct drive"]
  - ["Filaments", "PLA, PETG, PET, TPU, PA, ABS, ASA, PC, PLA-CF, PA-CF, PET-CF"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "4.3-inch colour touchscreen"]
  - ["Camera", "AI camera (failure detection, monitoring, time-lapse)"]
  - ["Connectivity", "Wi-Fi (2.4 GHz), Ethernet, USB drive"]
  - ["Filtration", "Air purifier"]
  - ["Sensors", "AI LiDAR, strain-gauge auto levelling, G-sensor input shaping, filament run-out sensor"]
  - ["Size and weight", "435 × 462 × 526 mm; 18 kg"]
  - ["Power", "100–240 V AC, 50/60 Hz, 1000 W rated"]
faq:
  - q: What is the Creality K1 Max build volume?
    a: 300 × 300 × 300 mm, compared with 220 × 220 × 250 mm on the K1 and K1C.
  - q: Can the Creality K1 Max print in multiple colours?
    a: Not out of the box. Creality sells a K1 Series CFS upgrade kit with a new extruder, cutter and RFID recognition that lets K1 Max owners use the CFS filament system. Older units with a separate hotend also need the integrated-nozzle hotend.
  - q: Does the K1 Max have a heated chamber?
    a: No. The enclosure keeps heat in passively, but there is no active chamber heater.
  - q: How do I update the K1 Max firmware?
    a: Update over the air when the printer is online, from a USB drive with firmware from Creality's download page, or through the Creality Cloud app.
sources:
  - name: Creality – K1 Max product page
    url: https://www.creality.com/products/creality-k1-max-3d-printer?sku=K1MAX
  - name: Creality Store – K1 Max specifications
    url: https://store.creality.com/ca/products/k1-max-3d-printer-premium-combo
  - name: Creality blog – K1 Max sales start (10 July 2023)
    url: https://www.creality.com/blog/creality-initiates-sale-of-k1-max-3d-printer-with-better-price-and-exciting-features
  - name: Creality blog – K1 series CFS upgrade kit
    url: https://store.creality.com/blogs/tutorial/creality-k1-series-cfs-upgrade-kit
  - name: Creality blog – K1 firmware update methods
    url: https://creality.com/blog/k1-major-firmware-update-v1314-version-available
  - name: Creality – K1 Max download center
    url: https://www.creality.com/pages/download-k1-max-flagship
  - name: Creality – K1 Max user manual (copy)
    url: https://manuals.plus/creality/k1max-3d-printing-machine-manual
  - name: Tom's Hardware – Creality K1 Max review
    url: https://www.tomshardware.com/reviews/creality-k1-max
  - name: All3DP – Creality K1 Max specs
    url: https://all3dp.com/1/creality-k1-max-3d-printer-review-specs/
tools: [3mf-to-stl, stl-viewer, gcode-to-stl]
---
**The Creality K1 Max is an enclosed CoreXY 3D printer with a 300 × 300 × 300 mm build volume, up to 600 mm/s, an AI camera and a LiDAR sensor that scans the first layer.** Creality first showed it in April 2023 at US$999 and started sales on 14 July 2023 at a launch price of US$899 (US). It is the large version of the K1, which later became the [Creality K1C](/printers/creality-k1c/).

## Creality K1 Max at a glance

| Item | Detail |
|---|---|
| Build volume | 300 × 300 × 300 mm |
| Speed / acceleration | 600 mm/s / 20,000 mm/s² |
| Max flow | 32 mm³/s |
| Nozzle / bed | 300 °C / 100 °C |
| Enclosure | Enclosed, air purifier, no active chamber heating |
| Camera and sensors | AI camera, LiDAR, strain-gauge levelling |
| Connectivity | Wi-Fi 2.4 GHz, Ethernet, USB |
| Weight | 18 kg |

## Who the K1 Max suits

The K1 Max suits makers who need larger parts than a 220 mm printer allows – helmets, storage boxes, long brackets – and want a fast enclosed machine for ABS, ASA and carbon-fibre filaments. The hardened-steel nozzle and the filament list (including PA-CF and PC) point to functional parts. It is a single-nozzle printer unless you add the CFS upgrade.

## K1 Max vs K1 and K1C

| | K1 / K1C | K1 Max |
|---|---|---|
| Build volume | 220 × 220 × 250 mm | 300 × 300 × 300 mm |
| AI LiDAR | No | Yes |
| AI camera | K1C: yes | Yes |
| Ethernet | No | Yes |
| Weight | Lighter | 18 kg |

## AI camera and LiDAR

The **AI camera** watches for print failures and foreign objects on the bed and records time-lapses. The **LiDAR** (1 μm resolution, according to Creality) scans the first layer after it is printed to check it. Strain sensors in the bed handle automatic levelling, and a G-sensor in the print head measures vibration for input shaping.

**Tip:** reviewers noted the AI failure monitoring uses Creality Cloud, so bind the printer to an account if you want those alerts.

## Setting up the K1 Max

The official user manual describes this first-run flow:

1. Unbox the printer (it arrives almost fully assembled), remove the foam, connect the touchscreen cable and fit the spool holder at the back.
2. Power on and choose a language.
3. Remove the three transport screws that hold the bed, as shown on screen.
4. Make sure nothing blocks the LiDAR's view, then continue.
5. Follow the power-on guide: network (Ethernet or 2.4 GHz Wi-Fi), time zone, Creality Cloud binding, then the self-test that runs auto levelling and input shaping.
6. Load filament with the Extrude function and start your first print.

## Connecting the K1 Max

Print from a **USB drive**, send files over the **LAN** from Creality Print when the computer and printer are on the same network, or print remotely through **Creality Cloud**. Wi-Fi is 2.4 GHz only; use Ethernet if your router only offers 5 GHz near the printer.

## K1 Max manual

Creality lists the K1 Max user manual in the Download Center on its website under the K1 Max page, and on the Creality Wiki under K1 Flagship Series → K1 Max → Quick Start Guide. The manual recommends greasing the marked parts every 300 hours. Many steps match the K1; our [Creality K1 manual guide](/printers/creality-k1-manual/) covers them.

## Firmware and software

Creality's K1-series firmware updates **over the air** when the printer is online, from a **USB drive** with the file from the download page, or through the **Creality Cloud** app. Creality has published the Klipper-based firmware source on GitHub. Slice in **Creality Print**; Creality also lists Cura, PrusaSlicer and Simplify3D as compatible. To preview a sliced file, use our [G-code to STL tool](/gcode-to-stl/).

## CFS multicolour upgrade

Creality sells a **K1 Series CFS Upgrade Accessory Kit** for the K1, K1 Max, K1C and K1 SE. It adds a new extruder with a filament cutter, a run-out sensor and RFID filament recognition so the printer can work with the Creality Filament System. Units with the older separate hotend also need the integrated-nozzle hotend, sold separately. After fitting, the firmware is updated from the included USB drive.

## Compare the K1 Max

Compare it with other large enclosed printers in our [printer comparison tool](/printers/compare/), or see the rest of Creality's range on our [Creality Ender page](/printers/creality-ender-3d-printers/).
