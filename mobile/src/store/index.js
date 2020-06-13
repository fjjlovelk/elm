import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false || sessionStorage.getItem('isLogin'),
    username: '' || sessionStorage.getItem('username'),
    cart_data: JSON.parse(localStorage.getItem('cart_data')) || {}
  },
  mutations: {
    changeLoginState(state, payload) {
      state.isLogin = payload.msg
      if (payload.clear) {
        sessionStorage.removeItem('isLogin')
      } else {
        sessionStorage.setItem('isLogin', payload.msg)
      }
    },
    saveUsername(state, payload) {
      state.username = payload.msg
      if (payload.clear) {
        sessionStorage.removeItem('username')
      } else {
        sessionStorage.setItem('username', payload.msg)
      }
    },
    saveCart_data(state, msg) {
      state.cart_data = {}
      Object.assign(state.cart_data, msg)
      localStorage.setItem('cart_data', JSON.stringify(state.cart_data))
    }
  },
  actions: {
  },
  modules: {
  }
})
