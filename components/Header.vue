<script setup lang="ts">
const isMenu = ref(false);
const isSearch = ref(false);
</script>

<template>
  <header
    class="flex items-center justify-between b flex-wrap sm:flex-nowrap"
    p="x4 y2"
  >
    <a href="#" class="text-black no-underline">
      <div class="flex items-center gap-2">
        <span class="inline-block w-10 stroke-width-3"> <Logo /> </span>
        <span class="text-sm font-semibold">E-Shop</span>
      </div>
    </a>

    <div
      v-if="isMenu"
      class="b flex flex-col gap-10 w-full mt-4 order-2"
      sm="mt-auto flex-row w-auto gap-14 order-none"
    >
      <a hover="op70 bg-gray-2" font-500 text-center sm="text-auto" href="#"
        >Men</a
      >
      <a hover="op70 bg-gray-2" font-500 text-center sm="text-auto" href="#"
        >Women</a
      >
      <a hover="op70 bg-gray-2" font-500 text-center sm="text-auto" href="#"
        >Kids</a
      >
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
