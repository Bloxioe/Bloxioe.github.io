---
title: "How to run Decap CMS locally with Jekyll before pushing live"
image: /assets/images/blog/decap-local.jpg
image_alt: Editorial illustration of a local Markdown editor connected to a Jekyll site preview.
description: A practical step-by-step workflow for editing Markdown posts on your own machine and switching cleanly to GitHub OAuth in production.
date: 2026-11-21
categories:
- Tutorials
- Development
tags:
- jekyll
- decap-cms
- workflow
draft: false
---
Testing content changes directly on a live repository clutters commit history and slows down writing. Running Decap CMS locally fixes both.

## What you need

Before starting, make sure your local repository has Ruby, Jekyll, and Node.js installed so both the static site generator and the local CMS proxy can run side by side.

- **Jekyll server**: serves your site at `http://localhost:4000`
- **Decap local server**: writes edits directly to your `_news` and `_data` folders via port `8081`

## Step-by-step local setup

1. **Enable `local_backend` in `admin/config.yml`.** Set `local_backend: true` and point `display_url` to `http://localhost:4000/` while commenting out the production `base_url`.
2. **Start the local CMS proxy.** Open your first terminal in the project root and run `npx decap-server`.
3. **Start Jekyll.** Open a second terminal and run `bundle exec jekyll serve`.
4. **Open the editor.** Visit `http://localhost:4000/admin/` in your browser. Every save writes straight to disk without touching GitHub until you are ready to commit.

## Switching back to live production

When you are ready to publish from your live domain:

- Stop both terminals with `Ctrl + C`.
- Set `local_backend: false` (or comment it out) in `admin/config.yml`.
- Uncomment your `base_url` OAuth proxy and set `display_url` back to your live GitHub Pages URL.
- Commit and push your changes to `main`.

## Why this workflow works

Separating local drafting from live publishing keeps your repository history clean and lets you preview layouts, slugs, and front matter before anything goes public.

\- Bloxioe