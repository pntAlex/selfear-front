<script setup lang="ts">
import { ref } from 'vue'

const ROOT_CLASS = "marquee"

const { title, item, link, cursor } = defineProps({
    title: String,
    item: Boolean,
    link: String,
    cursor: String
})

const cursorPath = ref(`url(${cursor})`)

</script>

<template>
    <component ref="marqueeItem" :is="item ? 'li' : 'div'" :class="ROOT_CLASS" :data-cursor="title">
        <NuxtLink :title="`Lien vers la page dédiée à l'oeuvre '${title}'`" :class="`${ROOT_CLASS}__link`" :to="link">{{
            title }}</NuxtLink>
        <div :class="`${ROOT_CLASS}__wrapper`" aria-hidden="true">
            <ul :class="`${ROOT_CLASS}__content`">
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
            </ul>
            <ul :class="`${ROOT_CLASS}__content`">
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
                <li>{{ title }}</li>
            </ul>
        </div>
    </component>
</template>

<style scoped lang="scss">
.marquee {
    --gap: 3rem;
    --cursor-path: v-bind(cursorPath);

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(211, 211, 211, 0.15);
    position: relative;
    overflow: hidden;

    &:hover {
        &>div {

            &:after,
            &:before {
                transform: scaleY(1);
            }

            li {
                opacity: 1;
            }
        }
    }

    &__link {
        letter-spacing: 0.15em;
        line-height: 1;
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: none;
        color: inherit;
        padding-left: 2em;
        padding: 1.5rem 0 1.5rem 3rem;
        position: relative;
        text-transform: uppercase;
    }

    ul li:after {
        content: "";
        display: block;
        width: 1em;

        background: v-bind('cursorPath') center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    &__wrapper {
        position: absolute;
        pointer-events: none;
        inset: 0;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        padding-right: 2rem;
        overflow: hidden;
        user-select: none;
        gap: var(--gap);

        li {
            display: flex;
            font-size: 1.2rem;
            gap: 3rem;
            color: black;
            opacity: 0;
            transition: opacity 0.3s;
            text-transform: uppercase;
        }

        &:after,
        &:before {
            z-index: -1;
            content: "";
            display: block;
            height: 50%;
            width: 100%;
            position: absolute;
            transform: scaleY(0);
            background: white;
            transition: transform 0.3s;
        }

        &:before {
            transform-origin: bottom;
            top: 0;
        }

        &:after {
            transform-origin: top;
            bottom: 0;
        }
    }

    &__content {
        flex-shrink: 0;
        list-style: none;
        display: flex;
        overflow: hidden;
        justify-content: space-around;
        user-select: none;
        gap: var(--gap);
        padding: 0;
        margin: 0;
        animation: scroll 10s linear infinite;
    }

    @keyframes scroll {
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
    }
}
</style>