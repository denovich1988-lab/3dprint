---
title: 3D printed animals – articulated, low-poly and figurine models
seoTitle: 3D Printed Animals – Types, Settings, Supports and Painting
description: 3D printed animals explained – flexi animals, low-poly models, figurines and planters, with slicer settings, supports, multicolour and painting tips.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/bb0ac7e0-d36d-46a4-9115-69f8849a68e4/output.png
imageAlt: "Illustration of a shelf with a silk low-poly fox, an animal planter with a succulent and a primed bird figurine beside paint pots"
category: Ideas
summary:
  - The four main kinds of 3D printed animals are articulated flexi animals, low-poly models, detailed figurines and functional pieces such as planters.
  - Articulated and low-poly animals usually print without supports, while realistic figurines often need tree supports and thinner layers.
  - Colour can come from multicolour filament, a layer colour change, a multi-material unit or painting after printing over a primer.
faq:
  - q: What are the most popular 3D printed animals?
    a: Articulated flexi animals such as axolotls, cats, sharks, snakes and octopuses are the most printed, followed by low-poly animal sculptures, realistic figurines and animal-shaped planters and pen holders.
  - q: Do 3D printed animals need supports?
    a: Articulated and most low-poly animals are designed to print without supports. Realistic figurines with legs, horns, ears or open mouths usually need them; tree or hybrid supports are a good fit for these small, curved overhangs.
  - q: How do you make 3D printed animals in several colours?
    a: Use gradient or multicolour filament, add a colour change at chosen layers in your slicer, print with a multi-material unit such as an AMS, or prime and paint the finished print with acrylic paint.
  - q: What filament is best for 3D printed animals?
    a: PLA suits almost all animal models. Matte PLA hides layer lines on figurines, silk PLA shows off low-poly facets, and PETG is better for planters that sit outdoors or hold damp soil.
sources:
  - name: Bambu Lab Wiki – Support types and settings in Bambu Studio
    url: https://wiki.bambulab.com/en/software/bambu-studio/support
  - name: Prusa Knowledge Base – Color change
    url: https://help.prusa3d.com/article/color-change_1687
  - name: Prusa Knowledge Base – Modeling with 3D printing in mind
    url: https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - name: All3DP – Beginner's guide to painting 3D prints
    url: https://all3dp.com/2/beginner-s-guide-to-painting-3d-prints-pla-abs/
  - name: Creality – Best 3D printed animals
    url: https://www.creality.com/blog/best-3d-printed-animals
  - name: 3DSPRO – Free 3D models for articulated animals
    url: https://3dspro.com/resources/blog/free-3d-models-for-3d-printed-articulated-animals
tools: [3d-viewer, stl-viewer, lithophane-maker]
---
**3D printed animals are animal models you print at home, from articulated flexi animals that wiggle straight off the bed to low-poly sculptures, detailed figurines and animal-shaped planters.** They are among the most printed things on home 3D printers because they suit every skill level: a flexi axolotl is a good first print, while a realistic wolf figurine with fur detail tests supports and fine layers. This guide explains each type, the slicer settings and supports it needs, how to add colour and how to paint the result. Settings were checked in November 2026 against the Bambu Lab Wiki and the Prusa Knowledge Base.

## 3D printed animals at a glance

| Type | What it is | Supports | Typical layer height | Difficulty |
|---|---|---|---|---|
| Articulated (flexi) animal | Linked segments printed in one piece | None | 0.15–0.2 mm | Easy |
| Low-poly animal | Faceted sculpture with flat faces | Rarely | 0.2 mm | Easy |
| Realistic figurine | Detailed animal with fur, feathers or scales | Often (tree) | 0.08–0.16 mm | Medium to hard |
| Animal planter or pen holder | Hollow functional piece shaped like an animal | Sometimes | 0.2 mm | Easy to medium |
| Wall head or relief | Flat-backed animal for a wall | Rarely | 0.2 mm | Easy |
| Kit or skeleton | Parts that slot or glue together | Usually none | 0.2 mm | Medium |

## Articulated 3D printed animals

Flexi animals are print-in-place models whose segments are separated by small gaps, so the body bends as soon as it leaves the plate. Common subjects include axolotls, sharks, cats, snakes, octopuses, lizards and dinosaurs. Many octopus and lizard designs are made to print with no supports and no assembly; some long snakes stretch well past the size of the bed they were printed on because they print coiled up.

The rules are the same as for any print-in-place design: no supports, layers of 0.2 mm or thinner, elephant foot compensation on and print at the designed scale. We cover joint gaps and fused segments in detail in our [3D printed dragon](/blog/3d-printed-dragon/) guide, and pocket-sized flexi creatures overlap with [3D printed fidget toys](/blog/3d-printed-fidget-toys/), so this guide focuses on the other types.

**Tip:** for tiny "mini" flexi animals, use a 0.12–0.16 mm layer height and a slower outer wall speed. The gaps between segments are the same size as on bigger models, but the walls around them are thinner.

## Low-poly animals

Low-poly models build an animal from flat triangular faces, like a folded paper sculpture. They are easy to print because most faces slope gently enough to need no support, and there are no moving parts, so you can scale them up or down freely. Large low-poly heads, foxes, bears and deer make good shelf pieces.

