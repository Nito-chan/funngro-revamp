import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_ORIGIN, site } from "@/data/site";
import * as b from "@/data/brandsData";
import { SectionHeading, Card, IconTile, DemoBadge } from "@/components/primitives";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const hero = b.hero;
const headlineStats = b.headlineStats;
const solutions = b.solutions;
const pricingBands = b.pricingBands;
const outcomes = b.outcomes;
const process = b.process;
const verticals = b.verticals;
const whyBrands = b.whyBrands;
const faqs = b.faqs;
const finalCta = b.finalCta;
const demoDashboard = b.demoDashboard;

/** Sample rows for the brands hero demo card. Fictional, labelled. */
const demoRows = [
  { label: "Day 01", value: "214 new users" },
  { label: "Day 03", value: "786 verified actions" },
  { label: "Day 07", value: "9,860 verified actions" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_ORIGIN,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "For Brands",
      item: absoluteUrl("/brands"),
    },
  ],
};

export const metadata: Metadata = {
  title: "Funngro for Brands | Reach India's Young Consumers",
  description:
    "Run authentic youth campaigns: brand promotion, content, referrals, sampling and surveys with Funngro's 70 lakh young earners.",
  alternates: {
    canonical: "/brands",
  },
  openGraph: {
    title: "Funngro for Brands | Reach India's Young Consumers",
    description:
      "Run authentic youth campaigns with Funngro's 70 lakh young earners. Pay for verified actions, not impressions.",
    url: absoluteUrl("/brands"),
    type: "website",
  },
  twitter: {
    title: "Funngro for Brands | Reach India's Young Consumers",
    description:
      "Run authentic youth campaigns with Funngro's 70 lakh young earners. Pay for verified actions, not impressions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Brands page.
 *
 * Unlike the youth page, the Navbar gets the `brands` variant so its "For
 * youth" link goes back to the other page.
 */
export default function BrandsPage() {
  return (
    <>
      <Navbar variant="brands" />

      <main id="main">
        {/* hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-lines opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
          />

          <div className="shell relative py-20 md:py-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div>
                <p className="eyebrow">{hero.eyebrow}</p>
                <h1 className="mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                  Reach young India{" "}
                  <span className="text-gradient">through campaigns powered by real people</span>
                  .
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                  {hero.lead}
                </p>
                <div className="mt-9">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`mailto:${hero.primaryCta.href}`}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-center font-semibold text-on-accent transition-colors hover:bg-accent-strong"
                    >
                      {hero.primaryCta.label}
                    </a>
                    <a
                      href={hero.secondaryCta.href}
                      className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-7 text-center font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {hero.secondaryCta.label}
                    </a>
                  </div>
                </div>
                <p className="mt-5 text-sm text-faint">{hero.responseNote}</p>
              </div>

              {/* demo dashboard card (fictional) */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/12 via-transparent to-accent-soft/10 blur-2xl"
                />
                <div className="panel-solid relative overflow-hidden p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">Pilot snapshot</p>
                      <p className="mt-1 font-display text-3xl font-bold tabular-nums">
                        9,860
                      </p>
                      <p className="text-sm text-muted">
                        Verified actions in first 7 days
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-accent animate-pulse-dot"
                      />
                      <span className="font-display text-xs font-semibold uppercase tracking-wider text-accent">
                        Illustrative
                      </span>
                    </div>
                  </div>

                  <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
                    {demoDashboard.metrics.map((m) => (
                      <div key={m.label} className="bg-surface-2 px-5 py-5">
                        <dd className="font-display text-xl font-bold tabular-nums">
                          {m.value}
                        </dd>
                        <dt className="mt-1 text-sm text-muted">{m.label}</dt>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-6 space-y-3">
                    {demoRows.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between rounded-lg border border-line bg-surface-2 px-5 py-3 text-sm"
                      >
                        <span className="text-muted">{row.label}</span>
                        <span className="font-mono font-medium">
                          {row.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <DemoBadge
                      label={demoDashboard.label}
                      note={demoDashboard.note}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* stats bar */}
            <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-line bg-line lg:grid-cols-4">
              {headlineStats.map((stat) => (
                <div key={stat.label} className="bg-surface px-6 py-7">
                  <dt className="text-sm leading-snug text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold tabular-nums sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* why it works */}
        <section className="section" aria-labelledby="why-brand-heading">
          <div className="shell">
            <SectionHeading
              id="why-brand-heading"
              eyebrow={whyBrands.eyebrow}
              title={whyBrands.title}
              lead={whyBrands.lead}
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyBrands.cards.map((card) => (
                <Card key={card.title}>
                  <IconTile name={card.icon} />
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {card.body}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* solutions */}
        <section
          id="solutions"
          className="section scroll-mt-24 border-y border-line bg-surface/30"
          aria-labelledby="sol-heading"
        >
          <div className="shell">
            <SectionHeading
              id="sol-heading"
              eyebrow={solutions.eyebrow}
              title={solutions.title}
              lead={solutions.lead}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {solutions.items.map((item) => (
                <Card key={item.n}>
                  <div className="flex items-start gap-4">
                    <IconTile name={item.icon} />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-display text-xs font-bold tracking-widest text-accent">
                          {item.n}
                        </p>
                        <span className="rounded-full border border-line bg-surface-2 px-2 py-0.5 text-xs text-muted">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <p className="mt-4 text-sm text-faint">
                    Best for: {item.bestFor}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* verticals */}
        <section className="section" aria-labelledby="vert-heading">
          <div className="shell">
            <SectionHeading
              id="vert-heading"
              eyebrow={verticals.eyebrow}
              title={verticals.title}
              lead={verticals.lead}
            />
            <ul className="mt-10 flex flex-wrap gap-2">
              {verticals.items.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* costs */}
        <section
          id="costs"
          className="section scroll-mt-24 border-y border-line bg-surface/30"
          aria-labelledby="cost-heading"
        >
          <div className="shell">
            <SectionHeading
              id="cost-heading"
              eyebrow={pricingBands.eyebrow}
              title={pricingBands.title}
              lead={pricingBands.lead}
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-5">
              {pricingBands.bands.map((b) => (
                <div key={b.type} className="bg-surface px-6 py-7">
                  <p className="text-sm text-muted">{b.type}</p>
                  <p className="mt-2 font-display text-xl font-bold tabular-nums">
                    {b.range}
                  </p>
                  <p className="mt-1 text-xs text-faint">{b.unit}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-faint">{pricingBands.footnote}</p>
          </div>
        </section>

        {/* outcomes */}
        <section
          id="outcomes"
          className="section scroll-mt-24"
          aria-labelledby="out-heading"
        >
          <div className="shell">
            <SectionHeading
              id="out-heading"
              eyebrow={outcomes.eyebrow}
              title={outcomes.title}
              lead={outcomes.lead}
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.stats.map((s) => (
                <div key={s.label} className="bg-surface px-6 py-8">
                  <dd className="font-display text-2xl font-bold tabular-nums sm:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{s.label}</dt>
                  <p className="mt-1 text-xs text-faint">vs {s.compare}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-faint">{outcomes.sourceNote}</p>
          </div>
        </section>

        {/* process */}
        <section
          id="process"
          className="section scroll-mt-24 border-y border-line bg-surface/30"
          aria-labelledby="proc-heading"
        >
          <div className="shell">
            <SectionHeading
              id="proc-heading"
              eyebrow={process.eyebrow}
              title={process.title}
              lead={process.lead}
            />
            <ol className="mt-14 grid gap-6 md:grid-cols-4">
              {process.steps.map((step) => (
                <li key={step.n} className="panel-solid h-full p-6 sm:p-8">
                  <span className="font-display text-sm font-bold tracking-widest text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <FAQ
          id="faq"
          eyebrow="Brand FAQ"
          title="Questions brands ask most often."
          lead="Facts drawn from the official Funngro /for-brands page. Anything not measured, we do not claim."
          items={faqs}
        />

        <CTA
          title={finalCta.title}
          body={finalCta.body}
          primary={finalCta.primary}
          secondary={finalCta.secondary}
        />

        <section className="shell pb-16">
          <p className="text-center text-xs text-faint">{site.disclaimer}</p>
        </section>
      </main>

      <Footer />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}