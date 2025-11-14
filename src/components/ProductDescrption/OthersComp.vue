<template>
  <div v-for="id in chosenRandomIds" :key="id">
    <OthersCard :receivedId="id" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import EarphonesData from '@/assets/data/EarphonesData.json'
import OthersCard from './OthersCard.vue'

const route = useRoute()
const slug = route.params.slug
let currentProductId
let idsOfProductsExcludingCurrent = []
let chosenRandomIds = []

// extract ids of products excluding the displaying product
const extractIdsOfProductsExcludingCurrent = function () {
  ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
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
