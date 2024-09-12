<template>
  <nuxt-link :to="link" class="btn" :class="classes" target="_blank">
    {{ title }}
    <NuxtImg src="/img/icon/arrow-right.svg" width="22" height="22" />
  </nuxt-link>
</template>

<script>
export default {
  props: ["link", "title", "classes"],
};
</script>

<style lang="scss" scoped></style>
