---
title: Bambu Lab PLA Matte filament – settings, TDS specs and printing tips
seoTitle: Bambu Lab PLA Matte Filament – Settings, TDS Specs, Tips
description: Bambu Lab PLA Matte filament explained – nozzle and bed temperatures, speed, drying, TDS strength and heat values, RFID and AMS, and Matte vs PLA Basic.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/37b2414a-1b9c-4575-82df-9be3d4a1f582/output.png
imageAlt: "Illustration of a desktop printer finishing a soft-grey matte vase next to a sage-green matte figurine and a dry box of pastel spools"
category: Filament and materials
summary:
  - Bambu Lab's data sheet lists PLA Matte at 190–230 °C on the nozzle, 35–45 °C on the bed and under 300 mm/s, with the store page quoting up to 270 mm/s on a 0.4 mm nozzle.
  - On the data sheet PLA Matte is denser and less strong than PLA Basic (32 vs 39 MPa tensile in X-Y, 25 vs 35 MPa across layers), so it suits display parts more than load-bearing ones.
  - Every official spool has an RFID tag and Bambu Lab lists PLA Matte as compatible with the AMS and AMS lite; it dries at 50–55 °C for 8 hours.
faq:
  - q: What temperature should I print Bambu Lab PLA Matte filament at?
    a: Bambu Lab's technical data sheet gives 190–230 °C on the nozzle and 35–45 °C on the bed, with the part-cooling fan at 100%. The test specimens on the sheet were printed at 220 °C. On a Bambu printer the RFID tag loads the built-in profile, so you rarely need to set this yourself.
  - q: Is Bambu PLA Matte stronger than PLA Basic?
    a: No. On Bambu Lab's own data sheets PLA Matte has lower tensile strength (32 vs 39 MPa in X-Y) and much lower strength across layers (25 vs 35 MPa in Z) and lower bending strength. It does stretch more before breaking in the X-Y direction, but for functional parts PLA Basic or a tougher material is the better choice.
  - q: Does Bambu PLA Matte need to be dried?
    a: Not always, but it helps if a spool has been left open. Bambu Lab recommends 50 °C for 8 hours in a blast drying oven, or 55 °C for 8 hours in an AMS 2 Pro or AMS HT, and storage below 20% relative humidity with desiccant.
  - q: Can I use PLA Matte in the AMS lite?
    a: Yes. Bambu Lab's store page lists PLA Matte as compatible with the AMS and AMS lite, and the wiki's material table marks normal PLA (which includes PLA Matte) as suitable for both. The RFID tag is read by both units.
sources:
  - name: Bambu Lab US store – PLA Matte
    url: https://us.store.bambulab.com/products/pla-matte
  - name: Bambu Lab – PLA Matte Technical Data Sheet V2.0 (hosted by Additive-X)
    url: https://www.additive-x.com/shop/mpattachments/file/viewonline/id/513/product_id/2261
  - name: Bambu Lab – PLA Basic Technical Data Sheet V2.0
    url: https://cdn.shopify.com/s/files/1/0380/5149/files/Bambu_PLA_Basic_Technical_Data_Sheet.pdf
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: Bambu Lab Wiki – Compatibility and parameter settings of filaments
    url: https://wiki.bambulab.com/en/x1/manual/compatibility-and-parameter-settings-of-filaments
  - name: Snapmaker blog – PLA Matte vs Basic
    url: https://blog.snapmaker.com/blog/pla-matte-vs-basic/
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**Bambu Lab PLA Matte filament is Bambu Lab's 1.75 mm PLA with a flat, non-glossy surface that hides layer lines, printed at 190–230 °C on the nozzle and 35–45 °C on the bed according to Bambu Lab's data sheet.** It loads and prints like ordinary PLA, and on a Bambu printer the RFID tag sets the profile for you. The trade-off is strength: Bambu Lab's own test values put it below PLA Basic, especially between layers. This guide covers the print settings, the full data-sheet figures, drying, RFID and AMS use, the colour range, how Matte compares with PLA Basic and other Bambu PLAs, and practical tips for a clean matte finish. Facts come from Bambu Lab's store page, its PLA Matte technical data sheet (V2.0) and the Bambu Lab Wiki, checked November 2026; values can change between batches, so check the label on your spool.

