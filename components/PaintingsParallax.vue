<script setup>
defineProps(['paintings'])

const ROOT_CLASS = "paintings-parallax"
</script>

<template>
    <section :class="`${ROOT_CLASS} column-border`">
        <p v-text-splitted data-scroll-alpha="0" data-scroll-start="0" data-scroll-end="25">
            I'm a <strong>fluo and phospho</strong> <br />acrylic painter, based
            in<br />
            <strong>Tours, France</strong>
        </p>
        <p v-text-splitted data-scroll-alpha="0" data-scroll-start="40" data-scroll-end="65">
            I exploit the potential of <strong>light exposure</strong><br />to
            approach <strong>different facets</strong><br />of the same
            painting.<br />
        </p>

        <p v-text-splitted data-scroll-alpha="1" data-scroll-start="0" data-scroll-end="65">
            Relativity is <strong>key</strong>.
        </p>

        <ul :class="`${ROOT_CLASS}__wrapper`">
            <li v-for="({ src, alt }, index) in paintings" :key="index">
                <NuxtImg data-scroll-start="0" data-scroll-end="max" loading="lazy" :alt :src
                    :data-scroll-speed="Math.random() * (2 - 1.2) + 1.2" />
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.paintings-parallax {
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
        font-size: 2.5em;
        text-transform: uppercase;
        padding: 0.6em;
        inset: 30% auto auto;
        z-index: 20;
        color: var(--dark);
        width: fit-content;
        backdrop-filter: blur(5px) brightness(0.4);
        color: white;

        strong {
            color: gray;
            text-decoration: underline;
        }

        &:nth-of-type(1) {
            inset: 20% auto auto;
        }

        &:nth-of-type(2) {
            inset: 45% auto auto;
        }

        &:nth-of-type(3) {
            inset: 70% auto auto;
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
                top: calc(40vh + 0%);
                width: 350px;
            }

            // Staar
            &:nth-of-type(3) {
                top: calc(40vh + 25%);
                width: calc(1 / 4 * 100vw);
            }

            // Eclectic
            &:nth-of-type(5) {
                top: calc(40vh + 35%);
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
                top: calc(40vh + 40%);
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