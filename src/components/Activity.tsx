import type { CSSProperties } from "react";

import type { Dictionary } from "@/i18n";
import { getGitHubData, type ContributionDay } from "@/lib/github";
import { intlLocale, person, type Locale } from "@/lib/site";

import styles from "./Activity.module.css";
import { GitHubMark } from "./Icons";
import ui from "./ui.module.css";

const utc = (date: string) => new Date(`${date}T00:00:00Z`);

function toWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  const first = days[0];
  if (!first) return [];
  const pad = utc(first.date).getUTCDay(); // calendar weeks start on Sunday
  const cells: (ContributionDay | null)[] = [...Array<null>(pad).fill(null), ...days];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

interface Props {
  t: Dictionary;
  locale: Locale;
}

export async function Activity({ t, locale }: Props) {
  const { calendar } = await getGitHubData();
  const fmtLocale = intlLocale[locale];
  const dayFmt = new Intl.DateTimeFormat(fmtLocale, { timeZone: "UTC", day: "numeric", month: "short", year: "numeric" });
  const numFmt = new Intl.NumberFormat(fmtLocale);

  return (
    <div className={styles.wrap}>
      {calendar ? (
        <div className={styles.calendarCard} data-reveal>
          <div className={styles.summary}>
            <div className={styles.total}>
              <span className={styles.totalNum}>{numFmt.format(calendar.total)}</span>
              <span className={styles.totalLabel}>
                {t.activity.contributions}
                <span className="mono">{t.activity.lastYear}</span>
              </span>
            </div>
            <dl className={styles.streaks}>
              <div>
                <dt className="mono">{t.activity.activeDays}</dt>
                <dd>{numFmt.format(calendar.days.filter((d) => d.count > 0).length)}</dd>
              </div>
            </dl>
            <a className={`${ui.link} ${styles.profile}`} href={person.github.url} target="_blank" rel="noopener noreferrer me">
              <GitHubMark className={ui.btnIcon} />
              {t.activity.profile}
            </a>
          </div>

          <Heatmap
            days={calendar.days}
            label={t.activity.heatmapLabel(calendar.total)}
            title={(d) => t.activity.dayTitle(d.count, dayFmt.format(utc(d.date)))}
            months={t.activity.months}
            weekdays={t.activity.weekdays}
          />

          <div className={`mono ${styles.legend}`} aria-hidden="true">
            <span>{t.activity.updated}</span>
            <span className={styles.scale}>
              {t.activity.less}
              {[0, 1, 2, 3, 4].map((l) => (
                <i key={l} className={styles[`l${l}`]} />
              ))}
              {t.activity.more}
            </span>
          </div>
        </div>
      ) : (
        <div className={`${ui.card} ${styles.unavailable}`} data-reveal>
          <div className={styles.ghost} aria-hidden="true" />
          <div className={styles.unavailableText}>
            <p className={styles.unavailableTitle}>{t.activity.unavailableTitle}</p>
            <p>{t.activity.unavailableText}</p>
            <a className={ui.btn} href={person.github.url} target="_blank" rel="noopener noreferrer me">
              <GitHubMark className={ui.btnIcon} />
              {t.activity.profile}
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

interface HeatmapProps {
  days: ContributionDay[];
  label: string;
  title: (d: ContributionDay) => string;
  months: string[];
  weekdays: string[];
}

function Heatmap({ days, label, title, months, weekdays }: HeatmapProps) {
  const weeks = toWeeks(days);
  const monthLabels: { col: number; text: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, col) => {
    const firstDay = week.find((d): d is ContributionDay => d !== null);
    if (!firstDay) return;
    const m = utc(firstDay.date).getUTCMonth();
    if (m !== lastMonth) {
      // Skip a label in the partial first column.
      if (!(col === 0 && utc(firstDay.date).getUTCDate() > 21)) monthLabels.push({ col, text: months[m] ?? "" });
      lastMonth = m;
    }
  });

  return (
    <div className={styles.scroller} data-scroll-end tabIndex={0} role="region" aria-label={label}>
      <div className={styles.heatmap} style={{ "--weeks": weeks.length } as CSSProperties} role="img" aria-label={label}>
        <div className={`mono ${styles.months}`}>
          {monthLabels.map((m) => (
            <span key={`${m.col}-${m.text}`} style={{ gridColumn: `${m.col + 1} / span 3` }}>
              {m.text}
            </span>
          ))}
        </div>
        <div className={`mono ${styles.weekdays}`}>
          <span style={{ gridRow: 2 }}>{weekdays[0]}</span>
          <span style={{ gridRow: 4 }}>{weekdays[1]}</span>
          <span style={{ gridRow: 6 }}>{weekdays[2]}</span>
        </div>
        <div className={styles.cells}>
          {weeks.flatMap((week, w) =>
            Array.from({ length: 7 }, (_, d) => {
              const day = week[d];
              if (!day) return <span key={`${w}-${d}`} className={styles.empty} />;
              return <span key={day.date} className={styles[`l${day.level}`]} title={title(day)} />;
            }),
          )}
        </div>
      </div>
    </div>
  );
}
