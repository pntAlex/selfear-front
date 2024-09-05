<script setup>
const ROOT_CLASS = "index";

useSeoMeta({
    title: "Selfear | Peintre Fluo-Phosphorescent",
    description: "Explorez l'univers captivant de Selfear, artiste amateur en peinture fluo-phosphorescente. Plongez dans un spectacle de couleurs éblouissant et admirez la splendeur de l'exposition lumineuse !"
})
</script>

<template>
    <section :class="ROOT_CLASS">
        <section :class="ROOT_CLASS + '__headings'">
            <div :class="ROOT_CLASS + '__headings__mask'" aria-hidden="true">
                <h1>selfear</h1>
            </div>

            <div :class="ROOT_CLASS + '__headings__mask'">
                <h1>selfear</h1>
            </div>

            <span :class="ROOT_CLASS + '__loader__progress'">
                <span></span>
            </span>
            <!-- <h2>UV/Night light painter</h2> -->
            <img :class="ROOT_CLASS + '__loader__image'" data-alpha="0" src="/images/fluid/main-2.jpg"
                alt="'fluid' - peinture acrylique Fluo - 20x14cm - toile en coton | selfear 2022" />
        </section>

        <PaintsParallax />

        <ol :class="ROOT_CLASS + '__paints'">
            <Marquee title="staar" :item=true :link="'/paints/staar'" />
            <Marquee title="radioactiv" :item=true :link="'/paints/radioactiv'" />
            <Marquee title="fluid" :item=true :link="'/paints/fluid'" />
            <Marquee title="spiraal" :item=true :link="'/paints/spiraal'" />
            <Marquee title="knowledge" :item=true :link="'/paints/knowledge'" />
            <Marquee title="eclectic" :item=true :link="'/paints/eclectic'" />
            <Marquee title="self" :item=true :link="'/paints/self'" />
        </ol>
    </section>

</template>

<style lang="scss" scoped>
@use "/assets/styles/index.scss";
</style>