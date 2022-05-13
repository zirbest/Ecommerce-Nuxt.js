<template>
  <div container mxa mt20>
    <div flex justify-between items-center>
      <!-- <p text-xl>Selected just for you</p> -->
      <!-- <a btn> SHOW MORE </a> -->
      <!-- <p text-xl w-full text-center>Selected just for you</p> -->
      <slot />
    </div>
    <ProductCard :isNav="isNav"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isNav: {
    type: Boolean,
    default: false
  }
})
</script>
