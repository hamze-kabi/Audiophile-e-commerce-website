<script setup>
import HeaderComp from './components/Header/HeaderComp.vue'
import HeroComp from './components/Hero/HeroComp.vue'
</script>

<template>
  <!-- to occupy and turn the whole screen into flex -->
  <div class="w-screen flex flex-col justify-center">
    <HeaderComp />
    <HeroComp />
  </div>
</template>

<style scoped></style>
