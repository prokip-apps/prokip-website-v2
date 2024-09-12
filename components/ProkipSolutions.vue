<template>
  <div class="prokip-solutions">
    <div class="prokip-solutions__inner">
      <div class="prokip-solutions__inner__title">
        <h2>
          Power your business to success with Prokip's all in one Solution.
        </h2>

        <div class="prokip-solutions__inner__nav">
          <button
            class="prokip-solutions__inner__nav__prev"
            @click="prevStep"
            :disabled="step === 1"
          >
            <Icon
              name="lucide:arrow-left"
              class="prokip-solutions__inner__nav__prev__icon"
              :style="{ color: step === 1 ? '#011530' : '#fff' }"
            />
          </button>
          <button
            class="prokip-solutions__inner__nav__next"
            @click="nextStep"
            :disabled="step === 3"
          >
            <Icon
              name="lucide:arrow-right"
              class="prokip-solutions__inner__nav__next__icon"
              :style="{ color: step === 3 ? '#011530' : '#fff' }"
            />
          </button>
        </div>
      </div>

      <div class="prokip-solutions__inner__slider">
        <div class="prokip-solutions__inner__slider__item" v-if="step === 1">
          <div class="prokip-solutions__inner__slider__item__content">
            <h2>Manage Sales & Inventory</h2>
            <p>
              Sell to customers faster and keep accurate records of every sales
              transaction and inventory across all your business locations.
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
              Increase your profits and Get more sales with integrated Marketing
              solutions and CRM that keep your customers happy.
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

const nextStep = () => {
  step.value++;
};

const prevStep = () => {
  step.value--;
};
</script>

<style>
</style>