<script setup lang="ts">
import Charts from '../components/dashboard/Charts.vue';
import User from '../components/dashboard/User.vue';
import Flow from '../components/dashboard/Flow.vue';
</script>

<template>
  <div class="container">
    <div class="box">
      <Flow />
      <Charts />
      <User/>
    </div>
  </div>
</template>

<style scoped>
.container .box {
  color: white;
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color:black;
  flex-direction: row;
  border: 2px solid white;
  text-align: center;
}
</style>