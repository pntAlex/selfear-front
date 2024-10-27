export interface AnimationTimeline {
  duration?: number
  ease?: string
  delay?: number
  stagger?: number
  autoAlpha?: number
  scale?: number
  yPercent?: number
  translateX?: string | number
  translateY?: string | number
  scrollTrigger?: gsap.ScrollTrigger
}

export interface CustomElement extends Element {
  __scrollTrigger?: gsap.ScrollTrigger
  __timeline?: gsap.Timeline
}
