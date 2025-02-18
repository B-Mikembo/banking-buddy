<script setup lang="ts">
import { accounts, totalCurrentBalance } from '~/fakedata';
const user = await useGetLoggedInUser();
</script>
<template>
  <section>
    <HeaderBox type="greeting" title="Bienvenue" sub-text="Accédez et gérez efficacement votre compte et vos transactions." :user="user.firstname" />
    <TotalBalanceBox  :accounts="accounts" :total-banks="accounts.length" :total-current-balance="totalCurrentBalance" chart-type="donut" />
  </section>
</template>
