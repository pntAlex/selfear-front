<script setup>
import { ref } from 'vue';

useNuxtApp().$lenis;

const { $gsap } = useNuxtApp()

onMounted(() => {
  parallax()
})

const parallax = () => {
  $gsap.to("[data-scroll-speed]", {
    translateY: (_, el) => (1 - parseFloat(el.dataset.scrollSpeed)) * 1000,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: true,
    },
  });


  // TODO compute y after scale
  document.querySelectorAll("[data-scroll-scale]").forEach((el) => {
    $gsap.to(el, {
      scale: parseFloat(el.dataset.scrollScale),
      translateY: `-${el.getBoundingClientRect().y * 2.2 - el.dataset.scrollY}px`,
      scrollTrigger: {
        start: 0,
        end: `${el.dataset.scrollY}%`,
        scrub: true,
      }
    });
  });


  document.querySelectorAll("[data-scroll-alpha]").forEach((el) => {
    if (el.dataset.scrollAlpha == 1) {
      $gsap.set(el, { autoAlpha: 0 })
    }

    $gsap.to(el, {
      autoAlpha: el.dataset.scrollAlpha,
      scrollTrigger: {
        trigger: el.parentElement,
        start: `${el.dataset.scrollStart || 0}%`,
        end: `${el.dataset.scrollEnd || 20}%`,
        scrub: true,
      },
    });
  });

  document.querySelectorAll("[data-scroll-x]").forEach((el) => {
    $gsap.to(el, {
      translateX: el.dataset.scrollX,
      scrollTrigger: {
        trigger: el.parentElement,
        start: `${el.dataset.scrollStart || 0}%`,
        end: `${el.dataset.scrollEnd || 20}%`,
        scrub: true,
      },
    });
  });

  // $gsap.to("[data-scroll-y]", {
  //   translateY: (_, el) => `${el.dataset.dataScrollY}%`,
  //   ease: "none",
  //   scrollTrigger: {
  //     start: 0,
  //     end: "max",
  //     invalidateOnRefresh: true,
  //     scrub: true,
  //   },
  // });



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