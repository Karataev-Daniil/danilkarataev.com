import Link from "next/link";
import { Fragment, type CSSProperties } from "react";

import { mapLines, mapNodes, projects, type MapLine } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { delay } from "@/lib/delay";
import { currentMonth } from "@/lib/now";
import { casePath, intlLocale, type Locale } from "@/lib/site";

import styles from "./CareerMap.module.css";

/** A metro diagram, not to scale: every station gets its own column, in the order it started. */
export async function CareerMap({ t, locale }: { t: Dictionary; locale: Locale }) {
  const now = await currentMonth();
  const nowLabel = new Intl.DateTimeFormat(intlLocale[locale], { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${now}-01T00:00:00Z`),
  );
  const stations = [...mapNodes].sort((a, b) => a.start.localeCompare(b.start));
  const row = (line: MapLine) => mapLines.indexOf(line) * 2 + 2;
  const firstColumn = (line: MapLine) => stations.findIndex((n) => n.line === line) + 1;

  return (
    <figure className={styles.map} aria-label={t.map.label}>
      <div className={styles.board} style={{ "--stations": stations.length } as CSSProperties}>
        {mapLines.map((line) => (
          <Fragment key={line}>
            <span
              className={`mono ${styles.lineName}`}
              data-line={line}
              style={{ gridRow: row(line) - 1, gridColumn: `${firstColumn(line)} / -1` }}
              aria-hidden="true"
            >
              {t.map.lines[line]}
            </span>
            <span
              className={styles.track}
              data-line={line}
              style={{ gridRow: row(line), gridColumn: `${firstColumn(line)} / -1` }}
              aria-hidden="true"
            />
          </Fragment>
        ))}

        <ol className={styles.stations}>
          {stations.map((n, i) => {
            const target = n.target;
            const href = "experience" in target ? `#exp-${target.experience}` : casePath(locale, target.case);
            const period =
              "experience" in target ? t.experience.items[target.experience].dates : t.cases.items[target.case].period;
            const sites = (n.sites ?? []).flatMap((id) => projects.filter((p) => p.id === id));
            const style = { "--col": i + 1, "--row": row(n.line), ...delay(3 + Math.min(i, 5)) } as CSSProperties;

            return (
              <li
                key={n.id}
                className={styles.station}
                style={style}
                data-line={n.line}
                data-ongoing={n.ongoing ? "" : undefined}
                data-intro
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={`mono ${styles.lineTag}`}>{t.map.lines[n.line]}</span>
                <p className={styles.name}>
                  {"case" in target ? (
                    <Link href={href} className={styles.nameLink}>
                      {n.name}
                    </Link>
                  ) : (
                    <a href={href} className={styles.nameLink}>
                      {n.name}
                    </a>
                  )}
                </p>
                <p className={styles.note}>{t.map.nodes[n.id]}</p>
                <p className={`mono ${styles.dates}`}>{period}</p>
                {sites.length ? (
                  <p className={`mono ${styles.sites}`}>
                    {sites.map((p) =>
                      p.caseSlug ? (
                        <Link key={p.id} href={casePath(locale, p.caseSlug)}>
                          {p.domain}
                        </Link>
                      ) : (
                        <span key={p.id}>{p.domain}</span>
                      ),
                    )}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ol>

        <p className={`mono ${styles.now}`}>
          <span className={styles.terminus} aria-hidden="true" />
          {t.map.now} · {nowLabel}
        </p>
      </div>

      <figcaption className={`mono ${styles.legend}`}>
        <span>
          <span className={styles.keyDone} aria-hidden="true" />
          {t.map.legend.done}
        </span>
        <span>
          <span className={styles.keyOngoing} aria-hidden="true" />
          {t.map.legend.ongoing}
        </span>
        <span>{t.map.legend.scale}</span>
      </figcaption>
    </figure>
  );
}
