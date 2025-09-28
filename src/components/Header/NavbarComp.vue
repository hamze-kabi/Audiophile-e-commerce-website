<template>
  <nav
    class="flex flex-col items-center gap-4 text-white md:flex-row md:justify-center md:gap-10"
    :class="gridSettings"
  >
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to="">HOME</RouterLink>
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to=""
      >HEADPHONES</RouterLink
    >
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to=""
      >SPEAKERS</RouterLink
    >
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to=""
      >EARPHONES</RouterLink
    >
  </nav>
</template>

<script setup>
defineProps({
  gridSettings: String,
})
</script>

<!-- <template>
  <nav class="flex justify-center gap-15 min-w-3xl" :class="[axis, yo, width, itemsCenter, gap]">
    <RouterLink class="text-white hover:text-orange-500 transition-colors duration-300" to=""
      >HOME</RouterLink
    >
    <RouterLink class="text-white hover:text-orange-500 transition-colors duration-300" to=""
      >HEADPHONES</RouterLink
    >
    <RouterLink class="text-white hover:text-orange-500 transition-colors duration-300" to=""
      >SPEAKERS</RouterLink
    >
    <RouterLink class="text-white hover:text-orange-500 transition-colors duration-300" to=""
      >EARPHONES</RouterLink
    >
  </nav>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  axis: {
    type: String,
    default: 'flex-row',
  },
})

const yo = ref('bg-red-500')
const width = ref('min-w-auto')
const itemsCenter = ref('items-center')
const gap = ref('gap-0')
</script> -->
