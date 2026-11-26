---
title: Filament recycler – how to turn failed prints into new 3D printer filament
seoTitle: Filament Recycler Guide – Turn Failed Prints into Filament
description: "Filament recycler guide: how shredders, extruders and spoolers turn 3D printing waste into new filament, what can be recycled, realistic limits and safety tips."
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/5608952d-ac5e-43c6-ac67-160206e35ab3/output.png
imageAlt: "Illustration of a home recycling line with a bin of failed prints, a compact shredder filling a tray with plastic flakes and a desktop extruder feeding an orange strand to a spool winder"
category: Filament and materials
summary:
  - A filament recycler is usually a set of machines – a shredder that turns waste into flakes, an extruder that melts and pushes out a new strand, and a puller and winder that size and spool it.
  - Clean, dry, sorted waste of one plastic type is essential; mixed plastics, mixed colours and moisture are the main reasons recycled filament prints badly.
  - Every melt cycle weakens the plastic a little, so many users blend recycled material with fresh pellets and keep recycled filament for less demanding prints.
faq:
  - q: What is a filament recycler?
    a: A filament recycler is equipment that turns 3D printing waste – failed prints, supports, purge and old parts – back into printable filament. It shreds the plastic into small flakes, melts it in a heated extruder, pushes it through a nozzle at the right diameter, cools it and winds it onto a spool.
  - q: Can you recycle 3D printer filament at home?
    a: Yes, with a desktop shredder and filament extruder, and a fair amount of patience. Results depend on sorting the waste by plastic type, keeping it clean and dry, and tuning the extruder so the diameter stays consistent. Expect a learning curve and some scrap before you get reliable spools.
  - q: Is a filament recycler worth it?
    a: It depends on how much waste you produce and how much time you want to spend. For someone with several printers or a lot of multi-colour purge, a recycler can turn a steady waste stream into usable filament. For an occasional hobbyist, cutting waste in the slicer and using recycled filament from a manufacturer is usually simpler.
  - q: Can PLA be recycled with other plastics?
    a: No. PLA, PETG, ABS and other filaments melt at different temperatures and do not blend into a good material. Keep each plastic separate, and label waste bins by type so supports and failed prints do not get mixed.
sources:
  - name: Creality – Filament Maker M1 and Shredder R1 launch
    url: https://www.creality.com/blog/filament-maker-m1-shredder-r1-indiegogo-launch
  - name: Creality – Can you recycle 3D printer filament?
    url: https://www.creality.com/blog/can-you-recycle-3d-printer-filament
  - name: Creality – What to do with 3D printer waste
    url: https://www.creality.com/blog/what-to-do-with-3d-printer-waste
  - name: Filabot – Filament extrusion and recycling
    url: https://www.filabot.com/
  - name: Felfil – Filament recycler
    url: https://felfil.com/filament-recycler/
  - name: Woern et al. – RepRapable Recyclebot (HardwareX)
    url: https://acris.aalto.fi/ws/portalfiles/portal/21755729/ELEC_Woern_et_al_RepRapable_Recyclebot_HardwareX.pdf
  - name: Make – Recycle your own plastic with Precious Plastic
    url: https://makezine.com/article/digital-fabrication/3d-printing-workshop/recycle-your-own-plastic-with-precious-plastic/
  - name: Tom's Hardware – Can desktop recycling fix the 3D printer waste problem?
    url: https://www.tomshardware.com/uk/3d-printing/can-desktop-recycling-fix-the-3d-printer-waste-problem
  - name: Hackaday – Hands on with Creality's M1 filament maker
    url: https://hackaday.com/2026/03/11/hands-on-with-crealitys-new-m1-filament-maker/
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**A filament recycler turns 3D printing waste – failed prints, supports and multi-colour purge – back into usable filament by shredding the plastic, melting it in an extruder, pushing out a new strand at the right diameter and winding it onto a spool.** It is a satisfying way to close the loop on a hobby that produces a surprising amount of scrap, but it is not a magic bin: the quality of recycled filament depends on clean, sorted, dry input and a well-tuned machine. This guide explains each step of the process, the kinds of systems available, which plastics recycle well, what results to expect and how to cut waste even without a recycler. Product facts come from the makers' own pages and independent coverage, checked November 2026; prices are not compared.

## Filament recycler at a glance

| Step | Machine | What it does | What can go wrong |
|---|---|---|---|
| 1. Collect and sort | Labelled bins | Keeps each plastic type (and ideally colour) separate | Mixed plastics ruin a batch |
| 2. Clean and dry | Dryer or oven-type dryer | Removes dust, glue, labels and moisture | Wet flakes cause bubbles and a rough strand |
| 3. Shred | Shredder or granulator | Cuts prints into small, even flakes | Large or uneven flakes feed poorly |
| 4. Extrude | Filament extruder | Melts flakes with a screw and heater, pushes out a strand | Temperature or feed changes vary the diameter |
| 5. Cool and size | Fans or water bath, puller, diameter sensor | Sets the strand to 1.75 mm (or 2.85 mm) | Diameter drift causes under- and over-extrusion |
| 6. Wind | Spooler | Winds an even spool | Tangles and loose winding cause feed jams |

## What a filament recycler is

"Filament recycler" can mean one machine or a full line. Most systems combine three functions:

- **A shredder** turns parts and purge into flakes small enough to feed an extruder.
- **An extruder** – a heated barrel with a rotating screw – melts the flakes and pushes the molten plastic through a nozzle.
- **A puller and winder** draw the strand at a controlled speed (which sets its diameter), cool it and spool it neatly. Better machines measure the diameter continuously and adjust the puller speed.

**Why it matters:** the shredder is the part people forget. A filament extruder alone can only use pellets or small flakes, so whole failed prints need shredding first.

