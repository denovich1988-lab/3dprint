---
title: FDM 3D printer – what it is, how it works and how to choose one
seoTitle: FDM 3D Printer – How It Works, Parts and How to Choose
description: "FDM 3D printer explained: how filament printing works, extruder and hotend, bedslinger vs CoreXY vs delta, materials, FDM vs SLA vs SLS and what to look for."
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/ba527ef9-eab1-4c45-ab49-d07880c3c62e/output.png
imageAlt: "Illustration of a generic CoreXY print head laying a glowing orange filament line onto a half-finished part on a textured build plate"
category: Buying guides
summary:
  - An FDM 3D printer melts plastic filament in a heated nozzle and lays it down line by line and layer by layer to build a part from a sliced 3D model.
  - FDM is a Stratasys trademark; the same process is generically called fused filament fabrication (FFF), the term the open-source RepRap project adopted.
  - FDM is the cheapest and easiest way into 3D printing and handles many plastics, but layer lines are visible and parts are weaker between layers than along them.
faq:
  - q: What is an FDM 3D printer?
    a: An FDM 3D printer is a machine that pushes plastic filament through a heated nozzle and draws each layer of a part on a build plate, then moves up and draws the next layer. It follows instructions (G-code) made by a slicer from a 3D model such as an STL or 3MF file. Most home and hobby 3D printers work this way.
  - q: What does FDM stand for?
    a: FDM stands for fused deposition modeling. The name is a trademark of Stratasys, whose co-founder Scott Crump developed the process in the late 1980s. Other makers and the RepRap community use the generic name fused filament fabrication (FFF) for the same process, so FDM and FFF printers work the same way.
  - q: Are FDM and PLA the same?
    a: No. FDM is the printing process, and PLA is one of the materials it can use. PLA is the most common filament for FDM printers because it prints at low temperatures and warps little, but the same printer can usually also print PETG and TPU, and with the right setup ABS, ASA, nylon and composites.
  - q: Which is better, FDM or SLA?
    a: Neither is better overall. FDM suits larger, functional parts in many plastics with little cleanup and no liquid resin. SLA and other resin printers produce much finer detail and smoother surfaces, which suits miniatures, jewellery and dental models, but the resin must be handled with gloves and every print needs washing and post-curing.
sources:
  - name: Wikipedia – Fused filament fabrication
    url: https://en.wikipedia.org/wiki/Fused_deposition_modeling
  - name: Wikipedia – S. Scott Crump
    url: https://en.wikipedia.org/wiki/S._Scott_Crump
  - name: Formlabs – FDM vs. SLA vs. SLS 3D printing technology comparison
    url: https://formlabs.com/blog/fdm-vs-sla-vs-sls-how-to-choose-the-right-3d-printing-technology/
  - name: Prusa Knowledge Base – Types of printers and their differences
    url: https://help.prusa3d.com/article/types-of-printers-and-their-differences_112464
  - name: Prusa Knowledge Base – Glossary (i3 series)
    url: https://help.prusa3d.com/en/article/glossary-i3-series_125064
  - name: Polymaker Wiki – Cartesian vs. CoreXY vs. Delta
    url: https://wiki.polymaker.com/the-basics/fun-3d-printing-facts/cartesian-vs.-corexy-vs.-delta
  - name: Bambu Lab Wiki – Filament guide material table
    url: https://wiki.bambulab.com/en/general/filament-guide-material-table
  - name: 3DJake – FDM printers category guide
    url: https://www.3djake.com/3d-printers-and-more/fdm-printers
tools: [stl-viewer, 3mf-to-stl, 3d-viewer]
---
**An FDM 3D printer builds objects by melting plastic filament in a heated nozzle and laying it down in thin lines, one layer on top of the next, until the part is complete.** It is the most common type of 3D printer at home, in schools and in workshops, because the machines and materials are affordable and there is no liquid resin or loose powder to handle. This guide explains what FDM means, how the process works step by step, the main parts of the printer, the three common motion systems (bedslinger, CoreXY and delta), which materials you can print, how FDM compares with SLA and SLS, and what to look for when you buy one. Facts come from manufacturer documentation (Prusa Knowledge Base, Bambu Lab Wiki, Formlabs) and the published history of the process, checked November 2026. We do not test or rank printers.

