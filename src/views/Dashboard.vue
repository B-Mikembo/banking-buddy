<script setup lang="ts">
import Charts from '../components/dashboard/Charts.vue';
import User from '../components/dashboard/User.vue';
</script>

<template>
  <div class="t">
    <Charts />
    <User/>
  </div>
</template>

<style scoped>
.t {
  position: absolute;
  display: flex;
  flex-direction: row;
  color: white;
  margin-left: auto;
  height: 100%;
  width: 100%;
  background-color:black;
  border: 2px solid white;
}
</style>