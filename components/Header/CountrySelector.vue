<template>
  <div class="country-dropdown-wrapper">
    <div class="country-selector" @click="toggleDropDown()">
      <div class="gap">
        <NuxtImg
          width="28px"
          v-if="$route.path.includes('/ng')"
          src="/img/ng-flag.svg"
          alt=""
        />
        <NuxtImg
          width="28px"
          v-else-if="$route.path.includes('/gh')"
          src="/img/ng-flag.svg"
          alt=""
        />
        <NuxtImg
          width="28px"
          v-else-if="$route.path.includes('/ke')"
          src="/img/ng-flag.svg"
          alt=""
        />
        <NuxtImg
          width="28px"
          v-else-if="$route.path.includes('/rw')"
          src="/img/ng-flag.svg"
          alt=""
        />
        <NuxtImg
          width="28px"
          v-else-if="$route.path.includes('/ug')"
          src="/img/ng-flag.svg"
          alt=""
        />
        <NuxtImg width="28px" v-else :src="globalIconSrc" alt="" />

        <span v-if="$route.path.includes('/ng')">NG</span>
        <span v-else-if="$route.path.includes('/gh')">GH</span>
        <span v-else-if="$route.path.includes('/ke')">KE</span>
        <span v-else-if="$route.path.includes('/rw')">RW</span>
        <span v-else-if="$route.path.includes('/ug')">UG</span>
        <span v-else>Global</span>
      </div>

      <Icon name="lucide:chevron-down" class="chevron-down" />
    </div>

    <div class="selector-dropdown" v-if="dropdown">
      <nuxt-link to="/ng" class="item">
        <NuxtImg width="28px" src="/img/icon/ng-flag.svg" alt="" />
        <span>Nigeria</span>
      </nuxt-link>

      <nuxt-link to="/gh" class="item">
        <NuxtImg width="28px" src="/img/icon/gh-flag.svg" alt="" />
        <span>Ghana</span>
      </nuxt-link>

      <nuxt-link to="/ke" class="item">
        <NuxtImg width="28px" src="/img/icon/ke-flag.svg" alt="" />
        <span>Kenya</span>
      </nuxt-link>

      <nuxt-link to="/rw" class="item">
        <NuxtImg width="28px" src="/img/icon/rw-flag.svg" alt="" />
        <span>Rwanda</span>
      </nuxt-link>

      <nuxt-link to="/ug" class="item">
        <NuxtImg width="28px" src="/img/icon/ug-flag.svg" alt="" />
        <span>Uganda</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: {
    globalIconSrc: {
      type: String,
      default: "/img/icon/globe-icon.svg",
    },
  },
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    toggleDropDown() {
      this.dropdown = !this.dropdown;
    },
  },
};
</script>

<style lang="scss" scoped></style>
