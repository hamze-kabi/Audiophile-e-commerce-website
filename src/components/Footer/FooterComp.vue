<template>
  <section
    class="grid grid-flow-row grid-cols-1 place-items-center gap-10 py-10 px-5 text-center bg-black md:grid-cols-2 md:place-items-start md:px-15 xl:px-50 xl:pt-5"
  >
    <div
      class="h-[4px] w-[8rem] bg-orange-500 -translate-y-10 md:col-span-2 xl:-translate-y-5"
    ></div>
    <BrandNameComp class="md:col-span-2 xl:col-span-1" />
    <NavbarComp class="md:col-span-2 xl:col-span-1" axis="flex-col" />
    <FooterDescriptionComp class="md:col-span-2 xl:col-span-1" />
    <CopyrightComp class="xl:col-start-1" />
    <SocialMediaLinksComp />
  </section>
</template>

<script setup>
import BrandNameComp from '../Header/BrandNameComp.vue'
import NavbarComp from '../Header/NavbarComp.vue'
import FooterDescriptionComp from './FooterDescriptionComp.vue'
import CopyrightComp from './CopyrightComp.vue'
import SocialMediaLinksComp from './SocialMediaLinksComp.vue'
</script>
