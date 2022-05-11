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
    <a href="#" class="no-underline">
      <div class="flex items-center gap-2 p2">
        <span class="inline-block w-10 fill-red stroke-width-3">
          <Logo />
        </span>
        <span class="text-sm font-semibold">E-Shop</span>
      </div>
    </a>

    <!-- v-show="isMenu" -->
    <!-- md="bg-red block" -->
    <!-- :class="{'flex': !sm}" -->
    <div
      v-show="isMenu || !sm"
      class="flex flex-col gap-10 w-full mt-4 order-2"
      sm="flex-row items-center mt-auto w-auto h-full gap-14 order-none"
    >
      <a hover="op70" font-500 text-center p-2 sm="text-auto" href="#">Products</a>
      <a hover="op70" font-500 text-center p-2 sm="text-auto" href="#">Insipiration</a>
      <a hover="op70" font-500 text-center p-2 sm="text-auto" href="#">Rooms</a>
    </div>

    <div class="space-x-2">
      <button
        class="w-6 h-6 p-0 bg-transparent cursor-pointer b-0"
        @click="isSearch = !isSearch"
      >
        <span class="w-full h-full i-carbon:search" />
      </button>
      <button class="w-6 h-6 p-0 bg-transparent cursor-pointer b-0">
        <span class="w-full h-full i-carbon:shopping-cart" />
      </button>
      <button
        sm="hidden"
        class="w-6 h-6 p-0 bg-transparent cursor-pointer b-0"
        @click="isMenu = !isMenu"
      >
        <span class="w-full h-full i-carbon:menu" />
      </button>
    </div>
  </header>
</template>
