import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <header className="py-8">
        <h1 className="text-4xl font-bold tracking-tight">Minus80 Scientific</h1>
        <p className="mt-2 text-neutral-600">
          Dallas cold storage experts — Ultra-low (-80 °C) freezer repair, preventive maintenance, and 24/7 emergency service.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl p-6 border">
          <h2 className="font-semibold">Services</h2>
          <ul className="mt-2 list-disc list-inside text-neutral-700 text-sm">
            <li>Installations & start-ups</li>
            <li>Repairs & parts</li>
            <li>Preventive maintenance</li>
            <li>Temperature validation</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 border">
          <h2 className="font-semibold">Industries</h2>
          <p className="mt-2 text-neutral-700 text-sm">Labs, biobanks, universities, pharma, clinical research.</p>
        </div>
        <div className="rounded-2xl p-6 border">
          <h2 className="font-semibold">Contact</h2>
          <p className="mt-2 text-neutral-700 text-sm">
            Dallas, TX • <a className="underline" href="tel:12144278733">(214) 427-8733</a><br />
            <a className="underline" href="mailto:service@minus80scientific.com">service@minus80scientific.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
