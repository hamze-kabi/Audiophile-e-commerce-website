<template>
  <button @click="sidebar.open" class="focus:outline-none p-5">
    <!-- lines -->
    <div class="flex flex-col gap-0.5">
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
      <div class="w-5 h-0.5 bg-white rounded-2xl"></div>
    </div>
  </button>
</template>

<script setup>
import { useSideBarStore } from '@/stores/sidebar'

const sidebar = useSideBarStore()
</script>
<!-- <template>
  <nav class="text-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center"> -->
<!-- Logo -->
<!-- <div class="flex-shrink-0 text-xl font-bold"></div> -->

<!-- Desktop Menu -->
<!-- <div class="hidden md:flex space-x-6">
          <a href="#" class="hover:text-gray-300">Home</a>
          <a href="#" class="hover:text-gray-300">About</a>
          <a href="#" class="hover:text-gray-300">Services</a>
          <a href="#" class="hover:text-gray-300">Contact</a>
        </div>
 -->
<!-- Mobile Burger Button -->
<!-- <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div> -->

<!-- Mobile Menu -->
<!-- <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <a href="#" class="block hover:text-gray-300">Home</a>
      <a href="#" class="block hover:text-gray-300">About</a>
      <a href="#" class="block hover:text-gray-300">Services</a>
      <a href="#" class="block hover:text-gray-300">Contact</a>
    </div>
  </nav>
</template> -->

<!-- <script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script> -->
