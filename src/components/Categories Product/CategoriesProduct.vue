<template>
  <!-- the whole container, contains image and text -->
  <main class="flex flex-col items-center justify-center">
    <img :src="imgSrc" :alt="imgAlt" />
    <!-- text section -->
    <section class="flex flex-col items-center justify-center">
      <!-- new product -->
      <p
        v-if="show"
        :class="[languageState.isFarsi ? 'text-xl' : '']"
        class="text-orange-600 tracking-[0.75rem]"
      >
        {{ t('new product') }}
      </p>
      <!-- product name -->
      <p :dir="languageState.isFarsi ? 'rtl' : 'ltr'">
        {{ t('XX99 Mark II Headphones') }}
      </p>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'

defineProps({
  imgSrc: String,
  imgAlt: String,
  show: {
    type: Boolean,
    default: false,
  },
})

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
