<template>
  <div class="spinner"></div>
</template>

<script setup>
</script>

<style>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: #dbdcef;
  border-right-color: #ffffff;
  animation: spinner-d3wgkg 1s infinite linear;
}

@keyframes spinner-d3wgkg {
  to {
    transform: rotate(1turn);
  }
}
</style>