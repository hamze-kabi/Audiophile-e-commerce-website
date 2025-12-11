import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartModalStore = defineStore('cartModal', () => {
  // the following lines are related to opening and closing the cart modal
  const isOpen = ref(false)
  const toggle = function () {
    isOpen.value = !isOpen.value
  }

  const open = function () {
    isOpen.value = true
  }

  const close = function () {
    isOpen.value = false
  }

  // the following lines are related to management of cart items
  const cartItems = ref([])

  const addItem = function (product, number) {
    cartItems.value.push(product)
  }

  const removeItem = function (id) {
    let yo
    cartItems.value.forEach((el, idx) => {
      if (el[0].id === id) {
        yo = idx
      }
      delete cartItems.value[yo]
    })
  }

  const removeAll = function () {
    for (let item in cartItems.value) {
      delete cartItems.value[item]
    }
    console.log('removed all: ', cartItems.value)
  }
  return { isOpen, toggle, open, close, cartItems, addItem, removeItem, removeAll }
})
