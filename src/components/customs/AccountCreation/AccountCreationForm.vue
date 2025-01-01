<template>
  <form aria-labelledby="identity-fieldset-legend" class="fr-mb-4w">
    <fieldset class="fr-fieldset fr-mb-0">
      <legend class="fr-fieldset__legend" id="identity-fieldset-legend">
        <h1 class="fr-h4 fr-mb-0">Créez votre compte</h1>
        <p class="fr-text--regular">
          Indiquez votre address e-mail et choisissez un mot de passe pour
          accéder au service
        </p>
      </legend>
      <p class="fr-text--md text--gris-light fr-mt-0 fr-mb-1w fr-ml-1w">
        Tous les champs sont obligatoires
      </p>
      <div class="fr-fieldset__element">
        <MailInput
          label="Adresse électronique"
          name="user-email"
          v-model="userAccountInput.email"
        />
      </div>
      <div class="fr-fieldset__element">
        <PasswordInput
          v-model="userAccountInput.password"
          @update:valid-password="onValidPasswordChanged"
          legend="Votre mot de passe doit contenir : "
          :required="true"
        />
      </div>
      <div class="fr-fieldset__element fr-mb-0 fr-mt-1w">
        <button
          class="fr-btn fr-btn--lg display-block full-width"
          type="submit"
        >
          S'incrire
        </button>
      </div>
    </fieldset>
  </form>
  <hr class="fr-pb-4w" />
  <router-link
    :to="{ name: CommonRouteName.AUTHENTICATION }"
    class="fr-btn fr-btn--lg fr-btn--tertiary-no-outline full-width flex-center"
  >
    J'ai déjà un compte
  </router-link>
</template>
<script setup lang="ts">
import { ref } from "vue";
import MailInput from "@/components/dsfr/MailInput.vue";
import { UserInput } from "@/domains/account/create-user-account.usecase";
import PasswordInput from "../PasswordInput.vue";
import { CommonRouteName } from "@/router";

let userAccountInput = ref<UserInput>({
  email: "",
  password: "",
});

let validForm = ref<boolean>(false);

function onValidPasswordChanged(isValidPassword: boolean) {
  validForm.value = isValidPassword;
}
</script>
