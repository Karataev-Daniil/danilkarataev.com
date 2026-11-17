# Daniil Karataev — portfolio

The code behind [danilkarataev.com](https://danilkarataev.com), published so it can be read. The working repository is private; this copy is updated from it. The texts, photos and screenshots are mine or my clients' and are not for reuse.

Personal portfolio of **Daniil Karataev**, Middle Front-end / Full-Stack developer from Chișinău, Moldova
(React · TypeScript · Next.js · WordPress).

A statically generated site in three languages — English at `/`, Romanian at `/ro` and Russian at `/ru`.
The home page has experience, own products, selected projects (with a stack filter), recommendations, live
GitHub activity, stack and contacts; eight projects also have their own case study pages at
`/projects/[slug]`, `/ro/projects/[slug]` and `/ru/projects/[slug]`.
The home page opens with a career route drawn like a metro diagram: a vermilion line for work and
an ink line for my own projects, with a station for each job or product in the order it started. The rest of the site keeps that survey-sheet look: warm
paper, blue-black ink, hairline rules and dates set in mono. The locked design system is in
[design.md](design.md).

## Stack

- **Next.js 16** (App Router, Cache Components / ISR) + **React 19**
- **TypeScript** in strict mode (`noUncheckedIndexedAccess` on)
- **CSS Modules** only — no Tailwind, no UI kits
- **next/font** — Literata (headings), Golos Text (text) and IBM Plex Mono (dates, domains, stack)
- **next/image** for project screenshots, **next/og** for Open Graph images

No other runtime dependencies.

## Scripts

```bash
npm install
npm run dev     # local development on http://localhost:3000
npm run build   # production build (static pages + ISR)
npm run start   # serve the production build
npm run lint    # ESLint (next/core-web-vitals + typescript)
```

## Project structure

```
src/
  app/
    (en)/            English root layout, page and OG image  ->  /
      projects/[slug]  case study pages                      ->  /projects/dinastia …
    (ro)/ro/         Romanian root layout, page and OG image ->  /ro
      projects/[slug]  case study pages                      ->  /ro/projects/dinastia …
    (ru)/ru/         Russian root layout, page and OG image  ->  /ru
      projects/[slug]  case study pages                      ->  /ru/projects/dinastia …
    sitemap.ts       sitemap with hreflang alternates
    robots.ts
    icon.svg
    global-not-found.tsx
  components/        sections (Hero with CareerMap, Experience, Products, Projects, Activity, Stack,
                     Contact…), CasePage, and client enhancements (Effects, ProjectFilter)
  content/data.ts    language-independent data: links, stacks, categories, screenshots, cases
  i18n/              typed dictionaries (en.ts defines the Dictionary type, ro.ts and ru.ts must satisfy it)
  lib/github.ts      GitHub data fetching and parsing
  lib/metadata.ts    per-locale metadata, canonical and hreflang
  proxy.ts           sends the URL of a removed case to the home page of its language
public/
  projects/          WebP screenshots of live projects (cards)
  cases/             desktop (1600 px) and mobile (780 px) WebP screenshots for case pages
  cv/                downloadable PDF resumes, printed by docs/cv/build.mjs
```

Content lives in `src/content/data.ts` (shared) and `src/i18n/*.ts` (copy). Adding a project means
adding an entry to `projects` and its text to both dictionaries — TypeScript will complain if a
translation is missing.

- **Order and filter.** `projects` is ordered by weight. Each entry has a `category` array (`react`,
  `wordpress`; a project can be in both). The filter above the grid is a small client component that only
  toggles a `data-filter` attribute — the hiding itself is CSS, so without JS every project stays visible.
- **Sites without a link.** An entry with no `href` sets `status` to `"offline"` or `"private"`, and its card
  shows a note instead of the link.
- **Case studies.** Add an entry to `cases` in `data.ts` (links, stack, screenshots, the `updated` date), the copy to
  `cases.items` in both dictionaries (task / what I built / outcome / optional extra section, built from
  paragraphs, bullet groups, metric tiles and a quote), and set `caseSlug` on the project or product card.
  The page, its metadata (canonical, hreflang, Open Graph with the screenshot) and the sitemap entries follow.
  When a case or the home page changes noticeably, move its `updated` / `homeUpdated` date: it is the sitemap's lastmod.

## GitHub data

`src/lib/github.ts` runs on the server only, at build time, and is cached with `"use cache"` +
`cacheLife({ revalidate: 86400 })`, so the page is regenerated at most once a day (ISR).

- **Contribution calendar**: fetched from the public page
  `https://github.com/users/Karataev-Daniil/contributions` (no token). The HTML is parsed for
  `td.ContributionCalendar-day` cells (`data-date`, `data-level`) and their `<tool-tip>` elements for
  exact counts. The page shows the total for the last year and the number of active days, and the heatmap
  is drawn in the site's own vermilion scale.
- The home page shows only the calendar. Most of my work lives in private repositories, so public repo
  cards and a languages bar would give a wrong picture. `lib/github.ts` still returns repos and languages
  in case a section wants them later.

Everything fails soft: if GitHub is unreachable (e.g. an offline build or rate limiting) the build still
succeeds and the section shows an "activity unavailable" state; such a result is cached for one hour only.

Optional: set `GITHUB_TOKEN` (a token with no scopes is enough) to raise the REST API rate limit.

## Environment variables

| Variable               | Purpose                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, e.g. `https://example.com`. Used for metadata, sitemap, robots, JSON-LD. |
| `GITHUB_TOKEN`         | Optional, raises GitHub API limits.                                                        |

On Vercel, if `NEXT_PUBLIC_SITE_URL` is not set, the production URL provided by Vercel
(`VERCEL_PROJECT_PRODUCTION_URL`) is used automatically.

## Deploying to Vercel

1. Push the repository to GitHub.
2. In Vercel, **Add New → Project**, import the repository. The framework preset (Next.js) and the
   default build command (`next build`) work as is.
3. Add `NEXT_PUBLIC_SITE_URL` (your final domain) and, optionally, `GITHUB_TOKEN` in
   **Settings → Environment Variables**.
4. Deploy. Attach a custom domain in **Settings → Domains** and redeploy so canonical URLs,
   the sitemap and Open Graph tags use it.

GitHub data refreshes on its own once a day; a redeploy refreshes it immediately.

## Accessibility and performance notes

- Semantic landmarks, a skip link, visible focus styles, contrast checked for both the light and the dark
  (`prefers-color-scheme`) palettes.
- The entrance animation, the route drawing and reveal-on-scroll are disabled for
  `prefers-reduced-motion`. Without JavaScript all content is visible.
- Pages are fully static; the WebP sources are served as they are (`images.unoptimized` in `next.config.ts`).
- Metadata: canonical + `hreflang` (en, ro, ru, x-default), Open Graph / Twitter cards with generated images,
  `sitemap.xml`, `robots.txt` and `Person` JSON-LD.
