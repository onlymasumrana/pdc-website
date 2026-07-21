# Design System: pdc-tempsite

This document outlines the design system, typography, color palette, components, and layout utilities configured for the `pdc-tempsite` project. It is built using **Astro**, **Tailwind CSS**, and **React**, with custom theme tokens mapped via CSS custom properties (variables) defined in [global.css](file:///Users/masum/Downloads/pdc-website/src/styles/global.css).

---

## 1. Typography

The design system imports and uses a single modern typeface:
* **Switzer** (A neo-grotesque sans-serif font from Fontshare, used for headings, body text, and all UI elements)

### Font Family Stack
* **`font-sans`**: `"Switzer", sans-serif`

### Type Hierarchy
All headings automatically apply `font-semibold` and default sizes relative to screen breakpoints:

| Element | Mobile Size | Desktop Size | Tailwind/HTML Default |
| :--- | :--- | :--- | :--- |
| **H1** | `text-4xl` (36px) | `md:text-5xl lg:text-6xl` (48px - 60px) | Main landing hero titles |
| **H2** | `text-3xl` (30px) | `md:text-4xl` (36px) | Section headers |
| **H3** | `text-2xl` (24px) | `md:text-3xl` (30px) | Subsections, card headers |
| **H4** | `text-xl` (20px) | `md:text-2xl` (24px) | Small card titles |
| **Body (p)** | `text-base` | `text-base` | Default text, `leading-relaxed` |

> [!IMPORTANT]
> **Typography Constraints**:
> * **Minimum Font Size**: To ensure optimal accessibility and readability, this project enforces a minimum font size of `1rem` (16px) for all text. Tailwind's standard `text-xs` and `text-sm` utility classes have been overridden in `tailwind.config.js` to resolve to `1rem` (16px).
> * **Minimum Line Height**: The absolute line height for any text style must be at least `1.5rem` (24px). Tailwind's line-height utilities (`none`, `tight`, `snug`, `3`, `4`, `5`) are overridden to resolve to a minimum of `1.5rem`.

---

## 2. Color Palette & Themes

The design system supports dynamic theme switching (default Light Theme and a Dark Theme via `data-theme="neutral-dark"` attribute). 

By default, the theme is loaded **automatically** using the following order of precedence:
1. **Manual User Preference**: Any manually chosen theme saved in `localStorage` by clicking the switcher.
2. **System Preference**: The user's operating system preference (detected via `prefers-color-scheme`), with live updates if the OS theme changes while the page is open.
3. **Time-of-Day Fallback**: Activates the dark theme if the user's local time is between 6:00 PM and 6:00 AM.

A premium floating theme toggle button (`#theme-toggle`) is fixed at the bottom-right corner of the screen (`fixed bottom-6 right-6`), allowing users to manually override the automatic selection. Theme tokens are mapped to semantic CSS variables.

### Theme Comparison

| Token Group | CSS Variable | Light Theme (Default) | Dark Theme (`neutral-dark`) |
| :--- | :--- | :--- | :--- |
| **Base Background** | `--color-background` | `#ffffff` | `#1c1c1c` |
| **Muted Background** | `--color-background-muted` | `#f0f0f0` | `#0a0a0a` |
| **Base Foreground** | `--color-foreground` | `#02152c` (Dark Blue) | `#f5f5f5` (Off-white) |
| **Muted Foreground** | `--color-foreground-muted` | `#5b6776` | `#a3a3a3` |
| **Border Color** | `--color-border` | `#5b677650` (Translucent) | `#404040` |
| **Muted Border** | `--color-border-muted` | `#5b677625` | `#40404050` |

### Brand Colors

| Token Name | CSS Variable | Light Theme | Dark Theme |
| :--- | :--- | :--- | :--- |
| **Primary** | `--color-primary` | `#02152c` | `#ffffff` |
| **Primary Hover** | `--color-primary-hover` | `#0a435a` | `#e9e9e9` |
| **Secondary** | `--color-secondary` | `#5b6776` | `#bbbbbb` |
| **Secondary Hover** | `--color-secondary-hover` | `#465e7a` | `#d4d4d4` |
| **Accent** | `--color-accent` | `#a3a3a3` | `#737373` |
| **Accent Hover** | `--color-accent-hover` | `#d4d4d4` | `#a3a3a3` |

### Status Colors

Status colors are consistent or adapt slightly for readability across themes:

| Status | CSS Variable | Light Theme | Dark Theme |
| :--- | :--- | :--- | :--- |
| **Success** | `--color-success` | `#15803d` (Green 700) | `#4ade80` (Green 400) |
| **Warning** | `--color-warning` | `#d97706` (Amber 600) | `#facc15` (Yellow 400) |
| **Danger** | `--color-danger` | `#b91c1c` (Red 700) | `#f87171` (Red 400) |
| **Info** | `--color-info` | `#1d4ed8` (Blue 700) | `#60a5fa` (Blue 400) |

---

## 3. Custom UI Components (CSS Classes)

Custom components are declared in the `@layer components` section of `global.css` for consistent, clean reuse.

### 3.1 Buttons
To enforce visual consistency and automatically render the brand's signature arrow icon box, use the reusable `<Button>` Astro component:

```astro
---
import Button from '../components/Button.astro';
---

<Button href="/contact" variant="primary">Get in Touch</Button>
<Button href="/pricing" variant="outline">View Pricing</Button>
```

The component automatically handles the custom asymmetric padding (`p-2 pl-4 text-sm`) and injects the arrow icon layout.

#### Raw CSS Button Classes (For Reference)
* **Base**: `.btn`
* **Styles**:
  * `.btn-primary`: Filled with Primary Color, white/contrast text.
  * `.btn-secondary`: Filled with Secondary Color.
  * `.btn-outline`: Transparent background with border, primary text. Inverts colors on hover.
  * `.btn-ghost`: Hover background highlights using muted colors.
  * `.btn-link`: Text link styling with hover underline.

### 3.2 Cards & Containers
* **`.container-custom`**: Standardized page container with maximum width of `1280px` (`max-w-7xl`) and responsive padding.
* **`.card`**: Rounded corners, border, card background (`--color-card-bg`), and default padding (`p-6`).
* **`.card-glass`**: Glassmorphism effect utilizing CSS `color-mix()` and `backdrop-blur-md` for premium overlay card styles.

```html
<div class="card-glass">
  <h3>Card Title</h3>
  <p>Card body content goes here.</p>
</div>
```

### 3.3 Layout & Sections
* **`.section`**: Adds vertical padding for page sections (`py-[50px]` top and bottom) to establish a consistent 100px gap between adjacent sections.
* **`.section-header`**: Centers and spaces section title metadata.
* **`.section-title`**: Prominent bold heading with bottom padding.
* **`.section-subtitle`**: Constrained max-width subtitle text in muted style.
* **Navbar Gap Rule**: The first section of any page must **not** use the `pt-0` class. This ensures a consistent `50px` layout gap is kept below the sticky header.

### 3.4 Form Controls
A clean, consistent set of styles for standard input fields:
* **`.form-group`**: Vertical stacking layout (`space-y-2`).
* **`.form-label`**: Bold, medium weight field labels.
* **`.form-input`** / **`.form-textarea`** / **`.form-select`**: Styled input fields with theme-aware borders, backgrounds, and outline rings on focus.
* **`.form-checkbox-box`** / **`.form-radio`**: Form controls that inherit brand colors.
* **`.form-error`** / **`.form-help`**: Contextual helper texts.

### 3.5 Badges & Alerts
* **Badges** (`.badge` + modifier):
  * `.badge-primary`, `.badge-secondary`, `.badge-success`, `.badge-warning`, `.badge-danger`, `.badge-info`
  * Automatically uses a translucent background overlay (20% opacity of the theme color) with full color text.
* **Alerts** (`.alert` + modifier):
  * `.alert-success`, `.alert-warning`, `.alert-danger`, `.alert-info`
  * Sets border, light background (10% opacity), and text status colors.

---

## 4. Animation & Utility Classes

The design system extends Tailwind with custom animations and utility styles:

### Animations
* **`.animate-in`**: Sets baseline animation duration (150ms) and easing.
* **`.fade-in-0`**: Smooth opacity fade-in animation.
* **`.zoom-in-95`**: Slight zoom scaling (`scale(0.95)` to `scale(1)`) combined with fade-in.
* **`.spinner`**: A spin-animated circle loader.
* **`.skeleton`**: Pulse-animated background placeholder for skeleton loader screens.

### Utility Classes
* **`.text-balance`**: Wraps text in a balanced manner (useful for titles/headings to prevent orphans).
* **`.text-gradient`**: Multi-color brand gradient text using primary to secondary themes (`bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`).
