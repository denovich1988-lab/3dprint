---
title: "3D print supports – when you need them, which type and how to remove them"
seoTitle: 3D Print Supports – Settings, Tree vs Normal and Removal
description: "3D print supports explained: the 45° rule, tree vs normal supports, settings in Bambu Studio, PrusaSlicer and Cura, and how to remove supports cleanly."
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/3e0db1f1-3a4e-4f31-bcb6-e3ffe1dc7e44/output.png
imageAlt: "Illustration of flush cutters snipping branch-like tree supports off a curved orange print, with grid supports and a deburring tool nearby"
category: Files and slicers
summary:
  - 3D print supports hold up overhangs and long bridges that would otherwise sag; most FDM printers manage overhangs up to about 45° from vertical without them.
  - Tree supports touch the model at a few thin tips and usually come off more cleanly on organic shapes, while normal (grid) supports suit flat overhangs on mechanical parts.
  - The gap between support and model, called Top Z distance or Support Z Distance, decides how easily supports come off; a larger gap means easier removal but a rougher surface.
faq:
  - q: When do 3D print supports become necessary?
    a: When a part has overhangs steeper than about 45° from vertical, long bridges, or features that start in mid-air, such as the underside of an arm or a horizontal hole larger than a few millimetres. Short bridges and gentle overhangs usually print without supports.
  - q: How do I enable support generation in Bambu Studio?
    a: Open the Support tab in the process settings and tick Enable support. Then pick a Type – normal(auto), tree(auto) or hybrid(auto) for automatic placement, or normal(manual) and tree(manual) if you want supports only where you paint them.
  - q: What is the best way to remove supports from a 3D print?
    a: Remove them soon after the print cools, starting with the largest pieces. Wiggle tree branches off by hand, lift grid supports with flush cutters or needle-nose pliers, and clean the last bits with a deburring tool or hobby knife, cutting away from your hands. Wear safety glasses, because pieces can snap off sharply.
  - q: Why are my 3D print supports hard to remove?
    a: Usually the gap between support and model is too small, the interface is too dense, or the supports fused because the nozzle was too hot or the part cooling was weak. Increase Top Z distance, reduce interface layers or density, and check the cooling fan. Moisture-sensitive materials such as nylon and PVA also get harder to remove the longer they sit.
sources:
  - name: Bambu Lab Wiki – Support (Bambu Studio)
    url: https://wiki.bambulab.com/en/software/bambu-studio/support
  - name: Bambu Lab Wiki – PLA Basic and PETG HF as support for each other
    url: https://wiki.bambulab.com/en/filament-acc/filament/pla-basic-and-petg-hf
  - name: Bambu Lab Wiki – PVA printing guide
    url: https://wiki.bambulab.com/en/filament-acc/filament/pva-printing-guide
  - name: Prusa Knowledge Base – Support material
    url: https://help.prusa3d.com/en/article/support-material_1698/
  - name: UltiMaker Support – UltiMaker Cura support settings
    url: https://support.ultimaker.com/articles/Knowledge/1667417606331
  - name: UltiMaker – Tree supports, what are they and how do they work
    url: https://ultimaker.com/learn/tree-supports-what-are-they-and-how-do-they-work/
  - name: OrcaSlicer Wiki – Support settings
    url: https://www.orcaslicer.com/wiki/print_settings/support/support_settings_support.html
  - name: OrcaSlicer Wiki – Support advanced settings
    url: https://www.orcaslicer.com/wiki/print_settings/support/support_settings_advanced.html
  - name: Protolabs Network (Hubs) – Supports in 3D printing
    url: https://www.hubs.com/knowledge-base/supports-3d-printing-technology-overview/
  - name: All3DP – Cura support blocker
    url: https://all3dp.com/2/cura-support-blocker-simply-explained/
tools: [stl-viewer, 3mf-to-stl, stl-to-3mf]
---
**3D print supports are temporary structures the slicer adds under overhangs, bridges and floating features so they have something to print on – you need them when a surface leans out more than about 45° from vertical or hangs in mid-air, and you remove them after the print.** Supports make difficult shapes printable, but they cost filament and time and leave marks where they touch the model. This guide covers when supports are needed, normal vs tree supports, the key settings in each major slicer, blockers and painting, support materials, removal and design tips. Setting names and advice come from the Bambu Lab Wiki, the Prusa Knowledge Base, UltiMaker's support pages and the OrcaSlicer Wiki, checked November 2026; menu names can change between slicer versions.

