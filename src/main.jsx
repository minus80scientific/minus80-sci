import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold tracking-tight">Minus80 Scientific</h1>
      <p className="mt-2 text-neutral-600">Vite + React + Tailwind v4 is working ✔</p>
      <button className="mt-6 rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Test Button</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
