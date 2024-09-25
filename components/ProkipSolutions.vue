<template>
  <div class="prokip-solutions">
    <div class="prokip-solutions__inner">
      <div class="prokip-solutions__inner__title">
        <h2>Run your business profitably without being there 24/7</h2>

        <div class="prokip-solutions__inner__nav">
          <button
            class="prokip-solutions__inner__nav__prev"
            @click="prevStep"
            :disabled="step === 1"
            @mouseenter="isHoveringPrev = true"
            @mouseleave="isHoveringPrev = false"
          >
            <Icon
              name="lucide:arrow-left"
              :class="[
                'prokip-solutions__inner__nav__prev__icon',
                { 'hover-icon': isHoveringPrev && step !== 1 },
              ]"
              :style="{ color: step === 1 ? '#011530' : '#fff' }"
            />
          </button>
          <button
            class="prokip-solutions__inner__nav__next"
            @click="nextStep"
            :disabled="step === 3"
            @mouseenter="isHoveringNext = true"
            @mouseleave="isHoveringNext = false"
          >
            <Icon
              name="lucide:arrow-right"
              class="prokip-solutions__inner__nav__next__icon"
              :class="[
                'prokip-solutions__inner__nav__next__icon',
                { 'hover-icon': isHoveringNext && step !== 3 },
              ]"
              :style="{ color: step === 3 ? '#011530' : '#fff' }"
            />
          </button>
        </div>
      </div>

      <div class="prokip-solutions__inner__slider">
        <div class="prokip-solutions__inner__slider__item" v-if="step === 1">
          <div class="prokip-solutions__inner__slider__item__content">
            <h2>Stay in Control, From Stock to Sale</h2>
            <p>
              Keep track of your stock levels, monitor sales in real-time, and
              set up automatic reordering to ensure you never run out of
              essential items.
            </p>
            <TheButton
              title="Get started"
              link="https://app.prokip.co/register"
              classes="hero-btn"
            />
          </div>
          <div class="prokip-solutions__inner__slider__item__image">
            <NuxtImg src="/img/prokip-solutions-1.png" alt="Prokip Solutions" />
          </div>
        </div>

        <div class="prokip-solutions__inner__slider__item" v-if="step === 2">
          <div class="prokip-solutions__inner__slider__item__content">
            <h2>Track all business Transactions</h2>
            <p>
              Get all the financial and transaction reports that you need and
              see how your business is doing from anywhere you are.
            </p>
            <TheButton
              title="Get started"
              link="https://app.prokip.co/register"
              classes="hero-btn"
            />
          </div>
          <div class="prokip-solutions__inner__slider__item__image">
            <NuxtImg src="/img/track-business.png" alt="Prokip Solutions" />
          </div>
        </div>

        <div
          class="prokip-solutions__inner__slider__item dark"
          v-if="step === 3"
        >
          <div class="prokip-solutions__inner__slider__item__content order-2">
            <h2>Grow your business 2X faster</h2>
            <p>
              Increase your profits and get more sales with easy-to-use
              marketing tools and CRM that keep your customers happy.
            </p>
            <TheButton
              title="Get started"
              link="https://app.prokip.co/register"
              classes="hero-btn"
            />
          </div>
          <div class="prokip-solutions__inner__slider__item__image order-1">
            <NuxtImg src="/img/grow-x2.png" alt="Prokip Solutions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const step = ref(1);
const isHoveringPrev = ref(false);
const isHoveringNext = ref(false);

const nextStep = () => {
  step.value++;
};

const prevStep = () => {
  step.value--;
};
</script>

<style>
</style>