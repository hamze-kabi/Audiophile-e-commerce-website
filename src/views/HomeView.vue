<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue'
import HeroComp from '@/components/Hero/HeroComp.vue'
import CategoriesComp from '@/components/Categories/CategoriesComp.vue'
import ZX9SpeakerComp from '@/components/ZX9Speaker/ZX9SpeakerComp.vue'
import ZX7SpeakerComp from '@/components/ZX7Speaker/ZX7SpeakerComp.vue'
import YX1EarphonesComp from '@/components/YX1Earphones/YX1EarphonesComp.vue'
import BestGearComp from '@/components/BestGear/BestGearComp.vue'
import FooterComp from '@/components/Footer/FooterComp.vue'
import { useLanguageStateStore } from '@/stores/languageState'

// use to manage language of site
const languageState = useLanguageStateStore()

const prepend = '/Audiophile-e-commerce-website'
</script>

<template>
  <div class="flex flex-col justify-center relative w-screen h-screen overflow-hidden">
    <picture>
      <source media="(min-width:1440px)" :srcset="prepend + '/home/desktop/image-hero.jpg'" />
      <source media="(min-width:768px)" :srcset="prepend + '/home/tablet/image-header.jpg'" />
      <img
        class="absolute inset-0 w-screen max-h-screen object-cover -z-1"
        :class="{ 'transform scale-x-[-1]': languageState.isFarsi }"
        :src="prepend + '/home/mobile/image-header.jpg'"
        alt="XX99 Mark II Headphones"
      />
    </picture>
    <div class="flex flex-col h-screen">
      <HeaderComp />
      <HeroComp />
    </div>
  </div>
  <!-- rest of the page, from categories upto footer -->
  <CategoriesComp />
  <ZX9SpeakerComp />
  <ZX7SpeakerComp />
  <YX1EarphonesComp />
  <BestGearComp />
  <FooterComp />
</template>

<style scoped></style>