## 3D print supports at a glance

| Question | Short answer |
|---|---|
| When are supports needed? | Overhangs steeper than about 45° from vertical, long bridges, features that start in mid-air |
| When can you skip them? | Gentle overhangs, short bridges, chamfered edges, small horizontal holes |
| Normal or tree? | Normal (grid) for flat overhangs on mechanical parts; tree for figures, curved and organic shapes |
| Setting that controls how much support | Threshold angle (Bambu Studio, OrcaSlicer), Overhang threshold (PrusaSlicer), Support Overhang Angle (Cura) |
| Setting that controls how easily it comes off | Top Z distance (Bambu Studio, OrcaSlicer), Top contact Z distance (PrusaSlicer), Support Z Distance (Cura) |
| Setting that controls surface quality under supports | Top interface layers / Support interface |
| Keep supports off the model | On build plate only (Bambu, Orca), Supports on build plate only (PrusaSlicer), Support Placement: Touching build plate (Cura) |
| Cleanest result on complex parts | A soluble or breakaway support material on a multi-material printer |

## When do you need 3D print supports?

An FDM printer lays each layer on top of the one below. A new line can stick out a little past the line under it, but not by much. Three situations need support:

- **Steep overhangs.** The common rule of thumb, repeated in the Protolabs Network (Hubs) knowledge base and most slicer guides, is that overhangs up to about 45° from vertical print without support. Beyond that, the edges curl and sag. The exact limit depends on cooling, material and layer height.
- **Bridges.** A bridge is a horizontal span between two supported points. Short bridges print fine; the Hubs guide puts the limit for an accurate surface at about 5 mm, though many printers bridge further with some sag.
- **Islands.** Any feature whose lowest point starts in mid-air – a chin, an outstretched arm, a side hook – always needs support or a different orientation.

**Tip:** before slicing, open the model in our [STL viewer](/stl-viewer/) and turn it around. Downward-facing flat areas and features that start in the air are the places that will need support.

## 3D print with supports or without? The 45° rule in practice

The 45° rule is a starting point, not a law. You can often avoid supports completely:

1. **Reorient the model.** Laying a part on a different face can turn a large overhang into a wall – the most effective way to reduce support.
2. **Split the model** into parts that each print flat, then glue or screw them together.
3. **Accept small defects** on hidden faces rather than support marks on visible ones.
4. **Check the overhang highlight.** Bambu Studio's painting tool has a **Highlight overhang areas** option, and other slicers show overhangs in the preview.

If supports are unavoidable, the goal is to use the fewest, in places where the marks will not be seen.

## Normal vs tree supports

| | Normal (grid, snug) | Tree (organic) |
|---|---|---|
| Shape | Straight columns or a grid directly under the overhang | Branches that grow from the plate and reach the model at thin tips |
| Contact with the model | Large contact area | Small contact points |
| Best for | Flat overhangs, bridges, mechanical parts | Figures, miniatures, curved and organic shapes |
| Removal | Can be hard in enclosed or deep areas | Usually easier; fewer marks |
| Slicing time | Fast | Slower |
| With PVA | Recommended | Not recommended (tips can be too thin) |

UltiMaker describes tree supports as wrapping around the model, thicker at the base and thinner at the top, so only the branch tips touch the part. That usually means less scarring and less material, at the cost of longer slicing and thin tips that can fail on a poorly tuned printer. UltiMaker and Bambu Lab both advise against tree supports for PVA, because the thin branches are too fragile in that material.

Names differ by slicer. Bambu Studio offers normal, tree and hybrid types (the Bambu Lab Wiki calls hybrid(auto) a generally safe choice); OrcaSlicer has normal and tree with styles such as grid, snug, organic and tree_slim; PrusaSlicer has the styles Grid, Snug and Organic; Cura calls it Support Structure: Normal or Tree. Prusa notes that Grid is stable but can leak onto walls, Snug follows the overhang but tall thin pillars are less stable, and Organic is easy to remove without scarring.

**Tip:** start with tree (organic) supports for anything sculpted, and normal supports for brackets, enclosures and parts with flat overhangs.

## Key 3D print support settings by slicer

