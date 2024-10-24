<template>
  <div class="prokip-solutions">
    <div class="prokip-solutions__inner">
      <div class="prokip-solutions__inner__title">
        <h2>All you need to run your business profitably</h2>

        <div class="tab-container">
          <button
            class="tab-btn"
            @click="step = 1"
            :class="{ active: step === 1 }"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M12.8985 4.56205L8.66668 9.64018C8.31312 10.0645 7.68256 10.1218 7.25828 9.76822C6.834 9.41466 6.77668 8.78409 7.13024 8.35982L12.1302 2.35982C12.53 1.88006 13.2669 1.88006 13.6667 2.35982L18.6667 8.35982C19.0202 8.78409 18.9629 9.41466 18.5386 9.76822C18.1144 10.1218 17.4838 10.0645 17.1302 9.64018L12.8985 4.56205Z"
                :fill="step === 1 ? '#FFB600' : '#454745'"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.39844 9C4.84615 9 4.39844 9.44772 4.39844 10V18C4.39844 19.6569 5.74158 21 7.39844 21H18.3992C20.0561 21 21.3992 19.6569 21.3992 18V10C21.3992 9.44772 20.9515 9 20.3992 9H5.39844ZM14.8992 15C14.8992 16.1046 14.0038 17 12.8992 17C11.7947 17 10.8992 16.1046 10.8992 15C10.8992 13.8954 11.7947 13 12.8992 13C14.0038 13 14.8992 13.8954 14.8992 15Z"
                :fill="step === 1 ? '#FFB600' : '#454745'"
              />
            </svg>

            <span>Manage <span class="hide-m">Business</span></span>
          </button>
          <button
            class="tab-btn"
            @click="step = 2"
            :class="{ active: step === 2 }"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.3"
                x="2.5"
                y="2"
                width="8"
                height="9.6"
                rx="2"
                :fill="step === 2 ? '#FFB600' : '#454745'"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.5 5.19971C3.39543 5.19971 2.5 6.09514 2.5 7.19971V15.9997C2.5 17.1043 3.39543 17.9997 4.5 17.9997H16.5C17.6046 17.9997 18.5 17.1043 18.5 15.9997V7.19971C18.5 6.09514 17.6046 5.19971 16.5 5.19971H4.5ZM11.4768 13.052C11.051 13.052 10.82 12.5538 11.0952 12.2289L13.254 9.67911C13.4537 9.44323 13.8174 9.44323 14.0171 9.67911L16.176 12.2289C16.4511 12.5538 16.2201 13.052 15.7944 13.052H14.4449V14.5581C14.4449 14.8342 14.221 15.0581 13.9449 15.0581H13.3262C13.0501 15.0581 12.8262 14.8342 12.8262 14.5581V13.052H11.4768Z"
                :fill="step === 2 ? '#FFB600' : '#454745'"
              />
            </svg>

            <span>Track <span class="hide-m">Transactions</span></span>
          </button>
          <button
            class="tab-btn"
            @click="step = 3"
            :class="{ active: step === 3 }"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.64844 11.6665C4.38851 14.5419 6.99868 16.6665 10.1051 16.6665C13.787 16.6665 16.7717 13.6818 16.7717 9.99985C16.7717 6.60017 14.227 3.79485 10.9384 3.38477V11.6665H3.64844Z"
                :fill="step === 3 ? '#FFB600' : '#454745'"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.27134 8.33333V2.5C5.87166 2.5 3.06633 5.04474 2.65625 8.33333H9.27134Z"
                :fill="step === 3 ? '#FFB600' : '#454745'"
              />
            </svg>

            <span>Grow <span class="hide-m">Business</span> </span>
          </button>
        </div>

        <!-- <div class="prokip-solutions__inner__nav">
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
        </div> -->
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