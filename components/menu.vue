<script lang="ts">
    export default {
    data() {
    return {
      links: [
        { to: "/", label: "Home", icon: "home"},
        { to: "/banks", label: "Mes Banques", icon: "bank"},
        { to: "/transactions", label: "Historique des transactions", icon: "transactions"},
        { to: "/transfer", label: "Transfert", icon: "transfer"},
        { to: "/addbank", label: "Connecter une banque", icon: "addbank"},
      ],
    };
  },
};
</script>
<template>
    <nav class=" mt-14 self-center">
        <ul class="text-xl truncate font-bold text-gray-900 space-y-2">
            <li v-for="link in links" :key="link.to">
                <NuxtLink
                :to="link.to"
                class="flex py-4 border-2 border-transparent rounded hover:border-blue-500 transition-all duration-300"
                active-class="bg-blue-500 text-white rounded transition-all duration-300" exact> <nuxt-icon :name="link.icon" class="content-center mx-3 text-3xl"/> {{ link.label }} </NuxtLink></li>
        </ul>
    </nav>
</template>