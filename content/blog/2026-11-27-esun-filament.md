---
title: eSUN filament – product lines, print temperatures and how to choose
seoTitle: eSUN Filament – Product Lines, Temperatures and Tips
description: eSUN filament guide – PLA+, PLA-Basic, PLA+HS, PETG, ABS+, ASA+, TPU-95A and specialty lines, eSUN's own print and drying settings, refills and eBOX dryers.
date: 2026-11-27
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/bf340df9-cd34-4af8-92fc-fb8ad8d3d8a5/output.png
imageAlt: "Illustration of a spoolless filament coil being clipped onto a reusable grey spool, with a drying box and vacuum-bagged spools behind"
category: Filament and materials
summary:
  - eSUN is a Chinese 3D printing material brand established in 2002, with production bases in Xiaogan, Hubei and Ho Chi Minh City, Vietnam.
  - eSUN's own product pages list PLA+ and PLA-Basic at 210–230 °C with a 45–60 °C bed, ABS+ at 230–270 °C with a 95–110 °C bed and ASA+ at 250–280 °C.
  - Besides normal spools, eSUN sells spoolless "Refilament" coils for reusable spools and eBOX storage and drying boxes.
faq:
  - q: Is eSUN filament good?
    a: eSUN is one of the long-established filament brands and publishes print settings, drying temperatures and data sheets for each grade. We have not tested it ourselves, so judge it like any brand – read the data sheet for the exact grade, then run a temperature tower and a test print on your printer.
  - q: What is the difference between eSUN PLA+ and PLA-Basic?
    a: Both use the same 210–230 °C nozzle and 45–60 °C bed range on eSUN's pages. PLA+ is the tougher grade – its published XY tensile strength is about 70 MPa against about 64 MPa for PLA-Basic – while PLA-Basic is pitched as the low-cost choice for practice, prototypes and test models.
  - q: Is eSUN the same as Bambu filament?
    a: No. eSUN and Bambu Lab are separate companies and sell filament under their own brands. eSUN filament is a third-party filament that you run on a Bambu Lab printer with a generic profile for the material, tuned to eSUN's published temperatures.
  - q: What temperature should I print eSUN PLA+ at?
    a: eSUN's PLA+ product page gives 210–230 °C at the nozzle, a 45–60 °C heated bed and 100% fan. Start around 215 °C, raise it for fast printing and lower it in 5 °C steps if you see stringing.
sources:
  - name: eSUN store – About us
    url: https://esun3dstore.com/pages/about-us
  - name: eSUN – PLA+ product page
    url: https://www.esun3d.com/pla-pro-product
  - name: eSUN – PLA-Basic product page
    url: https://www.esun3d.com/pla-basic-product
  - name: eSUN – ePLA+HS technical data sheet
    url: https://www.esun3d.com/uploads/ePLA+HS-Filament-TDS.pdf
  - name: eSUN – PETG-Basic technical data sheet
    url: https://www.esun3d.com/uploads/PETG-Basic-TDS21.pdf
  - name: eSUN – ePETG-Lite technical data sheet
    url: https://esun3d.com/uploads/ePETG-LITE_TDS-V1-.pdf
  - name: eSUN – ABS+ technical data sheet
    url: https://www.esun3d.com/uploads/eSUN_ABS+-Filament_TDS_V4.01.pdf
  - name: eSUN – ASA+ product page
    url: https://www.esun3d.com/asa-pro-product/
  - name: eSUN – eTPU-95A product page
    url: https://www.esun3d.com/etpu-95a-product/
  - name: eSUN – ePLA-Matte Refilament, PLA+ Refilament, eSilk PLA and eTwinkling product pages
    url: https://www.esun3d.com/epla-matte-refill-product/
  - name: eSUN – eBOX Lite and eBOX Pro product pages
    url: https://esun3d.com/ebox-pro-product/
