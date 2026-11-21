---
title: "A practical guide to HTTP caching for static sites"
image: /assets/images/blog/http-caching.jpg
image_alt: Editorial illustration of a browser reusing a cached static page and checking for updates.
description: "Use cache headers to make repeat visits faster without leaving readers stuck with old site files."
date: 2026-11-21
categories:
- Web Dev
- Development
tags:
- http
- caching
- static-sites
draft: false
---
When a visitor opens a page for the second time, the browser may be able to reuse a response it already has. HTTP caching can reduce repeat downloads and origin requests—but only when the server tells caches how a response may be reused.

## Start with how often a file changes

Hashed assets are a good fit for long-lived caching. If a CSS or JavaScript filename contains a content hash, a changed file gets a new URL. That lets the previous URL stay immutable while the updated page points to the new one.

HTML is different: it is the document that points to current assets and content. If it is cached too long, visitors may keep receiving a page that references outdated files. A shorter lifetime or revalidation is often a better fit for HTML.

## Know the basic headers

- `Cache-Control: max-age=...` tells a cache how long a response can be reused while fresh.
- `Cache-Control: no-cache` allows storage but requires validation before reuse; it does not mean “never store.”
- `Cache-Control: no-store` tells caches not to store the response and is appropriate for sensitive data.
- Validators such as `ETag` can let a browser ask whether a stored response is still current without downloading the whole body again.

These are not interchangeable. In particular, personalized responses need care: a response intended for one user should not accidentally be reused from a shared cache for another.

## Test the deployed headers

Inspect the response headers for HTML, versioned assets, and uploaded files on the actual host. CDN rules can override project settings, and a local development server may not reproduce production behavior. After a release, verify both the new asset URL and a repeat request.

Good caching is explicit and matched to the content's change pattern. It can make a static site feel faster without adding a client-side cache library.

## Further reading

- [MDN: HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)
- [RFC 9111: HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111)

\- Bloxioe
