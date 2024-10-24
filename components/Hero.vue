<template>
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__inner__top">
        <!-- <div class="hero__inner__announcement-badge">
          <span>New</span>
          <NuxtLink to="/" class="hero__inner__announcement-badge__link">
            Lorem Ipsum
            <NuxtImg src="/img/icon/arrow-right.svg" alt="arrow-right" />
          </NuxtLink>
        </div> -->

        <div class="hero__inner__content">
          <h1>Manage and Grow your business <span>with ease</span></h1>
          <p>
            Prokip is your all-in-one business solution, designed to simplify
            daily operations by helping you manage sales, track inventory, and
            handle accounting, bookkeeping, and customer relationships—making it
            easier for businesses like yours in Nigeria to operate every day.
          </p>
          <div class="hero__inner__content__actions">
            <nuxt-link
              to="https://app.prokip.co/register"
              class="hero-btn"
              target="_blank"
            >
              Get Started
              <NuxtImg
                src="/img/icon/arrow-right.svg"
                width="22"
                height="22"
                class="icon"
              />
            </nuxt-link>

            <nuxt-link to="/book-a-demo" class="hero-btn-sec">
              Book a Demo
              <NuxtImg
                src="/img/icon/arrow-right-yellow.svg"
                width="22"
                height="22"
                class="icon"
              />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="hero__inner__image">
        <NuxtImg
          src="/img/hero-home.png"
          preload
          alt="hero-image"
          class="hero-image"
        />

        <NuxtImg
          src="/img/mobile-hero.png"
          alt="hero-image"
          preload
          class="hero-image-mobile"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-image {
  @media (max-width: 768px) {
    display: none;
  }
}
</style>