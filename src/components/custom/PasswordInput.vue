<template>
    <div class="fr-password">
        <label class="fr-label" for="password">Mot de passe</label>
        <div class="fr-input-wrap">
            <input class="fr-password__input fr-input" aria-describedby="password-input-messages" aria-required="true"
                name="password" autocomplete="new-password" id="password" type="password" />
        </div>
    </div>
</template>

<script setup lang="ts">
import '@gouvfr/dsfr/dist/component/password/password.min.css';
</script>