<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from '../tools/ProgressBar.vue';
import { user } from '../../domains/mxlcwm-user/Users';

const banks = ref(user.banks());
</script>

<template>
  <div class="user">
    <h1>User</h1>
    <img class="img" src="../../assets/avatar.jpg" alt="User Avatar" />
    <p>{{ user.email() }}</p>

    <div class="Bank">
      <h2 class="myBank">
        Mes Banques
        <button class="addBank">Ajouter une banque</button>
      </h2> 
      <div v-for="(bank, index) in banks" :key="index">
          <div class="cards">
            <img src="../../assets/mastercard.svg" :alt="bank.bankType" />
          </div>
        </div>    
    </div>
    <div class="Budget">
      <h2>
        Mes Budgets
        <button class="budget-button"><span>▶</span></button>
      </h2>
      <div class="budgets-bar">
        <div v-for="(bank, index) in banks" :key="index">
          <div class="budgets-bar">
            <ProgressBar :budget="bank.getBalance()" :initial-progress="1000" category="Solde" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  position: relative;
  border: 1px solid white;
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.user .img {
  position: relative;
  display: flex;
  margin: auto;
  width: 30%;
  border-radius: 50%;
}
.user .Bank {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user .Bank .myBank {
  position: relative;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.user .Bank .myBank .addBank {
  position: relative;
  width: 20%;
  margin-left: auto;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.user .Bank .myBank .addBank:hover {
  background-color: #0056b3;
}
.user .Bank .cards {
  display: flex;
  width: 55%;
  flex-direction: column;
}
.user .Bank .cards {
  border-radius: 8px;
  transition: transform 0.2s ease;
}
.user .Bank .cards:hover {
  transform: translateY(-15px);
}
.user .Budget {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  height: 100%;
}
.user .Budget .budget-button {
  position: relative;
  background-color: transparent;
  color: blue;
  border: none;
  cursor: pointer;
  transition: color 0.5s ease;
}
.user .Budget .budget-button:hover {
  color: #b31500;
}
</style>
