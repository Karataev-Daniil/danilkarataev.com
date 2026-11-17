import type { StaticImageData } from "next/image";

import aroundwire from "@public/projects/aroundwire.webp";
import aroundwirePro from "@public/projects/aroundwire-pro.webp";
import samozanyatye from "@public/projects/samozanyatye.webp";
import interpolska from "@public/projects/interpolska.webp";
import gonutz from "@public/projects/gonutz.webp";
import dinastia from "@public/projects/dinastia.webp";
import goodantshop from "@public/projects/goodantshop.webp";
import demolator from "@public/projects/demolator.webp";
import chinolog from "@public/projects/chinolog.webp";
import flower2go from "@public/projects/flower2go.webp";
import fci from "@public/projects/fci.webp";
import portrait from "@public/about/portrait.webp";

import dinastiaDesktop from "@public/cases/dinastia-desktop.webp";
import dinastiaMobile from "@public/cases/dinastia-mobile.webp";
import goodantshopDesktop from "@public/cases/goodantshop-desktop.webp";
import goodantshopMobile from "@public/cases/goodantshop-mobile.webp";
import demolatorDesktop from "@public/cases/demolator-desktop.webp";
import demolatorMobile from "@public/cases/demolator-mobile.webp";
import chinologDesktop from "@public/cases/chinolog-desktop.webp";
import chinologMobile from "@public/cases/chinolog-mobile.webp";
import chinologOldDesktop from "@public/cases/chinolog-old-desktop.webp";
import chinologOldMobile from "@public/cases/chinolog-old-mobile.webp";
import aroundwireDesktop from "@public/cases/aroundwire-desktop.webp";
import aroundwireMobile from "@public/cases/aroundwire-mobile.webp";
import samozanyatyeDesktop from "@public/cases/samozanyatye-desktop.webp";
import samozanyatyeMobile from "@public/cases/samozanyatye-mobile.webp";
import gonutzDesktop from "@public/cases/gonutz-desktop.webp";
import gonutzMobile from "@public/cases/gonutz-mobile.webp";

/** null shows the DK monogram */
export const aboutPhoto: StaticImageData | null = portrait;

export type ExperienceId = "freelance" | "rocketseo" | "freelance2025" | "aroundwire";

export interface ExperienceEntry {
  id: ExperienceId;
  company: string;
  mark: string;
  current?: boolean;
  links: { label: string; href: string }[];
  tags: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "freelance",
    company: "Freelance",
    mark: "F",
    current: true,
    links: [{ label: "demolator.md", href: "https://demolator.md" }],
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Cloudflare Workers", "Telegram Bot API"],
  },
  {
    id: "rocketseo",
    company: "RocketSEO SRL",
    mark: "R",
    links: [],
    tags: [],
  },
  {
    id: "freelance2025",
    company: "Freelance",
    mark: "F",
    links: [
      { label: "самозанятые.рф", href: "https://xn--80aapgyievp4gwb.xn--p1ai/" },
      { label: "interpolska.pl", href: "https://interpolska.pl" },
    ],
    tags: ["PHP", "WordPress", "WooCommerce", "MySQL", "JavaScript", "React", "Bitrix24", "Google Maps API"],
  },
  {
    id: "aroundwire",
    company: "AroundWire",
    mark: "A",
    links: [],
    tags: ["Next.js", "TypeScript", "React", "PHP", "WordPress", "BEM", "Jira"],
  },
];

export type MapLine = "work" | "own";

export const mapLines: MapLine[] = ["work", "own"];

export type MapNodeId = ExperienceId | "goodantshop" | "dinastia";

export interface MapNode {
  id: MapNodeId;
  name: string;
  line: MapLine;
  /** "YYYY-MM"; stations follow this order, not a time scale */
  start: string;
  ongoing?: boolean;
  /** Experience entry or case study the station opens */
  target: { experience: ExperienceId } | { case: CaseSlug };
  /** Sites shipped there */
  sites?: ProjectId[];
}

