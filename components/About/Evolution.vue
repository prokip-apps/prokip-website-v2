<template>
  <div class="product-evolution">
    <div class="product-evolution__inner">
      <div class="product-evolution__title">
        <h2>Product Evolution</h2>
        <p>
          See how Prokip has grown our global presence, community and product
          line over time.
        </p>
      </div>

      <div class="product-evolution__timeline">
        <div class="product-evolution__timeline__tab">
          <button class="item active">2018</button>
          <button class="item">2019</button>
          <button class="item">2020</button>
          <button class="item">2021</button>
          <button class="item">2022</button>
          <button class="item">2023</button>
        </div>

        <div class="product-evolution__timeline__content">
          <NuxtImg src="/img/product-evolution-2018.svg" />
        </div>

        <div class="product-evolution__timeline__nav">
          <button class="item">
            <Icon name="lucide:chevron-left" class="icon" />
          </button>

          <button class="item">
            <Icon name="lucide:chevron-right" class="icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>