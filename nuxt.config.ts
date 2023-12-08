// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode"],
  srcDir: "src/",
  nitro: {
    output: {
      publicDir: path.join(__dirname, ".output/src/public"),
    },
  },
})
