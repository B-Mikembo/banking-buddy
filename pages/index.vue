<script setup lang="ts">
import { pages } from '~/pages-config/storage';
import { PageManager } from '~/pages-config/page-manager';
import { homePage } from '~/pages-config/home/index.ts';
const user = await useGetLoggedInUser();

pages.addPage(new PageManager(homePage(user), "home"));
const home = pages.getPageByName("home");
</script>
<template>
  <section>
    <div>
      <header>
        <component
          v-for="section in home?.getSections()"
          :is="section.component"
          :key="section.id"
          v-bind="section.props"
        />
      </header>
    </div>
  </section>
</template>
