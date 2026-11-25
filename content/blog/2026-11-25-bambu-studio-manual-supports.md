---
title: How to add manual supports in Bambu Studio
seoTitle: How to Add Manual Supports in Bambu Studio
description: How to add manual supports in Bambu Studio – manual support types, the support painting tool, enforcers and blockers, and settings that decide where supports go.
date: 2026-11-25
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/8e2c80cd-d5aa-42e8-ae27-f8a2aa46af71/output.png
imageAlt: "Illustration of a laptop slicer view with green painted patches on a grey model's overhangs and thin supports under an arch, next to a finished orange print with supports being snapped off"
category: Files and slicers
summary:
  - In Bambu Studio, turn on Enable support and set Type to normal(manual) or tree(manual) so supports are generated only where you paint them.
  - The Supports Painting tool marks areas with the left mouse button to enforce supports and the right mouse button to block them.
  - With an auto support type, painted enforcers add supports on top of the automatic ones and painted blockers remove them.
faq:
  - q: How do you add manual supports in Bambu Studio?
    a: Turn on Enable support, choose normal(manual) or tree(manual) as the support type, select the object, open Supports Painting in the top toolbar and paint the areas that need support with the left mouse button. Slice to see the result.
  - q: What is the shortcut for support painting in Bambu Studio?
    a: Bambu Studio's shortcut list assigns the L key to the support painting tool. You can also click the Supports Painting icon in the top toolbar.
  - q: Why are my painted supports not generated in Bambu Studio?
    a: Supports are only built when Enable support is on. Also check that you painted with the enforce button (left mouse) and that the painted area is not on the bottom face touching the plate.
  - q: Can I block supports in one area but keep auto supports elsewhere?
    a: Yes. Keep an auto support type and paint the area with the right mouse button to block supports there, or add a Support Blocker shape from the right-click menu.
sources:
  - name: Bambu Lab Wiki – Support (Bambu Studio)
    url: https://wiki.bambulab.com/en/software/bambu-studio/support
  - name: Bambu Lab Wiki – Support painting
    url: https://wiki.bambulab.com/en/software/bambu-studio/support-painting
  - name: Bambu Lab Wiki – Support painting update
    url: https://wiki.bambulab.com/en/software/bambu-studio/support-painting-update
  - name: Bambu Lab Wiki – Support painting (Chinese)
    url: https://wiki.bambulab.com/zh/software/bambu-studio/support-painting
  - name: Bambu Studio source – PrintConfig.cpp (support options)
    url: https://github.com/bambulab/BambuStudio/blob/master/src/libslic3r/PrintConfig.cpp
  - name: Bambu Studio source – GUI_Factories.cpp (support enforcer and blocker)
    url: https://github.com/bambulab/BambuStudio/blob/master/src/slic3r/GUI/GUI_Factories.cpp
tools: [3mf-to-stl, stl-viewer, stl-to-3mf]
---
**To add manual supports in Bambu Studio, turn on Enable support, set the support Type to normal(manual) or tree(manual), then use the Supports Painting tool to paint the exact areas that need support.** Manual supports save filament, cut print time and keep support marks off surfaces you want clean. This guide covers both ways to control supports by hand – painting and support enforcer or blocker shapes – and the settings that decide what you get. Menu names are taken from Bambu Studio and the Bambu Lab Wiki; they can change between versions.

## Manual supports in Bambu Studio at a glance

| Goal | What to do |
|---|---|
| Supports only where I choose | Type = normal(manual) or tree(manual), then paint with the left mouse button |
| Auto supports plus a few extra | Keep an auto type, paint extra areas with the left mouse button |
| Auto supports except one area | Keep an auto type, paint the area with the right mouse button (block) |
| A box-shaped region with or without support | Right-click the object → Add support enforcer or Add support blocker |
| No supports resting on the model | Turn on On build plate only |

## Step 1: choose a manual support type

Open the **Support** tab of the process settings and tick **Enable support**. In **Type**, Bambu Studio offers:

- **normal(auto)** and **tree(auto)** – the slicer decides where supports go.
- **normal(manual)** and **tree(manual)** – only areas you mark as support enforcers get supports.

