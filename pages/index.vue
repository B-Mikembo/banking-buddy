<script setup lang="ts">
  const user = await useGetLoggedInUser();
  const accounts = [
    {
      id: 'acc123',
      availableBalance: 1500.75,
      currentBalance: 2000.0,
      officialName: 'Personal Checking',
      mask: '1234',
      institutionId: 'inst001',
      name: 'Checking Account',
      type: 'depository',
      subtype: 'checking',
      supabaseItemId: 'item001',
      shareableId: 'share123',
    },
    {
      id: 'acc124',
      availableBalance: 5000.0,
      currentBalance: 5200.25,
      officialName: 'Savings Plus',
      mask: '5678',
      institutionId: 'inst002',
      name: 'Savings Account',
      type: 'depository',
      subtype: 'savings',
      supabaseItemId: 'item002',
      shareableId: 'share124',
    },
    {
      id: 'acc125',
      availableBalance: 300.5,
      currentBalance: 300.5,
      officialName: 'Business Credit',
      mask: '9012',
      institutionId: 'inst003',
      name: 'Credit Card',
      type: 'credit',
      subtype: 'credit card',
      supabaseItemId: 'item003',
      shareableId: 'share125',
    },
  ];

  const totalBanks = 2;
  const totalCurrentBalance = accounts
    .map(account => account.currentBalance)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
</script>

<template>
  <section>
    <div>
      <header>
        <HeaderBox
          type="greeting"
          title="Bienvenue"
          :user="user?.firstname"
          sub-text="Accèdez et gérez efficacement votre compte et vos transactions."
        />
        <TotalBalanceBox
          :accounts="accounts"
          :total-banks="accounts?.length"
          :total-current-balance="totalCurrentBalance"
        />
      </header>
    </div>
  </section>
</template>

<style scoped>
</style>
