<template>
  <div class="company-data">
    <div class="company-data__inner">
      <div class="company-data__inner__item">
        <h2><VueJsCounter end="26"></VueJsCounter>K+</h2>
        <p>Users</p>
      </div>

      <div class="company-data__inner__item">
        <h2><VueJsCounter end="80"></VueJsCounter>+</h2>
        <p>State/ Regions</p>
      </div>

      <div class="company-data__inner__item">
        <h2><VueJsCounter end="1"></VueJsCounter>.8M+</h2>
        <p>Monthly Transactions</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueJsCounter from "vue-js-counter";
</script>

<style>
</style>