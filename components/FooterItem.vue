<!-- eslint-disable vue/html-self-closing -->
<script setup lang="ts">
const { $gsap } = useNuxtApp();

const ROOT_CLASS = "footer";
const footer = `.${ROOT_CLASS}`;
const copyrightLetters = `.${ROOT_CLASS}__contact__copyright span`;
const selfearLetters = `.${ROOT_CLASS}__heading span`;
const mailLetters = `.${ROOT_CLASS}__contact__mail span`;
const selfearSocial = `.${ROOT_CLASS}__contact__socials li`;

onMounted(() => {
  _initAnimations();
});

const _initAnimations = () => {
  const animateFooter = () => {
    const footerTL = $gsap.timeline({ defaults: { ease: "power2.inOut" } });

    footerTL
      .to(footer, { "--column-scale-Y": 1, duration: 1 })
      .to(
        copyrightLetters,
        { autoAlpha: 1, duration: 0.05, stagger: 0.025 },
        "<"
      )
      .fromTo(
        mailLetters,
        { translateY: "100%" },
        { translateY: "0", duration: 1, stagger: 0.05 },
        "<"
      )
      .to(selfearLetters, { autoAlpha: 1, duration: 1, stagger: 0.05 }, "<")
      .fromTo(
        selfearSocial,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, stagger: 0.05, reversed: true },
        "<"
      );
  };

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateFooter();
        footerObserver.unobserve(entry.target);
      }
    });
  });

  const footerElement = document.querySelector(footer);
  if (footerElement) {
    footerObserver.observe(footerElement);
  }
};
</script>

<template>
  <footer :class="`${ROOT_CLASS} column-border column-border-gray`">
    <div :class="`${ROOT_CLASS}__contact`">
      <div :class="`${ROOT_CLASS}__contact__mail__wrapper`">
        <!-- <span>for any inquiries&nbsp;:</span> -->
        <NuxtLink v-text-splitted :class="`${ROOT_CLASS}__contact__mail`" to="mailto:a_pinot@icloud.com">
          <span>a_pinot</span><span>@icloud.com</span>
        </NuxtLink>
      </div>

      <p v-text-splitted :class="`${ROOT_CLASS}__contact__copyright`">
        &copy; 2024 all rights reserved.<br />selfear
      </p>

      <nav :class="`${ROOT_CLASS}__contact__socials`">
        <ul>
          <li>
            <NuxtLink title="Lien vers l'Instagram de l'artiste selfear" to="https://www.instagram.com/selfearuv"
              target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
                <path style="
                    fill: none;
                    stroke: var(--light);
                    stroke-width: 2;
                    stroke-miterlimit: 10;
                  "
                  d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z" />
                <circle style="
                    fill: none;
                    stroke: var(--light);
                    stroke-width: 2;
                    stroke-miterlimit: 10;
                  " cx="25" cy="25" r="10" />
                <circle cx="37" cy="13" r="2" />
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <span v-text-splitted :class="`${ROOT_CLASS}__heading typed`">selfear</span>
  </footer>
</template>

<style scoped>
.footer {
  --column-scale-Y: 0;
  overflow: hidden;
  position: relative;
  backdrop-filter: brightness(0.3);
  padding: 4rem 5vw 0;
}

.footer::before,
.footer::after {
  transform: scaleY(var(--column-scale-Y));
  transform-origin: top center;
}

.footer__contact {
  display: grid;
  grid-template-areas: "copyright mail socials";
  grid-template-columns: calc(1 / 6 * 100vw) 1fr calc(1 / 6 * 100vw);
  flex-direction: column;
  align-items: center;
  position: relative;
}

@media screen and (max-width: 768px) {
  .footer__contact {
    grid-template-areas: "mail mail mail" "copyright copyright socials";
    row-gap: 2rem;
  }
}

.footer__contact__section {
  display: flex;
}

.footer__contact__section:nth-child(2) {
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.footer__contact__mail {
  font-variation-settings: "wght" 400;
  transition: font-variation-settings 500ms;
  overflow: hidden;
  text-decoration: none;
  color: white;
  line-height: 1;
}

.footer__contact__mail span {
  display: inline-block;
}

.footer__contact__mail span:nth-child(1) {
  color: var(--light);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--light);
  color: transparent;
}

.footer__contact__mail span {
  font-variation-settings: "wght" 400;
  transition: font-variation-settings 500ms;
}

.footer__contact__mail span:hover {
  font-variation-settings: "wght" 800;
}

.footer__contact__mail__wrapper {
  grid-area: mail;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer__contact>span {
  font-size: 1.2rem;
  margin-bottom: 1em;
}

.footer__contact__copyright {
  grid-area: copyright;
  align-self: flex-end;
  justify-self: flex-start;
  margin: 0;
  letter-spacing: -0.05ch;
  font-size: 0.9rem;
}

.footer__contact__socials {
  grid-area: socials;
  place-self: flex-end;
  display: flex;
  gap: 1rem;
}

.footer__contact__socials ul {
  margin: 0;
  list-style: none;
}

.footer__contact__socials a {
  color: var(--light);
  text-decoration: none;
}

.footer__contact__socials a svg {
  width: 1.4rem;
}

.footer__contact__socials a svg path {
  transition: fill 0.4s;
}

.footer__contact__socials a:hover svg path {
  fill: white;
}

.footer__heading {
  display: block;
  text-align: center;
  transform: translateY(0.35em);
  font-family: RibbonVF;
  opacity: 1;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 20vw;
  color: transparent;
  font-weight: unset;
  line-height: normal;

  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--light);
}

.footer__heading::deep(span) {
  font-variation-settings: "wdth" 0;
  transition: font-variation-settings 500ms, color 500ms;
  color: inherit;

  &:hover {
    font-variation-settings: "wdth" 1000;
    color: var(--light);
  }
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
