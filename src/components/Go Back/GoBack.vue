<template>
  <!-- when clicked navigates to previous page -->
  <button
    @click="goBack"
    :class="languageState.isFarsi ? 'text-right pr-10' : 'text-left pl-10'"
    class="w-full mt-5 text-gray-600 cursor-pointer hover:text-orange-600"
  >
    {{ t('Go Back') }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'

const router = useRouter()
const goBack = () => {
  router.back()
}

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
