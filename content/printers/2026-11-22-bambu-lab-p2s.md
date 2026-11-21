---
title: Bambu Lab P2S – specs, what is new, setup and manual
seoTitle: Bambu Lab P2S Specs, Features and Setup Guide
description: Bambu Lab P2S explained – official specs, what changed from the P1S, the AMS 2 Pro Combo, first setup and where to find the official manual.
date: 2026-11-22
category: Bambu Lab
brand: Bambu Lab
summary:
  - The P2S was announced on 14 October 2025 as a re-engineered successor to the P1S.
  - It keeps the 256 × 256 × 256 mm build volume and adds a 5-inch touchscreen, 1080p camera and quick-swap nozzle.
  - Bambu Lab lists a 300 °C nozzle, a 110 °C bed and a servo extruder with up to 8.5 kg of force.
specs:
  - ["Build volume", "256 × 256 × 256 mm"]
  - ["Max nozzle temperature", "300 °C"]
  - ["Max heatbed temperature", "110 °C"]
  - ["Nozzle", "0.4 mm included; 0.2 / 0.6 / 0.8 mm supported; quick-swap hot end"]
  - ["Extruder", "PMSM servo extruder, up to 8.5 kg extrusion force"]
  - ["Screen", "5-inch touchscreen"]
  - ["Camera", "1080p live view with timelapse"]
  - ["Filtration", "Activated-carbon filter"]
  - ["Sensors", "Door, filament run-out, tangle, odometry; power-loss recovery; filament cutter"]
  - ["Combo version", "Includes AMS 2 Pro with active-venting filament drying"]
  - ["Launch price (EU)", "€519 printer / €749 Combo, tax included"]
faq:
  - q: What is the difference between the P2S and the P1S?
    a: The build volume is the same. The P2S adds a 5-inch touchscreen, a 1080p camera, a servo extruder with about 70% more force, Auto Flow Dynamics Calibration, adaptive airflow, AI error detection, a quick-swap nozzle and a 110 °C bed (the P1S bed reaches 100 °C).
  - q: Can I upgrade a P1S to a P2S?
    a: No. Bambu Lab says the P2S components differ fundamentally from the P1S, so a P1S cannot be turned into a P2S by swapping parts.
  - q: What build plates fit the P2S?
    a: Bambu Lab says the P2S supports all current Bambu Lab build plates of the 256 mm size, but older plates do not support its QR-code plate recognition.
sources:
  - name: Bambu Lab blog – Meet the P2S (14 Oct 2025)
    url: https://blog.bambulab.com/the-icon-redefined-meet-the-p2s-a-completely-reengineered-version-of-the-ultra-productive-p1-series
  - name: Bambu Lab Wiki – P2S FAQ
    url: https://wiki.bambulab.com/en/p2s/manual/p2s-faq
tools: [3mf-to-stl, stl-to-3mf, 3d-viewer]
---
The **Bambu Lab P2S** is the second generation of Bambu Lab’s enclosed P-series. Bambu Lab announced it on 14 October 2025 and describes it as a completely re-engineered P1 that borrows technology from the larger H2D and H2S.

## What is new compared with the P1S

- **Screen and interface.** A 5-inch touchscreen with Bambu Lab’s second-generation interface replaces the P1S’s small button-driven screen.
- **Extruder.** A PMSM servo extruder with up to 8.5 kg of force, which Bambu Lab says is 70% more than its predecessor. It checks resistance and position at 20 kHz to spot grinding and clogs.
- **Calibration.** Auto Flow Dynamics Calibration uses an eddy-current sensor.
- **Cooling.** Adaptive Airflow pulls cool outside air in so PLA and PETG can print with the door closed, and a heat-keeping mode for ABS and ASA.
- **Camera and AI.** A 1080p live-view camera with AI detection of spaghetti failures, nozzle blobs and air printing, plus a check that the plate and nozzle match the slicer settings.
- **Maintenance.** A quick-swap hot end that releases the nozzle and heatsink with one clip.
- **Bed.** Up to 110 °C, versus 100 °C on the P1S.

The build volume stays at 256 × 256 × 256 mm. Bambu Lab says the P1S remains on sale and supported.

## The Combo and AMS 2 Pro

The P2S Combo ships with the **AMS 2 Pro**, which feeds up to four spools and dries filament with active venting. Bambu Lab says this dries filament 30% faster than sealed heating.

## Setup and manual

The P2S arrives mostly assembled. Follow Bambu Lab’s quick-start guide and the on-screen self-test, then bind the printer to the Bambu Handy app and send prints from Bambu Studio. The official manual, FAQ and maintenance pages are on the [Bambu Lab Wiki](https://wiki.bambulab.com/en/p2s/manual/p2s-faq).

## Compare

- [Bambu Lab P1S vs P2S](/blog/bambu-lab-p1s-vs-p2s/)
- [Bambu Lab P1S](/printers/bambu-lab-p1s/)
