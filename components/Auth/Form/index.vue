<template>
  <section class="auth-form">
    <header class="flex flex-col gap-5 md:gap-8">
      <NuxtLink to="/" class="cursor-pointer flex items-center gap-1">
        <img src="/vite.svg" alt="Noodle Bank Logo" width="34" height="34" />
        <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
      </NuxtLink>
      <div class="flex flex-col gap-1 md:gap-3">
        <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
          {{ type === 'sign-in' ? 'Se connecter' : "S'inscrire" }}
          <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
        </h1>
      </div>
    </header>
    <form class="space-y-8">
      <div v-if="type === 'sign-up'">
        <div class="flex gap-4">
          <TextInput name="firstname" label="Prénom" placeholder="ex: John" />
          <TextInput name="lastname" label="Nom" placeholder="ex: Doe" />
        </div>
      </div>
      <EmailInput />
      <PasswordSignInInput />
    </form>
    <div class="flex flex-col gap-4">
      <button type="submit" class="form-btn">
        {{ type === 'sign-in' ? 'Se connecter' : "S'inscrire" }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    type: string;
  }>();
</script>
