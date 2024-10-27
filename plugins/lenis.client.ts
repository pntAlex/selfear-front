import Lenis from "lenis";
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis: Lenis = new Lenis();

  const animate = (time: number): void => {
    lenis.raf(time);
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);

  nuxtApp.provide("lenis", lenis);
});