The Bambu Lab Wiki also describes a **hybrid(auto)** type in some versions. Pick **tree(manual)** for organic shapes such as figures, and **normal(manual)** for flat overhangs and bridges on mechanical parts.

**Tip:** in a manual type, nothing gets support until you paint it. If you slice without painting, the model prints with no supports at all.

## Step 2: open the Supports Painting tool

Select one object on the plate, then click **Supports Painting** in the top toolbar. Bambu Studio's shortcut list assigns the **L** key to it. The model turns grey, other objects are hidden while you paint, and painted support areas show in green.

Tick **Highlight overhang areas** to see the faces that would need support at the current threshold angle. This shows you where to paint.

## Step 3: paint where supports are needed

| Action | Result |
|---|---|
| Left mouse button | Enforce supports |
| Right mouse button | Block supports |
| Shift + left mouse button | Erase |
| Ctrl + mouse wheel | Pen size |
| Alt + mouse wheel | Section view, to paint inside the model |

Use **Erase all painting** to start again. Bambu Studio will not paint below the build plate.

## Brush types: Circle, Sphere, Fill and Gap fill

- **Circle** – a round brush that paints only the faces you can see.
- **Sphere** – like Circle, but paints every face inside the sphere, including hidden ones.
- **Fill** – paints a connected area from the face under the cursor and stops at sharp edges. Set the stopping point with **Smart fill angle**.
- **Gap fill** – finds small gaps left between painted areas and fills them. Set **Gap area** and press **Perform**.

**Tip:** tick **On overhangs only** before you paint large areas. The brush then marks only the overhanging faces, so you do not add support to walls by accident.

## Step 4: slice and check the preview

Slice the plate and switch to the preview. Check that supports appear under every painted area and nowhere else. If a painted overhang has no support, open the tool again, zoom in and repaint the edges – small unpainted gaps are common on curved surfaces.

Bambu Studio 1.10.0 and later can also paint supports on vertical surfaces, which helps with sideways features such as hooks.

## Support enforcer and blocker shapes

For large or regular regions, painting is slow. Right-click the object and choose **Add support enforcer** or **Add support blocker**. A shape appears as a part of the object. Move and scale it over the region, and Bambu Studio will add supports inside an enforcer or remove them inside a blocker.

**Why it matters:** shapes are quicker than painting for whole sections, such as one side of a box, and they are easy to move if you rotate the model.

## Settings that change manual supports

| Setting | What it does |
|---|---|
| Threshold angle | Overhangs below this angle get auto support; default 30°. Also drives the overhang highlight |
| On build plate only | Supports may stand only on the plate, never on the model |
| Top Z distance | Gap between support and model; affects how easily supports come off |
| Support/raft interface filament | Use a support material for the contact layers on multi-material printers |
| Style | Default, Grid, Snug, or Tree Slim, Tree Strong, Tree Hybrid, Tree Organic |

## Manual supports vs auto supports

Auto supports are faster to set up and safe for most prints. Manual supports are worth the time when the model is decorative, when you print many copies, or when auto supports cover a surface you need smooth. A common middle ground is to keep **tree(auto)** and block supports on a few cosmetic faces with the right mouse button.

## Checklist before you print

1. Enable support is on.
2. Type is normal(manual) or tree(manual), or auto with painting on top.
3. Every overhang in the highlight is painted (or deliberately left out).
4. The preview shows supports under each painted area.
5. On build plate only is set if supports must not touch the model.

## Verdict

Painting supports in Bambu Studio takes a few minutes and gives you full control: supports where the model needs them and nowhere else. Start with tree(manual) and On overhangs only, check the preview, and switch to enforcer or blocker shapes for large regions.

If your model arrives as a project from another slicer, extract the mesh with our [3MF to STL converter](/3mf-to-stl/) and check it in the [STL viewer](/stl-viewer/). For printer setup, see our [Bambu Lab A1](/printers/bambu-lab-a1/) and [Bambu Lab P1S](/printers/bambu-lab-p1s/) pages.
