<template>
  <div class="section__title">
    <div class="text">{{ title }}</div>
    <div class="underline"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>