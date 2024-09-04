<script setup>
const ROOT_CLASS = "paints-parallax"
</script>

<template>
    <section :class="ROOT_CLASS">
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

        <ul :class="ROOT_CLASS + '__wrapper'">
            <li>
                <a href="">
                    <img data-speed="1.2" src="~/assets/images/radioactiv/main.png" alt="" srcset="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img data-speed="0.9" src="~/assets/images/spiraal/main.jpg" alt="" srcset="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img data-speed="1.1" src="~/assets/images/knowledge/main-uv.png" alt="" srcset="" />
                </a>
            </li>

            <li>
                <a href="">
                    <img data-speed="0.85" src="~/assets/images/staar/main-2.jpg" alt="" srcset="" />
                </a>
            </li>
            <li>
                <a href="">
                    <img data-speed="0.9" src="~/assets/images/eclectic/main.png" alt="" srcset="" />
                </a>
            </li>

            <li>
                <a href="">
                    <img data-speed="0.85" src="~/assets/images/self/uv.png" alt="" srcset="" />
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.paints-parallax {
    --border-color: var(--dark-bg);
    --mouse-x-1: 50%;
    --mouse-y-1: 50%;
    --mouse-width: 1em;
    --gap: 5rem;

    height: 200vh;
    background: #eee;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

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

    &:after,
    &:before {
        content: "";
        display: block;
        position: absolute;
        opacity: 0.15;
        width: calc(1 / 6 * 100vw);
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        pointer-events: none;
    }

    &:before {
        inset: 0 auto 0 5%;
    }

    &:after {
        inset: 0 5% 0 auto;
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

        li {
            position: absolute;
            z-index: 10;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: scale 0.4s, filter 0.4s;
                // filter: brightness(0.6) grayscale(1);

                &:hover {
                    scale: 1.015 !important;
                    // filter: brightness(1) grayscale(0);
                }
            }

            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3) {
                left: 5%;

                img {
                    transform-origin: left;
                }
            }

            &:nth-of-type(4),
            &:nth-of-type(5),
            &:nth-of-type(6) {
                right: 5%;

                img {
                    transform-origin: right;
                }
            }

            &:nth-of-type(1) {
                top: 15%;
                width: 350px;
            }

            &:nth-of-type(2) {
                top: 30%;
                width: 450px;
            }

            &:nth-of-type(3) {
                bottom: 0%;
                width: calc(1 / 6 * 100vw);
            }

            &:nth-of-type(4) {
                top: 0px;
                width: 600px;
            }

            &:nth-of-type(5) {
                bottom: 45%;
                width: calc(1 / 6 * 100vw);
            }

            &:nth-of-type(6) {
                bottom: 20%;
                width: 500px;
            }
        }
    }
}
</style>