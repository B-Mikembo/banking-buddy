<script setup lang="ts">
import { useRouter } from 'vue-router';
const route = useRouter();
</script>
<template>
    <div class="flow">
        <h1>Flow</h1>
        <div class="pathsBox">
          <div class="paths" v-for="(route, key) in route.options.routes" :key="key"><RouterLink :to="route.path"><b>{{ route.name }}</b></RouterLink></div>
        </div>
      </div>
</template>
<style>
.flow {
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  text-align: center;
  border: 2px solid white;
}

.flow .pathsBox {
  position: relative;
  margin-top: 50%;
}

.flow .pathsBox .paths {
  font-size:x-large;
  position: relative;
  padding-top: 7%;
  border: 1px solid black;
}
</style>
