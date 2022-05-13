<template>
  <div grid="~ cols-[repeat(auto-fit,minmax(14rem,1fr))]">
    <ul
      p4
      bg-white
      grid="~ cols-[max-content]"
      flex-basis-full
      space-x2
      v-for="i in 3"
    >
      <span row-span-2 h-14 w-14 p2 rounded-lg bg-yellow:20>
        <UnoIcon h-full w-full block i-carbon:currency bg-yellow6 />
      </span>
      <span font-semibold c-slate-9>Free Shiping</span>
      <span col-start-2 text-sm c-slate-5>Dolor quos reiciendis vitae a quis Error quae.</span>
    </ul>

    <div order="first lg:none" basis-50 flex gap-x4 items-center justify-center>
      <div bg-white:15>
        <UnoIcon p3 m2 c-white i-carbon-arrow-left />
      </div>
      <div bg-white>
        <UnoIcon p3 m2 i-carbon-arrow-right />
      </div>
    </div>
  </div>
</template>
