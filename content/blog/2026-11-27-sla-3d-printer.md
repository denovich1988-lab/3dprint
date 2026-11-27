---
title: SLA 3D printer – how resin printing works, SLA vs MSLA vs DLP, and what to buy
seoTitle: SLA 3D Printer Guide – Laser, MSLA and DLP Resin Printers
description: "SLA 3D printer guide: laser SLA vs MSLA (LCD) and DLP resin printers, XY resolution and layer height, resins, washing and curing, safety, SLA vs FDM."
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/15dfe228-6490-4028-b8a0-ec31aed114e8/output.png
imageAlt: "Illustration of a generic resin printer with its orange UV cover lifted, a part hanging from the build plate, a wash-and-cure station and nitrile gloves"
category: Buying guides
summary:
  - An SLA 3D printer builds parts from liquid photopolymer resin that hardens under light, layer by layer; strictly, SLA uses a laser, while MSLA (LCD) and DLP printers cure a whole layer at once with a masked LED panel or a projector.
  - Resin printers give smoother surfaces and finer detail than filament (FDM) printers, but every print must be washed in a solvent such as isopropyl alcohol and post-cured with light.
  - Liquid resin is a skin irritant and sensitiser, so resin makers' safety data sheets call for chemical-resistant gloves, eye protection and good ventilation, and uncured resin must never go down the drain.
faq:
  - q: What is an SLA 3D printer?
    a: An SLA (stereolithography) 3D printer makes objects from liquid photopolymer resin that hardens where light hits it. A laser traces each layer, the build platform moves by one layer height, and the process repeats. Many people also call LCD (MSLA) and DLP printers "SLA printers", because they use the same resins and a similar workflow.
  - q: Is MSLA the same as SLA?
    a: Not exactly. Laser SLA draws each layer with a moving laser spot, while MSLA shines an LED array through an LCD screen that masks the layer shape, curing the whole layer at once. Both are vat photopolymerization, use 405 nm resins and need washing and curing, so the terms are often used loosely.
  - q: Is SLA better than FDM?
    a: For fine detail and smooth surfaces, yes – resin printers are the usual choice for miniatures, jewellery patterns and dental models. FDM is simpler, cleaner, cheaper per part and better for large, functional parts in materials such as PLA, PETG or ASA. Many makers own both.
  - q: Do resin printers need ventilation?
    a: It depends on the resin, so read its safety data sheet. Liquid resins give off vapours and smells, and most guidance says to print in a well-ventilated room or with local exhaust, keep the printer out of bedrooms and living areas, and close the resin vat or bottle when not in use.
sources:
  - name: Formlabs – Guide to stereolithography (SLA) 3D printing
    url: https://formlabs.com/blog/ultimate-guide-to-stereolithography-sla-3d-printing/
  - name: Formlabs – Guide to resin 3D printers – SLA vs DLP vs MSLA vs LCD
    url: https://formlabs.com/global/blog/resin-3d-printer-comparison-sla-vs-dlp/
  - name: Formlabs – Form 3+ vs Form 2 comparison (laser spot size, LPU)
    url: https://formlabs.com/blog/form-3-form-2-3d-printer-comparison/
  - name: Formlabs – FDM vs SLA vs SLS comparison
    url: https://formlabs.com/blog/fdm-vs-sla-vs-sls-how-to-choose-the-right-3d-printing-technology/
  - name: Formlabs – Resin safety and resin terms FAQ
    url: https://formlabs.com/blog/resin-safety-resin-terms-faq/
  - name: Formlabs – Form 4 tech specs
    url: https://formlabs.com/3d-printers/resin/tech-specs/
  - name: Stratasys – Digital light processing (DLP) 3D printing explained
    url: https://www.stratasys.com/en/resources/blog/digital-light-processing-dlp-3d-printing-explained/
  - name: RadTech – Proper handling of UV curable 3D printing resins
    url: https://radtech.org/?p=2688
  - name: Wikipedia – Stereolithography
    url: https://en.wikipedia.org/wiki/Stereolithography
  - name: Elegoo – Saturn 4 Ultra 12K product and spec page
    url: https://www.elegoo.com/collections/resin/products/saturn-4-ultra-12k-10inch-monochrome-lcd-resin-3d-printer
  - name: Anycubic store – Photon Mono 4
    url: https://store.anycubic.com/products/photon-mono-4
