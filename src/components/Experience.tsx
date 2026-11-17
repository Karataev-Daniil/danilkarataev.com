import { experience } from "@/content/data";
import type { Dictionary } from "@/i18n";

import styles from "./Experience.module.css";
import ui from "./ui.module.css";

export function Experience({ t }: { t: Dictionary }) {
  return (
    <ol className={styles.list}>
      {experience.map((job) => {
        const copy = t.experience.items[job.id];
        return (
          <li key={job.id} id={`exp-${job.id}`} data-reveal className={styles.item}>
            <article className={styles.entry} aria-labelledby={`job-${job.id}`}>
              <header className={styles.head}>
                <h3 id={`job-${job.id}`} className={styles.company}>
                  {job.company}
                </h3>
                <p className={styles.role}>{copy.role}</p>
                <p className={`mono ${styles.meta}`}>
                  <span>
                    {copy.dates}
                    {job.current ? <span className={styles.current}> · {t.experience.current}</span> : null}
                  </span>
                  <span>
                    {copy.place} · {copy.format}
                  </span>
                </p>
              </header>

              <div className={styles.body}>
                <p className={styles.summary}>{copy.summary}</p>

                <ul className={styles.points}>
                  {copy.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                {copy.extra ? <p className={styles.extra}>{copy.extra}</p> : null}

                {job.links.length ? (
                  <p className={styles.links}>
                    {job.links.map((l) => (
                      <a key={l.href} className={ui.link} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </p>
                ) : null}
                {job.tags.length ? (
                  <ul className={`${ui.chips} ${styles.tags}`} aria-label={t.nav.stack}>
                    {job.tags.map((tag) => (
                      <li key={tag} className={ui.chip}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
