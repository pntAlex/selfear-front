<script setup>
const ROOT_CLASS = "painting";

const { getPaintingByTitle, getNextPainting } = usePaintingsStore();
const { setCursorImage } = useCursorStore()

const route = useRoute()

const { index, painting } = getPaintingByTitle(route?.params?.title)
const { alt, src, src_full, title, date, dimensions, support, paint_type, cursor, pictures } = painting

const nextPainting = getNextPainting(index)
const { cursor: nextPaintingCursor, title: nextPaintingTitle } = nextPainting

useSeoMeta({
    title: `${title} - Selfear | Peintre Fluo-Phosphorescent`,
    description: `Peinture ${title}`
})

setCursorImage(cursor)

</script>

<template>
    <section v-if="painting" :class="`${ROOT_CLASS}`">
        <NuxtImg data-scroll-scale="1.05" data-scroll-end="max" :class="`${ROOT_CLASS}__image`" :alt
            :src="src_full ?? src" />

        <section :class="`${ROOT_CLASS}__content column-border column-border-left column-border-padded`">
            <div :class="`${ROOT_CLASS}__content__headings`">
                <span :class="`${ROOT_CLASS}__content__headings__date`">{{ date }}</span>
                <h1 v-text-splitted :class="`${ROOT_CLASS}__content__headings__title`">{{ title }}</h1>
            </div>

            <div :class="`${ROOT_CLASS}__content__info`">
                <span>{{ paint_type }}</span>
                <span>{{ support }}</span>
                <span>{{ dimensions }}</span>
            </div>

            <ul :class="`${ROOT_CLASS}__content__paintings`" v-if="pictures?.length">
                <li v-for="({ src, alt }) in pictures">
                    <NuxtImg :src :alt loading="lazy" />
                </li>
            </ul>

            <!-- <nav> -->
            <nav :class="`${ROOT_CLASS}__nav`">
                <span :class="`${ROOT_CLASS}__nav__disclaimer`">Voir aussi</span>
                <NuxtLink @mouseover="setCursorImage(nextPaintingCursor)" @mouseleave="setCursorImage(cursor)"
                    :class="`${ROOT_CLASS}__nav__next typed`" replace :to="`/paintings/${nextPaintingTitle}`">{{
                        nextPainting.title }}
                </NuxtLink>
            </nav>


            <!-- </nav> -->
        </section>

        <!-- <aside :class="`${ROOT_CLASS}__aside`">
            <nav>
                <NuxtLink @mouseover="setCursorImage(nextPaintingCursor)" @mouseleave="setCursorImage(cursor)"
                    :class="`${ROOT_CLASS}__aside__nav__next`" replace :to="`/paintings/${nextPaintingTitle}`">
                </NuxtLink>
            </nav>
        </aside> -->
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
        grid-area: content;
        display: grid;
        // grid-template-areas: "heading heading" "content content";
        // grid-template-columns: 1fr;
        // grid-template-rows: auto 1fr;
        gap: 2rem;

        &.column-border-padded {
            padding-right: 5vw
        }

        &__headings {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            color: var(--dark);

            &__date {
                color: var(--light)
            }

            &__title {
                letter-spacing: 0.1em;
                font-size: 2.5rem;
                margin: 0;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;

            &>* {
                color: var(--light);
                margin: 0;
            }
        }

        &__paintings {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;

            li:nth-child(even) {
                align-self: flex-end;
            }

            img {
                width: 50ch
            }
        }
    }

    &__nav {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        border-top: 2px solid var(--light);
        margin-top: 3rem;
        padding-top: 1rem;
        gap: 0.4rem;

        &__next {
            display: inline-flex;
            font-size: 1.5rem;
            text-decoration: none;
            gap: 1ch;
            align-items: center;
            justify-content: flex-end;
            text-align: end;
            color: var(--dark);
            letter-spacing: 0.1em;

            &:before {
                content: "";
                display: block;
                width: 1ch;
                aspect-ratio: 1;
                background-color: black;
                transition: transform 0.2s, opacity 0.2s;
                opacity: 0;
                transform: translateX(-1ch)
            }

            &:hover:before {
                opacity: 1;
                transform: translateX(0)
            }
        }

        &__disclaimer {
            color: var(--light)
        }
    }

}
</style>
