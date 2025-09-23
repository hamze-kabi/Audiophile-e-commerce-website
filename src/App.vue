<script setup>
import HeaderComp from './components/Header/HeaderComp.vue'
import HeroComp from './components/Hero/HeroComp.vue'
</script>

<template>
  <!-- to occupy and turn the whole screen into flex -->
  <div
    class="w-screen flex flex-col justify-center bg-[url(@/assets/home/mobile/image-header.jpg)] bg-no-repeat bg-cover bg-position-[center_bottom_2rem] md:bg-[url(@/assets/home/tablet/image-header.jpg)] md:bg-position-[center_top_0rem]"
  >
    <!-- container of header and hero -->
    <div>
      <HeaderComp />
      <HeroComp />
    </div>
  </div>
</template>

<style scoped></style>
