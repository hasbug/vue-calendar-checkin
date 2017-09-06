import Vue from 'vue'
import App from './App.vue'

import vueCheckin from './lib/index.js'

Vue.use(vueCheckin)

new Vue({
  el: '#app',
  render: h => h(App)
})
