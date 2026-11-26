---
title: How to use 3D printing in architecture – a practical guide to architectural models
seoTitle: How to Use 3D Printing in Architecture – Model Guide
description: How to use 3D printing in architecture – uses, file prep from Revit, SketchUp and Rhino, choosing a scale, wall thickness, FDM vs resin vs SLS, and finishing models.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/fb1ef97b-eae1-4efb-9900-6b6b61c025d4/output.png
imageAlt: "Illustration of a white printed scale model of a terraced housing block with tiny trees on a drafting desk next to a scale ruler and a laptop wireframe"
category: Ideas
summary:
  - Architects mainly use 3D printing for concept, massing, site and presentation models, and for facade or detail studies; large-scale concrete printing of real buildings is a separate, industrial field.
  - The biggest job is file preparation – a BIM or design model must be simplified, made watertight and scaled before it can print, and thin walls or railings must be thickened to survive at model scale.
  - FDM is the cheapest choice for massing and site models, resin gives the finest detail for presentation pieces, and powder processes such as SLS suit complex, support-free models.
faq:
  - q: How to use 3D printing in architecture?
    a: Export a simplified version of your design model as STL, OBJ or 3MF, scale it to the model scale you need, thicken walls and small details so they can be printed, split it into parts that fit the printer, then print and finish it. Most offices use it for massing, site and presentation models, and for testing facade and detail ideas.
  - q: What scale should architectural 3D prints be?
    a: Common choices are 1:500 or 1:1000 for urban and site models, 1:200 or 1:100 for building massing and presentation models, and 1:50 or larger for interiors and details. The smaller the scale, the more fine elements such as mullions and railings you must thicken or leave out.
  - q: Which 3D printer is best for architectural models?
    a: An FDM printer with a large build plate is the most cost-effective for massing and site models. A resin (SLA or MSLA) printer gives sharper detail for presentation models and small facade studies. For complex models without supports, offices often order SLS or other powder prints from a service bureau.
  - q: Can you 3D print a SketchUp or Revit model?
    a: Yes, after exporting it to a mesh format. Revit and SketchUp can export formats such as STL, OBJ or DAE (directly or with an extension, depending on version), and Rhino exports STL and 3MF. The model usually needs cleaning – closing gaps, removing hidden interior detail and fixing faces – before it slices cleanly.
sources:
  - name: Formlabs – Guide to 3D printing architectural models
    url: https://formlabs.com/blog/3d-printing-architectural-models/
  - name: Zortrax – Architecture modeling with 3D printers
    url: https://zortrax.com/applications/architecture/
  - name: 3D Universe – How architects use 3D printing for models
    url: https://shop3duniverse.com/blogs/digital-fabrication-in-the-workplace/architects-using-3d-printing-today
  - name: Chaos – 3D printing in architecture, usage and benefits
    url: https://blog.chaos.com/3d-printed-architecture
  - name: IE University – The role of 3D printing in sustainable architecture
    url: https://www.ie.edu/uncover-ie/3d-printing-master-in-architecture/
  - name: ExOne – 3D printing for architecture, models and formwork
    url: https://www.exone.com/en/industries_overview/industries_architecture/
  - name: Prusa Knowledge Base – Filament material guide
    url: https://help.prusa3d.com/materials
tools: [obj-to-stl, dae-to-stl, step-to-stl, stl-viewer]
---
**To use 3D printing in architecture, you export a simplified, watertight version of your design model, scale it to a model scale such as 1:100 or 1:500, thicken anything too thin to print, split it into printable parts, then print and finish it – most often as a massing, site or presentation model.** 3D printing turns days of hand-cutting card and foam into an overnight print, and lets you reprint a revised design in hours. This guide covers what architects use it for, how to prepare files from Revit, SketchUp, Rhino and similar tools, how to pick a scale and minimum sizes, how FDM, resin and powder printing compare, and how to finish a model so it looks presentation-ready. It draws on guides from Formlabs, Zortrax and other makers, checked November 2026.

## 3D printing in architecture at a glance

