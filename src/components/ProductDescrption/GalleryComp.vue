<template>
  <!-- grid container of image -->
  <div
    class="grid mt-20 gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-x-0 md:gap-y-5 md:ml-6 md:-mr-6"
  >
    <!-- three picture tags for three different images, each picture has three image for different screen sizes -->
    <!-- image1 -->
    <!-- for some reason which I dont know md:w-full takes effect inside picture tag and md:h-full inside img tag -->
    <picture class="w-6/7 mx-auto md:w-11/10">
      <source media="(min-width:1440px)" :srcset="props.product.galleryImages.image1.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.galleryImages.image1.tablet" />
      <img
        class="rounded-2xl"
        :src="props.product.galleryImages.image1.mobile"
        :alt="props.product.title"
      />
    </picture>
    <!-- image2 -->
    <picture class="w-6/7 mx-auto md:row-start-2 md:w-11/10">
      <source media="(min-width:1440px)" :srcset="props.product.galleryImages.image2.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.galleryImages.image2.tablet" />
      <img
        class="rounded-2xl"
        :src="props.product.galleryImages.image2.mobile"
        :alt="props.product.title"
      />
    </picture>
    <!-- image3 -->
    <picture
      class="w-6/7 mx-auto md:w-4/5 md:col-start-2 md:row-start-1 md:row-span-2 md:col-span-2"
    >
      <source media="(min-width:1440px)" :srcset="props.product.galleryImages.image3.desktop" />
      <source media="(min-width:768px)" :srcset="props.product.galleryImages.image3.tablet" />
      <img
        class="rounded-2xl"
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
