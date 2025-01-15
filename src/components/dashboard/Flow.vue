<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();
const route = useRoute();

function handleScroll(event: WheelEvent) {
  const routes = router.options.routes.map((r) => r.path);
  const currentIndex = routes.findIndex((path) => path === route.path);

  if (event.deltaY > 0 && currentIndex < routes.length - 1)
    router.push(routes[currentIndex + 1]);
  else if (event.deltaY < 0 && currentIndex > 0)
    router.push(routes[currentIndex - 1]);
}

onMounted(() => {
  window.addEventListener('wheel', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('wheel', handleScroll);
});
</script>

<template>
  <div class="flow">
    <h1>Flow</h1>
    <div class="pathsBox">
      <div
        class="paths"
        v-for="(r, key) in router.options.routes"
        :key="key"
      >
        <RouterLink
          active-class="active-link"
          exact-active-class="exact-active-link"
          :to="r.path"
        >
          <b>{{ r.name }}</b>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
.flow {
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 98%;
  text-align: center;
  border: 1px solid white;
}
.flow .pathsBox {
  position: relative;
  margin-top: 50%;
}
.flow .pathsBox .paths {
  font-size: x-large;
  position: relative;
  padding-top: 7%;
}
.flow .pathsBox .paths a {
  text-decoration: none;
  color: inherit;
}
.flow .pathsBox .paths .active-link {
  color: rgb(140, 24, 248);
  text-decoration: none;
}
</style>
