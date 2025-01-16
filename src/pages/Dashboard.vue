<script setup lang="ts">
import Charts from '../components/dashboard/Charts.vue';
import User from '../components/dashboard/User.vue';
</script>

<template>
  <div class="dashboard-container">
    <Charts />
    <User/>
  </div>
</template>

<style scoped>
.dashboard-container {
  position: relative;
  display: flex;
  flex-direction: row;
  color: white;
  margin-left: auto;
  height: 100%;
  width: 75%;
}
</style>