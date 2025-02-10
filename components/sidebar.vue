<template>
  <section class="sidebar">
    <nav>
      <ul>
        <li v-for="item in sidebarLinks" :key="item.label">
          <NuxtLink :to="item.route">
            <p class="sidebar-label">{{ item.label }}</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <Footer />
  </section>
</template>

<script setup lang="ts">
  import { NuxtLink } from '#components';
  console.debug(useRouter().currentRoute);
  const sidebarLinks = [
    {
      route: '/',
      label: 'Pilotage mensuel',
    },
    {
      route: '/addbank',
      label: 'Revenus',
    },
  ];
</script>
