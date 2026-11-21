---
title: How to 3D print a model from an AI 3D generator
seoTitle: How to 3D Print AI-Generated 3D Models (GLB to STL)
description: AI 3D generators usually export GLB. How to convert GLB to STL or 3MF, fix scale and orientation, check the mesh and get a clean print.
date: 2026-11-22
category: Files and slicers
summary:
  - Most AI 3D generators export GLB (glTF), which uses metres and Y-up axes.
  - Convert GLB to STL or 3MF, set the scale to millimetres and stand the model on its base.
  - AI meshes can be open or self-intersecting, so repair them in your slicer before printing.
faq:
  - q: Why is my AI model tiny in the slicer?
    a: glTF uses metres, while slicers read STL numbers as millimetres. A 0.1 m model becomes 0.1 mm. Choose “Metres → mm” in our converter’s Scale option, or scale by 1000 in the slicer.
  - q: Why is the model lying on its side?
    a: glTF treats Y as up; 3D printing formats treat Z as up. Our converter rotates the model automatically when converting GLB to STL or 3MF.
  - q: Do I lose the colours?
    a: STL keeps only geometry. 3MF can store colours, but texture-painted AI models need to be repainted in a multi-colour slicer such as Bambu Studio or OrcaSlicer.
tools: [glb-to-stl, glb-to-3mf, glb-viewer]
---
**To 3D print a model from an AI 3D generator, download it as GLB, convert it to STL or 3MF, fix the scale and orientation, then check it in your slicer.** AI tools such as Meshy, Tripo and Rodin focus on games and the web, so their default files need a few adjustments before they print well.

## Step by step

1. **Download GLB.** It is the most common export and packs geometry and textures into one file.
2. **Open it in a viewer.** Use our [GLB viewer](/glb-viewer/) to check the shape and dimensions.
3. **Convert.** Use [GLB to STL](/glb-to-stl/) or [GLB to 3MF](/glb-to-3mf/). Leave “Up axis” on Automatic so the model stands upright.
4. **Fix the scale.** If the size readout shows something like 0.2 × 0.3 × 0.4, the model is in metres: choose “Metres → mm”.
5. **Repair and slice.** Import into Bambu Studio, PrusaSlicer, OrcaSlicer or Cura and let the slicer repair the mesh if it reports errors. Add supports where needed.

## Common problems with AI meshes

| Problem | What you see | Fix |
|---|---|---|
| Open mesh / holes | Slicer warns about errors; missing walls | Use the slicer’s repair; in Blender, fill holes |
| Paper-thin parts | Hair, fingers or cloth disappear | Scale up or thicken in Blender |
| Floating pieces | Separate islands in the air | Delete them or add supports |
| Huge triangle count | Slicer is slow | Decimate in Blender before converting |

## Colours

STL is single-colour. If you want colour, export 3MF and paint or assign colours in a multi-colour slicer. Texture colours from the AI model are not transferred automatically to filament colours.
