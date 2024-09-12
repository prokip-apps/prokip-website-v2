<template>
  <div>
    <HeaderMain classes="plain-header" logo="/img/logo-color.svg" />
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