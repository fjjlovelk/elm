<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.meta[0]}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.meta[1]}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.el-card {
  margin-top: 15px;
  box-shadow: 0 1px 1px rgba(0,0,0,.15);
}
</style>