<template>
  <div class="flex flex-col gap-5 md:flex-row md:gap-60 xl:flex-col xl:gap-10">
    <h4 class="text-2xl font-bold">{{ t('in the box') }}</h4>
    <ul>
      <li class="flex gap-5" v-for="item in product.inTheBoxContent" :key="item">
        <p class="text-orange-500">{{ item.qty }}x</p>
        <p class="text-gray-600">{{ item.name }}</p>
      </li>
    </ul>
  </div>
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

defineOptions({
  inheritAttrs: true,
})
</script>
