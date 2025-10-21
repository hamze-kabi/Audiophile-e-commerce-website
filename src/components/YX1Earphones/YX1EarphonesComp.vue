<template>
  <div
    class="flex flex-col items-center justify-center mt-10 mx-auto gap-4 max-w-87 md:w-180 md:max-w-full"
    :class="[languageState.isFarsi ? 'md:flex-row-reverse xl:w-290' : 'md:flex-row']"
  >
    <!-- image section, three images are loaded, each for a range screen sizes, mobile, tablet and large laptops -->
    <img
      class="md:hidden rounded-2xl"
      src="/home/mobile/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden md:block rounded-2xl h-53 md:h-90 xl:hidden"
      src="/home/tablet/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <img
      class="hidden xl:block rounded-2xl"
      src="/home/desktop/image-earphones-yx1.jpg"
      alt="earphones-yx1"
    />
    <!-- section that contains text and button -->
    <div
      class="flex flex-col justify-center gap-3 bg-gray-200 rounded-2xl w-full h-53 md:h-90 xl:h-80 xl:pl-20 xl:pr-87"
      :class="[languageState.isFarsi ? 'items-end  pr-7 xl:items-start ' : 'items-start pl-7']"
    >
      <h2 :dir="{ rtl: languageState.isFarsi }" class="text-[1.8rem] tracking-wider font-semibold">
        YX1 {{ t('EARPHONES') }}
      </h2>
      <LinkButton to="/product/yx1earphones" :style="'transparent'" />
    </div>
  </div>
</template>

<script setup>
import LinkButton from '../LinkButtons/LinkButton.vue'
import { useLanguageStateStore } from '@/stores/languageState'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
