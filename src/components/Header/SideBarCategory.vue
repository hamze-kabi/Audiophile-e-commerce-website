<template>
  <div class="flex flex-col bg-gray-100 items-center h-40 w-80 rounded-3xl">
    <img class="-translate-y-33 scale-55" :src="image" alt="category image" />
    <p class="-translate-y-56 font-bold">{{ product }}</p>
    <RouterLink class="-translate-y-56 font-bold text-gray-500 text-sm" to=""
      >SHOP <span class="-translate-y-56 font-bold text-lg text-orange-600">></span></RouterLink
    >
  </div>
</template>
<script setup>
defineProps({
  image: String,
  product: String,
})
</script>

<!-- <img class="scale-55 -mt-30 sm:-mt-40" :src="image" alt="category image" />
    <p class="font-bold m-auto">{{ product }}</p> -->

<!-- <div class="bg-gray-200 tracking-wider">
    <img class="scale-55 -mt-30 sm:-mt-40" :src="image" alt="category image" />
    <p class="font-bold">{{ product }}</p>
    <RouterLink class="font-bold text-gray-500 text-sm -mt-30" to=""
      >SHOP <span class="font-bold text-lg text-orange-600 -mt-30">></span></RouterLink
    >
  </div> -->

<!-- <main class="flex flex-col items-center tracking-wider -mt-10">
    <div class="w-70 h-40 bg-gray-300 rounded-2xl">
      <img class="scale-40 relative mt-30" :src="image" alt="category-image" /> -->
<!-- texts -->
<!-- <div class="flex flex-col items-center relative -mt-15">
        <p class="font-bold">{{ product }}</p>
        <RouterLink class="font-bold text-gray-500 text-sm" to=""
          >SHOP <span class="font-bold text-lg text-orange-600">></span></RouterLink
        >
      </div>
    </div>
  </main> -->
<!-- <main class="flex flex-col items-center tracking-wider"> -->
<!-- <div class="flex flex-col items-center bg-gray-300 rounded-2xl"> -->
<!-- image and texts -->
<!-- <div class="flex flex-col items-center -top-20">
      <img class="scale-40" :src="image" alt="category-image" />
      <p class="font-bold -mt-25">{{ product }}</p>
      <RouterLink class="font-bold text-gray-500 text-sm" to=""
        >SHOP <span class="font-bold text-lg text-orange-600">></span></RouterLink
      >
    </div>
  </div> -->
<!-- </main> -->
