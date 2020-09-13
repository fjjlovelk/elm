import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element'
import './plugins/moment'

import './style/common.css'
import './assets/iconfont/iconfont.css'

import BaseLayout from './components/BaseLayout.vue'
Vue.component('base-layout', BaseLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
