<template>
  <div class="flex items-center justify-center gap-7 bg-gray-200 px-5">
    <button
      class="text-gray-500 hover:text-orange-500 hover:font-bold transition-all duration-200 cursor-pointer"
      @click="orderQuantity > 1 && orderQuantity--"
    >
      -
    </button>
    <p>{{ translatedOrderQuantity }}</p>
    <button
      class="text-gray-500 hover:text-orange-500 hover:font-bold transition-all duration-200 cursor-pointer"
      @click="orderQuantity++"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLanguageStateStore } from '@/stores/languageState'
import { numberLanguageCoverterFunc } from '@/utils/numbersLanguageConverter'

const orderQuantity = ref(1)
const translatedOrderQuantity = ref(orderQuantity.value)
const languageState = useLanguageStateStore()

// orderQuantity gets emitted to parent element to get received by addToCart element
const emit = defineEmits(['emittedOrderQuantity'])
watch(orderQuantity, (newVal) => {
  emit('emittedOrderQuantity', newVal)
})

// translates the order quantity on the startup, if the active language is Farsi
if (languageState.isFarsi) {
  translatedOrderQuantity.value = numberLanguageCoverterFunc('enToFa', orderQuantity.value)
}

// watches active language and change in value of orderQuantity and changes the language of orderQuantity accordingly
watch([() => languageState.isFarsi, orderQuantity], ([isFarsi, qty]) => {
  translatedOrderQuantity.value = isFarsi
    ? numberLanguageCoverterFunc('enToFa', qty)
    : numberLanguageCoverterFunc('faToEn', qty)
})
</script>

<!-- <template> -->
<!-- <div class="flex items-center justify-center gap-5">
    <button @click="orderQuantity > 1 && orderQuantity--">-</button>
    <p>{{ translatedOrderQuantity }}</p>
    <button @click="orderQuantity++">+</button>
  </div> -->
<!-- </template> -->

<!-- <script setup>
import { ref, watch } from 'vue'
import { numberLanguageCoverterFunc } from '@/utils/numbersLanguageConverter'
import { useLanguageStateStore } from '@/stores/languageState'

const languageState = useLanguageStateStore()
const orderQuantity = ref(1)
const translatedOrderQuantity = ref(1)

if (languageState.isFarsi) {
  translatedOrderQuantity.value = numberLanguageCoverterFunc('enToFa', orderQuantity.value)
}

watches active language and change in value of orderQuantity and changes the language of orderQuantity accordingly
watch([() => languageState.isFarsi, orderQuantity], ([isFarsi, qty]) => {
  translatedOrderQuantity.value = isFarsi
    ? numberLanguageCoverterFunc('enToFa', qty)
    : numberLanguageCoverterFunc('faToEn', qty)
})

translatedOrderQuantity.value gets emitted to parent element on the startup and every time its value is changed
const emit = defineEmits(['translatedOrderQuantity'])
emit('translatedOrderQuantity', translatedOrderQuantity.value)
watch(translatedOrderQuantity, (newVal) => {
  emit('translatedOrderQuantity', newVal)
})
</script> -->
