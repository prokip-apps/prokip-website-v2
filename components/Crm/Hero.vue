<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="badge-stye-3">
          <NuxtImg src="/img/icon/crm-icon.svg" alt="crm-badge" />
          <div class="badge-stye-3__text">
            <div class="text">CRM</div>
            <div class="underline"></div>
          </div>
        </div>

        <div class="hero__inner__content">
          <h1>Sell More & keep your customers happy </h1>
          <p>
            Prokip CRM helps you boost sales, build relationship with your
            customers and keep them loyal to your business.
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
          src="/img/crm-hero.png"
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