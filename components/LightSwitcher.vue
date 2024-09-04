<template>
    <div class="light-switcher">
        <span>A</span>
        <span>B</span>
    </div>
</template>

<style lang="scss">
.light-switcher {
    position: fixed;
    top: 2vh;
    transform: translateY(-200%);
    align-self: center;
    border: 1px solid lightgray;
    background-color: var(--dark-bg);
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