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

  // cartItems.value.push({ p1: { d1: 'dd1', n1: 1 } })
  // cartItems.value.push({ p2: { d2: 'dd2', n2: 2 } })
  const addItem = function (product, number) {
    cartItems.value.push(product)
    // console.log(product.id)
    // cartItems.value.push()
  }

  const removeItem = function (id) {
    let yo
    cartItems.value.forEach((el, idx) => {
      if (el[0].id === id) {
        yo = idx
      }
      delete cartItems.value[yo]
    })
    // console.log(cartItems.value[0][0])
    // delete cartItems.value.product.title
    // console.log('removed: ', cartItems.value)
  }

  const removeAll = function () {
    for (let item in cartItems.value) {
      delete cartItems.value[item]
    }
    console.log('removed all: ', cartItems.value)
  }
  // /////////////////////////////////////////////////////// help
  // select value from key
  // console.log(yo.value['a'])

  // add
  // yo.value['c'] = 3

  // remove
  // delete yo.value.b

  // iteration
  // Object.entries(yo.value)
  // Object.keys(yo.value)
  // Object.values(yo.value)
  return { isOpen, toggle, open, close, cartItems, addItem, removeItem, removeAll }
})
