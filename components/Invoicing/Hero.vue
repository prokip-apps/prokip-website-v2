<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="simple-badge">Invoicing</div>

        <div class="hero__inner__content">
          <h1>Simplify Invoicing & Accelerate Payments</h1>
          <p>
            Send professional invoices, track payments in real-time, and get
            paid faster with ease.
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
          src="/img/invoicing-hero.png"
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