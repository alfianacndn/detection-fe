import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:'static',
  ssr:false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  static: {
    prefix: false
  },
  ssr:false,

  head: {
    titleTemplate: '%s - detection-fe',
    title: 'detection-fe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-camera.js', mode: 'client' },
    // { src: '~/plugins/chart.js', mode: 'client'},
    { src: '~/plugins/vue-json-excel.js', mode: 'client' },
    { src: '~/plugins/vue-web-cam.js', mode: 'client' }],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    "vue-toastification/nuxt",
    '@nuxtjs/dotenv',
    // 'vue-web-cam/nuxt'
     // You can also pass plugin options
    ["vue-toastification/nuxt", {
      timeout: 500,
      draggable: false
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:803/', 
  },
  auth: {
    redirect: {
      login: '/landing-page',
      logout: '/landing-page',
      // callback: '/dashboard',
      home: '/dashboard'
    },
    strategies: {
       local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user : {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: 'api/login', method: 'post',propertyName:'data.token'},
          logout: { url: 'api/logout', method: 'post',propertyName:false},
          user: false,
        },
        // autoFetchUser:false,
        globalToken: true
       }
    },
    localStorage: {
      prefix: 'auth.'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
