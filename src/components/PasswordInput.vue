<template>
    <div class="form-item">
      <label for="password" class="form-label">Mot de passe</label>
      <div class="flex w-full flex-col">
        <input id="password" type="password" autocomplete="new-password" placeholder="Entrez votre mot de passe" class="input-class"/>
        <p v-if="error && error.show">{{ error.message }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    defineProps<{
      error?: {
          show: boolean;
          message: string;
      }
    }>();
  </script>
  