<template>
  <nav
    :dir="[$i18n.locale === 'fa' ? 'rtl' : 'ltr']"
    class="flex flex-col items-center gap-4 text-white md:flex-row md:justify-center md:gap-10"
    :class="[$i18n.locale === 'fa' ? 'xl:gap-20 xl:text-lg' : '']"
  >
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to="/">{{
      t('HOME')
    }}</RouterLink>
    <RouterLink
      class="hover:text-orange-500 transition-colors duration-300"
      to="/categories/headphones"
      >{{ t('HEADPHONES') }}</RouterLink
    >
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to="">{{
      t('SPEAKERS')
    }}</RouterLink>
    <RouterLink class="hover:text-orange-500 transition-colors duration-300" to="">{{
      t('EARPHONES')
    }}</RouterLink>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineOptions({
  inheritAttrs: true,
})

const { t } = useI18n()
</script>
