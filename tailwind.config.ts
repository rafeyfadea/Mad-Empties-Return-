import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mad-rose": {
          50: "#FFF5F7",
          100: "#FFE5EB",
          200: "#FFCCD9",
          500: "#D4738F",
          600: "#BF5E7A",
          700: "#8B4A5F",
        },
        cream: {
          50: "#FDFCFB",
          100: "#F8F5F2",
        },
        sage: {
          100: "#EDF5F0",
          500: "#7BA68C",
          700: "#4A6B5A",
        },
        warm: {
          200: "#E5DDD9",
          400: "#B4A79F",
          700: "#5C524A",
          900: "#2A241E",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        button: "24px",
        input: "16px",
        badge: "12px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        content: "640px",
      },
    },
  },
  plugins: [],
};

export default config;
