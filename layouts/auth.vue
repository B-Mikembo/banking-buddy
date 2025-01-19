<template>
  <html lang="fr">
    <body>
      <main class="flex min-h-screen w-full justify-between font-inter">
        <slot />
        <div class="auth-asset">
          <div>
            <img src="/troll.jpg" alt="Auth image" width="500" height="500" class="rounded-l-xl object-contain" />
          </div>
        </div>
      </main>
    </body>
  </html>
</template>
