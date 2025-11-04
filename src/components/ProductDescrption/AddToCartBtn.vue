<template>
  <RouterLink
    :to="to"
    class="px-7 py-3.5 h- font-bold text-sm transition-colors duration-300 bg-orange-500 text-white hover:bg-orange-300"
    :class="[bg, textColor, border, bgOnHover, textColorOnHover]"
    >{{ t('add to cart') }}</RouterLink
  >
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
