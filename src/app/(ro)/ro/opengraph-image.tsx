import { ro } from "@/i18n/ro";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = ro.meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

/** Share card: name, role and the work line of the career route (src/lib/og.tsx). */
export default function Image() {
  return renderOgImage("ro");
}
