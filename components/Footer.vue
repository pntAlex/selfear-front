<script setup>
const ROOT_CLASS = "footer";
</script>

<template>
    <footer :class="ROOT_CLASS + ' column-border column-border-gray'">
        <div :class="ROOT_CLASS + '__contact'">
            <p :class="ROOT_CLASS + '__contact__copyright'">
                &copy; 2024 all rights reserved.<br />Selfear
            </p>
            <span>For any inquiries&nbsp;:</span>
            <NuxtLink :class="ROOT_CLASS + '__contact__mail'" to="mailto:contact@selfear.uv">
                <span>contact</span>@selfear.uv
            </NuxtLink>
            <nav :class="ROOT_CLASS + '__contact__nav'">
                <ul>
                    <li>
                        <NuxtLink to="https://www.instagram.com/selfearuv" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 50 50">
                                <path style="
                      fill: none;
                      stroke: var(--lightgray-border);
                      stroke-width: 2;
                      stroke-miterlimit: 10;
                    " d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z" />
                                <circle style="
                      fill: none;
                      stroke: var(--lightgray-border);
                      stroke-width: 2;
                      stroke-miterlimit: 10;
                    " cx="25" cy="25" r="10" />
                                <circle cx="37" cy="13" r="2" />
                            </svg>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div :class="ROOT_CLASS + '__headings'">
            <span><strong>fluorescent</strong> &
                <strong>phosphorescent</strong> acrylic painter</span>
            <p :class="ROOT_CLASS + '__heading'">selfear</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "~/assets/styles/footer.scss";
</style>