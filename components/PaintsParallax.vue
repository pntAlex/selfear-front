<script setup>
import paints from '~/assets/data/paints.json'

const ROOT_CLASS = "paints-parallax"
</script>

<template>
    <section :class="`${ROOT_CLASS} column-border`">
        <p data-alpha="0" data-scroll-start="0" data-scroll-end="35">
            I'm a <strong>fluo and phospho</strong> <br />acrylic painter, based
            in<br />
            <strong>Tours, France</strong>
        </p>
        <p data-alpha="1" data-scroll-start="20" data-scroll-end="40">
            I exploit the potential of <strong>light exposure</strong><br />to
            approach <strong>different facets</strong><br />of the same
            painting.<br />
        </p>

        <p data-alpha="1" data-scroll-start="40" data-scroll-end="65">
            All is <strong>relative</strong>.
        </p>

        <ul :class="`${ROOT_CLASS}__wrapper`">
            <li v-for="(paint, index) in paints" :key="index">
                <NuxtImg loading="lazy" :alt="paint.alt" :data-speed="Math.random() * (2 - 1.2) + 1.2"
                    :src="paint.src" />
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.paints-parallax {
    height: 200vh;
    background: #eee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    p {
        text-align: center;
        position: absolute;
        // position: fixed;
        font-size: 2.5em;
        text-transform: uppercase;
        // backdrop-filter: blur(10px);
        // backdrop-filter: brightness(0.2);
        padding: 0.6em;
        inset: 30% auto auto;
        z-index: 20;
        color: var(--dark-bg);
        // color: white;
        width: 100%;

        strong {
            color: gray;
        }

        &:nth-of-type(1) {
            opacity: 1;
            visibility: visible;
            inset: 30% auto auto;
        }

        &:nth-of-type(2) {
            opacity: 0;
            inset: 60% auto auto;
            visibility: hidden;
        }

        &:nth-of-type(3) {
            opacity: 0;
            inset: 80% auto auto;
            visibility: hidden;
        }
    }

    &__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            position: absolute;
            z-index: 10;

            &:nth-of-type(odd) {
                left: 5%;
            }

            &:nth-of-type(even) {
                right: 5%;
            }

            // Radioactiv
            &:nth-of-type(1) {
                top: calc(40vh + 10%);
                width: 350px;
            }

            // Staar
            &:nth-of-type(3) {
                top: calc(40vh + 25%);
                width: calc(1 / 4 * 100vw);
            }

            // Eclectic
            &:nth-of-type(5) {
                top: calc(40vh + 50%);
                width: calc(1 / 6 * 100vw);
            }

            // Self
            &:nth-of-type(7) {
                top: calc(40vh + 70%);
                width: 600px;
            }

            // Spiraal
            &:nth-of-type(2) {
                top: calc(40vh + 20%);
                width: 450px;
            }

            // Knowledge
            &:nth-of-type(4) {
                top: calc(40vh + 35%);
                width: 350px;
            }

            // Penrose chaos
            &:nth-of-type(6) {
                top: calc(40vh + 80%);
                width: 400px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>