<template>
  <div class="flex flex-col items-center max-w-87 mx-auto mt-10 gap-6 md:flex-row">
    <img
      class="md:hidden rounded-2xl"
      src="@/assets/home/mobile/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden md:block rounded-2xl"
      src="@/assets/home/tablet/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />

    <div class="flex flex-col items-start justify-center bg-gray-200 rounded-2xl w-87 pl-10 h-53">
      <h2 class="text-[1.8rem] tracking-wider font-semibold">YX1 EARPHONES</h2>
      <LinkButton :style="'transparent'" />
    </div>
  </div>
</template>

<script setup>
import LinkButton from '../LinkButtons/LinkButton.vue'
</script>
