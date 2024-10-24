<template>
  <div>
    <header class="header" :class="classes">
      <div class="header__nav">
        <div class="header__nav__left">
          <nuxt-link to="/" class="header__nav__logo">
            <NuxtImg :src="logo" alt="logo" class="logo mobile-logo" />
          </nuxt-link>

          <div class="header__nav__right">
            <div class="header__nav__link">
              <HeaderDropDown title="Solutions" :items="products" />

              <nuxt-link to="/pricing" class="header__nav__link--item"
                >Pricing</nuxt-link
              >

              <HeaderDropDown title="Platforms" :items="platform" />

              <HeaderDropDown title="Company" :items="company" />
            </div>
          </div>
        </div>

        <div class="header__nav__right hide-mobile">
          <TheButton
            link="https://app.prokip.co/login"
            title="Login"
            classes="btn-primary"
            target="_blank"
          />
          <HeaderCountrySelector :globalIconSrc="globalIconSrc" />
        </div>

        <button class="mobile-menu-btn" @click="ToggleShowMenu">
          <Icon
            :name="showMenu ? 'lucide:x' : 'lucide:menu'"
            class="menu-icon"
          />
        </button>
      </div>
    </header>

    <HeaderMobileMenu v-show="showMenu" @close="closeModal" />
  </div>
</template>

<script setup>
const showMenu = ref(false);

const ToggleShowMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeModal = () => {
  showMenu.value = false;
};

const props = defineProps({
  classes: {
    type: String,
    default: "",
  },

  logo: {
    type: String,
    default: "/img/logo.svg",
  },
  globalIconSrc: {
    type: String,
    default: "/img/icon/globe-icon.svg",
  },
});

const products = [
  {
    title: "CRM",
    link: "/crm",
    text: "lorem ipsum dolor mans knshja skwa",
  },
  {
    title: "Invoicing",
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
    title: "Mobile App (coming soon)",
    link: "/",
    text: "lorem ipsum dolor mans knshja skwa",
  },
];
</script>

<style>
</style>