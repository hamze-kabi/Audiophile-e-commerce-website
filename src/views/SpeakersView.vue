<template>
  <!-- container of whole page -->
  <main
    :lang="$i18n.locale"
    :class="[languageState.isFarsi ? 'font-[family-name:rubik]' : '']"
    class="w-full h-full flex flex-col items-center justify-center"
  >
    <!-- header component -->
    <HeaderComp class="bg-black w-full" />
    <!-- hero of categories component -->
    <CategoriesHeroComp :category="t('SPEAKERS')" />
    <!-- production components, created using iteration through SpeakersData.json -->
    <div v-for="speaker in SpeakersData" :key="speaker.title">
      <CategoriesProduct :product="speaker" />
    </div>
    <CategoriesComp class="w-full mt-7" />
    <BestGearComp />
    <FooterComp />
  </main>
</template>

<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue'
import CategoriesHeroComp from '@/components/CategoriesHero/CategoriesHeroComp.vue'
import CategoriesProduct from '@/components/Categories Product/CategoriesProduct.vue'
import { useLanguageStateStore } from '@/stores/languageState'
import SpeakersData from '@/assets/data/SpeakersData.json'
import CategoriesComp from '@/components/Categories/CategoriesComp.vue'
import BestGearComp from '@/components/BestGear/BestGearComp.vue'
import FooterComp from '@/components/Footer/FooterComp.vue'
import { useI18n } from 'vue-i18n'

const languageState = useLanguageStateStore()
const { t } = useI18n()
</script>
