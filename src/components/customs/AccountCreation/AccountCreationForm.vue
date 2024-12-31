<template>
  <form>
    <fieldset>
      <legend>
        <h1>Créez votre compte</h1>
        <p>
          Indiquez votre address e-mail et choisissez un mot de passe pour
          accéder au service
        </p>
      </legend>
      <p>Tous les champs sont obligatoires</p>
      <div>
        <InputMail label="Adresse électronique" name="user-email" v-model="userAccountInput.email"/>
      </div>
      <div>
        <PasswordInput />
      </div>
    </fieldset>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";
import InputMail from "@/components/ui/InputMail.vue";
import { UserInput } from "@/domains/account/create-user-account.usecase";
import PasswordInput from "../PasswordInput.vue";

let userAccountInput = ref<UserInput>({
  email: "",
  password: "",
});
</script>
