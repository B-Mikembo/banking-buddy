<script setup lang="ts">
  const props = defineProps<{
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
  }>();
</script>

<template>
  <section class="total-balance">
    <Chart :accounts="accounts" />
    <div class="flex flex-col gap-6">
      <h2 class="header-2">{{ totalBanks }} Comptes Bancaires</h2>
      <div class="flex flex-col gap-2">
        <p class="total-balance-label">Total Solde Actuel</p>
        <div class="total-balance-amount flex-center gap-2">
          <AnimatedCounter :amount="totalCurrentBalance" />
        </div>
      </div>
    </div>
  </section>
</template>
