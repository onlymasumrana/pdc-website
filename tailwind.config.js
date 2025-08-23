// created by running `npx tailwindcss init`
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background and foreground
        background: "var(--color-background)",
        "background-muted": "var(--color-background-muted)",
        foreground: "var(--color-foreground)",
        "foreground-muted": "var(--color-foreground-muted)",
        muted: "var(--color-muted)",

        // UI elements
        border: "var(--color-border)",
        card: {
          bg: "var(--color-card-bg)",
          text: "var(--color-card-text)",
          DEFAULT: "var(--color-card)",
        },
        form: {
          input: {
            bg: "var(--color-form-input-bg)",
            text: "var(--color-form-input-text)",
          }
        },

        // Brand colors
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          hover: "var(--color-tertiary-hover)",
        },

        // Status colors
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        info: "var(--color-info)",

        // Interactive elements
        link: {
          DEFAULT: "var(--color-link)",
          hover: "var(--color-link-hover)",
        },
        focus: {
          ring: "var(--color-focus-ring)",
        },

        // Buttons
        button: {
          primary: {
            background: {
              DEFAULT: "var(--color-button-background-primary)",
              hover: "var(--color-button-background-primary-hover)",
            },
            text: {
              DEFAULT: "var(--color-button-primary-text)",
              hover: "var(--color-button-primary-text-hover)",
            },
          },
          secondary: {
            background: {
              DEFAULT: "var(--color-button-background-secondary)",
              hover: "var(--color-button-background-secondary-hover)",
            },
            text: {
              DEFAULT: "var(--color-button-secondary-text)",
              hover: "var(--color-button-secondary-text-hover)",
            },
          },
          outline: {
            background: {
              DEFAULT: "var(--color-button-background-outline)",
              hover: "var(--color-button-background-outline-hover)",
            },
            text: {
              DEFAULT: "var(--color-button-outline-text)",
              hover: "var(--color-button-outline-text-hover)",
            },
            border: "var(--color-button-outline-border)",
          },
        },
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
};