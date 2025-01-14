<template>
  <section class="auth-form">
    <header class="flex flex-col gap-5 md:gap-8">
      <a href="/" class="cursor-pointer flex items-center gap-1">
        <img src="/vite.svg" width="34" height="34" alt="Vite logo" />
        <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
      </a>
      <div class="flex flex-col gap-1 md:gap-3">
        <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
          S'inscrire
          <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
        </h1>
      </div>
    </header>
  </section>
</template>
<script setup lang="ts">
  import EmailInput from '@/components/dsfr/EmailInput.vue';
  import PasswordInput from '@/components/custom/PasswordInput.vue';
  import TextInput from '@/components/TextInput.vue';
</script>
