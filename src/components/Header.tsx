import type { Dictionary } from "@/i18n";
import { Fragment } from "react";

import { localeName, localName, localePath, locales, person, type Locale } from "@/lib/site";

import styles from "./Header.module.css";
import ui from "./ui.module.css";
import { ArrowDown } from "./Icons";

interface Props {
  locale: Locale;
  t: Dictionary;
  /** Inner pages link sections back to the locale home */
  home?: string;
  /** Defaults to the home pages */
  alternates?: Record<Locale, string>;
}

export function Header({ locale, t, home = "", alternates = localePath }: Props) {
  const links = [
    ["projects", t.nav.projects],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href={home ? home : "#top"} className={styles.brand}>
          {localName[locale].name}
        </a>

        <nav aria-label={t.nav.label} className={styles.nav}>
          <ul>
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`${home}#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={`mono ${styles.lang}`} role="group" aria-label="Language">
            {locales.map((l, i) => (
              <Fragment key={l}>
                {i > 0 ? <span aria-hidden="true">/</span> : null}
                <a
                  href={alternates[l]}
                  hrefLang={l}
                  lang={l}
                  aria-current={locale === l ? "true" : undefined}
                  aria-label={localeName[l]}
                >
                  {l.toUpperCase()}
                </a>
              </Fragment>
            ))}
          </div>
          <a className={`${ui.btn} ${styles.cv}`} href={person.cv.frontend} download>
            {t.nav.cv}
            <ArrowDown className={ui.btnIcon} />
          </a>
        </div>
      </div>
    </header>
  );
}
