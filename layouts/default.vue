<template>
  <html lang="fr">
    <body>
      <main class="flex h-screen w-full font-inter">
        <Sidebar v-if="useSupabaseSession().value !== null"/>
        <div class="flex size-full flex-col">
          <div class="root-layout">
            <img src="/vite.svg" width="30" height="30" alt="logo" />
          </div>
          <slot />
        </div>
      </main>
    </body>
  </html>
</template>

