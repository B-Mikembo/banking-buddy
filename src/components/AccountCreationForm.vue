<template>
  <section class="auth-form">
    <header class="flex flex-col gap-5 md:gap-8">
      <router-link :to="{ name: CommonRouteName.AUTHENTICATION }" class="cursor-pointer flex items-center gap-1">
        <img src="/vite.svg" width="34" height="34" alt="Vite logo" />
        <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
      </router-link>
      <div class="flex flex-col gap-1 md:gap-3">
        <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
          S'inscrire
          <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
        </h1>
      </div>
    </header>
    <form class="space-y-8">
      <div class="flex gap-4">
        <TextInput name="firstname" label="Prénom" placeholder="ex: John" />
        <TextInput name="lastname" label="Nom" placeholder="Doe" />
      </div>
      <TextInput name="address" label="Adresse Postale" placeholder="Entrez votre adresse postale" />
      <div class="flex gap-4">
        <TextInput name="city" label="Ville" placeholder="ex: Paris" />
        <TextInput name="postal-code" label="Code Postal" placeholder="ex: 112233" />
      </div>
      <EmailInput />
      <PasswordInput />
      <div class="flex flex-col gap-4">
        <button type="submit" class="form-btn">S'inscrire</button>
      </div>
    </form>
    <footer class="flex justify-center gap-1">
      <p class="text-14 font-normal text-gray-600">Déjà un compte ?</p>
      <router-link :to="{ name: CommonRouteName.AUTHENTICATION }" class="form-link">Se connecter</router-link>
    </footer>
  </section>
</template>
<script setup lang="ts">
  import EmailInput from '@/components/EmailInput.vue';
  import PasswordInput from '@/components/PasswordInput.vue';
  import TextInput from '@/components/TextInput.vue';
  import { CommonRouteName } from '@/router';
</script>
