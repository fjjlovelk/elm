import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: sessionStorage.getItem('isLogin') || false,
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
    shopDetail: JSON.parse(localStorage.getItem('shopDetail')) || {},
    cartData: JSON.parse(localStorage.getItem('cartData')) || {}
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
    saveUserInfo(state, payload) {
      state.userInfo = payload.msg
      if (payload.clear) {
        sessionStorage.removeItem('userInfo')
      } else {
        sessionStorage.setItem('userInfo', JSON.stringify(payload.msg))
      }
    },
    saveShopDetail(state, msg) {
      state.shopDetail = msg
      localStorage.setItem('shopDetail', JSON.stringify(state.shopDetail))
    },
    saveCartData(state, msg) {
      state.cartData = {}
      Object.assign(state.cartData, msg)
      localStorage.setItem('cartData', JSON.stringify(state.cartData))
    }
  },
  actions: {
  },
  modules: {
  }
})
