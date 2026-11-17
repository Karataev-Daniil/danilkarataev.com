import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";

import { mapNodes, type CaseSlug } from "@/content/data";
import { getDictionary } from "@/i18n";

import { localName, siteUrl, type Locale } from "./site";

export const ogSize = { width: 1200, height: 630 };

const siteHost = new URL(siteUrl).host;

/** Hex twins of the light theme tokens (globals.css); next/og can't read CSS variables. */
const color = {
  paper: "#f8f4ec",
  ink: "#182230",
  ink2: "#3e4957",
  ink3: "#5e6773",
  rule: "#d2cbbf",
  accent: "#cf3a21",
};

async function loadFonts() {
  "use cache";
  cacheLife("max");
  const read = async (file: string) => {
    const buf = await readFile(join(process.cwd(), "src/assets/fonts", file));
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
  };
  const [displayLight, displayBold, sans, sansMedium, mono] = await Promise.all([
    read("Literata-Light.ttf"),
    read("Literata-SemiBold.ttf"),
    read("GolosText-Regular.ttf"),
    read("GolosText-Medium.ttf"),
    read("IBMPlexMono-Regular.ttf"),
  ]);
  return [
    { name: "Literata", data: displayLight, weight: 300 as const, style: "normal" as const },
    { name: "Literata", data: displayBold, weight: 600 as const, style: "normal" as const },
    { name: "Golos Text", data: sans, weight: 400 as const, style: "normal" as const },
    { name: "Golos Text", data: sansMedium, weight: 500 as const, style: "normal" as const },
    { name: "IBM Plex Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}

function TopRow({ left }: { left: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, fontFamily: "IBM Plex Mono", fontSize: 20, color: color.ink3 }}>
      <span>{left}</span>
      <span style={{ flex: 1, height: 1, background: color.rule }} />
      <span>{siteHost}</span>
    </div>
  );
}

export async function renderOgImage(locale: Locale) {
  const t = getDictionary(locale);
  const fonts = await loadFonts();
  const stations = [...mapNodes].filter((n) => n.line === "work").sort((a, b) => a.start.localeCompare(b.start));
  const stats = t.stats
    .slice(1)
    .map((s) => `${s.value} ${s.label}`)
    .join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px 52px",
          background: color.paper,
          color: color.ink,
          fontFamily: "Golos Text",
        }}
      >
        <TopRow left={t.hero.location} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Literata", fontWeight: 300, fontSize: 124, lineHeight: 1, letterSpacing: -3 }}>
            {localName[locale].name}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 36, fontWeight: 500 }}>{t.hero.role}</div>
          <div style={{ display: "flex", marginTop: 8, fontFamily: "IBM Plex Mono", fontSize: 22, color: color.ink3 }}>
            {t.hero.focus}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <div style={{ position: "absolute", left: 9, right: 0, top: 7, height: 4, background: color.accent }} />
            <div style={{ position: "absolute", right: 0, top: 0, width: 4, height: 18, background: color.accent }} />
            {stations.map((n) => (
              <div key={n.id} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    border: `4px solid ${color.accent}`,
                    background: n.ongoing ? color.paper : color.accent,
                  }}
                />
                <div style={{ display: "flex", marginTop: 12, fontFamily: "Literata", fontWeight: 600, fontSize: 22 }}>{n.name}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontFamily: "IBM Plex Mono", fontSize: 18, color: color.ink3 }}>{stats}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}

export async function renderCaseOgImage(locale: Locale, slug: CaseSlug, stack: string[]) {
  const t = getDictionary(locale);
  const copy = t.cases.items[slug];
  const metrics = (copy.outcome.metrics ?? []).slice(0, 3);
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px 60px",
          background: color.paper,
          color: color.ink,
          fontFamily: "Golos Text",
        }}
      >
        <TopRow left={t.cases.ui.label} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Literata", fontWeight: 300, fontSize: 108, lineHeight: 1, letterSpacing: -3 }}>
            {copy.title}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 32, fontWeight: 500, color: color.ink2 }}>{copy.kind}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
            {stack.slice(0, 4).map((s) => (
              <span
                key={s}
                style={{
                  display: "flex",
                  fontFamily: "IBM Plex Mono",
                  fontSize: 18,
                  color: color.ink2,
                  padding: "6px 12px",
                  border: `1px solid ${color.rule}`,
                  borderRadius: 2,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 48 }}>
            {metrics.map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", maxWidth: 250 }}>
                <span style={{ fontFamily: "Literata", fontWeight: 300, fontSize: 48, lineHeight: 1 }}>{m.value}</span>
                <span style={{ fontSize: 17, color: color.ink3, marginTop: 8, lineHeight: 1.3 }}>{m.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontFamily: "Literata", fontWeight: 600, fontSize: 26 }}>{localName[locale].name}</div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 6, background: color.accent, display: "flex" }} />
      </div>
    ),
    { ...ogSize, fonts },
  );
}
