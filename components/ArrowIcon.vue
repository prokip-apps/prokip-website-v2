<!-- ArrowIcon.vue -->
<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.58594 10.9997H17.4193M17.4193 10.9997L11.0026 4.58301M17.4193 10.9997L11.0026 17.4163"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 22,
    },
    height: {
      type: [Number, String],
      default: 22,
    },
    color: {
      type: String,
      default: "#011530",
    },
  },
};
</script>