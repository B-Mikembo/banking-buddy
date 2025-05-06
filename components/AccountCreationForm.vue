<template>
  <section class="auth-form">
    <header class="flex flex-col gap-5 md:gap-8">
      <NuxtLink to="/" class="cursor-pointer flex items-center gap-1">
        <img src="/vite.svg" alt="Noodle Bank Logo" width="34" height="34" />
        <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
      </NuxtLink>
      <div class="flex flex-col gap-1 md:gap-3">
        <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
          S'inscrire
          <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
        </h1>
      </div>
    </header>
    <form @submit.prevent="performCreateUserAccount" class="space-y-8">
      <div
        v-if="hasAccountCreationError"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span class="block sm:inline">{{ accountCreationErrorMessage }}</span>
      </div>
      <EmailInput v-model="userAccountInput.email" label="Adresse électronique" name="user-email" />
      <PasswordInput autocomplete-value="new-password" v-model="userAccountInput.password" :required="true" />
      <div class="flex flex-col gap-4">
        <button type="submit" class="form-btn">S'inscrire</button>
      </div>
    </form>
    <footer class="flex justify-center gap-1">
      <p class="text-14 font-normal text-gray-600">Déjà un compte ?</p>
      <NuxtLink :to="{ name: CommonRouteName.SIGN_IN }" class="form-link"> J'ai déjà un compte </NuxtLink>
    </footer>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { CreateAccountPresenterImpl } from '~/domains/account/adapters/createAccountPresenterImpl';
  import { UserAccountRepositoryImpl } from '~/domains/account/adapters/userAccount.repository.impl';
  import { CreateUserAccountUsecase, type UserInput } from '~/domains/account/create-user-account.usecase';
  import { CommonRouteName } from '~/router';

  const router = useRouter();
  let userAccountInput = ref<UserInput>({
    firstName: '',
    email: '',
    password: '',
  });
  let hasAccountCreationError = ref<boolean>();
  let accountCreationErrorMessage = ref<string>('');

  const passwordInput = ref<HTMLInputElement | undefined>();

  onMounted(() => {
    passwordInput.value = document.querySelector('#password') as HTMLInputElement;
  });

  const performCreateUserAccount = async () => {
    hasAccountCreationError.value = false;
    accountCreationErrorMessage.value = '';

    const createAccountUsecase = new CreateUserAccountUsecase(new UserAccountRepositoryImpl());

    await createAccountUsecase
      .execute(
        new CreateAccountPresenterImpl(viewModel => {
          router.push({ name: viewModel.route });
        }),
        { ...userAccountInput.value }
      )
      .catch(reason => {
        accountCreationErrorMessage.value = reason.message;
        hasAccountCreationError.value = true;
        if (passwordInput.value) {
          passwordInput.value.focus();
        }
      });
  };
</script>
