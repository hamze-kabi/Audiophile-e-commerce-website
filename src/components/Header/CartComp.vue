<template>
  <img
    @click="cartModalStore.toggle"
    class="w-7 h-7 cursor-pointer"
    id="cartComp"
    src="/shopping-cart_90604-white.png"
    alt="/shopping-cart_90604-white.png"
  />
</template>

<script setup>
import { useCartModalStore } from '@/stores/cartModal'

defineOptions({
  inheritAttrs: true,
})

const cartModalStore = useCartModalStore()
</script>
