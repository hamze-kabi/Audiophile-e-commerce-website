<template>
  <img
    class="cursor-pointer"
    @click="sidebar.open"
    v-if="!sidebar.isOpen"
    src="/shared/tablet/icon-hamburger.svg"
    alt="icon-hamburger"
  />
  <img
    @click="sidebar.close"
    v-if="sidebar.isOpen"
    src="/close button.png"
    alt="close button"
    class="w-4 cursor-pointer"
  />
</template>

<script setup>
import { useSideBarStore } from '@/stores/sidebar'

defineOptions({
  inheritAttrs: true,
})

const sidebar = useSideBarStore()
</script>
