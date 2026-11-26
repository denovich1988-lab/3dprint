---
title: Bambu Lab PLA Basic filament – settings, colours and AMS tips
seoTitle: Bambu Lab PLA Basic Filament – Settings, Specs and Tips
description: Bambu Lab PLA Basic filament explained – nozzle and bed temperatures, build plates, drying, RFID, refills, colours and how it compares with PLA Matte.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/ff58cea7-3abd-47cc-b549-d849f2dc542d/output.png
imageAlt: "Illustration of a glossy green PLA spool in a four-slot filament feeder on a desktop printer with a green printed vase on the bed"
category: Filament and materials
summary:
  - Bambu Lab lists PLA Basic at 190–230 °C on the nozzle and 35–45 °C on the bed with glue, at speeds under 300 mm/s.
  - Every official spool has an RFID tag, so an AMS or AMS lite reads the type, colour and print settings without manual setup.
  - Bambu Lab recommends drying PLA Basic at 55 °C for 8 hours and storing it sealed with desiccant below 20% relative humidity.
faq:
  - q: What temperature should I print Bambu Lab PLA Basic filament at?
    a: Bambu Lab's product page lists a nozzle range of 190–230 °C and a bed of 35–45 °C with glue. On a Bambu printer the built-in PLA Basic profile sets this for you, so you rarely need to change it.
  - q: Does Bambu PLA Basic work in the AMS lite?
    a: Yes. Bambu Lab's material table marks normal PLA, including PLA Basic, as compatible with both the AMS and the AMS lite, and the RFID tag is read by both.
  - q: What is the difference between Bambu PLA Basic and PLA Matte?
    a: PLA Basic has a smooth, slightly glossy surface and a wide colour range. PLA Matte has a non-glossy finish that hides layer lines better; Bambu Lab lists it for speeds up to about 270 mm/s and recommends the Cool Plate.
  - q: Can I use PLA Basic in a non-Bambu printer?
    a: Yes. It is standard 1.75 mm PLA, so any printer that takes 1.75 mm filament can print it. Only the RFID convenience is lost; set the temperatures by hand from the spool label.
sources:
  - name: Bambu Lab US store – PLA Basic
    url: https://us.store.bambulab.com/products/pla-basic-filament
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab store – PLA Basic Gradient
    url: https://eu.store.bambulab.com/pl/products/pla-basic-gradient
  - name: Bambu Lab US store – PLA Matte
    url: https://us.store.bambulab.com/products/pla-matte
  - name: Bambu Lab Wiki – AMS lite FAQ
    url: https://wiki.bambulab.com/en/ams-lite/manual/faq
  - name: 3D Universe – Bambu Lab PLA Basic product page
    url: https://shop3duniverse.com/products/bambu-lab-pla-basic-1-75mm-1kg
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**Bambu Lab PLA Basic filament is Bambu Lab's standard 1.75 mm PLA: an RFID-tagged, easy-printing material that Bambu Lab rates for 190–230 °C on the nozzle, 35–45 °C on the bed and speeds under 300 mm/s.** It is the default filament for most Bambu printers and the one their built-in profiles are tuned around. This guide covers the exact settings, which build plates to use, drying, the RFID tag, refills and spools, the colour range and how PLA Basic compares with PLA Matte, Gradient and other Bambu PLAs. For the whole Bambu range, see our overview of [Bambu filament](/blog/bambu-filament/). Facts are from Bambu Lab's store pages and wiki, checked November 2026; check the spool label for the batch you have.

## Bambu Lab PLA Basic at a glance

| Property | Bambu Lab value |
|---|---|
| Diameter | 1.75 mm (±0.03 mm, per retailer listings of the official spec) |
| Nozzle temperature | 190–230 °C |
| Bed temperature | 35–45 °C with glue |
| Print speed | Under 300 mm/s |
| Recommended plates | Cool Plate, High Temperature Plate, Textured PEI Plate |
| Not recommended | Engineering Plate |
| Hotend | All sizes and materials (no hardened nozzle needed) |
| Drying | 55 °C for 8 h in a blast drying oven |
| Storage | Sealed, with desiccant, below 20% RH |
| Heat deflection temperature | 57 °C |
| In the box | One spool and one desiccant pack |
| AMS / AMS lite | Compatible, RFID read automatically |

## PLA Basic print settings

On a Bambu printer you normally do not touch the temperatures: load the spool, the AMS reads the tag, and Bambu Studio picks the "Bambu PLA Basic" profile. If you print it on another machine, or want to tune it, these are the ranges Bambu Lab publishes:

| Setting | Typical value | Notes |
|---|---|---|
| Nozzle | 190–230 °C | Lower end for fine detail, upper end for fast or large prints |
| Bed | 35–45 °C | With Bambu Liquid Glue or a glue stick |
| Speed | under 300 mm/s | Bambu Lab's limit for this material |
| Cooling | Part fan on | PLA needs strong cooling for overhangs and bridges |

The wiki's general PLA table gives a slightly wider nozzle range (190–240 °C) and higher bed temperatures on PEI plates (45–65 °C). It also recommends removing the top glass cover or opening the door when the bed is above 45 °C, because PLA prints best with a cool chamber; a warm one can soften the filament before it reaches the nozzle.

**Tip:** if you see stringing, drop the nozzle 5–10 °C before changing retraction. If layers look weak or matte on a large fast print, raise it by 5–10 °C.

## Which build plate to use

Bambu Lab recommends the Cool Plate, High Temperature (smooth PEI) Plate or Textured PEI Plate for PLA Basic, and lists the Engineering Plate as not recommended. Glue (liquid or stick) is listed as recommended for adhesion.

