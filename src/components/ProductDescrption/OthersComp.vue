<template></template>

<script setup>
import { useRoute } from 'vue-router'
import HeadphonesData from '@/assets/data/HeadphonesData.json'
import SpeakersData from '@/assets/data/SpeakersData.json'
import EarphonesData from '@/assets/data/EarphonesData.json'
import { ref } from 'vue'

const route = useRoute()
const slug = route.params.slug
let totalNumberOfProducts = 0
let currentProductId
let IdsOfProductsExcludingCurrent = []
const selectedIds = ref([])

// gets the id of the product on the current page on the display
const findCurrentProductId = function () {
  ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
    if (data[slug]) {
      currentProductId = data[slug].id
      return
    }
  })
}

// gets the total number of products
const getProductsCount = function () {
  ;[HeadphonesData, SpeakersData, EarphonesData].forEach((data) => {
    totalNumberOfProducts += Object.values(data).length
  })
}

// adds ids of all products to idsOfProductsExcludingCurrent
const createIdsOfProductsExcludingCurrent = function () {
  // create an array of ids of products
  const arr = Array.from({ length: totalNumberOfProducts }, (_, i) => i + 1)

  // exclude the id of the current product
  IdsOfProductsExcludingCurrent = arr.filter((id) => id != currentProductId)
}

// chooses random products from IdsOfProductsExcludingCurrent, the arguement count determines number of random choices
const chooseRandomProducts = function (count) {
  const randomIds = []
  while (randomIds.length <= count) {
    let randomId = Math.floor(Math.random() * totalNumberOfProducts)
    if (!randomIds.includes(randomId)) {
      randomIds.push(randomId)
    }
  }
  selectedIds.value = randomIds
}

findCurrentProductId()
getProductsCount()
createIdsOfProductsExcludingCurrent()
chooseRandomProducts(3)
</script>
