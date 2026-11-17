// The two CVs in public/cv: their text, an A4 template, and the print to PDF.
// npm i --no-save playwright-core pdf-lib && node docs/cv/build.mjs
// Needs Google Chrome (Segoe UI comes from Windows). Writes public/cv/*.pdf; the HTML it prints goes to the temp folder.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import { PDFDocument } from "pdf-lib";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = process.env.CV_OUT ?? path.join(here, "../../public/cv");
const CHROME = process.env.CHROME ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

const link = (href, text) => `<a href="${href}">${text}</a>`;
const contact = [
  ["Chișinău, Moldova"],
  ["+373 60 983 052"],
  ["t.me/DaniilKarataev", "https://t.me/DaniilKarataev"],
  ["dirings52445@gmail.com", "mailto:dirings52445@gmail.com"],
];
const contact2 = [
  ["danilkarataev.com", "https://danilkarataev.com/"],
  ["linkedin.com/in/daniil-karataev", "https://www.linkedin.com/in/daniil-karataev/"],
  ["github.com/Karataev-Daniil", "https://github.com/Karataev-Daniil"],
];

/** Selected projects, the same in both CVs. */
const projects = [
  {
    name: "AroundWire — company website · aroundwire.com",
    where: "AroundWire · 2024–2025",
    stack: "Next.js, React, TypeScript, SSR",
    text: "Main company website on Next.js, promoted through the pro.aroundwire.com landing pages: server rendering, fully typed component architecture.",
  },
  {
    name: "AroundWire PRO — landing platform (pro.aroundwire.com)",
    where: "AroundWire · 2024–2025",
    stack: "WordPress, PHP, MySQL, JavaScript, HTML/CSS (BEM), AJAX",
    text: "40+ pixel-perfect landing pages on a modular custom theme; admin page builder (5+ landings per day); per-block asset loading, 70–80+ mobile PageSpeed; call-center lead integration.",
  },
  {
    name: "Samozanyatye.rf — platform for the self-employed",
    site: ["самозанятые.рф", "https://xn--80aapgyievp4gwb.xn--p1ai/"],
    where: "Contract · 2025",
    stack: "WordPress, PHP, MySQL, JavaScript, React, Bitrix24",
    text: "Merged React landing pages and a legacy blog into one custom platform; block-based landing page builder for marketing; Contact Form 7 → Bitrix24 CRM integration.",
  },
  {
    name: "INTER Polska — insurance company",
    site: ["interpolska.pl", "https://interpolska.pl/"],
    where: "Webcost · 2025",
    stack: "WordPress, PHP, JavaScript, Google Maps API",
    text: "New blocks for the custom page builder and forms; nearest-facility finder with an interactive map synchronized with a sidebar list.",
  },
  {
    name: "GoNutz — nut shop (gonutz.pl)",
    where: "Webcost · 2025",
    stack: "WooCommerce, PHP, JavaScript",
    text: "Custom “build your mix” configurator: products from the catalog, 500 g weight cap, automatic pricing, one combined line in cart and invoices.",
  },
  {
    name: "Dinastia — pedigree-pet marketplace",
    site: ["dinastia.md", "https://dinastia.md/"],
    where: "Own product · 2026",
    stack: "Next.js (App Router), React, Supabase (Postgres, RLS), Telegram Bot API, Vercel · brand identity and logo",
    text: "Designed the brand and logo and built the platform: RO/RU catalog by breed and city, breeder accounts with listing import from 999.md, paid kennel showcases and plans, a pet services section, verified-kennel checks, complaints, a Telegram bot for breeders and buyers and 298 indexed URLs. <b>Google top 3–4</b> for “buy pedigree cat/pet” in Moldova, 3,000+ organic clicks and 33,000+ impressions since the August 2026 launch.",
  },
  {
    name: "Demolator — concrete cutting and demolition contractor",
    site: ["demolator.md", "https://demolator.md/"],
    where: "Freelance · 2026",
    stack: "Next.js 15, React 19, TypeScript, Telegram Bot API, Cloudflare Workers (OpenNext)",
    text: "Took the client from an audit of their Tilda site to launch: 48 RO/RU pages with “from” prices, a cost calculator, photo leads delivered to Telegram, structured data and 301 redirects from every old address.",
  },
  {
    name: "chinolog.md — redesign of Moldova’s kennel portal (prototype, not launched yet)",
    where: "Freelance · 2026",
    stack: "Next.js 16 (static export), React 19, TypeScript, Supabase, Cloudflare Workers, AVIF/WebP pipeline",
    text: "Rebuilt a Tilda site in RO/RU/EN with registries, document checks and an admin for the client. Home page <b>32.2 MB → 0.64 MB</b>; images on first load 57 files / 32.5 MB → 3 files / 10 KB (AVIF/WebP per screen width, lazy below the fold); requests 97 → 23; LCP 2.3 s → 1.1 s, CLS 0.18 → 0; mobile Lighthouse <b>100</b> for performance, SEO and accessibility (was 87 / 85 / 86).",
  },
  {
    name: "GoodAntShop — ant farm store",
    site: ["goodantshop.md", "https://goodantshop.md/"],
    where: "Own product · 2026",
    stack: "React, Vite, TypeScript, React Router, SSR prerendering + hydration, Vercel serverless",
    text: "RU/RO/EN store with catalog, cart, a starter kit with automatic gifts, server-side order handling with email notifications, a blog with scheduled posts and an interactive species map; 72 prerendered routes, generated sitemap and per-route structured data. <b>#1–2 in Google</b> for “buy ants” in Moldova.",
  },
];

