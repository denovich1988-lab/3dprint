---
title: Creality Sonic Pad manual – setup, input shaping and updates
seoTitle: Creality Sonic Pad Manual – Setup Wizard and Updates
description: Where to find the official Creality Sonic Pad manual, the setup wizard, firmware flashing, input shaping with the G-sensor, web control, updates and common fixes.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/67d402e1-5e2b-40fc-b02b-0155949c40ce/output.png
imageAlt: "Illustration of a tablet-style control pad on a stand connected by a USB cable to an open-frame printer, a small accelerometer board clipped to the print head and abstract wave shapes floating above"
category: Manuals
brand: Creality
summary:
  - Creality publishes the Sonic Pad user manual and firmware on the Creality Sonic Pad page of its Download Center.
  - The manual's setup wizard connects the pad to the printer over USB, flashes Klipper-ready firmware to the printer and runs a self-test.
  - Input shaping uses the supplied G-sensor on the hot end; PID calibration of hot end and bed is saved automatically.
faq:
  - q: Where can I find the Creality Sonic Pad manual?
    a: On Creality's Download Center, on the Creality Sonic Pad page. It lists the Sonic Pad User Manual, the latest firmware with release notes and Creality Print.
  - q: How do I update the Creality Sonic Pad?
    a: Online from the pad's settings (Configure → Other Settings), with at least 500 MB free, or offline by unzipping the update package to the root of a USB drive.
  - q: Which printers work with the Creality Sonic Pad?
    a: Creality says 22 of its printers are preconfigured, including the Ender-3 V2, Ender-3 S1, Ender-3 S1 Pro, CR-10 V3 and Ender-5 Plus. Other printers can be added by editing printer.cfg.
  - q: Does the Sonic Pad resume after a power cut?
    a: No. The manual lists power-loss resume as not supported.
sources:
  - name: Creality – Sonic Pad Download Center
    url: https://www.creality.com/download/creality-sonic-pad
  - name: Creality – Sonic Pad support page
    url: https://www.creality.com/support/creality-sonic-pad
  - name: Creality – Sonic Pad product page
    url: https://www.creality.com/fr/products/creality-sonic-pad
  - name: Creality Sonic Pad user manual V3.0 (copy hosted by Jaycar)
    url: https://assets.jaycar.com.au/TL4800_manualMain_130675.pdf
  - name: Creality blog – Sonic Pad launch
    url: https://www.creality.com/blog/creality-to-advance-3d-printing-with-industrys-first-klipper-integrated-sonic-pad
  - name: Creality blog – Sonic Pad February update
    url: https://www.creality.com/blog/creality-sonic-pad-first-updated-on-february-root-access
  - name: Creality blog – Sonic Pad April upgrade
    url: https://www.creality.com/blog/sonic-pad-april-upgrade
tools: [gcode-to-stl, stl-viewer, 3mf-to-stl]
---
**Creality publishes the official Creality Sonic Pad manual on the Creality Sonic Pad page of its Download Center, next to the latest firmware, its release notes and Creality Print.** The Sonic Pad is a 7-inch Klipper touchscreen computer that connects to a Creality printer over USB and runs the printer's motion planning. This page summarises what the manual covers, in our own words. It does not replace it.

## What the official Sonic Pad manual covers

1. **Product description and specs**, packing list, interface and buttons.
2. **Precautions** before connecting a printer.
3. **First use** – the setup wizard.
4. **Daily use** – printing, files and controls.
5. **System upgrade** – online and USB updates.
6. **Advanced options** – input shaping, time-lapse, slicer thumbnails.
7. **Custom printer adaptation**, **web terminals** and **SSH**.
8. **Troubleshooting** and notes.

## Creality Sonic Pad key facts

| Item | Detail |
|---|---|
| Firmware | Klipper-based |
| Screen | 7-inch touchscreen, 1024 × 600 |
| Memory | 2 GB RAM, 8 GB storage |
| Ports | 4 × USB 2.0, Ethernet, G-sensor port |
| Wi-Fi | 2.4 GHz |
| Power | 12 V DC adapter |

In the box are the pad, the power adapter, a G-sensor with cable, a USB cable, a USB drive, two USB adapters and screws.

## Quick start: the setup wizard

- **Connect:** power on the pad and connect it to the printer with the USB cable.
- **Basics:** choose language and region, join Wi-Fi if you want it, accept the privacy policy and name the device.
- **Pick your printer** from the list of preconfigured Creality models.
- **Flash the printer:** the wizard installs firmware on the printer's mainboard, from an SD/TF card or over USB. Boards with an ATmega2560 chip cannot use the card method, and some ATmega1284P boards need a bootloader update first.
- **Self-test:** let the wizard check the printer, then tap to finish.

## Input shaping with the G-sensor

Klipper reduces ringing by measuring resonance. Mount the G-sensor on the hot end (Creality supplies a bracket model; orientation does not matter) and run the resonance measurement. The manual has separate steps for bed-slinger printers like the Ender-3 S1 and printers where the bed does not move on Y, like the Ender-5 Plus. Hot end and bed PID calibration results save automatically.

## Web control and thumbnails

Open Fluidd in a browser at the pad's IP address, or Mainsail on port 8819. The manual explains how to add preview thumbnails in Cura, PrusaSlicer, SuperSlicer and Creality Print, so the pad shows a picture of each file.

## Firmware updates

- **Online:** Configure → Other Settings, with at least 500 MB of free space.
- **Offline:** download the package from the Download Center, unzip it to the root of a USB drive and plug it into the pad.

Creality's updates have added more printers, SSH root access, editable bed-mesh points and USB mouse and keyboard support.

## Common problems and fixes

| Symptom | Fix from the manual |
|---|---|
| Wi-Fi will not connect | Use a 2.4 GHz WPA2 network; WPA3 is not supported |
| Printer disconnects when saving Z-offset | Save the Z-offset only after the print has finished |
| Runout sensor does nothing | Add a filament_switch_sensor section to printer.cfg |
| USB drive not read | Try another drive or port |
| Ringing or layer shifts | Lower speed or acceleration and check belt tension |

To send a bug report, export logs from Configure → Other Settings → Export Log. There is no power-loss resume.

## Related pages

The pad is most common on the [Creality Ender-3 V2](/printers/creality-ender-3-v2/) and the [Ender-3 S1](/printers/creality-ender-3-s1/). To check a sliced file, open it in our [G-code to STL tool](/gcode-to-stl/).