## Bambu Lab PLA Matte at a glance

| Item | Bambu Lab figure |
|---|---|
| Diameter | 1.75 mm ± 0.03 mm |
| Nozzle temperature | 190–230 °C |
| Bed temperature | 35–45 °C (Cool Plate with glue; higher on PEI, see below) |
| Print speed | Under 300 mm/s (TDS); up to 270 mm/s tested on a 0.4 mm nozzle (store) |
| Part-cooling fan | 100% |
| Drying | 50 °C for 8 h (oven) or 55 °C for 8 h (AMS 2 Pro, AMS HT) |
| Density | 1.31 g/cm³ |
| Heat deflection | 52 °C at 1.8 MPa, 58 °C at 0.45 MPa |
| Hardened nozzle needed | No – Bambu Lab lists PLA for all nozzle sizes |
| RFID / AMS | RFID tag on every official spool; AMS and AMS lite compatible |
| Formats | With spool or as a refill (refills need a reusable spool) |

## What is Bambu Lab PLA Matte filament?

PLA Matte is part of Bambu Lab's PLA family, alongside PLA Basic, Silk+, Marble, Wood, Metal and other decorative grades. Bambu Lab describes it as having a matte, non-glossy finish and a curated range of muted colours aimed at art, décor and design objects. The wiki's material table groups it with PLA Basic as "normal PLA", which means the same general rules apply: no enclosure needed, no hardened nozzle, and the same AMS compatibility.

The matte look changes how a print reads. Glossy PLA reflects light along every layer line, so each step of a curved surface shows. A matte surface scatters light, so the eye sees the shape rather than the layers. Matte filaments in general get this finish from additives in the plastic; Bambu Lab does not publish its formula, but the data sheet does show a higher density than PLA Basic (1.31 vs 1.24 g/cm³), which is consistent with a filled material.

**Why it matters:** the higher density means a 1 kg spool holds slightly less length. By our calculation from the published densities, 1 kg of 1.75 mm PLA Matte is roughly 320 m of filament, against roughly 335 m for PLA Basic. That is close enough not to matter for most jobs, but worth knowing if a large print is near the end of a spool.

For the whole Bambu range, see our overview of [Bambu filament](/blog/bambu-filament/).

## Bambu Lab PLA Matte print settings

Bambu Lab's technical data sheet gives one set of recommended settings. On a Bambu printer the built-in "Bambu PLA Matte" profile in Bambu Studio applies them when the AMS reads the RFID tag.

| Setting | Recommended |
|---|---|
| Nozzle temperature | 190–230 °C |
| Bed temperature | 35–45 °C |
| Build plate | Cool Plate, High Temperature Plate or Textured PEI Plate |
| Plate preparation | Glue (PVP glue stick) |
| Print speed | Under 300 mm/s |
| Cooling fan | 100% |
| Chamber temperature | 25–45 °C |
| Retraction | 0.6–1.0 mm at 20–40 mm/s |
| Max overhang | 55° |
| Max bridge | 30 mm |

The data sheet's test specimens were printed at 220 °C on the nozzle, 35 °C on the bed and 200 mm/s, which is a sensible middle point if you set things by hand on a non-Bambu printer.

**Bed temperature by plate.** The 35–45 °C range on the data sheet matches the Cool Plate. The wiki's material table gives 45–65 °C for normal PLA on the Smooth PEI (High Temperature) Plate and Textured PEI Plate, and marks the Engineering Plate as not recommended for PLA. The store page also lists the Cool Plate SuperTack, Smooth PEI, Textured PEI and 3D Effect plates in its compatibility table.

**Speed.** The store page quotes up to 270 mm/s, measured with a 0.4 mm nozzle, 0.4 mm line width and 0.2 mm layers; the data sheet simply says under 300 mm/s. Treat 270 mm/s as a realistic ceiling for the published finish, and slow down if you see dull or rough patches on outer walls.

**Tip:** if you print on an enclosed Bambu printer, open the door or lift the top glass for PLA Matte as for any PLA. The wiki warns that a hot chamber can soften PLA early in the hotend and cause heat creep, and the data sheet's chamber range tops out at 45 °C.

