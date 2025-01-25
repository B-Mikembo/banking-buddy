<template>
  <section class="auth-form">
    <header class="flex flex-col gap-5 md:gap-8">
      <NuxtLink to="/" class="cursor-pointer flex items-center gap-1">
        <img src="/vite.svg" alt="Noodle Bank Logo" width="34" height="34" />
        <h1 class="text-26 font-ibm-plex-serif font-bold text-black-1">Noodle Bank</h1>
      </NuxtLink>
      <div class="flex flex-col gap-1 md:gap-3">
        <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
          {{ type === 'sign-in' ? 'Se connecter' : "S'inscrire" }}
          <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
        </h1>
      </div>
    </header>
    <form @submit.prevent="onSubmit" class="space-y-8">
      <div v-if="type === 'sign-up'">
        <div class="flex gap-4">
          <CustomInput
            v-model="form.firstname"
            name="firstname"
            label="Prénom"
            placeholder="Entrez votre prénom"
            :error-message="fieldErrors.firstname"
          />
          <CustomInput
            v-model="form.lastname"
            name="lastname"
            label="Nom"
            placeholder="Entrez votre nom"
            :error-message="fieldErrors.lastname"
          />
        </div>
      </div>
      <CustomInput
        v-model="form.email"
        name="email"
        label="Email"
        placeholder="Entrez votre adresse électronique"
        :error-message="fieldErrors.email"
      />
      <CustomInput
        v-model="form.password"
        name="password"
        label="Mot de passe"
        placeholder="Entrez votre mot de passe"
        :error-message="fieldErrors.password"
      />
      <div class="flex flex-col gap-4">
        <button type="submit" class="form-btn">
          {{ type === 'sign-in' ? 'Se connecter' : "S'inscrire" }}
        </button>
      </div>
    </form>
    <footer class="flex justify-center gap-1">
      <p class="text-14 font-normal text-gray-600">
        {{ type === 'sign-in' ? 'Pas de compte ?' : 'Déjà un compte ?' }}
      </p>
      <NuxtLink :to="type === 'sign-in' ? '/auth/sign-up' : '/auth/sign-in'" class="form-link">
        {{ type === 'sign-in' ? "S'inscrire" : 'Se connecter' }}
      </NuxtLink>
    </footer>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { z, ZodError } from 'zod';
  const user = useState();

  const props = defineProps<{
    type: string;
  }>();

  const form = ref({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const formSchema = z
    .object({
      firstname:
        props.type === 'sign-in'
          ? z.string().optional()
          : z.string().min(3, 'Le prénom doit contenir au moins 3 caractères'),
      lastname:
        props.type === 'sign-in'
          ? z.string().optional()
          : z.string().min(3, 'Le nom doit contenir au moins 3 caractères'),
      email: z.string().email("L'adresse électronique est invalide"),
      password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    })
    .strict();

  let fieldErrors = ref({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  async function onSubmit() {
    fieldErrors.value = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
    try {
      if (props.type === 'sign-up') {
        const userData = formSchema.parse(form.value) as SignUpParams;
        const newUser: { id: string; firstname: string; lastname: string; email: string } = await useSignUp({
          firstname: userData.firstname,
          lastname: userData.lastname,
          password: userData.password,
          email: userData.email,
        });
        user.value = newUser;
      }
      if (props.type === 'sign-in') {
        const userData = formSchema.parse(form.value);
        const response = await useSignIn({ email: userData.email, password: userData.password });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
        error.errors.forEach(e => {
          const fieldName = e.path[0];
          fieldErrors.value[fieldName] = e.message;
        });
      } else {
        console.log('Unexcepted error: ', error);
      }
    }
  }
</script>
