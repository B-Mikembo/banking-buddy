<template>
  <div class="form-item">
    <label :for="name" class="form-label">{{ label }}</label>
    <div class="flex w-full flex-col">
      <input type="text" :placeholder="placeholder" class="input-class"/>
      <p v-if="error && error.show">{{ error.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
    label: string;
    placeholder: string;
    error?: {
        show: boolean;
        message: string;
    }
  }>();
</script>
