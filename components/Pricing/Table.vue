<template>
  <div class="pricing-table">
    <div class="pricing-table__inner">
      <div class="pricing-table__header">
        <div class="pricing-table__header-item"></div>

        <div class="pricing-table__header-item">
          <div class="content">
            <h3>Standard Plan</h3>
            <p>Great for growing businesses</p>
          </div>

          <div class="image">
            <NuxtImg src="/img/standard-pricing.svg" />
          </div>

          <div class="price">₦60,000/year</div>

          <nuxt-link
            to="https://app.prokip.co/register"
            class="pricing-select-button"
          >
            Get Started Now
          </nuxt-link>

          <nuxt-link
            to="https://app.prokip.co/register"
            class="pricing-select-button-sec"
          >
            Start 30 Days Free Trial
          </nuxt-link>
        </div>

        <div class="pricing-table__header-item most-popular">
          <span class="most-popular-badge">Most Popular</span>
          <div class="content">
            <h3>Premium Plan</h3>
            <p>Great for established businesses</p>
          </div>

          <div class="image">
            <NuxtImg src="/img/premium-pricing.svg" />
          </div>

          <div class="price">₦80,000/year</div>

          <nuxt-link
            to="https://app.prokip.co/register"
            class="pricing-select-button"
          >
            Get Started Now
          </nuxt-link>
          <nuxt-link
            to="https://app.prokip.co/register"
            class="pricing-select-button-sec"
          >
            Start 30 Days Free Trial
          </nuxt-link>
        </div>

        <div class="pricing-table__header-item">
          <div class="content">
            <h3>Ultimate Plan</h3>
            <p>Maximize business impact with our most advanced features</p>
          </div>

          <div class="image">
            <NuxtImg src="/img/ultimate-pricing.svg" />
          </div>

          <div class="price">₦100,000/year</div>

          <nuxt-link
            to="https://app.prokip.co/register"
            class="pricing-select-button"
          >
            Get Started Now
          </nuxt-link>
          <nuxt-link
            to="https://app.prokip.co/register"
            class="pricing-select-button-sec"
          >
            Start 30 Days Free Trial
          </nuxt-link>
        </div>
      </div>
      <div class="pricing-table__features">
        <div class="pricing-table__features__title">
          <h3>Feature-based pricing</h3>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">Users</div>
          <div class="pricing-table__features__row-item">2</div>
          <div class="pricing-table__features__row-item">3</div>
          <div class="pricing-table__features__row-item">5</div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Business Location
          </div>
          <div class="pricing-table__features__row-item">1</div>
          <div class="pricing-table__features__row-item">2</div>
          <div class="pricing-table__features__row-item">3</div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Point of Sales
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Inventory Management
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Billing & Invoicing
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Marketing & CRM
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Payment Solutions
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Custom Settings
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">Production</div>
          <div class="pricing-table__features__row-item">—</div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">HRM/Payroll</div>
          <div class="pricing-table__features__row-item">—</div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
        </div>

        <div class="pricing-table__features__row">
          <div class="pricing-table__features__row-item title">
            Core Accounting
          </div>
          <div class="pricing-table__features__row-item">—</div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
          </div>
          <div class="pricing-table__features__row-item">
            <NuxtImg src="/img/icon/circle-check.svg" alt="check" />
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