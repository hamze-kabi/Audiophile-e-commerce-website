<template>
  <h1 class="text-white text-2xl font-extrabold" :class="gridSettings">
    <RouterLink to="">audiophile</RouterLink>
  </h1>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  gridSettings: String,
})

const { t } = useI18n()
</script>
