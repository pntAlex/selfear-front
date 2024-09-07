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
  cursorType.value = newCursorType.toLowerCase(); // Update cursor type
}

</script>

<template>
  <NuxtLayout>
    <NuxtPage @cursorChange="modifyCursorImage" />
  </NuxtLayout>
  <Cursor :image="cursorType" />
</template>
