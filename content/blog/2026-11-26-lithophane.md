---
title: Lithophane 3D print – how to make and print a photo lithophane
seoTitle: Lithophane 3D Print – How to Make a Photo Lithophane
description: "How to make a lithophane 3D print: choosing and preparing the photo, thickness and size, the best slicer settings, filament, orientation, lighting and common fixes."
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/923d89bc-5589-48de-8827-74c36266d906/output.png
imageAlt: "Illustration of a white printed lithophane panel glowing on a wooden stand in front of a warm LED, beside a curved lithophane lamp shade and an unlit ridged panel on a table"
category: Ideas
summary:
  - A lithophane is a thin panel whose thickness follows the brightness of a photo – thick areas block light and look dark, thin areas glow – so the picture appears when it is lit from behind.
  - The usual recipe is white PLA, 100% infill, fine layers of about 0.12–0.16 mm and printing the panel standing upright.
  - Photo choice matters as much as settings – a bright, high-contrast image with a clear subject gives a far better 3D printed lithophane than a dark or busy one.
faq:
  - q: How do you make a lithophane 3D print?
    a: Turn a photo into a lithophane STL with a lithophane maker, set the width and the minimum and maximum thickness, then slice it with 100% infill and fine layers and print it standing upright in white PLA. Hold the finished panel in front of a light to see the picture.
  - q: What is the best filament for a 3D printed lithophane?
    a: Plain white PLA is the standard choice because it lets light through evenly and shows the widest range of tones. Silk, translucent and coloured filaments change the look – some lose contrast – so print a small test before committing to a large lithophane.
  - q: Should a lithophane be printed flat or vertical?
    a: Most guides recommend printing it vertically, standing on its edge. The thickness changes are then formed by the nozzle path within each layer, which gives smoother tones than stacking very thin layers. Add a brim or a wider base so the tall, thin panel stays put.
  - q: How thick should a lithophane be?
    a: A common starting point is a minimum of about 0.8 mm for the brightest areas and a maximum of about 3 mm for the darkest. Thinner minimums make highlights brighter but more fragile; a thicker maximum deepens shadows but needs a brighter light behind it.
sources:
  - name: Elegoo – How to 3D print your own lithophane
    url: https://www.elegoo.com/blogs/3d-printer-user-guide/how-to-3d-print-your-own-lithophane
  - name: Instructables – How to 3D print a photo, lithophanes 101
    url: https://www.instructables.com/How-to-3D-Print-a-Photo-Lithophanes-101/
  - name: QIDI – How lithophanes work, technical guide
    url: https://qidi3d.com/blogs/print-lab/3d-printed-lithophanes-technical-guide
  - name: Sovol – How to 3D print a lithophane
    url: https://www.sovol3d.com/blogs/news/how-to-3d-print-a-lithophane-a-beginners-guide-to-turning-photos-into-light-art
  - name: University of Michigan Library – 3D printed lithophane art
    url: https://blogs.lib.umich.edu/lab-notes/3d-printed-lithophane-art
  - name: Core Electronics – 3D print lithophanes
    url: https://core-electronics.com.au/guides/3d-print-lithophanes/
  - name: Bambu Lab forum – Printing lithophanes flat or vertical
    url: https://forum.bambulab.com/t/printing-lithophanes-flat-or-vertical/84574
tools: [lithophane-maker, jpg-to-stl, image-to-stl]
---
**A lithophane 3D print is a thin panel whose thickness follows the brightness of a photo – the thick parts block light and look dark, the thin parts let light through and glow – so the picture appears in detail when you hold it up to a lamp.** Lithophanes were first made in porcelain in the 19th century; today any filament printer can make one from a phone photo in an hour or two. They make great gifts, night lights and lamp shades. This guide walks through the whole process: choosing and preparing the photo, turning it into an STL with our free [lithophane maker](/lithophane-maker/), the slicer settings that give smooth tones, filament and orientation, lighting, and how to fix common problems. Settings are drawn from printer makers' guides, checked November 2026.

## Lithophane 3D print at a glance

| Setting | Typical value | Why |
|---|---|---|
| Filament | White PLA | Even light transmission, widest tonal range |
| Infill | 100% | Infill patterns would show as shadows |
| Layer height | 0.12–0.16 mm | Smoother tones and finer detail |
| Orientation | Standing upright (vertical) | Smoother gradients, no visible stair-steps |
| Minimum thickness | About 0.8 mm | Bright highlights without being too fragile |
| Maximum thickness | About 3 mm | Deep shadows with a normal LED behind |
| Width | 80–150 mm for a first print | Enough detail without long print times |
| Speed | Moderate, slower outer walls | Clean edges and fewer blobs |
| Light | LED, behind the panel | Bright and cool – avoid hot bulbs near PLA |

## How a lithophane works

A lithophane is a height map of a photo. Each pixel's brightness is turned into a thickness: dark pixels become thick plastic, bright pixels become thin plastic. Unlit, the panel looks like a white relief with no obvious picture. When light shines through from behind, the thin areas glow and the thick ones stay dark, and the photo appears.

**Why it matters:** because the effect depends on light passing through the plastic, filament colour, infill and thickness range matter more than they do for ordinary prints.

## Step 1: choose the right photo

The best lithophanes start with the right image:

- **High contrast** – a clear difference between light and dark areas.
- **A clear subject** – one or two faces, a pet, a building or a landscape with a strong outline.
- **Good lighting** – evenly lit faces without deep shadows that turn into solid blocks.
- **Not too busy** – fine textures such as grass or crowds turn into noise at small sizes.
- **Sharp focus** – blur is magnified when backlit.

**Tip:** crop tightly to the subject and bump contrast slightly in a photo editor before converting. Converting to greyscale first helps you see how the tones will look.

