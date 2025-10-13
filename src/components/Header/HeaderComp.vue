<template>
  <!-- the main container, does not include the horizontal line at the bottom of the header -->
  <div
    v-bind="$attrs"
    class="grid gird-cols-3 grid-rows-3 justify-around items-center pt-5 xl:flex"
    :class="{ 'xl:flex-row-reverse': languageState.isFarsi }"
  >
    <!-- inheritAttrs is used to give additional classes -->
    <BurgerIcon class="row-start-1 col-start-1 xl:hidden" />
    <BrandNameComp class="row-start-1 col-start-2 pr-6" />
    <NavbarComp class="hidden xl:flex" />
    <CartComp class="row-start-1 col-start-3" />
    <LanguageChangerComp class="row-start-2 col-start-1 col-span-3 mt-2" />
    <hr
      class="border-t border-gray-100 opacity-20 row-start-3 col-start-1 col-span-3 -mt-18 xl:hidden"
    />
    <SideBar />
  </div>
  <hr class="hidden xl:block border-t border-gray-100 opacity-20 mt-5" />
</template>

<script setup>
import BurgerIcon from './BurgerIcon.vue'
import SideBar from './SideBar.vue'
import NavbarComp from './NavbarComp.vue'
import BrandNameComp from './BrandNameComp.vue'
import CartComp from './CartComp.vue'
import LanguageChangerComp from './LanguageChangerComp.vue'
import { useLanguageStateStore } from '@/stores/languageState'

defineOptions({
  inheritAttrs: true,
})

const languageState = useLanguageStateStore()
</script>
