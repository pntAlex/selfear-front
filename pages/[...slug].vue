<template>
  <div>
    <!-- This is a catch-all route -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
if (route.path.startsWith('/_nuxt')) {
  navigateTo('/')
}
</script>
