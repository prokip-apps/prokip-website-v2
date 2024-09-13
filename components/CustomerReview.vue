<template>
  <div class="customer-review">
    <div class="customer-review__inner">
      <div class="customer-review__inner__title">
        <div class="text">Customer Reviews</div>
        <div class="underline"></div>
      </div>

      <div class="customer-review__inner__content">
        <h2>Why you should trust us</h2>
        <p>
          Hear from our customers, on what it’s like to use Prokip and see why
          this is the best business management software for your business.
        </p>
      </div>

      <div class="customer-review__inner__video">
        <div
          class="customer-review__inner__video__play"
          @click="openVideoModal"
        >
          <NuxtImg src="/img/icon/play-icon-bg.svg" alt="Play" />
        </div>

        <div class="customer-review__inner__video__control">
          <button class="customer-review__inner__video__control__play">
            <NuxtImg
              src="/img/icon/play-icon.svg"
              alt="Play"
              @click="openVideoModal"
            />
          </button>

          <div class="customer-review__inner__video__control__timeline">
            <div
              class="customer-review__inner__video__control__timeline__progress"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <VideoModal v-if="isVideoModalOpen" @close="closeVideoModal" />
  </div>
</template>

<script setup>
const isVideoModalOpen = ref(false);

const openVideoModal = () => {
  isVideoModalOpen.value = true;
};

const closeVideoModal = () => {
  isVideoModalOpen.value = false;
};
</script>

<style>
</style>