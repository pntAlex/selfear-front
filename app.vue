<script setup>
import { ref } from 'vue';
const { $gsap } = useNuxtApp()

onMounted(() => {
  parallax()
})

const parallax = () => {
  $gsap.to("[data-speed]", {
    translateY: (_, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 1000,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: true,
    },
  });

  $gsap.to("[data-scale]", {
    scale: (_, el) => parseFloat(el.getAttribute("data-scale")),
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "50%",
      invalidateOnRefresh: true,
      scrub: true,
    },
  });

  $gsap.to("[data-alpha]", {
    autoAlpha: (_, el) => el.getAttribute("data-alpha"),
    ease: "none",
    scrollTrigger: {
      // trigger: el.parentElement,
      start: "0%",
      end: "20%",
      // start: `${el.getAttribute("data-scroll-start")}%`,
      // end: `${el.getAttribute("data-scroll-end")}%`,
      invalidateOnRefresh: true,
      scrub: true,
    },
  });

  // $gsap.to("[data-blur]", {
  //   filter: (_, el) => `blur(${el.getAttribute("data-blur")}px)`,
  //   ease: "none",
  //   scrollTrigger: {
  //     start: 0,
  //     end: "15%",
  //     invalidateOnRefresh: true,
  //     scrub: true,
  //   },
  // });
};

const cursorType = ref(null); // Default cursor type

const modifyCursorImage = (newCursorType) => {
  cursorType.value = newCursorType?.toLowerCase();
}

</script>

<template>
  <NuxtLayout>
    <NuxtPage @cursorChange="modifyCursorImage" />
  </NuxtLayout>
  <Cursor :image="cursorType" />
</template>

<style lang="scss">
// @use "/assets/styles/main.scss";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>