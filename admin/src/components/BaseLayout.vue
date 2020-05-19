<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{menu}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{subMenu}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return sessionStorage.getItem('menu')
    },
    subMenu() {
      return sessionStorage.getItem('subMenu')
    }
  }
}
</script>

<style scoped>
.el-card {
  margin-top: 15px;
  box-shadow: 0 1px 1px rgba(0,0,0,.15);
}
</style>