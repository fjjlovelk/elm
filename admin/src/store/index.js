import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadURL: 'http://localhost:3000/api/uploads',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
