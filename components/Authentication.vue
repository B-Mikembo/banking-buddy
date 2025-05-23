<template>
  <section class="auth-form">
    <form @submit.prevent="login" class="space-y-8">
      <div
        v-if="hasLoginError"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span class="block sm:inline">{{ loginErrorMessage }}</span>
      </div>
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
  import { AuthenticationResultPresenterImpl } from '~/domains/authentication/adapters/authenticationResultPresenterImpl';
  import { SessionRepositoryStore } from '~/domains/authentication/adapters/session.repository.store';
  import { UserRepositoryAxios } from '~/domains/authentication/adapters/user.repository.axios';
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

    const usecase = new AuthenticateUserUsecase(new UserRepositoryAxios(), new SessionRepositoryStore());

    usecase
      .execute(
        email.value,
        password.value,
        new AuthenticationResultPresenterImpl(route => {
          const requestedRoute = sessionStorage.getItem('requestedRoute');
          sessionStorage.removeItem('requestedRoute');
          useRouter().push(requestedRoute || route);
        })
      )
      .catch(reason => {
        loginErrorMessage.value = reason.data.message;
        hasLoginError.value = true;
      });
  };
</script>
