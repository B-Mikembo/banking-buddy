<template>
    <main class="flex min-h-screen w-full justify-between font-inter">
        <section class="flex-center size-full max-sm:px-6 bg-zinc-300">
            <section>
                <header class="flex flex-col gap-5 md:gap-8">
                    <h1 class="text-26 font-bold text-black-1">Noodle Bank</h1>
                    <div class="flex flex-col gap-1 md:gap-3">
                        <h1 class="text-24 lg:text-36 font-semibold text-gray-900">
                            S'inscrire
                            <p class="text-16 font-normal text-gray-600">Entrez vos informations</p>
                        </h1>
                    </div>
                </header>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
import EmailInput from '@/components/dsfr/EmailInput.vue';
import PasswordInput from '@/components/custom/PasswordInput.vue';
import TextInput from '@/components/dsfr/TextInput.vue';
</script>