export const mapNodes: MapNode[] = [
  { id: "aroundwire", name: "AroundWire", line: "work", start: "2024-02", target: { experience: "aroundwire" }, sites: ["aroundwire", "aroundwirePro"] },
  { id: "freelance2025", name: "Freelance", line: "work", start: "2025-03", target: { experience: "freelance2025" }, sites: ["samozanyatye", "gonutz", "interpolska"] },
  { id: "rocketseo", name: "RocketSEO", line: "work", start: "2026-03", target: { experience: "rocketseo" } },
  { id: "goodantshop", name: "GoodAntShop", line: "own", start: "2026-05", ongoing: true, target: { case: "goodantshop" } },
  { id: "dinastia", name: "Dinastia", line: "own", start: "2026-08", ongoing: true, target: { case: "dinastia" } },
  { id: "freelance", name: "Freelance", line: "work", start: "2026-10", ongoing: true, target: { experience: "freelance" }, sites: ["demolator", "chinolog", "fci", "flower2go"] },
];

export type CaseSlug =
  | "dinastia"
  | "demolator"
  | "chinolog"
  | "goodantshop"
  | "aroundwire"
  | "samozanyatye"
  | "gonutz"
  | "interpolska";

export type ProjectId =
  | "demolator"
  | "chinolog"
  | "flower2go"
  | "fci"
  | "aroundwire"
  | "aroundwirePro"
  | "samozanyatye"
  | "interpolska"
  | "gonutz";

/** A project may be in several groups. */
export type ProjectCategory = "react" | "wordpress";

export const projectCategories: ProjectCategory[] = ["react", "wordpress"];

export interface ProjectEntry {
  id: ProjectId;
  domain: string;
  href?: string;
  image?: StaticImageData;
  stack: string[];
  category: ProjectCategory[];
  context: string;
  year: string;
  /** Without href: "offline" = site down, "private" = no public link, "dev" = not launched yet */
  status?: "offline" | "private" | "dev";
  /** Card opens this case study */
  caseSlug?: CaseSlug;
}

export const projects: ProjectEntry[] = [
  {
    id: "demolator",
    domain: "demolator.md",
    href: "https://demolator.md",
    image: demolator,
    stack: ["Next.js 15", "TypeScript", "Telegram Bot API", "Cloudflare Workers"],
    category: ["react"],
    context: "Freelance",
    year: "2026",
    caseSlug: "demolator",
  },
  {
    id: "chinolog",
    domain: "chinolog.md",
    status: "dev",
    image: chinolog,
    stack: ["Next.js 16", "TypeScript", "Supabase", "Cloudflare Workers"],
    category: ["react"],
    context: "Freelance",
    year: "2026",
    caseSlug: "chinolog",
  },
  {
    id: "fci",
    domain: "fci.md",
    status: "dev",
    image: fci,
    stack: ["Next.js 16", "TypeScript", "CSS Modules", "Cloudflare Workers"],
    category: ["react"],
    context: "Freelance",
    year: "2026",
  },
  {
    id: "flower2go",
    domain: "flower2go.co.il",
    status: "dev",
    image: flower2go,
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel"],
    category: ["react"],
    context: "Freelance",
    year: "2026",
  },
  {
    id: "interpolska",
    domain: "interpolska.pl",
    href: "https://interpolska.pl",
    image: interpolska,
    stack: ["WordPress", "PHP", "JavaScript", "Google Maps API"],
    category: ["wordpress"],
    context: "Freelance",
    year: "2025",
    caseSlug: "interpolska",
  },
  {
    id: "aroundwire",
    domain: "aroundwire.com",
    status: "offline",
    image: aroundwire,
    stack: ["Next.js", "TypeScript", "React", "SSR"],
    category: ["react"],
    context: "AroundWire",
    year: "2024–2025",
    caseSlug: "aroundwire",
  },
  {
    id: "aroundwirePro",
    domain: "pro.aroundwire.com",
    status: "offline",
    image: aroundwirePro,
    stack: ["WordPress", "PHP", "MySQL", "JavaScript", "BEM"],
    category: ["wordpress"],
    context: "AroundWire",
    year: "2024–2025",
    caseSlug: "aroundwire",
  },
  {
    id: "samozanyatye",
    domain: "самозанятые.рф",
    href: "https://xn--80aapgyievp4gwb.xn--p1ai/",
    image: samozanyatye,
    stack: ["WordPress", "PHP", "React", "Bitrix24"],
    category: ["react", "wordpress"],
    context: "Freelance",
    year: "2025",
    caseSlug: "samozanyatye",
  },
  {
    id: "gonutz",
    domain: "gonutz.pl",
    status: "offline",
    image: gonutz,
    stack: ["WooCommerce", "PHP", "JavaScript"],
    category: ["wordpress"],
    context: "Freelance",
    year: "2025",
    caseSlug: "gonutz",
  },
];

