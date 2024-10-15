export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // devtools: { enabled: true },
  sourcemap: {
    server: false,
    client: false,
  },
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
          api: "modern-compiler",
          additionalData: `
          @use "~/assets/styles/main.scss" as *;
          @use "~/assets/styles/_lenis.scss" as *;
          @use "~/assets/styles/_mixins.scss" as *;
          @use "~/assets/styles/_animations.scss" as *;
          `,
        },
      },
    },
  },
  image: {
    // Options
  },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@hypernym/nuxt-gsap",
    "@nuxtjs/device",
    "@nuxt/icon",
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  fonts: {
    families: [
      { name: "RibbonVF", provider: "local", weight: "0 1000" },
      { name: "RalewayVF", provider: "local", weight: "0 900" },
    ],
  },
});