## FDM 3D printer at a glance

| Question | Short answer |
|---|---|
| What FDM stands for | Fused deposition modeling (a Stratasys trademark); generic name: fused filament fabrication (FFF) |
| What it prints with | Thermoplastic filament on a spool, most often 1.75 mm diameter |
| How it builds a part | A heated nozzle extrudes melted plastic line by line; the bed or head moves up one layer at a time |
| Common materials | PLA, PETG, TPU, ABS, ASA; nylon, PC and fibre-filled composites on capable machines |
| Common motion systems | Cartesian bedslinger, CoreXY, delta (and less common designs such as CoreXZ and polar) |
| Strengths | Low running cost, large build volumes possible, many materials, simple post-processing |
| Weaknesses | Visible layer lines, less fine detail than resin, weaker between layers than along them |
| Files it uses | A 3D model (STL, 3MF, OBJ, STEP) sliced into G-code |
| Main alternatives | SLA/MSLA (resin) and SLS (powder) |

## What is FDM in 3D printing?

FDM is short for **fused deposition modeling**. Scott Crump, co-founder of Stratasys, developed the process in the late 1980s, and Stratasys still holds the trademark on the name "FDM". When the key patents expired around 2009, the open-source RepRap project and a wave of hobby companies started building cheap filament printers. Because they could not use the trademarked name, RepRap adopted **fused filament fabrication (FFF)** as a free, generic term.

In practice FDM and FFF describe the same process, and most people say "FDM printer" for any filament printer, whatever the brand. Standards bodies group it under the broader category of material extrusion. Prusa's glossary, for example, defines FFF as the general term for this kind of printing and lists FDM as the other common name.

**Tip:** when you read "FFF printer" on a spec sheet, it is not a different technology – it is an FDM-style filament printer.

## How an FDM 3D printer works

1. **Model.** You start with a 3D model, usually an STL or 3MF file you design yourself or download. You can check a file in a viewer before printing.
2. **Slicing.** A slicer program (for example PrusaSlicer, Bambu Studio, OrcaSlicer, Cura or Creality Print) cuts the model into horizontal layers and works out each nozzle path, plus walls, infill and supports. It saves the result as G-code – a list of moves, temperatures and fan speeds.
3. **Heating.** The printer heats the nozzle to the filament's printing temperature and, in most cases, heats the bed so the first layer sticks.
4. **Extruding.** A motor-driven gear in the extruder grips the filament and pushes it into the hotend, where it melts and squeezes out of the nozzle as a thin bead.
5. **Drawing each layer.** The motion system moves the nozzle relative to the bed to trace the outline and fill of the current layer. A part-cooling fan blows on the fresh plastic so it sets quickly.
6. **Stacking layers.** When a layer is done, the bed drops (or the head rises) by one layer height and the next layer is drawn on top, fusing to the one below.
7. **Finishing.** After the print cools you remove it from the build plate and break off any support material. Most parts need little or no further work.

