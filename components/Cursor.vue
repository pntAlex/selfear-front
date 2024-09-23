<script setup>
const { $gsap } = useNuxtApp()

const ROOT_CLASS = 'cursor';

// const cursorImage = ref(null); // Default cursor image
const props = defineProps(['image']);

onMounted(() => {
    cursor()
})

// watch(() => props.image, (newImage) => {
//     cursorImage.value = newImage ?? null
// });

const cursor = () => {
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
    }

    document.addEventListener("pointermove", initPos);
    // document.addEventListener("scroll", initPos);
}

const { cursorImage } = useCursorStore()

</script>

<template>
    <div :class="ROOT_CLASS">
        <NuxtImg v-if="cursorImage" :src="cursorImage" aria-hidden="true" />
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
    }
}
</style>