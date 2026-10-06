import { earningsLadder } from "@/data/youthData";
import { SectionHeading } from "@/components/primitives";

/**
 * Income & influence ladder.
 *
 * Bands are Funngro's own published tiers, shown with attribution and an
 * explicit "not guaranteed" line rather than presented as a promise.
 */
export function LadderSection() {
  return (
    <section
      id="ladder"
      className="section scroll-mt-24 border-y border-line bg-surface/30"
      aria-labelledby="ladder-heading"
    >
      <div className="shell">
        <SectionHeading
          id="ladder-heading"
          eyebrow={earningsLadder.eyebrow}
          title={earningsLadder.title}
          lead={earningsLadder.intro}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {earningsLadder.stages.map((stage, i) => (
            <article
              key={stage.id}
              className="panel-solid relative flex flex-col overflow-hidden p-7"
            >
              {/* ascending bar, the one visual motif on this page */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1"
                style={{
                  background: `color-mix(in srgb, var(--color-accent) ${
                    35 + i * 30
                  }%, var(--color-line))`,
                }}
              />
              <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                {stage.name}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">
                {stage.headline}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {stage.body}
              </p>
              <p className="mt-6 font-display text-lg font-bold tabular-nums text-foreground">
                {stage.band}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {stage.tasks.map((task) => (
                  <li
                    key={task}
                    className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
          <div className="bg-surface px-6 py-6">
            <p className="text-sm text-muted">{earningsLadder.average.label}</p>
            <p className="mt-1 font-display text-2xl font-bold tabular-nums">
              {earningsLadder.average.value}
            </p>
          </div>
          <div className="bg-surface px-6 py-6">
            <p className="text-sm text-muted">{earningsLadder.top.label}</p>
            <p className="mt-1 font-display text-2xl font-bold tabular-nums">
              {earningsLadder.top.value}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-2 text-sm leading-relaxed text-faint">
          <p>{earningsLadder.progressionNote}</p>
          <p>{earningsLadder.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}