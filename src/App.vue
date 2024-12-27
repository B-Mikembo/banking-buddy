<script setup lang="ts">
import Flow from './components/dashboard/Flow.vue';
</script>

<template>
  <div class="container">
    <Flow />
  </div>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component"/>
    </Transition>
  </RouterView>
</template>
<style scoped>
.container {
  position: absolute;
  color: white;
  height: 100%;
  width: 100%;
  background-color:black;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>