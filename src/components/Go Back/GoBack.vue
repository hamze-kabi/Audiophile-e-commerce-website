<template>
  <!-- when clicked navigates to previous page -->
  <button
    @click="goBack"
    class="w-full text-left ml-10 mt-5 text-gray-600 cursor-pointer hover:text-orange-600"
  >
    Go Back
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>
