<template>
  <RouterLink
    @click="addToCartFunc"
    to=""
    class="px-7 py-3.5 h- font-bold text-sm transition-colors duration-300 bg-orange-500 text-white hover:bg-orange-300"
    :class="[bg, textColor, border, bgOnHover, textColorOnHover]"
    >{{ t('add to cart') }}</RouterLink
  >
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import EarphonesData from '@/assets/data/EarphonesData.json'

const props = defineProps({
  product: String,
  numOfOrders: {
    type: Number,
    default: 1,
  },
})

const { t } = useI18n()

const updateNumberOfOrdersInDataFile = function () {
  ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
    Object.values(data).forEach((product) => {
      if (product.id === props.product.id) {
        product.numberOfOrders = props.numOfOrders
      }
    })
  })
}

//  when add to cart btn is clicked the numbers selected in NumberOfOrders.vue gets emitted to ProductsDescription.vue
//  then gets received as props to this .vue file, this number updates numberOfOrders which all products have in json files
const addToCartFunc = function () {
  updateNumberOfOrdersInDataFile()
}
</script>
