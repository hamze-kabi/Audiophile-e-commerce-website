<template>
  <menu
    ref="menu"
    class="absolute top-1/13 lg:top-12.5 left-0 flex flex-col pt-3 bg-red-500 overflow-hidden transition-all duration-500 xl:hidden"
    :class="[sidebar.isOpen ? 'w-full' : 'w-0 p-0']"
  >
    <SideBarCategory />
  </menu>
</template>

<script setup>
import { ref } from 'vue'
import { useSideBarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import SideBarCategory from './SideBarCategory.vue'

const sidebar = useSideBarStore()

const menu = ref(null)

onClickOutside(menu, (event) => {
  if (sidebar.isOpen) {
    event.stopImmediatePropagation()
    sidebar.close()
  }
})
</script>
