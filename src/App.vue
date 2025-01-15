<template>
  <div class="page-container">
    <main id="contenu" class="background--main">
      <Flow />
      <RouterView v-slot="{ Component }">
        <Transition name="slide">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
  import Flow from './components/dashboard/Flow.vue';
  import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
  import router from '@/router';

  const appName = '- Noodle Bank';
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const { title, isPublic } = to.meta;
    if (title) {
      document.title = `${title as string} ${appName}`;
    }
    if (isPublic) {
      next();
    } else {
      next({ name: 'authentication' });
      sessionStorage.setItem('requestedRoute', to.fullPath);
    }
  });
</script>

<style scoped>
  .page-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  .slide-enter-active {
    transition:
      transform 0.7s ease,
      opacity 0.7s ease;
  }
  .slide-enter-from {
    transform: translateY(+100%);
    opacity: 0;
  }
  /* Slide-out to the top */
  .slide-leave-active {
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }
  .slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
</style>
