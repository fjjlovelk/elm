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
        meta: ['管理员', '管理员列表']
      },
      {
        path: '/userList',
        name: 'UserList',
        component: () => import('../views/user/UserList.vue'),
        meta: ['用户管理', '用户列表']
      },
      {
        path: '/userData',
        name: 'UserData',
        component: () => import('../views/user/UserData.vue'),
        meta: ['用户管理', '用户分析']
      },
      {
        path: '/shopList',
        name: 'ShopList',
        component: () => import('../views/shop/ShopList.vue'),
        meta: ['商家管理', '商家列表']
      },
      {
        path: '/shopCategory',
        name: 'ShopCategory',
        component: () => import('../views/shop/ShopCategory.vue'),
        meta: ['商家管理', '商家分类']
      },
      {
        path: '/shopEdit',
        name: 'ShopEdit',
        component: () => import('../views/shop/ShopEdit.vue'),
        meta: ['商家管理', '商家编辑']
      },
      {
        path: '/shopEdit/:id',
        component: () => import('../views/shop/ShopEdit.vue'),
        meta: ['商家管理', '商家编辑'],
        props: true
      },
      {
        path: '/goodsList',
        name: 'GoodsList',
        component: () => import('../views/goods/GoodsList.vue'),
        meta: ['商品管理', '商品列表']
      },
      {
        path: '/goodsCategory',
        name: 'GoodsCategory',
        component: () => import('../views/goods/GoodsCategory.vue'),
        meta: ['商品管理', '商品分类']
      },
      {
        path: '/goodsEdit/:id',
        name: 'GoodsEdit',
        component: () => import('../views/goods/GoodsEdit.vue'),
        meta: ['商品管理', '商品编辑'],
        props: true
      },
      {
        path: '/orderList',
        name: 'OrderList',
        component: () => import('../views/order/OrderList.vue'),
        meta: ['订单管理', '订单列表']
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
