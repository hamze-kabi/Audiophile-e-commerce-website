<template>
  <h1 class="text-white text-2xl font-[poppins-extra-bold]" :class="gridSettings">
    <RouterLink to="">audiophile</RouterLink>
  </h1>
</template>

<script setup>
defineProps({
  gridSettings: String,
})
</script>
