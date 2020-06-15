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
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/shop/:id',
    component: () => import('../views/home/Shop.vue'),
    props: true
  },
  {
    path: '/preview/:id',
    component: () => import('../views/home/Preview.vue'),
    props: true
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/Order.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/Mine.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/mine/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
