<template>
  <div class="flex flex-col gap-5">
    <h4 class="text-2xl font-bold">{{ t('features') }}</h4>
    <p class="text-gray-600">{{ t(props.product.featuresContent) }}</p>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
</script>