tools: [stl-viewer, obj-to-stl, 3d-viewer]
---
**An SLA 3D printer makes parts from liquid photopolymer resin that hardens under light, one thin layer at a time – strictly a laser draws each layer, but the name is now used for all resin printers, including the cheaper MSLA (LCD) and DLP types.** Resin printers are known for fine detail and smooth surfaces, which is why they are popular for miniatures, jewellery patterns, dental models and small precise prototypes. They also bring extra work and care: every print must be washed and cured, and liquid resin needs gloves and ventilation. This guide explains how SLA works, how laser SLA, MSLA and DLP differ, what XY resolution and layer height mean, resins, post-processing, safety, SLA vs FDM and what to look for when you buy. Facts come from resin makers' and printer makers' own documentation (Formlabs, Elegoo, Anycubic, Stratasys) and the RadTech resin-handling guide, checked November 2026. We do not test or rank printers.

## SLA 3D printer at a glance

| | Laser SLA | MSLA / LCD | DLP |
|---|---|---|---|
| Light source | UV laser (typically 405 nm on desktop machines) steered by mirrors | LED array shining through an LCD mask | Projector with a digital micromirror device |
| How a layer is cured | Laser traces the shape point by point | Whole layer at once | Whole layer at once |
| XY detail set by | Laser spot and positioning steps | LCD pixel size | Projected pixel size (larger area = larger pixels) |
| Speed | Slows down as parts get larger or the plate fuller | Layer time does not depend on how full the plate is | Layer time does not depend on how full the plate is |
| Typical users | Professional desktop and industrial | Hobbyists and, increasingly, professionals | Dental, jewellery and professional labs |
| Main consumables | Resin, resin tank | Resin, release film, LCD screen | Resin, resin tank or film |

All three share one workflow: slice, print upside down from a resin vat, wash, remove supports, post-cure.

## How an SLA 3D printer works

Stereolithography is the oldest 3D printing process. Chuck Hull filed the patent and coined the word "stereolithography" in 1984; it was granted in 1986, and he co-founded 3D Systems to sell the machines.

The classic industrial machine works top-down: a laser traces a layer on the surface of a large vat of resin, the platform sinks by one layer, a blade recoats the surface and the next layer is drawn. Almost all desktop resin printers work the other way up:

1. The build platform lowers into a shallow tank of resin until only one layer's thickness of resin is left between the platform and the clear bottom of the tank.
2. Light from below cures that layer onto the platform (or onto the previous layer).
3. The platform lifts, peeling the cured layer away from the tank bottom or film, and fresh resin flows in.
4. The cycle repeats, so the part grows upside down, hanging from the platform.

This bottom-up (inverted) design needs much less resin than a full vat. Its weak point is the peel: every layer is pulled off the tank bottom, which stresses the part and its supports. Makers attack this in different ways – Formlabs uses flexible tanks and a "low force" design, and some LCD printers such as the Elegoo Saturn 4 Ultra tilt the vat to release each layer more gently.

**Tip:** because parts hang from the platform and are peeled every layer, supports and part orientation matter more than on a filament printer. Most slicers for resin printers add supports automatically; start with those and adjust only once you see failures.

## Laser SLA vs MSLA (LCD) vs DLP

**Laser SLA.** A laser beam is steered by mirrors (galvanometers) to trace each layer. As an example, Formlabs lists an 85 µm laser spot, a 405 nm laser and 25 µm XY resolution for its Form 3+, and explains that the laser can be positioned in steps finer than its spot size. Because the laser draws everything, a full build plate takes longer per layer than a single small part.

**MSLA / LCD.** "Masked SLA" printers shine an array of UV LEDs through a monochrome LCD screen. The screen blocks light everywhere except the layer's shape, so the whole layer cures at once, however many parts are on the plate. Screen resolutions are marketed as "9K", "12K" or "16K", but the useful number is the pixel size. Most hobby resin printers are MSLA, and even Formlabs' current Form 4 uses a backlit LCD system it calls a Low Force Display.

**DLP.** Digital light processing printers use a projector with a digital micromirror device: thousands of tiny mirrors, each switching one pixel on or off. Stratasys notes that the pixel size depends on the projected area – spread the same projector over a larger build area and each pixel gets bigger. Formlabs adds that light reaching the edges of the build area travels further, which can distort pixels there.

**Why it matters:** for a hobbyist, the choice today is mostly between MSLA models, because that is where most consumer printers sit. Laser SLA and DLP are found mainly in professional and dental machines.

## Resolution: XY pixel size and layer height

Resin printer spec sheets quote two different resolutions:

- **XY resolution (pixel size)** – the smallest step across the build plate. On an LCD printer it equals the screen's pixel size, for example 19 × 24 µm on the Elegoo Saturn 4 Ultra 12K and 17 × 17 µm on the Anycubic Photon Mono 4, according to the makers. Formlabs lists 50 µm pixels for the Form 4.
- **Z resolution (layer height)** – how thick each layer is. Elegoo lists 0.01–0.2 mm for the Saturn 4 Ultra; Formlabs lists 25–200 µm for the Form 4. Thinner layers mean smoother curved surfaces but more layers and longer prints; start with the layer height the resin maker's profile suggests.

