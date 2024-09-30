<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="simple-badge">Inventory Management</div>

        <div class="hero__inner__content">
          <h1>Take Control of Your Inventory</h1>
          <p>
            With Prokip, effortlessly manage your stock levels, track products,
            and streamline your inventory operations to ensure your business
            runs smoothly
          </p>
          <div class="hero__inner__content__actions">
            <nuxt-link
              to="https://app.prokip.co/register"
              class="hero-btn"
              target="_blank"
            >
              Get started
              <NuxtImg
                src="/img/icon/arrow-right.svg"
                width="22"
                height="22"
                class="icon"
              />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="hero__inner__image invoicing-hero__image">
        <NuxtImg
          src="/img/inventory-management-hero.png"
          alt="hero-image"
          preload
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