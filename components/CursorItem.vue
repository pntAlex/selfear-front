<script setup lang="ts">
const { $gsap } = useNuxtApp();

const { cursorImageId } = useCursorStore();
const { data: paintings } = useNuxtData('paintings')

const { isMobile } = useDevice();

const image = ref<HTMLImageElement[]>([]);

const ROOT_CLASS = "cursor";

onMounted(() => {
  if (isMobile) {
    return;
  }
  initAnimation();
});

const initAnimation = () => {
  let posX: number | null = null;
  let posY: number | null = null;

  const initPos = ({ pageX, pageY }: { pageX: number; pageY: number }) => {
    posX = pageX || posX;
    posY = pageY || posY;

    $gsap.to(`.${ROOT_CLASS}`, {
      translateX: posX,
      translateY: posY,
      duration: 0.05,
    });
  };

  document.addEventListener("pointermove", initPos);
};
</script>

<template>
  <div v-if="!isMobile" ref="image" :class="ROOT_CLASS">
    <template v-for="({ id, picture: { url: src } }) in paintings.data">
      <NuxtImg preset="small" ref="images" :class="cursorImageId === id ? 'shown' : 'hidden'" :src aria-hidden="true" />
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
