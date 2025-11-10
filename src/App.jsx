// src/App.jsx
import React from "react";
import SEOHead from "./SEOHead.jsx";
import { SITE } from "./config.site";
import FAQ from "./components/FAQ";

export default function App() {
  // JSON-LD objects built in JS (safe), then stringified by SEOHead
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Minus 80 Scientific",
    url: SITE.url,
    telephone: SITE.displayPhone || "+1-214-427-8733",
    description:
      "Texas-wide ultra-low and lab-grade refrigeration service: emergency repair, preventive maintenance, and loaner cold storage for hospitals and laboratories.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: SITE.serviceArea || [
      "Texas",
      "Dallas–Fort Worth",
      "Houston",
      "Austin",
      "San Antonio",
      "El Paso",
      "Statewide Texas",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    knowsAbout: [
      "Low temp refrigeration",
      "Blood bank refrigeration",
      "Oven repairs",
      "Refrigeration repair",
      "Refrigeration service",
      "Hospital refrigeration",
      "ULTRA COLD service",
      "-20 freezer service",
      "-30 freezer service",
      "-40 freezer service",
      "-80 freezer service",
      "-140 freezer service",
      "-150 freezer service",
      "Lab grade freezer service",
      "Ultra low freezer service",
      "Ultra cold freezer service",
      "Loaner freezer and refrigerators",
      "Hospital lab freezers",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Refrigeration & Ultra-Low Freezer Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Low temp refrigeration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blood bank refrigeration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oven repairs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigeration repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigeration service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospital refrigeration" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ULTRA COLD service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "-20 freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "-30 freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "-40 freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "-80 freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "-140 freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "-150 freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lab grade freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ultra low freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ultra cold freezer service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loaner freezer and refrigerators" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospital lab freezers" } },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer 24/7 emergency repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Call ${SITE.displayPhone || "214-427-8733"} for immediate help across ${
            (SITE.serviceArea || ["Texas"]).join(", ")
          }.`,
        },
      },
      {
        "@type": "Question",
        name: "What temperatures do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ultra-low freezers between approximately −70 °C and −86 °C, plus related cold storage equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide preventive maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes—scheduled PM with performance checks and documentation suitable for QA/compliance.",
        },
      },
    ],
  };

 return (
  <>
    {/* Primary SEO */}
    <SEOHead
      title="Ultra-Low (-80 °C) Freezer Repair & Maintenance | Minus 80 Scientific – Dallas/Fort Worth"
      description="DFW experts in ultra-low (-80 °C) freezer repair, 24/7 emergency service, and preventive maintenance for labs and biomedical facilities."
      canonical={`${SITE.url}/`}
      jsonLd={faqJsonLd}
    />
    {/* Business schema */}
    <SEOHead jsonLd={businessJsonLd} />

    {/* ====== HEADER / HERO ====== */}
    <header className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Minus80 Scientific
          </h1>
          <span className="hidden sm:inline text-zinc-500">
            Ultra-low (−80&nbsp;°C) freezer service
          </span>
        </div>
        <div className="text-right">
          <a
            className="inline-block rounded-full bg-black text-white px-4 py-2 text-sm font-medium"
            href={`tel:${(SITE.displayPhone || "214-427-8733").replace(/\D/g, "")}`}
          >
            Call {SITE.displayPhone || "214-427-8733"}
          </a>
          <div className="text-xs text-zinc-500 mt-1">Texas-wide service</div>
        </div>
      </div>
    </header>

    <main className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ultra-low (−80&nbsp;°C) freezer repair & preventive maintenance
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Emergency repair, scheduled PM, and loaner cold storage for hospitals,
            universities, and biomedical labs across { (SITE.serviceArea || ["Texas"]).join(", ") }.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${(SITE.displayPhone || "214-427-8733").replace(/\D/g, "")}`}
              className="rounded-md bg-black text-white px-5 py-3 font-medium"
            >
              24/7 Emergency Service
            </a>
            <a
              href="mailto:info@minus80scientific.com"
              className="rounded-md border border-zinc-300 px-5 py-3 font-medium"
            >
              Request Maintenance
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-10 border-t border-zinc-200">
        <h3 className="text-xl font-semibold">Services</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Ultra-low (−80 °C) freezer repair", desc: "All major manufacturers" },
            { name: "Preventive maintenance (PM)", desc: "Performance checks & documentation" },
            { name: "Loaner freezers / refrigerators", desc: "Keep samples safe during repair" },
            { name: "Calibration & validation", desc: "QA/Compliance-ready records" },
            { name: "−20/−30/−40/−80/−140/−150 °C", desc: "Broad temperature coverage" },
            { name: "Hospital & research labs", desc: "On-site, Texas-wide" },
          ].map((s) => (
            <div key={s.name} className="rounded-lg border border-zinc-200 p-5">
              <div className="font-medium">{s.name}</div>
              <div className="text-zinc-600 mt-1 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-zinc-200">
        <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8">
          <h3 className="text-xl font-semibold">Need help now?</h3>
          <p className="mt-2 text-zinc-600">
            Call <strong>{SITE.displayPhone || "214-427-8733"}</strong> for 24/7 service,
            or email <a className="underline" href="mailto:info@minus80scientific.com">info@minus80scientific.com</a>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`tel:${(SITE.displayPhone || "214-427-8733").replace(/\D/g, "")}`}
              className="rounded-md bg-black text-white px-5 py-3 font-medium"
            >
              Call Now
            </a>
            <a
              href="https://formspree.io/f/mwpnjnrb"
              className="rounded-md border border-zinc-300 px-5 py-3 font-medium"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-zinc-200">
        <h3 className="text-xl font-semibold">FAQ</h3>
        <div className="mt-4">
          <FAQ />
        </div>
      </section>
    </main>

    <footer className="mt-10 border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-500">
        © {new Date().getFullYear()} Minus80 Scientific • Dallas, TX
      </div>
    </footer>
  </>
);
