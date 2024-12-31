<template>
  <div class="" page-container>
    <main id="contenu" class="background--main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { unwatchFile } from "fs";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { userStore } from "./store/user";

const appName = "Noodle Bank";
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
    const isConnected = userStore().user.id.length > 0;
    const isFinishedOnboarding = userStore().user.onboardingDone;

    if (isPublic) {
      next();
    } else if (isConnected) {
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
