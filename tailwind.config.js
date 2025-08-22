// tailwind.config.js
// created by running `npx tailwindcss init`
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background and foreground
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        "background-muted": "var(--color-background-muted)",
        "foreground-muted": "var(--color-foreground-muted)",

        // Brand colors
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)"
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)"
        },

        // Neutral colors
        border: "var(--color-border)",
        card: "var(--color-card)",

        // Button colors
        button: {
          primary: {
            background: {
              DEFAULT: "var(--color-button-background-primary)",
              hover: "var(--color-button-background-primary-hover)"
            },
            text: {
              DEFAULT: "var(--color-button-primary-text)",
              hover: "var(--color-button-primary-text-hover)"
            }
          },
          secondary: {
            background: {
              DEFAULT: "var(--color-button-background-secondary)",
              hover: "var(--color-button-background-secondary-hover)"
            },
            text: {
              DEFAULT: "var(--color-button-secondary-text)",
              hover: "var(--color-button-secondary-text-hover)"
            }
          },
          outline: {
            background: {
              DEFAULT: "var(--color-button-background-outline)",
              hover: "var(--color-button-background-outline-hover)"
            },
            text: {
              DEFAULT: "var(--color-button-outline-text)",
              hover: "var(--color-button-outline-text-hover)"
            },
            border: "var(--color-button-outline-border)"
          }
        }
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