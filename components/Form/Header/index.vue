<template>
  <header class="flex flex-col gap-5 md:gap-8">
    <NuxtLink to="/" class="cursor-pointer flex items-center gap-1">
      <img src="/vite.svg" alt="Vite logo" width="34" height="34" />
      <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
    </NuxtLink>
    <div>
      <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
        {{ title }}
        <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
      </h1>
    </div>
  </header>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>
