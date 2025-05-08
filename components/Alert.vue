<template>
  <div role="alert">
    <div class="flex items-center">
      <h3 class="text-lg font-medium">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    message: string;
    type: 'success' | 'error' | 'info';
    onClose?: () => void;
  }>();
</script>
