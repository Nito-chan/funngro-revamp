"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import { getIcon } from "@/components/Icon";

/** Small uppercase label used above every section heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** Section heading block. `h2` by default so every section has a real heading. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading
        id={id}
        className="mt-3 text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl"
      >
        {title}
      </Heading>
      {lead ? (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/** Primary / secondary action pair, one button style across the whole site. */
export function ButtonRow({
  primary,
  secondary,
  center = false,
}: {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  center?: boolean;
}) {
  const isExternal = (href: string) => href.startsWith("http");
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${center ? "justify-center" : ""}`}
    >
      <a
        href={primary.href}
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-center font-semibold text-on-accent transition-colors hover:bg-accent-strong"
        {...(isExternal(primary.href)
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {primary.label}
      </a>
      {secondary ? (
        <a
          href={secondary.href}
          className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-7 text-center font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          {...(isExternal(secondary.href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {secondary.label}
        </a>
      ) : null}
    </div>
  );
}

/**
 * Card with a hairline border that lifts on hover.
 * Hover is pointer-only; focus-within keeps the same affordance for keyboards.
 */
export function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`panel-solid ${
        interactive
          ? "transition-colors duration-300 hover:border-line-strong focus-within:border-line-strong hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function IconTile({ name }: { name: string }) {
  const Icon = getIcon(name);
  return (
    <span
      aria-hidden="true"
      className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent"
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}

/**
 * Badge for invented numbers.
 * Present wherever sample data appears so no figure on the page can be mistaken
 * for a Funngro metric.
 */
export function DemoBadge({
  label,
  note,
}: {
  label: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-accent/40 bg-accent/5 px-4 py-3">
      <p className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-accent">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-accent animate-pulse-dot"
        />
        {label}
      </p>
      {note ? (
        <p className="mt-1 text-xs leading-relaxed text-muted">{note}</p>
      ) : null}
    </div>
  );
}