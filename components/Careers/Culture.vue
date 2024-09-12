<template>
  <div class="careers-culture">
    <div class="careers-culture__content">
      <SectionTitle title="Our Culture" />
      <h2>What it’s like to work at Prokip</h2>
      <p>
        Hear from our CEO, Godwin Sunday, about our commitment to creating a
        supportive, dynamic workplace where your career can thrive.
      </p>

      <div class="video-player">
        <div class="video-player__play" @click="openVideoModal">
          <NuxtImg src="/img/icon/play-icon-bg.svg" alt="Play" />
        </div>

        <div class="video-player__control">
          <button class="video-player__control__play">
            <NuxtImg src="/img/icon/play-icon.svg" alt="Play" />
          </button>

          <div class="video-player__control__timeline">
            <div class="video-player__control__timeline__progress"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>