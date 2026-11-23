---
shortName: Original Prusa MINI+
title: Prusa MINI+ – specs, setup and who it suits
seoTitle: Prusa MINI+ 3D Printer – Specs, Setup and Manual
description: Prusa MINI+ explained – official specs of the compact 180 mm printer, kit vs semi-assembled, first setup, Ethernet and Wi-Fi, handbook and firmware updates.
date: 2026-11-23
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/2ad5e558-4934-4caa-a1a4-12df761b9586/output.png
imageAlt: "Illustration of a small open-frame bed-slinger printer with a Bowden tube printing an orange gear on a desk beside a mug"
category: Prusa
brand: Prusa Research
summary:
  - The Original Prusa MINI+ is Prusa's compact open-frame printer with a 180 × 180 × 180 mm build volume.
  - Prusa announced the MINI in October 2019 and replaced it with the MINI+ and its SuperPINDA levelling sensor in November 2020.
  - It connects over Ethernet or USB, with Wi-Fi as an optional module, and works with PrusaLink and Prusa Connect.
specs:
  - ["Build volume", "180 × 180 × 180 mm"]
  - ["Max nozzle temperature", "280 °C"]
  - ["Max bed temperature", "100 °C"]
  - ["Motion system", "Cartesian, moving bed"]
  - ["Enclosure", "Open frame (enclosure bundle sold separately)"]
  - ["Nozzle", "0.4 mm; other diameters supported"]
  - ["Extruder", "Bowden, 3:1 gearing"]
  - ["Filaments", "PLA, PETG, ASA, ABS, PC, CPE, PVA/BVOH, PVB, HIPS, PP, Flex, nGen, nylon, wood-filled"]
  - ["Filament diameter", "1.75 mm"]
  - ["Screen", "2.8-inch colour LCD with G-code preview"]
  - ["Connectivity", "Ethernet, USB drive, optional Wi-Fi (ESP module); PrusaLink and Prusa Connect"]
  - ["Sensors", "SuperPINDA mesh bed levelling, filament sensor, sensorless X/Y homing, fan RPM sensing"]
  - ["Size and weight", "380 × 330 × 380 mm (without spool holder and power supply); 4.5 kg"]
  - ["Power", "External 24 V power supply, 100–240 V AC input"]
faq:
  - q: What is the build volume of the Prusa MINI?
    a: 180 × 180 × 180 mm. The MINI+ has the same build volume as the original MINI.
  - q: What is the difference between the Prusa MINI and the MINI+?
    a: The MINI+ replaced the MINI's M.I.N.D.A. sensor with the SuperPINDA, which Prusa says does not drift with temperature and gives a more consistent first layer. Both use the same firmware.
  - q: Does the Prusa MINI+ have Wi-Fi?
    a: Not out of the box. It has Ethernet and a USB port; Wi-Fi needs Prusa's optional ESP Wi-Fi module.
  - q: Is the Prusa MINI+ a kit?
    a: Prusa sells it both as a kit and semi-assembled. The semi-assembled version arrives in three large parts that you join together.
sources:
  - name: Prusa Research – Original Prusa MINI+ product page
    url: https://www.prusa3d.com/en/product/original-prusa-mini-semi-assembled-3d-printer-9
  - name: Prusa blog – Original Prusa MINI announcement (12 October 2019)
    url: https://blog.prusa3d.com/original-prusa-mini-is-here-smart-and-compact-3d-printer/
  - name: Prusa blog – November 2020 update (MINI+ and SuperPINDA)
    url: https://blog.prusa3d.com/november2020_update_original_prusa_i3_mk3splus_miniplus_mini_kit_satin_steel_sheet_40870/
  - name: Prusa Knowledge Base – Firmware updating (MINI/MINI+)
    url: https://help.prusa3d.com/en/article/firmware-updating-mini_124784
  - name: Prusa Knowledge Base – Printer handbooks
    url: https://help.prusa3d.com/en/article/printer-handbooks_125045
  - name: Prusa Knowledge Base – MINI+ semi-assembled manual
    url: https://help.prusa3d.com/manual/original-prusa-mini-semi-assembled_1151
  - name: Prusa – Original Prusa MINI+ handbook (copy)
    url: https://sites.tuni.fi/uploads/2021/07/465004e8-prusa3d_manual_mini_en.pdf
