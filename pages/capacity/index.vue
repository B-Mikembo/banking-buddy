<script setup lang="ts">
import { ref } from "vue";
import { accounts, totalCurrentBalance } from "~/fakedata";
import { HeaderBox } from "#components";

const formValues = ref({
  capacityInfo: {},
  recipientDetails: {},
});

</script>
<template>
  <header>
    <HeaderBox type="title" title="Revenus" sub-text="" />
    <TotalBalanceBox :accounts="accounts" :total-banks="accounts.length" :total-current-balance="totalCurrentBalance" chart-type="bar"/>
  </header>
  <section class="flex flex-row w-full h-full">
    <TransferForm title="Revenus passifs" sub-text="Renseignez le montant de vos revenus passifs" :content="[{ key: 'amount', must: true }]" />
    <TransferForm title="Revenus actifs" sub-text="Renseignez le montant de vos revenus actifs" :content="[{ key: 'amount', must: true }]" />
    <Chart :accounts="accounts" type="pie" :percent="true" chart-style="flex items-center size-full max-w-[400px]"/>
  </section>
  
</template>
