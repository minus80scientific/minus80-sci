import { useEffect } from "react";

export default function SEOHead({ title, description, jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    // ensure <meta name="description"> exists
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    const prevDesc = meta.getAttribute("content");
    if (description) meta.setAttribute("content", description);

    // add JSON-LD (if provided)
    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // cleanup on unmount
    return () => {
      document.title = prevTitle;
      if (description) meta.setAttribute("content", prevDesc ?? "");
      if (script) document.head.removeChild(script);
    };
  }, [title, description, jsonLd]);

  return null;
}
