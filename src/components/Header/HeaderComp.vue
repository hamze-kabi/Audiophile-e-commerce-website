<template>
  <!-- for screens upto 1024 -->
  <div class="flex items-center justify-between w-screen h-20 xl:hidden">
    <BurgerIcon />
    <BrandNameComp />
    <img
      class="w-7 h-7 mx-3 cursor-pointer md:-translate-x-2"
      id="dd"
      src="@/assets/shopping-cart_90604-white.png"
      alt="@/assets/shopping-cart_90604-white.png"
    />
  </div>
  <div class="flex text-white gap-5 justify-center mb-5 -mt-3 md:justify-end md:mr-5 xl:hidden">
    <button @click="languageChanger('en')" :class="enButtonColor" class="cursor-pointer">EN</button
    ><button @click="languageChanger('fa')" :class="faButtonColor" class="cursor-pointer">
      FA
    </button>
  </div>
  <hr class="border-t border-gray-100 opacity-20" />
  <!-- for screens 1440 and more -->
  <div class="hidden xl:flex items-center justify-around w-screen min-h-20 px-40">
    <BrandNameComp />
    <NavbarComp />
    <img
      class="w-7 h-7 cursor-pointer"
      src="@/assets/shopping-cart_90604-white.png"
      alt="@/assets/shopping-cart_90604-white.png"
    />
  </div>
  <div class="hidden xl:flex text-white gap-5 ml-335 -translate-y-12">
    <button @click="languageChanger('en')" :class="enButtonColor" class="cursor-pointer">EN</button
    ><button @click="languageChanger('fa')" :class="faButtonColor" class="cursor-pointer">
      FA
    </button>
  </div>
  <hr class="border-t border-gray-100 opacity-20 -translate-y-3" />
  <!-- <div class="w-5/6 h-0.5 m-auto bg-white"></div> -->
  <SideBar />
</template>

<script setup>
import BurgerIcon from './BurgerIcon.vue'
import SideBar from './SideBar.vue'
import NavbarComp from './NavbarComp.vue'
import BrandNameComp from './BrandNameComp.vue'
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

const { locale } = useI18n()
const enButtonColor = ref('text-white')
const faButtonColor = ref('text-white')

const languageButtonColorer = function () {
  if (locale.value === 'en') {
    enButtonColor.value = 'text-orange-500'
    faButtonColor.value = 'text-white'
  } else {
    enButtonColor.value = 'text-white'
    faButtonColor.value = 'text-orange-500'
  }
}

const languageChanger = function (targetLang) {
  locale.value = targetLang
  languageButtonColorer()
}

onMounted(() => {
  languageButtonColorer()
})
</script>