**Tip:** silk or metallic PLA catches the light differently on each facet, which suits low-poly shapes. Matte PLA gives a clean, modern look. Use 3 walls so the flat faces stay crisp and do not show infill through the surface.

## Realistic animal figurines

Detailed figurines of dogs, horses, birds or wildlife need more care. Legs, tails, ears, horns and open mouths create overhangs, and fine surface detail needs thin layers.

- **Orientation:** stand the animal on its feet or belly so the largest flat area sits on the bed and the face points up or sideways, where support marks matter least.
- **Layer height:** 0.08–0.12 mm brings out fur and feather detail; 0.16 mm is a common compromise for larger models.
- **Supports:** the Bambu Lab Wiki recommends tree or hybrid supports for objects with complex shapes where most overhangs are small, curved surfaces, because they hold well with less material and print time. Normal supports give a better finish under large flat overhangs.
- **Support gap:** when supports are printed in the same filament as the model, the Bambu Lab Wiki advises a top Z distance of about 0.2 mm, otherwise the supports are very hard to remove. A dedicated support material lets you use 0.
- **Overhang threshold:** Bambu Studio's default threshold angle is 30 degrees; raising it adds more support, which can help with thin legs and chins.

If you need to add or block supports in particular spots, see our guide to [Bambu Studio manual supports](/blog/bambu-studio-manual-supports/).

## Animal planters and functional pieces

Animal planters, pen pots, phone stands and toothbrush holders turn a cute model into something useful. These are usually printed upright with no or few supports.

- Use 3–4 walls and 4 or more bottom layers so water does not seep through.
- For planters that hold damp soil or sit in sun outdoors, PETG is a better choice than PLA; see PETG vs PLA.
- Choose a design with a drainage hole, or use the printed pot as a cover around a plastic nursery pot.

## Settings by type

| Setting | Flexi animal | Low-poly | Figurine | Planter |
|---|---|---|---|---|
| Layer height | 0.15–0.2 mm | 0.2 mm | 0.08–0.16 mm | 0.2 mm |
| Walls | 2–3 | 3 | 3 | 3–4 |
| Infill | As designed | 10–15% | 10–15% | 15–20% |
| Supports | Off | Usually off | Tree or hybrid | As needed |
| Brim | On long, thin bodies | Rarely | On thin legs | Rarely |
| Filament | PLA, silk PLA | Silk or matte PLA | Matte PLA | PLA or PETG |

These are starting points; the designer's print notes always come first. Typical temperatures depend on the filament brand, so check the spool label.

## Multicolour 3D printed animals

There are four ways to add colour, from simplest to most involved:

1. **Gradient or multicolour filament.** One spool changes colour along its length, which gives flexi animals a rainbow body with no extra work.
2. **Colour change at a layer.** Most slicers let you add a filament change at a chosen layer. The Prusa Knowledge Base explains that the printer pauses when it reads the M600 command in the G-code and asks you to swap filament. This works well for animals with horizontal bands, such as a bee, a clownfish or a white-bellied penguin.
3. **Multi-material printing.** A unit such as the Bambu Lab AMS swaps filaments automatically, so you can paint eyes, spots and stripes onto the model in the slicer. Many animal models come as ready-coloured 3MF projects for these systems.
4. **Painting** after printing (see below).

Multi-material prints purge filament at every colour change, so small details on many layers add waste and time. Check the estimate in the slicer before printing.

## Painting 3D printed animals

Paint gives the most control over eyes, noses and markings. All3DP's painting guide recommends this order for PLA:

1. **Clean up:** trim support stubs with a craft knife or flush cutters.
2. **Sand:** start around 120–220 grit to remove layer lines, then move up through finer grits. Go gently on small details such as ears and whiskers.
3. **Prime:** primer is essential on PLA because paint does not grip it well. Two light coats of spray primer give even coverage; filler primer hides fine layer lines.
4. **Paint:** acrylics are the easiest for beginners because they dry fast and clean up with water. Build colour in thin coats, and use fine brushes or water-based acrylic paint markers for eyes and details.
5. **Seal:** a clear coat protects the paint and sets the sheen.

Avoid paints that use acetone as the main solvent, as it can damage PLA.

## How to print your first 3D printed animal

1. Pick a print-in-place flexi animal or a low-poly model marked "no supports".
2. Open the file in our [3D viewer](/3d-viewer/) or STL viewer to check its size and that it is a single, closed model.
3. Slice in PLA at 0.2 mm with supports off, or follow the designer's notes.
4. Print the first layer slowly and watch it go down.
5. Let the plate cool, then remove the animal; flex any joints gently from the tail end.
6. When that works, move on to a figurine with tree supports and thinner layers.

## Where to find animal models

Printables, MakerWorld and Thingiverse all have large animal categories; search for terms such as "flexi", "articulated", "low poly" or "planter" plus the animal. Check the licence before selling prints. To turn a photo of your own pet into a printable keepsake, our [lithophane maker](/lithophane-maker/) creates a backlit panel from an image right in your browser. For more ideas, see what to 3D print.

## Verdict

3D printed animals cover every level. Start with a flexi animal or a low-poly sculpture that needs no supports, then try a realistic figurine with tree supports and 0.12 mm layers. Use gradient filament, a layer colour change or a multi-material unit for colour, or prime and paint the print for the most detail.
