# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server on localhost:3000
npm run build     # production build (also runs next-sitemap via postbuild)
npm run start     # serve the production build
npm run lint      # run Next.js ESLint
```

There are no tests in this project.

## Architecture

**Next.js 14 with static export** — `next.config.mjs` sets `output: "export"` and `images: { unoptimized: true }`. This means no server-side rendering, no API routes, and `next/image` optimization is disabled. Use `<img>` tags or `next/image` with `fill`/`sizes` but expect no CDN optimization.

**Routing** — uses the App Router. Pages live at:
- `src/app/page.tsx` — homepage (`/`)
- `src/app/(pages)/layanan/page.tsx` — services page (`/layanan`)
- `src/app/(pages)/portofolio/page.tsx` — portfolio page (`/portofolio`)

All page components are `"use client"` and initialize Locomotive Scroll in a `useEffect`.

**Root layout** (`src/app/layout.tsx`) wraps every page with `<Header>` and `<Footer>`, sets global metadata, injects a Facebook Pixel script, and adds a JSON-LD Organization schema.

**Animations** — Framer Motion (`framer-motion`) is used throughout for:
- `TextBoxReveal` (`src/app/components/ui/TextBoxReveal.tsx`) — sliding reveal animation over text, triggered once on scroll into view
- `CountUp` (`src/app/components/ui/CountUp.tsx`) — animates a number from `from` to `to` when scrolled into view
- Per-character stagger animations using `splitStringUsingRegex` (`src/app/utlis/splitStringUsingRegex.tsx`) to split strings into individual characters

**Tailwind** (`tailwind.config.ts`) defines custom font families (`helveticaLight`, `helveticaRoman`, `ppneue`, `geist`) and animations (`float`, `reverse-float`, `marquee-left`, `marquee-right`). Custom fonts are loaded via CSS (not Next.js font optimization), except Geist which loads from `src/app/fonts/`.

**Portfolio data** is hardcoded as an array in `src/app/(pages)/portofolio/page.tsx`. To add a portfolio item, add an entry to the `portofolios` array and place the image in `public/porto/`.

**SEO** — `next-sitemap` generates `sitemap.xml` and `robots.txt` into `public/` after each build, configured in `next-sitemap.config.js` with `siteUrl: "https://www.acesolve.com"`.
