export default defineNuxtConfig({
  routeRules: {
    "/**": { prerender: true },
  },
  ssr: true,
  target: "static",
  devtools: {
    enabled: true,
  },
  app: {
    pageTransition: { name: "page", mode: "in" },
    baseURL: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  srcDir: "src/",
  css: ["@/assets/css/globals.css"],
  compatibilityDate: "2025-01-12",
  hooks: {
    async "prerender:routes"(ctx) {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await data.json()
      const routes = posts.map((post) => `/blog/${post.id}`)
      for (const route of routes) {
        ctx.routes.add(route)
      }
    },
  },
})
