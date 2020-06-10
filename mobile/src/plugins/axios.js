import Vue from 'vue'
import axios from 'axios'

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
  return Promise.reject(err)
})

Vue.prototype.$http = http