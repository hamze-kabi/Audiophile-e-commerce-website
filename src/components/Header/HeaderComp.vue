<template>
  <!-- for screens upto 1024 -->
  <div class="flex items-center justify-around w-screen max-h-20 bg-black xl:hidden">
    <BurgerIcon />
    <h1 class="text-white text-2xl font-[poppins-extra-bold]">audiophile</h1>
    <img
      class="w-7 h-7"
      id="dd"
      src="@/assets/shopping-cart_90604-white.png"
      alt="@/assets/shopping-cart_90604-white.png"
    />
  </div>
  <!-- for screens 1440 and more -->
  <div class="hidden xl:flex items-center justify-around w-screen min-h-20 bg-black">
    <h1 class="text-white text-2xl font-[poppins-extra-bold]">audiophile</h1>
    <nav class="flex justify-evenly min-w-3xl">
      <RouterLink class="text-white" to="">HOME</RouterLink>
      <RouterLink class="text-white" to="">HEADPHONES</RouterLink>
      <RouterLink class="text-white" to="">SPEAKERS</RouterLink>
      <RouterLink class="text-white" to="">EARPHONES</RouterLink>
    </nav>
    <img
      class="w-7 h-7"
      id="dd"
      src="@/assets/shopping-cart_90604-white.png"
      alt="@/assets/shopping-cart_90604-white.png"
    />
  </div>
  <div class="w-5/6 h-0.5 m-auto bg-white"></div>
  <SideBar />
</template>

<script setup>
import BurgerIcon from './BurgerIcon.vue'
import SideBar from './SideBar.vue'
</script>
