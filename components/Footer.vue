<template>
  <section text-slate-6 container mx-a mt-20 flex="~ wrap gap-4">
    <div flex="~ col" justify-between grow w="full lg:a">
      <div text-xl c-slate-8 stroke-width-3 h-8 maxw-20 inline-flex gap-4 items-center>
        <Logo h-full />
        <span text-md fw-semibold><span c-blue>E-</span>Shop</span>
      </div>
      <p max-w35ch>
        Hight quality Scandinavian furiture made from eco-friendly materials
        Designed for modern manimalist oportiments
      </p>
      <ul flex gap-4>
        <li><UnoIcon i-carbon-logo-facebook /></li>
        <li><UnoIcon i-carbon-logo-instagram /></li>
        <li><UnoIcon i-carbon-logo-youtube /></li>
        <li><UnoIcon i-carbon-logo-linkedin /></li>
        <li><UnoIcon i-carbon-logo-twitter /></li>
      </ul>
    </div>

    <dl space-y1 v-for="i in 3">
      <dt fw-semibold mb-4 text-slate-8>Shoping online</dt>
      <dd>Order Status</dd>
      <dd>Shipping and Delivery</dd>
      <dd>Returns</dd>
      <dd>Payment Options</dd>
      <dd>Contact Us</dd>
    </dl>
  </section>
</template>
