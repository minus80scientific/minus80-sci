import { SITE } from "../config.site";

export default function Footer() {
  return (
    <footer className="text-sm text-gray-600 mt-12 border-t pt-6">
      <div className="max-w-5xl mx-auto px-4">
        <p><strong>{SITE.name}</strong> — Ultra-Low (-80 °C) Freezer Service</p>
        <p>Serving: {SITE.serviceArea.join(", ")}</p>
        <p>
          Phone: <a href={`tel:${SITE.phone}`} className="underline">{SITE.displayPhone}</a>
        </p>
        <p>Dallas, {SITE.region}</p>
        <nav className="mt-2 space-x-3">
          <a href="/" className="underline">Home</a>
          <a href="/services" className="underline">Services</a>
          <a href="/emergency-repair" className="underline">Emergency Repair</a>
          <a href="/preventive-maintenance" className="underline">Preventive Maintenance</a>
          <a href="/contact" className="underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
