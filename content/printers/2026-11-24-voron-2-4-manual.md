---
title: Voron 2.4 manual – where to find it and what it covers
seoTitle: Voron 2.4 Manual – Assembly Guide, Startup and Tuning
description: Where to find the official Voron 2.4 assembly manual, what its sections cover, initial startup checks, Klipper setup, maintenance schedule and common issues.
date: 2026-11-24
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/5acf0bda-1429-4135-aebe-d7da01173857/output.png
imageAlt: "Illustration of a laptop showing an exploded line diagram of a cube printer frame next to a partly built black aluminium cube frame with four corner motors, an orange printed part and a parts tray"
category: Manuals
brand: Voron Design
summary:
  - The official Voron 2.4 assembly manual is a PDF in the Voron-2 repository on Voron Design's GitHub, and the Voron documentation site carries the matching build, startup and tuning guides.
  - The manual walks through the frame, Z drive, A/B drives, gantry, toolhead, panels, electronics and wiring for the 250, 300 and 350 mm versions.
  - After assembly, Voron's initial startup checks cover heaters, stepper direction, endstops, Quad Gantry Level, probe calibration, PID tuning and extruder calibration in Klipper.
faq:
  - q: Where is the Voron 2.4 manual?
    a: The assembly manual is published as a PDF in the Voron-2 repository on Voron Design's GitHub, together with the CAD files, STLs and Klipper configuration templates. The Voron documentation site links to it and hosts the build, startup and tuning guides.
  - q: Is there a separate Voron 2.4 assembly manual for each size?
    a: No. One manual covers the 250, 300 and 350 mm versions; the frame extrusions, belts and a few parts differ in length, as listed in the bill of materials.
  - q: What should I do first after building a Voron 2.4?
    a: Follow Voron's initial startup checks in order – temperatures and fans, stepper direction with STEPPER_BUZZ, homing, the Z endstop, Quad Gantry Level, probe accuracy, PID tuning, Z offset and extruder rotation distance.
sources:
  - name: Voron Design – Voron-2 repository on GitHub
    url: https://github.com/VoronDesign/Voron-2
  - name: Voron Documentation – Build guide
    url: https://docs.vorondesign.com/build/
  - name: Voron Documentation – Software configuration
    url: https://docs.vorondesign.com/build/software/configuration.html
  - name: Voron Documentation – Initial startup checks
    url: https://docs.vorondesign.com/build/startup/startup.html
  - name: Voron Documentation – Tuning
    url: https://docs.vorondesign.com/tuning
  - name: Voron Documentation – Maintenance guide
    url: https://docs.vorondesign.com/maintenance.html
  - name: Voron Documentation – Community, I wish I had known
    url: https://docs.vorondesign.com/community/howto/simonthecat/I_wish_I_had_known.html
  - name: Wikipedia – Voron 2.4
    url: https://en.wikipedia.org/wiki/Voron_2.4
  - name: MatterHackers – Voron Design CoreXY kit
    url: https://www.matterhackers.com/store/l/voron-design-corexy-fdm-3d-printer/sk/MKASZJJ4
tools: [stl-viewer, step-viewer, gcode-to-stl]
---
**The official Voron 2.4 manual is the assembly PDF in the Voron-2 repository on Voron Design's GitHub, and the Voron documentation site adds the build, startup, tuning and maintenance guides that go with it.** The repository also holds the CAD files, the printable STLs and the Klipper configuration templates. This page summarises the Voron 2.4 manual and guides in our own words; build from the official documents.

## What the official Voron 2.4 manual covers

The Voron 2.4 assembly manual follows the order of the build. In broad terms it covers:

1. **Introduction** – printing the parts, the hardware you need and general build notes.
2. **Frame assembly** – squaring the aluminium extrusion frame.
3. **Z drive** – the four corner Z motors that move the gantry.
4. **A/B drive modules** – the CoreXY motor mounts.
5. **Gantry** – the flying gantry with its linear rails, and squaring it.
6. **Toolhead** – the extruder, hotend and cooling.
7. **Build plate, panels, skirts and spool holder.**
8. **Electronics mounting and wiring.**
9. **Exhaust filter and display.**
10. **Pre-flight checklist and belting the Z drive.**

Section names have changed between manual revisions (the 2.4R2 revision came out in February 2022), so follow the version that matches your parts.

## Voron 2.4 at a glance

| Item | Detail |
|---|---|
| Sizes | 250, 300 or 350 mm cube |
| Motion | CoreXY with a flying gantry over a fixed bed |
| Z axis | Four independent Z motors (Quad Gantry Level) |
| Enclosure | Enclosed chamber |
| Firmware | Klipper |
| First release | May 2020 |

For the design and sourcing options, see our [Voron 2.4 printer page](/printers/voron-2-4/).

## Quick-start summary after assembly

The Voron build guide continues after the mechanical build with electrical wiring, software installation (Mainsail, Fluidd or OctoPrint on a single-board computer) and Klipper configuration. In short:

1. **Configure Klipper** – download the Voron 2.4 printer.cfg template from the repository, set the serial IDs of your controller boards and use the `[quad_gantry_level]` section, then run `FIRMWARE_RESTART`.
2. **Check temperatures, heaters and fans** before anything moves.
3. **Check stepper direction** with `STEPPER_BUZZ`, then home X and Y.
4. **Set up the Z endstop** and run **Quad Gantry Level** to level the gantry to the bed.
5. **Check endstops and the probe** with `QUERY_ENDSTOPS` and `PROBE_ACCURACY`, then calibrate the probe.
6. **PID tune** the hotend and bed, set the **Z offset** and calibrate the extruder's `rotation_distance`.
7. **Slicer setup and first print**, then the secondary tuning guides (filament tuning, sensorless homing and more).

**Tip:** check every heater and thermistor reading before homing. A swapped thermistor or reversed motor is far cheaper to find at this stage than after a crash.

## Voron 2.4 maintenance schedule

Voron's maintenance guide recommends:

| When | What to check |
|---|---|
| Periodically | Fasteners, printed parts for cracks, play in the X carriage, PTFE tube seating, hotend tightness, belt tension |
| When you see dust at the pulleys | A belt rubbing – realign it |
| Regularly | Debris in the extruder gears |
| About every 500 hours | Replace the PTFE tube (the guide gives 500–1,000 hours) |
| Every few thousand hours | Re-lubricate the linear rails (more often if you use oil) |
| As needed | Nozzles and the PEI sheet; keep a set of spare parts |

## Common Voron 2.4 build problems

These come from the community section of the Voron documentation:

- **Warped bed** – heating the bed too fast or tightening its bolts while cold can bend it; follow the bed mounting instructions.
- **Mixed-up pulleys** – the Z drive uses 16-tooth pulleys that look almost the same as the 20-tooth pulleys used elsewhere.
- **Damaged drivers or board** – never plug in motors while the electronics are powered, and avoid spinning steppers fast by hand.
- **Nozzle crashes** – a crash at speed can bend the frame or gantry, so confirm homing and probing before printing.

## Firmware and software

The Voron 2.4 runs **Klipper** on a single-board computer with one or two controller boards, using the configuration templates in the repository's firmware folder. Any slicer with a Klipper-friendly start G-code works; the build guide includes slicer setup. To check a sliced file, open it in our [G-code to STL tool](/gcode-to-stl/), and inspect printed-part files with the [STL viewer](/stl-viewer/).

## Related pages

Compare a Voron 2.4 with ready-made enclosed printers in the [printer comparison tool](/printers/compare/).
