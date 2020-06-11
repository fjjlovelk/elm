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
        component: () => import('../views/admin/AdminList.vue'),
        meta: {
          keepAlive: true,
          navName: ['管理员', '管理员列表']
        }
      },
      {
        path: '/userList',
        name: 'UserList',
        component: () => import('../views/user/UserList.vue'),
        meta: {
          keepAlive: true,
          navName: ['用户管理', '用户列表']
        }
      },
      {
        path: '/userData',
        name: 'UserData',
        component: () => import('../views/user/UserData.vue'),
        meta: {
          keepAlive: true,
          navName: ['用户管理', '用户分析']
        }
      },
      {
        path: '/shopList',
        name: 'ShopList',
        component: () => import('../views/shop/ShopList.vue'),
        meta: {
          keepAlive: true,
          navName: ['商家管理', '商家列表']
        }
      },
      {
        path: '/shopCategory',
        name: 'ShopCategory',
        component: () => import('../views/shop/ShopCategory.vue'),
        meta: {
          keepAlive: true,
          navName: ['商家管理', '商家分类']
        }
      },
      {
        path: '/shopEdit',
        name: 'ShopEdit',
        component: () => import('../views/shop/ShopEdit.vue'),
        meta: {
          keepAlive: false,
          navName: ['商家管理', '商家编辑']
        }
      },
      {
        path: '/shopEdit/:id',
        component: () => import('../views/shop/ShopEdit.vue'),
        meta: {
          keepAlive: false,
          navName: ['商家管理', '商家编辑']
        },
        props: true
      },
      {
        path: '/goodsList',
        name: 'GoodsList',
        component: () => import('../views/goods/GoodsList.vue'),
        meta: {
          keepAlive: true,
          navName: ['商品管理', '商品列表']
        }
      },
      {
        path: '/goodsEdit/:id',
        name: 'GoodsEdit',
        component: () => import('../views/goods/GoodsEdit.vue'),
        meta: {
          keepAlive: false,
          navName: ['商品管理', '商品编辑']
        },
        props: true
      },
      {
        path: '/orderList',
        name: 'OrderList',
        component: () => import('../views/order/OrderList.vue'),
        meta: {
          keepAlive: true,
          navName: ['订单管理', '订单列表']
        }
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
