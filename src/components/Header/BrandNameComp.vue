<template>
  <h1 class="text-white text-2xl font-extrabold">
    <RouterLink to="">{{ t('brand name') }}</RouterLink>
  </h1>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineOptions({
  inheritAttrs: true,
})
const { t } = useI18n()
</script>
