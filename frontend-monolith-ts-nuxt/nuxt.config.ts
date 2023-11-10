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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
});
