<template>
    <main>
        <LightSwitcher />

        <section class="section main__headings">
            <div aria-hidden="true" class="heading-mask">
                <h1>selfear</h1>
            </div>
            <div class="heading-mask-large">
                <h1 data-color="white">selfear</h1>
            </div>
            <span class="loader-progress">
                <span></span>
            </span>
            <!-- <h2>UV/Night light painter</h2> -->
            <img class="loader-image" data-alpha="0" src="~/assets/images/fluid/main-2.jpg" />
        </section>

        <PaintsParallax />

        <ol class="paints__section">
            <Marquee title="staar" :item=true :link="'/paints/staar'" />
            <Marquee title="radioactiv" :item=true :link="'/paints/radioactiv'" />
            <Marquee title="fluid" :item=true :link="'/paints/fluid'" />
            <Marquee title="spiraal" :item=true :link="'/paints/spiraal'" />
            <Marquee title="knowledge" :item=true :link="'/paints/knowledge'" />
            <Marquee title="eclectic" :item=true :link="'/paints/eclectic'" />
            <Marquee title="self" :item=true :link="'/paints/self'" />
        </ol>

        <ImageCursor />
    </main>
</template>

<style lang="scss">
@use "/assets/styles/index.scss";
</style>