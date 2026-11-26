---
title: Prusa Connect – what it is, supported printers and how to set it up
seoTitle: Prusa Connect Guide – Setup, Features and PrusaLink
description: Prusa Connect explained – what the free service does, which Prusa printers support it, setup step by step, cameras, notifications, PrusaLink and Connect Local.
date: 2026-11-26
image: https://assets.animx.ai/gen/a8600779-0fcc-4dd3-88c6-21688f0415da/ee569dd1-afd2-4754-a823-c6a35a53cbcc/output.png
imageAlt: "Illustration of three open-frame printers on a shelf linked by glowing network lines to a floating dashboard and a phone showing the same panel"
category: Setup and software
summary:
  - Prusa Connect is Prusa Research's free remote-management service for its printers – upload and start prints, watch progress and cameras, and manage several printers from a browser or the Prusa app.
  - Newer Prusa printers (MK4S, MK3.9, MK3.5, MINI+, XL and CORE One) connect directly over Ethernet or Wi-Fi; the MK3S+ and MK2.5S need a Raspberry Pi running PrusaLink.
  - PrusaLink is the local web interface on the printer itself, while Prusa Connect works from anywhere; Prusa also offers Connect Local, a self-hosted server for your own network, in public beta in November 2026.
faq:
  - q: What is Prusa Connect?
    a: Prusa Connect is a free web service from Prusa Research for controlling and monitoring Prusa 3D printers remotely. You can upload G-code, start, pause and stop prints, see progress and camera images, keep a print queue and manage several printers and users from one dashboard in a browser or the Prusa app.
  - q: Is Prusa Connect free?
    a: Yes. Prusa offers Prusa Connect free of charge with a Prusa Account. You only need a supported printer with a network connection.
  - q: What is the difference between Prusa Connect and PrusaLink?
    a: PrusaLink runs on the printer (or on a Raspberry Pi attached to older printers) and gives a local web interface that you open at the printer's IP address on your own network. Prusa Connect is a cloud service that works from anywhere and adds multi-printer management, teams, cameras and notifications. Newer printers run both.
  - q: Can I use Prusa Connect without the cloud?
    a: Yes, in two ways. PrusaLink gives local control on your own network without any cloud account. And Prusa Connect Local, in public beta as of November 2026, is a self-hosted server that you run on your own computer or Raspberry Pi so the Connect dashboard works without Prusa's cloud.
sources:
  - name: Prusa – Prusa Connect product page
    url: https://www.prusa3d.com/p/prusa-connect/
  - name: Prusa Knowledge Base – Prusa Connect and PrusaLink explained
    url: https://help.prusa3d.com/article/prusa-connect-and-prusalink-explained_302608
  - name: Prusa Knowledge Base – Prusa Connect product support
    url: https://help.prusa3d.com/product/prusa-connect
  - name: Prusa Knowledge Base – Adding the printer to Prusa Connect (MK4)
    url: https://help.prusa3d.com/guide/adding-the-printer-to-prusa-connect-mk4_417586
  - name: Prusa Knowledge Base – PrusaLink and Prusa Connect setup (MK3/S/+)
    url: https://help.prusa3d.com/guide/prusalink-and-prusa-connect-mk3s-mk3s_221744
  - name: Prusa Knowledge Base – PrusaLink and Prusa Connect with Raspberry Pi 3/4 (MK2.5/S, MK3/S)
    url: https://help.prusa3d.com/guide/prusalink-prusa-connect-with-rpi-3-4-usb-mk2-5-s-mk3-s-_469341
  - name: Prusa Knowledge Base – Prusa Connect and PrusaLink (MINI+)
    url: https://help.prusa3d.com/product/mini-2/prusa-connect-prusalink_1636
  - name: Prusa Knowledge Base – Buddy3D camera
    url: https://help.prusa3d.com/article/buddy3d-camera_821264
  - name: Prusa Knowledge Base – Prusa Connect Telegram notifications
    url: https://help.prusa3d.com/guide/prusa-connect-configurazione-delle-notifiche-di-telegram_529662
  - name: Prusa – Prusa Connect Local
    url: https://www.prusa3d.com/p/connect/connect-local/
  - name: Prusa – Get started with local-first Prusa Connect
    url: https://www.prusa3d.com/p/connect/connect-local/get-started/
  - name: GitHub – prusa3d/prusa-connect, a local server for your printers
    url: https://github.com/prusa3d/prusa-connect
