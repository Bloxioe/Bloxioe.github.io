---
title: "Core Web Vitals: a useful performance check for small websites"
image: /assets/images/blog/core-web-vitals.jpg
image_alt: Editorial illustration of loading, interaction, and layout stability measured on a web page.
description: "What LCP, INP, and CLS measure, how to find real bottlenecks, and why a score is not the whole user experience."
date: 2026-11-21
categories:
- Web Dev
- Tutorials
tags:
- performance
- core-web-vitals
- web
draft: false
---
A page can look fast on its developer's laptop and still feel slow on a phone over a busy connection. Core Web Vitals give teams a small set of user-centered signals to investigate loading, responsiveness, and visual stability.

The current set includes Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). They describe different kinds of experience, so improving one number does not automatically fix the others.

## Find the actual bottleneck

Start with field data when it is available. It reflects real devices, networks, and user interactions. A lab run is still useful for controlled debugging, but it is a sample under specific conditions—not a promise about every visitor's experience.

- **LCP** asks how quickly the main visible content appears. Large hero images, slow server responses, and render-blocking resources are common places to investigate.
- **INP** measures responsiveness across interactions. Long tasks and expensive event handlers can delay the next visual response.
- **CLS** tracks unexpected layout movement. Reserve space for images and embeds, and avoid inserting content above a reader after the page has started rendering.

Use the browser performance tools or PageSpeed Insights to identify a specific slow resource or interaction. Change one bottleneck at a time, then measure again. A smaller image, fewer blocking scripts, or a more predictable layout can be more useful than adding another optimization library.

## Do not chase a score at the expense of the page

A performance metric is a diagnostic signal, not the product. A page still needs readable text, accessible controls, useful content, and privacy-respecting defaults. Avoid removing functionality just to improve a synthetic score; instead, ask which work is necessary before the user can read or interact.

For a small static site, start with compressed responsive images, lightweight fonts, a short script budget, and explicit dimensions for media. These changes often reduce both transfer cost and layout surprises.

## Further reading

- [web.dev: Web Vitals](https://web.dev/articles/vitals)
- [web.dev: Interaction to Next Paint](https://web.dev/articles/inp)

\- Bloxioe
