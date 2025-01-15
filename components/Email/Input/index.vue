<template>
  <div class="form-item">
    <label for="email" class="form-label">Email</label>
    <div class="flex w-full flex-col">
      <input id="email" type="email" placeholder="Entrez votre adresse électronique" class="input-class" />
      <p v-if="error && error.show">{{ error?.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    error?: {
      show: boolean;
      message: string;
    };
  }>();
</script>