const references = "Recommendation letters from the AroundWire Team Lead and the Samozanyatye.rf Marketing Director";
const footnote = "Portfolio: danilkarataev.com · Code: github.com/Karataev-Daniil";

const cvs = [
  {
    file: "Daniil_Karataev_Frontend_Developer_CV",
    title: "Daniil Karataev — Frontend Developer (React, Next.js, TypeScript)",
    subject: "Resume: Daniil Karataev, Middle Front-end Developer, Chișinău, Moldova",
    keywords: "Frontend Developer Front-end Developer React Developer Next.js React TypeScript JavaScript Node.js REST API WordPress PHP MySQL PostgreSQL Jest Chișinău Moldova",
    headline: "Middle Front-end Developer · React · TypeScript · Next.js · WordPress",
    summary: "Front-end developer in production since 2024: 2 full-time employers, freelance work and 8 commercial websites, two of them own products with organic Google traffic, plus freelance client work. Owns features end to end in multilingual RO/RU/EN projects, from API integration to SEO.",
    experience: [
      {
        role: "Middle Front-end Developer — RocketSEO SRL",
        dates: "Mar 2026 – Nov 2026",
        meta: "Hybrid, Chișinău",
        bullets: [
          "Front-end development at a web agency: 12 projects. Project and client names are covered by an NDA.",
        ],
      },
      {
        role: "Full-Stack Developer — Freelance",
        dates: "Mar 2025 – Dec 2025",
        meta: "Remote · clients: Samozanyatye.rf (Russia), Webcost web agency (Poland) · PHP, WordPress, WooCommerce, React, Bitrix24, Google Maps API",
        bullets: [
          "Samozanyatye.rf: merged React landing pages and a plugin-heavy legacy blog into one custom platform with a new design (12–15k unique visitors daily); built a block-based <b>landing page builder</b> and a <b>Bitrix24 CRM</b> lead integration.",
          "Webcost (gonutz.pl, interpolska.pl): a <b>WooCommerce product configurator</b> for custom nut mixes with a weight cap and automatic pricing, and a nearest-facility finder on an interactive Google Map synced with a sidebar list.",
        ],
      },
      {
        role: "Full-Stack Developer — AroundWire (incl. ForceWind, Skilful Web Developers)",
        dates: "Feb 2024 – Apr 2025",
        meta: "Full-time, office, Chișinău · Next.js, TypeScript, React, PHP, WordPress, JavaScript, HTML/CSS (BEM) · Scrum, Jira, Bitbucket",
        bullets: [
          "Rebuilt <b>pro.aroundwire.com</b> from a plugin-heavy site into a modular custom platform with <b>40+ pixel-perfect landing pages</b>; admin page builder let marketing ship <b>5+ landing pages per day</b>.",
          "Built the company website <b>aroundwire.com</b> on <b>Next.js + TypeScript</b> with server rendering and a typed component architecture.",
          "Loaded CSS/JS per block only where used and deferred scripts, reaching <b>70–80+ mobile PageSpeed</b>; integrated lead forms with the call center.",
        ],
      },
    ],
    skills: [
      ["Frontend", "React, Next.js (SSR), TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS, Mantine, BEM, design systems"],
      ["Data & back-end", "REST APIs, API integrations, Apollo Client, Node.js/Express, WebSocket, PHP, MySQL, PostgreSQL/Supabase"],
      ["CMS & integrations", "WordPress (ACF Pro, WooCommerce, WPML), Bitrix24, Telegram Bot API, Google Maps API, OpenAI API"],
      ["Practices", "Performance optimization, Core Web Vitals, technical SEO, i18n, responsive / pixel-perfect UI, Agile/Scrum"],
      ["Tools", "Git, GitHub, Bitbucket, Jira, Jest, ESLint, Vercel CI/CD, Figma, AI coding tools (Claude Code)"],
      ["Languages", "Russian (native), English (B1–B2, professional working)"],
    ],
    education: "Self-taught, structured study since 2023 (JavaScript, React, Redux, TypeScript, Next.js, Node.js)",
  },
  {
    file: "Daniil_Karataev_WordPress_Developer_CV",
    title: "Daniil Karataev — WordPress / Full-Stack PHP Developer",
    subject: "Resume: Daniil Karataev, WordPress / Full-Stack PHP Developer, Chișinău, Moldova",
    keywords: "WordPress Developer Full-Stack Developer PHP Developer WooCommerce ACF Pro WPML MySQL JavaScript React Next.js Technical SEO Chișinău Moldova",
    headline: "WordPress / Full-Stack Developer · PHP · JavaScript · React · Next.js",
    summary: "Full-stack WordPress developer in production since 2024: 2 full-time employers, freelance work and 8 commercial websites (two of them my own products), 4 on custom WordPress themes with no page builders and a minimum of third-party plugins. Rebuilt plugin-heavy corporate sites into fast modular platforms, built admin tools that let marketing teams launch pages on their own, and delivered WooCommerce and CRM integrations for clients in Poland and Russia. Also develops two own products with organic Google traffic.",
    experience: [
      {
        role: "Middle Front-end Developer — RocketSEO SRL",
        dates: "Mar 2026 – Nov 2026",
        meta: "Hybrid, Chișinău",
        bullets: [
          "Front-end development at a web agency: 12 projects. Project and client names are covered by an NDA.",
        ],
      },
      {
        role: "Full-Stack WordPress Developer — Freelance",
        dates: "Mar 2025 – Dec 2025",
        meta: "Remote · clients: Samozanyatye.rf (Russia), Webcost web agency (Poland) · WordPress, PHP, MySQL, WooCommerce, JavaScript, React, Bitrix24",
        bullets: [
          "Samozanyatye.rf: merged React landing pages and a plugin-heavy legacy blog into one custom WordPress platform (<b>12–15k unique visitors daily</b>); built an admin <b>landing page builder</b> for marketing and integrated Contact Form 7 with <b>Bitrix24 CRM</b>.",
          "Webcost (gonutz.pl, interpolska.pl): a <b>WooCommerce product configurator</b> for custom nut mixes with a weight cap and automatic pricing, and a nearest-facility finder on an interactive Google Map synced with a sidebar list.",
        ],
      },
      {
        role: "Full-Stack WordPress Developer — AroundWire (incl. ForceWind, Skilful Web Developers)",
        dates: "Feb 2024 – Apr 2025",
        meta: "Full-time, office, Chișinău · WordPress, PHP, MySQL, JavaScript, HTML/CSS (BEM), AJAX, Next.js · Scrum, Jira, Bitbucket",
        bullets: [
          "Rebuilt <b>pro.aroundwire.com</b> from a plugin-heavy site into a modular custom theme with <b>40+ pixel-perfect landing pages</b>; admin page builder let marketing ship <b>5+ landing pages per day</b>.",
          "Built the company website <b>aroundwire.com</b> on <b>Next.js + TypeScript</b> with server rendering and a typed component architecture.",
          "Loaded CSS/JS per block only where used and deferred scripts, reaching <b>70–80+ mobile PageSpeed</b>; integrated lead forms with the call center.",
        ],
      },
    ],
    skills: [
      ["WordPress", "Custom themes and plugins, Gutenberg/custom blocks, ACF Pro, WooCommerce, WPML, WP REST API, hooks"],
      ["Back-end", "PHP, MySQL, PostgreSQL (Supabase), AJAX, REST APIs, third-party API integrations, Node.js/Express"],
      ["Frontend", "JavaScript (ES6+), React, Next.js, TypeScript, HTML5, CSS3/SCSS, BEM, responsive / pixel-perfect UI"],
      ["Integrations", "Bitrix24 CRM, Telegram Bot API, Google Maps API, OpenAI API, Contact Form 7, call-center lead forms"],
      ["Tools & SEO", "Performance optimization (Core Web Vitals), technical SEO, PHPCS (WordPress Coding Standards), ESLint, Jest, Git, GitHub, Bitbucket, Jira, Vercel CI/CD, Figma, AI coding tools (Claude Code), Agile/Scrum"],
      ["Languages", "Russian (native), English (B1–B2, professional working)"],
    ],
    education: "Self-taught, structured study since 2023 (PHP, WordPress, JavaScript, React, Next.js)",
  },
];

