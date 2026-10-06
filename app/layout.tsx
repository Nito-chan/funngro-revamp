import type { Metadata } from "next";
// Self-hosted via Fontsource (same families, no build-time Google fetch,
// which Turbopack builds on Vercel intermittently fail to resolve).
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_ORIGIN, site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Funngro — Earn online with India's biggest brands",
    template: "%s | Funngro",
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: "https://www.funngro.com" }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "earn online india",
    "earn money online for students",
    "freelance projects for teens",
    "part time work for students",
    "brand promotion app",
    "upi earnings",
    "influencer campaigns india",
    "product sampling campaigns",
    "app testing india",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: "Funngro — Earn online with India's biggest brands",
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: site.twitterHandle,
    title: "Funngro — Earn online with India's biggest brands",
    description: site.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
};

/**
 * Sitewide Organization + WebSite structured data.
 *
 * Deliberately omits `legalName`: Funngro's own markup contradicts itself
 * between the server-rendered schema and the app stores, so there is no single
 * name I can assert honestly (FACTS.md §1). Omits `aggregateRating` for the
 * same reason the live site's rating schema is an audit finding: the site's
 * 4.6/70,000 does not match either store.
 */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: site.name,
      url: SITE_ORIGIN,
      description: site.shortDescription,
      email: "hello@funngro.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "2105 Wing F, Fantacy Land, CTS No 1, Opp Majas Depot, Jogeshwari E, J V Link Road",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400060",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: site.name,
      description: site.shortDescription,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.htmlLang}>
      <body className="min-h-dvh bg-bg text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-on-accent"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={siteJsonLd} />
      </body>
    </html>
  );
}