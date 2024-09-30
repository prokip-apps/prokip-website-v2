<template>
  <div class="hero invoicing-hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <div class="simple-badge">Report</div>

        <div class="hero__inner__content">
          <h1>Drive Growth with Informed Decisions</h1>
          <p>
            Prokip’s Advanced Reports provide deep insights into your business
            performance, offering detailed analyses of inventory, sales,
            customer interactions, and overall activity
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