| Step | What to do | Typical tools |
|---|---|---|
| Uses | Massing, site, concept, presentation, facade and detail studies | – |
| Export | Mesh formats: STL, OBJ, 3MF; DAE or FBX from some tools | Revit, SketchUp, Rhino, ArchiCAD, Blender |
| Simplify | Remove interior detail, furniture, hidden layers | Design software |
| Repair | Make the mesh watertight; fix flipped or missing faces | Slicer repair, mesh tools |
| Scale | 1:500–1:1000 site, 1:100–1:200 buildings, 1:50+ details | Slicer or CAD |
| Minimum sizes | Thicken walls, mullions and railings to printable widths | Design software |
| Split | Floors, roof, site base, landscape as separate parts | Design software or slicer |
| Print | FDM for massing and sites, resin for detail, SLS for complex parts | Printer or service bureau |
| Finish | Remove supports, sand, prime, paint, assemble | Hand tools |

## What architects use 3D printing for

- **Concept and massing models.** Quick, plain-coloured blocks to test volume, height and form – often printed in white or grey and replaced as the design changes.
- **Site and urban models.** Terrain and surrounding buildings, often in a neutral colour with the new building in a contrasting one.
- **Presentation models.** Detailed, finished models for clients, competitions and planning meetings.
- **Sectional and stacking models.** Buildings printed floor by floor so the floors lift off to show interiors.
- **Facade and detail studies.** A bay of a facade or a joint detail at large scale, to check depth, shadow and proportions.
- **Formwork and moulds.** Industrial binder-jet and other processes print sand moulds and formwork for concrete and cast elements, as ExOne describes.

Printing actual buildings in concrete is a different field: it uses large gantry or robotic printers on site and is covered by construction research and industry, not desktop model making.

**Why it matters:** decide what the model is for before you prepare the file. A massing model needs volumes, not window frames; a presentation model needs detail, colour and a clean finish.

## Step 1: export a printable mesh

Printers do not read native BIM or CAD files. Export a mesh:

| Software | Common export for printing |
|---|---|
| Revit | STL (built in or via add-in, depending on version), or FBX/OBJ for repair in another tool |
| SketchUp | STL (built in or via extension, depending on version), DAE or OBJ |
| Rhino | STL, OBJ, 3MF |
| ArchiCAD | STL, OBJ |
| Blender | STL, OBJ, 3MF |
| Engineering CAD | STEP, converted to STL |

If you already have a DAE, OBJ or STEP file, our in-browser converters turn it into STL without uploading the file: [OBJ to STL](/obj-to-stl/), [DAE to STL](/dae-to-stl/) and [STEP to STL](/step-to-stl/).

**Tip:** export only the layers you need. Hide furniture, people, entourage, interior doors and anything inside the walls before export; it adds file size and printing problems but cannot be seen.

## Step 2: make the model watertight

A printable mesh must be a closed solid – every surface must form part of a closed volume, with no gaps, overlapping duplicate faces or faces pointing the wrong way. Architectural models often break these rules: walls drawn as single surfaces, windows as holes, roofs that do not quite meet walls.

1. **Turn surfaces into solids.** Give single-face walls and roofs a real thickness.
2. **Join volumes** that touch, so the slicer sees one solid instead of many overlapping ones.
3. **Close openings** you do not want to print, or model them as recesses rather than holes.
4. **Run a repair** – most slicers can fix small mesh errors automatically, and dedicated mesh tools handle bigger problems.
5. **Check the result** in an [STL viewer](/stl-viewer/) before slicing.

**Why it matters:** most failed architectural prints are file problems, not printer problems.

## Step 3: choose a scale and check minimum sizes

At model scale, real dimensions shrink dramatically. A 200 mm wall at 1:200 becomes 1 mm thick; a 50 mm mullion becomes 0.25 mm and will not print on most machines.

| Scale | 10 m building height becomes | Typical use |
|---|---|---|
| 1:1000 | 10 mm | Urban context, masterplans |
| 1:500 | 20 mm | Site models |
| 1:200 | 50 mm | Massing and building models |
| 1:100 | 100 mm | Presentation and sectional models |
| 1:50 | 200 mm | Interiors, details |

