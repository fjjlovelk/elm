<template>
  <div class="order">
    <div v-if="isLogin">订单</div>
    <div v-else class="tips">
      <div class="iconfont icon-meiyoudingdan"></div>
      <div>登录后查看外卖订单</div>
      <van-button type="primary" size="small" @click="$router.push('/login')">立即登录</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin
    })
  }
}
</script>

<style scoped>
.order {
  height: 100%;
}
.tips {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.iconfont {
  font-size: 80px;
  color: #409eff;
}
.van-button {
  margin-top: 10px;
}
</style>