export type ProductId = "dinastia" | "goodantshop";

export interface ProductEntry {
  id: ProductId;
  name: string;
  domain: string;
  href: string;
  image: StaticImageData;
  stack: string[];
  code?: string;
  caseSlug: CaseSlug;
}

export const products: ProductEntry[] = [
  {
    id: "dinastia",
    name: "Dinastia",
    domain: "dinastia.md",
    href: "https://dinastia.md",
    image: dinastia,
    stack: ["Next.js App Router", "React", "Supabase", "Vercel", "Brand & logo"],
    caseSlug: "dinastia",
  },
  {
    id: "goodantshop",
    name: "GoodAntShop",
    domain: "goodantshop.md",
    href: "https://goodantshop.md",
    image: goodantshop,
    stack: ["React", "Vite", "SSR prerender", "Node.js", "Vercel serverless"],
    caseSlug: "goodantshop",
  },
];

export interface CaseEntry {
  slug: CaseSlug;
  name: string;
  live: { label: string; href: string }[];
  /** Offline domains, shown muted */
  offline?: string[];
  /** Omitted when the code is private */
  code?: string;
  /** "theme": the repo holds only the WordPress theme */
  codeScope?: "theme";
  /** "request": on request; "none": client code */
  codeNote?: "request" | "none";
  /** Related public repo */
  related?: { label: string; href: string };
  stack: string[];
  /** No public link (changes the placeholder text) */
  privateSite?: boolean;
  /** Domain of a site that is built but not launched yet */
  inDevelopment?: string;
  /** Screens of the site this one replaces, shown next to the new ones */
  before?: { desktop: StaticImageData; mobile?: StaticImageData };
  /** No screenshot = styled placeholder; a video takes the desktop slot */
  shots: { domain: string; desktop?: StaticImageData; mobile?: StaticImageData; video?: { src: string; poster: string } };
  /** Last significant change of the case page (YYYY-MM-DD): its lastmod in the sitemap */
  updated: string;
}

/** Last significant change of the home pages (YYYY-MM-DD): their lastmod in the sitemap */
export const homeUpdated = "2026-11-17";

