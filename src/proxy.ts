import { NextResponse, type NextRequest } from "next/server";

import { getCase } from "@/content/data";
import { localePath, type Locale } from "@/lib/site";

/** A project that is no longer on the site sends visitors and search engines to the home page of its language */
export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^(?:\/(ro|ru))?\/projects\/([^/]+)\/?$/);
  if (!match || getCase(decodeURIComponent(match[2]!))) return NextResponse.next();
  const locale = (match[1] ?? "en") as Locale;
  return NextResponse.redirect(new URL(localePath[locale], request.url), 308);
}

export const config = {
  matcher: ["/projects/:slug", "/:locale(ro|ru)/projects/:slug"],
};