tools: [stl-viewer, 3mf-viewer, 3d-viewer]
---
**eSUN filament is the 3D printing filament range of eSUN, a Chinese materials brand established in 2002, best known for its PLA+ but also covering PLA-Basic, high-speed PLA, PETG, ABS+, ASA+, TPU, nylon and many decorative PLA grades.** The brand also makes resins, spoolless refills and filament storage and drying boxes. Because eSUN sells dozens of variants with similar names, the hard part is picking the right one and setting the right temperature. This guide explains the main eSUN filament lines, the print and drying settings eSUN publishes for them, how refills and the eBOX work, and which grade suits which job. All numbers come from eSUN's own product pages, technical data sheets (TDS) and store, checked November 2026. We do not rate, rank or price individual spools, and we have not tested them.

## eSUN filament at a glance

| eSUN filament | Nozzle (°C) | Bed (°C) | Fan | Best for |
|---|---|---|---|---|
| PLA+ | 210–230 | 45–60 | 100% | Everyday parts that need a bit more toughness |
| PLA-Basic | 210–230 | 45–60 | 100% | Low-cost prototypes, test prints, practice |
| ePLA+HS (high speed) | 210–230 | 45–60 | 100% | Fast printers, 50–350 mm/s on the TDS |
| eSilk PLA | 190–230 | 45–60 | 100% | Shiny decorative prints |
| ePLA-Matte | 190–230 | 45–60 | 100% | Matte look that hides layer lines |
| eTwinkling | 200–230 | 45–60 | 100% | Glitter effect |
| PETG-Basic | 250 ±5 | 70 | 100% | Tougher functional parts |
| ePETG-Lite | 240–270 | 75–90 | 50–100% | Economy PETG |
| ABS+ | 230–270 | 95–110 | 0% | Heat-resistant parts, enclosed printer |
| ASA+ | 250–280 | 90–110 | 0–30% | Outdoor parts, enclosed printer |
| eTPU-95A | 220–250 | 45–60 | 100% | Flexible parts, under 100 mm/s |

Values are taken from each grade's product page or TDS. Where eSUN lists two values (for example in a main table and a "recommended settings" table), we give the main range.

## Who makes eSUN filament?

eSUN's official store says the brand was established in 2002, was founded by Shenzhen Esun Industrial Co., Ltd., and has production bases in Xiaogan, Hubei, China and Ho Chi Minh City, Vietnam. It says the company has production technology for PLA, PCL, ABS, PETG and other 3D printing materials, and that it was listed on China's New Third Board in April 2016. eSUN sells through its own store and through retailers and marketplaces in many countries.

**Tip:** the eSUN website and store use slightly different product names for the same family – for example "PLA+HS" and "ePLA+HS", or "ASA" and "ASA+". Match the grade on the spool label to the data sheet before you copy settings.

## eSUN PLA+ – the best-known grade

PLA+ is eSUN's flagship and the spool most people mean when they say "eSUN filament". eSUN's product page lists:

- **Nozzle:** 210–230 °C. **Bed:** 45–60 °C (a heated bed is listed as required). **Fan:** 100%.
- **Speed:** the page lists a high-speed parameter below 300 mm/s, while marketing text on the same page mentions up to 350 mm/s.
- **Drying:** 50 °C for 8–12 hours.
- **Heat distortion temperature:** about 54 °C, like other PLA.
- **Tensile strength:** about 70 MPa in the XY direction and about 36 MPa in Z, measured on eSUN's test specimens.

eSUN describes PLA+ as tougher than standard PLA and claims more than 40 colours. "PLA+" is not a standard material name – each maker modifies PLA differently – so read our [PLA vs PLA+ comparison](/blog/pla-vs-pla-plus/) for what the label usually means.

**Tip:** PLA+ still softens at about the same temperature as normal PLA. It is not a replacement for PETG or ASA in a hot car or in direct sun.

## eSUN PLA-Basic and high-speed PLA

**PLA-Basic** shares the same 210–230 °C nozzle and 45–60 °C bed range as PLA+ and the same 50 °C, 8–12 hour drying advice. eSUN positions it as a beginner-friendly, low-cost PLA for practice, prototypes and test models, with speeds of 250–300 mm/s. Its published XY tensile strength (about 64 MPa) is a little lower than PLA+, and its melt flow index is higher (6.48 against 3.7 g/10 min), which means it flows more easily.

**ePLA+HS** is the grade made for fast printers. Its TDS gives 210–230 °C, a 45–60 °C bed and a printing speed of 50–350 mm/s, and describes it as tougher and less brittle than ordinary PLA. If you run a modern CoreXY printer at high speed, this is the grade the data sheet is written for.

