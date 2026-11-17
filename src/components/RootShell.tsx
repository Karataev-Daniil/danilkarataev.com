import type { ReactNode } from "react";

import "@/app/globals.css";
import { display, mono, sans } from "@/lib/fonts";
import type { Locale } from "@/lib/site";

import { Effects } from "./Effects";
import styles from "./RootShell.module.css";

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      // Lets Next.js skip smooth scroll on navigation.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {/* App Router root layout: a plain <head> is the supported way to add an inline script before paint. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script
          // JS-only effects before first paint.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <Effects />
        <div className={styles.page}>{children}</div>
      </body>
    </html>
  );
}
