<template>
  <div class="fr-password">
    <label class="fr-label" for="password">Mot de passe</label>
    <div class="fr-input-wrap">
      <input
        class="fr-password__input fr-input"
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
    <div
      class="fr-messages-group"
      id="password-input-messages"
      aria-live="assertive"
    >
      <p class="fr-message" id="password-input-message">{{ legend }}</p>
      <p
        :class="
          atLeastTwelveCharacters(modelValue)
            ? 'fr-message--valid'
            : 'fr-message--info'
        "
        id="password-input-message-info"
      >
        <span class="fr-sr-only">
          {{
            atLeastTwelveCharacters(modelValue)
              ? "critère valide"
              : "critère non valide"
          }}
        </span>
        12 caractères minimum
      </p>
      <p
        :class="
          atLeastOneUpperCaseAndLowerCase(modelValue)
            ? 'fr-message--valid'
            : 'fr-message--info'
        "
        id="password-input-message-info-1"
      >
        <span class="fr-sr-only">
          {{
            atLeastOneUpperCaseAndLowerCase(modelValue)
              ? "critère valide"
              : "critère non valide"
          }}
        </span>
        Au moins 1 majuscule et 1 minuscule
      </p>
      <p
        :class="
          atLeastOneSpecialCharacter(modelValue)
            ? 'fr-message--valid'
            : 'fr-message--info'
        "
        id="password-input-message-info-2"
      >
        <span class="fr-sr-only">
          {{
            atLeastOneSpecialCharacter(modelValue)
              ? "critère valide"
              : "critère non valide"
          }}
        </span>
        1 caractère spécial minimum
      </p>
      <p
        :class="
          atLeastOneNumber(modelValue)
            ? 'fr-message--valid'
            : 'fr-message--info'
        "
        id="password-input-message-info-3"
      >
        <span class="fr-sr-only">
          {{
            atLeastOneNumber(modelValue)
              ? "critère valide"
              : "critère non valide"
          }}
        </span>
        1 un chiffre minimum
      </p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
      <input
        aria-label="Show password"
        id="password-show"
        type="checkbox"
        aria-describedby="show-password-messages"
      />
      <label class="fr-password__checkbox fr-label" for="password-show">Afficher</label>
      <div class="fr-messages-group" id="password-show-messages" aria-live="assertive"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  legend: string;
  required?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:validPassword", value: boolean): void;
}>();

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;

  emit("update:modelValue", inputElement.value);
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
