<script setup lang="ts">
import { series, chartOptions, labels } from "../../domains/dashboard/charts/Charts";
const user = "Brice";
</script>
<template>
    <div class="chart">
        <h1><b>Bienvenue, {{ user }}</b></h1>
        <div class="radialBar">
          <h2 class="nBank">{{ labels.length }} comptes bancaire</h2>
          <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart>
          <button>Ajouter une banque</button>
        </div>
        <div class="transactions">
          <h1>
            Transactions récentes
            <button class="see">Tout voir</button>
          </h1>
        </div>
      </div>
</template>
<style>
.chart h1 {
  position: relative;
  font-weight: bold;
  display: flex;
  border: 2px solid white;
  margin: auto;
}
.chart {
  position: relative;
  border: 2px solid white;
  width: 50%;
}
.chart .radialBar {
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  border: 2px solid white;
  width: 100%;
}

.chart .radialBar button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.chart .radialBar button:hover {
  background-color: #0056b3;
}
.chart .radialBar .nBank {
  position: relative;
  width: 100%;
}
.chart .transactions {
  position: relative;
  width: 100%;
}

.chart .see {
  position: relative;
  width: 30%;
  margin-left: auto;
}
</style>