## Types of filament recyclers

**Open-source and DIY machines.** Projects such as Precious Plastic publish plans for shredders and extruders aimed at community workshops, and academic projects such as the RepRapable Recyclebot describe printable, open-hardware filament extruders. These are cheap to build but need mechanical skill and tuning.

**Desktop extruders for makers.** Companies such as Filabot and Felfil sell filament extruders and related equipment for small workshops, schools and labs. They are designed to make filament from pellets or recycled flakes.

**Consumer recycling systems.** In 2026 Creality announced the Filament Maker M1 and Shredder R1, a desktop pair launched through crowdfunding and aimed at home users with failed prints and purge waste. Coverage of the launch describes it as one of the first attempts to make filament recycling a plug-and-play product for hobbyists.

**Tip:** whatever system you consider, check which plastics it is designed for, whether it includes a shredder, and whether it measures diameter automatically.

## Which plastics can you recycle into filament?

- **PLA** – the most common waste and the most common recycling target. It melts at relatively low temperatures but degrades with each heat cycle and absorbs moisture.
- **PETG** – recycles well if dried thoroughly. It is tougher and can produce good recycled filament for functional parts.
- **ABS and ASA** – can be recycled but produce fumes when melted, so ventilation matters even more.
- **TPU and other flexibles** – hard to shred and feed; usually not a beginner material for recycling.
- **Filled filaments** (carbon fibre, glass fibre, wood, metal) – abrasive or unpredictable; avoid them unless the machine is designed for them.

**Why it matters:** never mix plastics. PLA, PETG and ABS process at different temperatures and do not blend into a usable material. Keep separate bins and label them clearly.

## Why sorting and drying matter so much

Most bad recycled filament comes from bad input:

- **Mixed plastics** create weak spots and blobs.
- **Mixed colours** turn into a murky brown or grey. That is fine for functional parts, but if you want colour, sort by colour too – or recycle mostly one colour and add masterbatch or fresh coloured pellets.
- **Moisture** turns into steam in the extruder, causing bubbles, a rough surface and diameter swings. Dry the flakes before extruding, just as you would dry a spool – our guide on [how to dry filament](/blog/how-to-dry-filament/) covers temperatures for common plastics.
- **Dirt, glue stick and labels** contaminate the melt. Wipe parts and remove stickers and tape.

## What to expect from recycled filament

Recycled filament can print well, but be realistic:

- **Strength drops with each melt cycle.** Heating breaks polymer chains, so filament recycled several times is weaker and more brittle. Many users mix recycled flakes with fresh pellets to keep properties stable.
- **Diameter tolerance is harder to hold.** Commercial filament is made on industrial lines with tight control. A desktop line needs careful tuning to stay close to 1.75 mm, and variations show up as uneven extrusion.
- **Colour is limited** unless you sort carefully.
- **There is a learning curve.** Expect to scrap some filament while you dial in temperature, screw speed and pull speed.

**Tip:** use your first recycled spools for prototypes, jigs, test prints and hidden parts, and print a calibration cube and a flow test before trusting them on long jobs.

## Where your waste comes from – and how to cut it first

Before buying a recycler, reduce the waste you make:

1. **Multi-colour purge.** Automatic filament systems purge plastic at every colour change. Our guide to [what AMS means in 3D printing](/blog/what-is-ams-in-3d-printing/) explains why. Slicers can flush into infill or into a sacrificial object, and grouping colours by layer reduces the number of changes.
2. **Supports.** Orient parts to need fewer supports, use tree supports, and split models where it helps.
3. **Failed prints.** Calibrate first layers, keep filament dry, and use a first-layer check if your printer has one.
4. **Test prints.** Print calibration models small and at low infill.

## The home recycling workflow, step by step

1. **Set up bins** for each plastic type and keep supports, purge and failed prints in them.
2. **Clean** the waste: remove glue, tape, labels and metal inserts.
3. **Pre-dry** larger parts if they have been stored in a humid room.
4. **Shred** to small, even flakes; sieve out dust and oversized pieces.
5. **Dry the flakes** thoroughly before extruding.
6. **Extrude** at the temperature and screw speed recommended for that plastic and machine; let it stabilise before keeping filament.
7. **Measure** the diameter at intervals (or rely on the machine's sensor) and adjust the pull speed.
8. **Wind** onto a clean spool, label it with plastic type, source and date, and store it in a sealed bag with desiccant.
9. **Test** with a calibration print before using it for real parts.

## Safety

- **Shredders are dangerous.** Keep hands and loose clothing away from the blades, use the guard and never clear a jam with the power on.
- **Extruders are hot** and can burn; let them cool before cleaning.
- **Ventilate.** Melting plastic gives off fumes, especially ABS and ASA. Run the extruder in a ventilated space.
- **Follow the maker's manual** for the materials and temperatures your machine supports.

## Alternatives to owning a filament recycler

- **Buy recycled filament.** Several filament makers sell recycled PLA and PETG made on industrial lines with consistent diameter.
- **Use take-back schemes** where a filament maker or local makerspace collects waste.
- **Share a recycler** in a makerspace, school or club, where the waste volume justifies the setup time.
- **Reuse scraps creatively** – offcuts and purge are handy for testing glues, paints and sanding.

## Verdict

A filament recycler is worth it for makers who produce a steady stream of clean, sorted waste and enjoy tuning machines – schools, makerspaces, print farms and heavy multi-colour users. For most hobbyists, the bigger win is cutting waste in the slicer and buying recycled filament when it suits the job. If you do buy a recycler, sort and dry your waste carefully, blend in fresh material and keep recycled spools for parts where a small loss of strength does not matter. For more on materials, see our [PLA filament guide](/blog/pla-filament/).
