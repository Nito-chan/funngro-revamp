"use client";

import { motion } from "motion/react";
import { categories, howItWorks, mechanics, referral, trust, whyFunngro, workTypes } from "@/data/youthData";
import { Card, IconTile, SectionHeading } from "@/components/primitives";
import { LadderSection } from "@/components/LadderSection";

export function WhySection() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="shell">
        <SectionHeading
          id="why-heading"
          eyebrow={whyFunngro.eyebrow}
          title={whyFunngro.title}
          lead={whyFunngro.intro}
        />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyFunngro.cards.map((card, i) => (
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
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section scroll-mt-24 border-y border-line bg-surface/30"
      aria-labelledby="hiw-heading"
    >
      <div className="shell">
        <SectionHeading
          id="hiw-heading"
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          lead={howItWorks.lead}
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <li key={step.n} className="relative">
              {/* connector, desktop only */}
              {i < howItWorks.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[calc(50%+2.5rem)] top-7 hidden h-px w-[calc(100%-1rem)] bg-gradient-to-r from-line-strong to-line lg:block"
                />
              ) : null}
              <div className="panel-solid h-full p-6 sm:p-8">
                <span className="font-display text-sm font-bold tracking-widest text-accent">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm">
          <a
            href={howItWorks.deepLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {howItWorks.deepLink.label} &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}

export function WorkTypesSection() {
  return (
    <section
      id="work-types"
      className="section scroll-mt-24"
      aria-labelledby="work-heading"
    >
      <div className="shell">
        <SectionHeading
          id="work-heading"
          eyebrow={workTypes.eyebrow}
          title={workTypes.title}
          lead={workTypes.lead}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {workTypes.items.map((item) => (
            <Card key={item.n}>
              <div className="flex items-start gap-4">
                <IconTile name={item.icon} />
                <div>
                  <p className="font-display text-xs font-bold tracking-widest text-accent">
                    {item.n}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="section scroll-mt-24 border-y border-line bg-surface/30"
      aria-labelledby="cat-heading"
    >
      <div className="shell">
        <SectionHeading
          id="cat-heading"
          eyebrow={categories.eyebrow}
          title={categories.title}
          lead={categories.lead}
        />
        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {categories.items.map((item) => (
            <li
              key={item.title}
              className="group flex items-center gap-3 bg-surface px-5 py-5 transition-colors hover:bg-surface-2"
            >
              <IconTile name={item.icon} />
              <span className="text-sm font-medium leading-snug">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-faint">{categories.sourceNote}</p>
      </div>
    </section>
  );
}

export function MechanicsSection() {
  return (
    <section className="section" aria-labelledby="mech-heading">
      <div className="shell">
        <SectionHeading
          id="mech-heading"
          eyebrow={mechanics.eyebrow}
          title={mechanics.title}
          lead={mechanics.lead}
        />
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {mechanics.items.map((item) => (
            <div key={item.name} className="border-l-2 border-line-strong pl-5">
              <dt className="font-display text-base font-semibold">
                {item.name}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ReferralSection() {
  return (
    <section
      className="section border-y border-line bg-surface/30"
      aria-labelledby="ref-heading"
    >
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="ref-heading"
              eyebrow={referral.eyebrow}
              title={referral.title}
              lead={referral.lead}
            />
            <p className="mt-6 text-sm leading-relaxed text-faint">
              Share &amp; Earn is known as Earnify inside the app. Referral
              earnings are the clearest example of the influence ladder: one
              invite, then a percentage that keeps paying.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-line bg-line">
            {referral.facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-6 py-8">
                <dt className="text-sm leading-snug text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold tabular-nums sm:text-3xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="section" aria-labelledby="trust-heading">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              id="trust-heading"
              eyebrow={trust.eyebrow}
              title={trust.title}
              lead={trust.lead}
            />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {trust.points.map((point) => (
                <li key={point.title} className="panel-solid p-6 sm:p-7">
                  <h3 className="font-display text-base font-semibold">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* growth figures, attributed to the live site */}
          <div className="panel-solid p-6 sm:p-8">
            <p className="eyebrow">Published growth</p>
            <ul className="mt-6 space-y-5">
              {trust.beforeAfter.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-line pb-5 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm text-muted">{row.label}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm">
                      <span className="font-mono text-faint line-through">
                        {row.before}
                      </span>
                      <span aria-hidden="true" className="text-faint">
                        &rarr;
                      </span>
                      <span className="font-display text-xl font-bold">
                        {row.after}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-faint">
              Figures as published by Funngro on its own site. Not independently
              verified by this redesign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