**Which one?** For most users on a fast printer, the difference between PLA+, PLA-Basic and PLA+HS is smaller than the difference a good temperature calibration makes. Choose PLA-Basic for drafts and bulk prints, PLA+ when parts take knocks, and PLA+HS when you print at the top of your printer's speed range. Our [PLA filament guide](/blog/pla-filament/) covers PLA in general.

## eSUN decorative PLA: silk, matte, glitter and more

eSUN sells a long list of PLA variants for looks rather than strength. The product pages we checked give:

| Grade | Nozzle (°C) | Bed (°C) | Speed | Note from eSUN |
|---|---|---|---|---|
| eSilk PLA | 190–230 | 45–60 | under 200 mm/s | Silk lustre; slow outer walls for more gloss |
| ePLA-Matte | 190–230 (215 recommended) | 45–60 | 40–100 mm/s | Keep extruder tension looser |
| eTwinkling | 200–230 (210 recommended) | 45–60 | 40–100 mm/s | Fine glitter powder; avoid sharp bends in the feed path |

Other decorative lines on eSUN's site include rainbow and magic (multi-colour) silks, Mystic Silk, Silk Candy, marble, wood, luminous (glow-in-the-dark), metal-filled PLA and colour-change grades. Each has its own data sheet, and settings differ slightly – wood and metal-filled grades in particular – so check the sheet for the exact one you bought.

**Tip:** silk and matte PLA show their effect best on outer walls. Print a small test cube at two speeds and compare – slower outer walls usually look glossier on silk.

## eSUN PETG

eSUN publishes several PETG grades. The **PETG-Basic** TDS recommends 250 ±5 °C at the nozzle, a 70 °C bed, 100% fan, under 250 mm/s, and drying at 60 °C. Its heat distortion temperature is listed at about 74 °C (XY) – noticeably higher than PLA's – which is why PETG is the usual step up for functional parts.

**ePETG-Lite** is eSUN's economy PETG. Its TDS gives 240–270 °C, a 75–90 °C bed, 40–200 mm/s with a maximum volumetric flow of 4 mm³/s, and 50–100% fan, based on test settings on a Bambu Lab P1S with a 0.4 mm nozzle. eSUN also lists PETG with carbon fibre, high-speed PETG, matte PETG and silk PETG.

**Tip:** PETG sticks very strongly to smooth PEI. Use a textured PEI sheet or a thin layer of glue stick as a release agent. More in our PETG filament guide.

## eSUN ABS+ and ASA+

**ABS+** – eSUN's TDS gives 230–270 °C at the nozzle, a 95–110 °C bed, 40–100 mm/s and 0% part-cooling fan. It warns that ABS+ shrinks a lot and recommends keeping the print warm in a printer with a closed chamber. Heat distortion temperature is about 73 °C.

**ASA+** – eSUN's product page gives 250–280 °C, a 90–110 °C bed, under 250 mm/s and 0–30% fan, and recommends enclosed-chamber printing. eSUN lists a heat distortion temperature of 96.4 °C and claims UV and weather resistance against fading, yellowing and brittleness in long-term sun.

Both materials release more fumes and smell than PLA, so print them in a ventilated room or a vented or filtered enclosure. If you print outdoor parts, ASA is the better choice of the two – see our ASA filament guide.

## eSUN TPU and engineering filaments

**eTPU-95A** is eSUN's main flexible filament (Shore 95A, 1.75 mm). The product page lists 220–250 °C, a 45–60 °C bed, under 100 mm/s and 100% fan. It gives drying at 55 °C for more than 4 hours in one place and 60 °C for more than 8 hours in another – use the longer setting if the spool has been open for a while. eSUN also sells softer TPE-83A and lightweight foaming TPU. Flexible filament prints best through a direct-drive extruder with slow, even feeding; our TPU filament guide explains the basics.

For engineering use, eSUN lists nylon (PA6, PA12 and carbon-fibre filled versions), carbon-fibre PLA and ABS, PC, and dissolvable support materials such as PVA. These need hotter nozzles, hardened nozzles for fibre-filled grades and careful drying. Check the TDS for each one before you buy, because many need an enclosed printer and 260–300 °C at the nozzle.

