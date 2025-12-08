# Potato Game site

Astro + Tailwind + shadcn-styled components for the iOS/macOS game “Potato Game.”

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Assets: CC BY-NC 4.0](https://img.shields.io/badge/Content-CC%20BY--NC%204.0-blue.svg)]

(ASSET_LICENSE.md)
## Quick start
1. Install deps: `npm install`
2. Dev server: `npm run dev` (default at `http://localhost:4321`)
3. Production build: `npm run build`

## Localization
Astro i18n is enabled with `defaultLocale: en` and `ga` as an additional locale. Text strings live in `src/i18n/strings.ts`. Default routes are unprefixed; `/ga/...` serves Irish.

## Analytics
Google Analytics loads via Partytown. Set `PUBLIC_GTAG_ID` to override the default measurement ID.

## License
- Code: MIT — see `LICENSE`.
- Content (copy, screenshots, and other media): CC BY-NC 4.0 — see `CONTENT_LICENSE.md`.
