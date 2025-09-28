<template>
  <div class="flex gap-5 md:place-self-end xl:-translate-x-25" :class="gridSettings">
    <RouterLink to="">
      <img
        class="cursor-pointer"
        src="@/assets/shared/desktop/icon-facebook.svg"
        alt="icon-facebook"
      />
    </RouterLink>
    <RouterLink to="">
      <img
        class="cursor-pointer"
        src="@/assets/shared/desktop/icon-twitter.svg"
        alt="icon-twitter"
      />
    </RouterLink>
    <RouterLink to="">
      <img
        class="cursor-pointer"
        src="@/assets/shared/desktop/icon-instagram.svg"
        alt="icon-instagram"
      />
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  gridSettings: String,
})
</script>
