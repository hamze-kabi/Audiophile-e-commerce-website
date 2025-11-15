<template>
  <!-- two dollar signs are written for both languages, dir does not do the job -->
  <div class="font-bold">
    <p>
      <span v-show="!languageState.isFarsi">$</span> {{ translatedNum }}
      <span v-show="languageState.isFarsi">$</span>
    </p>
  </div>
</template>

<script setup>
import { useLanguageStateStore } from '@/stores/languageState'
import { numberLanguageCoverterFunc } from '@/utils/numbersLanguageConverter'
import { ref, watch } from 'vue'

const props = defineProps({
  price: Number,
})

const languageState = useLanguageStateStore()

// the number is translated to active language of website
const translatedNum = ref(props.price)

// transalte at the startup of website
if (languageState.isFarsi) {
  translatedNum.value = numberLanguageCoverterFunc('enToFa', props.price)
}

// translate the number when the language of website is changed
watch(
  () => languageState.isFarsi,
  (newVal) => {
    if (newVal) {
      translatedNum.value = numberLanguageCoverterFunc('enToFa', props.price)
    } else {
      translatedNum.value = numberLanguageCoverterFunc('faToEn', props.price)
    }
  },
)
</script>

<!-- <template> -->
<!-- unit price -->
<!-- <p> -->
<!-- there are two dollars signs for Farsi and English prices, could not make it work right using dir -->
<!-- <span :class="{ hidden: languageState.isFarsi }">$</span> {{ translatedPrice }}
    <span :class="{ hidden: !languageState.isFarsi }">$</span>
  </p> -->
<!-- unit price x quantity number -->
<!-- <p>{{ props.translatedOrderQuantity }}</p> -->
<!-- </template> -->

<!-- <script setup>
import { useLanguageStateStore } from '@/stores/languageState'
import { ref, watch } from 'vue'
import { numberLanguageCoverterFunc } from '@/utils/numbersLanguageConverter'

// gets the price from its json file
const props = defineProps({
  price: Number,
  // order quantity recieved from the sibling element numberOfOrders.vue, translated to en or fa and recieved as String
  translatedOrderQuantity: String,
})

const languageState = useLanguageStateStore()
const translatedPrice = ref()

// price numbers are in English, it changes them to Persian if the active language is Persian on the initialization of website
if (languageState.isFarsi) {
  translatedPrice.value = numberLanguageCoverterFunc('enToFa', String(props.price))
} else {
  translatedPrice.value = numberLanguageCoverterFunc('faToEn', String(props.price))
}

// watches for change in active language to change the prices accordingly
watch(
  () => languageState.isFarsi,
  (farsiIsActive) => {
    if (farsiIsActive) {
      translatedPrice.value = numberLanguageCoverterFunc('enToFa', String(props.price))
    } else {
      translatedPrice.value = numberLanguageCoverterFunc('faToEn', String(props.price))
    }
  },
)
</script> -->
