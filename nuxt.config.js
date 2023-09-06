const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    titleTemplate: "%s | Mike Goldberg",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css', '@fortawesome/fontawesome/styles.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/font-awesome' }, { src: '~plugins/vue-carousel', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    routes: [
      '/projects/avoya-value-chart',
      '/projects/avoya-dashboard',
      '/projects/avoya-reviews',
      '/projects/avoya-membership',
      '/projects/message-platform',
      '/projects/silver-dragon',
      '/projects/staff-my-clients',
      '/projects/techsd',
      '/projects/nixon',
      '/projects/ecommerce-page',
      '/projects/coming-soon',
      '/projects/sierra-botanicals',
      '/projects/cathedral-catholic',
      '/projects/logos'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
