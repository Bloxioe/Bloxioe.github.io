---
title: "How to optimize images so your static site loads under a second"
image: /assets/images/blog/image-optimization.jpg
image_alt: Editorial illustration showing a large image being resized and compressed for the web.
description: Uncompressed hero images are the number one reason fast static sites feel slow — here is the exact workflow we use before publishing.
date: 2026-11-21
categories:
- Web Dev
- Tutorials
tags:
- performance
- images
- web-dev
draft: false
---
You can strip out every heavy JavaScript framework on your site and still end up with a slow page if a single cover image weighs 4 MB.

## What's happening

Static generators like Jekyll serve HTML almost instantly, which means media files become the main bottleneck on mobile connections. Uploading raw screenshots or full-resolution stock photos straight into your repository slows down first paint and eats bandwidth for visitors.

A few minutes of preparation before publishing an image fixes the problem completely.

## Our image checklist before publishing

Every image we add to a post goes through three quick checks:

- **Resize to display dimensions**: cover images look sharp at `1200×630` pixels — anything wider rarely adds clarity on a blog layout.
- **Use modern formats**: WebP or compressed JPEG cuts file size by 60–80% compared to unoptimized PNGs.
- **Write descriptive `image_alt` text**: clear alt text helps screen readers and gives search engines real context about the visual.

## How we organize media in Git

1. **Keep filenames lowercase with hyphens.** Avoid spaces or camera timestamps like `IMG_20261121.jpg`.
2. **Store local assets in `/assets/uploads/` or use reliable CDN links.** Keeping predictable URLs makes Decap CMS previews and live builds match every time.
3. **Commit changes cleanly.** Each article and its assets stay grouped in the same Git history.

## Why small assets matter

Fast pages respect the reader's time and data plan. When your text and images are both lightweight, your site stays fast anywhere in the world without needing expensive CDN tricks.

\- Bloxioe