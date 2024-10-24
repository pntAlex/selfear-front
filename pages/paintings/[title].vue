<script setup>
const { $gsap } = useNuxtApp()

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

onMounted(() => {
    _initAnimations()
})

const _initAnimations = () => {
    const paintingsPicture = `.${ROOT_CLASS}__content__paintings li div`
    const nav = `.${ROOT_CLASS}__nav`
    const navChildren = `.${ROOT_CLASS}__nav__wrapper *`;

    const content = `.${ROOT_CLASS}__content`
    const titleLetters = `.${ROOT_CLASS}__content__headings span, .${ROOT_CLASS}__content__info span`

    const initObservers = () => {
        const animatePicture = (el) => {
            $gsap.to(el, { scaleX: 0, duration: 1, ease: "power3.inOut" });
        }

        const animateNav = () => {
            const navTl = $gsap.timeline()

            navTl
                .to(nav, { "--nav-separator-scale": 1, duration: 1.2, ease: "power3.inOut" })
                .fromTo(navChildren, { autoAlpha: 0, translateX: '-2rem' }, { autoAlpha: 1, translateX: "0", duration: 0.5, stagger: 0.2 })
        }

        const pictureObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatePicture(entry.target)
                    pictureObserver.unobserve(entry.target);
                }
            });
        });

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNav()
                    navObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll(paintingsPicture).forEach(item => {
            pictureObserver.observe(item);
        });

        navObserver.observe(document.querySelector(nav));
    }

    const initAbsolute = () => {
        const contentTl = $gsap.timeline({ defaults: { ease: "power3.inOut" } });

        contentTl
            .to(content, { "--square-size": "1.5rem", duration: 1 })
            .to(content, { "--border-size": 1, duration: 1 })
            .fromTo(titleLetters, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.15, stagger: 0.03 }, '<')
    }

    initAbsolute()
    initObservers()
}

const cursorPath = ref(`url(${nextPaintingCursor})`)

</script>

<template>
    <section v-if="painting" :class="`${ROOT_CLASS}`">
        <NuxtImg data-scroll-scale="1.05" data-scroll-end="max" :class="`${ROOT_CLASS}__image`" :alt
            :src="src_full ?? src" />

        <section :class="`${ROOT_CLASS}__content column-border column-border-left column-border-padded`">
            <div :class="`${ROOT_CLASS}__content__headings`">
                <span :class="`${ROOT_CLASS}__content__ headings__date`">{{ date }}</span>
                <h1 v-text-splitted :class="`${ROOT_CLASS}__content__headings__title`">{{ title }}</h1>
            </div>

            <div :class="`${ROOT_CLASS}__content__info`">
                <span v-text-splitted>{{ paint_type }}</span>
                <span v-text-splitted>{{ support }}</span>
                <span v-text-splitted>{{ dimensions }}</span>
            </div>

            <ul :class="`${ROOT_CLASS}__content__paintings`" v-if="pictures?.length">
                <li v-for="({ src, alt }) in pictures">
                    <div aria-hidden="true" />
                    <NuxtImg :src :alt loading="lazy" />
                </li>
            </ul>

            <!-- <nav> -->
            <nav :class="`${ROOT_CLASS}__nav`">
                <NuxtLink :class="`${ROOT_CLASS}__nav__wrapper`" @mouseover="setCursorImage(nextPaintingCursor)"
                    @mouseleave="setCursorImage(cursor)" replace :to="`/paintings/${nextPaintingTitle}`">
                    <span :class="`${ROOT_CLASS}__nav__disclaimer`">Voir aussi</span>
                    <span :class="`${ROOT_CLASS}__nav__next-painting typed`">
                        {{ nextPainting.title }}
                    </span>
                    <Icon :class="`${ROOT_CLASS}__nav__next`" name="ic:sharp-keyboard-arrow-right"
                        style="color: black" />
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

    @media screen and (max-width: 768px) {
        grid-template-rows: 50vh auto;
        grid-template-columns: 3fr 1fr;
    }

    &__image {
        position: fixed;
        height: 100vh;
        width: 100vw;
        object-fit: cover;
        z-index: -1;
    }

    &__content {
        --border-size: 0;
        --square-size: 1rem;

        position: relative;
        background-color: var(--light);
        z-index: 10;
        grid-area: content;
        display: grid;
        gap: 2rem;
        padding-right: 5vw;

        &:before {
            transform-origin: top center;
            transform: scaleY(var(--border-size));
        }

        &:after {
            content: "";
            display: block;
            width: var(--square-size);
            aspect-ratio: 1;
            position: absolute;
            background-color: var(--dark);
            top: calc((5vw - 2.5vw) / 2);
            left: calc((5vw - 2.5vw) / 2);
        }

        &__headings {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            color: var(--dark);

            &__date {
                color: var(--dark)
            }

            &__title {
                @include middle-text;

                letter-spacing: 0.1em;
                margin: 0;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;



            &>* {
                color: var(--dark);
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
            list-style: none;

            li {
                position: relative;
                width: 80%;

                div {
                    background-color: var(--light);
                    position: absolute;
                    inset: 0;
                }

                img {
                    width: 100%
                }

                &:nth-child(odd) {
                    align-self: flex-start;

                    div {
                        transform-origin: left;
                    }
                }

                &:nth-child(even) {
                    align-self: flex-end;

                    div {
                        transform-origin: right;
                    }
                }
            }
        }
    }

    &__nav {
        --nav-separator-scale: 0;

        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        &:before {
            content: "";
            display: block;
            height: 2px;
            width: 100%;
            opacity: 0.15;
            background-color: var(--dark);
            transform-origin: left;
            transform: scaleX(var(--nav-separator-scale))
        }

        &__wrapper {
            display: grid;
            grid-template-areas: "preview see next" "preview painting next";
            place-content: flex-end;
            row-gap: 0.5rem;
            align-self: flex-end;
            text-decoration: none;

            &:before {
                content: "";
                display: block;
                grid-area: preview;
                width: 1.5rem;
                aspect-ratio: 1;
                align-self: center;
                margin-right: 1rem;

                background: v-bind(cursorPath) center;
                background-size: contain;
                background-repeat: no-repeat;
                opacity: 0;
                visibility: hidden;
                transform: translateX(-1ch);
                transition: transform 0.2s, opacity 0.2s;

                @media screen and (max-width: 768px) {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(0);
                }
            }

            &:hover:before {
                opacity: 1;
                visibility: visible;
                transform: translateX(0)
            }
        }


        &__next-painting {
            @include small-text;

            grid-area: painting;
            display: inline-flex;
            text-decoration: none;
            gap: 1ch;
            align-items: center;
            justify-content: flex-end;
            text-align: end;
            color: var(--dark);
            letter-spacing: 0.1em;
        }

        &__disclaimer {
            grid-area: see;
            place-self: flex-end;
            color: var(--border-color);
        }

        &__next {
            grid-area: next;
            font-size: 3rem;
            place-self: center;
        }
    }
}
</style>
