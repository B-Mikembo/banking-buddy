<template>
  <section class="auth-form">
    <form @submit.prevent="login">
      <EmailInput v-model="email" label="Adresse électronique" name="email" />
    </form>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const email = ref<string>('');
  const hasLoginError = ref<boolean>(false);
  const loginErrorMessage = ref<string>('');
  const emailInput = ref<HTMLInputElement | undefined>();

  onMounted(() => {
    emailInput.value = document.querySelector('#email') as HTMLInputElement;
  });

  const login = async () => {
    hasLoginError.value = false;
    loginErrorMessage.value = '';
  };
</script>