tools: [3mf-to-stl, stl-viewer, step-to-stl]
---
**Prusa Connect is Prusa Research's free remote-management service for Prusa 3D printers: you upload and start prints, watch progress and camera images, and manage one printer or a whole farm from a web browser or the Prusa app.** Newer Prusa printers connect to it directly over Ethernet or Wi-Fi, while older MK3-generation printers use a Raspberry Pi running PrusaLink. This guide explains what Prusa Connect does, which printers support it, how to set it up, how it differs from PrusaLink, and what the new self-hosted Prusa Connect Local changes. Facts come from Prusa's product pages and knowledge base, checked November 2026.

## Prusa Connect at a glance

| | Prusa Connect |
|---|---|
| Made by | Prusa Research |
| Price | Free, with a Prusa Account |
| Where it runs | Prusa's cloud; self-hosted option with Connect Local |
| Access | Web browser and the Prusa mobile app |
| Direct support | MK4S / MK4, MK3.9, MK3.5, MINI / MINI+, XL, CORE One family |
| Via Raspberry Pi + PrusaLink | MK3 / MK3S / MK3S+, MK2.5 / MK2.5S |
| Main features | Upload and start prints, queue, live status, camera snapshots, notifications, multi-printer and team management |
| Slicer integration | Send G-code from PrusaSlicer after signing in |
| Local alternative | PrusaLink (built into newer printers) |

## What is Prusa Connect?

Prusa Connect is the online counterpart to PrusaLink. Prusa's knowledge base describes PrusaLink as the local web interface that lives on the printer, and Prusa Connect as the service that lets you reach your printers from anywhere and manage many of them in one place. Once a printer is added, it reports its state – idle, printing, paused, finished, error – along with temperatures, progress and time left.

From the dashboard you can:

- **Upload G-code** and start a print remotely.
- **Pause, resume or stop** a running job.
- **Keep a print queue** so the next job is ready when the plate is cleared.
- **See camera snapshots** from a connected camera.
- **Get notifications** when a print finishes or fails.
- **Group printers and invite users** with different permissions, which is useful for print farms, schools and makerspaces.
- **Manage files** stored on the printer's USB drive.

**Why it matters:** you can start a print from your desk, check it from your phone and stop it if something goes wrong, without walking to the printer.

## Which printers support Prusa Connect?

| Printer | How it connects |
|---|---|
| Prusa CORE One / CORE One L | Built in – Ethernet or Wi-Fi |
| Prusa XL / XL+ | Built in – Ethernet or Wi-Fi |
| Original Prusa MK4S / MK4 | Built in – Ethernet or Wi-Fi |
| Original Prusa MK3.9 / MK3.5 | Built in – Ethernet or Wi-Fi |
| Original Prusa MINI / MINI+ | Ethernet, or Wi-Fi with Prusa's optional ESP module |
| Original Prusa MK3 / MK3S / MK3S+ | Raspberry Pi running PrusaLink |
| Original Prusa MK2.5 / MK2.5S | Raspberry Pi running PrusaLink (USB) |

Prusa Connect works only with Prusa printers (and their official upgrades). See our printer pages for each model's other connection options: [CORE One](/printers/prusa-core-one/), [MK4](/printers/prusa-mk4/), [MINI+](/printers/prusa-mini/), [XL](/printers/prusa-xl/) and [MK3S+](/printers/prusa-mk3/).

## How to set up Prusa Connect

The exact menu names can differ between firmware versions; Prusa's knowledge base has a step-by-step guide for each printer. The general process on printers with built-in networking is:

1. **Update the firmware** to the latest release for your printer.
2. **Connect the printer to your network.** Plug in an Ethernet cable, or set up Wi-Fi from the printer menu. Newer models also accept Wi-Fi details from the phone app over NFC or from a settings file on the USB drive.
3. **Create or sign in to a Prusa Account** at Prusa's website.
4. **Start the pairing on the printer.** In the network settings, choose the option to add the printer to Prusa Connect. The screen shows a QR code and a code.
5. **Scan the QR code** with your phone or open the link on a computer, sign in and confirm. Give the printer a name and, if you like, put it in a group.
6. **Check the dashboard.** The printer should appear online with its current status.

**Older MK3-generation printers** need a Raspberry Pi (Prusa documents the Raspberry Pi Zero 2 W fitted inside the printer, or a Pi 3/4 over USB) running the PrusaLink image. You set up PrusaLink first, then register the printer in Prusa Connect from PrusaLink's setup wizard.

