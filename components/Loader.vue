<script setup>
const { $gsap } = useNuxtApp()

defineProps(['paintings'])

const ROOT_CLASS = "loader"

onMounted(() => {
    loader()
})

const loader = () => {
    const root = `.${ROOT_CLASS}`;
    const maskedTitle = `.${ROOT_CLASS}__mask__heading`;
    const titleContent = `.${ROOT_CLASS}__title__wrapper > *`
    const loaderWrapper = `.${ROOT_CLASS}__progress`;
    const loader = `.${ROOT_CLASS}__progress span`;
    const loaderImage = `.${ROOT_CLASS}__image`;

    $gsap.set([loaderImage, titleContent], {
        autoAlpha: 0
    })

    $gsap.timeline()
        .to(maskedTitle,
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

            }, '<=')
        .to(
            loaderWrapper,
            {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
            },
            "<=")
        .to(
            loader,
            {
                scaleX: 1,
                duration: 1.5,
                ease: "power2.inOut",
            },
            "<=0.5")
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
                ease: "power4.inOut",
            })
        .to(
            loaderWrapper,
            {
                opacity: 0,
                duration: 0.5,
                ease: "power4.inOut",
            },
            "<"
        )
        .to(root,
            {
                "--column-scale-Y": 1,
                scaleY: 1,
                duration: 2.5,
                ease: "power4.inOut",
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
            "<=0.5")
        .to(
            loaderImage,
            {
                autoAlpha: 1,
                filter: "blur(0px)",
                scale: 1,
                duration: 2.5,
                ease: "power3.inOut",
            },
            "<=1"
        )
};

</script>

<template>
    <section :class="`${ROOT_CLASS} column-border column-border-gray`">
        <div :class="`${ROOT_CLASS}__mask`" aria-hidden="true">
            <span :class="`${ROOT_CLASS}__mask__heading typed`">selfear</span>
        </div>

        <div :class="`${ROOT_CLASS}__title__wrapper`">
            <h1 data-scroll-y="20" data-scroll-scale="0.1" :class="`${ROOT_CLASS}__title`" v-text-splitted>
                selfear
            </h1>
            <span data-scroll-alpha="0" :class="`${ROOT_CLASS}__subtitle`">
                <strong>Fluo</strong> &
                <strong>Phospho</strong>
                painter</span>
            <span data-scroll-alpha="0" :class="`${ROOT_CLASS}__subtitle`">
                based in France</span>
        </div>

        <span aria-hidden="true" :class="`${ROOT_CLASS}__progress`">
            <span></span>
        </span>

        <NuxtImg data-scroll-alpha="0" data-scroll-end="20" :class="`${ROOT_CLASS}__image`" src="/images/fluid/fluo.jpg"
            alt="'fluid' - peinture acrylique Fluo - 20x14cm - toile en coton | selfear 2022" />

        <div aria-hidden="true" :class="`${ROOT_CLASS}__paintings__wrapper`" data-scroll-alpha="1"
            data-scroll-start="20" data-scroll-end="50">
            <ul v-for="i in 4" :key="i" :class="`${ROOT_CLASS}__paintings`">
                <li v-for="({ src, alt }, index) in [...paintings, ...paintings, ...paintings, ...paintings]"
                    :key="index">
                    <NuxtImg :src="src" :alt="alt" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.loader {
    --column-scale-Y: 0;

    height: 200vh;
    display: grid;
    place-items: center;
    place-content: center;
    grid-template-areas: "content" ".";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
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
        @include selfear(30vw);
    }

    &__subtitle {
        align-self: flex-end;

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
        transform: scale(1.3);
        position: fixed;
        pointer-events: none;
    }

    &__progress {
        display: block;
        width: 25vw;
        height: 0.5ch;
        background-color: grey;
        border-radius: 20px;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        align-self: center;
        top: calc(100vh - 2rem);
        overflow: hidden;

        span {
            border-radius: 20px;
            width: 100%;
            background-color: white;
            transform-origin: left;
            transform: scaleX(0);
            position: absolute;
            inset: 0 auto 0 0;
        }
    }

    &__paintings {
        position: absolute;
        list-style: none;
        display: flex;
        gap: 1rem;
        margin: 0;
        padding: 0;

        &:nth-of-type(even) {
            flex-direction: column;
        }

        &:nth-of-type(odd) {
            flex-direction: row;
        }

        &:nth-of-type(1) {
            inset: 0 auto auto auto;
        }

        &:nth-of-type(2) {
            inset: auto 0 auto auto;
        }

        &:nth-of-type(3) {
            inset: auto auto 0 auto;
        }

        &:nth-of-type(4) {
            inset: auto auto auto 0;
        }

        &__wrapper {
            position: fixed;
            inset: 0;
            display: grid;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            place-content: center;
            gap: 10vh;
        }

        img {
            width: 5rem;
        }
    }
}
</style>