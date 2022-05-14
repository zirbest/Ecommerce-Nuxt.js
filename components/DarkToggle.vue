<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="w-6 h-6" @click="toggleDark">
    <UnoIcon class="!w-full !h-full dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
