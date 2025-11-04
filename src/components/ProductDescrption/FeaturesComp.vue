<template>
  <div class="flex flex-col">
    <h4>{{ t('features') }}</h4>
    <p>{{ t(props.product.featuresContent) }}</p>
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
