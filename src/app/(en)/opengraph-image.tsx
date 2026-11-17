import { en } from "@/i18n/en";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = en.meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

/** Share card: name, role and the work line of the career route (src/lib/og.tsx). */
export default function Image() {
  return renderOgImage("en");
}
