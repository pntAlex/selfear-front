<script setup>
import paints from '~/assets/data/paints.json'

const emit = defineEmits(['cursorChange'])
const { $gsap } = useNuxtApp()

useSeoMeta({
    title: "Selfear | Peintre Fluo-Phosphorescent",
    description: "Explorez l'univers captivant de Selfear, artiste amateur en peinture fluo-phosphorescente. Plongez dans un spectacle de couleurs éblouissant et admirez la splendeur de l'exposition lumineuse !"
})

const ROOT_CLASS = "index";

onMounted(() => {
    loader()
})

const loader = () => {
    const mainHeading = `.${ROOT_CLASS}__headings__mask:nth-child(1) h1`;
    const mainHeadingLarge = `.${ROOT_CLASS}__headings__mask:nth-child(2) h1`
    const loaderWrapper = `.${ROOT_CLASS}__loader__progress`;
    const loader = `.${ROOT_CLASS}__loader__progress span`;
    const loaderImage = `.${ROOT_CLASS}__loader__image`;

    const loaderTL = $gsap.timeline();

    $gsap.to(loaderImage, {
        filter: "blur(0px) brightness(1)",
        duration: 5,
    });

    loaderTL
        .to(mainHeading, {
            yPercent: -100,
            duration: 1,
            ease: "power3.inOut",
        })
        .to(
            loaderWrapper,
            {
                opacity: 1,
                duration: 1,
                ease: "linear",
            },
            "<="
        )
        .to(
            loader,
            {
                scaleX: 1,
                duration: 1.2,
                ease: "power2.inOut",
            },
            "<=0.5"
        )
        .to(mainHeading, {
            yPercent: -200,
            duration: 1,
            ease: "power4.inOut",
        })
        .to(
            loaderWrapper,
            {
                opacity: 0,
                duration: 0.5,
            },
            "<="
        )
        .to(
            mainHeadingLarge,
            {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                autoAlpha: 1,
            },
            "<=0.2"
        )
        .to(
            mainHeadingLarge,
            {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut",
                autoAlpha: 1,
            },
            "<=0.2"
        )
        .to(
            loaderImage,
            {
                autoAlpha: 1,
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut",
            }
            // "<=0.5"
        )
        .to(
            mainHeadingLarge,
            {
                scale: 0.8,
                duration: 1.5,
                ease: "power3.inOut",
                // color: "black",
            },
            "<="
        )
};

</script>

<template>
    <section :class="ROOT_CLASS">
        <section :class="`${ROOT_CLASS}__headings`">
            <div :class="`${ROOT_CLASS}__headings__mask`" aria-hidden="true">
                <h1>selfear</h1>
            </div>

            <div :class="`${ROOT_CLASS}__headings__mask`">
                <h1>selfear</h1>
            </div>

            <span aria-hidden=true :class="`${ROOT_CLASS}__loader__progress`">
                <span></span>
            </span>
            <!-- <h2>UV/Night light painter</h2> -->
            <NuxtImg data-scale="1.5" :class="`${ROOT_CLASS}__loader__image`" src="/images/fluid/main-2.jpg"
                alt="'fluid' - peinture acrylique Fluo - 20x14cm - toile en coton | selfear 2022" />
        </section>

        <PaintsParallax />

        <ol :class="`${ROOT_CLASS}__paints`" @mouseleave="emit('cursorChange', null)">
            <Marquee v-for="(paint, index) in paints" :key="index" @mouseenter="emit('cursorChange', paint.cursor)"
                @click="emit('cursorChange', null)" :title="paint.title" :item="true" :link="`/paints/${paint.title}`"
                :cursor="paint.cursor" />
        </ol>
    </section>

</template>

<style lang="scss" scoped>
@use "/assets/styles/index.scss";
</style>