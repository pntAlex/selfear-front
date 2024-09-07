<script setup>



// Listen for the event
defineEmits(['cursorChange']);
</script>

<template>
    <LightSwitcher />
    <main>
        <slot />
    </main>

    <Footer />
</template>