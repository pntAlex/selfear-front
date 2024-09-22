<script setup>
const props = defineProps(['paintings'])
const emit = defineEmits(['cursorChange'])

const ROOT_CLASS = "paintings-marquee"
</script>

<template>
    <ol :class="`${ROOT_CLASS}`" @mouseleave="emit('cursorChange', null)">
        <Marquee v-for="(painting, index) in paintings" :key="index" @mouseenter="emit('cursorChange', painting.cursor)"
            :title="painting.title" :item="true" :link="`/paintings/${painting.title}`" :cursor="painting.cursor" />
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