**Minimum sizes.** On an FDM printer with a 0.4 mm nozzle, a wall needs at least one line width (about 0.4–0.45 mm) to print at all, and two lines (about 0.8–0.9 mm) to be reasonably strong. Resin printers can resolve finer features, but very thin walls still break during support removal. Formlabs and other makers publish minimum wall and detail sizes for their printers and materials – check them for your machine.

**Tip:** rather than printing details that are too thin, exaggerate them slightly or leave them out and suggest them with surface lines. A clean simplified model reads better than a fragile, broken one.

## Step 4: split the model into parts

Splitting helps in several ways:

- **Size.** Large site models must be tiled to fit the build plate.
- **Supports.** A building printed upright with its roof separate often needs no supports.
- **Colour.** The new building, context and landscape can be printed in different colours.
- **Sections.** Separate floors let viewers lift the building apart.

Add simple locating pins or recesses so parts align, and leave a small clearance (often around 0.2 mm on FDM, tuned with a test print) for parts that slot together.

## Step 5: choose the printing process

| | FDM (filament) | Resin (SLA / MSLA) | Powder (SLS, MJF, binder jet) |
|---|---|---|---|
| Detail | Good; layer lines visible | Very fine | Fine; slightly grainy surface |
| Build size | Large plates available | Usually smaller | Medium to large (service bureau) |
| Supports | Needed for overhangs | Needed; leave marks | Not needed – powder supports the part |
| Cost per model | Lowest | Moderate | Higher (usually outsourced) |
| Post-processing | Remove supports, sand, paint | Wash, cure, remove supports | Depowder, optional dyeing |
| Best for | Massing, site, large models | Presentation pieces, facade details | Complex single-piece models |

**FDM** is the workhorse for offices and students. PLA is easy to print, stiff and available in white, grey and stone-like finishes; matte PLA hides layer lines well. A large-format printer helps for site models – see our [large 3D printer guide](/blog/large-3d-printer/).

**Resin** gives crisp edges and fine window and balcony detail, but parts need washing and curing, and resin needs careful handling.

**Powder processes** suit complex shapes that would need many supports on FDM or resin; most practices order these from a print service rather than owning the machine.

## Step 6: print settings for architectural models

- **Layer height:** 0.1–0.2 mm on FDM; finer layers smooth sloped roofs and terrain.
- **Orientation:** print buildings upright so walls are smooth and window recesses face sideways; print terrain flat.
- **Infill:** low infill (around 10–15 %) is enough for display models; increase walls instead if parts must be handled.
- **Seams:** set the seam to a rear corner so it does not run up the main facade.
- **Colour:** white, light grey or a single neutral is the classic architectural look and hides layer lines better than dark colours.

**Tip:** print one floor or one facade bay as a test before committing to a 20-hour model.

## Step 7: finish and present the model

1. **Remove supports** carefully with flush cutters and a hobby knife.
2. **Sand** visible surfaces lightly; work up through finer grits.
3. **Prime** with a filler primer to hide layer lines on FDM prints.
4. **Paint** in a neutral colour, or keep the new building in a contrasting tone.
5. **Assemble** parts with suitable glue; for PLA, cyanoacrylate works well.
6. **Add context** – a laser-cut or printed base, trees, a north arrow – to make it a presentation piece.

## Common mistakes to avoid

- Printing the full BIM model with interiors, furniture and hidden elements.
- Leaving single-surface walls that slicers cannot read as solids.
- Printing details too thin for the scale.
- Printing a whole building in one piece and filling it with supports.
- Choosing a dark colour that shows every layer line.

## Verdict

3D printing works best in architecture when you treat the model as a design of its own: simplify the BIM model, make it watertight, scale it, thicken or drop fine detail, and split it into sensible parts. Use FDM for quick massing and site models, resin for detailed presentation pieces, and a powder print service for complex one-piece models.
