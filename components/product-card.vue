<template>
  <div flex items-center gap9>

    <button v-if="isNav" flex-none w10 h10 hidden md:inline-block>
      <!-- transition -->
      <UnoIcon
        :class="scroll.isLeft ? 'op-20 cursor-not-allowed' : 'hover:scale-110'"
        wfull
        hfull
        transform-gpu
        transition-all
        transition-1000ms
        @click="doScroll(-130)"
        i-carbon-arrow-left
      />
    </button>

    <div
      ref="container"
      class="[scrollbar-width:none] md:[scrollbar-width:auto]"
      p="x30 y5"
      flex="~ gap10"
      snap-x
      mt10
      of-x-auto
      scroll-smooth
      grow
    >
      <div v-if="pending" snap-center flex-none w-full bg-gray:40 grow w50 h70 mxa v-for="i in 4" animate-pulse />

      <div v-if="!pending" snap-center flex-none v-for="product in data.products" :id="product.id"  :key="product.id">
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
    <button v-if="isNav" flex-none w10 h10 hidden md:inline-block>
      <!-- transition -->
      <UnoIcon
        :class="scroll.isRight ? 'op-20 cursor-not-allowed' : 'hover:scale-110'"
        wfull
        hfull
        transform-gpu
        transition-all
        transition-1000ms
        @click="doScroll(130)"
        i-carbon-arrow-right
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const { pending, data } = useLazyFetch('/api/products')

const discountPercent = (price, oldPrice)=>{ return Math.floor((oldPrice-price)*100/oldPrice)}

const container = ref(null)

// NOTE: snap-x snap-center
const doScroll = function(dir=130) {
  container.value.scrollLeft += dir
}

const scroll = reactive({ isLeft:  true, isRight: false })
watch(container, ()=> {
  container.value.onscroll = () => {
    scroll.isLeft = container.value.scrollLeft == 0
    scroll.isRight =  (container.value.scrollWidth - container.value.clientWidth) - container.value.scrollLeft == 0
  }
})

defineProps({
  isNav: {
    type: Boolean,
    default: false
  }
})

</script>