The nozzle size and layer height set how fine the print looks. A 0.4 mm nozzle is the usual default on consumer printers (Bambu Lab's A1 and P1S, for example, ship with 0.4 mm nozzles and offer 0.2, 0.6 and 0.8 mm options). Smaller nozzles and thinner layers give more detail but take longer; larger ones print faster and stronger but coarser.

## Parts of an FDM printer

| Part | What it does |
|---|---|
| Spool holder or filament system | Holds the filament; multi-material units such as an AMS feed several spools in turn |
| Extruder | Gear and motor that grip the filament and push it forward; it can also pull it back (retraction) |
| Hotend | Heater block, temperature sensor, heatbreak and nozzle; melts the filament |
| Nozzle | Brass, stainless or hardened steel tip that sets the bead width |
| Heated bed and build plate | Surface the part sticks to; often a removable, flexible steel sheet with a textured or smooth coating |
| Motion system | Stepper motors, belts, rails or rods and lead screws that move the head and bed |
| Cooling fans | Part-cooling fan to set the plastic; hotend fan to keep the cold side of the hotend cool |
| Mainboard and firmware | Read the G-code and control motors, heaters and sensors (Marlin, Prusa firmware or [Klipper](/blog/klipper/)) |
| Sensors | Bed-levelling probe, filament run-out sensor and, on newer printers, cameras and nozzle-clog detection |
| Frame and enclosure | Hold everything square; an enclosure keeps the air around the print warm and still |

**Direct drive vs Bowden.** On a direct-drive printer the extruder sits on the print head, right above the hotend, which gives better control of soft filaments such as TPU. On a Bowden printer the extruder is mounted on the frame and pushes filament through a long tube, which keeps the head light. Prusa notes that delta printers need a Bowden extruder, and that this limits which filaments they handle well.

**Tip:** the cheapest wear part is the nozzle. Fibre-filled filaments (carbon fibre, glass fibre) wear out brass nozzles quickly, so use a hardened steel nozzle for them.

## FDM motion systems: bedslinger, CoreXY and delta

How the printer moves the nozzle relative to the part has a large effect on speed, footprint and whether an enclosure is easy to add.

| Motion system | How it moves | Pros | Cons |
|---|---|---|---|
| Cartesian bedslinger | Bed moves front to back (Y); head moves left to right (X) and up (Z) | Simple, well documented, easy to find parts and fixes | Heavy moving bed limits speed on tall or heavy parts; footprint much larger than build volume |
| CoreXY | Two long belts move the head in X and Y together; the bed only moves down in Z | Light moving parts allow high speed; more of the footprint is usable; easy to enclose | Long belts need correct tension; frame must be stiff and square |
| Delta | Three arms on vertical towers move a light head; the bed stays still | Fast, smooth moves; tall, round build space | Round, often small bed; harder calibration and repairs; Bowden only |
| Polar and others | Rotating bed or mixed designs such as CoreXZ | Specialised advantages | Less common, fewer parts and guides |

The Prusa MK4 and Bambu Lab A1 are well-known bedslingers; the Prusa Core One, Bambu Lab P1S and Creality K2 Plus are CoreXY machines. Most new enclosed, high-speed printers use CoreXY, while open-frame bedslingers remain common at entry-level prices. You can line up motion systems and build volumes side by side in our [printer comparison tool](/printers/compare/).

**Tip:** if you plan to print ABS or ASA regularly, a CoreXY printer with a built-in enclosure saves you from adding one later.

## What materials can an FDM 3D printer use?

The range of filaments is FDM's biggest advantage. Bambu Lab's filament guide splits them by how demanding they are:

- **Easy on any printer:** PLA (the default for beginners: low warping, no heated chamber needed), PETG (tougher and more heat-resistant than PLA, a little stringy) and TPU (flexible, best on direct-drive printers).
- **Need an enclosure:** ABS and ASA (stronger heat resistance; ASA also resists UV outdoors), PC and nylon (PA). Bambu Lab marks these as not recommended on open-frame printers because they warp and split without warm, still air.
- **Need a hardened nozzle:** carbon-fibre and glass-fibre filled versions of PLA, PETG, nylon and others. They are stiffer but abrasive.
- **Industrial only:** high-temperature plastics such as PEEK and PEI (ULTEM) need very hot nozzles and heated chambers found on professional machines.

Most filaments, especially nylon, PETG and TPU, absorb moisture from the air, which causes stringing and weak prints, so keep spools dry.

**Tip:** start with PLA. When you need a part that survives a hot car or outdoor sun, move to PETG or ASA rather than buying a new printer.

## FDM vs SLA vs SLS

| | FDM (filament) | SLA / MSLA (resin) | SLS (powder) |
|---|---|---|---|
| How it works | Melted plastic extruded through a nozzle | UV light cures liquid resin layer by layer | Laser fuses nylon or similar powder |
| Detail and surface | Visible layer lines, coarser detail | Very fine detail, smooth surface | Fine detail, slightly grainy matte surface |
| Strength | Weaker between layers (anisotropic) | Fairly uniform in all directions | Fairly uniform; strong functional parts |
| Supports | Needed for overhangs | Needed | Not needed: loose powder supports the part |
| Post-processing | Remove supports; optional sanding | Wash in alcohol, then UV-cure; wear gloves | Remove and recover powder, blast clean |
| Materials | Wide range of thermoplastics | Photopolymer resins | Mainly nylons and TPU-type powders |
| Typical users | Home, education, workshops, prototyping | Miniatures, jewellery, dental, detailed prototypes | Engineering and small-batch production |

Formlabs, which makes both resin and powder printers, sums FDM up as the low-cost, easy option for simple parts, with the trade-off of lower detail and more visible layer lines. Prusa's overview gives resin layer heights of 25–100 microns and notes that uncured resin is toxic, so it should not touch skin and its vapours should not be inhaled. SLS machines are mostly industrial and far more expensive; see our [SLS 3D printer guide](/blog/sls-3d-printer/) for how that process works.

**Which is better, FDM or SLA?** For brackets, enclosures, tools, cosplay pieces and anything large or functional, FDM is usually the better fit. For tiny, highly detailed models, resin wins. Many makers end up owning one of each.

## Pros and cons of FDM 3D printers

**Advantages**

- Lowest entry cost and cheapest material per part of the three main technologies.
- Clean workflow: no resin, solvents or loose powder; prints are ready after support removal.
- Broad choice of plastics, from easy PLA to flexible TPU and fibre-reinforced nylon.
- Large build volumes are possible at reasonable cost – see our [large 3D printer guide](/blog/large-3d-printer/).
- Multi-colour and multi-material printing is now common on consumer machines.
- Easy to repair and upgrade, with a large community and many open-source designs.

**Disadvantages**

- Layer lines are visible, and small text or fine textures lose detail.
- Parts are weakest between layers, which matters for loaded parts; orient them so the load runs along the layers.
- Overhangs need supports, which leave marks.
- Warp-prone materials need an enclosure and a well-prepared bed.
- FDM parts are generally not watertight without design and setting changes or sealing.

## How to choose an FDM 3D printer – checklist

1. **Decide what you will print.** Mostly PLA and PETG toys, organisers and household parts – any modern printer will do. Regular ABS, ASA or nylon – choose an enclosed printer.
2. **Pick a build volume.** Around 250 × 250 mm covers most projects; go smaller for a desk or larger for helmets and cosplay. Check the Z height too.
3. **Choose a motion system.** Bedslinger for a low budget and open-frame simplicity; CoreXY for speed and an easy enclosure.
4. **Check the convenience features.** Automatic bed levelling, a removable flexible build plate, filament run-out sensor and a direct-drive extruder save a lot of frustration for beginners.
5. **Think about colour.** If you want multi-colour prints, check whether the printer supports a filament changer and how much filament it purges per colour change.
6. **Look at the software.** A well-maintained slicer with good profiles matters as much as the hardware. Check whether the printer works offline over SD card or LAN if you do not want a cloud account.
7. **Check temperatures and nozzle options.** A hotter nozzle and a hardened nozzle option open up engineering and fibre-filled filaments later.
8. **Plan the space.** Allow room for the bed to travel on a bedslinger, a sturdy table, a spool and ventilation for fumes.
9. **Set the budget.** Our [cheap 3D printer guide](/blog/cheap-3d-printer/) explains what budget models include and what they leave out.

## Verdict

An FDM 3D printer is the most practical first 3D printer for most people: it is affordable to buy and run, prints useful parts in many plastics, and needs no messy post-processing. Choose a bedslinger if you want the lowest cost and print mainly PLA and PETG, or an enclosed CoreXY printer if you want more speed and plan to use ABS, ASA or nylon. If you need fine detail above everything else, look at resin printing instead; for strong, support-free production parts, SLS is the professional option.
