<template>
  <div class="trusted-by">
    <div class="trusted-by__inner">
      <span>Trusted by:</span>
      <div class="trusted-by__inner__logos">
        <vue-marquee-slider id="marquee-slider" :speed="20000">
          <img
            v-for="(image, index) in logos"
            :key="index"
            :src="image"
            class="trusted-by__inner__logos__logo"
          />
        </vue-marquee-slider>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "@/node_modules/vue3-marquee-slider/dist/style.css";

const logos = [
  "/img/trusted-by1.png",
  "/img/trusted-by2.png",
  "/img/trusted-by3.png",
  "/img/trusted-by4.png",
  "/img/trusted-by5.png",
  "/img/trusted-by6.png",
];
</script>

<style>
</style>