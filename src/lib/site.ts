export const locales = ["en", "ro", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const productionUrl = "https://danilkarataev.com";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_ENV === "production") return productionUrl;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

/** Indexed on production only; NEXT_PUBLIC_ALLOW_INDEXING overrides. */
const indexingFlag = process.env.NEXT_PUBLIC_ALLOW_INDEXING;
export const allowIndexing = indexingFlag ? indexingFlag === "true" : process.env.VERCEL_ENV === "production";

export const localePath: Record<Locale, string> = {
  en: "/",
  ro: "/ro",
  ru: "/ru",
};

export const ogLocale: Record<Locale, string> = { en: "en_US", ro: "ro_RO", ru: "ru_RU" };
export const intlLocale: Record<Locale, string> = { en: "en-US", ro: "ro-RO", ru: "ru-RU" };

export const localeName: Record<Locale, string> = { en: "English", ro: "Română", ru: "Русский" };

/** hreflang map, English as x-default */
export function languageAlternates(path: (locale: Locale) => string): Record<string, string> {
  return { ...Object.fromEntries(locales.map((l) => [l, path(l)])), "x-default": path("en") };
}

export const person = {
  name: "Daniil Karataev",
  firstName: "Daniil",
  lastName: "Karataev",
  /** Spellings that refer to the same person */
  alternateNames: ["Danil Karataev", "Danil Carataev", "Даниил Каратаев", "Данил Каратаев"],
  email: "dirings52445@gmail.com",
  telegram: {
    user: "DaniilKarataev",
    url: "https://t.me/DaniilKarataev",
    label: "t.me/",
  },
  github: {
    user: "Karataev-Daniil",
    url: "https://github.com/Karataev-Daniil",
    label: "github.com/",
  },
  linkedin: {
    user: "daniil-karataev",
    url: "https://www.linkedin.com/in/daniil-karataev",
    label: "linkedin.com/in/",
  },
  cv: {
    frontend: "/cv/Daniil_Karataev_Frontend_Developer_CV.pdf",
    wordpress: "/cv/Daniil_Karataev_WordPress_Developer_CV.pdf",
  },
} as const;

/** The name as each language writes it: Cyrillic on the Russian pages, so search engines read «Даниил Каратаев» there */
export const localName: Record<Locale, { name: string; firstName: string; lastName: string }> = {
  en: { name: person.name, firstName: person.firstName, lastName: person.lastName },
  ro: { name: person.name, firstName: person.firstName, lastName: person.lastName },
  ru: { name: "Даниил Каратаев", firstName: "Даниил", lastName: "Каратаев" },
};

export function casePath(locale: Locale, slug: string): string {
  return `${locale === "en" ? "" : `/${locale}`}/projects/${slug}`;
}
