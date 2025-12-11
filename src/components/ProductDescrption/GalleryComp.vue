<template>
  <!-- grid container of image -->
  <div class="flex flex-col mx-5 gap-3 mt-7">
    <!-- three picture tags for three different images, each picture has three image for different screen sizes -->
    <!-- container of all three images -->
    <div
      class="flex flex-col gap-3"
      :class="[languageState.isFarsi === 'true' ? 'md:flex-row-reverse' : 'md:flex-row']"
    >
      <!-- container of image 1 and 2 -->
      <div class="flex flex-col gap-3">
        <!-- image1 -->
        <picture class="">
          <source
            media="(min-width:1440px)"
            :srcset="prepend + props.product.galleryImages.image1.desktop"
          />
          <source
            media="(min-width:768px)"
            :srcset="prepend + props.product.galleryImages.image1.tablet"
          />
          <img
            class="rounded-2xl"
            :src="prepend + props.product.galleryImages.image1.mobile"
            :alt="props.product.title"
          />
        </picture>
        <!-- image2 -->
        <picture class="">
          <source
            media="(min-width:1440px)"
            :srcset="prepend + props.product.galleryImages.image2.desktop"
          />
          <source
            media="(min-width:768px)"
            :srcset="prepend + props.product.galleryImages.image2.tablet"
          />
          <img
            class="rounded-2xl"
            :src="prepend + props.product.galleryImages.image2.mobile"
            :alt="props.product.title"
          />
        </picture>
      </div>
      <!-- image3 -->
      <picture class="">
        <source
          media="(min-width:1440px)"
          :srcset="prepend + props.product.galleryImages.image3.desktop"
        />
        <source
          media="(min-width:768px)"
          :srcset="prepend + props.product.galleryImages.image3.tablet"
        />
        <img
          class="rounded-2xl"
          :src="prepend + props.product.galleryImages.image3.mobile"
          :alt="props.product.title"
        />
      </picture>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStateStore } from '@/stores/languageState'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const languageState = useLanguageStateStore()

const prepend = '/Audiophile-e-commerce-website'
</script>
