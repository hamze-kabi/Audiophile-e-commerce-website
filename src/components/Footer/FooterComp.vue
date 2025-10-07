<template>
  <section
    :dir="{ rtl: languageState.isFarsi }"
    class="grid grid-flow-row grid-cols-1 place-items-center gap-10 py-5 px-5 text-center bg-black md:grid-cols-2 md:px-15 xl:px-50 xl:pt-5 xl:items-center"
    :class="languageState.isFarsi ? 'md:place-items-end' : 'md:place-items-start'"
  >
    <div
      class="h-[4px] w-[8rem] bg-orange-500 -mt-9 md:col-span-2"
      :class="[languageState.isFarsi ? 'md:-translate-y-4 xl:-translate-y-0' : 'md:-mt-5 xl:-mt-9']"
    ></div>
    <BrandNameComp
      class="md:col-span-2"
      :class="[languageState.isFarsi ? 'xl:col-start-2 xl:col-end-2' : 'xl:col-span-1']"
    />
    <NavbarComp
      class="md:col-span-2"
      :class="[
        languageState.isFarsi ? 'xl:col-start-1 xl:col-end-1 xl:row-start-2' : 'xl:col-span-1',
      ]"
    />
    <FooterDescriptionComp
      class="md:col-span-2"
      :class="[languageState.isFarsi ? 'xl:col-start-2 xl:col-span-1' : 'xl:col-span-1']"
    />
    <CopyrightComp
      class=""
      :class="[languageState.isFarsi ? 'md:order-2' : 'xl:row-start-4 xl:order-1']"
    />
    <SocialMediaLinksComp
      class=""
      :class="[
        languageState.isFarsi
          ? 'md:order-1 md:justify-self-start xl:justify-self-center'
          : 'xl:row-start-4 xl:order-2 xl:-mr-6',
      ]"
    />
  </section>
</template>

<!-- <div
      class="md:col-span-2 xl:-translate-y-5"
    ></div>
    <BrandNameComp class="md:col-span-2 xl:col-span-1" />
    <NavbarComp class="md:col-span-2 xl:col-span-1" axis="flex-col" />
    <FooterDescriptionComp class="md:col-span-2 xl:col-span-1" />
    <CopyrightComp :class="{ 'col-start-2 row-start-5': languageState.isFarsi }" />
    <SocialMediaLinksComp :class="{ 'col-start-1 row-start-5 ': languageState.isFarsi }" /> -->

<script setup>
import BrandNameComp from '../Header/BrandNameComp.vue'
import NavbarComp from '../Header/NavbarComp.vue'
import FooterDescriptionComp from './FooterDescriptionComp.vue'
import CopyrightComp from './CopyrightComp.vue'
import SocialMediaLinksComp from './SocialMediaLinksComp.vue'
import { useLanguageStateStore } from '@/stores/languageState'

const languageState = useLanguageStateStore()
</script>
