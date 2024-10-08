<template>
  <div class="trusted-by">
    <div class="trusted-by__inner">
      <span>Trusted by:</span>
      <div class="trusted-by__inner__logos">
        <vue-marquee-slider id="marquee-slider" :speed="50000">
          <div
            class="img-container"
            v-for="(image, index) in logos"
            :key="index"
          >
            <img
              :src="image"
              class="trusted-by__inner__logos__logo"
              :width="100"
              :space="100"
            />
          </div>
        </vue-marquee-slider>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/node_modules/vue3-marquee-slider/dist/style.css";

const logos = [
  "/img/trusted-by1.webp",
  "/img/trusted-by2.webp",
  "/img/trusted-by3.webp",
  "/img/trusted-by4.webp",
  "/img/trusted-by5.webp",
  "/img/trusted-by6.webp",
  "/img/trusted-by7.webp",
  "/img/trusted-by8.webp",
  "/img/trusted-by9.webp",
  "/img/trusted-by10.webp",
  "/img/trusted-by11.webp",
  "/img/trusted-by12.webp",
  "/img/trusted-by13.webp",
  "/img/trusted-by14.webp",
  "/img/trusted-by15.webp",
  "/img/trusted-by16.webp",
  "/img/trusted-by17.webp",
  "/img/trusted-by18.webp",
  "/img/trusted-by19.webp",
  "/img/trusted-by20.webp",
];
</script>

<style>
</style>