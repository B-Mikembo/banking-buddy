<script setup lang="ts">
import { computed } from "vue";
import { series, chartOptions } from "../../domains/dashboard/charts/Charts";
import { user } from "../../domains/mxlcwm-user/Users";

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

const total = computed(() => {
  const sum = series.value.reduce((acc, val) => acc + val, 0);
  return formatNumber(sum);
});
</script>

<template>
  <div class="chart">
    <h1><b>Bienvenue {{ user.name() }} 👋</b></h1>
    <div class="radialBar">
      <apexchart type="donut" width="300" :options="chartOptions" :series="series"></apexchart>
      <div class="nBank">
        <h2>
          {{ user.banks().length }} comptes bancaires
          <button> + Add bank</button>
        </h2>
        <h3>Total current balance
          <h2><b>{{ total }} $</b></h2>
        </h3>
      </div>
    </div>
    <div class="transactions">
      <h1>
        Transactions récentes
        <button class="see">Tout voir</button>
      </h1>
      <table class="t" border="1" frame="hsides" rules="rows">
        <thead>
          <tr>
            <th scope="col">Categories</th>
            <th scope="col">Transactions</th>
            <th scope="col">Montants</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Abonnements</th>
            <td>Spotify</td>
            <td>-15 €</td>
            <td>Processing</td>
          </tr>
          <tr>
            <th scope="row">Entrée</th>
            <td>Salaire</td>
            <td>2 700 €</td>
            <td>Success</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.chart {
  border: solid 2px white;
  position: relative;
  width: 70%;
  margin-left: 4px;
}
.chart h1 {
  position: relative;
  font-weight: bold;
  display: flex;
  border: 2px solid white;
  margin: auto;
}
.chart .radialBar {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.chart .radialBar .nBank {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 10px;
}

.chart .radialBar .nBank h2 {
  position: relative;
  text-align: start;
}

.chart .radialBar .nBank button {
  position: relative;
  background-color: transparent;
  font-size: x-large;
  margin-left: 29%;
  color: blue;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.4s ease;
}
.chart .radialBar .nBank button:hover {
  background-color: blue;
  color: white;
}

.chart .radialBar .nBank h3 {
  position: relative;
  font-size: large;
  color: grey;
}
.chart .radialBar .nBank h3 h2 b {
  position: relative;
  font-size: larger;
  color: black;
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
.t {
  position: relative;
  width: 65%;
  margin-top: 20%;
  margin-left: 15%;
}
.t th,
td {
  text-align: center;
  padding-top: 3%;
}
</style>