## Step 2: turn the photo into a lithophane STL

Open our [lithophane maker](/lithophane-maker/), choose your JPG or PNG and adjust:

1. **Width** – the panel's width in millimetres. Our tool starts at 100 mm, a good size for a first print.
2. **Base (minimum thickness)** – the thinnest part of the panel, for the brightest pixels. The default is 0.8 mm.
3. **Extra thickness** – how much is added for the darkest pixels. The default adds 2.4 mm, for a maximum of 3.2 mm.
4. **Dark = thick** – keep this on for a normal lithophane; turn it off for a negative effect.
5. **Detail (resolution)** – higher values keep more detail but make larger files.

The preview shows the relief and a backlit simulation as you change settings, and the STL downloads straight from your browser – the photo is never uploaded. For raised reliefs and logos instead of lithophanes, use the [image to STL converter](/image-to-stl/).

**Why it matters:** the thickness range controls contrast. A wider range gives deeper shadows; a thinner base gives brighter highlights but a more fragile panel.

## Step 3: slicer settings for a lithophane

Import the STL into your slicer and set:

- **Infill: 100%.** With lower infill, the pattern shows through as lines and shadows.
- **Layer height: 0.12–0.16 mm.** Fine layers improve tonal steps. Our tool's FAQ gives the same range.
- **Wall count:** enough walls that the thinnest areas print as solid perimeters; many slicers handle this automatically at 100% infill.
- **Speed:** moderate; slow the outer walls for a clean surface.
- **Cooling:** normal PLA cooling.
- **Seam:** set the seam to the back or an edge so it does not cross the picture.
- **Brim:** add a brim, or use a lithophane with a thicker frame and base, so the tall panel does not wobble.

**Tip:** run a small test – a 50 mm wide version of the same photo – before printing a large lithophane. It shows within half an hour whether the contrast and thickness range work.

## Step 4: orientation – vertical vs flat

Most guides, including printer makers' tutorials, recommend printing lithophanes **standing upright**. In this orientation, the thickness changes are made by the nozzle moving in and out within each layer, which gives smooth gradients. Printed flat, the thickness is built from stacked layers, so tones step in 0.12–0.2 mm jumps and can look banded.

Flat printing is faster and more stable, and some people prefer it for small or very wide lithophanes. If you print flat, use the finest layer height your printer handles well.

**Why it matters:** a tall thin panel can wobble as the nozzle moves. A frame around the picture, a wider foot or a brim keeps it stable.

## Best filament for a 3D printed lithophane

- **White PLA** – the standard. It diffuses light evenly and gives the widest range of tones. See our [PLA filament guide](/blog/pla-filament/) for settings.
- **Natural or translucent PLA** – glows brightly but loses contrast; the picture can look washed out.
- **Silk PLA** – the sheen can create hot spots; test first.
- **Coloured filaments** – tint the picture; light colours work, dark colours block too much light.
- **PETG** – works, but it is more translucent and strings more.

**Tip:** different white filaments transmit light differently. Once you find a white that works, note it and stick with it for consistent results.

## Step 5: lighting and display

- **Use LED light.** LEDs are bright and stay cool. Avoid hot incandescent or halogen bulbs close to PLA, which softens at relatively low temperatures.
- **Warm or neutral white** suits portraits; cool white suits landscapes and architecture.
- **Diffuse the light.** A small gap between the light and the panel, or a diffuser sheet, avoids a bright spot in the middle.
- **Display options:** window frames (daylight works well), light boxes, desk stands with an LED strip, night lights, and curved or cylindrical lamp shades.

## Shapes and project ideas

- **Flat panels** in a frame or stand – the simplest and most common.
- **Curved panels** that stand on their own and spread light evenly.
- **Cylinder lamps** with a photo all the way round.
- **Heart, round and keepsake shapes** for gifts.
- **Moon lamps** – spheres printed with a moon surface height map work on the same principle.
- **Colour lithophanes** – advanced projects that layer coloured filaments behind a white lithophane; they need several filaments and specialised tools.

Our lithophane maker makes flat panels; for curved and cylindrical shapes, use a slicer or CAD tool that can bend a panel, or download ready-made models. For more project ideas, see [what to 3D print](/blog/what-to-3d-print/).

## Troubleshooting lithophane prints

| Problem | Likely cause | Fix |
|---|---|---|
| Picture looks flat and grey | Thickness range too small or low-contrast photo | Increase extra thickness; edit photo contrast |
| Highlights look dark | Base too thick | Lower the base towards 0.8 mm |
| Visible stripes or bands | Printed flat with coarse layers | Print vertically or use finer layers |
| Lines or patterns in the picture | Infill below 100% | Set 100% infill |
| Panel wobbles or fails part-way | Tall, thin panel without support | Add a brim, a frame or a wider base |
| Holes or gaps in bright areas | Base too thin for the nozzle | Raise the base slightly |
| Blobs and zits on the surface | Seam on the picture, wet filament | Move the seam, dry the filament |

## Checklist for your first lithophane

1. Pick a bright, high-contrast photo with a clear subject and crop it.
2. Make the STL in the [lithophane maker](/lithophane-maker/) at about 100 mm wide with the default thickness.
3. Slice with white PLA, 100% infill and 0.12–0.16 mm layers.
4. Stand it upright with a brim and the seam on an edge.
5. Print a small test first, then the full-size panel.
6. Light it from behind with an LED and adjust the thickness range if needed.

## Verdict

A good lithophane 3D print comes down to three things: a bright, high-contrast photo, a sensible thickness range (about 0.8 mm to 3 mm) and the right print settings – white PLA, 100% infill, fine layers and an upright panel. Start with our free [lithophane maker](/lithophane-maker/), print a small test, and you will have a glowing photo panel ready to frame or light up the same day.
