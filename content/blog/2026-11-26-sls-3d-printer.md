---
title: SLS 3D printer – how selective laser sintering works and who it suits
seoTitle: SLS 3D Printer Guide – How SLS 3D Printing Works
description: "SLS 3D printer guide: how selective laser sintering works, nylon and TPU powders, benchtop vs industrial machines, SLS vs FDM and resin, and the full workflow."
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/ab899164-7bd0-4950-844f-78794677ff88/output.png
imageAlt: "Illustration of a powder-bed printer cabinet with an orange laser spot sintering white powder, beside a sieve station where grey nylon gears and a lattice bracket are brushed free"
category: Buying guides
summary:
  - An SLS 3D printer uses a laser to fuse thin layers of polymer powder, and the loose powder around each part supports it, so no support structures are needed.
  - Most SLS parts are made from nylon (PA12 or PA11), with filled nylons, polypropylene and flexible TPU as other common powders; the parts are strong, matte and slightly grainy.
  - SLS is a workshop process rather than a desktop hobby – it needs powder handling, cooling time, depowdering and blasting equipment and a dedicated space.
faq:
  - q: What is an SLS 3D printer?
    a: An SLS (selective laser sintering) 3D printer spreads a thin layer of plastic powder, heats it to just below its melting point and uses a laser to fuse the cross-section of each part. The build platform then drops by one layer and the process repeats until the parts are finished inside a block of loose powder.
  - q: Is SLS better than FDM?
    a: For strong, functional nylon parts with complex shapes, SLS is usually better – it needs no supports, can pack many parts in one build and gives more uniform strength in all directions. FDM is far cheaper, simpler and cleaner to run at home, handles many more materials and colours, and is the better choice for most hobby prints.
  - q: Which is better, SLA or SLS?
    a: They solve different problems. Resin SLA printers give the smoothest surfaces and finest details, which suits miniatures, dental models and visual prototypes. SLS gives tougher nylon parts that do not need supports, which suits brackets, housings, clips, hinges and small production runs.
  - q: What are the disadvantages of SLS 3D printing?
    a: SLS machines and their post-processing stations cost much more than hobby printers, the powder is messy and must be handled with care, builds need a long cooling period, surfaces are grainy unless finished, colour choice is limited (parts are usually white, grey or black and dyed afterwards) and used powder must be mixed with fresh powder.
sources:
  - name: Formlabs – Selective laser sintering (SLS) 3D printing guide
    url: https://formlabs.com/blog/what-is-selective-laser-sintering/
  - name: Formlabs – Fuse series technical specifications
    url: https://formlabs.com/3d-printers/fuse-1/tech-specs/
  - name: Formlabs – Fuse 1+ 30W product page
    url: https://formlabs.com/3d-printers/fuse-1/
  - name: Formlabs – Refresh rate in SLS 3D printing
    url: https://formlabs.com/blog/refresh-rate-sls-3d-printing/
  - name: Formlabs – 10 questions about Nylon 12 for the Fuse 1
    url: https://formlabs.com/global/blog/fuse-1-nylon-12-3d-printing-faq/
  - name: Hubs – How to design parts for SLS 3D printing
    url: https://www.hubs.com/knowledge-base/how-design-parts-sls-3d-printing/
  - name: Oak Ridge National Laboratory – Selective laser sintering
    url: https://ornl.gov/content/selective-laser-sintering
  - name: Sinterit – Lisa X SLS 3D printer
    url: https://www.sinterit.com/lisa-x/
  - name: SLS4All – in-house SLS 3D printing
    url: https://sls4all.com/
tools: [stl-viewer, 3mf-to-stl, step-to-stl]
---
**An SLS 3D printer builds parts by using a laser to fuse thin layers of plastic powder, most often nylon, and the loose powder around each part holds it in place – so SLS 3D printing needs no support structures and can fill the whole build volume with parts.** That makes SLS one of the best ways to make strong, functional plastic parts with complex shapes, and it is why the process is used for prototypes, end-use parts and small production runs. It is also a very different kind of machine from a hobby filament printer. This guide explains how SLS works step by step, which powders it uses, how benchtop and industrial machines differ, how SLS compares with FDM and resin, and what the full workflow looks like. Facts come from maker documentation and engineering guides, checked November 2026; prices are not compared.

## SLS 3D printer at a glance

