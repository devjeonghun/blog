const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  /*
  ** Headers of the page
  */

  head: {
    title: 'devjeonghun',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid:'robots',name:'robots',content:'ALL'},
      {name:'Location',content:'South Korea'},
      {name:'keywords',content:'블로그,java,크롤링,vue,nuxt,봇'},
      {hid: 'description', name: 'description', content: 'devjeonghun 블로그'},
      {name:'author',content:'devjeonghun'},
      {name:'reply-to',content:'jeonghun0204@gmail.com'},
      {name:'content-language',content:'kr'},
      {name:'theme-color', content:'#CA2327'}
      ,
      {hid:'og:type',        property: 'og:type', content: 'article'},
      {hid:'og:url',         property: 'og:url', content: 'https://devjeonghun.cf/'},
      {hid:'og:title',       property: 'og:title', content: 'devjeonghun 블로그'},
      {hid:'og:image',       property: 'og:image', content: 'https://avatars0.githubusercontent.com/u/15138190?s=460&v=4'},
      {hid:'og:description', property: 'og:description', content: '0과 1로 사는 프로그래머'}
    ],
    script: [
      {type: 'text/javascript', src: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/firebase.js'
  ],
  css: ['~/assets/style/app.styl'],

  /*
  ** Nuxt.js middleware js router
  */
  router: {
    mode: 'history',
    base: '/'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics',{
      id: 'UA-131420949-2'
    }],
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-2228738601213886'
    }]
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}