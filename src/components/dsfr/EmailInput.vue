<template>
  <div class="fr-input-group">
    <label class="fr-label" :class="classLabel" :for="name">
      {{ label }}
      <span class="text--normal fr-hint-text"
        >Format attendu : nom@domain.fr</span
      >
    </label>
    <input
      :id="name"
      :name="name"
      class="fr-input"
      autocomplete="on"
      type="email"
      :disabled="disable"
      required
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  label: string;
  classLabel?: string;
  disable?: boolean;
}>();
</script>
