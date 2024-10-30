import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const { strapiURL: baseURL, strapiAPIKey } = useRuntimeConfig();

  const strapi = $fetch.create({
    baseURL,
    onRequest({ request, options, error }) {
      options.headers.set("Authorization", `Bearer ${strapiAPIKey}`);
    },
    // async onResponseError({ response }) {
    //   if (response.status === 401) {
    //     await nuxtApp.runWithContext(() => navigateTo('/login'))
    //   }
    // }
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      strapi,
    },
  };
});
