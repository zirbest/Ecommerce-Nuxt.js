<template>
  <div container mxa mt20>
    <div flex justify-between items-center>
      <!-- <p text-xl>Selected just for you</p> -->
      <!-- <a btn> SHOW MORE </a> -->
      <!-- <p text-xl w-full text-center>Selected just for you</p> -->
      <slot />
    </div>
    <ProductCard />
  </div>
</template>
