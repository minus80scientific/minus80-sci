import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import "./index.css";

/* ---------- helpers ---------- */
function usePageTitle(title) {
  useEffect(() => { document.title = title }, [title]);
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0) }, [pathname]);
  return null;
}
const A = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-xl text-sm " +
      (isActive ? "bg-black text-white" : "text-neutral-700 hover:bg-neutral-100")
    }
  >
    {children}
  </NavLink>
);

/* ---------- layout ---------- */
function Shell({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <Link to="/" className="text-lg font-bold tracking-tight">Minus80 Scientific</Link>
          <div className="flex gap-2">
            <A to="/">Home</A>
            <A to="/services">Services</A>
            <A to="/contact">Contact</A>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">{children}</main>
      <footer className="mt-16 border-t">
        <div className="mx-auto max-w-6xl p-6 text-sm text-neutral-600">
          Dallas, TX • <a className="underline" href="tel:12144278733">(214) 427-8733</a> •{" "}
          <a className="underline" href="mailto:service@minus80scientific.com">service@minus80scientific.com</a>
        </div>
      </footer>
    </div>
  );
}

/* ---------- pages ---------- */
function Home() {
  usePageTitle("Minus 80 Scientific — Cold Storage Experts");
  return (
    <Shell>
      <section className="py-8">
        <h1 className="text-4xl font-bold tracking-tight">Ultra-low Freezer Service & Support</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">
          Dallas cold storage experts — Ultra-low (−80 °C) freezer repair, preventive maintenance, and 24/7 emergency service.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/contact" className="rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Request Service</Link>
          <Link to="/services" className="rounded-xl px-4 py-2 border hover:bg-neutral-50">See Services</Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <Card title="Repairs" body="Fast diagnostics, OEM-grade parts, tested before return to service." />
        <Card title="Preventive Maintenance" body="Quarterly/biannual PMs: gaskets, filters, vacuum integrity, alarms, logs." />
        <Card title="Validation" body="Temperature mapping and documentation to meet audit requirements." />
      </section>
    </Shell>
  );
}

function Services() {
  usePageTitle("Services — Minus 80 Scientific");
  return (
    <Shell>
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="mt-2 text-neutral-700 max-w-2xl">
        We support ultra-low (−80 °C) freezers and related cold-chain equipment for labs, biobanks, pharma, and universities.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <List title="Repair & Emergency" items={[
          "Priority response with stocked common parts",
          "Compressor, cascade, and vacuum system repairs",
          "Door, gasket, hinge, alarm, and sensor replacement",
          "Data retention & temperature recovery guidance"
        ]}/>
        <List title="Preventive Maintenance" items={[
          "Filter and gasket replacement",
          "Vacuum integrity checks and leak inspection",
          "Alarm & battery test, door/hinge adjustments",
          "Performance verification with documented results"
        ]}/>
        <List title="Installation & Relocation" items={[
          "Site readiness & power requirements",
          "Safe transport and leveling",
          "Start-up verification & acceptance test"
        ]}/>
        <List title="Validation & Mapping" items={[
          "Temperature mapping (empty/loaded scenarios)",
          "Probe placement plan & SOP assistance",
          "Final report prepared for audits"
        ]}/>
      </div>

      <Callout className="mt-10">
        Prefer a maintenance plan? We’ll propose a quarterly or biannual PM schedule that fits your inventory risk and budget.
      </Callout>

      <div className="mt-8">
        <Link to="/contact" className="rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Request a Quote</Link>
      </div>
    </Shell>
  );
}

function Contact() {
  usePageTitle("Contact — Minus 80 Scientific");
  return (
    <Shell>
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-neutral-700">Dallas, TX • (214) 427-8733 • service@minus80scientific.com</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form
  className="space-y-4"
  method="POST"
  action="https://formspree.io/f/mwpnjnrb"
>
  {/* optional: sets email subject on the notification you receive */}
  <input type="hidden" name="_subject" value="Minus80 Service Request" />
  {/* optional: simple honeypot (spam trap) */}
  <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

  <div>
    <label className="block text-sm font-medium">Name</label>
    <input name="name" required className="mt-1 w-full rounded-xl border px-3 py-2" />
  </div>
  <div>
    <label className="block text-sm font-medium">Email</label>
    <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2" />
  </div>
  <div>
    <label className="block text-sm font-medium">Phone</label>
    <input name="phone" className="mt-1 w-full rounded-xl border px-3 py-2" />
  </div>
  <div>
    <label className="block text-sm font-medium">How can we help?</label>
    <textarea name="message" rows="5" required className="mt-1 w-full rounded-xl border px-3 py-2"></textarea>
  </div>

  {/* optional: redirect to a Thank You page after submit
      (create a /thanks route if you want this behavior) */}
  {/* <input type="hidden" name="_redirect" value="https://www.minus80scientific.com/thanks" /> */}

  <button className="rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Send</button>
  <p className="text-xs text-neutral-500">
    Or email <a className="underline" href="mailto:service@minus80scientific.com">service@minus80scientific.com</a>
  </p>
</form>


        <div className="space-y-3">
          <InfoRow label="Phone" value={<a className="underline" href="tel:12144278733">(214) 427-8733</a>} />
          <InfoRow label="Email" value={<a className="underline" href="mailto:service@minus80scientific.com">service@minus80scientific.com</a>} />
          <InfoRow label="Service Area" value="Dallas–Fort Worth and surrounding regions" />
          <InfoRow label="Hours" value="Mon–Fri 8–5 (24/7 emergency available)" />
          <div className="rounded-2xl border p-4">
            <h3 className="font-semibold">Emergency Service</h3>
            <p className="text-sm text-neutral-700 mt-1">Call for immediate assistance. We triage ULT freezer failures and protect your samples first.</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function NotFound() {
  usePageTitle("404 — Minus 80 Scientific");
  return (
    <Shell>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-neutral-700">The page you requested doesn’t exist.</p>
      <div className="mt-6">
        <Link to="/" className="rounded-xl px-4 py-2 border hover:bg-neutral-50">Go Home</Link>
      </div>
    </Shell>
  );
}

/* ---------- small UI bits ---------- */
function Card({ title, body }) {
  return (
    <div className="rounded-2xl p-6 border">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-neutral-700 mt-2">{body}</p>
    </div>
  );
}
function List({ title, items }) {
  return (
    <div className="rounded-2xl p-6 border">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 list-disc list-inside text-sm text-neutral-700 space-y-1">
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </div>
  );
}
function Callout({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border p-6 bg-neutral-50 ${className}`}>
      <p className="text-neutral-700 text-sm">{children}</p>
    </div>
  );
}
function InfoRow({ label, value }) {
  return (
    <div className="flex gap-4">
      <div className="w-32 text-sm text-neutral-500">{label}</div>
      <div className="flex-1 text-sm">{value}</div>
    </div>
  );
}

/* ---------- mount ---------- */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("root")).render(<App />);
