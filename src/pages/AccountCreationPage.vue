<template>
  <main class="flex min-h-screen w-full justify-between font-inter">
    <section class="flex-center size-full max-sm:px-6">
      <AccountCreationForm />
    </section>
    <div class="auth-asset">
      <div>
        <img src="/troll.jpg" alt="Auth image" width="500" height="500" class="rounded-l-xl object-contain" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import AccountCreationForm from '@/components/AccountCreationForm.vue';
</script>
