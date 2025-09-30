// created by running `npx tailwindcss init`
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["DM Sans", "Montserrat", "Inter",  sans-serif],
      },
      colors: {
        // Base
        background: 'var(--color-background)',
        'background-muted': 'var(--color-background-muted)',
        foreground: 'var(--color-foreground)',
        'foreground-muted': 'var(--color-foreground-muted)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        'border-muted': 'var(--color-border-muted)',

        // Cards & Forms
        card: 'var(--color-card)',
        'card-bg': 'var(--color-card-bg)',
        'card-text': 'var(--color-card-text)',
        'form-input-bg': 'var(--color-form-input-bg)',
        'form-input-text': 'var(--color-form-input-text)',

        // Brand
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        tertiary: 'var(--color-tertiary)',
        'tertiary-hover': 'var(--color-tertiary-hover)',

        // Status
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        info: 'var(--color-info)',

        // Interactive
        link: 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
        'focus-ring': 'var(--color-focus-ring)',

        // Buttons - FLATTENED structure for utility class generation
        'button-primary-background': 'var(--color-button-primary-background)',
        'button-primary-background-hover': 'var(--color-button-primary-background-hover)',
        'button-primary-text': 'var(--color-button-primary-text)',
        'button-primary-text-hover': 'var(--color-button-primary-text-hover)',
        'button-secondary-background': 'var(--color-button-secondary-background)',
        'button-secondary-background-hover': 'var(--color-button-secondary-background-hover)',
        'button-secondary-text': 'var(--color-button-secondary-text)',
        'button-secondary-text-hover': 'var(--color-button-secondary-text-hover)',
        'button-outline-background': 'var(--color-button-outline-background)',
        'button-outline-background-hover': 'var(--color-button-outline-background-hover)',
        'button-outline-text': 'var(--color-button-outline-text)',
        'button-outline-text-hover': 'var(--color-button-outline-text-hover)',
        'button-outline-border': 'var(--color-button-outline-border)',
      },

      // Extend the default borderColor to include our custom 'border'
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        // Ensures 'border-border' class works. Now 'border' is the default.
        DEFAULT: theme('colors.border', 'currentColor'),
      }),

      // Extend keyframes for our custom animations from global.css
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        zoomIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },

      // Add animation utilities for our custom classes
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'zoom-in': 'zoomIn 200ms ease-out',
      },
    },
  },
  plugins: [],
};