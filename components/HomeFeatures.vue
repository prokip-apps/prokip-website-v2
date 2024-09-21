<template>
  <div class="home-features">
    <div class="home-features__inner">
      <div class="home-features__inner__item">
        <div class="home-features__inner__item__content">
          <div class="home-features__inner__item__content__title">
            <div class="text">Point of Sales</div>
            <div class="underline"></div>
          </div>
          <h2>Automate your selling Process</h2>
          <p>
            Reduce queue & Attend to customers faster using any type of
            Printers, barcode scanners, cash drawer & POS Terminals with dynamic
            pricing options and payment methods.
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
          <h2>Manage & Keep Track of your inventory</h2>
          <p>
            Maintain total control of all your products and know exactly how
            many are left, sold or about to finish and expire across all your
            business locations and warehouse.
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
          <h2>Make better decisions with reports that matters.</h2>
          <p>
            Analyse sales performance, inventory levels, Low and fast moving
            products with standard reports and insights required to helps your
            business grow.
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
          <h2>Send better invoices and get paid Faster</h2>
          <p>
            Send customizable invoices in your brand name and get paid in
            multiple currencies 
            <br />
            Your clients can view invoices instantly and pay online from
            anywhere with Email and SMS due Reminders.
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
          <h2>Robust and easy Accounting.</h2>
          <p>
            Manage your accounts, Reconcile payments, Track profits and loss,
            know your business financial positions and gain clarity across all
            your business locations.
          </p>

          <TheButton title="Learn more" link="/" classes="btn-secondary" />
        </div>
        <div class="home-features__inner__item__image">
          <NuxtImg src="/img/point-of-sale-preview.png" alt="Home Features" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>