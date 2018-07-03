import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import faskclick from 'fastclick'

import '@/common/stylus/index.styl'

faskclick.attach(document.body) // 去除300ms的延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
