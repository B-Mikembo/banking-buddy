<template>
  <div>
    <label class="label form-label text-sm" :for="name">
      {{ label }}
    </label>
    <div class="flex w-full flex-col">
      <input
        class="input-class"
        :placeholder="placeholder"
        :id="name"
        :name="name"
        :required="required"
        :maxlength="maxlength"
        :autofocus="autofocus"
      />
    </div>
    <p v-if="error && error.show" id="text-input-error-desc-error" class="text-sm font-medium text-destructive">
      {{ error.message }}
    </p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    error?: {
      message: string;
      show: boolean;
    };
    maxlength?: number;
    autofocus?: boolean;
  }>();
</script>
