<script lang="ts">
    export default {
    data() {
    return {
      links: [
        { to: "/", label: "Pilotage mensuel", icon: "car"},
        { to: "/capacity", label: "Revenus", icon: "capacity"},
        { to: "/investments", label: "Investissements", icon: "investments"},
        { to: "/savings", label: "Épargnes", icon: "savings"},
        { to: "/must", label: "Dépenses essentielles", icon: "home"},
        { to: "/hobbies", label: "Loisirs", icon: "hobbies"},
      ],
    };
  },
};
</script>
<template>
    <nav class="self-center">
        <ul class="text-xl truncate font-bold text-gray-900 space-y-2">
            <li v-for="link in links" :key="link.to">
                <NuxtLink
                :to="link.to"
                class="flex py-4 border-2 border-transparent rounded hover:border-blue-500 transition-all duration-300"
                active-class="bg-blue-500 text-white rounded transition-all duration-300" exact> <Icon :name="`icon:${link.icon}`" class="content-center mx-3 text-3xl"/> {{ link.label }} </NuxtLink></li>
        </ul>
    </nav>
</template>