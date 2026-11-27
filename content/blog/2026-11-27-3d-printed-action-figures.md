---
title: 3D printed action figures – types, resin vs FDM, settings, joints and painting
seoTitle: 3D Printed Action Figures – Print, Assemble and Paint
description: 3D printed action figures guide – articulated and ball-joint figures, resin vs FDM, nozzle and layer settings, tree supports, joints, painting and licences.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/e493d3fe-447a-41d8-a8dc-c0128bb5acf1/output.png
imageAlt: "Illustration of a printer with a half-printed articulated robot-like figure, loose unpainted limbs, a paintbrush and paint pots"
category: Ideas
summary:
  - 3D printed action figures range from print-in-place articulated figures that come off the bed ready to pose to multi-part ball-joint kits, statues, busts and tabletop miniatures.
  - Resin printers capture the finest detail, while FDM printers make tougher, cheaper figures; Prusa found a 0.25 mm nozzle with 0.07–0.1 mm layers gives convincing small figures on FDM.
  - Most model sites let designers pick a licence such as a Creative Commons variant, and a NonCommercial licence means you may print the figure for yourself but not sell it without the designer's permission.
faq:
  - q: Are 3D printed action figures any good?
    a: Yes, if you pick a model designed for your printer type. Print-in-place and snap-together figures designed for FDM are sturdy and poseable, and resin printers can reach a level of surface detail close to injection-moulded collectibles. FDM figures show layer lines that you can sand and prime away if you plan to paint.
  - q: Is resin or FDM better for action figures?
    a: Resin is better for small, highly detailed figures, faces and miniatures. FDM is better for larger, poseable figures that will be handled, because PLA and PETG parts are tougher and cheaper, and you avoid the gloves, washing and curing that liquid resin needs.
  - q: What filament is best for poseable figures?
    a: PLA is the easiest and holds detail well, which makes it the default for most figure designs. PETG is less brittle, so it suits joints, thin limbs and accessories that flex. Prusa's miniature tests also got good results with ASA, which strings little and can be smoothed with acetone vapour.
  - q: Can I sell 3D printed figures of famous characters?
    a: Usually not without permission. Characters from films, games and comics are protected by copyright and trademarks owned by their creators, whatever the file's licence says, and a NonCommercial licence on the model forbids selling prints even of original designs. Check the model's licence and the rules in your country, and ask a lawyer if you plan to sell; this is not legal advice.
sources:
  - name: Prusa blog – Printing great-looking miniatures with a 0.25 mm nozzle
    url: https://blog.prusa3d.com/printing-great-looking-miniatures-with-a-0-25mm-nozzle-on-the-original-prusa-mini_33457/
  - name: Prusa blog – Everything about nozzles with a different diameter
    url: https://blog.prusa3d.com/everything-about-nozzles-with-a-different-diameter_8344/
  - name: Prusa blog – Postprocessing of 3D prints step by step
    url: https://blog.prusa3d.com/postprocessing-of-3d-prints-step-by-step_29270/
  - name: Bambu Lab Wiki – Bambu Studio support
    url: https://wiki.bambulab.com/en/software/bambu-studio/support
  - name: Formlabs – How to prime and paint 3D printed parts
    url: https://formlabs.com/blog/how-to-prime-and-paint-3d-prints/
  - name: Formlabs – Resin safety FAQ
    url: https://formlabs.com/blog/resin-safety-resin-terms-faq/
  - name: Elegoo – How to do resin 3D printing, beginner's guide
    url: https://www.elegoo.com/en-gb/blogs/3d-printer-user-guide/how-to-do-resin-3d-printing-beginners-guide
  - name: Printables.com terms of service
    url: https://www.prusa3d.com/page/printables-com-terms-of-service_231249/
  - name: Bambu Lab Wiki – MakerWorld FAQ
    url: https://wiki.bambulab.com/en/makerworld/faq
  - name: Creative Commons – About CC licenses
    url: https://creativecommons.org/about/cc-licenses/
