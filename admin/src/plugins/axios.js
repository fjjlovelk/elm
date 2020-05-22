import Vue from 'vue'
import axios from 'axios'
import router from '../router'

const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
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
    Vue.prototype.$message.error('无法连接服务器')
  }
  if(err.response.data.meta){
    Vue.prototype.$message.error(err.response.data.meta.message)
  }
  if(err.response.status === 401){
    router.push('/login')
  }
  return Promise.reject(err)
})

Vue.prototype.$http = http