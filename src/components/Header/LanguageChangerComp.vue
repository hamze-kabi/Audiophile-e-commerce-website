<template>
  <div class="flex text-white gap-5 justify-center mb-5 -mt-3 md:justify-end md:mr-5 xl:hidden">
    <button @click="languageChanger('en')" :class="enButtonColor" class="cursor-pointer">EN</button
    ><button @click="languageChanger('fa')" :class="faButtonColor" class="cursor-pointer">
      FA
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

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

const languageChanger = function (targetLang) {
  locale.value = targetLang
  languageButtonColorer()
}

onMounted(() => {
  languageButtonColorer()
})
</script>
