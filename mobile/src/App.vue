<template>
  <div id="app">
    <router-view />
    <van-tabbar route v-if="$route.path === '/home' || $route.path === '/order' || $route.path === '/mine'">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
</style>