tools: [stl-viewer, gcode-to-stl, 3mf-to-stl]
---
**The Prusa MINI+ (Original Prusa MINI+) is a compact open-frame 3D printer from Prusa Research with a 180 × 180 × 180 mm build volume, automatic mesh bed levelling and Ethernet built in.** Prusa announced the first MINI on 12 October 2019 at a launch price of US$349 / €379 (VAT included) as an assembly kit. In November 2020 it became the MINI+, with the SuperPINDA levelling sensor, at US$399 / €419 (VAT included).

## Prusa MINI+ at a glance

| Item | Detail |
|---|---|
| Build volume | 180 × 180 × 180 mm |
| Hotend / bed | 280 °C / 100 °C |
| Extruder | Bowden, 3:1 gearing |
| Levelling | SuperPINDA mesh bed levelling |
| Connectivity | Ethernet, USB, optional Wi-Fi |
| Versions | Kit or semi-assembled |
| Weight | 4.5 kg |

## Who the Prusa MINI+ suits

The MINI+ suits beginners, students and anyone with limited desk space who prints small and medium parts. Its small footprint also makes it a common choice for print farms. Prusa lists a long material list, from PLA and PETG to ASA, ABS, PC and flexible filaments, although the Bowden extruder makes soft flexibles harder to feed than a direct-drive printer.

Choose a larger model if you regularly print parts over 18 cm or want multi-material printing – the MINI+ does not support Prusa's MMU. See the whole range on our [Prusa 3D printers](/printers/prusa-3d-printers/) page.

## Prusa MINI vs MINI+

The MINI+ replaced the original M.I.N.D.A. probe with the **SuperPINDA**, which Prusa says does not drift with temperature and needs no thermistor, so the first layer is more consistent. New metal clips also make the bearings easier to fit. The firmware is the same for both. Firmware 5.1.0 later added Input Shaper and Pressure Advance, which Prusa says make the printer faster.

## Setting up the Prusa MINI+

The semi-assembled MINI+ arrives as three large parts; the kit takes longer to build. Prusa's knowledge base has a step-by-step "Building your MINI+" guide.

1. Join the three parts following the building guide and fit the spool holder.
2. Place the printer on a flat, stable surface with about 30 cm of space around it, and connect the external power supply.
3. On first boot, the **Calibration Wizard** runs a selftest of the fans, axes and heaters, then mesh bed levelling.
4. Run **First Layer Calibration**: turn the knob while a zig-zag line prints until the first layer is slightly squished. This sets the Live Z value.
5. Load filament from the Filament menu (Prusa recommends PLA first) and print a test file from the USB drive.

**Tip:** run First Layer Calibration again when you switch between steel sheets, because smooth, textured and satin sheets differ in thickness.

## Connecting the Prusa MINI+

The MINI+ prints from a **USB drive** on the front and has an **Ethernet** port. Wi-Fi needs Prusa's optional ESP module. With a network connection, **PrusaLink** gives local control in a browser and **Prusa Connect** lets you upload, start and monitor prints remotely. The printer also works fully offline.

## Prusa MINI+ manual

Prusa publishes the MINI+ handbook in the Prusa Knowledge Base, listed under Printer handbooks as "Original Prusa MINI & MINI+". The assembly instructions for the semi-assembled version are a separate online manual with a downloadable PDF. The handbook covers the first start, the calibration wizard, the material guide, regular maintenance and troubleshooting.

## Firmware and software

Firmware updates come as a `.bbf` file: copy the file for your language to the root of a USB drive, insert it and restart the printer. Prusa notes that a MINI+ on firmware older than 4.4.0 must flash 4.4.x first before moving to 5.1.0 or later. Slice with the free **PrusaSlicer**, which includes MINI+ profiles. Check a model before slicing with our [STL viewer](/stl-viewer/).

## Compare the Prusa MINI+

For a larger Prusa, see the [Prusa MK4](/printers/prusa-mk4/) page, or compare the MINI+ with other compact printers in our [printer comparison tool](/printers/compare/).
