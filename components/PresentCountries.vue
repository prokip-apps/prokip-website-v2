<template>
  <div class="present-countries">
    <div class="present-countries__inner">
      <div class="present-countries__inner__title">
        <h2>We are present in 5 countries in Africa</h2>
      </div>

      <div class="present-countries__inner__grid">
        <div class="present-countries__inner__countries">
          <div class="present-countries__inner__countries__item">
            <NuxtImg src="/img/icon/gh-flag.svg" alt="Ghana" />
            <p>Ghana</p>
          </div>

          <div class="present-countries__inner__countries__item">
            <NuxtImg src="/img/icon/ke-flag.svg" alt="Kenya" />
            <p>Kenya</p>
          </div>

          <div class="present-countries__inner__countries__item">
            <NuxtImg src="/img/icon/ng-flag.svg" alt="Nigeria" />
            <p>Nigeria</p>
          </div>

          <div class="present-countries__inner__countries__item">
            <NuxtImg src="/img/icon/rw-flag.svg" alt="Rwanda" />
            <p>Rwanda</p>
          </div>

          <div class="present-countries__inner__countries__item">
            <NuxtImg src="/img/icon/ug-flag.svg" alt="Uganda" />
            <p>Uganda</p>
          </div>
        </div>

        <div class="present-countries__inner__map">
          <NuxtImg draggable="false" src="/img/map.svg" alt="Map" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>