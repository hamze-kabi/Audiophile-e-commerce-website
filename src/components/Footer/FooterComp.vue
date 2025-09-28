<template>
  <section
    class="grid grid-flow-row grid-cols-1 place-items-center gap-10 py-10 px-20 text-center bg-black"
  >
    <BrandNameComp />
    <NavbarComp axis="flex-col" />
    <FooterDescriptionComp />
    <CopyrightComp />
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
