import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/shop/:shopId',
    component: () => import('../views/home/Shop.vue'),
    props: true
  },
  {
    path: '/preview/:shopId',
    component: () => import('../views/home/Preview.vue'),
    props: true
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/Order.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/mine/Mine.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/mine/Login.vue')
  },
  {
    path: '/addressList/:shopId*',
    name: 'AddressList',
    component: () => import('../views/mine/AddressList.vue'),
    props: true
  },
  {
    path: '/addressEdit/:addressId*',
    name: 'AddressEdit',
    component: () => import('../views/mine/AddressEdit.vue'),
    props: true
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
