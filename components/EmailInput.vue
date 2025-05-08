<template>
  <div class="form-item">
    <label class="form-label" :for="name">
      {{ label }}
    </label>
    <div class="flex w-full flex-col">
      <input
        :id="name"
        :value="modelValue"
        @input="updateValue"
        class="input-class"
        :name="name"
        autocomplete="email"
        type="email"
        required
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    name: string;
    label: string;
    modelValue: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const updateValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    emit('update:modelValue', inputElement.value);
  };
</script>
