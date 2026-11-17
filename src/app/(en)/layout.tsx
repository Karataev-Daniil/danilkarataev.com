import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RootShell } from "@/components/RootShell";
import { siteUrl } from "@/lib/site";

export { viewport } from "@/lib/metadata";

/** Base for relative OG image URLs. */
export const metadata: Metadata = { metadataBase: new URL(siteUrl) };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
