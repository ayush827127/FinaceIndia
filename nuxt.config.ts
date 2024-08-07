// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
      buildAssetsDir: '/',
      head: {
          htmlAttrs: { lang: 'fa' },
          link: [{ rel: 'icon', type: 'image/png', href: "/assets/img/misc/logo-init.png" }]
      },
  },
  devtools: { 
    enabled: true, 
    lazy: true // Enable lazy loading for devtools
  },
  modules: ["nuxt-icons", "@nuxt/ui", "@nuxtjs/google-fonts"],
  ui: {
    lazy: true // Enable lazy loading for @nuxt/ui
  },
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  compatibilityDate: '2024-08-05' // Set the compatibility date
})