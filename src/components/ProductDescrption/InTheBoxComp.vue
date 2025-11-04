<template>
  <h4>{{ t('in the box') }}</h4>
  <ul>
    <li v-for="item in product.inTheBoxContent" :key="item">
      <p>{{ item.qty }}x</p>
      <p>{{ item.name }}</p>
    </li>
  </ul>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
