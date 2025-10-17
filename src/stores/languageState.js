import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStateStore = defineStore('language state', () => {
  const isFarsi = ref(true)
  const currentLang = ref(isFarsi.value == true ? 'fa' : 'en')

  const changeLanguage = function () {
    isFarsi.value = !isFarsi.value
    currentLang.value = currentLang.value === 'fa' ? 'en' : 'fa'
  }

  return { isFarsi, currentLang, changeLanguage }
})
