<script setup>
const { $gsap, $lenis } = useNuxtApp()
const { loaderInit, setLoaderInit } = useLoaderStore()

const ROOT_CLASS = "loader"

onMounted(() => {
    initAnimation(loaderInit.value)
})

const initAnimation = (init) => {
    const root = `.${ROOT_CLASS}`;

    const maskedTitle = `.${ROOT_CLASS}__mask__heading`;
    const titleContent = `.${ROOT_CLASS}__title__wrapper > *`

    const loaderWrapper = `.${ROOT_CLASS}__progress`;
    const loaderImage = `.${ROOT_CLASS}__image`;

    const loaderTL = $gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onStart: () => {
            window.scrollTo(0, 0);
            $lenis.stop();
            setLoaderInit(true)
        },
        onComplete: () => {
            $lenis.start()
            initScrollAnimation()
        }
    })

    loaderTL
        .to(maskedTitle, { yPercent: -100, duration: 1 })
        .to(loaderWrapper, { autoAlpha: 1, duration: 1.3 }, '<')
        .to(loaderWrapper, { opacity: 1, duration: 1 }, "<")
        .to(root, { "--progress-scale": 1, duration: 1.5 }, "<0.5")
        .to(maskedTitle, { backgroundPosition: "-100% 0%", duration: 1.5 }, "<")
        .to(maskedTitle, { yPercent: -200, duration: 1 })
        .to(loaderWrapper, { opacity: 0, duration: 0.5 }, "<")
        .to(root, { "--column-scale-Y": 1, duration: 2 }, "<")
        .to(titleContent, { scale: 1, autoAlpha: 1, duration: 2, stagger: 0.5 }, '<1')
        .to(loaderImage, { autoAlpha: 1, filter: "blur(0px)", scale: 1, duration: 2.5 }, "<")


    const initScrollAnimation = () => {
        $gsap.fromTo(titleContent, { autoAlpha: 1 }, {
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.5,
            scrollTrigger: {
                trigger: root,
                start: "0%",
                end: "50%",
                scrub: true,
            },
        })
    }

    if (init) {
        loaderTL.totalProgress(1).kill();
    }
};

</script>

<template>
    <section :class="`${ROOT_CLASS} column-border column-border-gray`">
        <div :class="`${ROOT_CLASS}__mask`" aria-hidden="true">
            <span :class="`${ROOT_CLASS}__mask__heading typed`">selfear</span>
        </div>

        <div :class="`${ROOT_CLASS}__title__wrapper`">
            <h1 :class="`${ROOT_CLASS}__title`" v-text-splitted>
                selfear
            </h1>
            <span :class="`${ROOT_CLASS}__subtitle`"><strong>fluo</strong>
                &
                <strong>phospho</strong> painter</span>
            <span :class="`${ROOT_CLASS}__subtitle`">
                based in France</span>
        </div>

        <div aria-hidden="true" :class="`${ROOT_CLASS}__progress`" />

        <NuxtImg data-scroll-scale="1.5" data-scroll-start="0%" data-scroll-end="40%" :class="`${ROOT_CLASS}__image`"
            src="/images/fluid/fluo.jpg"
            alt="'fluid' - peinture acrylique Fluo - 20x14cm - toile en coton | selfear 2022" />
    </section>
</template>

<style lang="scss" scoped>
.loader {
    --progress-scale: 0;
    --column-scale-Y: 0;

    height: 150svh;
    display: grid;
    place-items: center;
    place-content: center;
    grid-template-areas: "content" "paintings";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    position: relative;
    z-index: 0;

    &:after,
    &:before {
        transform-origin: top center;
        transform: scaleY(var(--column-scale-Y))
    }

    & {
        >* {
            grid-area: content;
        }
    }

    &__title {
        @include title(30vw);
        @include huge-text;
        @include hidden;

        text-align: center;
        transform: scale(1.1);

        &__wrapper {
            position: fixed;
            top: 50%;
            left: 5vw;
            right: 5vw;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            z-index: 10;
        }
    }

    &__subtitle {
        @include hidden;

        align-self: flex-end;
        font-size: 0.8em;

        strong {
            color: blue;

            &:last-of-type {
                color: yellow;
            }
        }
    }

    &__mask {
        font-size: 1.5rem;
        overflow: hidden;
        z-index: 100;

        &__heading {
            display: block;
            font-family: RibbonVF;
            letter-spacing: 0.22em;
            background: linear-gradient(to right, grey 50%, var(--light) 50%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transform: translateY(100%);
        }
    }

    &__image {
        @include hidden;

        height: 25vh;
        width: 45vw;
        object-fit: cover;
        filter: blur(50px);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;

        @media screen and (max-width: 768px) {
            height: 50vh;
            width: 30vw;
        }
    }

    &__progress {
        @include hidden;

        display: block;
        width: max(25vw, 10rem);
        height: 0.5ch;
        background-color: grey;
        border-radius: 20px;
        position: absolute;
        align-self: center;
        bottom: 2rem;
        overflow: hidden;

        &:after {
            content: "";
            display: block;
            position: absolute;
            inset: 0 auto 0 0;
            border-radius: 20px;
            width: 100%;
            background-color: white;
            transform-origin: left;
            transform: scaleX(var(--progress-scale));
        }
    }
}
</style>