A few points to keep in mind:

- **"K" numbers are not resolution on their own.** A 12K screen on a large 10-inch printer and a 9K screen on a smaller 7-inch printer can have similar pixel sizes. Compare the µm figure, not the K.
- **Pixel size is not accuracy.** Real dimensional accuracy also depends on resin shrinkage, exposure settings, light uniformity, supports and post-curing. Formlabs notes that accuracy varies by machine and material, and that flexible resins are less accurate than rigid ones.
- **Smallest features are larger than one pixel.** A wall or pin one pixel wide will not survive washing. Formlabs quotes 0.2 mm as the minimum wall on the Form 4, compared with about 0.8 mm for FDM.

**Tip:** check a model's thinnest walls and pins before printing. An STL viewer that runs in the browser, such as the one in our tools list, lets you inspect a file without uploading it anywhere.

## Resins: what an SLA 3D printer can print

Resin printers can only print the photopolymer resins they are designed for. Desktop LCD printers usually cure at 405 nm, and most third-party hobby resins are sold for "405 nm LCD/DLP/SLA printers". Formlabs printers use resin cartridges and are designed around Formlabs' own resin range, so check what a printer supports before buying third-party resin.

Common resin families:

- **Standard resins** – for display models and miniatures. Good detail, but often brittle.
- **Water-washable resins** – rinse in water instead of alcohol. The rinse water still contains resin and must not go down the drain.
- **Tough, ABS-like and flexible resins** – for snap fits, hinges and parts that bend.
- **High-temperature, ceramic-filled and rigid engineering resins** – mainly in professional ranges.
- **Castable resins** – burn out cleanly for jewellery casting.
- **Dental and biocompatible resins** – for dental models, guides and appliances, used with validated printers and workflows. Formlabs sells a separate Form 4B for this market.

**Tip:** resin thickens when cold and behaves differently with temperature. Check the working temperature on the resin's bottle or data sheet; some printers, such as the Form 4, heat the resin automatically. Printing in a cold garage often causes failed prints.

## Post-processing: wash, remove supports, cure

A resin print is not finished when it comes off the printer. The surface is coated in sticky uncured resin, and the material has not reached its final strength.

1. **Remove the part** from the build plate with a plastic or metal scraper, wearing gloves.
2. **Wash it.** Most resins are washed in isopropyl alcohol (IPA); Formlabs also mentions other wash solvents. Use two containers – a "dirty" first wash and a "clean" second wash – or a wash station that stirs the alcohol. Water-washable resins are rinsed in water.
3. **Dry it** fully before curing, so the alcohol evaporates and does not leave a white film.
4. **Remove supports** – often easier just after washing, while the part is still slightly soft. Sand the support marks.
5. **Post-cure** under UV light (a curing station or UV lamp) for the time the resin maker recommends.

Wash-and-cure stations combine an agitated alcohol tank with a turntable and UV LEDs; many printer makers sell one as an accessory or in a bundle.

**Why it matters:** over-curing makes parts brittle and can yellow clear resins; under-curing leaves them tacky and weaker. Follow the resin's data sheet rather than a generic time.

## Resin safety: gloves, ventilation and disposal

Liquid photopolymer resin is the part of SLA printing that needs most care. Resin makers publish a safety data sheet (SDS) for each resin, and both Formlabs and RadTech say to read it before you print – ideally before you buy. If a resin comes without an SDS, ask the seller for one or choose another resin.

General guidance from those sources:

- **Gloves** whenever you touch liquid resin or unwashed parts. RadTech recommends chemical-resistant nitrile or neoprene gloves, not latex.
- **Eye protection** – safety glasses or goggles when pouring resin or handling solvent.
- **Skin contact:** wash with soap and water; do not use alcohol or other solvents on skin. Many resin SDSs list skin sensitisation as a hazard: repeated contact can lead to an allergic reaction that gets worse with each exposure.
- **Ventilation:** print in a well-ventilated room or use local exhaust, as the SDS says. Formlabs notes that some resins, for example those containing ACMO, call for respiratory protection. Keep the printer out of bedrooms and living spaces.
- **Spills:** wipe up at once with paper towels, then clean the surface with alcohol and soap and water.
- **Disposal:** never pour resin or resin-contaminated alcohol or water down the sink. Cure leftover resin and soaked paper towels solid in sunlight or under UV light before throwing them away, and follow local rules for larger quantities and used solvent.
- **IPA is flammable.** Keep it closed, away from heat and sparks, and handle it in a ventilated space.

