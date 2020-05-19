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
    redirect: '/homePage',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: '/adminList',
        name: 'AdminList',
        component: () => import('../views/admin/AdminList.vue')
      },
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
        path: '/shopCategory',
        name: 'ShopCategory',
        component: () => import('../views/shop/ShopCategory.vue')
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

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !sessionStorage.getItem('token')) {
    return next('/login')
  }
  next()
})

export default router
