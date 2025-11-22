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

<!-- <menu
    ref="menu"
    class="absolute z-1 top-1/11 lg:top-12.5 left-0 flex flex-col pt-3 pb-5 bg-white overflow-hidden transition-all duration-500 lg:pt-10 xl:hidden"
    :class="[sidebar.isOpen ? 'w-full' : 'w-0 p-0']"
  > -->
<!-- categories container -->
<!-- <section class="flex flex-col items-center gap-26 pt-20 md:flex-row md:gap-10 md:px-5">
      <SideBarCategory
        :to="'/categories/headphones'"
        :image="headphonesThumbnail"
        :product="t('HEADPHONES')"
      />
      <SideBarCategory
        :to="'/categories/speakers'"
        :image="speakersThumbnail"
        :product="t('SPEAKERS')"
      />
      <SideBarCategory
        :to="'/categories/earphones'"
        :image="earphonesThumbnail"
        :product="t('EARPHONES')"
      />
    </section>
  </menu> -->

<!-- import { ref } from 'vue'

import { onClickOutside } from '@vueuse/core'

  const menu = ref(null)

  // when sidebar is open, if clicked outside of the sidebar, sidebar gets closed
onClickOutside(menu, (event) => {
  if (sidebar.isOpen) {
    event.stopImmediatePropagation()
    sidebar.close()
  }
}) -->
