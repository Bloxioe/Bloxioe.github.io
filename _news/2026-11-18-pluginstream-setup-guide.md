---
title: "PluginStream — free, ad-free streaming on Android and how its plugin system works"
description: A walk through PluginStream, the open-source Android streaming app. What it does, how the plugin and repository system works, and how to set it up in six steps.
date: 2026-11-18
tags:
  - pluginstream
  - android
  - open-source
  - streaming
redirect_from:
  - /news/pluginstream-setup-guide/
draft: false
---

**PluginStream** is a free, open-source streaming app for Android. No subscription, no premium tier, no ads — and it runs on both phones and Android TV. This post covers what it does, how the plugin system is put together, and how to get it running in a couple of minutes.

## What it is

PluginStream brings OTT content into one interface. Out of the box it covers 100+ platforms across the USA, India, UK, Turkey, Indonesia, Pakistan and more — Netflix, Prime Video, HBO Max, Disney+, YouTube, SonyLIV, Zee5 and around 93 others.

It's built on the **CloudStream** engine, which is what makes the plugin model possible: the app ships a player and an interface, and the actual sources arrive as installable plugins. Nothing is hard-coded, so when a source changes, the plugin updates instead of the whole app.

## What you actually get

- **Ad-free playback** — no pre-rolls, no interruptions, no account
- **4K quality** on supported content
- **100+ global plugins** covering multiple regions and languages
- **Android phone, tablet and Android TV** in a single ecosystem
- **Cast to TV** via Chromecast or a smart TV
- **Offline downloads** with a built-in download manager

The project's site lists **2.4k+ GitHub stars** and **10k+ downloads** — small numbers next to the big apps, but a healthy amount of activity for a community-run project.

## Two builds: phone and TV

PluginStream ships as two separate APKs:

- a **phone build** for Android phones and tablets
- a **TV build** with a large-screen layout for Android TV

They're distributed directly from GitHub releases rather than an app store, which is also why the app can auto-update itself properly.

## Setting up the plugins (the important part)

The app itself is only half the story — the plugins are what make it useful. The fastest route is a **shortcode** that adds a curated set of repositories in one shot.

1. Open the app's **Settings** (⚙️) and scroll to the **Extensions** tab.
2. Tap **+ Add Repository** in the bottom-right corner.
3. In the *"Repository URL or Shortcode"* field, enter the shortcode `pluginstream`. It's case-insensitive — uppercase or lowercase both work.
4. Tap **Add repository**, then confirm **Add repository** again on the prompt.
5. Wait for the toast: **"20 repositories added."**
6. Tap any repository card to expand it, then hit **Download (⬇️)** next to the plugin you want.

Once a plugin installs, its download icon turns into a checkmark. Repositories re-index automatically, so you only do this once.

## Why it isn't on the Play Store

Straight answer: because it provides free access to premium content, which Play Store policy doesn't allow. That means you install it by enabling **"Install unknown apps"** for your browser or file manager and opening the APK — the standard sideload flow.

## Is it safe?

It's open source, so the code is there to be read. The site states the builds are **VirusTotal verified**, and the whole thing sits on the CloudStream engine that a lot of similar apps share.

The website itself is built privacy-first: no third-party tracking scripts, no analytics cookies, no personal data collection, no external ad networks.

## Quick FAQ

**Is it really free?** Yes — no subscription fees, no premium tiers, no hidden costs.

**Which Android versions?** Android 5.0 and above, plus Android TV.

**Offline watching?** Yes. Downloads go through the built-in download manager.

**How do I report a bug or request a feature?** Through GitHub Issues and the Telegram community.

**Do plugins need manual updates?** No — they update automatically, so your streams keep working.

## Where to find it

- **App repository** — [github.com/am-abdulmueed/pluginstream](https://github.com/am-abdulmueed/pluginstream)
- **Official website** — [pluginstream.pages.dev](https://pluginstream.pages.dev)
- **Telegram** — [t.me/pluginstreamofficial](https://t.me/pluginstreamofficial)
- **Privacy policy** — [pluginstream.pages.dev/privacy.html](https://pluginstream.pages.dev/privacy.html)
- **Terms of service** — [pluginstream.pages.dev/terms.html](https://pluginstream.pages.dev/terms.html)

Licensed under the **MIT License** · Copyright (c) 2026 PluginStream.
