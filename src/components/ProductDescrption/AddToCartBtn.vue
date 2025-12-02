<!-- 
solve the problem:
how should I write the product?
  product
how should I write the numOfOrders?
  numOfOrders
how should I write the cartItems?
  cartModalStore.cartItems
when used cartModalStore.cartItems.push([product, numOfOrders]):
  how to access cartItems -> product?
    cartModalStore.cartItems[#][0]
  how to access cartItems -> numOfOrders?
    cartModalStore.cartItems[#][1]

-->

<template>
  <RouterLink
    @click="cartModalStore.cartItems.push([product, numOfOrders])"
    to=""
    class="px-7 py-3.5 h- font-bold text-sm transition-colors duration-300 bg-orange-500 text-white hover:bg-orange-300 active:bg-green-300"
    :class="[bg, textColor, border, bgOnHover, textColorOnHover]"
    >{{ t('add to cart') }}</RouterLink
  >
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { useCartModalStore } from '@/stores/cartModal'

const cartModalStore = useCartModalStore()

const props = defineProps({
  product: String,
  numOfOrders: {
    type: Number,
    default: 1,
  },
})

const { t } = useI18n()

// const pushDataToCartItems = function (props.product, numberOfOrders) {
//   cartModalStore.cartItems.push([props.product, numberOfOrders])
//   // console.log(cartModalStore.cartItems[0])
//   console.log(props.product)
// }

// (cartModalStore.cartItems.addItem(product, numOfOrders),
// console.log(cartModalStore.cartItems))

// const updateNumberOfOrdersInDataFile = function () {
//   ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
//     Object.values(data).forEach((product) => {
//       if (product.id === props.product.id) {
//         product.numberOfOrders = props.numOfOrders
//       }
//     })
//   })
// }

//  when add to cart btn is clicked the numbers selected in NumberOfOrders.vue gets emitted to ProductsDescription.vue
//  then gets received as props to this .vue file, this number updates numberOfOrders which all products have in their
//  respective json files
// const addToCartFunc = function () {
//   updateNumberOfOrdersInDataFile()
//   CartModalStore.addItem(props.product.slug, props.numOfOrders)
// }
</script>
