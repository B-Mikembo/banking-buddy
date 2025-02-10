<script setup lang="ts">
const props = defineProps<{
  headers: string[],
  values: Record<string, string[]>
}>();
const rows = Object.entries(props.values);
</script>

<template>
  <table class="table-auto border-collapse border border-gray-300 w-full">
    <thead>
      <tr class="bg-gray-200 flex-row">
        <th v-for="(header, index) in headers" :key="index" class="border px-4 py-2">
          {{ header }}
        </th>
        <button>
          add category
        </button>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[key, row] in rows" :key="key">
        <td v-for="(value, index) in row" :key="index" class="border px-4 py-2">
          {{ value }}
        </td>
      </tr>
      <button>
        add row
      </button>
    </tbody>
  </table>
</template>

