<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const sm = breakpoints.smaller("sm");

const isMenu = ref(false);
const isSearch = ref(false);
</script>

<template>
  <header
    c-white
    class="flex items-center justify-between flex-wrap sm:flex-nowrap"
    p="x4 y2"
  >
    <NuxtLink to="#" class="no-underline">
      <div class="flex items-center gap-2 p2">
        <span class="inline-block w-10 fill-red stroke-width-3"> <Logo /> </span>
        <span class="text-sm font-semibold">E-Shop</span>
      </div>
    </NuxtLink>

    <!-- v-show="isMenu" -->
    <!-- md="bg-red block" -->
    <!-- :class="{'flex': !sm}" -->
    <div
      v-show="isMenu || !sm"
      class="flex flex-col gap-10 w-full mt-4 order-2"
      sm="flex-row items-center mt-auto w-auto h-full gap-14 order-none"
    >
      <NuxtLink hover="op70" font-500 text-center p-2 sm="text-auto" to="#">Products</NuxtLink>
      <NuxtLink hover="op70" font-500 text-center p-2 sm="text-auto" to="#">Insipiration</NuxtLink>
      <NuxtLink hover="op70" font-500 text-center p-2 sm="text-auto" to="#">Rooms</NuxtLink>
    </div>

    <div class="space-x-2">
      <button class="w-6 h-6" @click="isSearch = !isSearch">
        <UnoIcon class="w-full h-full i-carbon:search" />
      </button>
      <button class="w-6 h-6">
        <UnoIcon class="w-full h-full i-carbon:shopping-cart" />
      </button>
      <DarkToggle />
      <button sm="hidden" class="w-6 h-6" @click="isMenu = !isMenu">
        <UnoIcon class="w-full h-full i-carbon:menu" />
      </button>
    </div>
  </header>
</template>
