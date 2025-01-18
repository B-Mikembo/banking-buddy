<script setup lang="ts">
  const user = useSupabaseUser();
  const handleLogout = async () => {
    await useSignOut();
  };
</script>

<template>
  <footer class="footer">
    <div class="footer-email">
      <p class="text-14 truncate font-normal text-gray-600">
        {{ user?.email }}
      </p>
    </div>
    <div class="footer-image" @click="handleLogout">
      <img src="/logout.svg" alt="noodle_bank" />
    </div>
  </footer>
</template>
