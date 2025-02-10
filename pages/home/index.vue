<script setup lang="ts">
import { pages } from '~/pages-config/storage';
import { PageManager } from '~/pages-config/page-manager';
import { homePage } from '~/pages-config/home/index';
const user = await useGetLoggedInUser();

pages.addPage(new PageManager(homePage(user), "home"));
const home = pages.getPageByName("home");
</script>
<template>
  <section>
        <component
          v-for="section in home?.getSections()"
          :is="section.component"
          :key="section.id"
          v-bind="section.props"
        />
  </section>
</template>