tools: [stl-viewer, 3mf-viewer, 3d-viewer]
---
**3D printed action figures are poseable or display figures you print at home – from print-in-place articulated figures that come off the bed ready to move, to ball-joint kits, statues, busts and miniatures – and both FDM and resin printers can make them.** The right result depends on three choices: the kind of figure, the printer technology, and how much time you want to spend on assembly and painting. This guide covers each kind of printable figure, resin vs FDM, materials, slicer settings for small detail, tree supports, joints and tolerances, assembly, sanding, priming and painting, where to find models, and what licences and copyright mean for fan art. Settings and techniques come from the makers' own guides (Prusa blog, Bambu Lab Wiki, Formlabs and Elegoo guides) and the model sites' published terms, checked November 2026. We do not review individual models or sellers.

## 3D printed action figures at a glance

| Figure type | How it is built | Best printer | Difficulty | Good for |
|---|---|---|---|---|
| Print-in-place articulated figure | Printed in one go with joints already assembled | FDM | Easy to medium | Desk toys, kids' play, first figure |
| Snap-fit or pin-jointed kit | Separate parts pressed or pinned together | FDM | Medium | Poseable figures you can repair and customise |
| Ball-joint figure | Ball-and-socket parts friction-fitted | FDM or resin | Medium to hard | Poseable collectibles that hold a pose |
| Statue or bust | One or several solid parts, glued | Resin for small, FDM for large | Medium | Display pieces and painting |
| Miniature (tabletop scale) | Very small single figures, often with a base | Resin, or FDM with a fine nozzle | Hard on FDM, easy on resin | Tabletop games, dioramas |

## Kinds of 3D printed action figures

**Print-in-place articulated figures.** The designer models every joint with a small gap between moving parts, so the slicer prints them already assembled. You break the joints free by flexing each limb after printing. They need no glue or hardware, which makes them a good first figure.

**Snap-fit and pin-jointed kits.** Each body part prints flat and separately, then clicks or pins together. Parts printed flat are stronger and need fewer supports than a figure printed standing up, and you can reprint a broken arm without reprinting the whole figure.

**Ball-joint figures.** Shoulders, hips and necks use a ball that sits in a socket. The friction between the two holds the pose, so the fit has to be right: too loose and the figure flops, too tight and the ball cracks the socket.

**Statues and busts.** These do not move. They are usually split into a few parts so each prints in its best orientation, then glued and painted. Large statues suit FDM; small, detailed ones suit resin.

**Miniatures.** Tabletop figures are small enough that faces, hands and weapons are only a few millimetres across. Resin printers handle this scale well. On FDM, Prusa's miniature test found that figures designed for FDM – bulkier, with pedestals – print far better than models sculpted for resin.

For more ideas in the same family, see our guides to [3D printed toys](/blog/3d-printed-toys/) and the articulated [3D printed dragon](/blog/3d-printed-dragon/).

## Resin vs FDM for action figures

| | Resin (SLA, MSLA, DLP) | FDM (filament) |
|---|---|---|
| Surface detail | Very fine; layer lines hard to see | Visible layer lines; finer with a small nozzle |
| Strength under play | Standard resin can be brittle; tough resins help | PLA and PETG take knocks better |
| Size | Build plates are usually small | Larger figures in one piece |
| Post-processing | Wash, cure, remove supports – always with gloves | Remove supports, optional sanding |
| Workspace | Ventilation, gloves, no resin down the sink | Normal room ventilation |
| Best for | Miniatures, faces, busts, display pieces | Poseable figures, print-in-place, large statues |

Prusa is frank about the gap: in its 0.25 mm nozzle miniature tests it says the quality is not on a par with SLA machines and the results are not directly comparable, but it still calls FDM results convincing at figure scale.

Resin brings extra handling. Formlabs advises wearing gloves whenever you handle liquid resin or unwashed parts, washing skin that touches uncured resin with soap and water, and never pouring resin down the sink. Elegoo's beginner guide describes washing prints in isopropyl alcohol or a resin cleaner for 2–5 minutes, then post-curing under UV light, and recommends at least two drain holes near the bottom of any hollowed model. Elegoo also suggests orienting the most detailed surface upwards, away from the supports.

**Tip:** if you want to play with your figures, choose FDM. If you want to paint display pieces with fine faces, resin is worth the extra steps.

## Materials for figures

