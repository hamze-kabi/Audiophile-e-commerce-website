<!-- 
ACTS:
- create a hero section that can used in all categories
- create a product section that can be used in all categories

whole page layout:
a flex-col can be used for all screen sizes
- header
- hero
- product 1
- product 2
- product 3
- categories
- best gear
- footer

components:
  -header:
    same as homeview, IN ALL CATEGORIES
  -hero:
    a simple black bg, with the name of category inside it, similar in all screen sizes and lang, IN ALL CATEGORIES
  -product 1:
    mobile:
      note: text section floats to left in eng and to right in fa
      eng and fa:
        flex-col: img and text section
    tablet: same as mobile
    desktop:
      eng:
        flex-row: image and text section
      fa:
        reverse of above        
  -product 2:
    same as product 1, but when in desktop becomes flex-row-reverse
  -product 3:
    same as product 1
  -categories:
    same as categories of HomeView
  -best gear:
    same as categories of HomeView
  -footer:
    same as footer in HomeView
-->

<template>
  <!-- container of whole page -->
  <main
    :lang="$i18n.locale"
    :class="[languageState.isFarsi ? 'font-[family-name:rubik]' : '']"
    class="w-full h-full flex flex-col items-center justify-center"
  >
    <HeaderComp class="bg-black w-full" />
    <CategoriesHeroComp />
    <div v-for="headphone in HeadphonesData" :key="headphone.title">
      <CategoriesProduct :product="headphone" />
    </div>
  </main>
</template>

<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue'
import CategoriesHeroComp from '@/components/CategoriesHero/CategoriesHeroComp.vue'
import CategoriesProduct from '@/components/Categories Product/CategoriesProduct.vue'
import { useLanguageStateStore } from '@/stores/languageState'
import HeadphonesData from '@/assets/data/HeadphonesData.json'

const languageState = useLanguageStateStore()
</script>
