import { defineNuxtConfig } from "nuxt/config";

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
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-48x48.png",
          sizes: "48x48",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        // { name: 'apple-mobile-web-app-title', content: 'Selfear' },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
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
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@hypernym/nuxt-gsap",
    "@nuxtjs/device",
    "@nuxt/icon",
    "@nuxtjs/strapi",
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
  runtimeConfig: {
    strapiURL: process.env.NUXT_STRAPI_URL,
    strapiAPIKey: process.env.NUXT_STRAPI_API_KEY,
  },
  strapi: {
    url: process.env.NUXT_STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v5",
  },
});
