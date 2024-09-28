<script setup>
const { $gsap, $lenis } = useNuxtApp()
const { loaderInit, setLoaderInit } = useLoaderStore()

const ROOT_CLASS = "loader"

onMounted(() => {
    // if (loaderInit.value) {
    // return;
    // }

    initAnimation()
})

const initAnimation = () => {
    const root = `.${ROOT_CLASS}`;

    const maskedTitle = `.${ROOT_CLASS}__mask__heading`;
    const titleContent = `.${ROOT_CLASS}__title__wrapper > *`

    const loaderWrapper = `.${ROOT_CLASS}__progress`;
    const loaderImage = `.${ROOT_CLASS}__image`;

    const loaderTL = $gsap.timeline({
        onStart: () => {
            $lenis.stop();
            // setLoaderInit(true)
        }, onComplete: () => $lenis.start()
    })

    $gsap.set([loaderImage, titleContent], {
        autoAlpha: 0
    })

    loaderTL.to(maskedTitle,
        {
            yPercent: -100,
            duration: 1,
            ease: "power3.inOut"
        }
    )
        .to(loaderWrapper,
            {
                autoAlpha: 1,
                duration: 1.3,
                ease: "power3.inOut",

            }, '<')
        .to(loaderWrapper,
            {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
            },
            "<")
        .to(root,
            {
                "--progress-scale": 1,
                duration: 1.5,
                ease: "power2.inOut",
            },
            "<0.5")
        .to(maskedTitle,
            {
                backgroundPosition: "-100% 0%",
                duration: 1.5,
                ease: "power2.inOut",
            },
            "<=")
        .to(maskedTitle,
            {
                yPercent: -200,
                duration: 1,
                ease: "power3.inOut",
            })
        .to(loaderWrapper,
            {
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
            },
            "<"
        )
        .to(root,
            {
                "--column-scale-Y": 1,
                duration: 2,
                ease: "power3.inOut",
            },
            "<"
        )
        .to(titleContent,
            {
                autoAlpha: 1,
                duration: 1.5,
                ease: "power3.inOut",
                stagger: 0.5
            },
            '<1')
        .to(loaderImage,
            {
                autoAlpha: 1,
                filter: "blur(0px)",
                scale: 1,
                duration: 2.5,
                ease: "power3.inOut",
            },
            "<"
        )
};

</script>

<template>
    <section :class="`${ROOT_CLASS} column-border column-border-gray`">
        <div :class="`${ROOT_CLASS}__mask`" aria-hidden="true">
            <span :class="`${ROOT_CLASS}__mask__heading typed`">selfear</span>
        </div>

        <div :class="`${ROOT_CLASS}__title__wrapper`">
            <h1 data-scroll-start="0" data-scroll-end="50%" data-scroll-alpha="0" :class="`${ROOT_CLASS}__title`"
                :data-scroll-trigger-parent="`.${ROOT_CLASS}`" v-text-splitted>
                selfear
            </h1>
            <span data-scroll-alpha="0" data-scroll-start="15%" data-scroll-end="30%"
                :data-scroll-trigger-parent="`.${ROOT_CLASS}`" :class="`${ROOT_CLASS}__subtitle`"><strong>fluo</strong>
                &
                <strong>phospho</strong> painter</span>
            <span data-scroll-alpha="0" data-scroll-start="10%" data-scroll-end="20%"
                :data-scroll-trigger-parent="`.${ROOT_CLASS}`" :class="`${ROOT_CLASS}__subtitle`">
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

    height: 150vh;
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

        text-align: center;

        &__wrapper {
            position: fixed;
            inset: auto 5vw;
            display: flex;
            flex-direction: column;
            z-index: 10;
        }
    }

    &__subtitle {
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
        position: fixed;
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
        height: 25vh;
        width: 45vw;
        object-fit: cover;
        filter: blur(50px);
        // transform: scale(1.3);
        position: fixed;
        pointer-events: none;
    }

    &__progress {
        @include hidden;

        display: block;
        width: 25vw;
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