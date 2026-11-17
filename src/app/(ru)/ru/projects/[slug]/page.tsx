import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CasePage } from "@/components/CasePage";
import { cases, getCase } from "@/content/data";
import { buildCaseMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: PageProps<"/ru/projects/[slug]">,
): Promise<Metadata> {
  const entry = getCase((await params).slug);
  return entry
    ? buildCaseMetadata("ru", entry)
    : { metadataBase: new URL(siteUrl), robots: { index: false } };
}

export default async function Page({ params }: PageProps<"/ru/projects/[slug]">) {
  const entry = getCase((await params).slug);
  if (!entry) notFound();
  return <CasePage locale="ru" entry={entry} />;
}
