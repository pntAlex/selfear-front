<script setup>
import paintings from '~/assets/data/paintings.json'
const emit = defineEmits(['cursorChange'])

const route = useRoute()
const ROOT_CLASS = "painting";

// TODO fetch
const painting = paintings.find((painting) => painting?.title === route?.params?.title)
const { alt, src, title, date, dimensions, support, paint_type, cursor } = painting

useSeoMeta({
    title: `${title} - Selfear | Peintre Fluo-Phosphorescent`,
    description: `Peinture ${title}`
})
</script>

<template>
    <section :class="`${ROOT_CLASS}`">
        <NuxtImg :class="`${ROOT_CLASS}__image`" :alt="alt" :src="src" />
        <section :class="`${ROOT_CLASS}__content column-border column-border-left`">
            <div :class="`${ROOT_CLASS}__content__headings`">
                <span :class="`${ROOT_CLASS}__content__headings__date`">{{ date }}</span>
                <h1 :class="`${ROOT_CLASS}__content__headings__title`">{{ title }}</h1>
            </div>
            <div :class="`${ROOT_CLASS}__content__info`">
                <p>{{ paint_type }}</p>
                <span>{{ support }} - {{ dimensions }}</span>
            </div>
        </section>
        <aside @mouseenter="emit('cursorChange', cursor)" :class="`${ROOT_CLASS}__aside`">
            <nav>
            </nav>
        </aside>
    </section>
</template>

<style lang="scss" scoped>
.painting {
    position: relative;
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    grid-template-rows: 90vh auto;
    grid-template-areas: '. .' 'content aside';

    &__image {
        position: fixed;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }

    &__content {
        position: relative;
        background-color: white;
        z-index: 10;
        min-height: 100vh;
        grid-area: content;
        padding: 5rem;
        display: grid;
        grid-template-areas: "heading heading" "content content";
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto 1fr;
        padding: 10% calc(5vw + (1/12 * 100vw));

        &:after {
            content: "";
            display: block;
            width: 2.5vw;
            aspect-ratio: 1;
            position: absolute;
            background-color: var(--dark-bg);
            top: 2.5%;
            left: 2.5%;

        }

        &__headings {
            grid-area: heading;
            color: var(--dark-bg);

            &__date {
                color: lightgray
            }

            &__title {
                text-transform: uppercase;
                font-weight: bold;
                font-size: 3em;
                margin: 0;
            }
        }

        &__info {
            grid-area: content;
            color: lightgray
        }
    }

    &__aside {
        grid-area: aside;
    }
}
</style>
