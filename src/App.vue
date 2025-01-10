<template>
  <div class="page-container">
    <main id="contenu" class="background--main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import router from "@/router";

const appName = "- Noodle Bank";
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const { title, isPublic } = to.meta;
    if (title) {
      document.title = `${title as string} ${appName}`;
    }
    if (isPublic) {
      next();
    } else {
      next({ name: "authentication" });
      sessionStorage.setItem("requestedRoute", to.fullPath);
    }
  }
);
</script>

<style scoped>
.page-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
