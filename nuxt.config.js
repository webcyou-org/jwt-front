import pkg from './package'
const { resolve } = require('path')

const config =  {
  mode: 'spa',
  rootDir: resolve(__dirname, './'),
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  axios: {
    baseURL: '/'
  },
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/auth'],
  build: {
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  auth: {
    cookie: false,
    redirect: {
      callback: '/callback'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/user_token', method: 'post', propertyName: 'jwt' },
          logout: { url: '/api/v1/users', method: 'delete' },
          user: { url: '/api/v1/users', method: 'get', propertyName: 'user' }
        }
      },
      auth0: {
        domain: 'nuxt-auth.auth0.com',
        client_id: 'q8lDHfBLJ-Fsziu7bf351OcYQAIe3UJv'
      },
      facebook: {
        client_id: '1671464192946675',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        client_id:
          '956748748298-kr2t08kdbjq3ke18m3vkl6k843mra1cg.apps.googleusercontent.com'
      },
      // github: {
      //   client_id: process.env.GITHUB_CLIENT_ID,
      //   client_secret: process.env.GITHUB_CLIENT_SECRET
      // },
      twitter: {
        client_id: 'FAJNuxjMTicff6ciDKLiZ4t0D'
      }
    }
  },
  generate: {
    dir: '../public'
  }
}

if (process.env.NODE_ENV === 'development') {
  config.proxy = {
    '/api': 'http://localhost:3000'
  }
} else if (process.env.NODE_ENV === 'local') {
  config.serverMiddleware = ['./api/auth']
}

module.exports = config

