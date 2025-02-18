<script setup lang="ts">
import { ref, computed } from "vue";

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
</script>
<template>
  <section>
  </section>
</template>
