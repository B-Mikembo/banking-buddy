<script setup lang="ts">
  import CountUp from 'vue-countup-v3';
  defineProps<{
    amount: number;
  }>();
</script>

<template>
  <div class="w-full">
    <count-up :decimal-places="2" :end-val="amount">
      <template #suffix>
        €
      </template>
    </count-up>
  </div>
</template>
