// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', 'nuxt-icons'],
  css: ['./assets/css/main.css'],
  supabase: {
    redirect: false,
  },
  build: {
    transpile: ['vue-countup-v3'],
  },
});
