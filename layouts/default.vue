<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
<template>
    <!-- <LightSwitcher /> -->

    <main>
        <slot />
    </main>

    <Footer />
    <SpeedInsights />
</template>