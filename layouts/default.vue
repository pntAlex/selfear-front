<template>
    <main>
        <slot />
    </main>

    <Footer />
</template>

<style scoped lang="scss">
main {
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>