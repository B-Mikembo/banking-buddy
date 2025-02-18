<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { totalCurrentBalance } from "~/fakedata";

const props = defineProps<{
  series: { label: string; value: number; color?: string }[];
}>();

const getDefaultColor = (index: number) => {
  const colors = ['#0747b6', '#2265d8', '#2f91fa'];
  return colors[index % colors.length];
};

const total = computed(() =>
  props.series.reduce((acc, item) => acc + item.value, 0)
);
const normalizedSeries = computed(() =>
  props.series.map((item) => ({
    ...item,
    value: item.value,
    percentage: total.value ? (item.value / total.value) * 100 : 0,
    mouse: false
  }))
);

const isMouseIn = ref(false);
function changeMouse(item: any) {
  item.mouse = !item.mouse;
}

const isAnimated = ref(false);

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true;
  });
});
</script>

<template>
  <div class="w-full h-14 rounded-full shadow flex">
    <!-- The Stacked Bar -->
    <div class="w-full h-full bg-gray-200 rounded-e-full flex overflow-hidden self-center">
      <div
        v-for="(item, index) in normalizedSeries"
        :key="index"
        class="h-full text-xs text-white flex items-center justify-center transition-all duration-1000 ease-out"
        :style="{
          width: isAnimated ? item.percentage + '%' : '0%',
          backgroundColor: item.color || getDefaultColor(index),
          transitionDelay: `${index * 150}ms`
        }"
      >
        {{ item.value }}€
      </div>
    </div>
  </div>
</template>