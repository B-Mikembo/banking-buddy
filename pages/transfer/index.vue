<script setup lang="ts">
import { ref, computed } from 'vue';

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

const accountDict = accounts.reduce((acc, account) => {
  acc[account.id] = account.officialName;
  return acc;
}, {} as Record<string, string>);

const formValues = ref({
  transferInfo: {},
  recipientDetails: {},
});

const requiredFields = [
  { key: 'fromAccount', must: true, category: 'transferInfo' },
  { key: 'email', must: true, category: 'recipientDetails' },
  { key: 'accountNumber', must: true, category: 'recipientDetails' },
  { key: 'amount', must: true, category: 'recipientDetails' },
];

const isFormValid = computed(() => {
  return requiredFields.every((field) => {
    const value = formValues.value[field.category]?.[field.key];
    return field.must ? value && value.trim().length > 0 : true;
  });
});

const submitForm = () => {
  console.log('Form Submitted:', formValues.value);
};
</script>

<template>
  <section>
    <header>
      <HeaderBox
        type="title"
        title="Transfert d'argent"
        sub-text="Veuillez fournir les informations nécessaires et en lien avec votre transfert. Tous les champs contenant une '*' sont obligatoires."
      />
    </header>
    <body>
      <div>
        <TransferForm
          title="Informations du transfert"
          sub-text="Entrez les informations du formulaire"
          :content="[
            {
              key: 'fromAccount',
              selectArray: accountDict,
              subtitle: 'Sélectionner votre ressource *',
              description: 'Choisissez depuis quel compte souhaitez-vous effectuer le transfert',
              must: true,
            },
            {
              key: 'note',
              subtitle: 'Motif du transfert (Optionnel)',
              description: 'Laissez un commentaire',
              must: false,
            },
          ]"
          v-model="formValues.transferInfo"
        />
        <TransferForm
          title="Détails du compte bancaire"
          sub-text="Entrez les informations liées au destinataire"
          :content="[
            {
              key: 'email',
              subtitle: 'Adresse email *',
              description: 'Entrez ladresse email du destinataire',
              must: true,
            },
            {
              key: 'accountNumber',
              subtitle: 'Numéro de compte *',
              description: 'Entrez le numéro de compte du destinataire',
              must: true,
            },
            {
              key: 'amount',
              subtitle: 'Montant *',
              description: 'Entrez le montant à transférer',
              must: true,
            },
          ]"
          v-model="formValues.recipientDetails"
        />
        <button
          @click="submitForm"
          :disabled="!isFormValid"
          :class="isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'"
          class="w-full rounded text-white"
        >
          Soumettre le formulaire
        </button>
      </div>
    </body>
  </section>
</template>
