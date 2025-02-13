<template>
  <section class="flex-center size-full max-sm:px-6">
    <AuthForm type="sign-in" />
  </section>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  });

  useHead({
    title: 'Connexion',
  });
</script>
