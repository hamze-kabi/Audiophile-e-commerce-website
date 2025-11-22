<template>
  <main
    :dir="languageState.isFarsi ? 'rtl' : 'ltr'"
    class="flex flex-col items-center justify-center gap-10"
  >
    <!-- product image + overview section -->
    <div class="flex flex-col items-center justify-center md:flex-row xl:mx-30">
      <!-- product image for different screen sizes -->
      <picture>
        <source media="(min-width:1440px)" :srcset="props.product.images.productPageDesktop" />
        <source media="(min-width:768px)" :srcset="props.product.images.productPageTablet" />
        <img
          class="w-90/100 mx-auto my-5 basis-1/3"
          :src="props.product.images.productPageMobile"
          :alt="props.product.slug"
        />
      </picture>
      <!-- overview -->
      <section class="flex flex-col mx-5 gap-5 basis-2/3">
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
        <section class="flex gap-5">
          <NumberOfOrders />
          <AddToCartBtn />
        </section>
      </section>
    </div>
    <!-- features + in the box -->
    <section class="flex flex-col mx-5 gap-20 xl:flex-row xl:mx-40">
      <FeaturesComp class="basis-2/3" :product="props.product" />
      <InTheBoxComp class="basis-1/3" :product="props.product" />
    </section>
    <!-- gallery -->
    <GalleryComp :product="props.product" />
    <OthersComp />
    <CategoriesComp class="md:hidden" />
    <BestGearComp />
    <FooterComp />
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
import GalleryComp from './GalleryComp.vue'
import OthersComp from './OthersComp.vue'
import CategoriesComp from '../Categories/CategoriesComp.vue'
import BestGearComp from '../BestGear/BestGearComp.vue'
import FooterComp from '../Footer/FooterComp.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
const languageState = useLanguageStateStore()
</script>
