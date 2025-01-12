<template>
  <form class="space-y-8">
    <div class="flex gap-4">
      <div class="form-item">
        <label class="label form-label" for="firstname">Prénom</label>
        <input id="firstname" class="input form-input" type="text" placeholder="Entrez votre prénom" />
      </div>
      <input type="text" placeholder="Entrez votre nom" />
    </div>
    <input type="text" placeholder="Entrez votre adresse" />
    <div class="flex gap-4">
      <input type="text" placeholder="Entrez votre ville" />
      <input type="text" placeholder="Entrez votre code postal" />
    </div>
    <div class="flex gap-4">
      <input type="date" />
      <input type="text" placeholder="Entrez votre numéro de sécurité sociale" />
    </div>
    <input type="email" placeholder="Entrez votre adresse électronique" />
    <input type="password" placeholder="Entrez votre mot de passe" />
    <div class="flex flex-col gap-4">
      <button type="submit">S'inscrire</button>
    </div>
  </form>
  <slot></slot>
  <footer class="flex justify-center gap-1">
    <p>Déjà un compte ?</p>
    <a href="/authentication">Se connecter</a>
  </footer>
</template>

<script setup lang="ts">
  import EmailInput from '@/components/dsfr/EmailInput.vue';
  import PasswordInput from '@/components/custom/PasswordInput.vue';
  import TextInput from '@/components/dsfr/TextInput.vue';
</script>
