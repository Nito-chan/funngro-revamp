import type { Metadata } from "next";

import {
  CategoriesSection,
  HowItWorksSection,
  MechanicsSection,
  ReferralSection,
  TrustSection,
  WhySection,
  WorkTypesSection,
} from "@/components/YouthSections";
import { Hero } from "@/components/Hero";
import { LadderSection } from "@/components/LadderSection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_ORIGIN, site } from "@/data/site";
import { faqs, finalCta } from "@/data/youthData";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_ORIGIN,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Funngro for Youth | Earn Online With India's Top Brands",
  },
  description:
    "Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Funngro for Youth | Earn Online With India's Top Brands",
    description:
      "Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.",
    url: absoluteUrl("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funngro for Youth | Earn Online With India's Top Brands",
    description:
      "Complete real brand campaigns, build your portfolio and get paid by UPI. Funngro connects 70 lakh young Indians with 5,000+ brands.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function YouthPage() {
  return (
    <>
      <Hero />
      <WhySection />
      <HowItWorksSection />
      <WorkTypesSection />
      <CategoriesSection />
      <LadderSection />
      <MechanicsSection />
      <ReferralSection />
      <TrustSection />
      <FAQ
        id="faq"
        eyebrow="FAQ"
        title="Questions we see most often."
        lead="Facts first. If something changes on the official app, we point back to it rather than guessing."
        items={faqs}
      />
      <CTA
        title={finalCta.title}
        body={finalCta.body}
        primary={finalCta.primary}
        secondary={finalCta.secondary}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="shell pb-16">
        <p className="text-center text-xs text-faint">{site.disclaimer}</p>
      </section>
    </>
  );
}