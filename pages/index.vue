<script setup>
import paintings from '~/assets/data/paintings.json';

useSeoMeta({
    title: "Selfear | Peintre Fluo-Phosphorescent",
    description: "Explorez l'univers captivant de Selfear, artiste amateur en peinture fluo-phosphorescente. Plongez dans un spectacle de couleurs éblouissant et admirez la splendeur de l'exposition lumineuse !"
})

</script>

<template>
    <section>
        <Loader :paintings />
        <PaintingsParallax :paintings />
        <PaintingsMarquee :paintings />
    </section>
</template>