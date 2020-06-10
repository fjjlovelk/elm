import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false || sessionStorage.getItem('isLogin'),
    username: '' || sessionStorage.getItem('username')
  },
  mutations: {
    changeLoginState(state, payload) {
      state.isLogin = payload.msg
      if(payload.clear) {
        sessionStorage.removeItem('isLogin')
      }else {
        sessionStorage.setItem('isLogin', payload.msg)
      }
    },
    saveUsername(state, payload) {
      state.username = payload.msg
      if(payload.clear) {
        sessionStorage.removeItem('username')
      }else {
        sessionStorage.setItem('username', payload.msg)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
