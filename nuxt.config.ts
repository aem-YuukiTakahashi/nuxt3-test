// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt3-test/' // 例: '/my-nuxt-app/'
  },
  nitro: {
    preset: 'static'
  }
})
