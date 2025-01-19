<script setup lang="ts">
  import apexchartsClient from '~/plugins/apexcharts.client';
  import { labels } from '~/src/domains/dashboard/charts/Charts';

  const props = defineProps<{
    accounts: Account[];
  }>();
  const accounts = props.accounts;

  const accountNames = accounts.map(account => account.name);
  const balances = accounts.map(account => account.currentBalance);

  const options = {
    dataLabels: {
      enabled: false
    },
    labels: accountNames,
    colors: ['#0747b6', '#2265d8', '#2f91fa'],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
        },
      },
    },
  };
</script>

<template>
  <apexchart class="total-balance-chart" type="donut" :options="options" :series="balances"></apexchart>
</template>
