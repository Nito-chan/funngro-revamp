import { ButtonRow, SectionHeading } from "@/components/primitives";

/** Final call-to-action. */
export function CTA({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="shell">
        <div className="relative overflow-hidden rounded-panel border border-line bg-gradient-to-br from-surface via-surface-2 to-surface-3 p-10 text-center sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[110px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <SectionHeading
              id="cta-heading"
              align="center"
              title={title}
              lead={body}
            />
            <div className="mt-9 flex justify-center">
              <ButtonRow
                primary={primary}
                secondary={secondary}
                center={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}