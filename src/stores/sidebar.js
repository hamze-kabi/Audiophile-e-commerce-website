import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSideBarStore = defineStore('sidebar', () => {
  const isOpen = ref(false)

  const open = function () {
    isOpen.value = true
  }

  const close = function () {
    isOpen.value = false
  }

  return { isOpen, open, close }
})
