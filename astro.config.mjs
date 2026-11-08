// @ts-check
import { defineConfig } from "astro/config"
import cloudflare from "@astrojs/cloudflare"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your custom domain once it's configured in Cloudflare
  site: "https://dylan-chaves-portfolio.workers.dev",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  // The site is fully prerendered, so it doesn't need Astro sessions (KV binding).
  // Remove this line if you add on-demand routes that use `Astro.session`.
  session: false,

  adapter: cloudflare({
    // Optimize images at build time instead of requiring a Cloudflare Images binding
    imageService: "compile",
  }),
})