const css = `
@page { size: A4; margin: 8.5mm 12.8mm 8mm 13mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 9pt/1.333 "Segoe UI", system-ui, sans-serif; color: #1d1d1f; }
a { color: inherit; text-decoration: none; }
b { font-weight: 600; }
header { border-bottom: 1px solid #1d1d1f; padding-bottom: 4pt; }
h1 { margin: 0; font-size: 21.4pt; line-height: 1.15; font-weight: 700; }
.headline { margin: 0 0 1pt; font-size: 11.3pt; color: #2b5797; }
.contact { color: #333; }
.contact i { font-style: normal; color: #8a8a8a; padding: 0 2.5pt; }
h2 { margin: 5pt 0 1pt; padding-bottom: 0; line-height: 1.25; border-bottom: 1px solid #c9d3e3; color: #2b5797; font-size: 10pt; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
p { margin: 0; }
.entry { margin-top: 2pt; break-inside: avoid; }
.head { display: flex; justify-content: space-between; gap: 12pt; font-weight: 600; }
.head span:last-child { white-space: nowrap; }
.meta { color: #666; }
ul { margin: 1pt 0 0; padding-left: 12pt; }
li { margin: 0; }
.skills { display: grid; grid-template-columns: 88pt 1fr; margin: 0; }
.skills dt { font-weight: 600; }
.skills dd { margin: 0; }
.projects { break-before: page; }
.projects h2 { margin-top: 6pt; }
.projects h2:first-child { margin-top: 0; }
.project { margin-top: 3pt; break-inside: avoid; }
.project .site { color: #2b5797; font-weight: 400; }
.note { margin-top: 4pt; color: #666; }
`;

