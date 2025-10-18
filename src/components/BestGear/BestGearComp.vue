<template>
  <div
    class="flex flex-col mx-auto mt-35 max-w-87 mb-20 md:w-180 md:max-w-full xl:w-290"
    :class="[languageState.isFarsi ? 'xl:flex-row xl:gap-40' : 'xl:flex-row-reverse']"
  >
    <img class="rounded-lg md:hidden" src="/shared/mobile/image-best-gear.jpg" alt="best gear" />
    <img
      class="hidden md:block xl:hidden rounded-lg"
      src="/shared/tablet/image-best-gear.jpg"
      alt="best gear"
    />
    <img
      class="hidden xl:block rounded-lg"
      src="/shared/desktop/image-best-gear.jpg"
      alt="best gear"
    />
    <div
      class="flex flex-col text-center mx-auto md:w-4/5 xl:justify-center xl:w-2/5 xl:ml-0"
      :class="[languageState.isFarsi ? 'xl:text-right' : 'xl:text-left']"
    >
      <h4
        :class="{ hidden: languageState.isFarsi }"
        class="text-[1.8rem] tracking-wider font-semibold my-8 md:text-[2.5rem]"
      >
        BRINGING YOU THE <span class="text-orange-600">BEST</span> AUDIO GEAR
      </h4>
      <h4
        :dir="{ rtl: languageState.isFarsi }"
        :class="{ hidden: !languageState.isFarsi }"
        class="text-[1.8rem] tracking-wider font-semibold my-8 md:text-[2.5rem]"
      >
        <span class="text-orange-600"> بهترین </span>
        تجهیزات صوتی در اختیار شماست
      </h4>
      <p class="text-gray-500 w-7/8 mx-auto md:w-auto">
        {{ t('best gear content') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
