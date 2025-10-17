<template>
  <!-- the images are set as background, there are three images, one for mobile, one for tablet and the other for large laptops -->
  <div
    class="max-w-87 mx-auto rounded-2xl bg-[url(/home/mobile/image-speaker-zx7.jpg)] bg-no-repeat h-90 bg-cover bg-right md:bg-[url(/home/tablet/image-speaker-zx7.jpg)] md:max-w-180 xl:bg-[url(/home/desktop/image-speaker-zx7.jpg)] xl:max-w-290"
  >
    <!-- text and button container -->
    <div class="flex flex-col items-start gap-3 ml-10 mt-10 pt-33 justify-center xl:ml-30">
      <h2 :dir="{ rtl: languageState.isFarsi }" class="text-[2rem] tracking-wider font-semibold">
        ZX7 {{ t('SPEAKER') }}
      </h2>
      <LinkButton :style="'transparent'" />
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