- **Textured PEI:** the easiest everyday choice. Parts pop off when the plate cools and leave a grainy bottom surface.
- **Smooth PEI / High Temperature Plate:** a glossy bottom face; run the bed toward the 45–65 °C range the wiki gives for PEI.
- **Cool Plate:** works at the lowest bed temperatures; use glue.

If the first layer lifts, clean the plate with warm water and dish soap first – fingerprints and grease are a common cause on PEI. See our [Bambu Lab A1](/printers/bambu-lab-a1/) page for more on plates and setup on the open-frame A1.

## RFID tag, the AMS and the AMS lite

Every official PLA Basic spool carries an RFID tag. Bambu Lab says the printing parameters are stored on the tag and read through the AMS, so the printer knows the material, colour and profile as soon as the spool is loaded. The wiki marks normal PLA, including PLA Basic, as compatible with both the [Bambu Lab AMS](/printers/bambu-lab-ams/) and the AMS lite, and it does not need a hardened nozzle.

**Why it matters:** with four or more spools loaded, the tags remove the chance of printing a PETG slot with PLA settings. Third-party PLA works in the same AMS, but you set the type and colour by hand on the screen or in Bambu Studio.

**Tip:** the AMS lite FAQ lists spool widths of 40–68 mm and an inner hole of 53–58 mm. Official Bambu spools fit; if you mix brands, check the spool size before you buy.

## Refills and the reusable spool

PLA Basic is sold both on a spool and as a refill (filament wound without a spool) and in multi-roll packs. A refill has to be mounted on a spool. Bambu Lab's product page explains how to assemble the reusable spool from two printed parts – a wide piece and a narrow piece with spacing shims – which lock together with a clockwise twist, and links to the wiki guide for swapping a refill on.

**Tip:** keep one or two empty Bambu spools for your most-used colours, then buy those colours as refills.

## PLA Basic colours

Bambu Lab's US product page lists 21 standard colours with hex codes, from Jade White and Black to Bambu Green, Cyan, Magenta and metallic-looking Gold, Silver and Bronze. Retailers carry a few extra shades (such as Cocoa Brown and Hot Pink), and the line-up changes over time, so check the store for what is current.

The hex codes are useful when you plan multicolour prints: you can set the same colour in Bambu Studio's filament list so the preview matches what will come out.

## PLA Basic vs PLA Matte, Gradient and other Bambu PLAs

| Filament | Finish | Key difference from PLA Basic |
|---|---|---|
| PLA Basic | Smooth, slight sheen | Reference material; widest colour range |
| PLA Basic Gradient | Smooth, two colours blending | Same PLA Basic profile; colour changes over about 8–10 m of filament |
| PLA Matte | Non-glossy, hides layer lines | Bambu Lab lists speeds up to about 270 mm/s and recommends the Cool Plate; dry at 50 °C for 8 h |
| PLA Silk+ / specialty PLA | Shiny, wood, marble, sparkle and more | Decorative; check each product page for settings and AMS notes |
| PLA Tough | Smooth | Stronger PLA for functional parts |

**PLA Basic Gradient** is part of the PLA Basic series. Bambu Lab says to use the default PLA Basic profile and lists the same 190–230 °C nozzle and 35–45 °C bed. Because the colour shifts over about 8–10 metres, small models show little change; larger prints show the full gradient.

**PLA Matte** is the one to choose when you want parts to look less "3D printed". For a wider look at ordinary PLA against reinforced PLA, see [PLA vs PLA+](/blog/pla-vs-pla-plus/).

## Drying and storing PLA Basic

Bambu Lab recommends drying PLA Basic at 55 °C for 8 hours in a blast drying oven and storing it sealed with desiccant below 20% relative humidity. The PLA Basic Gradient page adds a heatbed option of 75 °C for 12 hours for printers that support drying on the bed.

PLA is less fussy than nylon or TPU, but a spool left open for weeks in a humid room can start to string, pop or print with a rough surface. Signs it needs drying: crackling at the nozzle, fine hairs between parts and brittle filament that snaps in the AMS tube. Our [how to dry filament](/blog/how-to-dry-filament/) guide covers ovens, dryers and AMS drying.

## Heat and strength limits

Bambu Lab lists a heat deflection temperature and Vicat softening temperature of 57 °C, and a tensile strength of 35 ± 4 MPa. The wiki says PLA is not recommended for parts exposed to about 50 °C or more, because it slowly softens.

**What this means:** PLA Basic is fine for models, toys, organisers, prototypes and indoor parts. Do not use it in a car in summer, near a heater, or for parts that carry load in warm places; choose PETG or ASA instead.

## Checklist for your first PLA Basic print

1. Load the spool in the AMS or AMS lite and check the screen shows "PLA Basic" and the right colour.
2. Pick a Textured PEI or Cool Plate and clean it with dish soap and water.
3. Add a thin layer of glue if you use the Cool Plate or print large, flat parts.
4. Keep the default "Bambu PLA Basic" profile in Bambu Studio for the first print.
5. On enclosed printers with a bed above 45 °C, open the door or lift the top glass.
6. After printing, bag the spool with its desiccant.
7. If you see stringing or popping later, dry the spool at 55 °C for 8 hours.

## Verdict

Bambu Lab PLA Basic is a plain, dependable PLA whose main advantage on a Bambu printer is convenience: the RFID tag and built-in profile mean you load it and print. The published settings – 190–230 °C nozzle, 35–45 °C bed, under 300 mm/s – are standard for PLA, so it also prints on any 1.75 mm machine. Choose PLA Matte for a less glossy look, Gradient for colour effects, and another material when parts will see heat.

Before printing, check your model in our [STL viewer](/stl-viewer/) or pull the mesh out of a MakerWorld project with the [3MF to STL converter](/3mf-to-stl/).
