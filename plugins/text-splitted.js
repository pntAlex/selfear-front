export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('text-splitted', {
      mounted(el) {
        const text = el.textContent.trim()
        const chars = text.split('')
        el.innerHTML = chars.map(char => 
          char === ' ' ? ' ' : `<span>${char}</span>`
        ).join('')
      }
    })
  })