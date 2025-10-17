<template>
  <section
    class="flex flex-col items-center justify-center gap-26 pt-20 md:flex-row md:gap-10 md:px-5 lg:mt-10 xl:gap-30"
  >
    <SideBarCategory :image="headphonesThumbnail" :product="t('HEADPHONES')" />
    <SideBarCategory :image="speakersThumbnail" :product="t('SPEAKERS')" />
    <SideBarCategory :image="earphonesThumbnail" :product="t('EARPHONES')" />
  </section>
</template>

<script setup>
import SideBarCategory from '../Header/SideBarCategory.vue'
import headphonesThumbnail from '/thumbnails/headphones-thumbnail.png'
import speakersThumbnail from '/thumbnails/speaker-thumbnail.png'
import earphonesThumbnail from '/thumbnails/earphones-thumbnail.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
