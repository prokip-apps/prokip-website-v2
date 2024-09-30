<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="simple-badge">Point of Sale</div>

        <div class="hero__inner__content">
          <h1>Built for Any Business</h1>
          <p>
            Transform your sales approach with a Point of Sale system designed
            for all types of businesses. Now you can serve your customers faster
            and more efficiently, optimizing your operations and enhancing their
            experience
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
          src="/img/pos-hero.png"
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