These are the settings worth learning first. Bambu Studio and OrcaSlicer share most names, because OrcaSlicer started as a fork of Bambu Studio.

| What it does | Bambu Studio / OrcaSlicer | PrusaSlicer | Cura |
|---|---|---|---|
| Turn supports on | Enable support | Generate support material | Generate Support |
| How steep an overhang gets support | Threshold angle | Overhang threshold | Support Overhang Angle |
| Gap between support and model (top) | Top Z distance | Top contact Z distance | Support Z Distance (Support Top Distance) |
| Gap where support sits on the model | Bottom Z distance | Bottom contact Z distance | Support Bottom Distance |
| Dense layers that touch the model | Top / Bottom interface layers | Top / Bottom interface layers | Enable Support Interface (roof and floor) |
| Spacing of interface lines | Top interface spacing | Interface pattern spacing | Support Interface Density / Line Distance |
| Supports only from the plate | On build plate only | Supports on build plate only | Support Placement: Touching build plate |

Bambu Studio, OrcaSlicer and PrusaSlicer also have **Don't support bridges**, which leaves bridge areas unsupported, and Bambu Studio, OrcaSlicer and Cura have a sideways gap setting (**Support/object xy distance** or **Support X/Y Distance**) that keeps supports from fusing to walls.

### Threshold angle: watch the direction

The overhang angle is measured differently, so the same number does not mean the same thing everywhere:

- **Bambu Studio and OrcaSlicer:** surfaces flatter than the Threshold angle get support. The Bambu Lab Wiki gives a default of 30° and says a larger angle produces more supports.
- **PrusaSlicer:** the Overhang threshold is measured from the horizontal plane, and Prusa says lower values produce less support.
- **Cura:** Support Overhang Angle works the other way round. UltiMaker's settings page says 0° supports every overhang and 90° supports none, so a larger number means less support. UltiMaker's tree support article suggests about 50° as a starting point.

### Top Z distance: the setting that decides removal

This is the gap between the top of the support and the model. The Bambu Lab Wiki says a larger value makes supports easier to remove but lowers the quality of the supported surface, and a smaller value does the opposite. It recommends about 0.2 mm when the interface is printed in the same filament as the model, and 0 when a dedicated support filament is used for the interface. Prusa suggests 50–75% of the layer height, and UltiMaker suggests about two layer heights for supports in the model material. All three set it to 0 for soluble supports.

### Interface layers

Interface layers are a dense skin between the support and the model. More interface layers give a flatter, better-looking underside but are harder to remove and print slower. The OrcaSlicer Wiki notes that an interface spacing of 0 makes a solid interface. If supports are welded on, reduce the interface first; if the underside is rough, add one or two layers.

## How to enable support generation in Bambu Studio

1. Select the plate or object and open the **Support** tab in the process settings.
2. Tick **Enable support**.
3. Choose a **Type**: tree(auto) or hybrid(auto) for most prints, normal(auto) for flat mechanical overhangs.
4. Check **Threshold angle** (30° by default) and **Top Z distance**.
5. Tick **On build plate only** if supports should not stand on the model.
6. Slice and check every support in the preview before you print.

If you want supports only in specific places, switch the Type to normal(manual) or tree(manual) and paint them – our guide to [manual supports in Bambu Studio](/blog/bambu-studio-manual-supports/) walks through the painting tool, enforcers and blockers step by step.

## Support blockers, enforcers and painting

Automatic supports often land where you do not want them, such as inside holes. All the main slicers let you correct that:

- **Bambu Studio and OrcaSlicer:** paint enforcers and blockers on the model, or add box-shaped support enforcer and blocker parts from the right-click menu.
- **PrusaSlicer:** support enforcer and blocker shapes, plus paint-on supports since PrusaSlicer 2.3. Turning off **Auto-generated supports** means only enforcers create supports.
- **Cura:** the **Support Blocker** tool in the left toolbar places a cube where you click on the model; scale and move it to cover the area that should not get support. UltiMaker's settings page also mentions blockers for removing unwanted thin supports.

**Why it matters:** blocking support inside a screw hole or under a logo can save more cleanup time than any other setting change.

## Soluble and breakaway support materials

Printers with two nozzles or a multi-material system can print supports, or just the interface, in a different material:

