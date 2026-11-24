---
title: Bambu P2S manual – where to find it and what it covers
seoTitle: Bambu P2S Manual – Where to Find It and What It Covers
description: Where to find the official Bambu Lab P2S manual on the Bambu Lab Wiki, what its guides cover, first print, maintenance pages, error codes and firmware updates.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/f8125de4-43e4-439b-b859-2f1d321f74b1/output.png
imageAlt: "Illustration of an enclosed printer with its door open while a brush cleans smooth steel rods next to an unclipped hotend, a carbon filter and grease"
category: Manuals
brand: Bambu Lab
summary:
  - Bambu Lab publishes the P2S manual on the Bambu Lab Wiki under P2S, split into Manual, Maintenance and Troubleshooting sections.
  - The Manual section has the introduction, unboxing guide, first print guide, screen guide, FAQ and firmware guides.
  - Maintenance guides cover XYZ-axis cleaning and lubrication, idler pulleys, the air filter, hotend replacement and cold pulls.
faq:
  - q: Where can I find the Bambu P2S manual?
    a: On the Bambu Lab Wiki under P2S → Manual. The same P2S section has Maintenance and Troubleshooting pages, and Bambu Lab also lists P2S documents under Support → Documentation on its website.
  - q: How do I update the P2S firmware?
    a: Online from the printer's Firmware page once it is connected to the internet. Bambu Lab also publishes an offline firmware update guide for the X2D and P2S on the Wiki.
  - q: Which parts of the P2S need regular maintenance?
    a: The Wiki has guides for cleaning and lubricating the X, Y and Z axes, lubricating the XY idler pulleys, replacing the air filter and hotend, and clearing a clog with a cold pull. The P2S uses smooth steel rods, which Bambu Lab says are easier to clean than carbon rods.
sources:
  - name: Bambu Lab Wiki – P2S section
    url: https://wiki.bambulab.com/en/p2s
  - name: Bambu Lab Wiki – P2S unboxing guide
    url: https://wiki.bambulab.com/en/p2s/manual/unboxing-p2s
  - name: Bambu Lab Wiki – P2S first print
    url: https://wiki.bambulab.com/en/p2s/manual/first-print
  - name: Bambu Lab Wiki – P2S regular cleaning and maintenance recommendations
    url: https://wiki.bambulab.com/en/p2s/maintenance/period-maintenance
  - name: Bambu Lab Wiki – P2S/X2D XYZ-axis cleaning and lubrication
    url: https://wiki.bambulab.com/en/p2s/maintenance/lubricate-x-y-z-axis
  - name: Bambu Lab Wiki – P2S/X2D air filter replacement
    url: https://wiki.bambulab.com/en/p2s/maintenance/replace-air-filter
  - name: Bambu Lab Wiki – X2D/P2S offline firmware update guide
    url: https://wiki.bambulab.com/en/p2s/manual/offline-firmware-update
  - name: Bambu Lab Wiki – P2S HMS 0300-2000-0001-0001
    url: https://wiki.bambulab.com/en/p2s/troubleshooting/hmscode/0300_2000_0001_0001
  - name: Bambu Lab – P2S FAQ
    url: https://bambulab.com/en/p2s/faq
  - name: Bambu Lab blog – P2S announcement
    url: https://blog.bambulab.com/the-icon-redefined-meet-the-p2s-a-completely-reengineered-version-of-the-ultra-productive-p1-series/
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**Bambu Lab publishes the official Bambu P2S manual on the Bambu Lab Wiki under P2S → Manual, with separate Maintenance and Troubleshooting sections for the same printer.** Bambu Lab also lists P2S documents under Support → Documentation on its website. This page explains what the P2S manual covers, in our own words, and where to look for each task.

## What the official P2S manual covers

The **Manual** section of the P2S Wiki holds these guides:

1. **P2S introduction** – the parts of the printer and what they do.
2. **Unboxing guide for P2S Combo and P2S** – removing packaging and transport parts, and fitting the AMS 2 Pro on the Combo.
3. **P2S first print** – from first power-on to the first finished part.
4. **Screen operation guide** – the 5-inch touchscreen and its menus.
5. **P2S FAQ** – common questions about compatibility and features.
6. **Firmware release history** and the **X2D/P2S offline firmware update guide**.

Network setup is covered by a shared Wi-Fi and network connection guide for the H2 series, P2S and X series.

## Bambu P2S quick start

The unboxing and first print guides walk you through setup in this order:

1. **Unbox** the printer and remove all packaging and transport parts listed in the unboxing guide. On the P2S Combo, connect the AMS 2 Pro with its 6-pin cable.
2. **Power on** and follow the step-by-step guidance on the touchscreen, which Bambu Lab calls its second-generation UI.
3. **Connect to your network** using the shared Wi-Fi and network connection guide; Bambu Studio and the Bambu Handy app are the companion software.
4. **Calibrate** – the printer runs its own checks; Auto Flow Dynamics Calibration uses an eddy current sensor, and AI detection checks that the plate and nozzle match your slicer settings.
5. **Print** a first model and follow the first print guide.

**Tip:** older Bambu build plates fit the P2S but are not detected automatically, so select the right plate in the slicer.

## Maintenance pages Bambu Lab provides

The **Maintenance** section of the P2S Wiki includes:

- **Regular cleaning and maintenance recommendations** – the starting point for routine upkeep and intervals.
- **XYZ-axis cleaning and lubrication** – the P2S uses smooth steel rods, which Bambu Lab says are easier to clean than the carbon rods of the P1 series.
- **XY-axis idler pulley lubrication.**
- **Air filter cover and air filter replacement** – for the carbon filter that cleans chamber air.
- **Hotend replacement** – the quick-swap hotend releases with one clip and no wiring to disconnect.
- **Nozzle unclogging** – a cold pull procedure.

Follow the intervals on the Wiki's maintenance recommendations page rather than a fixed schedule from elsewhere.

## Common problems and where to find fixes

The **Troubleshooting** section lists HMS error codes, each with its own page. For example, HMS 0300-2000-0001-0001 reports abnormal X-axis homing and asks you to check whether the toolhead is stuck or the X-axis rail has too much resistance; a matching code covers the Y axis. There is also an extruder motor test method for the P2S and X2D. When the printer shows a code, search for it on the Wiki to reach the right page.

## Firmware and software

Update firmware online from the printer's **Firmware** page once it is connected to the internet. Without a connection, use the X2D/P2S offline firmware update guide on the Wiki. Slice in **Bambu Studio** and monitor prints with **Bambu Handy**; keep both up to date after a firmware update. Check a 3MF project before printing in our [3MF viewer](/3mf-viewer/).

## Hardware notes from Bambu Lab

- Nozzles: 0.4 mm by default, with 0.2, 0.6 and 0.8 mm options, up to 300 °C. The nozzle and extruder gears are hardened steel; H2D nozzles fit, A1 nozzles do not.
- Sensors: filament cutter, run-out, tangle and odometry sensors.
- AMS: up to 8 units (4 AMS 2 Pro and 4 AMS HT) for 20 slots. See our [AMS 2 Pro](/printers/bambu-lab-ams-2-pro/) page.

## Related pages

Read our [Bambu Lab P2S](/printers/bambu-lab-p2s/) page for full specs, the [P1S manual guide](/printers/bambu-lab-p1s-manual/) for the older model, or compare printers in our [printer comparison tool](/printers/compare/).
