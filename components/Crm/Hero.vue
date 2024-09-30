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
          <h1>Boost Sales & Keep Customers Happy</h1>
          <p>
            Prokip CRM helps you drive sales, nurture customer relationships,
            and ensure long-term loyalty. Manage every interaction with ease,
            keeping your customers satisfied and your business growing
          </p>
          <div class="hero__inner__content__actions">
            <nuxt-link
              to="https://app.prokip.co/register"
              class="hero-btn"
              target="_blank"
            >
              Get started for free
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