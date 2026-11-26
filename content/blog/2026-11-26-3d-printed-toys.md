---
title: 3D printed toys – types, safety for kids and how to print them
seoTitle: 3D Printed Toys – Types, Kid Safety and Print Settings
description: 3D printed toys explained – main types, safety for kids (small parts, materials), the best filament, slicer settings for tough toys and where to find models.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/a165c5a8-3af7-44ca-b2fc-73e143cbac53/output.png
imageAlt: "Illustration of a home 3D printer on a playroom table finishing a print-in-place toy car beside building blocks and a small marble run"
category: Ideas
summary:
  - Most popular 3D printed toys are print-in-place designs, such as flexi animals, cars with moving wheels and puzzles, that come off the bed ready to play with.
  - Home-printed toys are not tested like shop toys, so keep small or detachable parts away from children under 3, who are the group the US small-parts rule protects.
  - For strength, extra walls usually matter more than extra infill, and PETG or TPU suit toys that get dropped or bent more than standard PLA.
faq:
  - q: Are 3D printed toys safe for kids?
    a: They can be for older children if you choose a sturdy design without small loose parts, print it with strong walls and check it for sharp edges and cracks. They are not tested like shop toys, so do not give toys with small parts to children under 3 and do not let young children chew them.
  - q: What is the best filament for 3D printed toys?
    a: PLA is the easiest and suits most rigid toys and display pieces. PETG is tougher and less brittle for toys that get dropped, and TPU suits soft, bendy or squishy toys.
  - q: Can you 3D print your own toys at home?
    a: Yes. Any home FDM printer can print toys from free model libraries or your own designs. Print-in-place toys are the easiest, because the moving parts are already assembled when the print finishes.
  - q: Can I sell 3D printed toys?
    a: Check the model licence first, as many free designs are for personal use only. Toys sold for children also have to meet toy-safety rules, such as ASTM F963 and CPSIA requirements in the US or EN 71 in the EU, which a material label alone does not cover.
sources:
  - name: Polymaker Wiki – Child and toy safety
    url: https://wiki.polymaker.com/polymaker-products/more-about-our-products/safety-in-3d-printing/child-and-toy-safety
  - name: US Consumer Product Safety Commission – Small parts FAQ
    url: https://www.cpsc.gov/FAQ/Small-Parts
  - name: 16 CFR Part 1501 – Small parts regulation (govinfo)
    url: https://www.govinfo.gov/content/pkg/CFR-2012-title16-vol2/pdf/CFR-2012-title16-vol2-part1501.pdf
  - name: Prusa Knowledge Base – Modeling with 3D printing in mind
    url: https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135
  - name: Flashforge – 10 inspiring ideas for 3D printed toys
    url: https://www.flashforge.com/blogs/news/10-inspiring-ideas-for-3d-printed-toys
  - name: Sovol – 3D printed toys guide for kids and families
    url: https://www.sovol3d.com/blogs/news/3d-printed-toys-complete-guide-for-kids-and-families
tools: [3d-viewer, stl-viewer, 3mf-to-stl]
---
**3D printed toys are toys you print at home from a digital model, most often print-in-place designs such as flexi animals, cars with spinning wheels, puzzles and building blocks that come off the printer ready to play with.** A home FDM printer and a spool of PLA are enough for most of them, and free model libraries hold thousands of designs. This guide covers the main types, what to know about safety before you hand a printed toy to a child, the best filament and slicer settings for toys that last, and where to find models. Facts were checked in November 2026 against filament makers' safety guidance and the US small-parts rule.

## 3D printed toys at a glance

| Toy type | Examples | Supports | Best filament | Best for |
|---|---|---|---|---|
| Print-in-place | Flexi animals, dragons, chains, fidgets | None | PLA | Older kids, adults |
| Vehicles | Cars with turning wheels, trains, boats | Usually none | PLA, PETG | Kids who play rough (PETG) |
| Building and construction | Blocks, marble runs, gear sets | Usually none | PLA, PETG | Families, classrooms |
| Puzzles and games | Puzzle boxes, chess sets, dice towers | Sometimes | PLA | Older kids, adults |
| Soft and bendy | Squishy figures, bouncy balls, flexible tracks | None | TPU | Older kids |
| Figures and dolls' house items | Figurines, furniture, play food | Often | PLA | Display and pretend play |
| Educational models | Dinosaur skeletons, planets, geometry shapes | Sometimes | PLA | School projects |

## The main types of 3D printed toys

**Print-in-place toys** are printed in one piece with the moving parts already free. The designer leaves a small gap between parts, so a flexi animal, a chain or a car with spinning wheels moves as soon as you take it off the plate. These are the most popular toys to print because there is no assembly. Our guides to [3D printed fidget toys](/blog/3d-printed-fidget-toys/) and the [3D printed dragon](/blog/3d-printed-dragon/) cover two of the most printed categories in detail.

**Vehicles** range from simple push cars to models with printed axles and snap-in wheels. Toys that need pins or axles to be pressed in usually say so on the model page.

**Building toys and marble runs** are sets of modular parts that click or stack together. Because you print the parts yourself, you can add more pieces whenever you want.

**Puzzles and games** include interlocking puzzle cubes, puzzle boxes, board game pieces and complete chess sets.

**Soft toys** are printed in flexible TPU: squishy figures, bendy snakes and balls. They need a printer that handles flexible filament well; see our TPU filament guide.

**Educational models** such as dinosaur skeleton kits, solar system models and fraction blocks are popular with teachers and parents.

