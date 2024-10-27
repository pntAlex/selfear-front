<script setup lang="ts">
const { paintings } = usePaintingsStore();

const ROOT_CLASS = "paintings-marquee";
</script>

<template>
  <ol :class="`${ROOT_CLASS}`">
    <MarqueeItem
      v-for="({ title, cursor }, index) in paintings"
      :key="index"
      :item="true"
      :link="`/paintings/${title}`"
      :cursor
      :title
    />
  </ol>
</template>

<style scoped lang="scss">
.paintings-marquee {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(3px) grayscale(1);
}
</style>
