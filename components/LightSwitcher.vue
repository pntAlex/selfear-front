<script setup>
const ROOT_CLASS = "light-switcher";
</script>

<template>
  <div :class="ROOT_CLASS">
    <!-- <span>A</span>
        <span>B</span> -->
  </div>
</template>

<style scoped>
.light-switcher {
  position: fixed;
  inset: auto calc(50% - 5ch) 2vh;
  margin: 0 auto;
  background-color: var(--light);
  border-radius: 2ch;
  width: 10ch;
  height: 3ch;
  display: flex;
  z-index: 1000;
}

.light-switcher>span {
  flex: 1;
  display: flex;
  place-items: center;
  place-content: center;
  border-radius: 2ch;
}
</style>
