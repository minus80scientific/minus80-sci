/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "ui-sans-serif", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "ui-sans-serif"],
      },

      /* Brand palette */
      colors: {
        primary: {
          50:  "#eef7ff",
          100: "#d9edff",
          200: "#b9dcff",
          300: "#8cc4ff",
          400: "#5aa5ff",
          500: "#2b84ff",   // brand blue (buttons/links)
          600: "#1969e6",
          700: "#1555b8",
          800: "#134895",
          900: "#113b77",
          950: "#0b274e",
        },
        tealbrand: {
          50:  "#eafffb",
          100: "#c6fff5",
          200: "#8efdea",
          300: "#56f0dc",
          400: "#2dd5c5",
          500: "#12b9ac",  // teal for gradients/accents
          600: "#0c978f",
          700: "#0c7772",
          800: "#0e5f5c",
          900: "#0e4d4b",
          950: "#072f2f",
        },
        ink: {
          50:  "#f6f7fb",
          100: "#eceef6",
          200: "#d7dcec",
          300: "#b3bed7",
          400: "#8694b3",
          500: "#667091",
          600: "#515a79",
          700: "#414861",
          800: "#34394f",
          900: "#292e40",
          950: "#171b26",
        },
        surface: {
          50:  "#ffffff",
          100: "#fbfcff",
          200: "#f5f7fb",
          300: "#eef2f7",
          400: "#e6ebf1",
          500: "#dee3ea",
          600: "#c9d1dc",
          700: "#aeb9c6",
          800: "#8e9aaa",
          900: "#6d7887",
          950: "#3a3f47",
        },
        success: { DEFAULT: "#16a34a" },
        warning: { DEFAULT: "#f59e0b" },
        danger:  { DEFAULT: "#ef4444" },
      },

      /* Shadows & radii */
      boxShadow: {
        card: "0 8px 30px rgba(17, 59, 119, 0.10), 0 2px 8px rgba(17, 59, 119, 0.06)",
        soft: "0 6px 18px rgba(0,0,0,0.08)",
        ring: "0 0 0 4px rgba(43,132,255,0.12)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },

      /* Custom gradients */
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #12b9ac 0%, #2b84ff 45%, #113b77 100%)",
        "gradient-footer": "linear-gradient(180deg, #0b274e 0%, #113b77 40%, #0e4d4b 100%)",
        "gradient-cta": "linear-gradient(90deg, #2b84ff 0%, #12b9ac 100%)",
      },

      /* Transitions */
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],

  /* Keep frequently used dynamic classes alive */
  safelist: [
    { pattern: /(bg|from|to|via)-(primary|tealbrand|ink|surface)-(50|100|200|300|400|500|600|700|800|900|950)/ },
    { pattern: /(text|border)-(primary|tealbrand|ink|surface)-(400|500|600|700|800|900)/ },
    "bg-gradient-hero",
    "bg-gradient-footer",
    "bg-gradient-cta",
  ],
};
