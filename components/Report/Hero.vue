<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="simple-badge">Report</div>

        <div class="hero__inner__content">
          <h1>Make better decisions that drive growth</h1>
          <p>
            Prokip’s Advance Reports helps you understands how your business is
            performing with detailed reports on inventory, sales, customers and
            all the activities in your business.
          </p>
          <div class="hero__inner__content__actions">
            <nuxt-link
              to="https://app.prokip.co/register"
              class="hero-btn"
              target="_blank"
            >
              Get started for free
              <NuxtImg src="/img/icon/arrow-right.svg" width="22" height="22" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="hero__inner__image invoicing-hero__image">
        <NuxtImg
          src="/img/report-hero.png"
          preload
          alt="hero-image"
          class="hero-image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>