<template>
  <RouterLink
    to=""
    class="px-7 py-3.5 h- font-bold text-sm transition-colors duration-300"
    :class="[bg, textColor, border, bgOnHover, textColorOnHover]"
    >{{ t('SEE PRODUCT') }}</RouterLink
  >
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  // there are three styles for buttons, orange, black and transparent, when a style is selected all of its styles get applied automatically
  // the default style is orange
  style: {
    type: String,
    default: 'orange',
  },
})

const { t } = useI18n()
const bg = ref('bg-orange-500')
const textColor = ref('text-white')
const border = ref('')
const bgOnHover = ref('hover:bg-orange-300')
const textColorOnHover = ref('')

const styleSelector = function () {
  if (props.style === 'black') {
    ;((bg.value = 'bg-black'), (bgOnHover.value = 'hover:bg-gray-700'))
  } else if (props.style === 'transparent') {
    ;((bg.value = 'bg-transparent'), (textColor.value = 'text-black'), (border.value = 'border-2'))
    ;((bgOnHover.value = 'hover:bg-black'), (textColorOnHover.value = 'hover:text-white'))
  }
}

onMounted(() => {
  styleSelector()
})
</script>