## Are 3D printed toys safe for kids?

A printed toy is a home-made product, not a tested shop toy, so its safety depends on the design, the material and how well it was printed. Four things matter most.

**Small parts and choking.** In the US, the small-parts rule (16 CFR Part 1501) bans small parts in toys intended for children under 3, measured with a standard small-parts test cylinder. Polymaker's toy-safety guidance warns that small accessories, removable eyes, clips and decorative parts can become choking hazards if they come off. Print articulated toys, tiny figures and anything with snap-on pieces only for older children, and supervise younger ones.

**Breakage and sharp edges.** Polymaker also points out that weak layer adhesion, brittle walls and rough finishing can make FDM toys break into sharp fragments. Strong walls, good layer bonding and sanding off support marks reduce this.

**Mouthing and cleaning.** Young children put toys in their mouths. Layer lines, seams and support scars trap dirt and saliva and are hard to clean properly, the same problem we describe in [is PLA food safe](/blog/is-pla-food-safe/). Printed toys are a poor choice for teething babies.

**Materials.** A filament label such as "non-toxic" or an EN 71-3 test result covers chemical migration from the material only. Polymaker notes that EN 71-3 testing does not equal full toy compliance, and that US requirements under ASTM F963 and CPSIA also cover physical hazards such as small parts and durability. Pigments and additives in coloured or special filaments vary from brand to brand, so check the maker's safety data sheet.

**Tip:** Polymaker suggests treating any print meant for a child as a product, not just a model, and the printed object itself is the real safety test. Pull, twist and drop the toy yourself before handing it over.

## Best filament for 3D printed toys

| Filament | Strengths | Weak points | Good for |
|---|---|---|---|
| PLA | Easiest to print, sharp details, many colours | Brittle when dropped hard, softens in a hot car | Print-in-place toys, puzzles, display figures |
| PLA+ / tough PLA | Less brittle than standard PLA | Varies by brand | Toys that see daily use |
| PETG | Tougher, more flexible, handles water | Strings more, slightly less detail | Vehicles, outdoor and bath-adjacent toys |
| TPU | Bends and squashes without breaking | Slow to print, harder in some feeders | Squishy and bendy toys, tyres |
| ABS / ASA | Tough and heat resistant | Fumes and warping; needs an enclosure | Rarely needed for toys |

Typical print temperatures depend on the brand, so check the spool label. For a closer look at the two most common choices, read [PETG vs PLA](/blog/petg-vs-pla/). Avoid resin-printed toys for young children: uncured resin is a skin irritant, and fully curing and washing a print is hard to guarantee at home.

## Slicer settings for tough 3D printed toys

Toys get dropped, thrown and stepped on, so set up the slicer for strength rather than speed.

| Setting | Starting point | Why |
|---|---|---|
| Walls (perimeters) | 3–4 | Extra walls usually add more strength than extra infill |
| Top and bottom layers | 5 or more | Fewer weak spots on flat faces |
| Infill | 15–25% for most toys | Higher only for parts that take load, such as axles |
| Layer height | 0.2 mm; 0.12–0.16 mm for small figures | Thinner layers for fine detail and print-in-place gaps |
| Supports | Off for print-in-place designs | Supports get trapped inside joints |
| Elephant foot compensation | On | Stops the first layer fusing moving parts |
| Ironing (optional) | On for flat tops | Smoother surface that is easier to wipe |

For print-in-place toys, print at the designed size. Prusa recommends a gap of at least 0.3 mm between movable parts, and scaling a model down shrinks those gaps until the parts fuse. Check the size of a downloaded model in our [3D viewer](/3d-viewer/) before you slice.

## Safety checklist before you hand over a printed toy

1. **Pick the right design for the age.** No small parts, loose pins or tiny articulated pieces for children under 3.
2. **Print strong.** Use 3–4 walls and a filament that suits the toy (PETG or TPU for rough play).
3. **Remove all support material** and check inside joints and holes.
4. **Sand sharp edges** and file off stringing and blobs.
5. **Test it yourself.** Twist, pull and drop the toy, and look for cracks or pieces that come away.
6. **Glue and paint carefully.** Let any glue or paint cure fully, and use products labelled for the purpose.
7. **Check it regularly.** Printed toys can crack along layer lines over time; throw away damaged ones.

## Where to find 3D printed toy models

Large free libraries such as Printables, MakerWorld and Thingiverse have toy and game categories with filters for print-in-place and no-support models. Read the print notes on each model page: designers usually list the layer height, supports and any parts that need glue. Check the licence too, as many models do not allow selling prints.

If a model comes as a 3MF project, you can extract the geometry with our 3MF to STL converter. You can also design simple toys yourself in a beginner CAD app or turn a sketch into a model; see our guide to 3D printing AI-generated models. For more project ideas beyond toys, browse what to 3D print.

## Printing toys with children

Printing a toy together is an easy introduction to design and engineering: kids pick a model, watch it build layer by layer and see why supports or gaps matter. Keep children away from the hot nozzle and the heated bed, and remove prints once the plate has cooled. Some printers are built for families, such as the Toybox 3D printer, which works from an app with a catalogue of toys.

## Verdict

3D printed toys are one of the most rewarding things to make with a home printer. Start with print-in-place designs in PLA, switch to PETG or TPU for toys that get thrown around, print with 3–4 walls and keep small or detachable parts away from young children. Test every toy yourself before it goes to a child, and replace it when it cracks.
