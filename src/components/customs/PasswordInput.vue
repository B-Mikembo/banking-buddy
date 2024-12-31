<template>
  <div>
    <label for="password">Mot de passe</label>
    <div>
      <input
        aria-describedby="password-input-messages"
        aria-required="true"
        name="password"
        autocomplete="new-password"
        id="password"
        type="password"
        :required="required"
        :value="valueModel"
        @input="updateValue"
      />
    </div>
    <div id="password-input-messages" aria-live="assertive">
      <p id="password-intput-message">{{ legend }}</p>
      <p id="password-intpu-message-info">
        <span>
          {{ atLeastTwelveCharacters(valueModel) ? 'critère valide' : 'critère non valide' }}
        </span>
        12 caractères minimum
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  valueModel: string;
  legend: string;
  required?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:valueModel", value: string): void;
  (e: "update:validPassword", value: boolean): void;
}>();

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  emit("update:valueModel", inputElement.value);
  emit(
    "update:validPassword",
    checkValidPassword(inputElement.value.toString())
  );
};

function atLeastOneSpecialCharacter(password: string | null): boolean {
  const regexp = new RegExp(
    /([(&~»#)‘\-_`{[|`_\\^@)\]=}+%*$£¨!§/:;.?¿'"!,§éèêëàâä»])+/,
    "g"
  );
  return password ? regexp.test(password) : false;
}

function atLeastTwelveCharacters(password: string | null): boolean {
  const regexp = new RegExp(/(?=.{12,}$)/, "g");
  return password ? regexp.test(password) : false;
}

function atLeastOneNumber(password: string | null): boolean {
  const regexp = new RegExp(/([0-9])+/, "g");
  return password ? regexp.test(password) : false;
}

function atLeastOneUpperCaseAndLowerCase(password: string | null): boolean {
  if (password === null) return false;
  const containsOneUpperCase = /[A-Z]/.test(password);
  const containsOneLowerCase = /[a-z]/.test(password);
  return containsOneUpperCase && containsOneLowerCase;
}

function checkValidPassword(password: string) {
  return (
    atLeastOneSpecialCharacter(password) &&
    atLeastTwelveCharacters(password) &&
    atLeastOneNumber(password)
  );
}
</script>
