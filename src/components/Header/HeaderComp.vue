<template>
  <!-- for screens upto 1024 -->
  <div class="flex items-center justify-between w-screen h-20 pb-4 xl:hidden">
    <BurgerIcon />
    <BrandNameComp />
    <img
      class="w-7 h-7 mx-3"
      id="dd"
      src="@/assets/shopping-cart_90604-white.png"
      alt="@/assets/shopping-cart_90604-white.png"
    />
  </div>
  <hr class="border-t border-gray-100 opacity-20" />
  <!-- for screens 1440 and more -->
  <div class="hidden xl:flex items-center justify-around w-screen min-h-20 px-40">
    <BrandNameComp />
    <NavbarComp />
    <img
      class="w-7 h-7"
      id="dd"
      src="@/assets/shopping-cart_90604-white.png"
      alt="@/assets/shopping-cart_90604-white.png"
    />
  </div>
  <hr class="border-t border-gray-100 opacity-20" />
  <!-- <div class="w-5/6 h-0.5 m-auto bg-white"></div> -->
  <SideBar />
</template>

<script setup>
import BurgerIcon from './BurgerIcon.vue'
import SideBar from './SideBar.vue'
import NavbarComp from './NavbarComp.vue'
import BrandNameComp from './BrandNameComp.vue'
</script>
