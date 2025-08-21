//  created by running 'npx tailwindcss init' command
// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
        card: "var(--color-bg-card)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}

