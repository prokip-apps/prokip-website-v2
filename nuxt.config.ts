// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/seo'],

  site: {
    url: 'https://prokip.africa',
    name: 'Prokip',
    description: 'Prokip',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  }
})