## PLA Matte properties from the technical data sheet

Bambu Lab's data sheet (V2.0) lists the following, measured on specimens printed at 100% infill, then annealed and dried at 55 °C for 8 hours. Bambu Lab notes the values are for design reference and comparison only; real parts with infill and walls will differ.

| Property | X-Y (along layers) | Z (across layers) |
|---|---|---|
| Tensile strength | 32 ± 3 MPa | 25 ± 2 MPa |
| Elongation at break | 32.8 ± 4.3% | 4.8 ± 0.6% |
| Young's modulus | 1960 ± 90 MPa | 1670 ± 110 MPa |
| Bending strength | 53 ± 2 MPa | 32 ± 3 MPa |
| Bending modulus | 2360 ± 250 MPa | 2040 ± 330 MPa |
| Impact strength (unnotched) | 19.2 ± 3.7 kJ/m² | 6.6 ± 1.1 kJ/m² |

Thermal and physical values on the same sheet:

- **Glass transition:** 61 °C
- **Vicat softening:** 63 °C
- **Heat deflection:** 52 °C at 1.8 MPa and 58 °C at 0.45 MPa
- **Melting temperature:** 163 °C
- **Water absorption (saturated, 25 °C, 55% RH):** 0.40%
- **Chemical resistance:** not resistant to acids, alkalis or some organic solvents; resistant to most oils and greases

**Why it matters:** the gap between X-Y and Z is the key number. Across layers PLA Matte reaches about 25 MPa and only 4.8% elongation, so a part loaded so that layers pull apart will snap cleanly. Orient brackets, clips and hooks so the load runs along the layers. Like all PLA, it is not suited to parts that sit at around 50 °C or more – the wiki recommends PETG, ABS or ASA for those.

## PLA Matte vs PLA Basic and other Bambu PLAs

Both data sheets use the same test method, so the figures compare directly.

| Property | PLA Matte | PLA Basic |
|---|---|---|
| Surface | Flat, non-glossy | Smooth, slightly glossy |
| Nozzle / bed | 190–230 °C / 35–45 °C | 190–230 °C / 35–45 °C |
| Density | 1.31 g/cm³ | 1.24 g/cm³ |
| Tensile strength X-Y / Z | 32 / 25 MPa | 39 / 35 MPa |
| Bending strength X-Y / Z | 53 / 32 MPa | 76 / 68 MPa |
| Elongation at break X-Y | 32.8% | 12.2% |
| Impact strength X-Y (unnotched) | 19.2 kJ/m² | 26.6 kJ/m² |
| Heat deflection (1.8 MPa) | 52 °C | 54 °C |
| Vicat softening | 63 °C | 57 °C |

In short: the two print the same way, but PLA Basic is the stronger, stiffer material, especially between layers. PLA Matte bends further before breaking along its layers and has a slightly higher Vicat point, while heat deflection is about the same. For printing day to day, the choice is mainly about looks; for anything that takes a load, Basic wins. Our [Bambu Lab PLA Basic filament](/blog/bambu-lab-pla-basic-filament/) guide covers that grade in detail.

The other Bambu PLAs sit at the decorative end too:

- **PLA Silk+** – the opposite of Matte: a shiny, satin surface for vases and gifts.
- **PLA Marble, Wood, Metal, Sparkle** – textured or effect finishes; some have their own nozzle or plate notes on their product pages.
- **PLA-CF** – carbon-fibre filled and also matte-looking, but Bambu Lab requires a hardened nozzle for it.

For how PLA compares with other materials in general, see our [PLA filament](/blog/pla-filament/) guide.

## RFID, AMS and AMS lite compatibility

Every official Bambu PLA Matte spool carries an RFID tag. When you load it into an AMS, the printer reads the material type, colour and print settings, so you load and print without choosing a profile. Bambu Lab's store page lists PLA Matte as compatible with the AMS and AMS lite, and the drying figures on the same page mention the AMS 2 Pro and AMS HT, which can dry the spool while it is loaded.

Refills are sold without a spool. Bambu Lab says a refill must be fitted to a spool, such as its reusable spool, and the wiki shows how to swap one on. Follow those steps exactly so the AMS still recognises the spool afterwards.

