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
          <h1>Empowering Seamless Offline Sales</h1>
          <p>
            Unlock the power of seamless offline selling with the Prokip Desktop
            App – a robust solution that not only comes at zero cost but also
            redefines the way you manage sales without the need for constant
            internet connectivity.
          </p>
          <div class="hero__inner__content__actions">
            <nuxt-link
              to="https://proweb-5.s3.amazonaws.com/Prokip+Setup+0.2.7.exe"
              class="hero-btn"
              target="_blank"
            >
              Download Desktop App
              <NuxtImg src="/img/icon/arrow-right.svg" width="22" height="22" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="hero__inner__image invoicing-hero__image">
        <NuxtImg
          src="/img/desktop-app-hero.png"
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