<template>
  <div>
    <HeaderMain
      classes="about-us-header"
      logo="/img/logo-color.svg"
      globalIconSrc="/img/icon/global-icon-black.svg"
    />
    <AboutHero />
    <AboutJourney />
    <AboutMission />
    <AboutCompanyData />
    <AboutEvolution />
    <AboutLeadership />
    <AboutCareers />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "footer",
});
</script>

<style>
</style>