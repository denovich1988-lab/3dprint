---
title: What is AMS in 3D printing? Bambu Lab's Automatic Material System explained
seoTitle: What Is AMS in 3D Printing? Bambu AMS Explained
description: What is AMS in 3D printing? How Bambu Lab's Automatic Material System feeds and switches filament, the four AMS models, limits and similar systems.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/467ce37a-fab6-4433-b97f-591f0011167d/output.png
imageAlt: "Illustration of a four-spool automatic filament feeder sending tubes to a printer that prints a striped multicolour parrot figurine"
category: Setup and software
summary:
  - AMS stands for Automatic Material System, Bambu Lab's add-on that holds several spools and feeds the right one into the printer for multi-colour or multi-material prints.
  - Bambu Lab currently sells four versions – the AMS, AMS 2 Pro, AMS HT and AMS lite – and each works only with certain Bambu printers.
  - Every colour change on a single nozzle means cutting, retracting and purging filament, so multi-colour prints take longer and create waste.
faq:
  - q: What is AMS in 3D printing?
    a: AMS is short for Automatic Material System, a filament changer made by Bambu Lab. It holds four spools per unit (one on the AMS HT), feeds the selected filament into the printer and switches between them during a print, so one model can use several colours or materials.
  - q: Is an AMS required for 3D printing?
    a: No. Every Bambu Lab printer can print from a single spool on its external holder. The AMS is only needed for automatic multi-colour or multi-material prints, automatic refill from a backup spool, and – on the AMS 2 Pro and AMS HT – drying filament in the unit.
  - q: Can I print AMS files without an AMS?
    a: Yes. A multi-colour project can be printed in one colour, or you can add a colour change at a chosen layer in the slicer so the printer pauses and you swap filament by hand. True per-area colours on the same layer need an AMS or another automatic system.
  - q: Can you use PLA in an AMS?
    a: Yes. PLA is the most common AMS filament, and Bambu Lab also lists PETG, ABS, ASA, PA, PC and other rigid filaments as supported. Soft TPU and TPE, damp PVA and many fibre-filled or brittle filaments are not recommended.
sources:
  - name: Bambu Lab blog – AMS explained in detail
    url: https://blog.bambulab.com/ams
  - name: Bambu Lab Wiki – Introduction to AMS (X1)
    url: https://wiki.bambulab.com/en/x1/manual/intro-ams
  - name: Bambu Lab Wiki – AMS function introduction
    url: https://wiki.bambulab.com/en/ams/manual/ams-function-introduction
  - name: Bambu Lab Wiki – Notes on using the AMS
    url: https://wiki.bambulab.com/en/knowledge-sharing/notes-ams
  - name: Bambu Lab Wiki – Reduce wasting during filament change
    url: https://wiki.bambulab.com/en/software/bambu-studio/reduce-wasting-during-filament-change
  - name: Bambu Lab Wiki – AMS lite FAQ
    url: https://wiki.bambulab.com/en/ams-lite/manual/faq
  - name: Bambu Lab Wiki – AMS 2 Pro introduction and connection guide
    url: https://wiki.bambulab.com/en/ams-2-pro/manual/intro-and-connection-guide
  - name: Bambu Lab Wiki – AMS HT introduction and connection guide
    url: https://wiki.bambulab.com/en/ams-ht/manual/intro-and-connection-guide
  - name: Bambu Lab Wiki – AMS 2 Pro and AMS HT FAQ
    url: https://wiki.bambulab.com/en/ams/manual/ams-2-pro-ams-ht-faq
  - name: Bambu Lab store – AMS
    url: https://us.store.bambulab.com/products/ams-multicolor-printing
  - name: Creality Store – CFS Creality Filament System
    url: https://store.creality.com/au/products/cfs-creality-filament-system
  - name: Anycubic – Kobra S1 Combo store page
    url: https://store.anycubic.com/products/kobra-s1-combo
  - name: Anycubic – Kobra S1 ACE 2 Pro Combo launch page
    url: https://store.anycubic.com/pages/kobra-s1-ace-2-pro-combo-new-launch
  - name: Prusa – Original Prusa MMU3 upgrade kit for MK4S/MK3.9S
    url: https://www.prusa3d.com/en/product/original-prusa-mmu3-upgrade-kit-for-mk4s-mk3-9s-8/
tools: [3mf-viewer, 3mf-to-stl, stl-viewer]
---
**AMS in 3D printing means Automatic Material System – Bambu Lab's filament changer that holds several spools and feeds the right one into the printer, so a single print can switch between colours or materials automatically.** One unit holds four spools (the AMS HT holds one), and several units can be chained for up to 16 slots on X1 and P1 printers and up to 24 on the H2 series. The term comes from Bambu Lab, but people now also use "AMS" loosely for any automatic multi-spool unit. This guide explains what an AMS does, how a filament switch works, the four current models, what they cannot handle and how other makers' systems compare. Facts come from the Bambu Lab Wiki, blog and store, checked November 2026.

## AMS in 3D printing at a glance

