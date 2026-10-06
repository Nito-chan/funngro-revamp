import Link from "next/link";

import { address, contact, liveSite, site } from "@/data/site";

const columns = [
  {
    heading: "For earners",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Four work types", href: "/#work-types" },
      { label: "Twelve categories", href: "/#categories" },
      { label: "Income ladder", href: "/#ladder" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "For brands",
    links: [
      { label: "Campaign solutions", href: "/brands#solutions" },
      { label: "Indicative costs", href: "/brands#costs" },
      { label: "Reported outcomes", href: "/brands#outcomes" },
      { label: "How a campaign runs", href: "/brands#process" },
      { label: "Brand FAQ", href: "/brands#faq" },
    ],
  },
  {
    heading: "Official Funngro",
    links: [
      { label: "Live site", href: liveSite.home, external: true },
      { label: "Earn on Funngro", href: liveSite.earn, external: true },
      { label: "For brands", href: liveSite.brands, external: true },
      { label: "Official FAQ", href: liveSite.faq, external: true },
      { label: "Contact page", href: liveSite.contact, external: true },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="grid size-8 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-on-accent"
              >
                F
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Funngro
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.shortDescription}
            </p>
            <div className="mt-6 space-y-1.5 text-sm">
              <p className="text-foreground">
                <a
                  href={`mailto:${contact.brands}`}
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                >
                  {contact.brands}
                </a>{" "}
                <span className="text-muted">— brands &amp; partnerships</span>
              </p>
              <p>
                <a
                  href={`mailto:${contact.support}`}
                  className="text-foreground underline decoration-line underline-offset-4 transition-colors hover:text-accent"
                >
                  {contact.support}
                </a>{" "}
                <span className="text-muted">— earner support</span>
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="eyebrow font-display text-xs font-semibold uppercase tracking-widest">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8 text-sm leading-relaxed text-faint">
          <address className="not-italic">
            Funngro · {address.street}, {address.locality}, {address.region}{" "}
            {address.postalCode}, India
          </address>
          <p className="mt-3 max-w-2xl">{site.disclaimer}</p>
          <p className="mt-2 max-w-3xl">
            Statistics shown on this site are Funngro&apos;s own published figures
            and are reproduced with attribution. Sample figures labelled
            &ldquo;Illustrative demo data&rdquo; are invented for layout purposes
            and are not Funngro metrics. For official terms, payouts and account
            rules, rely on{" "}
            <a
              href={liveSite.home}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline underline-offset-4 hover:text-foreground"
            >
              funngro.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}