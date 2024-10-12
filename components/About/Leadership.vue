<template>
  <div class="leadership">
    <div class="leadership__inner">
      <div class="leadership__inner__header">
        <h1>Our leadership</h1>
        <div class="navigation">
          <div class="navigation__buttons">
            <button
              class="nav-button prev"
              :disabled="currentSlide === 1"
              @click="prevSlide"
              aria-label="Previous slide"
            >
              <Icon name="lucide:chevron-left" />
            </button>
            <button
              class="nav-button next"
              :disabled="currentSlide === leaders.length"
              @click="nextSlide"
              aria-label="Next slide"
            >
              <Icon name="lucide:chevron-right" />
            </button>
          </div>
        </div>
      </div>
      <div class="slider-container" ref="sliderContainer">
        <div
          class="slider"
          :style="{
            transform: `translateX(-${
              (currentSlide - 1) * (110 / visibleSlides)
            }%)`,
          }"
        >
          <div v-for="leader in leaders" :key="leader.name" class="slide">
            <div class="card">
              <NuxtImg
                :src="leader.image"
                :alt="leader.name"
                width="300"
                height="300"
              />
              <div class="card-content">
                <h2>{{ leader.name }}</h2>
                <p>{{ leader.role }}</p>
                <!-- <a href="#" :aria-label="`${leader.name}'s LinkedIn profile`">
                  <Icon name="lucide:linkedin" class="linkedin-icon" />
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const leaders = [
  {
    name: "Godwin Sunday",
    role: "Co-founder & CEO",
    image: "/img/godwin-sunday.png",
  },
  {
    name: "Michael Sodimu",
    role: "Co-founder & CTO",
    image: "/img/micheal.png",
  },
  {
    name: "Chi Ohunta",
    role: "Head, People & Culture",
    image: "/img/chi.png",
  },
  {
    name: "Lucy Jiki",
    role: "Operations Lead",
    image: "/img/lucy.png",
  },
  {
    name: "Lucky Elohor 0.",
    role: "Chief Marketing Officer",
    image: "/img/elohor.png",
  },
  {
    name: "Faith Enyinnaya ",
    role: "Head of Sales",
    image: "/img/faith.png",
  },
];

const currentSlide = ref(1);
const sliderContainer = ref(null);
const containerWidth = ref(0);

const updateContainerWidth = () => {
  if (sliderContainer.value) {
    containerWidth.value = sliderContainer.value.offsetWidth;
  }
};

onMounted(() => {
  updateContainerWidth();
  window.addEventListener("resize", updateContainerWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateContainerWidth);
});

const nextSlide = () => {
  if (currentSlide.value < leaders.length) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 1) {
    currentSlide.value--;
  }
};

const visibleSlides = computed(() => {
  if (containerWidth.value >= 1280) return 4;
  if (containerWidth.value >= 1024) return 4;
  if (containerWidth.value >= 768) return 3;
  if (containerWidth.value >= 640) return 2;
  return 1;
});
</script>
