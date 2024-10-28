<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app';
import { onMounted } from 'vue';

const { $gsap } = useNuxtApp()

onMounted(() => {
  _initScrollAnimations()
})

const _initScrollAnimations = () => {
  document
    .querySelectorAll<HTMLElement>(
      '[data-scroll-x], [data-scroll-y], [data-scroll-top], [data-scroll-bottom], [data-scroll-scale], [data-scroll-alpha], [data-scroll-speed]',
    )
    .forEach((el) => {
      $gsap.to(el, {
        ...(el.dataset.scrollX && { translateX: el.dataset.scrollX }),
        ...(el.dataset.scrollY && { translateY: el.dataset.scrollY }),
        ...(el.dataset.scrollTop && { top: el.dataset.scrollTop }),
        ...(el.dataset.scrollBottom && { bottom: el.dataset.scrollBottom }),
        ...(el.dataset.scrollAlpha && { autoAlpha: el.dataset.scrollAlpha }),
        ...(el.dataset.scrollScale && {
          scale: parseFloat(el.dataset.scrollScale),
        }),
        ...(el.dataset.scrollSpeed && {
          translateY: 1 - parseFloat(el.dataset.scrollSpeed) * 1000,
        }),
        scrollTrigger: {
          trigger: el.dataset.scrollTriggerParent
            ? document.querySelector(el.dataset.scrollTriggerParent)
            : el.parentElement,
          start: el.dataset.scrollStart || '0%',
          end: el.dataset.scrollEnd || '20%',
          invalidateOnRefresh: true,
          scrub: true,
          once: el.dataset.scrollOnce || false,
          markers: el.dataset.scrollMarkers || false,
        },
      })
    })
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CursorItem />
</template>
