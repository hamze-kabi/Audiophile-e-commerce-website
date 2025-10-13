<template>
  <button @click="sidebar.open" class="focus:outline-none p-5 cursor-pointer">
    <!-- lines -->
    <div class="flex flex-col gap-0.5">
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
    </div>
  </button>
</template>

<script setup>
import { useSideBarStore } from '@/stores/sidebar'

defineOptions({
  inheritAttrs: true,
})

const sidebar = useSideBarStore()
</script>
