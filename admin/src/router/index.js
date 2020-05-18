import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/userList',
          name: 'UserList',
          component: () => import('../views/user/UserList.vue')
        },
        {
          path: '/userData',
          name: 'UserData',
          component: () => import('../views/user/UserData.vue')
        },
        {
          path: '/shopList',
          name: 'ShopList',
          component: () => import('../views/shop/ShopList.vue')
        },
        {
          path: '/shopSort',
          name: 'ShopSort',
          component: () => import('../views/shop/ShopSort.vue')
        },
        {
          path: '/shopEdit',
          name: 'ShopEdit',
          component: () => import('../views/shop/ShopEdit.vue')
        },
        {
          path: '/foodList',
          name: 'FoodList',
          component: () => import('../views/food/FoodList.vue')
        },
        {
          path: '/foodSort',
          name: 'FoodSort',
          component: () => import('../views/food/FoodSort.vue')
        },
        {
          path: '/FoodEdit',
          name: 'FoodEdit',
          component: () => import('../views/food/FoodEdit.vue')
        },
        {
          path: '/orderList',
          name: 'OrderList',
          component: () => import('../views/order/OrderList.vue')
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
