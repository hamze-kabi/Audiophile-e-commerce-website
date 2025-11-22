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
  <!-- <button @click="sidebar.open" class="focus:outline-none p-5 cursor-pointer"> -->
  <!-- lines -->
  <!-- <div class="flex flex-col gap-0.5">
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
    </div>
  </button> -->
</template>

<script setup>
import { useSideBarStore } from '@/stores/sidebar'
import { ref } from 'vue'

defineOptions({
  inheritAttrs: true,
})

const sidebar = useSideBarStore()

const showX = ref(false)

const toggleX = function () {
  showX.value = !showX.value
}
</script>
