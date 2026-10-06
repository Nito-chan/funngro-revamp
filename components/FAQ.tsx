import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/primitives";

/**
 * FAQ accordion built on native `<details>`/`<summary>`.
 *
 * Deliberately not a JS accordion: the answers stay in the HTML for crawlers
 * with no JS execution, the whole thing works without hydration, and keyboard
 * plus screen-reader behaviour comes from the platform for free.
 */
export function FAQ({
  id,
  eyebrow,
  title,
  lead,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  return (
    <section
      id={id}
      className="section scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="shell">
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={eyebrow}
          title={title}
          lead={lead}
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-panel border border-line bg-surface">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-base font-semibold sm:text-lg">
                  {item.question}
                </h3>
                <ChevronDown
                  className="size-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}