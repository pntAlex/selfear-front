<script setup>
const ROOT_CLASS = "footer";
</script>

<template>
    <footer :class="`${ROOT_CLASS} column-border column-border-gray`">
        <div :class="`${ROOT_CLASS}__contact`">

            <div :class="`${ROOT_CLASS}__contact__mail__wrapper`">
                <!-- <span>for any inquiries&nbsp;:</span> -->
                <NuxtLink :class="`${ROOT_CLASS}__contact__mail`" to="mailto:a_pinot@icloud.com">
                    <span>a_pinot</span>@icloud.com
                </NuxtLink>
            </div>

            <p :class="`${ROOT_CLASS}__contact__copyright`">
                &copy; 2024 all rights reserved.<br />selfear
            </p>

            <nav :class="`${ROOT_CLASS}__contact__socials`">
                <ul>
                    <li>
                        <NuxtLink title="Lien vers l'Instagram de l'artiste selfear"
                            to="https://www.instagram.com/selfearuv" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 50 50">
                                <path style="
                          fill: none;
                          stroke: var(--light);
                          stroke-width: 2;
                          stroke-miterlimit: 10;
                        " d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z" />
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
        <div :class="`${ROOT_CLASS}__headings`">
            <span><strong>fluorescent</strong> &
                <strong>phosphorescent</strong> acrylic painter</span>
            <span :class="`${ROOT_CLASS}__heading typed`" v-text-splitted>selfear</span>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    overflow: hidden;
    display: grid;
    position: relative;
    background: var(--dark);
    padding: 4rem 5vw 0;

    &__headings {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        justify-content: flex-end;
        transform: translateY(7rem);

        strong {
            color: blue;

            &:last-of-type {
                color: yellow;
            }
        }
    }

    &__contact {
        display: grid;
        grid-template-areas: "copyright mail socials";
        grid-template-columns: calc(1 / 6* 100vw) 1fr calc(1 / 6* 100vw);
        flex-direction: column;
        align-items: center;
        position: relative;

        &__section {
            display: flex;

            &:nth-child(1) {}

            &:nth-child(2) {
                width: 100%;
                align-items: center;
                justify-content: space-between;
            }
        }

        &__mail {
            font-size: 3rem;
            text-decoration: none;
            color: white;
            line-height: 1;

            span {
                color: var(--light);
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: var(--light);
                color: transparent;
            }

            &__wrapper {
                grid-area: mail;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }

        &>span {
            font-size: 1.2rem;
            margin-bottom: 1em;
        }

        &__copyright {
            grid-area: copyright;
            align-self: flex-end;
            justify-self: flex-start;
            margin: 0;
            letter-spacing: -0.05ch;
            font-size: 0.8rem;
        }

        &__socials {
            grid-area: socials;
            place-self: flex-end;
            display: flex;
            gap: 1rem;

            ul {
                margin: 0;
                list-style: none;
            }

            a {
                color: var(--light);
                text-decoration: none;

                svg {
                    width: 1.4rem;

                    path {
                        transition: fill 0.4s;
                    }
                }

                &:hover {
                    svg path {
                        fill: white;
                    }
                }
            }
        }
    }

    &__heading {
        @include title(20vw);
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>