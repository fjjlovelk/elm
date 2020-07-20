import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import './assets/iconfont/iconfont.css'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate', (val) => {
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