| | SLS (selective laser sintering) | FDM (filament) | Resin (SLA / MSLA) |
|---|---|---|---|
| Raw material | Polymer powder | Plastic filament | Liquid photopolymer resin |
| How layers are made | Laser fuses powder | Hot nozzle extrudes plastic | Light cures resin |
| Supports | Not needed – loose powder supports parts | Needed for overhangs | Needed for most parts |
| Typical materials | Nylon 12, Nylon 11, filled nylons, TPU, polypropylene | PLA, PETG, ABS, ASA, TPU, nylon and many more | Standard, tough, flexible, castable and dental resins |
| Strength | Strong, close to uniform in all directions | Weakest between layers | Depends on resin; standard resins are brittle |
| Surface | Matte, slightly grainy | Visible layer lines | Smoothest, finest detail |
| Colour | Usually white, grey or black; can be dyed | Hundreds of colours | Limited set of colours |
| Post-processing | Cooling, depowdering, blasting | Remove supports | Wash, UV cure, remove supports |
| Where it lives | Workshop or lab with powder handling | Desk or shelf | Ventilated room or workshop |

## How SLS 3D printing works

Every SLS printer follows the same basic cycle, whatever its size:

1. **Preheat.** The powder in the build chamber is heated to just below the temperature at which it would fuse. This keeps the difference between sintered and loose powder small and reduces warping.
2. **Spread a layer.** A recoater blade or roller spreads a very thin, even layer of powder across the build area.
3. **Laser scan.** A laser traces the cross-section of every part in that layer and fuses the powder particles together.
4. **Lower and repeat.** The build platform drops by one layer thickness, a new layer of powder is spread, and the laser fuses the next slice. This repeats for thousands of layers.
5. **Cool down.** When the last layer is done, the whole powder block – called the build cake – has to cool slowly inside the machine or a separate unit. Taking parts out hot causes warping, so cooling can take about as long as printing.
6. **Break out and clean.** The cake is moved to a depowdering station, the parts are dug out, the loose powder is collected for reuse, and the parts are cleaned with brushes, compressed air or media blasting.

**Why it matters:** because the unfused powder supports everything, you can nest parts above, beside and inside each other in three dimensions. A single build can contain dozens or hundreds of small parts, which is something FDM and resin printers cannot do in the same way.

## What SLS parts are like

SLS nylon parts are strong and slightly flexible, with a matte, sandy surface. Because each layer fuses into the one below more completely than FDM layers do, SLS parts are much closer to equally strong in every direction. Engineering guides from Formlabs and Hubs list the typical traits:

- **No support marks.** There are no supports to snap off, so complex internal channels, interlocking parts and moving assemblies can be printed in one piece – as long as there is an escape hole for the trapped powder.
- **Slightly porous and grainy.** The surface feels like fine sandpaper. Blasting smooths it; vapour smoothing, dyeing, painting or coating are common finishes.
- **Fine features have limits.** Very thin walls and tiny holes can fill with partly fused powder. Hubs recommends minimum wall thicknesses and hole sizes in its SLS design guide, and the same rules appear in most service bureau guidelines.
- **Shrinkage.** Large flat areas and thick blocks can warp or shrink as they cool, so designers hollow out thick sections and orient large parts carefully.

**Tip:** if you design parts for SLS, add drain holes to hollow sections and leave clearance between moving parts, then check the model in our [STL viewer](/stl-viewer/) before sending it to a printer or service.

## SLS materials

Nylon powders make up most SLS printing, but the list has grown:

- **Nylon 12 (PA12)** – the standard SLS material. Strong, stiff, chemically resistant and with low moisture uptake compared with other nylons. Good for housings, brackets, jigs and fixtures.
- **Nylon 11 (PA11)** – made from a bio-based source (castor oil) and more ductile than PA12, so it bends rather than snapping. Good for clips, hinges and impact-loaded parts.
- **Glass-filled and carbon-filled nylons** – stiffer and more heat-resistant versions for parts that must not flex.
- **TPU** – a flexible, rubber-like powder for gaskets, grips, seals and lattices.
- **Polypropylene (PP)** – chemically resistant and watertight, used for fluid-handling parts and containers.

**Why it matters:** material choice is tied to the machine. Each printer is only qualified for the powders its maker supports, so check the material list before choosing a printer, not after.

## Powder reuse and refresh rate

Not all the powder in a build ends up in parts. The loose powder can be reused, but it ages from the heat and must be mixed with fresh powder. The share of fresh powder needed in each new build is called the **refresh rate**. Formlabs explains that refresh rates differ by material and machine, and it publishes a refresh rate for each of its powders – Nylon 12 is among the lowest.

**Tip:** when you compare SLS printers, look at the refresh rate of the material you will use most. A lower refresh rate means less waste and lower running costs over time.

## Benchtop vs industrial SLS 3D printers

For decades, SLS meant large industrial machines in dedicated rooms. Over the past decade, smaller benchtop systems have brought SLS to engineering offices, universities and small manufacturers.

