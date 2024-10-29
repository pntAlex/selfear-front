<script setup lang="ts">
import { usePaintingsStore } from '@/composables/usePaintingsStore';
import { useNuxtApp } from 'nuxt/app';
import { computed, onMounted, ref } from 'vue';

const { $gsap } = useNuxtApp();
const { paintings } = usePaintingsStore();

const root = ref<HTMLElement | null>(null)

const ROOT_CLASS = "paintings-parallax";

// Use a stable seed for server/client consistency
const shuffledPaintings = computed(() => {
  // Create a copy to avoid mutating the original
  const paintingsCopy = [...paintings.value]
  // Use index as stable sort key
  return paintingsCopy.sort((a, b) => a.id - b.id)
})

onMounted(() => {
  if (root.value) {
    initGsap();
  }
});

const initGsap = () => {
  const textLetters = `.${ROOT_CLASS}__text span`;

  $gsap.to(root.value, {
    "--column-scale-Y": 1,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: root.value,
      start: "-20%",
      end: "20%",
      scrub: true,
    },
  });

  $gsap.to(textLetters, {
    color: "#000000",
    stagger: 0.1,
    scrollTrigger: {
      trigger: root.value,
      start: "-20%",
      end: "50%",
      scrub: true,
    },
  });
};</script>

<template>
  <section ref="root" :class="`${ROOT_CLASS} column-border`">
    <div :class="`${ROOT_CLASS}__text__wrapper`">
      <p v-text-splitted :class="`${ROOT_CLASS}__text`">
        i'm a <strong>fluo and phospho</strong> acrylic painter, based in
        <strong>Tours, France</strong>
      </p>

      <p v-text-splitted :class="`${ROOT_CLASS}__text`">
        i exploit the potential of <strong>light exposure</strong> to approach
        <strong>different facets</strong> of the same painting.
      </p>

      <p v-text-splitted :class="`${ROOT_CLASS}__text`">
        relativity is <strong>key.</strong>
      </p>
    </div>

    <ul :class="`${ROOT_CLASS}__wrapper`">
      <li v-for="({ src, alt }, index) in shuffledPaintings" :key="index" data-scroll-start="-30%" data-scroll-end="max"
        :data-scroll-speed="Math.random() * (1.4 - 0.8) + 0.8" :data-scroll-trigger-parent="`.${ROOT_CLASS}`">
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
    transform: scaleY(var(--column-scale-Y));
  }


  &__text {
    @include middle-text;

    text-align: center;
    padding: 1rem;
    max-width: 20ch;
    margin: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
      backdrop-filter: blur(10px);
    }

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
      font-weight: normal;

      :deep(span) {
        font-variation-settings: "wght" 500;
      }
    }

    :deep(span) {
      --wght: 300;

      font-variation-settings: "wght" var(--wght);
      transition: font-variation-settings 500ms;
    }

    &__wrapper {
      font-size: 8vw;
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

      &:nth-of-type(1) {
        top: calc(20%);
        width: 20vw;
      }

      &:nth-of-type(3) {
        top: calc(50%);
        width: min(50vw, 30rem);
      }

      &:nth-of-type(5) {
        top: calc(70%);
        width: max(20vw, 10rem);
      }

      &:nth-of-type(7) {
        top: calc(100%);
        width: min(50vw, 30rem);
      }

      &:nth-of-type(2) {
        top: calc(30%);
        width: min(40vw, 30rem);
      }

      &:nth-of-type(4) {
        top: calc(60%);
        width: max(20vw, 10rem);
      }

      &:nth-of-type(6) {
        top: calc(90%);
        width: min(45vw, 35rem);
      }

      &:nth-of-type(8) {
        top: calc(110%);
        width: min(20vw, 20rem);
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
