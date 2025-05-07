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
    <div id="password-input-messages" aria-live="assertive">
      <p class="text-12 text-black">{{ legende }}</p>
      <p
        :class="atLeastTwelveCharacters(modelValue) ? 'message--valid' : 'message--info'"
        id="password-input-message-info"
      >
        <span>
          {{ atLeastTwelveCharacters(modelValue) ? 'critère valide :' : 'critère non valide :' }}
        </span>
        12 caractères minimum
      </p>
      <p
        :class="atLeastOneSpecialCharacter(modelValue) ? 'message--valid' : 'message--info'"
        id="password-input-message-info-2"
      >
        <span>
          {{ atLeastOneSpecialCharacter(modelValue) ? 'critère valide :' : 'critère non valide :' }}
        </span>
        1 caractère spécial minimum
      </p>
      <p
        :class="atLeastOneDigit(modelValue) ? 'message--valid' : 'message--info'"
        id="password-input-message-info-3"
      >
        <span>
          {{ atLeastOneDigit(modelValue) ? 'critère valide :' : 'critère non valide :' }}
        </span>
        1 chiffre minimum
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      modelValue: string;
      legende: string;
      autocompleteValue: 'new-password' | 'current-password';
      required?: boolean;
    }>(),
    { autocompleteValue: 'current-password' }
  );

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'update:validPassword', value: boolean): void;
  }>();

  const updateValue = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;

    emit('update:modelValue', inputElement.value);
    emit('update:validPassword', checkValidPassword(inputElement.value.toString()));
  };

  function atLeastOneSpecialCharacter(password: string | null): boolean {
    const regexp = new RegExp(/([(&~»#)‘\-_`{[|`_\\^@)\]=}+%*$£¨!§/:;.?¿'"!,§éèêëàâä»])+/, 'g');
    return password ? regexp.test(password) : false;
  }

  function atLeastTwelveCharacters(password: string | null): boolean {
    const regexp = new RegExp(/(?=.{12,}$)/, 'g');
    return password ? regexp.test(password) : false;
  }

  function atLeastOneDigit(password: string | null): boolean {
    const regexp = new RegExp(/([0-9])+/, 'g');
    return password ? regexp.test(password) : false;
  }

  function atLeastOneUpperCaseAndOneLowerCase(password: string | null): boolean {
    if (password === null) return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    return hasUpperCase && hasLowerCase;
  }

  function checkValidPassword(password: string) {
    return atLeastOneSpecialCharacter(password) && atLeastTwelveCharacters(password) && atLeastOneDigit(password);
  }
</script>
