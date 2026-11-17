import { cases, getCase } from "@/content/data";
import { en } from "@/i18n/en";
import { ogSize, renderCaseOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = en.meta.ogAlt;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

/** Share card for a case: title, kind, stack and outcome figures (src/lib/og.tsx). */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const entry = getCase((await params).slug) ?? cases[0]!;
  return renderCaseOgImage("en", entry.slug, entry.stack);
}