- **Soluble PVA.** PVA dissolves in water. The Bambu Lab Wiki says soaking takes from several hours to about a dozen, that warm water and stirring speed it up, and that water should stay at or below 50 °C for PLA parts. PVA absorbs moisture fast, so it must be dried and stored sealed. Best for complex, nested or hollow parts.
- **Breakaway support filaments.** Bambu Lab sells Support for PLA and Support for PLA/PETG, and UltiMaker sells Breakaway material. They are designed to stick weakly to the model so they snap off cleanly.
- **PLA and PETG as supports for each other.** They bond poorly to each other, which makes them work as an interface. The Bambu Lab Wiki has a guide for using Bambu PLA Basic and PETG HF this way and recommends using the support filament only for the interface.

Bambu Lab recommends printing only the interface in support filament and the base in the model filament, to save time and filament changes. If you are not sure how filament switching works on a Bambu printer, see [what an AMS is](/blog/what-is-ams-in-3d-printing/).

## How to remove 3D print supports

The best way to remove supports from a 3D print is patiently, with the right tools, soon after the print finishes.

**Tools that help:** flush cutters for branches and grid edges; needle-nose pliers for tight spots (Prusa recommends pliers for hard-to-reach areas); a deburring tool, scalpel or hobby knife for stuck pieces; a spatula to lift grid edges; sandpaper or files for the finish; and safety glasses, because Prusa warns that pieces can fly off sharply.

**Technique:**

1. Let the part cool to room temperature, but do not leave it for days. Bambu Lab recommends removing supports within 2 hours, especially for nylon, PVA and Support for PA/PET, which absorb moisture and soften.
2. Remove the large outer supports first, then work towards thin details.
3. For tree supports, grip a branch near the trunk and wiggle it until the tips release.
4. For grid supports, lift one edge with a spatula or pliers and peel along the interface, not across it.
5. Cut close to the model, then clean the remaining stubs with a deburring tool, always cutting away from your hand.
6. For soluble supports, break off what you can and soak the rest.

## 3D print supports hard to remove? Causes and fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| Supports welded to the model | Top Z distance too small | Increase it by one layer height, or to about 0.2 mm for same-material supports |
| Interface comes off in one piece but leaves a stuck skin | Too many or too dense interface layers | Fewer top interface layers or larger interface spacing |
| Supports fused to walls | XY distance too small | Increase Support/object xy distance or Support X/Y Distance |
| Supports inside holes and pockets | Supports allowed everywhere | On build plate only, or add a support blocker |
| Rough, droopy underside | Gap too large, too few interface layers | Smaller Top Z distance, add an interface layer |
| Supports stuck on nylon or PVA after a few days | Material absorbed moisture | Dry the part, let it cool, then remove the supports straight away (Bambu Lab's advice) |

**Tip:** change one setting at a time and test on a small piece of the model, not the whole print.

## Design tips for fewer 3D print supports

If you design your own parts, you can avoid most supports:

- **Chamfer instead of fillet** on downward-facing edges. A 45° chamfer prints cleanly; a rounded fillet on the bottom becomes a steep overhang near the edge.
- **Use teardrop or diamond-shaped horizontal holes.** The pointed top replaces the flat roof of a round hole.
- **Split parts** so every piece has a flat face on the plate.
- **Choose the print orientation** while designing, and keep cosmetic faces up or vertical.

## Checklist before you print with supports

1. Orientation chosen to minimise overhangs and hide support marks.
2. Support type matches the model: tree for organic shapes, normal for flat overhangs.
3. Threshold angle checked, with its direction understood for your slicer.
4. Top Z distance and interface layers set for easy removal or a smooth underside.
5. Blockers or On build plate only used to keep supports out of holes and off cosmetic faces.
6. Preview checked layer by layer for floating islands and missing support.
7. Tools and safety glasses ready to remove supports soon after printing.

## Verdict

3D print supports are a trade-off: they make overhangs and floating features printable but cost material, time and surface quality. Reorient or split the model first, use tree supports for organic shapes and normal supports for flat mechanical overhangs, and treat Top Z distance and interface layers as the two settings that decide how easily supports come off. If you print with supports often on a multi-material printer, a breakaway or soluble interface gives the cleanest result. For the materials themselves, our [PLA filament guide](/blog/pla-filament/) covers the easiest filament to print with supports.
