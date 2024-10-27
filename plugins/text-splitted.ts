import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('text-splitted', {
    mounted(el: HTMLElement) {
      const splitTextIntoSpans = (node: Node): void => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
          node.textContent.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? ' ' : char;
            node.parentNode?.insertBefore(span, node);
          });
          node.parentNode?.removeChild(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.childNodes).forEach((childNode) => {
            splitTextIntoSpans(childNode);
          });
        }
      };

      splitTextIntoSpans(el);
    }
  });
});