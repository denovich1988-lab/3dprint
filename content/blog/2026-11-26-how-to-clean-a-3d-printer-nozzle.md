---
title: How to clean a 3D printer nozzle – fix a clog step by step
seoTitle: How to Clean a 3D Printer Nozzle and Fix a Clog
description: How to clean a 3D printer nozzle and unclog it in order – heat and push, cold pull, needle, replace – using Bambu Lab and Prusa's official steps.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/397ca2fc-9407-4626-9eeb-2f37faf3d544/output.png
imageAlt: "Illustration of a brass wire brush cleaning a hot nozzle, with a cleaning needle and cold-pull filament pieces on a silicone mat"
category: Troubleshooting
summary:
  - Most nozzle clogs clear with the least invasive fix first – heat the nozzle above normal and push filament – then a cold pull, then a cleaning needle, and only then a new nozzle or hotend.
  - Bambu Lab and Prusa both use a PLA cold pull – heat, cool to around 85–100 °C, then pull – and repeat it until the pulled tip comes out clean.
  - Damp filament, printing too cold or too fast, abrasive or particle-filled filaments and heat creep are the usual causes, so drying filament and correct temperatures prevent most clogs.
faq:
  - q: How do you clean a 3D printer nozzle without removing it?
    a: Heat the nozzle above your normal print temperature and push filament through, then do a cold pull with PLA. If that is not enough, push the cleaning needle up through the hot nozzle tip a few times. Bambu Lab and Prusa both describe these steps with the nozzle in place.
  - q: How to clean hotend nozzle Bambu?
    a: Bambu Lab's wiki says to heat the hotend to 250 °C, push the included clearing pin into the nozzle tip a few times without going past the marked depth, then extrude. It recommends a cold pull afterwards – load PLA at 220 °C, cool to 100 °C and retract while gently pulling.
  - q: How do I know if my 3D printer nozzle is clogged?
    a: A full clog means nothing comes out when you extrude. A partial clog shows as filament that curls instead of falling straight down, thin or gappy lines, under-extrusion, or clicking from the extruder.
  - q: How often should I clean my 3D printer nozzle?
    a: Clean it whenever extrusion looks wrong. Bambu Lab also suggests a cold pull at least once a month and when you switch between filament types.
sources:
  - name: Bambu Lab Wiki – X1 nozzle clog
    url: https://wiki.bambulab.com/x1/troubleshooting/nozzle-clog
  - name: Bambu Lab Wiki – A1 mini nozzle clog
    url: https://wiki.bambulab.com/en/a1-mini/troubleshooting/nozzle-clog
  - name: Bambu Lab Wiki – How to avoid nozzle clogs
    url: https://wiki.bambulab.com/en/knowledge-sharing/how_to_avoid_nozzle_clogs
  - name: Bambu Lab Wiki – What is cold pull and how to perform it
    url: https://wiki.bambulab.com/en/x1/maintenance/what-is-cold-pull-and-how-to-perform-it
  - name: Prusa Knowledge Base – Cold pull (MK4S, MK4, MK3.9, XL)
    url: https://help.prusa3d.com/article/cold-pull-26702-mk4s-13702-mk4-28702-mk3-9s-21702-mk3-9-23702-mk3-5-28702-mk3-5s-17702-xl_445071
  - name: Prusa Knowledge Base – Clogged nozzle (CORE One, XL, MK4S, MK3.9S)
    url: https://help.prusa3d.com/article/clogged-nozzle-core-one-xl-mk4s-mk3-9s_2075
  - name: Prusa Knowledge Base – Clogged nozzle/hotend (MINI)
    url: https://help.prusa3d.com/en/article/clogged-nozzle-hotend-mini_112011
tools: [stl-viewer, 3d-viewer, 3mf-to-stl]
---
**To clean a 3D printer nozzle, start with the gentlest fix and work up: heat the nozzle above its normal temperature and push filament through, then do a cold pull with PLA, then clear the tip with a thin cleaning needle, and replace the nozzle only if it is still blocked.** That order fixes most clogs without taking the hotend apart. This guide explains how to tell a clog from other extrusion problems, what causes it, each fix step by step and how to stop it happening again. The steps and temperatures come from the official guides of Bambu Lab (Bambu Lab Wiki) and Prusa Research (Prusa Knowledge Base), checked November 2026. Always follow your own printer's manual first – hotend designs differ.

