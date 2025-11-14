<template>
  <picture>
    <source media="(min-width:1440px)" :srcset="imageSet.desktop" />
    <source media="(min-width:768px)" :srcset="imageSet.tablet" />
    <img class="w-80 rounded-2xl md:w-170 xl:w-135" :src="imageSet.mobile" alt="" />
  </picture>
</template>

<script setup>
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import EarphonesData from '@/assets/data/EarphonesData.json'
import { ref } from 'vue'

const props = defineProps({
  receivedId: Number,
})

const imageSet = ref()
const imageAlt = ref('')

const findProduct = function () {
  ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
    Object.values(data).forEach((product) => {
      if (product.id === props.receivedId) {
        imageSet.value = product.otherImages
        imageAlt.value = product.title
      }
    })
  })
}
findProduct()
</script>
