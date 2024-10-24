<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="badge-stye-3">
          <NuxtImg src="/img/icon/crm-icon.svg" alt="crm-badge" />
          <div class="badge-stye-3__text">
            <div class="text">Desktop App</div>
            <div class="underline"></div>
          </div>
        </div>

        <div class="hero__inner__content">
          <h1>Sell Offline with Ease</h1>
          <p>
            Manage your sales anytime, anywhere, without the need for the
            internet, using the free Prokip Desktop App a cost-free tool
            designed to enhance your business’s operations
          </p>
          <div class="hero__inner__content__actions">
            <nuxt-link
              to="https://proweb-5.s3.amazonaws.com/Prokip+Setup+0.2.7.exe"
              class="hero-btn"
              target="_blank"
            >
              Download Desktop App
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
          src="/img/desktop-app-hero.webp"
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