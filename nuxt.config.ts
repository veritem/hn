import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@unocss/nuxt"],
  unocss: {
    uno: true,
    attributify: true,
    icons: true,
    components: false,
    webFonts: true,
  },
});