- **PLA** – easy to print, holds sharp detail and is the default in most figure designs. It is stiff and can snap at thin joints or pegs under repeated bending.
- **PETG** – less brittle and slightly flexible, so it suits joints, thin limbs, weapons and accessories. It strings more than PLA, which matters on small, spiky models.
- **ASA** – Prusa's miniature article reports really good results with ASA: little stringing and good detail. ASA can be smoothed with acetone vapour; Prusa warns the timing takes trial and error.
- **TPU** – useful for flexible parts such as capes, hair or tyres on vehicles, but too soft for load-bearing joints.
- **Standard resin** – sharpest detail, best for statues and miniatures that are not handled much.
- **Tough or ABS-like resin** – resin makers offer tougher formulas for parts that need to flex or take impacts, such as thin weapons and wrists.

**Filament colour matters if you will not paint.** Prusa notes that white PLA hides layer lines best, black shows more detail but stronger layer lines, and grey is a compromise.

## Settings for small detail: nozzle, layer height and speed

**Nozzle size.** A 0.25 mm nozzle gives more precision in X and Y than the standard 0.4 mm one. Prusa's nozzle guide says the overall quality gain on miniatures is modest, but supports printed with a 0.25 mm nozzle are easy to remove and leave nearly invisible marks. The costs are much longer print times, a higher risk of clogs and no abrasive or particle-filled filaments.

**Layer height.** Prusa recommends 0.07 or 0.1 mm layers for small figures with a 0.25 mm nozzle. As a general rule, layer height should not exceed 80% of the nozzle diameter. Nozzle size controls horizontal detail; layer height controls detail on slanted and vertical surfaces such as faces and curved armour.

**Speed, temperature and flow.** For miniatures, Prusa suggests printing slower, lowering the nozzle temperature by about 5 °C and trying an extrusion multiplier of 0.9 instead of 1.0 if you see over-extrusion. Printing two figures side by side gives each tiny layer time to cool.

**Bed adhesion.** Small feet and bases have little contact area. Prusa recommends a brim to keep tiny models from detaching.

**Tip:** for a full-size poseable figure (rather than a miniature), a standard 0.4 mm nozzle with your slicer's fine or detail profile is usually enough; switch to a 0.25 mm nozzle for heads, hands and small accessories.

## Supports: tree supports and orientation

Figures have arms, chins, capes and weapons that hang in the air, so most need supports. Bambu Lab's support guide recommends tree or hybrid supports for objects with complex shapes where most overhangs are small, non-planar surfaces – a good description of a figure. It says tree supports use less material and time while keeping similar surface quality, and that normal supports give a better surface on large, flat overhangs.

Practical rules for figures:

1. **Print parts separately and flat when the design allows.** Fewer overhangs means fewer support marks.
2. **Put support contact on hidden surfaces** – the back, the underside of arms, inside a cape.
3. **Keep supports out of joints.** A support stuck inside a socket or hinge can jam it. Use support blockers, or paint supports only where needed – see our guide to [manual supports in Bambu Studio](/blog/bambu-studio-manual-supports/).
4. **Use the right gap.** Bambu Lab suggests a top Z distance of about 0.2 mm when the support interface is printed in the same filament as the model; a bigger gap is easier to remove but leaves a rougher underside.
5. **Cut, do not pull.** Snip supports with flush cutters or a hobby knife and sand the marks; pulling can snap a thin wrist or blade.

## Joints, tolerances and print-in-place

Every moving joint needs a clearance – a small gap between the moving surfaces. Designers choose it for typical printers, so:

- **Do not rescale print-in-place figures much.** Scaling a model scales its gaps too. Shrink it and the joints may fuse; enlarge it and they get loose.
- **Print the designer's test piece** if one is included. Many articulated designs ship a small hinge or clearance test that shows whether your printer and settings work before you commit hours to the full figure.
- **Calibrate first.** Over-extrusion and elephant's foot on the first layer are the usual causes of fused joints. Check flow and first-layer squish before printing articulated models.
- **Free fused joints gently.** Flex each limb a little at a time, starting with the largest joints. Forcing a stuck joint snaps it.
- **Tighten loose ball joints** with a thin coat of clear varnish on the ball, left to dry before reassembly, or reprint the part with slightly less clearance if the designer offers a tighter version.
- **Loosen tight snap-fits** by sanding the peg slightly rather than forcing it.

## Assembly

Multi-part figures and statues go together in a set order:

