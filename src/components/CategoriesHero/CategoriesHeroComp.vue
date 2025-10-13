<template>
  <div
    class="flex items-start justify-center bg-black text-white text-4xl font-bold w-full h-24 xl:h-50 xl:pt-20 xl:-mt-5"
  >
    <p>{{ t('HEADPHONES') }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
