import { Helmet } from "react-helmet-async";
import SEO from "./components/SEO";
import FAQ from "./components/FAQ";
import { SITE } from "./config.site";

<SEO
  title="Ultra-Low (-80 °C) Freezer Repair & Maintenance | Minus 80 Scientific – Dallas/Fort Worth"
  description="DFW experts in ultra-low (-80 °C) freezer repair, 24/7 emergency service, and preventive maintenance for labs and biomedical facilities."
  url={`${SITE.url}/`}
/>

<Helmet>
  <script type="application/ld+json">{JSON.stringify({
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Do you offer 24/7 emergency repair?","acceptedAnswer":{"@type":"Answer","text":`Yes. Call ${SITE.displayPhone} for immediate help across ${SITE.serviceArea.join(", ")}.`}},
      {"@type":"Question","name":"What temperatures do you service?","acceptedAnswer":{"@type":"Answer","text":"Ultra-low freezers between approximately −70 °C and −86 °C, plus related cold storage equipment."}},
      {"@type":"Question","name":"Do you provide preventive maintenance?","acceptedAnswer":{"@type":"Answer","text":"Yes—scheduled PM with performance checks and documentation suitable for QA/compliance."}}
    ]
  })}</script>
</Helmet>

<FAQ />



