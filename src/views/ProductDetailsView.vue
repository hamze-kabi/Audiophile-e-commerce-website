<template>
  <main
    :lang="$i18n.locale"
    :class="[languageState.isFarsi ? 'font-[family-name:rubik]' : '']"
    class="w-full h-full flex flex-col items-center justify-center"
  >
    <!-- header component -->
    <HeaderComp class="bg-black w-full" />
    <GoBack />
    <ProductDescription :product="product" />
  </main>
</template>

<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue'
import GoBack from '@/components/Go Back/GoBack.vue'
import { useRoute } from 'vue-router'
import { useLanguageStateStore } from '@/stores/languageState'
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import EarphonesData from '@/assets/data/EarphonesData.json'
import ProductDescription from '@/components/ProductDescrption/ProductDescription.vue'
import { ref } from 'vue'

const route = useRoute()
const slug = route.params.slug
const languageState = useLanguageStateStore()
const product = ref('')
const productsDataFiles = [HeadphonesData, SpeakersData, EarphonesData]

// searches in the product files, and finds the target product
productsDataFiles.forEach((file) => {
  if (file[slug]) {
    product.value = file[slug]
  }
})
</script>
