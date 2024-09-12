<template>
  <div class="video-modal">
    <button class="video-modal__close" @click="closeVideoModal">
      <Icon name="lucide:x" class="close-icon" />
    </button>
    <div class="video-modal__inner">
      <div class="video-modal__inner__video">
        <div v-if="isLoading" class="loading-overlay">
          <Loader />
        </div>

        <iframe
          ref="videoIframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          @load="onIframeLoad"
          class="video-modal__inner__video__iframe"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["close"]);

const videoIframe = ref(null);
const isLoading = ref(true);

const onIframeLoad = () => {
  isLoading.value = false;
};

const closeVideoModal = () => {
  emit("close");
};

onMounted(() => {
  if (videoIframe.value) {
    videoIframe.value.addEventListener("load", onIframeLoad);
  }
});
</script>

<style scoped>
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.video-modal__inner__video {
  position: relative;
}
</style>