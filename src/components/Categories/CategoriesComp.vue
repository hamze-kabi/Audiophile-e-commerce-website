<template>
  <section
    class="flex flex-col items-center justify-center gap-26 pt-20 md:flex-row md:gap-10 md:px-5 lg:mt-10 xl:gap-30"
  >
    <SideBarCategory :image="headphonesThumbnail" :product="'HEADPHONES'" />
    <SideBarCategory :image="speakersThumbnail" :product="'SPEAKERS'" />
    <SideBarCategory :image="earphonesThumbnail" :product="'EARPHONES'" />
  </section>
</template>

<script setup>
import SideBarCategory from '../Header/SideBarCategory.vue'
import headphonesThumbnail from '@/assets/thumbnails/headphones-thumbnail.png'
import speakersThumbnail from '@/assets/thumbnails/speaker-thumbnail.png'
import earphonesThumbnail from '@/assets/thumbnails/earphones-thumbnail.png'
</script>
