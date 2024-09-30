<template>
  <div>
    <HeaderMain
      classes="plain-header"
      logo="/img/logo-color.svg"
      globalIconSrc="/img/icon/global-icon-black.svg"
    />
    <PricingHero />
    <PricingTable />
    <PricingMobilePricing />
    <PricingAds />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "footer",
});
</script>