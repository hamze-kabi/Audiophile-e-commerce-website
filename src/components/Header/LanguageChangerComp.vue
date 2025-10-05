<template>
  <div class="flex text-white gap-5 justify-center mb-5 -mt-3">
    <button @click="languageChanger('en')" :class="enButtonColor" class="cursor-pointer">EN</button
    ><button @click="languageChanger('fa')" :class="faButtonColor" class="cursor-pointer">
      FA
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import { useLanguageStateStore } from '@/stores/languageState'

defineOptions({
  inheritAttrs: true,
})

const { locale } = useI18n()
const enButtonColor = ref('text-white')
const faButtonColor = ref('text-white')

const languageButtonColorer = function () {
  if (locale.value === 'en') {
    enButtonColor.value = 'text-orange-500'
    faButtonColor.value = 'text-white'
  } else {
    enButtonColor.value = 'text-white'
    faButtonColor.value = 'text-orange-500'
  }
}

const languageState = useLanguageStateStore()

const languageChanger = function (targetLang) {
  locale.value = targetLang
  languageButtonColorer()
  languageState.changeLanguage()
}

onMounted(() => {
  languageButtonColorer()
})
</script>