**Tip:** PLA Matte works well as the main colour in multi-colour prints because matte surfaces hide the slight colour bleed and transition marks that glossy PLA can show. See our [Bambu Lab AMS lite](/printers/bambu-lab-ams-lite/) page for how the unit handles spool changes.

## Bambu Lab PLA Matte colours

Bambu Lab describes the PLA Matte colours as a curated range of muted, elegant shades rather than bright, saturated ones. The range covers whites and ivories, greys and charcoal, earth tones such as tans and browns, soft pastels such as pinks, and deeper blues, greens and reds. Retailer listings show names such as Ivory White, Charcoal, Desert Tan, Sakura Pink and Marine Blue. The exact list changes over time, and some colours are sold only with a spool or only as a refill, so check the store for what is current.

**Tip:** dark matte colours show dust and fingerprints less than glossy black, but they also show white stress marks where a support or a clip has been bent. Light matte colours photograph well because they do not throw reflections.

## Drying and storing PLA Matte

Bambu Lab gives several drying options for PLA Matte:

| Method | Temperature and time |
|---|---|
| Blast drying oven | 50 °C for 8 hours |
| AMS 2 Pro or AMS HT | 55 °C for 8 hours |
| X1 printer heatbed | 60–70 °C for 12 hours |
| Data sheet and wiki (PLA in general) | 55 °C for 8 hours |

The data sheet recommends printing and storing it below 20% relative humidity, sealed with desiccant. At 0.40% saturated water absorption PLA Matte does not take up much moisture, but a spool left open for weeks in a humid room can start to string or print with a rougher surface. Our guide to [how to dry filament](/blog/how-to-dry-filament/) compares dryers, ovens and AMS drying.

## Tips for a clean matte finish

1. **Use the built-in profile first.** On a Bambu printer, start with the RFID profile before you tune anything. It already sets 100% fan and a suitable temperature.
2. **Clean the plate.** Fingerprints and grease are the usual cause of poor adhesion, so clean the plate before a long job and use a thin layer of glue on the Cool Plate as the data sheet suggests.
3. **Watch the first layer.** A slightly squashed first layer gives the best grip. If corners lift, raise the bed by 5 °C within the plate's range rather than changing the nozzle temperature.
4. **Keep the temperature in range.** Stay within 190–230 °C. If walls look weak or rough at high speed, raise the nozzle by 5–10 °C; if you see stringing, lower it by 5–10 °C before changing retraction.
5. **Choose layer height for the look you want.** Matte already hides lines, so 0.2 mm layers often look like finer layers on glossy PLA. Use 0.12–0.16 mm for figurines and curved surfaces.
6. **Orient parts for strength.** Put loads along the layers, not across them, because the Z values on the data sheet are much lower.
7. **Remove supports carefully.** With low elongation across layers, thin parts can snap with supports. Use tree supports or a support interface, and let the part cool before removal.
8. **Open the chamber.** On enclosed printers, open the door or remove the top glass to avoid heat creep.
9. **Dry an old spool.** If a spool has been out for a while, dry it before an important print.

Before you start, preview the model in an STL viewer to check thin walls and the best orientation.

## Who Bambu Lab PLA Matte suits

- **Display models and décor:** figurines, architecture models, vases and planters where a flat, painted look matters more than strength.
- **Product mock-ups and prototypes:** a matte surface looks closer to injection-moulded plastic, which helps when you show a design to someone.
- **Multi-colour prints:** muted colours and hidden layer lines make AMS prints look cleaner.
- **Beginners:** the settings are the same as PLA Basic, so it is just as easy to print.

It is a poor fit for clips, snap-fits, brackets and anything that sits in a hot car or near a heater. For those, use PLA Basic, PETG or a heat-resistant material.

## Verdict

Bambu Lab PLA Matte prints like ordinary PLA – 190–230 °C on the nozzle, 35–45 °C on the bed, 100% fan – and gives a flat, non-glossy surface that hides layer lines well. Bambu Lab's own data sheet shows the cost: lower strength than PLA Basic, especially across layers. Use it for anything you want to look good and Basic or a tougher filament for anything that has to hold up under load.
