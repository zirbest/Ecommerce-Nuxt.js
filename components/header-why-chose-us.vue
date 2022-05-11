<template>
  <div grid="~ cols-[repeat(auto-fit,minmax(14rem,1fr))]">
    <div
      p4
      bg-white
      grid="~ cols-[max-content]"
      flex-basis-full
      space-x2
      v-for="i in 3"
    >
      <span row-span-2 h-14 w-14 p2 rounded-lg bg-yellow:20>
        <span h-full w-full block i-carbon:delivery bg-yellow6></span>
      </span>
      <span font-semibold c-slate-9>Free Shiping</span>
      <span col-start-2 text-sm c-slate-5>On purchases over 999</span>
    </div>

    <div order="first lg:none" basis-50 flex gap-x4 items-center justify-center>
      <div bg-white:15>
        <span p3 m2 c-white i-carbon-arrow-left></span>
      </div>
      <div bg-white>
        <span p3 m2 i-carbon-arrow-right></span>
      </div>
    </div>
  </div>
</template>
