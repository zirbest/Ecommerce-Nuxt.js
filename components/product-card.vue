<template>
  <div flex items-center gap9>
    <span flex-none w10 h10 hidden md:inline-block>
      <UnoIcon v-if="isNav"
        @click="doScroll(-130)"
        wfull
        hfull
        c-gray5
        transition
        hover:scale-110
        transform-gpu
        hover:scale9
        i-carbon-arrow-left
      />
    </span>
    <div
      ref="container"
      class="[scrollbar-width:none] md:[scrollbar-width:auto]"
      p="x30 y5"
      flex="~ gap10"
      mt10
      snap-x
      of-x-auto
      scroll-smooth
    >
      <div v-if="pending" w-full bg-gray:40 grow w50 h70 mxa v-for="i in 4" animate-pulse /> <!-- FIX: BUG: not working if remove comment -->

      <div v-else flex-none v-for="product in data.products" snap-center :key="product.id">
        <div relative w50 h70>
          <small v-if="product.oldPrice"
            p="x8px y4px"
            text="white xs"
            font="semibold mono"
            absolute
            m3
            bg-red6
            rounded-full
            >{{discountPercent(product.oldPrice,product.price)}}%</small
          >
          <img
            wfull
            hfull
            object-cover
            loading="lazy"
            :src="product.image"
            :alt="product.name"
          />
        </div>
        <p mt4 text-sm c-slate-7>{{product.name}}</p>
        <div fw-semibold c-slate-7 space-x4>
          <small :class="{'c-red6': product.oldPrice}">${{product.price}}</small>
          <small v-if="product.oldPrice" c-slate4>${{product.oldPrice}}</small>
        </div>
      </div>
    </div>
    <span v-if="isNav" flex-none w10 h10 hidden md:inline-block>
      <UnoIcon
        @click="doScroll(130)"
        wfull
        hfull
        transition
        hover:scale-110
        transform-gpu
        i-carbon-arrow-right
      />
    </span>
  </div>
</template>

<script setup lang="ts">
const { pending, data } = useLazyFetch('/api/products')

const discountPercent = (price, oldPrice)=>{ return Math.floor((oldPrice-price)*100/oldPrice)}

const container = ref(null)

// NOTE: snap-x snap-center
const doScroll = function(dir=20) {
  container.value.scrollLeft += dir
}

defineProps({
  isNav: {
    type: Boolean,
    default: false
  }
})

</script>
