// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/**": { prerender: true },
  },

  devtools: {
    enabled: false,
  },

  srcDir: "src/",
  css: ["@/assets/css/globals.css"],
  compatibilityDate: "2025-01-12",
});