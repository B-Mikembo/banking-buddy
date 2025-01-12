<template>
  <section class="auth-form">
    <header class="flex flex-col gap-5 md:gap-8">
    <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
    <div class="flex flex-col gap-1 md:gap-3">
      <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
        Sign Up
        <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
      </h1>
    </div>
  </header>
  <AccountCreationForm />
  </section>
</template>

<script setup lang="ts">
  import AccountCreationForm from '@/components/custom/AccountCreation/AccountCreationForm.vue';
</script>
