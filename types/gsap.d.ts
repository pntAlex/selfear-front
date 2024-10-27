declare namespace gsap {
  interface Timeline {
    to(target: string | Element, vars: object): Timeline
    fromTo(target: string | Element, fromVars: object, toVars: object): Timeline
    totalProgress(progress: number): Timeline
    kill(): void
  }

  interface ScrollTrigger {
    trigger: string | Element
    start?: string
    end?: string
    scrub?: boolean | number
    pin?: boolean | string | Element
    markers?: boolean
    onEnter?: () => void
    onLeave?: () => void
    onEnterBack?: () => void
    onLeaveBack?: () => void
  }
}

interface GSAPInstance {
  to(target: string | Element, vars: object): void
  fromTo(target: string | Element, fromVars: object, toVars: object): void
  timeline(vars?: object): gsap.Timeline
}

declare module '#app' {
  interface NuxtApp {
    $gsap: GSAPInstance
    $lenis: {
      start(): void
      stop(): void
      raf(time: number): void
    }
  }
}

export {}
