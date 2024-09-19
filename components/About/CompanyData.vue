<template>
  <div class="company-data">
    <div class="company-data__inner">
      <div class="company-data__inner__item">
        <h2><VueJsCounter end="10"></VueJsCounter>m+</h2>
        <p>Personal users</p>
      </div>

      <div class="company-data__inner__item">
        <h2><VueJsCounter end="200"></VueJsCounter>k+</h2>
        <p>Business users</p>
      </div>

      <div class="company-data__inner__item">
        <h2><VueJsCounter end="3"></VueJsCounter></h2>
        <p>Countries</p>
      </div>

      <div class="company-data__inner__item">
        <h2><VueJsCounter end="7"></VueJsCounter></h2>
        <p>Metric</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueJsCounter from "vue-js-counter";
</script>

<style>
</style>