<template>
  <div flex items-center gap9>
    <span flex-none w10 h10 hidden md:inline-block>
      <UnoIcon
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
      mt10
      py5
      px30
      flex="~ gap10"
      snap-x
      of-x-auto
      class="[scrollbar-width:none] md:[scrollbar-width:auto]"
    >
      <div flex-0 min-w50 v-for="i in 10" snap-center>
        <div relative>
          <small
            p="x8px y4px"
            m3
            bg-red6
            rounded-full
            c-white
            text-xs
            fw-semibold
            absolute
            font-mono
            >30%</small
          >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Holmustund"
          />
        </div>
        <p mt4 text-sm c-slate-7>Holmustund</p>
        <div fw-semibold c-slate-7 space-x4>
          <!-- <small>$699.99</small> <small>$999.99</small> -->
          <small c-red6>$699.99</small> <small c-slate4>$999.99</small>
        </div>
      </div>
    </div>
    <span flex-none w10 h10 hidden md:inline-block>
      <UnoIcon
        wfull
        hfull
        transition
        hover:scale-110
        transform-gpu
        hover:scale9
        i-carbon-arrow-right
      />
    </span>
  </div>
</template>

<script setup lang="ts">
console.log("hi");
</script>
