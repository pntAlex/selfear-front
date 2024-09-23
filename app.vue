<script setup>

useNuxtApp().$lenis;

const { $gsap } = useNuxtApp()

onMounted(() => {
  _initScrollAnimations()
})

const _initScrollAnimations = () => {
  document.querySelectorAll("[data-scroll-x], [data-scroll-y], [data-scroll-scale], [data-scroll-alpha], [data-scroll-speed]").forEach((el) => {
    $gsap.to(el, {
      ...(el.dataset.scrollX && { translateX: el.dataset.scrollX }),
      ...(el.dataset.scrollY && { translateY: el.dataset.scrollY }),
      ...(el.dataset.scrollAlpha && { autoAlpha: el.dataset.scrollAlpha }),
      ...(el.dataset.scrollScale && { scale: parseFloat(el.dataset.scrollScale) }),
      ...(el.dataset.scrollSpeed && { translateY: 1 - parseFloat(el.dataset.scrollSpeed) * 1000 }),
      scrollTrigger: {
        trigger: el.dataset.scrollTriggerParent ? document.querySelector(el.dataset.scrollTriggerParent) : el.parentElement,
        start: el.dataset.scrollStart || "0%",
        end: el.dataset.scrollEnd || "20%",
        invalidateOnRefresh: true,
        scrub: true,
      },
    });
  });
};

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Cursor />
</template>