<template>
    <div class="fr-intput-group">
        <label class="fr-label" :for="name">
            {{ label }}
            <span v-if="description" class="fr-hint-text">{{ description }}</span>
        </label>
        <input class="fr-input" :id="name" :name="name" :required="required" :maxlength="maxlength"
            :autofocus="autofocus" />
        <p v-if="error && error.show" id="text-input-error-desc-error" class="fr-error-text">{{ error.message }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    label: string;
    description?: string;
    required?: boolean;
    error?: {
        message: string;
        show: boolean
    }
    maxlength?: number;
    autofocus?: boolean;
}>();

</script>