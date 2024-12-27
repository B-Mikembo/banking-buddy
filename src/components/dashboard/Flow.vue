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
  position: relative;
  border: 2px solid white;
  width: 25%;
  display: flex;
  flex-direction: column;
}

.flow .pathsBox {
  position: relative;
  margin-top: 50%;
  border: 2px solid white;
}

.flow .pathsBox .paths {
  font-size:x-large;
  position: relative;
  padding-top: 5%;
  border: 1px solid black;
}
</style>
