<template>
  <div class="form-item">
    <label class="form-label">
      {{ label }}
    </label>
    <div class="flex w-full flex-col">
      <input
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        class="input-class"
        :type="name === 'password' ? 'password' : 'text'"
      />
      <p v-if="errorMessage" class="form-message mt-2">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    modelValue: string;
    name: string;
    label: string;
    placeholder: string;
    errorMessage?: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const updateValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    emit('update:modelValue', inputElement.value);
  };
</script>
