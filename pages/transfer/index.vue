<script setup lang="ts">
import { pages } from "~/config/assignPage";
import { ref, computed } from "vue";
import { transferPageSections } from "~/config/transfer/config";
import { PageManager } from "~/config/pages.config";

const formValues = ref({
  transferInfo: {},
  recipientDetails: {},
});

const requiredFields = [
  { key: "fromAccount", must: true, category: "transferInfo" },
  { key: "email", must: true, category: "recipientDetails" },
  { key: "accountNumber", must: true, category: "recipientDetails" },
  { key: "amount", must: true, category: "recipientDetails" },
];

const isFormComplete = computed(() => {
  return requiredFields.every((field) => {
    const value = formValues.value[field.category]?.[field.key];
    return field.must ? value && value.trim().length > 0 : true;
  });
});

function isValuesValid(): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const value = formValues.value.recipientDetails["amount"];
  let i: number = 0;
  if (/^\d+$/.test(value) && value > 0) i++;
  if (emailRegex.test(formValues.value.recipientDetails["email"])) i++;
  return i >= 2;
}

const submitForm = () => {
  console.log("Form Submitted:", formValues.value);

};
pages.addPage(new PageManager(transferPageSections(formValues.value.transferInfo, formValues.value.recipientDetails), "transfer"));
const transfer = pages.getPageByName("transfer");
</script>
<template>
  <section>
    <component
      v-for="section in transfer?.getSections()"
      :is="section.component"
      :key="section.id"
      v-bind="section.props"
    />
    <button
      @click="submitForm"
      :disabled="!isFormComplete && !isValuesValid()"
      :class="isFormComplete && isValuesValid() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'"
      class="w-full rounded text-white"
    >
      Soumettre le formulaire
    </button>
  </section>
</template>
