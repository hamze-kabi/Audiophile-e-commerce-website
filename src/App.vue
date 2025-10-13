<!-- 
-- PROGRESS --
--- BACKLOG ---
-->

<script setup>
import HeaderComp from './components/Header/HeaderComp.vue'
import HeroComp from './components/Hero/HeroComp.vue'
import CategoriesComp from './components/Categories/CategoriesComp.vue'
import ZX9SpeakerComp from './components/ZX9Speaker/ZX9SpeakerComp.vue'
import ZX7SpeakerComp from './components/ZX7Speaker/ZX7SpeakerComp.vue'
import YX1EarphonesComp from './components/YX1Earphones/YX1EarphonesComp.vue'
import BestGearComp from './components/BestGear/BestGearComp.vue'
import FooterComp from './components/Footer/FooterComp.vue'
import { useLanguageStateStore } from './stores/languageState'

// use to manage language of site
const languageState = useLanguageStateStore()
</script>
<template>
  <!-- to occupy and turn the whole screen into flex -->
  <div
    :lang="$i18n.locale"
    class="w-screen flex flex-col justify-center bg-[url(@/assets/home/mobile/image-header.jpg)] bg-no-repeat bg-cover bg-position-[center_bottom_2rem] md:bg-[url(@/assets/home/tablet/image-header.jpg)] md:bg-position-[center_top_0rem] lg:bg-center"
    :class="[
      languageState.isFarsi
        ? 'font-[family-name:rubik] xl:bg-[url(@/assets/home/desktop/image-hero-flipped.jpg)]'
        : 'xl:bg-[url(@/assets/home/desktop/image-hero.jpg)]',
    ]"
  >
    <!-- container of header and hero -->
    <div>
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
