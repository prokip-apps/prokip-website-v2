<template>
  <div class="invoicing__get-started">
    <div class="invoicing__get-started__inner flex-wrapper">
      <div class="invoicing__get-started__image item mobile-order-2">
        <NuxtImg src="/img/add-contact-image.png" alt="Get Started" />
      </div>
      <div class="invoicing__get-started__content item mobile-order-1">
        <SectionTitle title="How to get started" />
        <h2>
          It's Simple. <br />
          Here’s how it works
        </h2>

        <FAQ :items="faqItems" />

        <TheButton
          title="Get started now"
          link="https://app.prokip.co/register"
          classes="hero-btn"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const faqItems = [
  {
    title: "Create New Invoice",
    content: "Add customer information and items they are paying for.",
  },
  {
    title: "Send invoice to customer",
    content:
      "Once the invoice is created, send it to the customer via email or other preferred method.",
  },
  {
    title: "Follow up payments",
    content: "Track and follow up on any outstanding payments from customers.",
  },
  {
    title: "Get Paid online or Offline",
    content:
      "Provide options for customers to pay either online through a payment gateway or offline methods.",
  },
];
</script>

<style>
</style>