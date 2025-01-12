<template>
  <form class="space-y-8">
    <fieldset>
      <legend>
        <h1>Créez votre compte sur Noodle Bank</h1>
      </legend>
      <p>Tous les champs sont obligatoires</p>
      <div class="flex gap-4">
        <TextInput
          label="Votre nom"
          name="user-lastname"
          placeholder="Entrez votre nom"
          :required="true"
          :autofocus="true"
        />
        <TextInput
          label="Votre prénom"
          name="user-firstname"
          placeholder="Entrez votre prénom"
          :required="true"
          :autofocus="true"
        />
      </div>
      <div class="fr-messages-group" aria-live="assertive" id="name-1-fieldset-messages"></div>
      <div class="fr-fieldset__element">
        <EmailInput label="Adresse électronique" name="user-email" />
      </div>
      <div class="fr-fieldset__element">
        <PasswordInput />
      </div>
      <div class="fr-fieldset__element fr-mb-0 fr-mt-1w">
        <button class="fr-btn fr-btn--lg display-block full-width" type="submit">S'inscrire</button>
      </div>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
  import EmailInput from '@/components/dsfr/EmailInput.vue';
  import PasswordInput from '@/components/custom/PasswordInput.vue';
  import TextInput from '@/components/dsfr/TextInput.vue';
</script>