- **Benchtop SLS.** Compact machines from makers such as Formlabs (the Fuse series) and Sinterit (the Lisa range), plus newer entrants such as SLS4All, are designed to fit in an office workshop. They have smaller build volumes and fewer material options than industrial systems, but cost far less to buy and run.
- **Industrial SLS.** Large machines from established industrial makers run bigger build chambers, more powerful lasers (sometimes several), more materials and automated powder handling. They are used for production and by print services.
- **Related powder-bed processes.** HP's Multi Jet Fusion also fuses nylon powder in a heated bed, but it uses a fusing agent and infrared lamps instead of a laser. Results are similar in many ways, and many print services offer both.

**Why it matters:** no SLS machine is a consumer appliance today. Even benchtop systems need a separate depowdering station, a vacuum or extraction system and good housekeeping.

## Example: Formlabs Fuse 1+ 30W

The Formlabs Fuse 1+ 30W is one of the best-known benchtop SLS printers. According to Formlabs' technical specifications, it has a build volume of 165 × 165 × 300 mm and a 30 W ytterbium fibre laser. Formlabs' SLS powder range includes Nylon 12, Nylon 11, glass- and carbon-filled nylons, polypropylene and TPU 90A; check Formlabs' compatibility list for which powders a given Fuse model runs. It works with the Fuse Sift (a station that recovers loose powder, mixes it with fresh powder and stores it) and the Fuse Blast (an automated cleaning and polishing unit).

**Tip:** the Fuse series shows what a complete SLS setup looks like – printer, powder recovery station and blasting – so budget for the whole workflow, not only the printer.

## SLS vs FDM

FDM printers melt filament and lay it down with a nozzle. They are the printers most people own at home, from a compact [Bambu Lab A1 mini](/printers/bambu-lab-a1-mini/) to large-format machines.

- **Choose SLS** for strong nylon parts with complex geometry, parts that must be equally strong in every direction, batches of many small parts, or assemblies printed in one piece.
- **Choose FDM** for cost, simplicity, colour choice, large parts, a huge range of materials and printing at home. Engineering filaments such as nylon, carbon-fibre PA and ASA cover many functional jobs on a good enclosed FDM printer.

**Why it matters:** for most hobby and home users, an FDM printer plus an online SLS service for the occasional demanding part is the practical combination.

## SLS vs resin (SLA)

Resin printers cure liquid resin with light. A professional SLA printer such as the [Formlabs Form 4](/printers/formlabs-form-4/) and the many smaller MSLA printers give the smoothest surfaces and the finest detail of any common process.

- **Choose resin** for miniatures, jewellery patterns, dental models, smooth visual prototypes and small, highly detailed parts.
- **Choose SLS** for tough, functional parts that must flex, take impacts or be screwed together, and for printing without supports.

## The SLS workflow, start to finish

1. **Prepare files.** Export your model as STL or 3MF. If your CAD tool gives you a STEP file, our [STEP to STL converter](/step-to-stl/) makes a mesh you can check and send on.
2. **Pack the build.** SLS software arranges parts in 3D to fill the build volume. Denser packing means a lower cost per part but more heat in the cake.
3. **Print.** The machine preheats, prints layer by layer and logs the job.
4. **Cool.** Leave the cake to cool as long as the maker recommends.
5. **Depowder.** Break out the parts at a recovery station and collect the loose powder.
6. **Blast and finish.** Media-blast the parts, then dye, smooth, paint or coat them if needed.
7. **Mix powder.** Blend recovered powder with fresh powder at the right refresh rate for the next build.

## Space, safety and handling

Fine polymer powder needs more care than filament. Maker guidelines generally call for gloves, eye protection and a suitable mask when handling powder, a vacuum or extraction system rated for it, and a clean, dedicated area. Follow the safety data sheet for each powder and the maker's site requirements for power, ventilation and floor space.

**Tip:** if you cannot set aside a separate area for powder handling, an SLS printer is not a good fit – use a print service instead.

## Is an SLS 3D printer right for you? A checklist

Answer these before looking at specific machines:

1. Do you need many strong nylon parts, not a few one-off prints?
2. Are your parts complex enough that supports are a real problem on FDM or resin?
3. Do you have a workshop space for powder handling, cooling and blasting?
4. Will you print often enough to keep powder turning over and waste low?
5. Do the materials you need appear on the printer's qualified list?
6. Have you compared the cost of owning the system with ordering SLS parts from a service?

If you answer "no" to most of these, a good FDM printer is likely the better buy. Our guide to [large 3D printers](/blog/large-3d-printer/) helps if your parts are simply too big for a standard machine.

## Verdict

An SLS 3D printer is the right tool when you need strong, functional nylon parts with complex shapes, often and in batches. It removes supports from the equation and gives near-isotropic parts, but it brings powder handling, long cooling times and a full post-processing workflow. For home users, the best route to SLS parts is usually a print service; for engineering teams and small manufacturers, a benchtop SLS system can pay its way.
