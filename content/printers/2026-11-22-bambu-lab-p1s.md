---
title: Bambu Lab P1S – specs, setup, manual and who it suits
seoTitle: Bambu Lab P1S Specs, Setup and Manual Guide
description: Bambu Lab P1S explained – official specs, what is in the box, first setup, Wi-Fi and app binding, where to find the manual, and how it compares with the P2S.
date: 2026-11-22
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/e7722ca0-a3ab-44bd-8991-a7b6e921fdf3/output.png
imageAlt: Illustration of a generic enclosed desktop 3D printer with a glass door
category: Bambu Lab
brand: Bambu Lab
summary:
  - The P1S is an enclosed CoreXY printer with a 256 × 256 × 256 mm build volume.
  - Bambu Lab lists a 300 °C hot end, a 100 °C bed and up to 500 mm/s toolhead speed.
  - It stays on sale and supported after the newer P2S launched in October 2025.
specs:
  - ["Build volume", "256 × 256 × 256 mm"]
  - ["Motion", "CoreXY"]
  - ["Max hot end temperature", "300 °C"]
  - ["Nozzle", "0.4 mm stainless steel included; 0.2 / 0.6 / 0.8 mm optional"]
  - ["Max build plate temperature", "100 °C"]
  - ["Max toolhead speed", "500 mm/s"]
  - ["Max acceleration", "20 m/s² (20,000 mm/s²)"]
  - ["Max hot end flow", "32 mm³/s (Bambu ABS at 280 °C)"]
  - ["Filament diameter", "1.75 mm"]
  - ["Display", "2.7-inch 192 × 64 screen"]
  - ["Camera", "1280 × 720 at 0.5 fps (timelapse supported)"]
  - ["Connectivity", "Wi-Fi, Bluetooth, Bambu-Bus; micro SD card"]
  - ["Size and weight", "389 × 389 × 457 mm; 12.95 kg"]
  - ["Power", "100–240 VAC; max 1000 W at 220 V / 350 W at 110 V"]
faq:
  - q: What is the build volume of the Bambu Lab P1S?
    a: Bambu Lab lists 256 × 256 × 256 mm.
  - q: Can the P1S print ABS and ASA?
    a: Yes. Bambu Lab lists PLA, PETG, TPU, ABS, ASA, PA, PC, PVA and PET as ideal materials. It does not recommend carbon- or glass-fibre filaments with the stock stainless-steel nozzle; a hardened-steel hot end is sold separately.
  - q: Where is the P1S manual?
    a: Bambu Lab publishes the P1S manual, unboxing guide and maintenance pages on its official wiki (wiki.bambulab.com). We link to it below rather than copying it.
  - q: Is the P1S being discontinued?
    a: Not according to Bambu Lab. When it launched the P2S in October 2025, the company said the P1S would remain available and fully supported.
sources:
  - name: Bambu Lab Wiki – P1S unboxing and specifications
    url: https://wiki.bambulab.com/en/p1/manual/unboxing-p1s
  - name: Bambu Lab blog – P2S announcement (P1S stays supported)
    url: https://blog.bambulab.com/the-icon-redefined-meet-the-p2s-a-completely-reengineered-version-of-the-ultra-productive-p1-series
tools: [3mf-to-stl, stl-to-3mf, 3mf-viewer]
---
The **Bambu Lab P1S** is an enclosed, CoreXY 3D printer that took the speed of Bambu Lab’s flagship X1 series and put it in a simpler, cheaper box. It has a steel frame, plastic-and-glass enclosure, an activated-carbon filter and a 256 mm cube build volume, which is enough for most household and hobby parts.

## Who the P1S suits

The P1S suits people who want a fast, closed printer that also handles warp-prone materials such as ABS and ASA. The enclosure keeps warm air around the part, which helps these materials. For multi-colour printing it works with Bambu Lab’s AMS units, sold separately or as a “Combo”.

What it lacks compared with newer models: a large colour touchscreen (it has a small 2.7-inch screen with buttons), a high-frame-rate camera (its camera records at 0.5 fps) and a hardened nozzle out of the box.

## First setup

Bambu Lab’s unboxing guide follows this order:

1. Check the box contents against the list on the wiki.
2. Connect the screen cable and press the screen into place.
3. Remove the three red-marked safety screws that lock the Z axis for shipping.
4. Power on and follow the on-screen self-test.
5. Remove the foam blocks under the heat bed after the self-test.
6. Connect the printer to Wi-Fi and bind it to your account in the Bambu Handy app (you can also do this later).
7. Feed filament into the rear PTFE tube until it reaches the extruder, then start a test print.

Watch Bambu Lab’s official assembly video before you start; the wiki links to it.

## Connecting to your computer and phone

The P1S connects over Wi-Fi. Most owners bind it to the **Bambu Handy** app on a phone and send prints from **Bambu Studio** on a computer. You can also print from a micro SD card. Bambu Studio is the official slicer; Bambu Lab says other slicers that export standard G-code can be used, though some features may not work.

## Manual and maintenance

The official manual, maintenance schedule and troubleshooting pages are on the Bambu Lab Wiki. Keep the firmware updated from Bambu Studio or the app, and check the wiki before replacing parts such as the hot end.

## P1S or P2S?

Both have the same 256 mm build volume. The P2S adds a 5-inch touchscreen, a 1080p camera, a stronger servo extruder, a quick-swap nozzle and a 110 °C bed. Read our [P1S vs P2S comparison](/blog/bambu-lab-p1s-vs-p2s/) for the full list.

## Files and formats

Bambu Studio saves projects as **3MF**. If you need a plain STL for another slicer, use our [3MF to STL converter](/3mf-to-stl/); to bring an STL back with exact millimetre units, use [STL to 3MF](/stl-to-3mf/).
