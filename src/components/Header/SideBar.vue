<template>
  <menu
    ref="menu"
    class="absolute z-1 top-1/11 lg:top-12.5 left-0 flex flex-col pt-3 pb-5 bg-white overflow-hidden transition-all duration-500 lg:pt-10 xl:hidden"
    :class="[sidebar.isOpen ? 'w-full' : 'w-0 p-0']"
  >
    <!-- categories container -->
    <section class="flex flex-col items-center gap-26 pt-20 md:flex-row md:gap-10 md:px-5">
      <SideBarCategory
        :to="'/categories/headphones'"
        :image="headphonesThumbnail"
        :product="t('HEADPHONES')"
      />
      <SideBarCategory :image="speakersThumbnail" :product="t('SPEAKERS')" />
      <SideBarCategory :image="earphonesThumbnail" :product="t('EARPHONES')" />
    </section>
  </menu>
</template>

<script setup>
import { ref } from 'vue'
import { useSideBarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import SideBarCategory from './SideBarCategory.vue'
import headphonesThumbnail from '@/assets/thumbnails/headphones-thumbnail.png'
import speakersThumbnail from '@/assets/thumbnails/speaker-thumbnail.png'
import earphonesThumbnail from '@/assets/thumbnails/earphones-thumbnail.png'
import { useI18n } from 'vue-i18n'

const sidebar = useSideBarStore()

const menu = ref(null)

// when sidebar is open, if clicked outside of the sidebar, sidebar gets closed
onClickOutside(menu, (event) => {
  if (sidebar.isOpen) {
    event.stopImmediatePropagation()
    sidebar.close()
  }
})

const { t } = useI18n()
</script>
