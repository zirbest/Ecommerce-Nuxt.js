<template>
  <div flex items-center gap9>
    <span flex-none w10 h10 hidden md:inline-block>
      <UnoIcon
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
      <div flex-none v-for="product in products" snap-center :key="product.id">
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
          <!-- <small>$ {{product.price}}</small> -->
          <small :class="{'c-red6': product.oldPrice}">${{product.price}}</small>
          <small v-if="product.oldPrice" c-slate4>${{product.oldPrice}}</small>
        </div>
      </div>
    </div>
    <span flex-none w10 h10 hidden md:inline-block>
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

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const products = reactive([
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Holmustund",
    price: "999.99",
    oldPrice: "888.99",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589584649628-b597067e07a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Fralov",
    price: "222.99",
    oldPrice: "121.99",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551907234-fb773fb08a2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Evertosomberg",
    price: "222.99",
    oldPrice: null,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Eurosofa",
    price: "222.99",
    oldPrice: null,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "skdjfskdfj",
    price: "222.99",
    oldPrice: null,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    name: "skdjfskdfj",
    price: "222.99",
    oldPrice: null,
  },
])

const discountPercent = (price, oldPrice)=>{ return Math.floor((oldPrice-price)*100/oldPrice)}

const container = ref(null)

// NOTE: snap-x snap-center
const doScroll = function(dir=20) {
  container.value.scrollLeft += dir
}

</script>
