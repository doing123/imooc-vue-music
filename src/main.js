import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import faskclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import '@/common/stylus/index.styl'

import vConsole from 'vconsole'
/* eslint-disable no-unused-vars */
var test = new vConsole() // 除加此句外，v2.5.2可以直接使用

console.log('test')

faskclick.attach(document.body) // 去除300ms的延迟

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('@/common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