## eSUN refills, spools and packaging

eSUN sells some grades as **Refilament** – spoolless coils of filament. The PLA+ Refilament and ePLA-Matte Refilament product pages describe them as having no spool and as made to be used with a reusable spool. eSUN's own reusable spool is the **eSpool**; one retailer describes the eSpool+ as made of PC/ABS and designed for eSUN 1 kg spoolless filament. Refills cut plastic waste and storage space if you print a lot.

eSUN's store says its filament ships in a sealed vacuum bag with a desiccant bag. It also describes "very tight diameter tolerance", but the product pages we checked did not publish one consistent tolerance figure, so we do not quote a number here. Diameters on eSUN's eBOX page are listed as 1.75 mm, 2.85 mm and 3.0 mm; most current grades are sold in 1.75 mm.

**Tip:** if you load refills into an automatic multi-material unit, check that your reusable spool fits it and that the coil is mounted with the filament end clipped, so the winding does not loosen.

## Drying and storing eSUN filament

eSUN's drying advice varies by material:

- **PLA+ and PLA-Basic:** 50 °C for 8–12 hours.
- **PETG-Basic:** 60 °C.
- **eTPU-95A:** 55–60 °C for 4–8 hours or more.

For nylon, PC and TPU, eSUN sells the **eBOX** range. The eBOX Lite is a storage box that keeps a 0.5 kg or 1 kg spool warm and dry while you print; eSUN says it is not meant for drying high-temperature or very moisture-absorbing materials such as nylon or PEEK. The eBOX Pro reaches up to 70 °C, runs for up to 99 hours, shows chamber temperature and humidity on a touchscreen and suggests drying settings for materials such as PA, PA-CF, PC and TPU.

**Tip:** signs of wet filament are popping or hissing at the nozzle, extra stringing, rough surfaces and brittle strands. Our guide on [how to dry filament](/blog/how-to-dry-filament/) covers methods and temperatures.

## How to choose the right eSUN filament – checklist

1. **Decide what the part must survive.** Indoor models and prototypes: PLA-Basic or PLA+. Knocks and clips: PLA+ or PETG. Heat near 70 °C: PETG or ABS+. Sun and weather: ASA+. Bending: eTPU-95A.
2. **Check your printer.** ABS+ and ASA+ need a heated bed of about 100 °C and, according to eSUN, a closed chamber. TPU likes direct drive. Fibre-filled grades need a hardened nozzle.
3. **Match the speed.** On a fast printer, choose PLA+HS, PLA-Basic or high-speed PETG and use the high-speed temperatures from the data sheet.
4. **Read the exact data sheet.** Similar names (PLA+, PLA+HS, ePLA+HS) can have different ranges.
5. **Set up a profile.** Start from your slicer's generic profile for the material and change nozzle and bed temperature to eSUN's numbers.
6. **Print a temperature tower** and a small test part, then adjust in 5 °C steps.
7. **Dry and store.** Keep opened spools in a sealed box with desiccant and dry them at eSUN's temperature when quality drops.

Before printing a downloaded model, open it in an STL viewer (see the tools beside this article) to check its size and orientation.

## eSUN vs other filament brands

eSUN's main competitors in the same price class include SUNLU, Elegoo, Creality and the printer makers' own filament. The print temperatures for each material are broadly similar across brands, because they follow the base polymer; the differences are in additives, colour ranges, spool formats and published data. If you are comparing brands, see our guides to [SUNLU filament](/blog/sunlu-filament/) and [Elegoo filament](/blog/elegoo-filament/), which use the same structure as this page.

## Verdict

eSUN filament covers almost every common FDM material, from cheap PLA-Basic for drafts to ASA+, nylon and TPU for functional parts, and it publishes print and drying settings for each grade. For most people the sensible starting point is PLA+ or PLA-Basic at about 215 °C with a 50–60 °C bed, PETG at around 250 °C for tougher parts, and ASA+ in an enclosed printer for outdoor use. Always use the data sheet for the exact grade on your spool, calibrate on your own printer, and keep the filament dry.
