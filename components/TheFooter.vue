<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__inner__top">
        <div class="footer__inner__company">
          <div class="footer__inner__company-info">
            <div class="logo">
              <img src="/img/logo-color.svg" alt="logo" />
            </div>
            <p>
              Be the first to receive all the recent updates, articles, and
              valuable materials.
            </p>
          </div>
          <div class="footer__inner__newletter-email">
            <form action="">
              <input type="email" placeholder="Email address" />
              <button type="submit" class="subscribe">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer__inner__top__links">
          <div class="footer__inner__top__links__column">
            <h3>Products</h3>
            <ul>
              <li>
                <NuxtLink
                  to="/crm"
                  class="footer__inner__top__links__column__link"
                >
                  CRM
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/invoice"
                  class="footer__inner__top__links__column__link"
                  >Invoicing</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/pos"
                  class="footer__inner__top__links__column__link"
                  >Point of Sales</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/report"
                  class="footer__inner__top__links__column__link"
                >
                  Report</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/inventory-management"
                  class="footer__inner__top__links__column__link"
                  >Inventory Management</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div class="footer__inner__top__links__column">
            <h3>Company</h3>
            <ul>
              <li>
                <NuxtLink
                  to="/about-us"
                  class="footer__inner__top__links__column__link"
                >
                  About us</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/pricing"
                  class="footer__inner__top__links__column__link"
                  >Pricing</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/pos-desktop-app"
                  class="footer__inner__top__links__column__link"
                  >Download Desktop App</NuxtLink
                >
              </li>

              <li>
                <NuxtLink
                  to="/careers"
                  class="footer__inner__top__links__column__link"
                >
                  Careers
                </NuxtLink>
                <span class="hiring">We’re hiring</span>
              </li>

              <li>
                <NuxtLink
                  to="/contact-us"
                  class="footer__inner__top__links__column__link"
                >
                  Contact us</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div class="footer__inner__top__links__column">
            <h3>Resources</h3>
            <ul>
              <li>
                <NuxtLink
                  to="https://blog.prokip.com"
                  class="footer__inner__top__links__column__link"
                >
                  Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/faq"
                  class="footer__inner__top__links__column__link"
                  >FAQ</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="https://knowledge-base.prokip.com"
                  class="footer__inner__top__links__column__link"
                  >Help centre</NuxtLink
                >
              </li>

              <li>
                <NuxtLink
                  to="/privacy-policy"
                  class="footer__inner__top__links__column__link"
                  >Privacy policy</NuxtLink
                >
              </li>

              <li>
                <NuxtLink
                  to="/data-protection"
                  class="footer__inner__top__links__column__link"
                  >Data Protection</NuxtLink
                >
              </li>

              <li>
                <NuxtLink
                  to="/terms-and-condition"
                  class="footer__inner__top__links__column__link"
                  >Terms and privacy</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__inner__bottom">
        <div class="footer__inner__bottom__copyright">
          © Copyright {{ currentYear }} Prokip. All rights reserved.
        </div>
        <div class="footer__inner__bottom__socials">
          <a
            href="https://web.facebook.com/prokipapp"
            class="footer__inner__bottom__socials__item"
            target="_blank"
          >
            <img src="/img/icon/facebook.svg" alt="facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/prokipapp/"
            class="footer__inner__bottom__socials__item"
            target="_blank"
          >
            <img src="/img/icon/linkedin.svg" alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/prokipapp/"
            class="footer__inner__bottom__socials__item"
            target="_blank"
          >
            <img src="/img/icon/instagram.svg" alt="instagram" />
          </a>
          <a
            href="https://www.youtube.com/@prokipapp"
            class="footer__inner__bottom__socials__item"
            target="_blank"
          >
            <img src="/img/icon/youtube.svg" alt="youtube" />
          </a>
        </div>
        <div class="footer__inner__bottom__right">
          <HeaderCountrySelector />
          <div class="to-top" @click="scrollToTop">
            <img src="/img/icon/arrow-up.svg" alt="arrow-up" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style>
</style>