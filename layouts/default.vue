<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const ROOT_CLASS = "default-layout"
</script>

<template>
    <!-- <LightSwitcher /> -->
    <section :class="ROOT_CLASS">
        <nav :class="`${ROOT_CLASS}__nav`">
            <NuxtLink :class="`${ROOT_CLASS}__nav__title`" to="/">Selfear</NuxtLink>
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
            font-family: RibbonVF;
            text-decoration: none;
            text-align: center;
            letter-spacing: 0.1em;
            color: var(--dark);
            color: white;
            font-size: 1.6rem;
        }
    }
}
</style>