| Question | Short answer |
|---|---|
| What does AMS stand for? | Automatic Material System (the Bambu Lab Wiki also writes "Automated") |
| Who makes it? | Bambu Lab |
| What does it do? | Stores spools, feeds the selected one, switches filament mid-print, refills from a backup spool |
| Slots per unit | 4 (AMS, AMS 2 Pro, AMS lite), 1 (AMS HT) |
| Current models | AMS, AMS 2 Pro, AMS HT, AMS lite |
| Drying | AMS 2 Pro up to 65 °C, AMS HT up to 85 °C; AMS and AMS lite do not dry |
| Filament reading | RFID tags on Bambu Lab spools; other brands are set by hand |
| Main trade-offs | Purged filament and longer print times on every colour change |
| Not suited to | Soft TPU/TPE, damp PVA, many fibre-filled or brittle filaments |

## What is AMS 3D printing?

A normal desktop FDM printer has one filament path: one spool, one extruder, one nozzle. To print in two colours you would stop the printer and change the spool by hand. An AMS automates that swap. Bambu Lab describes the original AMS as three main parts:

- **Feeders** – four slots, each with its own motor and gears that push filament forward or wind it back onto the spool, plus a sensor that detects the filament.
- **Hub** – merges the four filament paths into one, with Hall sensors, a magnetic rotary encoder (used as an odometer) and a brushless motor that gives a second push.
- **Buffer** – sits between the AMS and the toolhead and keeps the filament tension in range, so the extruder is not fighting the spool.

The wiki says the original AMS has 10 sensors along the filament path. The unit is sealed, with desiccant and gaskets, so it also works as a dry box for stored spools.

**Why it matters:** an AMS turns a single-colour printer into a multi-colour one without a second nozzle. It also lets you keep four materials loaded and pick one in the slicer instead of swapping spools.

## How an AMS works: feeding and switching filament

When you push a filament end into a slot, the feeder senses it and pulls it in until the hub detects it. When a print starts, the feeder drives the filament towards the hub, then the hub motor takes over and pushes it all the way to the toolhead. Once the extruder grips it, the AMS switches to "feed assist" mode and only adds force when the buffer shows tension building up.

A colour change on a single-nozzle Bambu printer then goes roughly like this:

1. **Cut** – a filament cutter on the toolhead cuts off the current filament at the toolhead.
2. **Retract** – the feeder and hub motor wind the old filament back onto its spool.
3. **Load** – the new filament is driven from its slot up to the extruder.
4. **Purge** – the printer pushes enough new filament through the nozzle to clear the old colour. On the X1 series the purged strand drops out of the back through a waste chute, past a nozzle wiper, before printing continues.

**Tip:** each change takes time, so a model with many colour changes per layer can take much longer than the single-colour version. Bambu Studio shows the extra time and filament in its slicing estimate – check it before you print.

## Purge, flushing volume and the prime tower

Bambu Lab calls the purged filament the **flushing volume**: the amount of new filament needed to push the old colour out so the model is not stained. It depends on the colour pair – the wiki says changing from black to white needs several times more filament than white to black. Bambu Studio calculates it automatically from the "from" and "to" colours.

Bambu Studio offers three ways to put some of that purge into the print instead of the bin:

- **Flush into infill** – the hidden inside of the model absorbs the colour transition (not a good idea with transparent filament).
- **Flush into support** – supports are removed anyway, so they can take mixed colours.
- **Flush into object** – a chosen part, such as an internal gear, is printed from the transition material.

The support and object options only work when the **prime tower** is enabled. The prime tower is a small block printed next to the model that primes the nozzle after each change and keeps the outer walls clean.

**Why it matters:** purged filament is the main hidden cost of single-nozzle multi-colour printing. Group colours by layer where you can, and use flush-into-infill on large models.

## RFID, auto refill and filament tracking

Bambu Lab spools carry RFID tags on both sides. The AMS reads them with built-in RFID boards and sends the filament type and colour to Bambu Studio and the printer, so slots are recognised even if you load them in random order. The wiki says the AMS estimates remaining filament from how much is fed during one full spool rotation, with a full 1 kg spool counted as 100 %. Our [Bambu filament guide](/blog/bambu-filament/) covers the RFID-tagged range.

Third-party filament works too – you set its material and colour for that slot by hand in the slicer or on the printer screen.

**AMS Auto-Refill** switches to another slot with the same filament type and colour when a spool runs out. You turn it on in the AMS settings. The wiki warns that pausing and unloading mid-print can disrupt this backup function.

## The four AMS versions and compatible printers

| | AMS | AMS 2 Pro | AMS HT | AMS lite |
|---|---|---|---|---|
| Slots | 4 | 4 | 1 | 4 |
| Drying | No | Up to 65 °C | Up to 85 °C | No |
| Enclosure | Sealed box | Sealed box | Sealed box | Open, no cover |
| Works with | X1, P1, H2 (no drying) | X1, P1, P2S, H2 | X1, P1, H2 | A1, A1 mini |
| Max units | 4 on X1/P1 | 4 (plus 8 AMS HT on H2) | 8 on H2, 4 on X1/P1 | 1 |

