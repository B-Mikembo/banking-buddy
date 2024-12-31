<template>
  <div>
    <label :for="name">
      {{ label }}
    </label>
    <input
      :id="name"
      :value="modelValue"
      @input="udpateValue"
      :name="name"
      autocomplete="on"
      type="email"
      :disabled="disable"
      required
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  label: string;
  modelValue: string;
  disable?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const udpateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  emit('update:modelValue', inputElement.value);
}
</script>