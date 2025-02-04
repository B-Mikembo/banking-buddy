<script setup lang="ts">
import { ref, watch } from 'vue';
import type { TransferFormField } from '~/config/transfer/config';

const props = defineProps<{
  title: string;
  subText: string;
  content: TransferFormField[];
}>();


const emit = defineEmits(['update:modelValue']);

const modelValue = ref<Record<string, string>>({});
const isOpen = ref(false);
let selectedBank: string = '';

const selectBank = (bank: string, key: string) => {
  modelValue.value[key] = bank;
  selectedBank = bank;
  isOpen.value = false;
};

watch(
  () => modelValue.value,
  (newValue) => {
    emit('update:modelValue', newValue);
  },
  { deep: true }
);
</script>

<template>
  <div class="form-box">
    <h1 class="form-box-title">{{ title }}</h1>
    <p class="form-box-subtext">{{ subText }}</p>
    <div>
      <div v-for="(field, index) in content" :key="index" class="field-box">
        <h2 class="field-subtitle">
          {{ field.subtitle }}
          <p class="field-description">{{ field.description }}</p>
        </h2>
        <div class="md:w-2/3">
          <div v-if="field.key === 'resource' || field.selectArray">
            <button
              @click="isOpen = !isOpen"
              class="relative shadow appearance-none border-2 rounded h-fit w-2/6 self-center px-4 py-2 focus:outline-none focus:ring-blue-700 focus:border-blue-700 flex justify-between items-center"
              :class="modelValue[field.key] ? 'bg-green-300' : 'border-gray-200'"
            >
              <span>
                {{ modelValue[field.key]?.length > 0 ? modelValue[field.key] : field.button }}
              </span>
              <span :class="isOpen ? 'rotate-180' : ''" class="transition-transform absolute right-4 text-sm">▲</span>
            </button>
            <ul
              v-show="isOpen"
              class="bottom-full w-full bg-white border border-gray-200 rounded shadow-lg z-10"
            >
              <li
                v-for="(value, id) in field.selectArray"
                :key="id"
                @click="selectBank(value, field.key)"
                class="hover:bg-blue-100 cursor-pointer"
              >
                {{ value }}
              </li>
            </ul>
          </div>
          <!-- Note -->
          <textarea
            v-if="field.key === 'note'"
            v-model="modelValue[field.key]"
            class="shadow appearance-none border-2 rounded border-gray-200 h-20 w-2/6 self-center focus:outline-none focus:ring-blue-700 focus:border-blue-700"
            placeholder="Ajouter une note (Optionnel)"
          />
          <!-- Email -->
          <input
            v-if="field.key === 'email'"
            v-model="modelValue[field.key]"
            type="email"
            class="shadow appearance-none border-2 rounded border-gray-200 h-fit w-2/6 self-center focus:outline-none focus:ring-blue-700 focus:border-blue-700"
            placeholder="Entrez votre email"
          />

          <!-- Account Number -->
          <input
            v-if="field.key === 'accountNumber'"
            v-model="modelValue[field.key]"
            type="text"
            class="shadow appearance-none border-2 rounded border-gray-200 h-fit w-2/6 self-center focus:outline-none focus:ring-blue-700 focus:border-blue-700"
            placeholder="Numéro de compte"
          />

          <!-- Amount -->
          <input
            v-if="field.key === 'amount'"
            v-model="modelValue[field.key]"
            type="text"
            class="shadow appearance-none border-2 rounded border-gray-200 h-fit w-2/6 self-center focus:outline-none focus:ring-blue-700 focus:border-blue-700"
            placeholder="Entrez un montant"
          />
        </div>
      </div>
    </div>
  </div>
</template>
