<template>
  <div v-if="firstConnection">
    <hr />
    <h2>Première visite</h2>
    <router-link :to="{ name: AccountRouteName.ACCOUNT_CREATION }">
      Créer un compte
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { AccountRouteName } from "@/router/account/routeAccountName";

withDefaults(defineProps<{ firstConnection?: boolean }>(), {
  firstConnection: true,
});
</script>