## SLA vs FDM

| | SLA / resin | FDM / filament |
|---|---|---|
| Detail and surface | Very fine; layer lines hard to see | Visible layer lines, thicker minimum features |
| Typical parts | Miniatures, jewellery, dental, small precise parts | Functional parts, enclosures, brackets, large prints |
| Build volume (desktop) | Usually smaller | Usually larger |
| Strength | Depends on resin; standard resins brittle, tough and engineering resins available | Strong, predictable materials such as PETG, ASA, nylon |
| Post-processing | Always wash and cure; supports leave marks | Remove supports; sanding optional |
| Mess and safety | Liquid chemicals, gloves, ventilation | Hot nozzle, some fumes with ABS and ASA |
| Running costs | Resin, alcohol, gloves, film and screens | Filament, nozzles |

Formlabs describes resin parts as more isotropic (similar strength in all directions) than FDM parts, whose layers are a weak point. FDM, in turn, is cleaner to live with and handles big, practical parts in materials such as PLA and PETG. Our [FDM 3D printer guide](/blog/fdm-3d-printer/) covers the filament side, and the [SLS 3D printer guide](/blog/sls-3d-printer/) explains the powder-based alternative for strong nylon parts.

## Pros and cons of an SLA 3D printer

**Pros**

- Fine detail and smooth surfaces straight off the printer.
- Small features, thin walls and sharp text that FDM cannot reproduce.
- MSLA layer time stays the same however many parts fill the plate.
- Specialised resins for casting, dental and flexible parts.

**Cons**

- Washing and curing on every print, plus support removal.
- Liquid resin needs gloves, ventilation and careful disposal.
- Smaller build volumes than comparable FDM printers.
- Consumables: release film, resin tanks and, on LCD printers, the screen itself wear out over time.
- Standard resins are brittle and some resins degrade with long exposure to UV light.

## What to look for when buying an SLA 3D printer – checklist

1. **What you print.** Miniatures and small detailed parts suit a 7-inch printer; larger figures, cosplay parts or batches need a 10-inch or larger screen.
2. **XY pixel size in µm,** not the K number. Compare it at the same build area.
3. **Build volume** in millimetres, especially the height.
4. **Release system.** Tilting vats, low-force tanks or special films reduce peel forces and failed prints.
5. **Levelling.** Some printers level automatically; budget ones use four screws and a sheet of paper.
6. **Light source.** Look for a collimated or COB light source with even output across the screen.
7. **Connectivity and software.** USB-only printers are simpler; Wi-Fi models allow remote printing and monitoring. Check which slicer the maker supports.
8. **Resin heating and sensors** – useful in cold rooms; resin-level and failed-print detection save resin.
9. **Consumable availability.** Make sure spare LCD screens, films or tanks are easy to buy for that model.
10. **Space for post-processing.** Budget room and money for a wash-and-cure station, alcohol, gloves and ventilation.

For comparison, the makers list these specs for a few current models:

- **Anycubic Photon Mono 4** – entry level, 7-inch 10K LCD, 17 × 17 µm XY, 153.4 × 87 × 165 mm build volume, USB only.
- **Elegoo Saturn 4 Ultra** – 10-inch 12K LCD, 19 × 24 µm XY, 218.88 × 122.88 × 220 mm, tilting vat, AI camera, Wi-Fi. See our [Elegoo Saturn 4 Ultra page](/printers/elegoo-saturn-4-ultra/).
- **Formlabs Form 4** – professional MSLA printer with a Low Force Display, 50 µm pixels, 200 × 125 × 210 mm, automatic resin heating. See our [Formlabs Form 4 page](/printers/formlabs-form-4/).

## Who an SLA 3D printer suits

Resin suits figure painters and tabletop gamers, jewellers (castable patterns), dental labs and designers who need small, precise prototypes. If you mostly print practical household parts, storage boxes or large objects, a filament printer will be easier and cheaper to run. If space is the issue, our [mini 3D printer guide](/blog/mini-3d-printer/) covers compact filament and resin options.

## Verdict

An SLA 3D printer is the right tool when detail and surface finish matter more than size and convenience. For most home users that means an MSLA (LCD) printer: compare pixel size in µm, build volume and the release system, and plan for a wash-and-cure station and a ventilated resin corner from day one. Laser SLA and DLP machines are mainly professional tools. Treat liquid resin with respect – gloves, eye protection, ventilation and no resin down the drain – and follow each resin's SDS. If you need large or tough functional parts instead, start with an FDM printer.
