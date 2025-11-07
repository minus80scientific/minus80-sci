import { SITE } from "../config.site";

export default function FAQ() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-10">
      <h2 className="text-xl font-semibold">FAQ</h2>

      <details className="mt-3">
        <summary>Do you offer 24/7 emergency repair?</summary>
        <div className="mt-2">
          Yes. Call <a className="underline" href={`tel:${SITE.phone}`}>{SITE.displayPhone}</a> for immediate help across {SITE.serviceArea.join(", ")}.
        </div>
      </details>

      <details className="mt-3">
        <summary>What temperatures do you service?</summary>
        <div className="mt-2">
          Ultra-low freezers between approximately −70 °C and −86 °C, plus related cold storage equipment.
        </div>
      </details>

      <details className="mt-3">
        <summary>Do you provide preventive maintenance?</summary>
        <div className="mt-2">
          Yes—scheduled PM with performance checks and documentation suitable for QA/compliance.
        </div>
      </details>
    </section>
  );
}
