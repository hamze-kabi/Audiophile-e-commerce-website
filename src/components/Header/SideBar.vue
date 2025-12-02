<template>
  <menu
    class="absolute overflow-hidden h-screen pb-40 overflow-y-auto flex flex-col items-center gap-20 pt-20 bg-white top-28 transition-all duration-300"
    :class="[sidebar.isOpen ? 'w-full' : 'w-0']"
  >
    <SideBarCategory
      @click="sidebar.close"
      :to="'/categories/headphones'"
      :image="headphonesThumbnail"
      :product="t('HEADPHONES')"
    />
    <SideBarCategory
      @click="sidebar.close"
      :to="'/categories/speakers'"
      :image="speakersThumbnail"
      :product="t('SPEAKERS')"
    />
    <SideBarCategory
      @click="sidebar.close"
      :to="'/categories/earphones'"
      :image="earphonesThumbnail"
      :product="t('EARPHONES')"
    />
  </menu>
</template>

<script setup>
import { watch } from 'vue'
import { useSideBarStore } from '@/stores/sidebar'
import SideBarCategory from './SideBarCategory.vue'
import headphonesThumbnail from '/thumbnails/headphones-thumbnail.png'
import speakersThumbnail from '/thumbnails/speaker-thumbnail.png'
import earphonesThumbnail from '/thumbnails/earphones-thumbnail.png'
import { useI18n } from 'vue-i18n'

const sidebar = useSideBarStore()

const { t } = useI18n()

watch(
  () => sidebar.isOpen,
  (newVal) => {
    newVal
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  },
)
</script>