- **AMS (original):** the four-spool unit launched with the [Bambu Lab X1 Carbon](/printers/bambu-lab-x1-carbon/). Chaining more than one unit on X1 and P1 printers needs the AMS Hub. Full details are in our [Bambu Lab AMS guide](/printers/bambu-lab-ams/).
- **AMS 2 Pro:** released with the [Bambu Lab H2D](/printers/bambu-lab-h2d/) in March 2025. It adds drying up to 65 °C, a humidity sensor and a stronger hub motor. On X1 and P1 printers, drying needs a separate power adapter.
- **AMS HT:** a one-spool unit that dries at up to 85 °C for engineering filaments such as PA, PC and PP. It has a bypass outlet for TPU, where it works only as a dry box and you feed the filament by hand.
- **AMS lite:** the open four-spool feeder for the [Bambu Lab A1](/printers/bambu-lab-a1/) and A1 mini. Only one fits per printer, so the maximum is four colours. Bambu Lab also offers an AMS Hub for the A1 series that lets the A1 use the full-size units instead.

**Which one you need:** an A1 or A1 mini owner uses the AMS lite; a [P1S](/printers/bambu-lab-p1s/) or X1 owner can use the AMS, AMS 2 Pro or AMS HT; H2 printers are designed around the AMS 2 Pro and AMS HT.

## What does AMS mean for filament choice? Limits to know

The AMS feeds filament through long PTFE tubes and pushes it with gears, so the filament has to be stiff and robust enough to survive the trip. Bambu Lab's notes on using the AMS list:

- **Flexible filament:** do not load TPU, TPE or similar soft filaments – they can buckle and jam in the feed tube. (Bambu Lab lists a special "TPU for AMS" as supported on the AMS 2 Pro; generic TPU and Bambu TPU 95A are not.)
- **Damp PVA and BVOH:** absorbent support materials can swell and stick; only load them dry.
- **Fibre-filled and brittle filaments:** third-party PLA-CF, PETG-CF, PA-CF and glass-filled grades, some silk PLA and glow-in-the-dark PLA can wear the PTFE tubes or snap. Bambu Lab says its own PLA-CF, PETG-CF and PAHT-CF are tuned for AMS use.
- **Spool size:** the AMS takes spools 50–68 mm wide and 197–202 mm in diameter. The AMS lite accepts 40–68 mm widths.
- **Cardboard spools:** Bambu Lab recommends an adapter ring, because bare cardboard can slip and leave fibres inside the unit. Plastic spools that fit correctly are preferred. The AMS lite's spring-loaded holders grip the spool hole, which Bambu Lab says improves cardboard compatibility.

**Tip:** for anything on the "do not load" list, use the printer's external spool holder. On H2 and X1/P1 printers with an AMS HT, the bypass outlet is the other option for TPU.

## AMS alternatives from other makers

Several brands now sell their own multi-spool units. Each works only with that maker's printers:

| System | Maker | Slots per unit | Notes from the maker |
|---|---|---|---|
| CFS | Creality | 4 (up to 4 units, 16 colours) | K2 series and Creality Hi; reads Creality RFID spools; no TPU. See our [Creality CFS page](/printers/creality-cfs/) |
| ACE Pro / ACE 2 Pro | Anycubic | 4 | Kobra S1 and Kobra 3 Combos; dries while printing; auto refill. |
| MMU3 | Prusa | 5 | Single-nozzle unit for the MK4/S and MK3.9/S; purges into a wipe tower |

A different approach is the **tool changer**, which gives each filament its own nozzle instead of swapping filament in one nozzle. The Prusa INDX and the four-toolhead Snapmaker U1 work this way, which cuts purge waste sharply. Bambu Lab's dual-nozzle H2D sits in between: two nozzles, each fed by AMS units.

## Do you need an AMS? A quick checklist

1. **You print mostly single-colour functional parts:** you do not need one. An external spool holder is enough.
2. **You want multi-colour models, signs, keychains or figures:** an AMS (or AMS lite on the A1) is the simplest way.
3. **You print soluble or breakaway supports in a second material:** an AMS lets you load the support filament next to the model filament.
4. **You print long jobs and hate run-outs:** auto refill from a matching spool is useful even for single-colour prints.
5. **You print damp-sensitive materials (PA, PC, PETG in humid rooms):** look at the drying units – AMS 2 Pro or AMS HT – or a separate filament dryer.
6. **You print mostly TPU:** an AMS will not help; keep it on the external holder.

Before buying, open a multi-colour 3MF project in our [3MF viewer](/3mf-viewer/) to see how many colours your favourite models really use.

## Verdict

AMS is Bambu Lab's Automatic Material System – a filament changer that turns a single-nozzle printer into a multi-colour, multi-material machine and adds automatic spool refill. It works well with rigid filaments such as PLA, PETG, ABS and ASA, but every colour change costs time and purged filament, and soft or brittle filaments are better fed from an external spool. Choose the model by your printer: AMS lite for the A1 series, the AMS or AMS 2 Pro for P1 and X1, and the AMS 2 Pro plus AMS HT for the H2 series.
