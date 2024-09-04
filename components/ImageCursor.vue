<template>
    <div class="image__cursor">
        <img aria-hidden="true" />
    </div>
</template>

<style lang="scss" scoped>
.image__cursor {
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