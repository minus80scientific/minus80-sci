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

      {/* Your page UI goes here */}
      <main className="min-h-screen">
        {/* …hero/sections… */}
        <FAQ />
      </main>
    </>
  );
}