const line = (items) => items.map(([t, href]) => (href ? link(href, t) : t)).join("<i>|</i>");
const html = (cv) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${cv.title}</title><style>${css}</style></head><body>
<header>
  <h1>Daniil Karataev</h1>
  <p class="headline">${cv.headline}</p>
  <p class="contact">${line(contact)}</p>
  <p class="contact">${line(contact2)}</p>
</header>
<h2>Summary</h2>
<p>${cv.summary}</p>
<h2>Experience</h2>
${cv.experience.map((e) => `<div class="entry">
  <div class="head"><span>${e.role}</span><span>${e.dates}</span></div>
  <div class="meta">${e.meta}</div>
  <ul>${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
</div>`).join("\n")}
<h2>Skills</h2>
<dl class="skills">${cv.skills.map(([k, v]) => `<dt>${k}:</dt><dd>${v}</dd>`).join("")}</dl>
<h2>Education</h2>
<p>${cv.education}</p>
<section class="projects">
<h2>Selected projects</h2>
${projects.map((p) => `<div class="project">
  <div class="head"><span>${p.name}${p.site ? ` · <span class="site">${link(p.site[1], p.site[0])}</span>` : ""}</span><span>${p.where}</span></div>
  <div class="meta">${p.stack}</div>
  <p>${p.text}</p>
</div>`).join("\n")}
<h2>References</h2>
<p>${references}</p>
<p class="note">${footnote}</p>
</section>
</body></html>`;

const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage();
const now = new Date();
for (const cv of cvs) {
  const file = path.join(os.tmpdir(), `${cv.file}.html`);
  fs.writeFileSync(file, html(cv));
  await page.goto("file:///" + file.replace(/\\/g, "/"));
  const pdf = await PDFDocument.load(await page.pdf({ preferCSSPageSize: true, printBackground: true }));
  pdf.setTitle(cv.title, { showInWindowTitleBar: true });
  pdf.setAuthor("Daniil Karataev");
  pdf.setSubject(cv.subject);
  pdf.setKeywords(cv.keywords.split(" "));
  pdf.setCreator("Daniil Karataev");
  pdf.setProducer("Daniil Karataev");
  pdf.setCreationDate(now);
  pdf.setModificationDate(now);
  fs.writeFileSync(path.join(out, `${cv.file}.pdf`), await pdf.save());
  console.log(cv.file, pdf.getPageCount(), "pages");
}
await browser.close();
