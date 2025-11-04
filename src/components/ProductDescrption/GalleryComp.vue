<template>
  <!-- grid container of image -->
  <div class="grid">
    <!-- three picture tags for three different images, each picture has three image for different screen sizes -->
    <!-- image1 -->
    <picture>
      <source media="(min-width:1440px)" :srcset="props.product.galleryImages.image1.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.galleryImages.image1.tablet" />
      <img
        class="w-80 rounded-2xl md:w-170 xl:w-135"
        :src="props.product.galleryImages.image1.mobile"
        :alt="props.product.title"
      />
    </picture>
    <!-- image2 -->
    <picture>
      <source media="(min-width:1440px)" :srcset="props.product.galleryImages.image2.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.galleryImages.image2.tablet" />
      <img
        class="w-80 rounded-2xl md:w-170 xl:w-135"
        :src="props.product.galleryImages.image2.mobile"
        :alt="props.product.title"
      />
    </picture>
    <!-- image3 -->
    <picture>
      <source media="(min-width:1440px)" :srcset="props.product.galleryImages.image3.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.galleryImages.image3.tablet" />
      <img
        class="w-80 rounded-2xl md:w-170 xl:w-135"
        :src="props.product.galleryImages.image3.mobile"
        :alt="props.product.title"
      />
    </picture>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
