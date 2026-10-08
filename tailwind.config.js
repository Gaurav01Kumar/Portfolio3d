/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070a13",
        secondary: "#94a3b8",
        tertiary: "#0f172a",
        "black-100": "#0b0f19",
        "black-200": "#060911",
        "white-100": "#f8fafc",
        dev: {
          bg: "#070a13",
          card: "#0b1120",
          cardBorder: "#1e293b",
          cyan: "#06b6d4",
          emerald: "#10b981",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(2, 6, 23, 0.7)",
        glow: "0 0 25px -5px rgba(6, 182, 212, 0.25)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.25)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.25)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "dev-grid": "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};