<!-- this component is used in sidebar and categories component -->
<template>
  <div
    dir="rtl"
    class="flex flex-col bg-gray-100 items-center justify-center h-40 w-80 rounded-3xl"
  >
    <img
      class="-translate-y-8 scale-55 md:scale-70 md:-translate-y-10"
      :src="image"
      alt="category image"
    />
    <p class="-translate-y-32 font-bold md:-translate-y-23 lg:-translate-y-28">{{ product }}</p>
    <RouterLink
      class="-translate-y-32 font-bold text-gray-500 text-sm md:-translate-y-23 lg:-translate-y-28"
      to=""
      >{{ t('shop') }}
      <span class="-translate-y-32 font-bold text-lg text-orange-600">></span></RouterLink
    >
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  image: String,
  product: String,
})

const { t } = useI18n()
</script>
