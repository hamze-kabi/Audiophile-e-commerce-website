<template>
  <div ref="modalRef" v-if="cartModalStore.isOpen" class="fixed inset-0 w-50 h-50 bg-red-500"></div>
</template>

<script setup>
import { useCartModalStore } from '@/stores/cartModal'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const modalRef = ref(null)
const cartModalStore = useCartModalStore()

// if the cart modal is open the click outside of it closes it using cartModalStore.close()
// except when the cart Icon is clicked, in this case the cartModalStore.toggle() closes the modal.
// this is done in order to avoid triggering both close() and toggle()
onClickOutside(modalRef, (event) => {
  if (event.target.id !== 'cartComp') {
    cartModalStore.close()
  }
})
</script>
