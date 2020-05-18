import Vue from 'vue'
import axios from 'axios'

const http = axios.create({
  baseURL: ''
})

Vue.prototype.$http = http