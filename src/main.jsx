import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return <h1 className="text-3xl font-bold">Minus80 Scientific</h1>;
}
function Services() {
  return <h1 className="text-2xl font-semibold">Services</h1>;
}
function Contact() {
  return <h1 className="text-2xl font-semibold">Contact</h1>;
}
function NotFound() {
  return <h1 className="text-xl">404 — Not found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);


createRoot(document.getElementById('root')).render(<App />)
