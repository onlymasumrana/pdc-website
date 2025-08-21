// astro.config.mjs or astro.config.ts
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: true, // optional, Astro auto-adds Tailwind base styles
    },
  })],
});
