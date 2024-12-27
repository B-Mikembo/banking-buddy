<script setup lang="ts">
</script>
<template>
    <div class="user">
        <h1>User</h1>
          <img class="img" src="../../assets/avatar.jpg" fluid alt="Responsive image"></img>
          <p>myemail@.com</p>
          <div class="Bank">
            <h2 class="myBank">
              Mes Banques
              <button class="addBank">Ajouter une banque</button>
            </h2>
            <div class="cards" > Banque <img src="../../assets/mastercard.svg" alt=""></div>
          </div>
          <div class="Budget">
            <h2>Mes Budgets</h2>
          </div>
      </div>
</template>
<style>
.user {
  position: relative;
  border: 2px solid white;
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.user .img {
  position: relative;
  display: flex;
  width: 30%;
  border-radius: 50%;
}
.user .Bank {
  position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.user .Bank .myBank {
  position: relative;
  border: 2px solid white;
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
  flex-direction:column;
}

.user .Bank .cards  {
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.user .Bank .cards:hover {
  transform: translateY(-15px);
}

.user .Budget {
  position: relative;
  display: flex;
  border: 2px solid white;
  height: 100%;
}
</style>