1. Dry-fit all parts first and tape them together to check the fit, as Prusa's post-processing guide suggests.
2. Paint parts separately before final assembly when possible; it saves masking.
3. Glue rigid joints with cyanoacrylate (superglue) and an activator, which Prusa uses for its painted props.
4. Reinforce thin or stressed parts – ankles, swords, a statue's raised arm – with a metal pin or piece of wire in a drilled hole.
5. Use small magnets for swappable heads, hands or weapons if the design includes pockets for them.

## Sanding, priming and painting

Painting turns a plain print into a collectible. A sequence based on the Formlabs and Prusa guides:

1. **Remove supports** and trim nubs with a hobby knife.
2. **Sand** – Formlabs starts at 220 or 320 grit and finishes at 400 or 600; Prusa uses P100 for rough work and filler, then P400 before the base coat. Go gently on faces and fine detail.
3. **Clean** – wash off dust with water and a soft brush and let the part dry fully.
4. **Prime** – spray thin coats from about 15–20 cm. A filler primer hides layer lines on FDM prints but can blur fine detail, so use it lightly on small figures.
5. **Base coat and details** – thin acrylic paints in several coats; use a fine brush for faces and edges. Washes (thinned dark paint) settle in recesses, and drybrushing picks out raised edges.
6. **Seal** – finish with a matte, satin or gloss clear coat. Formlabs suggests letting paint harden for at least a week before heavy handling.

Keep paint out of joints: it adds thickness and can lock a hinge.

## Where to find action figure models

The large model libraries all have action figure sections and search filters:

- **Printables** – Prusa's model library, with tags for action figures and articulated models.
- **MakerWorld** – Bambu Lab's library; many models include ready-made print profiles.
- **Thingiverse** – one of the oldest libraries, with a large archive of free models.

Before printing, open the file in our free [STL viewer](/stl-viewer/) to check scale, part count and how the joints are modelled, and read the designer's notes for recommended material, nozzle and support settings. For more project ideas beyond figures, see [what to 3D print](/blog/what-to-3d-print/).

## Licences and copyright for printed figures

Two separate questions apply to every figure you print: the licence on the file, and who owns the character.

**The file's licence.** Printables' terms say uploaders choose a licence for each model from the options offered, such as Creative Commons, and that other users may use the model under that licence. Creative Commons licences combine four elements: BY (credit the creator), SA (share changes under the same terms), NC (non-commercial use only unless the creator agrees) and ND (no modified versions without permission). A figure under CC BY-NC can be printed for yourself, but you need the designer's permission to sell prints. MakerWorld offers a separate commercial licence programme, and its FAQ says creators may sell commercial licences only for their own original models.

**The character.** Characters from films, games, comics and toy lines are protected by copyright and trademarks that belong to their owners. A free file of a famous character does not give you rights to that character, and the uploader cannot grant rights they do not have; Printables' terms make uploaders responsible for not infringing third-party intellectual property. In general, printing fan art for your own shelf is treated very differently from selling it, and selling figures of trademarked characters without a licence can lead to takedowns or legal claims. Rules differ between countries – this is general information, not legal advice.

**Safest options to sell:** original characters you designed yourself, or files whose designer explicitly sells a commercial licence.

## Checklist: print your first action figure

1. Choose a figure designed for your printer type (FDM or resin) and check its licence.
2. Open the file in a viewer and check size; do not rescale print-in-place joints much.
3. Print the designer's clearance or joint test if there is one.
4. Calibrate flow and the first layer to avoid fused joints.
5. Pick the material: PLA for display, PETG for joints that flex, resin for fine detail.
6. Set a fine layer height (0.07–0.1 mm for small figures on a 0.25 mm nozzle) and slow down for small parts.
7. Use tree supports, keep them out of joints and add a brim for small feet.
8. Free joints gently, dry-fit, then glue and pin rigid parts.
9. Sand, prime in thin coats, paint and seal; with resin, wear gloves, wash and cure.

## Verdict

3D printed action figures are one of the most rewarding things to print. For a poseable figure you will actually play with, an FDM printer and a print-in-place or snap-fit design in PLA or PETG is the easiest route; a 0.25 mm nozzle and fine layers lift the detail on heads and hands. For small display figures, miniatures and busts you plan to paint, resin gives sharper detail at the cost of gloves, washing and curing. Whatever you print, check the file's licence and keep figures of trademarked characters for personal use unless you have permission to sell them.