## How to clean a 3D printer nozzle at a glance

| Fix | When to use it | What you need | Typical temperature (PLA) |
|---|---|---|---|
| 1. Heat and push | First try for any clog or partial clog | Nothing extra | 250–260 °C, above normal printing |
| 2. Cold pull (atomic pull) | Partial clog, dark specks, after a colour or material change | 30 cm of PLA, pliers | Heat to 220–270 °C, pull at 85–100 °C |
| 3. Cleaning needle | Nothing comes out, or a cold pull did not help | The needle or pin that came with the printer | Hot, as in step 1 |
| 4. Clear from the top / take the hotend apart | Heat creep, filament jammed above the nozzle | Hex keys, maker's guide | Per the maker's guide |
| 5. Replace the nozzle or hotend | Still blocked, or the nozzle is worn or damaged | Spare nozzle or hotend | Per the maker's guide |

Temperatures are the examples Bambu Lab and Prusa give for PLA; use your filament's own range for other materials.

## Safety first: the nozzle is hot

The nozzle and heater block reach 250–300 °C during these steps. Bambu Lab's wiki tells users to wear heat-protective gloves when handling a hot hotend, because molten filament can drip and burn fingers, and to keep flammable or heat-sensitive things away from the area below the nozzle.

- Never touch the nozzle, heater block or silicone sock while the printer is heating.
- Use pliers, not fingers, to hold filament near the hotend.
- Switch the printer off and let the hotend cool fully before you unplug cables or remove screws, unless the maker's guide says to work warm.
- Keep the needle and tools pointing away from your hand – a slip at the nozzle tip is the easiest way to get burned.

## Symptoms of a 3D printer nozzle clog

A 3D printer nozzle clog is either full or partial:

- **Full clog:** nothing comes out when you extrude, and the extruder may click or grind as the gears slip on the filament.
- **Partial clog:** filament comes out but curls to one side instead of falling straight down. Bambu Lab uses this as its test for a clear nozzle.
- **Print signs:** thin or missing lines, gaps in walls, weak infill and a first layer that looks starved.
- **Calibration signs:** Bambu Lab notes that a partial clog can make the flow dynamics (pressure advance) value look wrongly calibrated.

**Tip:** before you start cleaning, check the basics. A tangled spool, an empty filament path, a bed too close to the nozzle on the first layer or a loose extruder idler can all look like a clog.

## What causes a 3D printer nozzle to clog

Bambu Lab's guide to avoiding clogs lists these causes:

- **Damp filament.** Water turns to steam in the nozzle, causing bubbles, stringing and poor flow. Nylon (PA), PC and fibre-filled filaments suffer most. Our guide on [how to dry filament](/blog/how-to-dry-filament/) covers temperatures and times.
- **Printing too cold or too fast.** The plastic does not melt fully before it reaches the tip.
- **Particles in the filament.** Carbon fibre, glass fibre, wood, glitter or sparkle filaments can carry bits larger than the nozzle opening or leave residue that builds up.
- **Poor-quality filament** with an uneven diameter or impurities. Bambu Lab suggests checking that 1.75 mm filament measures within ±0.03 mm with calipers.
- **Heat creep.** Heat travels up above the melt zone, the filament softens and swells there and jams. Bambu Lab calls this a common issue on X1 and P1 series printers.
- **Switching materials badly** – going from a high-temperature filament to a lower-temperature one without purging leaves unmelted plastic behind.
- **Many short prints** – repeated heating and cooling speeds up residue build-up.
- **A missing or loose silicone sock**, which affects temperature stability, or a failing heater cartridge.

Prusa also lists debris, a damaged PTFE tube and an over-tightened extruder idler that fills the drive gear with plastic shavings.

## Fix 1: Heat the nozzle and push filament through

This is the first step in both makers' guides and often all you need.

