<template>
  <div
    :dir="[$i18n.locale === 'fa' ? 'rtl' : 'ltr']"
    ref="modalRef"
    v-if="cartModalStore.isOpen"
    class="bg-orange-300 rounded-xl p-5 fixed top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-3/4 md:-translate-x-1/2 xl:-translate-y-70/100"
    :class="[$i18n.locale === 'fa' ? 'xl:left-1/5 xl:-translate-x-0' : '']"
  >
    <!-- container of cart text and remove all -->
    <div class="flex justify-between mb-5">
      <p>{{ t('CART') }}({{ Object.keys(cartModalStore.cartItems).length }})</p>
    </div>
    <div class="flex flex-col gap-3">
      <ul v-for="item in cartModalStore.cartItems" :key="item">
        <li
          class="flex items-center gap-3 bg-orange-200 p-1 rounded-xl"
          :class="[$i18n.locale === 'fa' ? '' : '']"
          :dir="[$i18n.locale === 'fa' ? 'rtl' : 'ltr']"
        >
          <img class="w-15 rounded-xl" :src="prepend + item[0].cartImage" :alt="item[0].title" />
          <div class="flex flex-col">
            <p>{{ t(item[0].title) }}</p>
            <p>{{ t('Unit price') }}: ${{ item[0].price }}</p>
          </div>
          <div class="flex flex-col">
            <p>{{ t('Units') }}: {{ item[1] }}</p>
            <p>{{ t('Subtotal') }}: ${{ SubtotalCalculator(item[0].price, item[1]) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <p :dir="[$i18n.locale === 'fa' ? 'rtl' : 'ltr']">{{ t('Total') }}: ${{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { useCartModalStore } from '@/stores/cartModal'
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const modalRef = ref(null)
const cartModalStore = useCartModalStore()
const { t } = useI18n()
// const totalPrice = ref(0)

const totalPrice = computed(() =>
  cartModalStore.cartItems.reduce((sum, [product, quantity]) => sum + product.price * quantity, 0),
)

const SubtotalCalculator = (price, units) => price * units

// if the cart modal is open the click outside of it closes it using cartModalStore.close()
// except when the cart Icon is clicked, in this case the cartModalStore.toggle() closes the modal.
// this is done in order to avoid triggering both close() and toggle()
onClickOutside(modalRef, (event) => {
  if (event.target.id !== 'cartComp') {
    cartModalStore.close()
  }
})

const prepend = '/Audiophile-e-commerce-website'
</script>
