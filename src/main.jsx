import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";     // Tailwind
import "./App.css";       // legacy styles (if present)
import App from "./App";  // adjust if your file is App.jsx/tsx

createRoot(document.getElementById("root")).render(<App />);
