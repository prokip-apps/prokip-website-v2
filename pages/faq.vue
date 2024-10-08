<template>
  <div>
    <HeaderMain
      classes="plain-header"
      logo="/img/logo-color.svg"
      globalIconSrc="/img/icon/global-icon-black.svg"
    />

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
      "Prokip is an all-in-one business management solution, integrating bookkeeping, point-of-sale systems, inventory management, accounting, CRM, and more, tailored for businesses like yours across Africa.",
  },
  {
    title: "Can Prokip notify me about expiring items in my shop?",
    content:
      "Yes, Prokip has a stock expiry feature that alerts business owners when products are close to expiring. You can set the notification date—whether two weeks or one week before the expiry. With Prokip, you're always in control of your inventory.",
  },
  {
    title: "Does Prokip require an internet connection?",
    content:
      "Prokip is both an online and offline business management software, offering flexibility in accounting and inventory management. It can be used with or without internet access, ensuring seamless operations regardless of your connection status.",
  },
  {
    title: "How can Prokip help my business grow?",
    content:
      "Prokip provides customizable reports that offer valuable insights into your business's financial health. These reports enable you to make informed decisions, pinpoint areas for improvement, and track your progress over time. By understanding your financial data better, you can implement strategies that promote growth and optimize your operations.",
  },
  {
    title: "Why should I choose Prokip?",
    content:
      "Prokip stands out from other software with its comprehensive features, including CRM, invoicing, inventory management, sales commissions, and agent management, all designed to enhance your business operations. While similar software may come at a higher cost, Prokip offers these essential tools at an affordable price, providing exceptional value for your investment. <br /><br />  By choosing Prokip, you gain access to a powerful suite of features that can streamline your processes and support your growth without breaking the bank",
  },
];

const openItem = ref(null);

const toggleOpen = (index) => {
  openItem.value = openItem.value === index ? null : index;
};
</script>

<style>
</style>