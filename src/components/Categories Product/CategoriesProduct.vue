<template>
  <!-- container of images and text section -->
  <main
    :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
    :class="props.product.xlFlexRowDirection"
    class="flex flex-col items-center justify-center mt-15 gap-4 md:gap-10 xl:gap-30 xl:mb-20"
  >
    <!-- images for mobile, md and xl -->
    <picture>
      <source media="(min-width:1440px)" :srcset="props.product.images.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.images.tablet" />
      <img
        class="w-80 rounded-2xl md:w-170 xl:w-135"
        :src="props.product.images.mobile"
        alt="XX99 Mark II Headphones"
      />
    </picture>
    <!-- text section -->
    <section
      class="flex flex-col text-center items-center justify-center gap-4 w-85 md:w-4/5 xl:w-120 xl:gap-7 xl:items-start xl:text-start"
    >
      <p
        v-if="props.product.newProduct"
        :class="[languageState.isFarsi ? 'text-xl' : '']"
        class="text-orange-600 tracking-[0.75rem]"
      >
        {{ t('new product') }}
      </p>
      <p
        :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
        :class="[languageState.isFarsi ? '' : 'font-bold']"
        class="text-3xl w-50 md:w-full md:text-4xl"
      >
        {{ t(props.product.title) }}
      </p>
      <p class="text-gray-600">{{ t(props.product.content) }}</p>
      <LinkButton />
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'
import LinkButton from '../LinkButtons/LinkButton.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  xlFlexRowDirection: {
    type: String,
    default: 'flex-row',
  },
})

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>

<!-- <div class="hidden">
    <main class="flex flex-col items-center justify-center">
      <img class="scale-70 rounded-2xl" :src="imgSrc" :alt="imgAlt" />
      <section class="flex flex-col items-center justify-center -mt-10 gap-3">
        <p
          v-if="newProduct"
          :class="[languageState.isFarsi ? 'text-xl' : '']"
          class="text-orange-600 tracking-[0.75rem]"
        >
          {{ t('new product') }}
        </p>
        <p
          :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
          :class="[languageState.isFarsi ? 'w-45' : 'w-50 font-bold']"
          class="text-3xl text-center"
        >
          {{ productName }}
        </p>
        <p class="text-center text-gray-600 w-85">{{ productContent }}</p>
        <LinkButton />
      </section>
    </main>
  </div> -->

<!-- import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'
import LinkButton from '../LinkButtons/LinkButton.vue'
import { onMounted, ref } from 'vue'


const { t } = useI18n()
const languageState = useLanguageStateStore()

const imgSrc = ref('')
const imgAlt = ref('')

const imageSelector = function () {
  if (window.innerWidth >= 1440) {
    imgSrc.value = props.product.images.desktop
    imgAlt.value = 'desktop image'
  } else if (window.innerWidth >= 768) {
    imgSrc.value = props.product.images.tablet
    imgAlt.value = 'tablet image'
  } else {
    imgSrc.value = props.product.images.mobile
    imgAlt.value = 'mobile image'
  }
}

window.addEventListener('resize', imageSelector)
onMounted(() => {
  imageSelector()
}) -->

<!-- <picture>
      <source media="(min-width:650px)" :srcset="props.product.images.desktop" />
      <source media="(min-width:400px)" :srcset="props.product.images.desktop" />
      <img :src="props.product.images.desktop" alt="XX99 Mark II Headphones" />
    </picture> -->
<!-- {{ props.product.images.desktop }}
    <img
      src="@/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
      alt=""
    /> -->
<!-- <img :src="imgSrc" :alt="imgAlt" />
    {{ imgSrc }} -->

<!-- should be commented out -->

<!-- :newProduct="productsData.XX99MarkII.newProduct"
      :imgSrc="productsData.XX99MarkII.images"
      :imgAlt="'XX99 Mark II'"
      :productName="t('XX99 Mark II Headphones')"
      :productContent="t('XX99 Mark II Headphones content')" -->

<!-- // const props = defineProps({
//   imgSrc: String,
//   imgAlt: String,
//   newProduct: {
//     type: Boolean,
//     default: false,
//   },
//   productName: String,
//   productContent: String,
// }) -->
