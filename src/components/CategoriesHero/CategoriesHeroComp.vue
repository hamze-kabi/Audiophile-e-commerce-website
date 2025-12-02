<template>
  <div
    class="flex items-start justify-center bg-black text-white text-4xl font-bold w-full h-24 xl:h-50 xl:pt-20 xl:-mt-5"
  >
    <p>{{ category }}</p>
  </div>
</template>

<script setup>
defineProps({
  category: String,
})
</script>
