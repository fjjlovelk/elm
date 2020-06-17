import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: sessionStorage.getItem('isLogin') || false,
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
    shopDetail: JSON.parse(localStorage.getItem('shopDetail')) || {},
    cartData: JSON.parse(localStorage.getItem('cartData')) || {},
    deliveryPoi: JSON.parse(sessionStorage.getItem('deliveryPoi')) || ''
  },
  mutations: {
    changeLoginState(state, payload) {
      state.isLogin = payload.msg
      if (payload.clear) {
        sessionStorage.removeItem('isLogin')
      } else {
        sessionStorage.setItem('isLogin', state.isLogin)
      }
    },
    saveUserInfo(state, payload) {
      state.userInfo = payload.msg
      if (payload.clear) {
        sessionStorage.removeItem('userInfo')
      } else {
        sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
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
    },
    delCartData(state, msg) {
      delete state.cartData[msg]
      localStorage.setItem('cartData', JSON.stringify(state.cartData))
    },
    saveDeliveryPoi(state, payload) {
      state.deliveryPoi = payload.msg
      if (payload.clear) {
        sessionStorage.removeItem('deliveryPoi')
      } else {
        sessionStorage.setItem('deliveryPoi', JSON.stringify(state.deliveryPoi))
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
