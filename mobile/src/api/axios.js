import Vue from 'vue'
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_DEV_API || '/api/mobile/'
  // baseURL: 'http://localhost:3000/api/mobile/'
})

http.interceptors.request.use(config => {
  if(sessionStorage.getItem('token')){
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
  }
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  return res
}, err => {
  if(!err.response) {
    Vue.prototype.$toast.fail('无法连接服务器')
  }
  if(err.response.data.meta){
    Vue.prototype.$toast.fail(err.response.data.meta.message)
  }
  return Promise.reject(err)
})

export default http