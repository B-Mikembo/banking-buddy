<script setup lang="ts">
import Flow from './components/dashboard/Flow.vue';
</script>

<template>
  <Flow />
  <RouterView v-slot="{ Component }">
    <Transition name="slide">
      <component :is="Component"/>
    </Transition>
  </RouterView>
</template>
<style scoped>
.slide-enter-active {
  transition: transform 0.7s ease, opacity 0.7s ease;
}
.slide-enter-from {
  transform: translateY(+100%);
  opacity: 0;
}
/* Slide-out to the top */
.slide-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
