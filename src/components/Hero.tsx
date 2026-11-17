import type { Dictionary } from "@/i18n";
import { delay } from "@/lib/delay";
import { localName, person, type Locale } from "@/lib/site";

import { CareerMap } from "./CareerMap";
import { ArrowDown, TelegramMark } from "./Icons";
import styles from "./Hero.module.css";
import ui from "./ui.module.css";

export function Hero({ t, locale }: { t: Dictionary; locale: Locale }) {
  const profiles = [
    { label: person.telegram.label, user: person.telegram.user, href: person.telegram.url },
    { label: person.github.label, user: person.github.user, href: person.github.url },
    { label: person.linkedin.label, user: person.linkedin.user, href: person.linkedin.url },
  ];

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.titles}>
            <h1 id="hero-title" className={styles.name} data-intro>
              {localName[locale].name}
            </h1>
            <p className={styles.role} data-intro style={delay(1)}>
              {t.hero.role}
            </p>
            <p className={`mono ${styles.focus}`} data-intro style={delay(1)}>
              {t.hero.focus}
            </p>
          </div>

          <div className={styles.text} data-intro style={delay(2)}>
            <p className={styles.intro}>{t.hero.intro}</p>
            <p className={styles.now}>
              <span className={`mono ${styles.nowLabel}`}>{t.hero.now}</span>
              {t.hero.nowText}
            </p>
          </div>

          <ul className={`mono ${styles.block}`} data-intro style={delay(3)}>
            <li>{t.hero.location}</li>
            {t.hero.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
            {profiles.map((p) => (
              <li key={p.href} className={styles.profile}>
                <a href={p.href} target="_blank" rel="noopener noreferrer me">
                  <span className={styles.profileBase}>{p.label}</span>
                  {p.user}
                </a>
              </li>
            ))}
            <li className={styles.profile}>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.routeHead} data-intro style={delay(3)}>
          <h2 className={styles.lead}>{t.map.lead}</h2>
          <p className={`mono ${styles.stats}`}>
            {t.stats
              .slice(1)
              .map((s) => `${s.value} ${s.label}`)
              .join(" · ")}
          </p>
        </div>

        <CareerMap t={t} locale={locale} />

        <div className={styles.ctas}>
          <a className={ui.btnPrimary} href={person.telegram.url} target="_blank" rel="noopener noreferrer">
            <TelegramMark className={ui.btnIcon} />
            {t.hero.ctaEmail}
          </a>
          <a className={ui.link} href={person.cv.frontend} download>
            {t.hero.cvFrontend}
            <ArrowDown className={ui.btnIcon} />
          </a>
          <a className={ui.link} href={person.cv.wordpress} download>
            {t.hero.cvWordpress}
            <ArrowDown className={ui.btnIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}
