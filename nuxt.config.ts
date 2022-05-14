import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    typography: true,
    attributify: true,
    preflight: true,
    theme: {
      fontFamily: {
        sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      },
    },
    icons: {
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    },
    shortcuts: [
      ['btn', 'px-4 py-1 ws-nowrap rounded-full inline-block text-slate-8 b b-gray cursor-pointer hover:op-80 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },
  colorMode: {
    classSuffix: '',
  },
})
