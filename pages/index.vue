<script setup lang="ts">
  definePageMeta({
    middleware: ['auth'],
  });

  async function logOut() {
    try {
      const client = useSupabaseClient();
      const { error } = await client.auth.signOut();
      if (error) throw error;
      useRouter().push('/auth/sign-in');
    } catch (error) {
      console.error(error);
    }
  }
</script>

<template>
  <nav>
    <h3>Hello, Noodle Bank</h3>
    <button class="form-btn" @click="logOut">Log out</button>
  </nav>
</template>
