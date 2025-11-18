<template>
  <div class="flex flex-col gap-5 md:flex-row md:gap-60 xl:flex-col xl:gap-10">
    <h4 class="text-2xl font-bold">{{ t('in the box') }}</h4>
    <ul>
      <li class="flex gap-5" v-for="item in product.inTheBoxContent" :key="item">
        <p class="text-orange-500">{{ $n(item.qty) }}x</p>
        <p class="text-gray-600">{{ t(item.name) }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { numberLanguageCoverterFunc } from '@/utils/numbersLanguageConverter'
import { useLanguageStateStore } from '@/stores/languageState'
import i18n from '../../../plugins/i18n'

const { t } = useI18n()
const languageState = useLanguageStateStore()

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

defineOptions({
  inheritAttrs: true,
})

const translatedNum = ref()

// /////////////////////////////////////////////fix translation to fa
// const translateNum = function (num) {
//   if (languageState.isFarsi) {
//     return numberLanguageCoverterFunc('enToFa', num)
//   }
// }

// // translate the number when the language of website is changed
// watch(
//   () => languageState.isFarsi,
//   (newVal) => {
//     if (newVal) {
//       return translateNum('enToFa', num)
//     } else {
//       return translateNum('faToEn', num)
//     }
//   },
// )
</script>
