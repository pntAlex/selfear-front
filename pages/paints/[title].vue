<script setup>
import paints from '~/assets/data/paints.json'

const route = useRoute()

const ROOT_CLASS = "paint";

const { title } = route.params
const paint = paints.find(paint => paint.title === title)

const { alt, src } = paint

useSeoMeta({
    title: `${title} - Selfear | Peintre Fluo-Phosphorescent`,
    description: `Peinture ${title}`
})

</script>

<template>
    <section :class="ROOT_CLASS">
        <NuxtImg :class="ROOT_CLASS + '__image'" :alt="alt" :src="src" />

        <section :class="`${ROOT_CLASS}__content`">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eligendi similique possimus ea labore
            sapiente nam earum at, pariatur, in error iusto doloribus esse aliquid ipsum ab quos tenetur voluptatibus.
        </section>
    </section>
</template>

<style lang="scss" scoped>
.paint {
    position: relative;
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    grid-template-rows: 90vh auto;
    grid-template-areas: '. .' 'content .';

    &__image {
        position: fixed;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }

    &__content {
        background-color: white;
        z-index: 10;
        min-height: 100vh;
        grid-area: content;
        padding: 5rem;
    }
}
</style>