"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { contact, liveSite, storeLinks } from "@/data/site";

type NavVariant = "youth" | "brands";

/**
 * Cross-page nav. Anchors point at ids on the current page only, so switching
 * between the two pages never lands you on a link that goes nowhere.
 */
const links: Record<NavVariant, ReadonlyArray<{ label: string; href: string }>> = {
  youth: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Work types", href: "/#work-types" },
    { label: "Categories", href: "/#categories" },
    { label: "Ladder", href: "/#ladder" },
    { label: "FAQ", href: "/#faq" },
  ],
  brands: [
    { label: "Solutions", href: "/brands#solutions" },
    { label: "Costs", href: "/brands#costs" },
    { label: "Outcomes", href: "/brands#outcomes" },
    { label: "Process", href: "/brands#process" },
    { label: "FAQ", href: "/brands#faq" },
  ],
};

export function NavLinks({
  variant,
  onNavigate,
  className,
}: {
  variant: NavVariant;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <ul className={className}>
      {links[variant].map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            className="rounded-md text-sm text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navbar({
  variant = "youth",
}: {
  variant?: NavVariant;
}) {
  const isBrands = variant === "brands";
  const otherHref = isBrands ? "/" : "/brands";
  const otherLabel = isBrands ? "For youth" : "For brands";
  const ctaHref = isBrands ? `mailto:${contact.brands}` : storeLinks.play;
  const ctaLabel = isBrands ? "Talk to Funngro" : "Get the app";

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-xl"
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Funngro — home"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-on-accent transition-transform group-hover:scale-105"
          >
            F
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Funngro
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLinks variant={variant} className="flex items-center gap-6" />
          <span aria-hidden="true" className="h-5 w-px bg-line" />
          <div className="flex items-center gap-5">
            <Link
              href={otherHref}
              className="group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {otherLabel}
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href={isBrands ? liveSite.contact : liveSite.home}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {isBrands ? "Contact" : "About Funngro"}
            </a>
            <a
              href={ctaHref}
              className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-strong"
              {...(isBrands ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        {/* mobile bar — the only interactive part of the header */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={otherHref}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            {otherLabel}
          </a>
          <details className="group relative">
            <summary
              className="grid size-9 cursor-pointer list-none place-items-center rounded-lg border border-line text-foreground transition-colors hover:bg-surface [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Menu
                className="size-4 group-open:hidden"
                aria-hidden="true"
              />
              <X className="hidden size-4 group-open:block" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-11 w-56 rounded-panel border border-line bg-surface-2 p-3 shadow-2xl">
              <nav aria-label="Mobile">
                <NavLinks
                  variant={variant}
                  className="flex flex-col gap-1 [&_a]:block [&_a]:px-3 [&_a]:py-2.5 [&_a]:text-base"
                />
              </nav>
              <div className="mt-3 flex flex-col gap-2 border-t border-line pt-3">
                <a
                  href={isBrands ? liveSite.contact : liveSite.home}
                  className="px-3 text-sm text-muted hover:text-foreground"
                >
                  {isBrands ? "Contact Funngro" : "About Funngro"}
                </a>
                <a
                  href={ctaHref}
                  className="rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-on-accent"
                  {...(isBrands
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </motion.header>
  );
}