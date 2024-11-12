<script setup lang="ts">
import { useCursorStore } from "@/composables/useCursorStore";
import { ref } from "vue";

const ROOT_CLASS = "marquee";

interface Props {
  name: string | null
  item: boolean
  link: string | null
  cursor: number | null
  pictureURL: string | null
}

const props = withDefaults(defineProps<Props>(), {
  name: null,
  item: false,
  link: null,
  cursor: null,
  picture: null
})

const { name, item, link } = props;
const { setCursorImageId } = useCursorStore();

const img = useImage()

let paintingSmallPicture = ref<string | null>(null)

if (props.pictureURL) {
  paintingSmallPicture = ref(`url(${img(props.pictureURL, null, { preset: 'thumbnail' })})`);
}
</script>

<template>
  <component :is="item ? 'li' : 'div'" ref="marqueeItem" :class="ROOT_CLASS" :data-cursor="name">
    <NuxtLink :title="`Lien vers la page dédiée à l'oeuvre '${name}'`" :class="`${ROOT_CLASS}__link typed small-text`"
      :to="link" @mouseenter="setCursorImageId(cursor)" @mouseleave="setCursorImageId(null)">{{ name }}</NuxtLink>
    <div :class="`${ROOT_CLASS}__wrapper`" aria-hidden="true">
      <ul :class="`${ROOT_CLASS}__content`">
        <li v-for="n in 12" :key="n" class="typed small-text">{{ name }}</li>
      </ul>
      <ul :class="`${ROOT_CLASS}__content`">
        <li v-for="n in 12" :key="n" class="typed small-text">{{ name }}</li>
      </ul>
    </div>
  </component>
</template>

<style scoped>
.marquee {
  --gap: 3rem;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(211, 211, 211, 0.15);
  position: relative;
  overflow: hidden;
}

.marquee:hover>div:after,
.marquee:hover>div:before {
  transform: scaleY(1);
}

.marquee:hover>div li {
  opacity: 1;
}

.marquee__link {
  letter-spacing: 0.15em;
  line-height: 1;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 1em 5vw;
  position: relative;
  text-transform: uppercase;
  display: flex;
  gap: 1em;
}

.marquee__link:before {
  content: "";
  display: block;
  width: 1em;
  position: relative;

  background: v-bind("paintingSmallPicture") center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 0;
}

.marquee ul li:after {
  content: "";
  display: block;
  width: 1em;

  background: v-bind("paintingSmallPicture") center;
  background-size: contain;
  background-repeat: no-repeat;
}

.marquee__wrapper {
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
  z-index: 10;
}

.marquee__wrapper li {
  display: flex;
  gap: 3rem;
  color: black;
  opacity: 0;
  transition: opacity 0.3s;
  text-transform: uppercase;
}

.marquee__wrapper:after,
.marquee__wrapper:before {
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

.marquee__wrapper:before {
  transform-origin: bottom;
  top: 0;
}

.marquee__wrapper:after {
  transform-origin: top;
  bottom: 0;
}

.marquee__content {
  flex-shrink: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
  justify-content: space-around;
  user-select: none;
  gap: var(--gap);
  padding: 0;
  margin: 0;
  animation: scroll 15s linear infinite;
}

@keyframes scroll {
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>
