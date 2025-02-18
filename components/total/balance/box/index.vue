<script setup lang="ts">
import { accounts } from '~/fakedata';
  const props = defineProps<{
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
    chartType: string;
    chartPercent?: boolean;
    chartStyle?: string;
  }>();
  const series = accounts.map(account => ({
  label: account.name,
  value: account.currentBalance,
}));
</script>

<template>
  <section class="total-balance">
    <Chart v-if="chartType !=='bar'" :accounts="accounts" :type="chartType" :percent="chartPercent" :chart-style="chartStyle"/>
    <div class="flex flex-col gap-6">
      <h2 class="header-2">{{ totalBanks }} Comptes Bancaires</h2>
      <div class="flex flex-col gap-2">
        <p class="total-balance-label">Total Solde Actuel</p>
        <div class="total-balance-amount flex-center gap-2">
          <AnimatedCounter :amount="totalCurrentBalance" />
        </div>
      </div>
    </div>
    <BarChart v-if="chartType === 'bar'" :series="series"/>
  </section>
</template>
