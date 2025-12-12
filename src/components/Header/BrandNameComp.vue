<template>
  <h1
    class="text-white text-2xl font-extrabold hover:text-orange-600 transition-colors duration-500 xl:text-3xl font-[rubik]"
  >
    <RouterLink to="/">{{ t('brand name') }}</RouterLink>
  </h1>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineOptions({
  inheritAttrs: true,
})
const { t } = useI18n()
</script>
