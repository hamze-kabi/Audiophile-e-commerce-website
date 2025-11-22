<template>
  <p class="text-center text-3xl font-bold my-5">{{ t('YOU MAY ALSO LIKE') }}</p>
  <div class="flex flex-col gap-10 md:flex-row md:gap-3 xl:mx-40">
    <div v-for="id in chosenRandomIds" :key="id">
      <OthersCard :receivedId="id" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import OthersCard from './OthersCard.vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()
const slug = route.params.slug
let currentProductId
let idsOfProductsExcludingCurrent = []
let chosenRandomIds = []

// extract ids of products excluding the displaying product, earphones are excluded because there is no image for its others section
const extractIdsOfProductsExcludingCurrent = function () {
  ;[HeadphonesData, SpeakersData].forEach((data) => {
    // find id of current product
    if (data[slug]) {
      currentProductId = data[slug].id
    }

    Object.values(data).forEach((product) => {
      if (product.id !== currentProductId) {
        idsOfProductsExcludingCurrent.push(product.id)
      }
    })
  })
}

// shuffles idsOfProductsExcludingCurrent and picks the first three
const chooseRandomProducts = function () {
  let shuffledIdsOfProductsExcludingCurrent = idsOfProductsExcludingCurrent.sort(
    () => Math.random() - 0.5,
  )
  chosenRandomIds = shuffledIdsOfProductsExcludingCurrent.slice(0, 3)
}

extractIdsOfProductsExcludingCurrent()
chooseRandomProducts()
</script>
