<template>
  <div>
    <HeaderMain classes="plain-header" logo="/img/logo-color.svg" />

    <div class="faq__inner">
      <div class="faq__accordion">
        <div v-for="(item, index) in items" :key="index" class="faq-item">
          <button
            class="faq-button"
            :class="{ 'is-open': openItem === index }"
            @click="toggleOpen(index)"
          >
            <div class="faq-button-content">
              <span class="faq-title">{{ item.title }}</span>
            </div>
            <div class="faq-button-icon">
              <Icon
                :name="
                  openItem === index
                    ? 'heroicons:chevron-up'
                    : 'heroicons:chevron-down'
                "
                size="18"
              />
            </div>
          </button>
          <div
            v-if="openItem === index"
            class="faq-content"
            v-html="item.content"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "footer",
});

const items = [
  {
    title: "What is Prokip?",
    content:
      "Prokip is a <a href='https://prokip.com'>platform</a> that allows you to manage your business. <br><br> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.</p> <ol><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ol>",
  },
  {
    title: "How do I send money to a bank account?",
    content: "Prokip is a platform that allows you to manage your business.",
  },
  {
    title: "How long does a transfers take with Prokip?",
    content: "Prokip is a platform that allows you to manage your business.",
  },
  {
    title: "How can I repeat a transfers?",
    content: "Prokip is a platform that allows you to manage your business.",
  },
  {
    title: "How can I check the status of my transfer?",
    content: "Prokip is a platform that allows you to manage your business.",
  },
];

const openItem = ref(null);

const toggleOpen = (index) => {
  openItem.value = openItem.value === index ? null : index;
};
</script>

<style>
</style>