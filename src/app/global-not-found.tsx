import type { Metadata } from "next";

import Link from "next/link";

import "./globals.css";
import { display, mono, sans } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404 · Daniil Karataev",
  description: "This page does not exist.",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeContent: "center",
            gap: 16,
            padding: 24,
            textAlign: "center",
          }}
        >
          <p className="mono" style={{ color: "var(--color-ink-3)", letterSpacing: "0.12em", fontSize: "var(--text-xs)" }}>
            404 · NOT FOUND
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display)", lineHeight: 1, letterSpacing: "-0.025em", fontWeight: 300 }}>
            Off the map.
          </h1>
          <p style={{ color: "var(--color-ink-2)" }}>
            <Link href="/" style={{ color: "var(--color-ink)", textDecoration: "underline", textDecorationColor: "var(--color-accent)", textUnderlineOffset: "0.3em" }}>
              ← Back to the portfolio
            </Link>
            {" · "}
            <Link href="/ro" style={{ color: "var(--color-ink)", textDecoration: "underline", textDecorationColor: "var(--color-accent)", textUnderlineOffset: "0.3em" }} lang="ro">
              Pagina principală
            </Link>
            {" · "}
            <Link href="/ru" style={{ color: "var(--color-ink)", textDecoration: "underline", textDecorationColor: "var(--color-accent)", textUnderlineOffset: "0.3em" }} lang="ru">
              На главную
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
