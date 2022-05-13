<template>
  <div container mxa min-h-screen h-full flex flex-col class="bg-no-repeat">
    <div
      class="filter -z-1 brightness-30"
      absolute
      inset-0
      bg="center cover"
      style="
        background-image: url(https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80);
      "
    ></div>
    <Header />
    <Hero />
    <HeaderWhyChoseUs />
  </div>
  <WhatsNew />
  <SelectedForYou isNav>
    <p text-2xl>Selected just for you</p>
    <a btn> SHOW MORE </a>
  </SelectedForYou>
  <WhyShouldChooseUs />
  <SelectedForYou>
    <p text="2xl center" w-full>Products in today</p>
  </SelectedForYou>
  <div mt-100></div>
</template>

<!-- <li> -->
<!--   <span i-carbon:delivery></span> -->
<!--   <span>99% satisfied Customers</span> -->
<!--   <span>Out clients opinions speak for themeselves</span> -->
<!-- </li> -->
<!-- <li> -->
<!--   <span i-carbon:delivery></span> -->
<!--   <span>Originality Guaranteed</span> -->
<!--   <span>30 days warranty for each product from our store</span> -->
<!-- </li> -->
