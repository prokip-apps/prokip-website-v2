<template>
  <div class="invoice-faq">
    <div v-for="(item, index) in items" :key="index" class="invoice-faq-inner">
      <button
        class="invoice-faq__button"
        :class="{ 'is-open': openItem === index }"
        @click="toggleOpen(index)"
      >
        <div class="invoice-faq__button-content">
          <span class="faq-number">{{ index + 1 }}</span>
          <span class="faq-title">{{ item.title }}</span>
        </div>
        <Icon
          :name="
            openItem === index
              ? 'heroicons:chevron-up'
              : 'heroicons:chevron-down'
          "
          size="24"
        />
      </button>
      <div v-if="openItem === index" class="">
        <p class="faq-content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const openItem = ref(null);

const toggleOpen = (index) => {
  openItem.value = openItem.value === index ? null : index;
};
</script>