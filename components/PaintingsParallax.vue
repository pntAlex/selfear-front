<script setup>
const { $gsap } = useNuxtApp()
const { paintings } = usePaintingsStore()

const root = ref(null)

const ROOT_CLASS = "paintings-parallax"

onMounted(() => {
    if (root.value) {
        initGsap()
    }
})

const initGsap = () => {
    const textLetters = `.${ROOT_CLASS}__text span`

    $gsap.to(root.value, {
        '--column-scale-Y': 1,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: root.value,
            start: "-20%",
            end: "20%",
            scrub: true,
        },
    })

    $gsap.to(textLetters, {
        color: '#000000',
        // color: (_, el) => el.parentElement?.nodeName === 'STRONG' ? 'black' : '#000000',
        // "--wght": (_, el) => el.parentElement?.nodeName === 'STRONG' ? '400' : '200',
        stagger: 0.1, // Délai entre chaque lettre
        scrollTrigger: {
            trigger: root.value,
            start: '-20%', // Commence quand le haut de l'élément atteint 80% de la hauteur de la fenêtre
            end: '50%', // Termine quand le bas de l'élément atteint 20% de la hauteur de la fenêtre
            scrub: true, // Animation liée au scroll,
        }
    })
}
</script>

<template>
    <section ref="root" :class="`${ROOT_CLASS} column-border`">

        <div :class="`${ROOT_CLASS}__text__wrapper`">
            <p v-text-splitted :class="`${ROOT_CLASS}__text`">i'm a <strong>fluo and phospho</strong> acrylic painter,
                based in
                <strong>Tours, France</strong>
            </p>

            <p v-text-splitted :class="`${ROOT_CLASS}__text`">
                i exploit the potential of <strong>light exposure</strong> to
                approach <strong>different facets</strong> of the same
                painting.
            </p>

            <p v-text-splitted :class="`${ROOT_CLASS}__text`">
                relativity is <strong>key.</strong>
            </p>
        </div>

        <ul :class="`${ROOT_CLASS}__wrapper`">
            <li data-scroll-start="-30%" data-scroll-end="max" :data-scroll-speed="Math.random() * (1.4 - 0.8) + 0.8"
                v-for="({ src, alt }, index) in paintings" :key="index" :data-scroll-trigger-parent="`.${ROOT_CLASS}`">
                <NuxtImg loading="lazy" :alt :src />
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.paintings-parallax {
    --column-scale-Y: 0;
    --text-wrapper-scale: 0;

    height: 200vh;
    background: var(--light);
    position: relative;
    display: grid;
    place-items: center;
    place-content: center;
    overflow: hidden;
    z-index: 0;

    &:after,
    &:before {
        transform-origin: top center;
        transform: scaleY(var(--column-scale-Y))
    }

    &__text {
        text-align: center;
        max-width: 20ch;
        margin: 0;
        z-index: 1;

        &:nth-child(1) {
            z-index: 100;
        }

        &:nth-child(2) {
            z-index: 10;
        }

        &:nth-child(3) {
            z-index: 1;
        }

        strong {
            // color: var(--dark);
            font-weight: normal;
        }

        :deep(span) {
            --wght: 300; // @include hidden;

            font-variation-settings: "wght" var(--wght);
            transition: font-variation-settings 500ms;

            // &:hover {
            //     font-variation-settings: "wght" 800;
            // }
        }

        &__wrapper {
            font-size: 2.5em;
            padding: 0.5em;
            width: 30ch;
            z-index: 20;
            display: grid;
            position: absolute;
            inset: 0;
            width: 100%;
            grid-template-rows: repeat(3, 1fr);
            place-items: center;
            place-content: center;
        }
    }

    &__wrapper {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            position: absolute;
            z-index: 10;

            &:nth-of-type(odd) {
                left: 5%;
            }

            &:nth-of-type(even) {
                right: 5%;
            }

            // Radioactiv
            &:nth-of-type(1) {
                top: calc(20%);
                width: 350px;
            }

            // Staar
            &:nth-of-type(3) {
                top: calc(50%);
                width: calc(1 / 4 * 100vw);
            }

            // Eclectic
            &:nth-of-type(5) {
                top: calc(70%);
                width: calc(1 / 6 * 100vw);
            }

            // Self
            &:nth-of-type(7) {
                top: calc(100%);
                width: 600px;
            }

            // Spiraal
            &:nth-of-type(2) {
                top: calc(30%);
                width: 450px;
            }

            // Knowledge
            &:nth-of-type(4) {
                top: calc(60%);
                width: 350px;
            }

            // Penrose chaos
            &:nth-of-type(6) {
                top: calc(90%);
                width: 400px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>