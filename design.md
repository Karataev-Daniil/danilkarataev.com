# Design — Daniil Karataev portfolio

A locked design system for danilkarataev.com. Every page change reads this file
first. Extend or amend it when the system needs to grow; do not restyle a page
on its own.

The idea: a survey sheet of a career. Warm paper, blue-black ink, one vermilion
route through the main jobs, dates and domains set like map data.

## Genre
Editorial.

## Macrostructure family
- Home: Map / Diagram. The hero ends in the career route, drawn as a metro
  diagram (two lines, stations in the order they started), followed by own products, an index of works, experience, recommendations,
  about, GitHub activity, stack and contact.
- Case pages: content pages. Title, lead, facts row, plain screenshots in a
  figure, then task / what I built / outcome as two-column sections.
- 404: one display line and three plain links.

## Theme (`src/app/globals.css`)
Light by default, dark through `prefers-color-scheme`.

| Token | Light | Dark |
| --- | --- | --- |
| `--color-paper` | oklch(96.8% 0.011 84) | oklch(18.5% 0.02 255) |
| `--color-paper-2` | oklch(94% 0.014 84) | oklch(21.5% 0.022 255) |
| `--color-rule` | oklch(84.5% 0.018 84) | oklch(31% 0.022 255) |
| `--color-ink` | oklch(25% 0.03 255) | oklch(93% 0.012 84) |
| `--color-ink-2` | oklch(40% 0.028 255) | oklch(80% 0.014 84) |
| `--color-ink-3` | oklch(51% 0.022 255) | oklch(68% 0.014 84) |
| `--color-accent` | oklch(57% 0.19 32) | oklch(68% 0.17 36) |
| `--color-accent-ink` | oklch(49% 0.17 32) | oklch(75% 0.15 40) |

- `--color-accent` is for lines only: the work line of the route, active
  underlines. Text in the accent colour uses `--color-accent-ink`.
- The accent stays under 5 % of any viewport.
- Every colour and font in CSS goes through a token. The only hex values live
  in `src/lib/metadata.ts` (browser theme colour) and `src/lib/og.tsx`.

## Typography (`src/lib/fonts.ts`)
- Display: Literata, weight 300 for page and section titles, 600 for names of
  places (companies, projects, products). Roman only, never italic.
- Body: Golos Text 400 / 500 / 600.
- Mono: IBM Plex Mono 400 / 500. The data register only: dates, domains,
  stack lists, coordinates, lane labels. Never for prose, buttons or nav.
- All three carry latin-ext and Cyrillic for EN / RO / RU.
- `--text-display` = clamp(2.75rem, 1.2rem + 5.6vw, 6rem), line-height 0.95,
  tracking -0.025em.

## Spacing
4-point scale, `--space-1` (0.25rem) to `--space-32` (8rem). Use the tokens,
never raw values. Layout grid: 12 columns from 60rem, `--maxw` 77.5rem.

## Motion
- Easings: `--ease-out` cubic-bezier(0.22, 0.61, 0.36, 1),
  `--ease-in-out` cubic-bezier(0.65, 0, 0.35, 1),
  `--ease-draw` cubic-bezier(0.7, 0, 0.2, 1).
- One orchestrated entrance: hero lines and map nodes rise in (`data-intro`),
  the route lines draw left to right once.
- Below the fold: fade + 12px rise on scroll (`data-reveal`).
- Reduced motion: everything is static.

## Microinteractions stance
- Hover changes colour or underline colour only. No lift, no scale, no glow.
- Focus: 2px `--color-accent-ink` outline, instant.
- Silent success; no toasts.

## CTA voice
- Primary: one outlined button in `--color-accent-ink`, 2px radius, 44px tall.
  Fills on hover. One per page (Telegram on home, the live site on a case).
- Secondary: outlined ink button, same shape.
- Tertiary: underlined text link with a small arrow.

## Section rhythm
- 1px ink rule, then the display title. No numbers, no eyebrows, no tag
  beside the title. A note under the title only when it carries data (the
  recommendations name their companies); no taglines.
- Lists and tables are separated by hairline rules, not cards.

## Screenshots
Plain `<figure>` with a 1px rule border and the domain as a caption. Never a
drawn browser bar or phone frame.

## Career route rules
- A metro diagram, not to scale: one column per station, in the order the
  work started. The legend says so.
- Two lines only: Work (vermilion, 4px) and Own projects (ink, 2px). Filled
  station = finished, ring = still going. Both lines end in a terminus at now.
- Data lives in `mapNodes` (`src/content/data.ts`); periods and notes come
  from the dictionaries. Freelance projects sit on the Work line in their own
  slot; nothing is drawn as a branch of an employer.
- From 80rem the lines run across the page; below that the same list is one
  vertical line, oldest first, ending at now.

## Per-page allowances
- Home may carry the career route diagram. Case pages carry no decoration.

## What pages share
Wordmark (name in Literata 600), palette, three faces, CTA shape, section
rhythm, header (N1a: name, two links, language, CV) and footer (Ft1: name,
one line, small links).

## Icon and share images
- Icon: the DK monogram in paper on an ink square, with the vermilion route and
  one open station under it (`src/app/icon.svg`; `apple-icon.png` is the same
  art without rounded corners, rendered at 180px).
- Open Graph images (`src/lib/og.tsx`) use the light palette and the same three
  faces from static TTFs in `src/assets/fonts`. Literata Light there is the
  36pt cut: at 72pt its plus sign thins to a hairline.
