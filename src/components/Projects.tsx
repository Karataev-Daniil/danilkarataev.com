import Image from "next/image";
import Link from "next/link";

import { projectCategories, projects, type ProjectEntry } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { delay } from "@/lib/delay";
import { casePath, type Locale } from "@/lib/site";

import { ArrowUpRight } from "./Icons";
import { ProjectFilter } from "./ProjectFilter";
import styles from "./Projects.module.css";
import ui from "./ui.module.css";

const cats = (p: ProjectEntry) => p.category.join(" ");

export function Projects({ t, locale }: { t: Dictionary; locale: Locale }) {
  const options = [
    { id: "all" as const, label: t.projects.filter.all, count: projects.length },
    ...projectCategories.map((c) => ({
      id: c,
      label: t.projects.filter.groups[c],
      count: projects.filter((p) => p.category.includes(c)).length,
    })),
  ].map((o) => ({ ...o, status: t.projects.filter.status(o.count) }));

  return (
    <ProjectFilter label={t.projects.filter.label} options={options}>
      <ol className={styles.index}>
        {projects.map((p, i) => (
          <li key={p.id} data-cat={cats(p)} className={styles.row} data-reveal style={delay(i % 3)}>
            <ProjectRow p={p} t={t} locale={locale} />
          </li>
        ))}
      </ol>
    </ProjectFilter>
  );
}

function ProjectRow({ p, t, locale }: { p: ProjectEntry; t: Dictionary; locale: Locale }) {
  const copy = t.projects.items[p.id];
  const live = Boolean(p.href);
  const caseHref = p.caseSlug ? casePath(locale, p.caseSlug) : undefined;

  return (
    <article className={styles.entry} aria-labelledby={`project-${p.id}`}>
      <div className={styles.thumb}>
        {p.image ? (
          <Image src={p.image} alt="" placeholder="blur" sizes="(min-width: 60rem) 160px, 96px" className={styles.img} />
        ) : (
          <span className={`mono ${styles.placeholder}`} aria-hidden="true">
            {p.domain}
          </span>
        )}
      </div>

      <div className={styles.main}>
        <h3 id={`project-${p.id}`} className={styles.title}>
          {caseHref ? (
            <Link href={caseHref} className={ui.stretched}>
              {copy.title}
            </Link>
          ) : live ? (
            <a href={p.href} target="_blank" rel="noopener noreferrer" className={ui.stretched}>
              {copy.title}
            </a>
          ) : (
            copy.title
          )}
        </h3>
        <p className={styles.kind}>{copy.kind}</p>
        <p className={styles.summary}>{copy.summary}</p>
      </div>

      <div className={`mono ${styles.meta}`}>
        <p>
          {p.context} · {p.year}
        </p>
        <p className={styles.stack}>{p.stack.join(" · ")}</p>
        {live ? (
          <a
            className={styles.domain}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.projects.openLive(p.domain)}
          >
            {p.domain}
            <ArrowUpRight className={styles.arrow} />
          </a>
        ) : (
          <p className={styles.off}>{p.status === "private" ? t.projects.privateNote : p.status === "dev" ? t.projects.devNote : t.projects.offlineNote}</p>
        )}
      </div>
    </article>
  );
}
