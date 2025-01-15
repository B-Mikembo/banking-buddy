<script setup lang="ts">
import { series, chartOptions } from "../../domains/dashboard/charts/Charts";
import { user } from "../../domains/mxlcwm-user/Users";
</script>

<template>
  <div class="chart">
    <h1><b>Bienvenue {{ user.name() }} 👋</b></h1>
    <div class="radialBar">
      <h2 class="nBank">{{ user.banks().length }} comptes bancaires</h2>
      <apexchart
        type="donut"
        width="380"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <button>Ajouter une banque</button>
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
  flex-direction: column;
  align-items: center;
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
  left: 10px;
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
