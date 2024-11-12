<script setup lang="ts">

const { data: paintings } = useNuxtData('paintings')

const ROOT_CLASS = "paintings-marquee";
</script>

<template>
  <ol :class="`${ROOT_CLASS}`" v-if="paintings.data">
    <MarqueeItem v-for="({ id: key, name, slug, picture: { url: pictureURL } }) in paintings.data" :key :item="true"
      :link="`/paintings/${slug}`" :cursor="key" :name :pictureURL />
  </ol>
</template>

<style scoped>
.paintings-marquee {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(3px) grayscale(1);
}
</style>
