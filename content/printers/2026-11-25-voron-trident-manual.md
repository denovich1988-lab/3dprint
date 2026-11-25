---
title: Voron Trident manual – where to find it and what it covers
seoTitle: Voron Trident Manual – Assembly Guide and Startup Checks
description: Where to find the official Voron Trident assembly manual, what the Voron docs cover, build sizes, Klipper setup, initial startup checks and maintenance.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/2857dede-37db-43d8-ae69-b1aa96d6c393/output.png
imageAlt: "Illustration of a half-built aluminium-extrusion CoreXY frame on a workbench with three lead-screw motors holding the bed, linear rails, a single-board computer, a wiring loom, a tablet dashboard and rows of orange printed brackets"
category: Manuals
brand: Voron Design
summary:
  - Voron Design publishes the Trident Assembly Manual as a PDF in the Voron-Trident GitHub repository, linked from the build section of the Voron Documentation site.
  - The Trident is a DIY CoreXY printer whose bed rides on three independent lead-screw Z motors, in 250, 300 or 350 mm sizes.
  - Stock Trident builds run Klipper, and the Voron docs add wiring, software, initial startup and maintenance guides to the assembly manual.
faq:
  - q: Where can I find the Voron Trident manual?
    a: The Trident Assembly Manual is a PDF in Voron Design's Voron-Trident GitHub repository. The Mechanical Assembly page of the Voron Documentation site links to it, along with a frame upgrade manual for V1 owners.
  - q: What sizes does the Voron Trident come in?
    a: Voron recommends 250 × 250 × 250, 300 × 300 × 250 and 350 × 350 × 250 mm. Every size has 250 mm of Z travel.
  - q: How does the Voron Trident level its bed?
    a: Three independent Z motors hold the bed. Klipper's Z_TILT_ADJUST probes three points, averages the readings and adjusts each motor until the bed is level with the gantry.
sources:
  - name: Voron Documentation – Mechanical assembly
    url: https://docs.vorondesign.com/build/mechanical/
  - name: Voron Design – Voron-Trident releases
    url: https://github.com/VoronDesign/Voron-Trident/releases
  - name: Voron Documentation – Initial startup checks
    url: https://docs.vorondesign.com/build/startup/startup.html
  - name: Voron Documentation – Software installation
    url: https://docs.vorondesign.com/build/software/
  - name: Voron Documentation – Electrical wiring
    url: https://docs.vorondesign.com/build/electrical/
  - name: Voron Documentation – Maintenance
    url: https://docs.vorondesign.com/maintenance.html
  - name: All3DP – Voron Trident vs 2.4
    url: https://all3dp.com/2/voron-trident-vs-2-4-differences/
  - name: Wikipedia – Voron Design
    url: https://en.wikipedia.org/wiki/Voron_Design
tools: [stl-viewer, 3d-viewer, gcode-to-stl]
---
**The official Voron Trident manual is the Trident Assembly Manual, a PDF that Voron Design publishes in its Voron-Trident GitHub repository and links from the Mechanical Assembly page of the Voron Documentation site.** The project also publishes a frame upgrade manual for Voron V1 owners, and sources the bill of materials through the configurator on its website. This page summarises what the Trident documentation covers in our own words; it does not replace it.

## What the official Voron Trident documentation covers

The Trident build is documented in several parts:

1. **Assembly Manual** – the mechanical build, from printed parts and the 2020 aluminium frame to the linear rails, Z drives, gantry, A/B motors and toolhead.
2. **Bill of materials** – sourced through the Trident configurator on the Voron Design website.
3. **Electrical wiring guide** – wiring diagrams for supported boards and mains safety.
4. **Software installation** – setting up Klipper and a web interface.
5. **Initial startup checks** – the first power-on and calibration routine.
6. **Maintenance guide** – periodic checks and part replacement.

## Voron Trident key facts

| Item | Detail |
|---|---|
| Sizes | 250 × 250 × 250, 300 × 300 × 250, 350 × 350 × 250 mm |
| Motion | CoreXY, fixed gantry |
| Z axis | Bed moved by three independent lead-screw motors |
| Levelling | Three-point Z tilt adjust |
| Firmware | Klipper, with Mainsail or Fluidd |
| Toolhead | Stealthburner (separate repository) |
| Released | 2021, replacing the Voron V1 |

## Building the Trident: high-level order

1. **Print the parts** in the materials and settings the Voron docs recommend.
2. **Build the frame** from 2020 extrusions and square it carefully.
3. **Fit the linear rails, Z drives and bed** – three lead-screw motors carry the bed.
4. **Assemble the gantry, A/B drives and toolhead.**
5. **Wire the electronics**, following the wiring guide for your board.
6. **Install Klipper** on a Raspberry Pi or similar host and flash the controller.

**Tip:** check every printed part in our [STL viewer](/stl-viewer/) before printing – one missing or wrongly scaled part can stall the build.

## Wiring and mains safety

The electrical guide lists the controller boards Voron supports for the Trident and stresses mains safety: unplug the printer and let the power supply discharge before working, use 18 AWG wire at minimum (16 AWG preferred) for mains, choose a quality solid-state relay, fit a thermal fuse to the bed heater and earth the bed and frame.

## Initial startup checks

Voron's startup guide runs in this order, at a high level:

1. Check that the nozzle and bed temperatures read sensibly, then test the heaters and fans.
2. Run STEPPER_BUZZ on each motor; each Z corner should move up and then down.
3. Home X and Y with an emergency stop ready, and reverse motor directions if needed.
4. Check the endstops and the probe, then run Z_TILT_ADJUST to level the bed to the gantry.
5. Set the 0,0 position, run PID tuning for the hotend and bed, set the Z offset and calibrate the extruder.

**Why it matters:** most first-start problems – motors turning the wrong way, wrong thermistor type, homing in the wrong direction – are caught by working through this list in order. Voron's docs also have a troubleshooting page for an uneven Trident bed mesh.

## Maintenance Voron recommends

- Check fasteners, toolhead seating, the PTFE tube and hotend mounting.
- Check belt tension and alignment – belts stretch during break-in, and dust near a pulley means rubbing.
- Clear debris from the extruder.
- Replace the PTFE tube every 500–1000 hours of printing.
- Re-lubricate the motion parts every few thousand hours, and replace worn nozzles and PEI sheets as needed.

## Related pages

See our [Voron 2.4 printer page](/printers/voron-2-4/) and the [Voron 2.4 manual guide](/printers/voron-2-4-manual/), check a sliced file with the [G-code to STL tool](/gcode-to-stl/), or compare printers in the [printer comparison tool](/printers/compare/).
