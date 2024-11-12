<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app';
import { onMounted, ref } from 'vue';

const { $gsap } = useNuxtApp();

const { data: paintings } = useNuxtData('paintings')

const root = ref<HTMLElement | null>(null)

const ROOT_CLASS = "paintings-parallax";

onMounted(() => {
  if (root.value) {
    initAnimations();
  }
});

const initAnimations = () => {
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
};
</script>

<template>
  <section ref="root" :class="`${ROOT_CLASS} column-border`">
    <div :class="`${ROOT_CLASS}__text__wrapper`">
      <p v-text-splitted :class="`${ROOT_CLASS}__text middle-text`">
        i'm a <strong>fluo and phospho</strong> acrylic painter, based in
        <strong>Tours, France</strong>
      </p>

      <p v-text-splitted :class="`${ROOT_CLASS}__text middle-text`">
        i exploit the potential of <strong>light exposure</strong> to approach
        <strong>different facets</strong> of the same painting.
      </p>

      <p v-text-splitted :class="`${ROOT_CLASS}__text middle-text`">
        relativity is <strong>key.</strong>
      </p>
    </div>

    <ul :class="`${ROOT_CLASS}__wrapper`" v-if="paintings">
      <li v-for="({ id, picture: { url: src, alternativeText: alt } }) in paintings.data" :key="id"
        data-scroll-start="-30%" data-scroll-end="max" :data-scroll-speed="Math.random() * (1.4 - 0.8) + 0.8"
        :data-scroll-trigger-parent="`.${ROOT_CLASS}`">
        <NuxtImg preset="medium" loading="lazy" :src :alt />
      </li>
    </ul>
  </section>
</template>

<style scoped>
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
}

.paintings-parallax::after,
.paintings-parallax::before {
  transform-origin: top center;
  transform: scaleY(var(--column-scale-Y));
}

.paintings-parallax__text {
  text-align: center;
  padding: 1rem;
  max-width: 20ch;
  margin: 0;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .paintings-parallax__text {
    backdrop-filter: blur(10px);
  }
}

.paintings-parallax__text:nth-child(1) {
  z-index: 100;
}

.paintings-parallax__text:nth-child(2) {
  z-index: 10;
}

.paintings-parallax__text:nth-child(3) {
  z-index: 1;
}

.paintings-parallax__text strong {
  font-weight: normal;
}

.paintings-parallax__text strong::deep(span) {
  font-variation-settings: "wght" 500;
}

.paintings-parallax__text::deep(span) {
  --wght: 300;
  font-variation-settings: "wght" var(--wght);
  transition: font-variation-settings 500ms;
}

.paintings-parallax__text__wrapper {
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

.paintings-parallax__wrapper {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.paintings-parallax__wrapper li {
  position: absolute;
  z-index: 10;
}

.paintings-parallax__wrapper li:nth-of-type(odd) {
  left: 5%;
}

.paintings-parallax__wrapper li:nth-of-type(even) {
  right: 5%;
}

.paintings-parallax__wrapper li:nth-of-type(1) {
  top: calc(20%);
  width: 20vw;
}

.paintings-parallax__wrapper li:nth-of-type(3) {
  top: calc(50%);
  width: min(50vw, 30rem);
}

.paintings-parallax__wrapper li:nth-of-type(5) {
  top: calc(70%);
  width: max(20vw, 10rem);
}

.paintings-parallax__wrapper li:nth-of-type(7) {
  top: calc(100%);
  width: min(50vw, 30rem);
}

.paintings-parallax__wrapper li:nth-of-type(2) {
  top: calc(30%);
  width: min(40vw, 30rem);
}

.paintings-parallax__wrapper li:nth-of-type(4) {
  top: calc(60%);
  width: max(20vw, 10rem);
}

.paintings-parallax__wrapper li:nth-of-type(6) {
  top: calc(90%);
  width: min(45vw, 35rem);
}

.paintings-parallax__wrapper li:nth-of-type(8) {
  top: calc(110%);
  width: min(20vw, 20rem);
}

.paintings-parallax__wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
