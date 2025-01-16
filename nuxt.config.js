// https://nuxt.com/docs/api/configuration/nuxt-config
async function getBlogRoutes() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await data.json()
  return posts.map((post) => `/blog/${post.id}`)
}

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
  },
  srcDir: "src/",
  css: ["@/assets/css/globals.css"],
  compatibilityDate: "2025-01-12",
  hooks: {
    async "prerender:routes"(ctx) {
      const routes = await getBlogRoutes()
      for (const route of routes) {
        ctx.routes.add(route)
      }
    },
  },
})
