import { demoActivity, demoCard, hero, headlineStats } from "@/data/youthData";
import { ButtonRow, DemoBadge, Eyebrow } from "@/components/primitives";

/**
 * Youth hero.
 *
 * The scrolling activity rows are a CSS marquee, so they need
 * no heavy JS and stop automatically under prefers-reduced-motion.
 */
export function Hero() {
  const ticker = [...demoActivity, ...demoActivity];

  return (
    <section className="relative overflow-hidden">
      {/* backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-lines opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="shell relative py-20 md:py-28">
        <div className="grid min-w-0 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="min-w-0">
            <div className="animate-fade-up">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-4 animate-fade-up delay-100 text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Your skills deserve{" "}
              <span className="text-gradient">more than likes.</span>
            </h1>
            <p className="mt-6 animate-fade-up delay-200 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {hero.lead}
            </p>
            <div className="mt-9 animate-fade-up delay-300">
              <ButtonRow
                primary={hero.primaryCta}
                secondary={hero.secondaryCta}
              />
            </div>
            <p className="mt-5 animate-fade-up delay-400 text-sm text-faint">
              {hero.footnote}
            </p>
          </div>

          {/* demo card */}
          <div className="relative min-w-0 animate-scale-in delay-200">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-accent-soft/10 blur-2xl"
            />
            <div className="panel-solid relative overflow-hidden p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">This week</p>
                  <p className="mt-1 font-display text-3xl font-bold tabular-nums">
                    {demoCard.earnedThisWeek.value}
                  </p>
                  <p className="text-sm text-muted">
                    {demoCard.earnedThisWeek.label}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent animate-pulse-dot"
                  />
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-accent">
                    Live
                  </span>
                </div>
              </div>

              {/* activity rows */}
              <div className="mask-fade-x mt-6 min-w-0 max-w-full overflow-hidden">
                <ul className="flex w-max animate-marquee gap-2">
                  {ticker.map((row, i) => (
                    <li
                      key={`${row.city}-${i}`}
                      aria-hidden={i >= demoActivity.length ? "true" : undefined}
                      className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1.5 text-xs"
                    >
                      <span className="text-muted">{row.task}</span>
                      <span className="font-mono font-semibold text-accent">
                        {row.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="mt-6 space-y-3 border-t border-line pt-5">
                {demoCard.rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <dt className="text-muted">{row.label}</dt>
                    <dd className="font-mono font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6">
                <DemoBadge label={demoCard.label} note={demoCard.note} />
              </div>
            </div>
          </div>
        </div>

        {/* stats bar */}
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-line bg-line lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <div key={stat.label} className="bg-surface px-6 py-7">
              <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold tabular-nums sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}