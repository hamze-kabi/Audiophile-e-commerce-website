<template>
  <p class="text-gray-400" :class="gridSettings">Copyright 2021. All Rights Reserved</p>
</template>

<script setup>
defineProps({
  gridSettings: String,
})
</script>
