<script setup lang="ts">
  import { activeFundPercentage, passiveFundPercentage, totalCurrentBalance } from '~/fakedata';

  const props = defineProps<{
    accounts: Account[];
    type: string;
    percent?: boolean;
    chartStyle?: string;
  }>();
  const accounts = props.accounts;
  const accountNames = accounts.map(account => account.name);
  const funds: Record<string, number> = {
    Passive: passiveFundPercentage,
    Active: activeFundPercentage,
    Other: (100 - (passiveFundPercentage + activeFundPercentage)),
  };
  const balances = accounts.map(account => account.currentBalance);
  const labels = props.percent ? Object.keys(funds) : accountNames;

  const options = {
    dataLabels: {
      enabled: props.percent
    },
    labels: labels,
    colors: ['#0747b6', '#2265d8', '#2f91fa'],
    legend: {
      show: props.percent,
      position: "bottom"
    },
  };
</script>

<template>
  <apexchart :class="chartStyle" :type="type" :options="options" :series="percent ? Object.values(funds) : balances"></apexchart>
</template>
