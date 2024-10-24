<script setup>
const { $gsap } = useNuxtApp();

const { cursorImage } = useCursorStore();
const { paintings } = usePaintingsStore();

const { isMobile } = useDevice();

const image = ref([]);

const ROOT_CLASS = "cursor";

onMounted(() => {
  if (isMobile) {
    return;
  }
  init();
});

const init = () => {
  let posX = null;
  let posY = null;

  const initPos = ({ pageX, pageY }) => {
    posX = pageX || posX;
    posY = pageY || posY;

    $gsap.to(`.${ROOT_CLASS}`, {
      translateX: posX,
      translateY: posY,
      duration: 0.05,
    });
  };

  // TODO Init cursor on load
  document.addEventListener("pointermove", initPos);
};
</script>

<template>
  <div v-if="!isMobile" ref="image" :class="ROOT_CLASS">
    <template v-for="{ cursor, id } in paintings" :key="id">
      <NuxtImg
        ref="images"
        :class="cursorImage === cursor ? 'shown' : 'hidden'"
        :src="cursor"
        aria-hidden="true"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: 15rem;
  transform-origin: center;
  pointer-events: none;
  display: grid;
  z-index: 1000;

  &.outside {
    img {
      transform: translateX(-100%);
    }
  }

  &:before {
    content: "";
    display: block;
    inline-size: 2ch;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid white;
    position: absolute;
    top: -1ch;
    left: -1ch;
  }

  img {
    bottom: 100%;
    position: absolute;
    width: 100%;
    animation: fadeOut 0.3s;
    transition: transform 0.5s ease-in-out;

    &.shown {
      display: block;
      animation: fadeIn 0.2s;

      @keyframes fadeIn {
        from {
          opacity: 0;
          display: none;
        }

        to {
          opacity: 1;
          display: block;
        }
      }
    }

    &.hidden {
      display: none;
      animation: fadeOut 0.2s;

      @keyframes fadeOut {
        from {
          opacity: 1;
          display: block;
        }

        to {
          opacity: 0;
          display: none;
        }
      }
    }
  }
}
</style>
