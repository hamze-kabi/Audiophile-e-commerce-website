<template>
  <main
    class="flex flex-col items-center justify-center gap-6 pt-30 pb-30 md:pb-40 xl:items-start xl:ml-47"
    :dir="[$i18n.locale === 'fa' ? 'rtl' : 'ltr']"
    :class="{ 'xl:mr-47 ml-0': languageState.isFarsi }"
  >
    <p
      class="tracking-[0.7rem] text-gray-600 font-(family-name:rubik)"
      :class="{ 'text-2xl': languageState.isFarsi }"
    >
      {{ t('new product') }}
    </p>
    <h2
      :class="{ hidden: languageState.isFarsi }"
      class="text-4xl tracking-wide font-bold text-white font-sans md:text-6xl"
    >
      XX99 MARK II
    </h2>
    <h2
      class="text-4xl tracking-wide font-bold -mt-3 text-white md:text-6xl"
      :class="{ '-mb-3': languageState.isFarsi }"
    >
      {{ t('HEADPHONES') }}<span :class="[$i18n.locale === 'en' ? 'hidden' : '']"> های</span>
    </h2>
    <h2
      :class="{ hidden: !languageState.isFarsi }"
      class="text-4xl tracking-wide font-bold text-white font-sans md:text-6xl"
    >
      XX99 MARK II
    </h2>
    <p
      class="text-center w-70 text-gray-400 xl:text-left"
      :class="{ 'xl:text-right': languageState.isFarsi }"
    >
      {{ t('hero content') }}
    </p>
    <LinkButton />
  </main>
</template>

<script setup>
import LinkButton from '../LinkButtons/LinkButton.vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
