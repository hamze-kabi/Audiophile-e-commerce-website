<template>
  <div
    class="flex flex-col items-center justify-center bg-[#D87D4A] gap-5 text-white rounded-2xl max-w-87 mx-auto mt-30 pb-20 md:max-w-180 md:bg-[url(@/assets/home/desktop/pattern-circles.svg)] md:bg-center md:bg-size-[43rem] md:bg-no-repeat xl:flex-row xl:max-w-290 xl:h-140 xl:bg-size-[70rem] xl:bg-position-[top_right_4rem] xl:overflow-hidden xl:pb-0"
  >
    <img
      class="scale-50 -mt-10 md:scale-60 md:mt-2 xl:hidden"
      src="@/assets/home/mobile/image-speaker-zx9.png"
      alt="ZX9Speaker"
    />
    <img
      class="hidden xl:block xl:scale-60 xl:mt-10 xl:-ml-20"
      src="@/assets/home/desktop/image-speaker-zx9.png"
      alt="ZX9Speaker"
    />
    <div class="flex flex-col items-center justify-center gap-5 -mt-20 xl:items-start xl:mt-20">
      <h2 class="text-[2.5rem] tracking-wider font-semibold" :dir="{ rtl: languageState.isFarsi }">
        ZX9 {{ t('SPEAKER') }}
      </h2>
      <p class="text-center w-5/6 md:w-1/1 md:max-w-90 md:font-semibold xl:text-start">
        {{ t('zx9 content') }}
      </p>
      <LinkButton :style="'black'" />
    </div>
  </div>
</template>

<script setup>
import LinkButton from '../LinkButtons/LinkButton.vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
