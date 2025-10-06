<template>
  <p :dir="{ rtl: languageState.isFarsi }" class="text-gray-400 md:text-start">
    {{ t('footer description') }}
  </p>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'

defineOptions({
  inheritAttrs: true,
})

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
