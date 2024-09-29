<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const { setCursorImage } = useCursorStore()
const { isMobile } = useDevice()

const ROOT_CLASS = "default-layout"
const TITLE = `.${ROOT_CLASS}__nav__title`

const { $gsap } = useNuxtApp()

onMounted(() => {
    initAnimation()
})

const initAnimation = () => {
    $gsap.to(TITLE, {
        autoAlpha: 1,
        delay: 5
    })
}

</script>

<template>
    <!-- <LightSwitcher /> -->
    <section :class="`${ROOT_CLASS}--mobile`" v-if="isMobile">
        <h1>Selfear</h1>
        <p>Mobile version WIP.</p>
    </section>

    <section v-else :class="ROOT_CLASS">
        <nav :class="`${ROOT_CLASS}__nav`">
            <NuxtLink @click="setCursorImage(null)" :class="`${ROOT_CLASS}__nav__title`" to="/">Selfear</NuxtLink>
        </nav>

        <main>
            <slot />
        </main>

        <Footer />
        <SpeedInsights />
    </section>
</template>

<style lang="scss">
.default-layout {
    &__nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: fixed;
        inset: 30px 30px auto;
        z-index: 1000;
        mix-blend-mode: difference;

        &__title {
            @include hidden;

            font-family: RibbonVF;
            text-decoration: none;
            text-align: center;
            letter-spacing: 0.1em;
            color: var(--dark);
            color: white;
            font-size: 1.6rem;
        }
    }

    &--mobile {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100vh;
        width: 100vw;
        place-content: center;
        place-items: center;

        &>* {
            margin: 0;
        }
    }
}
</style>