import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis(); // Initialize Lenis

  const animate = (time) => {
    lenis.raf(time); // Update Lenis
    requestAnimationFrame(animate); // Continue the loop
  };

  requestAnimationFrame(animate); // Start the animation loop

  nuxtApp.provide('lenis', lenis); // Provide lenis instance
});