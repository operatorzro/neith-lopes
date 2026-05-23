import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(10 10 10)",
        ui: "rgb(24 24 27)",
        heading: "rgb(252 252 250)",
        body: "rgb(153 153 153)",
        border: "rgba(255 255 255 / 0.1)",
      },
      fontFamily: {
        sans: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        "h1": ["32px", { lineHeight: "1.3em", letterSpacing: "-0.04em" }],
        "h2": ["30px", { lineHeight: "1.3em", letterSpacing: "-0.02em" }],
        "h3": ["20px", { lineHeight: "1.3em", letterSpacing: "-0.02em" }],
        "body-m": ["16px", { lineHeight: "1.5em", letterSpacing: "-0.02em" }],
        "body-s": ["14px", { lineHeight: "1.5em", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "900px",
        footer: "800px",
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
