<template>
  <div class="fr-password" id="password-1138">
    <label class="fr-label" for="password">Mot de passe</label>
    <div class="fr-input-wrap">
      <input
        class="fr-password__input fr-input"
        aria-describedby="password-input-messages"
        aria_required="true"
        name="password"
        autocomplete="new-password"
        id="password"
        type="password"
      />
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
      <input
        aria-label="Afficher le mot de passe"
        id="password-show"
        type="checkbox"
        aria-describedby="password-show-messages"
      />
      <label class="fr-password__checkbox fr-label" for="password-show"
        >Afficher</label
      >
      <div class="fr-messages-group" id="password-show-messages" aria-live="assertive"></div>
    </div>
  </div>
</template>
