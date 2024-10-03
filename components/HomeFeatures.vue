<template>
  <div class="home-features">
    <div class="home-features__inner">
      <!-- <div class="home-features__title">
        <h2>All you need in one place</h2>
      </div> -->

      <div class="home-features__inner__item">
        <div class="home-features__inner__item__content">
          <div class="home-features__inner__item__content__title">
            <div class="text">Point of Sales</div>
            <div class="underline"></div>
          </div>
          <h2>Automate your selling process</h2>
          <p>
            Reduce queues and attend to customers faster using any type of
            printer, barcode scanner, cash drawer, and POS terminals, all with
            dynamic pricing options and multiple payment methods.
          </p>

          <TheButton title="Learn more" link="/pos" classes="btn-secondary" />
        </div>
        <div class="home-features__inner__item__image">
          <NuxtImg src="/img/point-of-sale-preview.png" alt="Home Features" />
        </div>
      </div>

      <div class="home-features__inner__item">
        <div class="home-features__inner__item__content order-2">
          <div class="home-features__inner__item__content__title">
            <div class="text">Inventory Management</div>
            <div class="underline"></div>
          </div>
          <h2>Manage & Keep Track of your Inventory</h2>
          <p>
            Maintain complete control of all your products and know exactly how
            many are left, sold, or about to run out and expire across all your
            business locations and warehouses.
          </p>

          <TheButton
            title="Learn more"
            link="/inventory-management"
            classes="btn-secondary"
          />
        </div>
        <div class="home-features__inner__item__image order-1">
          <NuxtImg
            src="/img/inventory-management-preview.png"
            alt="Home Features"
          />
        </div>
      </div>

      <div class="home-features__inner__item">
        <div class="home-features__inner__item__content">
          <div class="home-features__inner__item__content__title">
            <div class="text">Reports</div>
            <div class="underline"></div>
          </div>
          <h2>Make better decisions with reports that matters</h2>
          <p>
            Leverage detailed insights to analyze sales performance, track
            inventory levels, and identify low and fast-moving products,
            empowering you to make informed decisions that drive business
            growth.
          </p>

          <TheButton
            title="Learn more"
            link="/report"
            classes="btn-secondary"
          />
        </div>
        <div class="home-features__inner__item__image">
          <NuxtImg src="/img/reports-preview.png" alt="Home Features" />
        </div>
      </div>

      <div class="home-features__inner__item">
        <div class="home-features__inner__item__content order-2">
          <div class="home-features__inner__item__content__title">
            <div class="text">Invoices</div>
            <div class="underline"></div>
          </div>
          <h2>Send better invoices and get paid faster</h2>
          <p>
            Send personalized invoices featuring your brand name and accept
            payments in multiple currencies. Your clients can instantly view
            their invoices and make payments online from anywhere, with email
            and SMS reminders for due dates.
          </p>

          <TheButton
            title="Learn more"
            link="/invoice"
            classes="btn-secondary"
          />
        </div>
        <div class="home-features__inner__item__image order-1">
          <NuxtImg src="/img/invoice-preview.png" alt="Home Features" />
        </div>
      </div>

      <div class="home-features__inner__item">
        <div class="home-features__inner__item__content">
          <div class="home-features__inner__item__content__title">
            <div class="text">Accounting</div>
            <div class="underline"></div>
          </div>
          <h2>Robust and easy Accounting</h2>
          <p>
            Efficiently manage your accounts, reconcile payments, and track
            profits and losses to understand your business's financial position
            and gain clarity across all locations.
          </p>

          <TheButton title="Learn more" link="/" classes="btn-secondary" />
        </div>
        <div class="home-features__inner__item__image">
          <NuxtImg src="/img/accounting-preview.png" alt="Home Features" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>