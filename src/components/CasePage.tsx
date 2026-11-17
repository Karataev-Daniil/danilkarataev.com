import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { nextCase, type CaseEntry } from "@/content/data";
import { getDictionary, type Dictionary } from "@/i18n";
import type { CaseCopy, CaseSection } from "@/i18n/en";
import { delay } from "@/lib/delay";
import { casePath, localePath, locales, siteUrl, type Locale } from "@/lib/site";

import styles from "./CasePage.module.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHubMark, Lock } from "./Icons";
import ui from "./ui.module.css";

export function CasePage({ locale, entry }: { locale: Locale; entry: CaseEntry }) {
  const t = getDictionary(locale);
  const u = t.cases.ui;
  const copy = t.cases.items[entry.slug];
  const home = localePath[locale];
  const next = nextCase(entry.slug);
  const nextCopy = t.cases.items[next.slug];
  const projectsHref = home === "/" ? "/#projects" : `${home}#projects`;
  const alternates = Object.fromEntries(locales.map((l) => [l, casePath(l, entry.slug)])) as Record<Locale, string>;

  const sections: { id: string; title: string; body: CaseSection }[] = [
    { id: "task", title: u.task, body: copy.task },
    { id: "built", title: u.built, body: copy.built },
    { id: "outcome", title: u.outcome, body: copy.outcome },
  ];
  if (copy.extra) sections.push({ id: "more", title: copy.extra.title, body: copy.extra });

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header locale={locale} t={t} home={home} alternates={alternates} />
      <main id="main" tabIndex={-1} className={styles.main}>
        <span id="top" />
        <article className="container" aria-labelledby="case-title">
          <nav aria-label="Breadcrumb" className={styles.crumbs} data-intro>
            <ol>
              <li>
                <a href={home}>{u.home}</a>
              </li>
              <li>
                <a href={projectsHref}>{u.projects}</a>
              </li>
              <li aria-current="page">{copy.title}</li>
            </ol>
          </nav>

          <header className={styles.hero}>
            <h1 id="case-title" className={styles.title} data-intro style={delay(1)}>
              {copy.title}
            </h1>
            <p className={styles.kind} data-intro style={delay(3)}>
              {copy.kind}
            </p>
            <p className={styles.lead} data-intro style={delay(4)}>
              {copy.lead}
            </p>

            <dl className={styles.facts} data-intro style={delay(5)}>
              {(
                [
                  [u.role, copy.role],
                  [u.period, copy.period],
                  [u.context, copy.context],
                  [u.format, copy.format],
                ] as const
              ).map(([k, v]) => (
                <div key={k} className={styles.fact}>
                  <dt className="mono">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.heroFoot} data-intro style={delay(6)}>
              <ul className={ui.chips} aria-label={u.stack}>
                {entry.stack.map((s) => (
                  <li key={s} className={ui.chip}>
                    {s}
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                {entry.live.map((l, i) => (
                  <a
                    key={l.href}
                    className={i === 0 ? ui.btnPrimary : ui.btn}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {u.live}
                    <span className={`mono ${styles.btnDomain}`}>{l.label}</span>
                    <ArrowUpRight className={ui.btnIcon} />
                  </a>
                ))}
                {entry.offline?.map((d) => (
                  <span key={d} className={`mono ${styles.offline}`}>
                    <span className={styles.offDot} aria-hidden="true" />
                    {d} · {u.offline}
                  </span>
                ))}
                {entry.inDevelopment ? (
                  <span className={`mono ${styles.offline}`}>
                    <span className={styles.offDot} aria-hidden="true" />
                    {entry.inDevelopment} · {u.inDevelopment}
                  </span>
                ) : null}
                {entry.code ? (
                  <a className={ui.link} href={entry.code} target="_blank" rel="noopener noreferrer">
                    <GitHubMark className={ui.btnIcon} />
                    {entry.codeScope === "theme" ? u.codeTheme : u.code}
                  </a>
                ) : entry.codeNote ? (
                  <span className={`mono ${styles.muted}`}>
                    <Lock className={ui.btnIcon} />
                    {entry.codeNote === "request" ? u.codeRequest : u.codeNone}
                  </span>
                ) : null}
              </div>
            </div>
          </header>

          <Shots entry={entry} name={copy.title} t={t} />

          {entry.before && copy.compare ? <Compare entry={entry} name={copy.title} compare={copy.compare} t={t} /> : null}

          <div className={styles.sections}>
            {sections.map((s) => (
              <section key={s.id} className={styles.section} aria-labelledby={`case-${s.id}`} data-reveal>
                <header className={styles.sectionHead}>
                  <h2 id={`case-${s.id}`} className={styles.sectionTitle}>
                    {s.title}
                  </h2>
                </header>
                <div className={styles.sectionBody}>
                  <SectionBody body={s.body} />
                  {s.id === "more" && entry.related ? (
                    <a className={ui.link} href={entry.related.href} target="_blank" rel="noopener noreferrer">
                      <GitHubMark className={ui.btnIcon} />
                      {entry.related.label}
                    </a>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <nav className={styles.pager} aria-label={u.next} data-reveal>
            <a href={projectsHref} className={styles.back}>
              <ArrowLeft className={ui.btnIcon} />
              {u.projects}
            </a>
            <Link href={casePath(locale, next.slug)} className={styles.next}>
              <span className={`mono ${styles.nextLabel}`}>{u.next}</span>
              <span className={styles.nextTitle}>{nextCopy.title}</span>
              <span className={styles.nextKind}>{nextCopy.kind}</span>
              <ArrowRight className={styles.nextArrow} />
            </Link>
          </nav>
        </article>
      </main>
      <Footer t={t} locale={locale} />
      <CaseJsonLd
        locale={locale}
        entry={entry}
        title={copy.title}
        description={copy.description}
        homeName={u.home}
        homeUrl={`${siteUrl}${home}`}
      />
    </>
  );
}

function SectionBody({ body }: { body: CaseSection }) {
  return (
    <>
      {body.metrics ? (
        <dl className={styles.metrics}>
          {body.metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {body.paragraphs?.map((p) => (
        <p key={p} className={styles.para}>
          {p}
        </p>
      ))}
      {body.points ? <Points items={body.points} /> : null}
      {body.groups?.map((g) => (
        <div key={g.title} className={styles.group}>
          <h3 className={`mono ${styles.groupTitle}`}>{g.title}</h3>
          <Points items={g.points} />
        </div>
      ))}
      {body.quote ? (
        <figure className={styles.quote}>
          <blockquote>
            <p>{body.quote.text}</p>
          </blockquote>
          <figcaption className="mono">{body.quote.author}</figcaption>
        </figure>
      ) : null}
    </>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className={styles.points}>
      {items.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

function Shots({ entry, name, t }: { entry: CaseEntry; name: string; t: Dictionary }) {
  const u = t.cases.ui;
  const { desktop, mobile, domain, video } = entry.shots;
  return (
    <figure className={`${styles.shots} ${mobile ? styles.withPhone : ""}`}>
      <div className={styles.desktop}>
        {video ? (
          <video
            src={video.src}
            poster={video.poster}
            width={1280}
            height={720}
            autoPlay
            muted
            loop
            playsInline
            aria-label={u.videoAlt(name)}
            className={styles.desktopImg}
          />
        ) : desktop ? (
          <Image
            src={desktop}
            alt={u.desktopAlt(name)}
            placeholder="blur"
            priority
            sizes="(max-width: 1300px) 92vw, 1040px"
            className={styles.desktopImg}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={`mono ${styles.phDomain}`}>{domain}</span>
            <span className={`mono ${styles.phState}`}>
              <span className={styles.offDot} aria-hidden="true" />
              {entry.privateSite ? t.projects.privateState : u.offline}
            </span>
            <span className={styles.phNote}>{entry.privateSite ? u.placeholderPrivate : u.placeholder}</span>
          </div>
        )}
      </div>
      {mobile ? (
        <div className={styles.mobile}>
          <Image
            src={mobile}
            alt={u.mobileAlt(name)}
            placeholder="blur"
            sizes="(max-width: 700px) 40vw, 260px"
            className={styles.mobileImg}
          />
        </div>
      ) : null}
      <figcaption className={`mono ${styles.caption}`}>{domain}</figcaption>
    </figure>
  );
}

/** The old site next to the new one: desktop row, phone row, then what changed. */
function Compare({
  entry,
  name,
  compare,
  t,
}: {
  entry: CaseEntry;
  name: string;
  compare: NonNullable<CaseCopy["compare"]>;
  t: Dictionary;
}) {
  const before = entry.before!;
  const after = entry.shots;
  const u = t.cases.ui;
  const side = (label: string, desktop?: StaticImageData, mobile?: StaticImageData, alt = name) => (
    <figure className={styles.compareSide}>
      <figcaption className={`mono ${styles.compareLabel}`}>{label}</figcaption>
      {desktop ? (
        <Image src={desktop} alt={u.desktopAlt(alt)} placeholder="blur" sizes="(max-width: 900px) 92vw, 520px" className={styles.desktopImg} />
      ) : null}
      {mobile ? (
        <Image src={mobile} alt={u.mobileAlt(alt)} placeholder="blur" sizes="(max-width: 900px) 40vw, 200px" className={`${styles.mobileImg} ${styles.compareMobile}`} />
      ) : null}
    </figure>
  );
  return (
    <section className={styles.compare} aria-labelledby="case-compare">
      <h2 id="case-compare" className={styles.compareTitle}>
        {compare.title}
      </h2>
      <div className={styles.compareGrid}>
        {side(compare.before, before.desktop, before.mobile, `${name} (${compare.before})`)}
        {side(compare.after, after.desktop, after.mobile)}
      </div>
      <ul className={styles.comparePoints}>
        {compare.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

function CaseJsonLd({
  locale,
  entry,
  title,
  description,
  homeName,
  homeUrl,
}: {
  locale: Locale;
  entry: CaseEntry;
  title: string;
  description: string;
  homeName: string;
  homeUrl: string;
}) {
  const url = `${siteUrl}${casePath(locale, entry.slug)}`;
  const live = entry.live[0];
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: homeUrl },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#case`,
        name: title,
        description,
        url,
        inLanguage: locale,
        author: { "@id": `${siteUrl}/#person` },
        keywords: entry.stack.join(", "),
        ...(live ? { about: { "@type": "WebSite", name: live.label, url: live.href } } : {}),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Escaped so it can't close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
