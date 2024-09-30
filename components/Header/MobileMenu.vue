<template>
  <div class="mobile-menu">
    <div class="mobile-menu__box">
      <div class="mobile-menu__links">
        <HeaderDropDown title="Products" :items="products" />

        <div class="item dropdown">
          <nuxt-link to="/pricing" class="mobile-menu__links__link"
            >Pricing</nuxt-link
          >
        </div>

        <HeaderDropDown title="Platforms" :items="platform" />

        <HeaderDropDown title="Company" :items="company" />

        <NuxtLink
          to="https://app.prokip.co/login"
          target="_blank"
          class="mobile-menu__login"
          >Login</NuxtLink
        >

        <HeaderCountrySelector
          globalIconSrc="/img/icon/global-icon-black.svg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const close = () => {
  emit("close");
};

const products = [
  {
    title: "CRM",
    link: "/crm",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Invoice",
    link: "/invoice",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Point of Sale",
    link: "/pos",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Report",
    link: "/report",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Inventory Management",
    link: "/inventory-management",
    text: "lorem ipsum dolor mans knshja skwa",
  },
];

const company = [
  {
    title: "About Us",
    link: "/about-us",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Careers",
    link: "/careers",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
    text: "lorem ipsum dolor mans knshja skwa",
  },
];

const platform = [
  {
    title: "Desktop App",
    link: "/pos-desktop-app",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Mobile App",
    link: "/",
    text: "lorem ipsum dolor mans knshja skwa",
  },
];
</script>
