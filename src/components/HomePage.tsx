import { Suspense } from "react";

import { getDictionary } from "@/i18n";
import type { Locale } from "@/lib/site";

import { About } from "./About";
import { Activity } from "./Activity";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PersonJsonLd } from "./PersonJsonLd";
import { Products } from "./Products";
import { Projects } from "./Projects";
import { Recommendation } from "./Recommendation";
import { Section } from "./Section";
import { Stack } from "./Stack";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.sections;

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header locale={locale} t={t} />
      <main id="main" tabIndex={-1}>
        <span id="top" />
        <Hero t={t} locale={locale} />
        <Section id="products" title={s.products.title}>
          <Products t={t} locale={locale} />
        </Section>
        <Section id="projects" title={s.projects.title}>
          <Projects t={t} locale={locale} />
        </Section>
        <Section id="experience" title={s.experience.title}>
          <Experience t={t} />
        </Section>
        <Section id="recommendation" title={s.recommendation.title} note={s.recommendation.note}>
          <Recommendation t={t} />
        </Section>
        <Section id="about" title={s.about.title}>
          <About t={t} />
        </Section>
        <Section id="activity" title={s.activity.title}>
          <Suspense fallback={<div style={{ minHeight: 320 }} aria-hidden="true" />}>
            <Activity t={t} locale={locale} />
          </Suspense>
        </Section>
        <Section id="stack" title={s.stack.title}>
          <Stack t={t} />
        </Section>
        <Section id="contact" title={s.contact.title}>
          <Contact t={t} />
        </Section>
      </main>
      <Footer t={t} locale={locale} />
      <PersonJsonLd locale={locale} />
    </>
  );
}
