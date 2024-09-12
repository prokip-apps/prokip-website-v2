<template>
  <div
    class="dropdown"
    @click="isOpen = !isOpen"
    @mouseleave="isOpen = false"
    style="position: relative"
  >
    <div class="header__nav__link--item">
      {{ title }}
      <Icon name="lucide:chevron-down" class="chevron-down" />
    </div>
    <div style="position: absolute; width: 100px; left: 0%">&nbsp;</div>

    <transition name="fade" appear>
      <div class="dropdown__box" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="dropdown__box__item">
          <nuxt-link :to="item.link" class="dropdown-menu-link">
            <div class="content">
              <h4>{{ item.title }}</h4>
            </div>
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title", "items"],

  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
