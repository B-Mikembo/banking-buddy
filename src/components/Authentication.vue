<template>
  <div class="fr-container fr-py-6w">
    <div
      class="fr-col-12 fr-col-lg-6 fr-mx-auto fr-p-4w border border-radius--md background--white"
    >
      <form>
        <fieldset
          class="fr-mb-0 fr-fieldset"
          aria-labelledby="login-fieldset-legend"
        >
          <legend class="fr-fieldset__legend" id="login-fieldset-legend">
            <h1 class="text--center">Se connecter avec son compte</h1>
          </legend>
          <p class="fr-text--md text-gris-light fr-mt-0 fr-mb-1w fr-ml-1w">
            Tous les champs sont obligatoires
          </p>
          <div class="fr-fieldset__element">
            <EmailInput label="Adresse électronique" name="email" />
          </div>
          <div class="fr-fieldset__element">
            <PasswordLoginInput />
            <!-- Mot de passe oublié ?-->
          </div>
          <div class="fr-fieldset__element fr-mt-2w">
            <button
              class="fr-btn fr-btn--lg display-block full-width"
              type="submit"
            >
              Se connecter
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import EmailInput from "@/components/dsfr/EmailInput.vue";
import PasswordLoginInput from "@/components/custom/PasswordLoginInput.vue";
</script>
