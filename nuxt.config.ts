// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxt/test-utils/module'],
  css: ['./assets/css/main.css'],
  supabase: {
    redirect: false,
  },
  build: {
    transpile: ['vue-countup-v3'],
  },
  alias: {
    '~': './',
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
});
