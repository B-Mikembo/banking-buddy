<template>
  <div class="form-item">
    <label class="form-label" for="password">Mot de passe</label>
    <div class="flex w-full flex-col">
      <input
        class="input-class"
        aria-describedby="password-input-messages"
        aria-required="true"
        name="password"
        autocomplete="new-password"
        id="password"
        type="password"
        :required="required"
        :value="modelValue"
        @input="updateValue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      modelValue: string;
      autocompleteValue: 'new-password' | 'current-password';
      required?: boolean;
    }>(),
    { autocompleteValue: 'current-password' }
  );

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const updateValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;

    emit('update:modelValue', inputElement.value);
  };
</script>
