<template>
  <!-- container of images title and see product button -->
  <div class="flex flex-col justify-center items-center gap-5">
    <picture class="w-5/6 mx-auto md:w-15/16">
      <source media="(min-width:1440px)" :srcset="imageSet.desktop" />
      <source media="(min-width:768px)" :srcset="imageSet.tablet" />
      <img class="rounded-2xl" :src="imageSet.mobile" :alt="imageAlt" />
    </picture>
    <p class="font-bold text-xl tracking-widest">{{ productName }}</p>
    <LinkButton />
  </div>
</template>

<script setup>
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import EarphonesData from '@/assets/data/EarphonesData.json'
import LinkButton from '../LinkButtons/LinkButton.vue'
import { ref } from 'vue'

const props = defineProps({
  receivedId: Number,
})

const imageSet = ref()
const imageAlt = ref('')
const productName = ref('')

const findProduct = function () {
  ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
    Object.values(data).forEach((product) => {
      if (product.id === props.receivedId) {
        imageSet.value = product.otherImages
        imageAlt.value = product.title
        productName.value = product.slug
      }
    })
  })
}
findProduct()
</script>
