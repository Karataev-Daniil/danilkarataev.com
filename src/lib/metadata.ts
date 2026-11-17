import type { Metadata, Viewport } from "next";

import type { CaseEntry } from "@/content/data";
import { getDictionary } from "@/i18n";

import { allowIndexing, casePath, languageAlternates, localName, localePath, locales, ogLocale, person, siteUrl, type Locale } from "./site";

const otherOgLocales = (locale: Locale) => locales.filter((l) => l !== locale).map((l) => ogLocale[l]);

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: localName[locale].name,
    authors: [{ name: localName[locale].name, url: person.github.url }],
    creator: localName[locale].name,
    keywords: [
      ...new Set([localName[locale].name, person.name]),
      "front-end developer",
      "full-stack developer",
      "React",
      "Next.js",
      "TypeScript",
      "WordPress",
      "Chișinău",
      "Moldova",
    ],
    alternates: {
      canonical: localePath[locale],
      languages: languageAlternates((l) => localePath[l]),
    },
    openGraph: {
      type: "profile",
      firstName: localName[locale].firstName,
      lastName: localName[locale].lastName,
      title: t.meta.title,
      description: t.meta.description,
      url: localePath[locale],
      siteName: localName[locale].name,
      locale: ogLocale[locale],
      alternateLocale: otherOgLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: allowIndexing, follow: allowIndexing },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  // Hex twins of --color-paper (light / dark) for browser chrome.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0d131c" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export function buildCaseMetadata(locale: Locale, entry: CaseEntry): Metadata {
  const t = getDictionary(locale);
  const copy = t.cases.items[entry.slug];
  const title = t.cases.ui.metaTitle(copy.title);
  return {
    metadataBase: new URL(siteUrl),
    title,
    description: copy.description,
    applicationName: localName[locale].name,
    authors: [{ name: localName[locale].name, url: person.github.url }],
    creator: localName[locale].name,
    alternates: {
      canonical: casePath(locale, entry.slug),
      languages: languageAlternates((l) => casePath(l, entry.slug)),
    },
    openGraph: {
      type: "article",
      title,
      description: copy.description,
      url: casePath(locale, entry.slug),
      siteName: localName[locale].name,
      locale: ogLocale[locale],
      alternateLocale: otherOgLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.description,
    },
    robots: { index: allowIndexing, follow: allowIndexing },
    formatDetection: { telephone: false, email: false, address: false },
  };
}
