---
title: "Passkeys explained: what happens when you sign in"
image: /assets/images/blog/passkeys.jpg
image_alt: Editorial illustration of a passkey challenge signed by a device.
description: "A plain-language look at public-key sign-in, phishing resistance, and the recovery plan every account still needs."
date: 2026-11-21
categories:
- Tech
- Development
tags:
- passkeys
- webauthn
- security
draft: false
---
Passkeys replace a password you type with a cryptographic credential held by an authenticator, such as a phone, computer, or security key.

The idea is not that a website stores a magic copy of your face or fingerprint. Biometrics, when used, unlock the credential on your device. The website receives a signed response it can verify with a public key.

## The sign-in, in simple steps

During registration, the authenticator creates a public/private key pair for the website. The site stores the public key. The private key remains with the authenticator and is used to sign a fresh challenge when you sign in.

The website verifies that signature and checks that the request belongs to the expected site. Because the credential is scoped to the website's origin, a convincing lookalike domain cannot simply ask the browser to use the legitimate site's passkey.

This changes the server-side risk too: a database containing public keys does not contain passwords that can be replayed as secrets. It does not make every account system invulnerable; weak recovery flows, compromised devices, and implementation mistakes still matter.

## Passkeys still need a recovery plan

Before removing every other sign-in method, check how the service handles a lost or replaced device. Depending on the platform and account settings, passkeys may sync through a credential manager or exist only on one authenticator. Keep recovery codes or another trusted method where the service offers them, and protect the account used to sync credentials.

For developers, use the browser's Web Authentication API and a well-maintained server library instead of inventing a challenge protocol. Validate the challenge, origin, relying-party ID, and signature on the server. Treat enrollment and account recovery as carefully as the authentication ceremony itself.

## The useful takeaway

Passkeys reduce password reuse and make common phishing attacks harder, but they are one part of account security. Device security, recovery, rate limiting, and clear user feedback still belong in the design.

## Further reading

- [MDN: Passkeys](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passkeys)
- [MDN: Web Authentication API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API)

\- Bloxioe
