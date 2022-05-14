<template>
  <div class="container c-white mxa" mt="20 sm:40" flex="~ wrap">
    <div relative grow wfull h="minh-12rem md:15rem">
      <img
        class="absolute object-cover wfull hfull"
        src="https://images.unsplash.com/photo-1512909315288-c1bcb1ebb9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhYnJpY3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div
        class="mix-blend-multiply absolute wfull hfull"
        bg="[hsl(32_100%_20%)]"
      ></div>
      <div isolate p8 flex="~ col lg:row gap-4" items-center md:justify-between h-full>
        <p text="xl md:2xl center lg:start" md:w-30ch fw-semibold>
          Subscribe to our newsletter and receive exclusive offers every week
        </p>
        <div class="c-black" flex="~ col md:row" pt="8 lg:0" space="y4 md:y0 md:x4">
          <input
            type="email"
            p="x8 y3"
            w="full sm:a"
            class="fw-semibold btn b-none"
            placeholder="Enter your email"
          />
          <button
            p="x5 y3"
            w="full sm:a"
            class="fw-semibold btn bg-amber5 b-none"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
