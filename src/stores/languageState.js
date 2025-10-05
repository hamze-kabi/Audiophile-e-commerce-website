import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStateStore = defineStore('language state', () => {
  const isFarsi = ref(false)

  const changeLanguage = function () {
    isFarsi.value = !isFarsi.value
  }

  return { isFarsi, changeLanguage }
})
