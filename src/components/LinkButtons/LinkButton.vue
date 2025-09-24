<template>
  <RouterLink :to="to" :class="bg textColor ">{{ label }}</RouterLink>
</template>
<!-- <button class="bg-orange-400 px-7 py-3 text-gray-300 font-bold text-sm">SEE PRODUCT</button> -->
<script setup>
defineProps({
  to: {
    type: String,
    required: true,
    default: '',
  },
  label: {
    type: String,
    required: true,
    default: 'SEE PRODUCT',
  },
  bg: {
    type: String,
    required: true,
    default: 'bg-orange-400',
  },
  textColor: {
    type: String,
    required: true,
    default: 'text-gray-300',
  },
})
</script>
