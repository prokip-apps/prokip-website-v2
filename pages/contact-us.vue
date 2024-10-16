<template>
  <div>
    <div class="demo-page">
      <div class="demo-page__inner">
        <div class="demo-page__inner__content">
          <h1>Contact Us</h1>
          <p>
            We're here to assist you with any questions or concerns you may have
          </p>

          <div class="contact">
            <nuxt-link to="/faq" class="contact_item">
              <NuxtImg src="/img/icon/question-icon.svg" alt="phone" />
              <h5>Have a questions?</h5>
              <p>
                Check out our FAQ section for quick answers to common inquiries
              </p>
            </nuxt-link>

            <nuxt-link
              to="https://blog.prokip.africa"
              target="_blank"
              class="contact_item"
            >
              <NuxtImg src="/img/icon/blog-icon.svg" alt="phone" />
              <h5>Stay Updated</h5>
              <p>
                Follow the Prokip Blog for the latest news and trends in
                business management.
              </p>
            </nuxt-link>
          </div>
        </div>

        <div class="demo-page__inner__form">
          <div class="demo-page__inner__form__title">
            <h3>Contact Us</h3>
          </div>

          <div class="demo-page__inner__form-wrapper">
            <form action="">
              <div class="grid-2-space-16">
                <div class="form-group">
                  <label for="name">First name</label>
                  <input type="text" id="name" />
                </div>

                <div class="form-group">
                  <label for="name">Last name</label>
                  <input type="text" id="name" />
                </div>
              </div>

              <div class="form-group">
                <label for="name">Email address</label>
                <input type="text" id="name" />
              </div>

              <div class="form-group">
                <label for="name">Phone number</label>
                <input type="text" id="name" />
              </div>

              <div class="form-group">
                <label for="name">Message</label>
                <textarea name="" id=""></textarea>
              </div>
            </form>

            <button type="submit" class="form-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-contacts">
      <div class="demo-contacts__inner">
        <div class="demo-contacts__inner__content">
          <h3>Contact sales by phone</h3>
          <div class="contact-list">
            <div class="contact-item">
              <div class="head">
                <NuxtImg src="/img/icon/ng-flag.svg" alt="phone" />
                <h5>Nigeria (HQ)</h5>
              </div>
              <nuxt-link to="tel:+2341234567890" class="contact-link"
                >+234 123 456 7890</nuxt-link
              >
            </div>

            <div class="contact-item">
              <div class="head">
                <NuxtImg src="/img/icon/gh-flag.svg" alt="phone" />
                <h5>Ghana</h5>
              </div>
              <nuxt-link to="tel:+2330551135479" class="contact-link"
                >+233 055 113 5479</nuxt-link
              >
            </div>

            <div class="contact-item">
              <div class="head">
                <NuxtImg src="/img/icon/ke-flag.svg" alt="phone" />
                <h5>Kenya</h5>
              </div>
              <nuxt-link to="tel:+254715231635" class="contact-link"
                >+254 715 231 635</nuxt-link
              >
            </div>

            <div class="contact-item">
              <div class="head">
                <NuxtImg src="/img/icon/ug-flag.svg" alt="phone" />
                <h5>Uganda</h5>
              </div>
              <nuxt-link to="tel:+2567672028056" class="contact-link"
                >+256 767 202 8056</nuxt-link
              >
            </div>

            <div class="contact-item">
              <div class="head">
                <NuxtImg src="/img/icon/rw-flag.svg" alt="phone" />
                <h5>Rwanda</h5>
              </div>
              <nuxt-link to="tel:+250793486509" class="contact-link"
                >+250 793 486 509</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>