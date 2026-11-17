import type { MetadataRoute } from "next";

import { cases, homeUpdated } from "@/content/data";
import { casePath, localePath, locales, siteUrl, type Locale } from "@/lib/site";

const priority: Record<Locale, number> = { en: 1, ro: 0.9, ru: 0.9 };

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath[l]}`]));
  const home: MetadataRoute.Sitemap = locales.map((l) => ({
    url: homeLanguages[l]!,
    lastModified: homeUpdated,
    changeFrequency: "weekly",
    priority: priority[l],
    alternates: { languages: homeLanguages },
  }));
  const casePages: MetadataRoute.Sitemap = cases.flatMap((c) => {
    const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}${casePath(l, c.slug)}`]));
    return locales.map((l) => ({
      url: languages[l]!,
      lastModified: c.updated,
      changeFrequency: "monthly" as const,
      priority: priority[l] * 0.8,
      alternates: { languages },
    }));
  });
  return [...home, ...casePages];
}
