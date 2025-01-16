<template>
  <div class="form-item">
    <label class="form-label">
      {{ label }}
    </label>
    <div class="flex w-full flex-col">
      <input :placeholder="placeholder" class="input-class" :type="name === 'password' ? 'password' : 'text'" />
      <p v-if="errorMessage" class="form-message mt-2">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
    label: string;
    placeholder: string;
    errorMessage?: string;
  }>();
</script>
