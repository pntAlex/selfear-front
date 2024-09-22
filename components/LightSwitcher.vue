<script setup>
const ROOT_CLASS = "light-switcher"
</script>

<template>
    <div :class="ROOT_CLASS">
        <span>A</span>
        <span>B</span>
    </div>
</template>

<style lang="scss">
.light-switcher {
    position: fixed;
    bottom: 2vh;
    // transform: translateY(-200%);
    align-self: center;
    border: 1px solid grey;
    background-color: var(--dark);
    border-radius: 2ch;
    width: 10ch;
    height: 3ch;
    display: flex;
    z-index: 1000;

    &>span {
        flex: 1;
        display: flex;
        place-items: center;
        place-content: center;
        border-radius: 2ch;
    }
}
</style>