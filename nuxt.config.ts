// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/custom.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
