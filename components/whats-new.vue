<template>
  <div container mxa mt="20 sm:40" flex="~ wrap" c-white>
    <div relative flex="[1_1_20rem]" h="12rem lg:15rem">
      <img
        absolute
        object-cover
        wfull
        hfull
        z="-2"
        src="https://images.unsplash.com/photo-1563637329737-328724d1394d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyYfHNvZmElMjBjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&h=250&w=500&q=60"
        alt=""
      />
      <div
        mix-blend-multiply
        bg="[hsl(32_100%_50%)]"
        absolute
        wfull
        hfull
      ></div>
      <div isolate flex="~ col" space-y3 items-center justify-center h-full>
        <p mt6 text-lg text-center>New collection available now</p>
        <NuxtLink href="#" class="btn b-none bg-white">
          VIEW ALL
        </NuxtLInk>
      </div>
    </div>
    <div relative flex="[1_1_20rem]" h="12rem lg:15rem">
      <img
        absolute
        object-cover
        wfull
        hfull
        z="-2"
        w-full
        src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=250&q=80"
        alt=""
      />
      <div
        mix-blend-multiply
        bg="[hsl(208_100%_76%)]" absolute
        w-full
        h-full
      ></div>
      <div isolate flex="~ col" space-y3 items-center justify-center h-full>
        <p mt6 text-lg text-center>Redefining the modern design</p>
        <NuxtLink href="#" class="btn b-none bg-white">
          CHECK MORE
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