export const cases: CaseEntry[] = [
  {
    slug: "dinastia",
    updated: "2026-11-17",
    name: "Dinastia",
    live: [{ label: "dinastia.md", href: "https://dinastia.md" }],
    codeNote: "request",
    stack: ["Next.js App Router", "React 19", "Supabase (Postgres, Auth, Storage)", "next/image", "Resend", "Telegram Bot API", "Vercel", "node:test"],
    shots: { domain: "dinastia.md", desktop: dinastiaDesktop, mobile: dinastiaMobile },
  },
  {
    slug: "goodantshop",
    updated: "2026-11-03",
    name: "GoodAntShop",
    live: [{ label: "goodantshop.md", href: "https://goodantshop.md" }],
    codeNote: "request",
    stack: ["React 18", "Vite", "React Router", "SSR prerender", "react-helmet-async", "Leaflet", "Vercel serverless", "Resend", "sharp"],
    shots: { domain: "goodantshop.md", desktop: goodantshopDesktop, mobile: goodantshopMobile },
  },
  {
    slug: "demolator",
    updated: "2026-11-17",
    name: "Demolator",
    live: [{ label: "demolator.md", href: "https://demolator.md" }],
    codeNote: "request",
    stack: ["Next.js 15 App Router", "React 19", "TypeScript strict", "CSS Modules", "JSON-LD", "Telegram Bot API", "Cloudflare Workers", "OpenNext"],
    shots: { domain: "demolator.md", desktop: demolatorDesktop, mobile: demolatorMobile },
  },
  {
    slug: "chinolog",
    updated: "2026-11-17",
    name: "chinolog.md",
    live: [],
    inDevelopment: "chinolog.md",
    codeNote: "none",
    stack: ["Next.js 16 (static export)", "React 19", "TypeScript", "CSS Modules", "Supabase (Auth, Storage)", "Cloudflare Workers", "Turnstile", "Schema.org"],
    shots: { domain: "chinolog.md", desktop: chinologDesktop, mobile: chinologMobile },
    before: { desktop: chinologOldDesktop, mobile: chinologOldMobile },
  },
  {
    slug: "interpolska",
    updated: "2026-10-20",
    name: "INTER Polska",
    live: [{ label: "interpolska.pl", href: "https://interpolska.pl" }],
    codeNote: "none",
    stack: ["WordPress", "PHP", "JavaScript", "Google Maps API", "WP Store Locator"],
    shots: { domain: "interpolska.pl", desktop: interpolska },
  },
  {
    slug: "aroundwire",
    updated: "2026-11-03",
    name: "AroundWire",
    live: [],
    offline: ["aroundwire.com", "pro.aroundwire.com"],
    codeNote: "none",
    stack: ["Next.js", "TypeScript", "React", "SSR", "WordPress", "PHP", "ACF Pro", "Contact Form 7", "BEM", "Jira", "Bitbucket"],
    shots: { domain: "aroundwire.com", desktop: aroundwireDesktop, mobile: aroundwireMobile },
  },
  {
    slug: "samozanyatye",
    updated: "2026-10-08",
    name: "Samozanyatye.rf",
    live: [{ label: "самозанятые.рф", href: "https://xn--80aapgyievp4gwb.xn--p1ai/" }],
    codeNote: "none",
    stack: ["WordPress", "PHP", "MySQL", "JavaScript", "React", "Contact Form 7", "Bitrix24"],
    shots: { domain: "самозанятые.рф", desktop: samozanyatyeDesktop, mobile: samozanyatyeMobile },
  },
  {
    slug: "gonutz",
    updated: "2026-10-20",
    name: "GoNutz",
    live: [],
    offline: ["gonutz.pl"],
    codeNote: "none",
    related: {
      label: "woocommerce-purchase-price-import",
      href: "https://github.com/Karataev-Daniil/woocommerce-purchase-price-import",
    },
    stack: ["WooCommerce", "WordPress", "PHP", "JavaScript"],
    shots: { domain: "gonutz.pl", desktop: gonutzDesktop, mobile: gonutzMobile },
  },
];

export function getCase(slug: string): CaseEntry | undefined {
  return cases.find((c) => c.slug === slug);
}

export function nextCase(slug: CaseSlug): CaseEntry {
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length] ?? cases[0]!;
}

export type StackGroupId = "frontend" | "backend" | "cms" | "practices" | "tools";

export const stack: { id: StackGroupId; items: string[] }[] = [
  {
    id: "frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "SCSS / CSS Modules"],
  },
  {
    id: "backend",
    items: ["Node.js / Express", "PHP", "MySQL", "Supabase", "REST", "Apollo"],
  },
  { id: "cms", items: ["WordPress", "WooCommerce", "ACF Pro", "WPML"] },
  {
    id: "practices",
    items: ["Technical SEO", "Structured data", "Core Web Vitals", "i18n", "Accessibility"],
  },
  { id: "tools", items: ["Git", "GitHub", "Vercel", "Figma", "Jira", "Claude Code"] },
];
