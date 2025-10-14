<template>
  <!-- the whole container, contains image and text -->
  <main class="flex flex-col items-center justify-center">
    <img class="scale-70 rounded-2xl" :src="imgSrc" :alt="imgAlt" />
    <!-- text section -->
    <section class="flex flex-col items-center justify-center -mt-10 gap-3">
      <!-- new product -->
      <p
        v-if="show"
        :class="[languageState.isFarsi ? 'text-xl' : '']"
        class="text-orange-600 tracking-[0.75rem]"
      >
        {{ t('new product') }}
      </p>
      <!-- product name -->
      <p
        :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
        :class="[languageState.isFarsi ? 'w-45' : 'w-50 font-bold']"
        class="text-3xl text-center"
      >
        {{ productName }}
      </p>
      <!-- content -->
      <p class="text-center text-gray-600 w-85">{{ productContent }}</p>
      <LinkButton />
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'
import LinkButton from '../LinkButtons/LinkButton.vue'

defineProps({
  imgSrc: String,
  imgAlt: String,
  show: {
    type: Boolean,
    default: false,
  },
  productName: String,
  productContent: String,
})

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
