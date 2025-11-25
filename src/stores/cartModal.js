import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCartModalStore = defineStore('cartModal', () => {
  const isOpen = ref(false)
  console.log(0, isOpen.value)
  const toggle = function () {
    isOpen.value = !isOpen.value
    console.log(1, isOpen.value)
  }

  const open = function () {
    isOpen.value = true
    console.log(2, isOpen.value)
  }

  const close = function () {
    isOpen.value = false
    console.log(3, isOpen.value)
  }

  // watch(isOpen.value, (newVal) => {
  //   if (newVal) {
  //     document.body.classList.add('opacity-50')
  //   } else {
  //     document.body.classList.remove('opacity-50')
  //   }
  // })
  return { isOpen, toggle, open, close }
})
