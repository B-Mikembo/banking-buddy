<script setup lang="ts">
  const props = defineProps<{
    type: 'title' | 'greeting';
    title: string;
    subText: string;
    user?: string;
  }>();
</script>

<template>
  <div class="header-box">
    <h1 class="header-box-title">
      {{ title }}
      <span v-if="type === 'greeting'" class="text-bankGradient">&nbsp;{{ user }}</span>
    </h1>
    <p class="header-box-subtext">{{ subText }}</p>
  </div>
</template>
