<template>
  <el-container>
    <el-header>
      <span>饿了吗后台管理系统</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          unique-opened
          :default-active="$route.path"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <el-submenu v-for="menu in navMenu" :index="menu.path" :key="menu.path">
            <template slot="title">
              <i class="iconfont" :class="menu.icon"></i>
              <span>{{menu.name}}</span>
            </template>
            <el-menu-item
              v-for="subMenu in menu.children"
              :index="subMenu.path"
              :key="subMenu.path"
            >
              <i class="el-icon-menu"></i>
              {{subMenu.name}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view :key="$route.path" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      navMenu: [
        {
          name: '管理员',
          path: '/adminList',
          icon: 'iconadmin',
          children: [{ name: '管理员列表', path: '/adminList' }]
        },
        {
          name: '用户管理',
          path: '/userList',
          icon: 'iconusers',
          children: [
            { name: '用户列表', path: '/userList' }
          ]
        },
        {
          name: '商家管理',
          path: '/shopList',
          icon: 'iconshetuan',
          children: [
            { name: '商家列表', path: '/shopList' },
            { name: '商家分类', path: '/shopCategory' },
            { name: '编辑商家', path: '/shopEdit' }
          ]
        },
        {
          name: '商品管理',
          path: '/goodsList',
          icon: 'iconfood',
          children: [
            { name: '商品列表', path: '/goodsList' }
          ]
        }
      ]
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 22px;
}
.el-aside {
  background-color: #333744;
}
.el-aside .el-menu {
  border-right: none;
}
.iconfont {
  padding-right: 10px;
}
.el-main {
  background-color: #eaedf1;
}
</style>