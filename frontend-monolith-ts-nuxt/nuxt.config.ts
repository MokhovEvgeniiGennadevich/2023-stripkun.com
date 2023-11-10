// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable SSR, Default TRUE
  ssr: true,
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  css: ["~/assets/scss/main.scss"],
  routeRules: {
    // Dashboard renders only on client-side
    "/dashboard/**": { ssr: false },
  },
});
