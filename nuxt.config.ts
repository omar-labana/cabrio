// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/cabrio/",
  },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/fonts", "nuxt-icon"],
});
