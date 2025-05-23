<template>
  <section class="auth-form">
    <form @submit.prevent="login" class="space-y-8">
      <EmailInput v-model="email" label="Adresse électronique" name="email" />
      <LoginPasswordInput v-model="password" />
      <div class="flex flex-col gap-4">
        <button type="submit" class="form-btn">Se connecter</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { AuthenticateUserUsecase } from '~/domains/authentication/authenticateUser.usecase';

  const email = ref<string>('');
  const password = ref<string>('');
  const hasLoginError = ref<boolean>(false);
  const loginErrorMessage = ref<string>('');
  const emailInput = ref<HTMLInputElement | undefined>();

  onMounted(() => {
    emailInput.value = document.querySelector('#email') as HTMLInputElement;
  });

  const login = async () => {
    hasLoginError.value = false;
    loginErrorMessage.value = '';

    const usecase = new AuthenticateUserUsecase(new UserRepositoryAxios());
  };
</script>