**Tip:** if the printer will not go online, check that it has an IP address in the network menu first. Most failures are Wi-Fi problems, not Prusa Connect problems.

## Sending prints from PrusaSlicer

PrusaSlicer can upload directly to Prusa Connect once you sign in with your Prusa Account. After slicing, choose the option to send the G-code to Prusa Connect, pick the printer, and either start the print right away or add it to the queue. You can also upload a G-code file in the browser.

**Tip:** make sure the print profile in PrusaSlicer matches the printer you are sending to. G-code sliced for an MK4S will not print correctly on a MINI+. If you start from a CAD file, our [STEP to STL converter](/step-to-stl/) creates a mesh you can slice, and [3MF to STL](/3mf-to-stl/) splits projects into plain meshes.

## Cameras and notifications

Prusa Connect shows camera snapshots so you can check a print from anywhere. Prusa sells its own Buddy3D camera, which connects to the printer and appears in Prusa Connect; Prusa's knowledge base also describes adding other camera sources. Snapshots refresh at intervals rather than as a continuous video stream.

Notifications tell you when a print finishes, pauses or fails. Prusa's knowledge base includes a guide for setting up notifications through Telegram, and the Prusa app shows printer status on your phone.

**Why it matters:** a camera plus a notification lets you catch spaghetti or a detached print early and stop the job before it wastes a full spool.

## Prusa Connect vs PrusaLink

| | PrusaLink | Prusa Connect |
|---|---|---|
| Where it runs | On the printer (or a Raspberry Pi on older models) | Prusa's cloud, or your own server with Connect Local |
| Access | Same local network, at the printer's IP address | Anywhere with internet |
| Account needed | No – local username and password | Prusa Account |
| Printers | One printer per interface | Many printers in one dashboard |
| Upload and start prints | Yes | Yes |
| Print queue, teams, notifications | No | Yes |
| Camera | Limited | Yes |
| Best for | Simple local control, offline workshops | Remote access, farms, shared printers |

Newer printers run PrusaLink and Prusa Connect at the same time, so you can use whichever suits the moment.

## Prusa Connect Local – self-hosted Connect

Prusa Connect Local is a "local-first" version of Prusa Connect that you run yourself. Prusa's page describes it as a printer server you download as a single file for Linux, Windows, macOS or Raspberry Pi; larger setups can use Docker and Kubernetes. Printers connect straight to your server, users sign in with accounts on that server rather than a Prusa Account, and Prusa printers need firmware 6.4.0 or newer. When we checked in November 2026 it was labelled a public beta. Prusa publishes the source on GitHub and says it is free for personal use and for small businesses using it internally; larger companies and hosted services need a business licence.

**Why it matters:** companies, schools and labs with strict IT rules – or anyone who prefers not to depend on a cloud service – can now get Connect's multi-printer features without sending print data to Prusa's servers. Check Prusa's Connect Local page for current requirements and supported features, as the software is new and still changing.

## Security and privacy tips

- **Use a strong, unique password** for your Prusa Account and turn on any extra sign-in protection Prusa offers.
- **Share printers through teams** rather than sharing your login.
- **Keep firmware up to date**, because network features get fixes with new releases.
- **Use PrusaLink or Connect Local** if your organisation does not allow cloud services.
- **Remember the printer is a heater** – remote starts are convenient, but only start a print when the bed is clear and someone can respond to a problem.

## Troubleshooting checklist

1. **Printer shows offline** – check the network menu for an IP address; restart the router and printer.
2. **Pairing code expired** – start the add-printer step again on the printer to get a fresh code.
3. **Upload works but print does not start** – check that the G-code was sliced for that printer model and that the plate is confirmed clear if the printer asks.
4. **No camera image** – check that the camera is registered to the right printer and has network access.
5. **MK3S+ not appearing** – make sure the Raspberry Pi has finished booting PrusaLink and that the serial connection is enabled in the printer's settings.

## Verdict

Prusa Connect is the easiest way to run a Prusa printer remotely: free, built into every current model and integrated with PrusaSlicer. Use PrusaLink for simple local control, Prusa Connect for remote access and multiple printers, and Prusa Connect Local if you want the Connect dashboard without the cloud. For an overview of the hardware, see our [Prusa 3D printers](/printers/prusa-3d-printers/) hub.
