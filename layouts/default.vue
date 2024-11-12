<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";

const { setCursorImageId } = useCursorStore();

const ROOT_CLASS = "default-layout";
const TITLE = `.${ROOT_CLASS}__nav__title`;

const { $gsap } = useNuxtApp();

onMounted(() => {
  initAnimation();
});

const initAnimation = () => {
  $gsap.to(TITLE, {
    autoAlpha: 1,
    delay: 5,
  });
};

</script>

<template>
  <section :class="ROOT_CLASS">
    <nav :class="`${ROOT_CLASS}__nav`">
      <NuxtLink :class="`${ROOT_CLASS}__nav__title hidden`" to="/" @click="setCursorImageId(null)">Selfear</NuxtLink>
    </nav>

    <main>
      <slot />
    </main>

    <FooterItem />
    <SpeedInsights />
  </section>
</template>

<style>
.default-layout__nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  inset: 30px 30px auto;
  z-index: 1000;
  mix-blend-mode: difference;
}

.default-layout__nav__title {
  font-family: RibbonVF;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.1em;
  color: var(--dark);
  color: white;
  font-size: 1.6rem;
}
</style>
