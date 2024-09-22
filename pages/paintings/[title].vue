<script setup>
import paintings from '~/assets/data/paintings.json'
const emit = defineEmits(['cursorChange'])

const route = useRoute()
const ROOT_CLASS = "painting";

// TODO fetch
const paintingIndex = paintings.findIndex((painting) => painting?.title === route?.params?.title)
const painting = paintings[paintingIndex]
const nextPainting = paintings[(paintingIndex + 1) % paintings.length]

const { alt, src, src_full, title, date, dimensions, support, paint_type, cursor, pictures } = painting
const { cursor: nextPaintingCursor, title: nextPaintingTitle } = nextPainting

useSeoMeta({
    title: `${title} - Selfear | Peintre Fluo-Phosphorescent`,
    description: `Peinture ${title}`
})
</script>

<template>
    <section :class="`${ROOT_CLASS}`">
        <NuxtImg :class="`${ROOT_CLASS}__image`" :alt :src="src_full ?? src" />

        <section :class="`${ROOT_CLASS}__content column-border column-border-left column-border-padded`">
            <div :class="`${ROOT_CLASS}__content__headings`">
                <span :class="`${ROOT_CLASS}__content__headings__date`">{{ date }}</span>
                <h1 :class="`${ROOT_CLASS}__content__headings__title`">{{ title }}</h1>
            </div>

            <div :class="`${ROOT_CLASS}__content__info`">
                <p>{{ paint_type }}</p>
                <!-- <span>{{ support }} - {{ dimensions }}</span> -->
                <span>{{ support }}</span>
                <span>{{ dimensions }}</span>
            </div>

            <ul :class="`${ROOT_CLASS}__content__paintings`" v-if="pictures?.length">
                <li v-for="({ src, alt }) in pictures">
                    <NuxtImg :src :alt loading="lazy" />
                </li>
            </ul>
        </section>

        <aside @mouseenter="emit('cursorChange', cursor)" :class="`${ROOT_CLASS}__aside`">
            <nav>
                <NuxtLink :class="`${ROOT_CLASS}__aside__nav__next`" :to="`/paintings/${nextPaintingTitle}`">
                </NuxtLink>
            </nav>
        </aside>
    </section>
</template>

<style lang="scss" scoped>
.painting {
    position: relative;
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    grid-template-rows: 75vh auto;
    grid-template-areas: '. .' 'content aside';

    &__image {
        position: fixed;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        z-index: -1;
    }

    &__content {
        position: relative;
        background-color: white;
        z-index: 10;
        min-height: 100vh;
        grid-area: content;
        display: grid;
        grid-template-areas: "heading heading" "content content";
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto 1fr;
        gap: 2rem;

        &:after {
            content: "";
            display: block;
            width: 2.5vw;
            aspect-ratio: 1;
            position: absolute;
            background-color: var(--dark);
            top: 2.5%;
            left: 2.5%;
        }

        &__headings {
            grid-area: heading;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            color: var(--dark);

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
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            &>* {
                color: gray;
                margin: 0;
            }
        }

        &__paintings {
            margin: 0;
            padding: 0;
        }
    }

    &__aside {
        grid-area: aside;

        &__nav {
            &__next {
                width: 3ch;
                aspect-ratio: 1;
                border-radius: 4ch;
                border: 1px solid black;
                backdrop-filter: blur(5px);
                border: 1px solid lightgrey;
                position: fixed;
                right: 2vw;
                top: 50%;
            }
        }
    }
}
</style>
