<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  initialProgress: {
    type: Number,
    default: 0,
  },
  budget: {
    type: Number,
    default: 100,
  },
  category: {
    type: String,
    default: '',
  },
});

const progress = ref(props.initialProgress);

const increaseProgress = () => {
  if (progress.value < props.budget) {
    progress.value += 50;
  }
};

const resetProgress = () => {
  progress.value = 0;
};
</script>

<template>
  <div class="test">
    <div class="progress-label">
      <h2>{{ category }}
        <b>
          {{ budget - progress }} restants
        </b>
      </h2>
    </div>
    <div class="cprogress-bar">
      <div class="progress-bar" :style="{ width: (progress / budget) * 100 + '%' }"></div>
    </div>
    
    <button @click="increaseProgress">Increase</button>
    <button @click="resetProgress">Reset</button>
  </div>
</template>

<style scoped>
.test {
  position: relative;
  background-color: rgba(0, 68, 255, 0.479);
  height: fit-content;
  border-radius: 8px;
  margin: auto;
  width: 70%;
}
.test .progress-label h2 {
  position: relative;
  text-align: start;
  margin: auto;
  font-size: medium;
}
.test .progress-label h2 b {
  padding-left: 15px;
  margin-left: auto;
  font-size: small;
}
.cprogress-bar {
  position: relative;
  width: 70%;
  margin: auto;
  height: 10px;
  background-color: #e0e0e0;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  position: relative;
  height: 100%;
  background-color: #9276c7;
  transition: width 0.3s ease;
}
.progress-label {
  position: relative;
  width: 70%;
  text-align: end;
  margin: auto;
  font-size: small;
}

button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #76c7c0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5a9b9a;
}
</style>
