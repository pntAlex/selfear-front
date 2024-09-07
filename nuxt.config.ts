// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: "fr",
      },
      viewport: "width=device-width, initial-scale=1",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  image: {
    // Options
  },
  modules: ["@nuxt/image", "@nuxt/fonts", "@hypernym/nuxt-gsap"],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
