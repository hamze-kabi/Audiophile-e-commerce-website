<template>
  <main
    :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
    class="flex flex-col items-center justify-center"
  >
    <!-- header component -->
    <HeaderComp class="bg-black w-full" />
    <GoBack />
  </main>
</template>

<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue'
import GoBack from '@/components/Go Back/GoBack.vue'
import { useRoute } from 'vue-router'
import { useLanguageStateStore } from '@/stores/languageState'

const route = useRoute()
const slug = route.params.slug
const languageState = useLanguageStateStore()
</script>
