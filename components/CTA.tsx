"use client";

import { motion } from "motion/react";
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-2xl"
          >
            <SectionHeading
              id="cta-heading"
              align="center"
              title={title}
              lead={body}
            />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-9 flex justify-center"
            >
              <ButtonRow
                primary={primary}
                secondary={secondary}
                center={true}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}