1. Raise the nozzle temperature above your normal printing temperature. Bambu Lab uses 250 °C for PLA on its printers. Prusa's MINI guide says 40–50 °C above normal – 260 °C for PLA and 280 °C for PETG.
2. Wait 2–3 minutes so the plastic in the nozzle melts fully (Prusa's advice).
3. Extrude from the screen or push filament in by hand (with the extruder released if your printer allows it).
4. Watch the result. A steady, straight strand means the nozzle is clear; a curling strand means a partial clog is still there.

**Tip:** Prusa suggests that a stubborn PLA clog can be pushed out with a higher-temperature filament such as ABS, ASA or PC, which carries the old material out as it flows.

## Fix 2: How to unclog a 3D printer nozzle with a cold pull

A cold pull (also called an atomic pull) fills the nozzle with plastic, lets it cool until it is soft but solid, and pulls it out so that dirt and old material come out stuck to the tip. Prusa says it is meant for partial clogs where some filament still comes out, and that PLA works best because it keeps the shape of the nozzle; other filaments tend to tear or melt too much.

Steps, combined from the Bambu Lab Wiki and Prusa Knowledge Base:

1. Load clean PLA. Have at least 30 cm ready (Prusa). On printers with a PTFE tube into the toolhead, Bambu Lab and Prusa disconnect the tube so the filament can be pulled straight out.
2. Heat the nozzle – 220 °C in Bambu Lab's example, 270 °C in Prusa's manual procedure – and push PLA through until it flows out of the tip.
3. Let the nozzle cool while you keep pushing gently, until the PLA stops flowing (Prusa says around 170 °C). This keeps the nozzle full.
4. Wipe away any plastic around the nozzle tip.
5. Wait for the pull temperature: 100 °C in Bambu Lab's guide, 85–100 °C in Prusa's guides.
6. Pull the filament out slowly and steadily, straight up, without stopping. Bambu Lab retracts with the extruder and helps with a gentle pull; Prusa pulls with pliers while holding the extruder. Do not yank – pulling hard can strain the extruder gears, and pulling sideways can snap the filament inside.
7. Look at the tip. A clean pull shows the cone shape of the inside of the nozzle with no dark marks or mixed colours. If it is dirty, repeat until it comes out clean.

Some printers automate this. Prusa's MK4, MK4S and MK3.9 have a Cold Pull item in the Control menu that cools to 36 °C, reheats to 80 °C and unloads, after which you pull the filament out by hand. Bambu Lab's H2D and H2S wiki pages also describe a built-in nozzle cold pull maintenance function.

**Why it matters:** both makers recommend a cold pull after clearing a clog with heat or a needle, because it removes the loose bits the needle pushed back up.

## Fix 3: Clear the tip with a cleaning needle

If nothing comes out, a thin needle pushed up through the hot nozzle breaks up what is stuck at the tip.

1. Heat the nozzle as in Fix 1.
2. Move the bed out of the way so you can reach the tip from below.
3. Push the needle up into the nozzle opening and move it in and out a few times. Prusa's MINI guide uses a 0.3 mm acupuncture needle for the standard nozzle and suggests pushing several times in different directions.
4. Do not push too deep. Bambu Lab marks a maximum depth on its pin and warns that going past it can push molten plastic higher up and make the clog harder to clear.
5. Remove the needle and extrude. Then do a cold pull.

**Tip:** use a needle thinner than the nozzle opening – a 0.4 mm nozzle needs a smaller needle – and go gently, because a hard needle can scratch or widen a brass nozzle. Small 0.2 mm nozzles are the hardest to clear; Bambu Lab notes that they may need several rounds, while larger nozzles clog less often.

## How to clean hotend nozzle Bambu Lab: the official procedure

Bambu Lab's wiki gives slightly different steps for its printer families.

**X1 and P1 series (pin clearing):**

1. In Settings → Temperature/Axis, set the hotend to 250 °C (higher only for filaments that need it).
2. Lower the heatbed to about the middle of the printer while it heats.
3. Push the included pin into the nozzle tip a few times, never past the marked depth.
4. Remove the pin and extrude. If the filament comes out straight without curling, the hotend is clear.
5. Do a cold pull: remove the front cover and PTFE tube, heat to 220 °C and feed PLA until it exits the nozzle, cool to 100 °C, then retract while gently pulling the filament. Repeat until the filament is clean, then refit the PTFE tube.

For **heat creep clogs** above the nozzle, Bambu Lab describes removing the hotend (with the printer cool and the three cables unplugged by their plastic connectors), heating a 1.5 mm hex key with a lighter and pushing it into the filament from the top of the heatsink, warming the nozzle briefly with an ordinary lighter and pulling the key out with the filament attached. It warns against long heating or powerful torches and against pointing the nozzle at yourself. Follow the wiki article for your model before attempting this.

**A1 and A1 mini:** the wiki starts with raising the temperature (250 °C for PLA) and extruding. If that fails, it heats the hotend to 100 °C, removes it while warm and pulls the filament out at the hotend entrance with pliers, refits it, loads filament at 220 °C and checks the flow – then does a cold pull at 100 °C if the filament comes out fresh, or uses the clearing needle and re-extrudes if not. See our [Bambu Lab A1 mini](/printers/bambu-lab-a1-mini/) page for the printer's specs and manual location.

If a clog will not clear, Bambu Lab's wiki points users to its support ticket system.

## Fix 4: Replace the nozzle or hotend

If heat, cold pulls and the needle have not worked, or the nozzle opening is worn, scratched or out of round, replace it. Abrasive filaments such as carbon fibre and glow-in-the-dark wear brass nozzles quickly, which is why many makers offer hardened steel options.

How you replace it depends on the printer:

- **Quick-swap hotends** – Bambu Lab's A1, A1 mini and X1/P1 series swap the whole hotend assembly rather than unscrewing a nozzle from the heater block.
- **Quick-swap nozzles** – some printers, such as the Creality Ender 3 V3, use a nozzle with an integrated heatbreak designed to be changed quickly.
- **Threaded nozzles** – classic hotends (Ender-3 style, Prusa MINI+) unscrew from the heater block. Follow the maker's replacement guide for the correct temperature and torque, because a loose nozzle leaks plastic around the threads.

After any hotend work, Prusa advises redoing the first layer or Z calibration, since the nozzle height may have changed.

## How to prevent a 3D printer nozzle clog

Most of these come straight from Bambu Lab's clog prevention guide:

1. **Keep filament dry.** Store spools in a sealed box with desiccant or a dry box, and dry hygroscopic materials before printing. A [filament dryer](/blog/filament-dryer/) makes this easy.
2. **Use the right temperatures.** Set the nozzle and bed to each filament's recommended range – our [PLA filament](/blog/pla-filament/) guide lists typical PLA settings.
3. **Slow down if clogs happen at high speed,** or raise the temperature slightly.
4. **Use good filament** with a consistent diameter.
5. **Do a regular cold pull** – Bambu Lab suggests at least monthly and whenever you change filament types.
6. **Purge properly between materials,** especially when going from a hot material to a cooler one.
7. **Keep the silicone sock fitted** and the hotend fan working, which helps prevent heat creep.
8. **Use a hardened nozzle** for carbon fibre, glass fibre and other abrasive filaments, and a larger nozzle (0.6 mm) for particle-filled ones if your printer supports it.
9. **Combine small jobs** into one print to reduce heat cycles.

## Checklist: what to do when your nozzle clogs

1. Rule out the spool, filament path and first-layer height.
2. Heat about 30–50 °C above normal and extrude.
3. Do a PLA cold pull; repeat until the tip is clean.
4. Use the cleaning needle on the hot nozzle, then cold pull again.
5. For heat creep, follow your maker's guide for clearing from the top.
6. Replace the nozzle or hotend if it is still blocked or worn.
7. Recalibrate the first layer and print a small test.

## Verdict

Knowing how to clean a 3D printer nozzle mostly means doing things in the right order: heat and push, cold pull, needle, then replace. The cold pull is the most useful habit – it fixes partial clogs and, done regularly, prevents many of them. Keep filament dry, print within its temperature range and treat abrasive filaments with a hardened nozzle, and clogs become rare. For model-specific steps, use your maker's official guide, such as the Bambu Lab Wiki or the Prusa Knowledge Base, and check your printer's page on our site, for example the [Prusa MINI+](/printers/prusa-mini/).
