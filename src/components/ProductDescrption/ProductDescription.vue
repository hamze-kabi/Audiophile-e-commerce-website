<template>
  <!-- container of images and text section -->
  <!-- :class="props.product.xlFlexRowDirection" -->

  <main
    :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
    class="flex flex-col items-center justify-center mt-15 gap-4 md:gap-10 xl:gap-30 xl:mb-20"
  >
    <!-- images for mobile, md and xl -->
    <picture>
      <source media="(min-width:1440px)" :srcset="props.product.images.productPageDesktop" />
      <source media="(min-width:768px)" :srcset="props.product.images.productPageTablet" />
      <img
        class="w-80 rounded-2xl md:w-170 xl:w-135"
        :src="props.product.images.productPageMobile"
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
      <PriceComp :price="props.product.price" />
      <!-- order section -->
      <section class="flex">
        <NumberOfOrders />
        <AddToCartBtn />
      </section>
      <!-- features + in the box -->
      <section class="flex flex-col">
        <FeaturesComp :product="props.product" />
        <InTheBoxComp :product="props.product" />
      </section>
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStateStore } from '@/stores/languageState'
import LinkButton from '../LinkButtons/LinkButton.vue'
import PriceComp from './PriceComp.vue'
import NumberOfOrders from './NumberOfOrders.vue'
import AddToCartBtn from './AddToCartBtn.vue'
import FeaturesComp from './FeaturesComp.vue'
import InTheBoxComp from './InTheBoxComp.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
