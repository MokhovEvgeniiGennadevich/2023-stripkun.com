// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable .server.vue components
  // and they will run ONLY on Server Side
  experimental: {
    componentIslands: true,
  },
  // Enable SSR, Default TRUE
  ssr: true,
  devtools: { enabled: false },
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
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
