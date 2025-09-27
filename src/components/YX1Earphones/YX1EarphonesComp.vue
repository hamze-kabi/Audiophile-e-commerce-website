<template>
  <div
    class="flex flex-col items-center justify-center mt-10 mx-auto gap-4 w-87 md:flex-row md:w-180"
  >
    <img
      class="md:hidden rounded-2xl"
      src="@/assets/home/mobile/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden md:block rounded-2xl h-53 md:h-90 xl:hidden"
      src="@/assets/home/tablet/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden xl:block rounded-2xl"
      src="@/assets/home/desktop/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <div
      class="flex flex-col items-start justify-center bg-gray-200 rounded-2xl w-full pl-7 h-53 md:h-90 xl:h-80 xl:pl-20 xl:pr-87"
    >
      <h2 class="text-[1.8rem] tracking-wider font-semibold">YX1 EARPHONES</h2>
      <LinkButton :style="'transparent'" />
    </div>
  </div>
</template>

<!-- <div
  class="flex flex-col items-start justify-center bg-gray-200 rounded-2xl w-87 pl-10 py-15 md:h-1/1 md:py-28"
>
  <h2 class="text-[1.8rem] tracking-wider font-semibold md:pr-35">YX1 EARPHONES</h2>
  <LinkButton :style="'transparent'" />
</div> -->

<script setup>
import LinkButton from '../LinkButtons/LinkButton.vue'
</script>

<!-- 
  <div
    class="flex flex-col items-center max-w-87 mx-auto mt-10 gap-6 justify-center md:flex-row md:w-90 xl:mx-0 xl:ml-125"
  >
    <img
      class="md:hidden rounded-2xl"
      src="@/assets/home/mobile/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden md:block rounded-2xl h-90 xl:hidden"
      src="@/assets/home/tablet/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden xl:block rounded-2xl h-90 -pl-130"
      src="@/assets/home/desktop/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />

    <div
      class="flex flex-col items-start justify-center bg-gray-200 rounded-2xl w-87 pl-10 py-15 md:h-1/1 md:py-28"
    >
      <h2 class="text-[1.8rem] tracking-wider font-semibold md:pr-35">YX1 EARPHONES</h2>
      <LinkButton :style="'transparent'" />
    </div>
  </div> -->
