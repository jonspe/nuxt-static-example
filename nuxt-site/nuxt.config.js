// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/**": { prerender: true },
  },
  devtools: {
    enabled: false,
  },
  app: {
    pageTransition: { name: "page", mode: "in" },
  },
  srcDir: "src/",
  css: ["@/assets/css/globals.css"],
  compatibilityDate: "2025-01-12",
})
