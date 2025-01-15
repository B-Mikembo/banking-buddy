<script setup lang="ts">
</script>
<template>
  <div class="transaction-container">
    <div class="box">
      <header class="transaction-header">
        <h1>Historique des Transactions</h1>
        <button> Sélectionner un compte <span>▼</span></button>
      </header>
    </div>
  </div>
</template>
<style>
.transaction-container {
  position: relative;
  width: 75%;
  margin-left: auto;
  display: flex;
}
.box {
  position: relative;
    margin-left: 5px;
    width: 100%;
}
.transaction-header {
  position: relative;
  display: flex;
  flex-direction: row;
  border: solid white 1px;
}
.transaction-container > .box >.transaction-header > button {
  position: relative;
  font-size: medium;
  width: 20%;
  height: 50px;
  background-color: transparent;
  margin-top: 20px;
  margin-left: 40%;
  cursor: pointer;
}
.transaction-container > .box >.transaction-header > button > span {
  position: relative;
  margin-left: 10%;
}
</style>