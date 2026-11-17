import { aboutPhoto } from "@/content/data";
import { getDictionary } from "@/i18n";
import { localName, localePath, person, siteUrl, type Locale } from "@/lib/site";

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const url = `${siteUrl}${localePath[locale] === "/" ? "/" : localePath[locale]}`;
  const personId = `${siteUrl}/#person`;
  const own = localName[locale];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#page`,
        url,
        name: t.meta.title,
        inLanguage: locale,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: person.name,
        inLanguage: ["en", "ro", "ru"],
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: own.name,
        alternateName: [person.name, ...person.alternateNames].filter((n) => n !== own.name),
        givenName: own.firstName,
        familyName: own.lastName,
        jobTitle: "Middle Front-end / Full-stack Developer",
        description: t.meta.description,
        url,
        ...(aboutPhoto ? { image: `${siteUrl}${aboutPhoto.src}` } : {}),
        email: `mailto:${person.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chișinău",
          addressCountry: "MD",
        },
        knowsLanguage: ["en", "ru"],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "WordPress",
          "WooCommerce",
          "PHP",
          "Node.js",
          "Technical SEO",
          "Core Web Vitals",
          "Accessibility",
        ],
        sameAs: [person.telegram.url, person.github.url, person.linkedin.url],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escaped so it can't close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}
