import Image from "next/image";
import Link from "next/link";

import { products } from "@/content/data";
import type { Dictionary } from "@/i18n";
import { casePath, type Locale } from "@/lib/site";

import { ArrowRight, ArrowUpRight, GitHubMark, Lock } from "./Icons";
import styles from "./Products.module.css";
import ui from "./ui.module.css";

export function Products({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <div className={styles.list}>
      {products.map((p, i) => {
        const copy = t.products.items[p.id];
        const caseHref = casePath(locale, p.caseSlug);
        return (
          <article
            key={p.id}
            data-reveal
            className={`${styles.item} ${i % 2 ? styles.flip : ""}`}
            aria-labelledby={`product-${p.id}`}
          >
            <figure className={styles.shot}>
              <Image
                src={p.image}
                alt=""
                placeholder="blur"
                sizes="(min-width: 60rem) 700px, 100vw"
                className={styles.img}
              />
              <figcaption className="mono">{p.domain}</figcaption>
            </figure>

            <div className={styles.body}>
              <h3 id={`product-${p.id}`} className={styles.name}>
                <Link href={caseHref}>{p.name}</Link>
              </h3>
              <p className={styles.kind}>{copy.kind}</p>
              <p className={styles.summary}>{copy.summary}</p>

              <dl className={styles.metrics}>
                {copy.metrics.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className={styles.points}>
                {copy.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>

              <ul className={`${ui.chips} ${styles.chips}`} aria-label={t.nav.stack}>
                {p.stack.map((s) => (
                  <li key={s} className={ui.chip}>
                    {s}
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link className={ui.btn} href={caseHref}>
                  {t.products.caseStudy}
                  <ArrowRight className={ui.btnIcon} />
                </Link>
                <a className={ui.link} href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.domain}
                  <ArrowUpRight className={ui.btnIcon} />
                </a>
                {p.code ? (
                  <a className={ui.link} href={p.code} target="_blank" rel="noopener noreferrer">
                    <GitHubMark className={ui.btnIcon} />
                    {t.products.code}
                  </a>
                ) : (
                  <span className={`mono ${styles.private}`}>
                    <Lock className={ui.btnIcon} />
                    {t.products.codePrivate}
                  </span>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
